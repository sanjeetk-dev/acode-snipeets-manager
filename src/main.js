import plugin from '../plugin.json';
const DialogBox = acode.require('dialogBox');
const { snippetManager } = ace.require("ace/snippets");
import { snippets, htmlTags } from "./snippets.js";

const { editor } = editorManager;

const commandList = [
  {
    name: 'example-plugin',
    key: { win: 'Ctrl-E', mac: 'Command-E' },
    exec: () => {
      const myDialogBox = DialogBox(
        'Title',
        '<h1>Dialog content</h1>',
        'hideButtonText',
        'cancelButtonText'
      );
      myDialogBox.show();
    }
  }
];

function getCurrentFileType(session) {
  const sessionNme = session.getMode().$id;
  const sessionNmeParts = sessionNme.split("/");
  return sessionNmeParts[sessionNmeParts.length - 1];
}

class AcodeSnippetsManagaer {
  constructor() {
    this.setVariables();
    this.initializeAutoCompletion(snippets);
  }

  setVariables() {
    const { variables } = snippetManager;
    variables.FILE_NAME = () => {
      const fileNameWithExtension = editorManager.activeFile.filename;
      const lastDotIndex = fileNameWithExtension.lastIndexOf(".");
      return fileNameWithExtension.slice(0, lastDotIndex);
    };
  }

  initializeAutoCompletion(snippets) {
    this.reactCompleter = {
      getCompletions: (editor, session, pos, prefix, callback) => {
        const currentFileType = getCurrentFileType(session);
        const relevantSnippets = snippets.filter(s =>
          s.fileTypes.includes(currentFileType)
        );

        const useClassName = ["jsx", "tsx"].includes(currentFileType);
        const classAttr = useClassName ? "className" : "class";

        const snippetCompletions = relevantSnippets.map(snippet => ({
          caption: snippet.prefix,
          snippet: snippet.snippet,
          meta: snippet.type,
          value: snippet.snippet,
          type: "snippet",
          docHTML: snippet.description || "",
          icon: "icon snippet-icon"
        }));

        const tagCompletions = htmlTags.map(tag => ({
          caption: tag,
          snippet: `<${tag} ${classAttr}="$1">\n$2</${tag}>`,
          meta: "Tag",
          value: `<${tag} ${classAttr}="$1">\n$2</${tag}>`,
          type: "snippet",
          docHTML: `Create a <${tag}> tag with ${classAttr}`,
          icon: "icon snippet-icon"
        }));

        callback(null, [...snippetCompletions, ...tagCompletions]);
      }

    };
    editor.completers.unshift(this.reactCompleter);
  }

  init() {
    acode.addIcon("snippet-icon", this.baseUrl + "icon.png");
  }

  async destroy() {
    editor.completers.splice(
      editor.completers.indexOf(this.reactCompleter),
      1
    );
  }
}

function addCommands(commandsList) {
  for (const cmd of commandsList) {
    editor.commands.addCommand({
      name: cmd.name,
      bindKey: { win: cmd.key.win, mac: cmd.key.mac },
      exec: cmd.exec,
    });
  }
}

function removeCommands(commandsList) {
  for (const cmd of commandsList) {
    editor.commands.removeCommand(cmd.name);
  }
}

if (window.acode) {
  const acodePlugin = new AcodeSnippetsManagaer();

  acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init();
  });

  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
    removeCommands(commandList);
  });
}
