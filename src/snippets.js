export const htmlTags = [
  "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body",
  "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details",
  "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", 
  "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", 
  "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", 
  "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", 
  "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", 
  "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
];




export const snippets = [
  {
    prefix: "clg",
    snippet: "console.log($1)$2;",
    type: "Debug",
    description: "Logs output to the console",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "try",
    snippet: "try {\n  $1\n} catch (error) {\n  console.error(error);\n}",
    type: "Error Handling",
    description: "Basic try/catch block for error handling",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "imp",
    snippet: "import ${1:module} from '${1:module}';",
    type: "Import",
    description: "Import an ES module",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "fc",
    snippet: "const ${1:ComponentName} = () => {\n  return (\n    <div>$2</div>\n  );\n};\n\nexport default ${1:ComponentName};",
    type: "React",
    description: "Creates a functional React component",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "uef",
    snippet: "useEffect(() => {\n  $1\n}, [$2]);",
    type: "React Hook",
    description: "Creates a useEffect hook",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "usd",
    snippet: "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:null});",
    type: "React Hook",
    description: "Creates a useState hook",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "ife",
    snippet: "(function() {\n  $1\n})();",
    type: "Function",
    description: "Immediately Invoked Function Expression (IIFE)",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "rfc",
    snippet: "import React from 'react';\n\nexport default function ${1:ComponentName}() {\n  return (\n    <div>$2</div>\n  );\n}",
    type: "React",
    description: "React functional component with export",
    fileTypes: [
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "cb",
    snippet: "const ${1:callback} = useCallback(() => {\n  $2\n}, [$3]);",
    type: "React Hook",
    description: "useCallback hook",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "ctx",
    snippet: "const ${1:Context} = createContext(${2:null});",
    type: "React",
    description: "Creates a React context",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "typ",
    snippet: "type ${1:TypeName} = {\n  $2\n};",
    type: "TypeScript",
    description: "Creates a TypeScript type",
    fileTypes: [
      "ts",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "intf",
    snippet: "interface ${1:InterfaceName} {\n  $2\n}",
    type: "TypeScript",
    description: "Creates a TypeScript interface",
    fileTypes: [
      "ts",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "fmap",
    snippet: "${1:array}.map((${2:item}) => {\n  return $3;\n});",
    type: "Array",
    description: "Array map function",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "filter",
    snippet: "${1:array}.filter((${2:item}) => ${3:condition});",
    type: "Array",
    description: "Array filter function",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "jsonfmt",
    snippet: "JSON.stringify(${1:obj}, null, 2)",
    type: "JSON",
    description: "Pretty print a JSON object",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "useref",
    snippet: "const ${1:ref} = useRef(${2:null});",
    type: "React Hook",
    description: "Creates a useRef hook",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "memo",
    snippet: "const ${1:MemoComponent} = React.memo(function ${1}(${2:props}) {\n  return (\n    <div>$3</div>\n  );\n});",
    type: "React",
    description: "Memoized React component",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "cbf",
    snippet: "const ${1:callback} = useCallback(() => {\n  $2\n}, [$3]);",
    type: "React Hook",
    description: "Creates a memoized callback using useCallback",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "logerr",
    snippet: "console.error(${1:error});",
    type: "Debug",
    description: "Logs an error to the console",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "throw",
    snippet: "throw new Error('${1:Message}');",
    type: "Error Handling",
    description: "Throws a new error",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "prm",
    snippet: "new Promise((resolve, reject) => {\n  $1\n});",
    type: "Async",
    description: "Creates a new Promise",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "asyncf",
    snippet: "async function ${1:name}(${2:params}) {\n  try {\n    $3\n  } catch (error) {\n    console.error(error);\n  }\n}",
    type: "Async",
    description: "Async function with try/catch block",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "fetch",
    snippet: "const res = await fetch('${1:url}');\nconst data = await res.json();",
    type: "API",
    description: "Basic fetch request",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "logwarn",
    snippet: "console.warn('${1:Warning message}');",
    type: "Debug",
    description: "Console warn",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "usememo",
    snippet: "const ${1:memoizedValue} = useMemo(() => $2, [$3]);",
    type: "React Hook",
    description: "useMemo hook for memoization",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "swcase",
    snippet: "switch (${1:variable}) {\n  case '${2:value}':\n    $3\n    break;\n  default:\n    break;\n}",
    type: "Control Flow",
    description: "Switch case block",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "logtable",
    snippet: "console.table(${1:array});",
    type: "Debug",
    description: "Console table logging",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "timeout",
    snippet: "setTimeout(() => {\n  $1\n}, ${2:1000});",
    type: "Timing",
    description: "Set timeout",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "interval",
    snippet: "setInterval(() => {\n  $1\n}, ${2:1000});",
    type: "Timing",
    description: "Set interval",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "clear",
    snippet: "console.clear();",
    type: "Debug",
    description: "Clears the console",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "randint",
    snippet: "Math.floor(Math.random() * ${1:max});",
    type: "Utility",
    description: "Random integer up to max",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "clsbtn",
    snippet: "<button className=\"${1:btn}\">${2:Click}</button>",
    type: "HTML/React",
    description: "Simple styled button element",
    fileTypes: [
      "jsx",
      "tsx",
      "html"
    ],
    category: "Framework-Specific"
  },
  {
    prefix: "docsel",
    snippet: "document.querySelector('${1:.class}')",
    type: "DOM",
    description: "Select DOM element by query",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "forof",
    snippet: "for (const ${1:item} of ${2:array}) {\n  $3\n}",
    type: "Loop",
    description: "For...of loop",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "forin",
    snippet: "for (const ${1:key} in ${2:object}) {\n  if (${2:object}.hasOwnProperty(${1:key})) {\n    $3\n  }\n}",
    type: "Loop",
    description: "For...in loop",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "btnclick",
    snippet: "<button onClick={${1:handleClick}}>${2:Click}</button>",
    type: "React",
    description: "Button with onClick handler",
    fileTypes: [
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "inpctl",
    snippet: "<input type=\"text\" value={${1:value}} onChange={e => ${2:setValue}(e.target.value)} />",
    type: "React",
    description: "Controlled input field",
    fileTypes: [
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "logtime",
    snippet: "console.time('${1:label}');\n$2\nconsole.timeEnd('${1:label}');",
    type: "Debug",
    description: "Console timing",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "uuid",
    snippet: "crypto.randomUUID()",
    type: "Utility",
    description: "Generate UUID (ES2022+)",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "now",
    snippet: "new Date().toISOString()",
    type: "Date",
    description: "Current ISO timestamp",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "trimstr",
    snippet: "${1:str}.trim()",
    type: "String",
    description: "Trim string whitespace",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "arrpush",
    snippet: "${1:array}.push(${2:item});",
    type: "Array",
    description: "Push item into array",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "objassign",
    snippet: "Object.assign(${1:target}, ${2:source})",
    type: "Object",
    description: "Assign properties to object",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "spread",
    snippet: "{ ...${1:obj} }",
    type: "Object",
    description: "Object spread syntax",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "notnull",
    snippet: "if (${1:val} != null) {\n  $2\n}",
    type: "Conditional",
    description: "Check for non-null value",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "isarr",
    snippet: "Array.isArray(${1:arr})",
    type: "Type Check",
    description: "Check if variable is array",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "isdef",
    snippet: "typeof ${1:var} !== 'undefined'",
    type: "Type Check",
    description: "Check if variable is defined",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "jsonparse",
    snippet: "JSON.parse(${1:string})",
    type: "JSON",
    description: "Parse JSON string",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "isnull",
    snippet: "${1:val} === null",
    type: "Type Check",
    description: "Check if value is null",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "warn",
    snippet: "console.warn(${1:msg})",
    type: "Debug",
    description: "Warn log in console",
    fileTypes: [
      "js",
      "ts",
      "jsx",
      "tsx"
    ],
    category: "Universal"
  },
  {
    prefix: "setdoc",
    snippet: "document.title = '${1:Title}';",
    type: "DOM",
    description: "Set document title",
    fileTypes: [
      "js",
      "ts"
    ],
    category: "Universal"
  },
  {
    prefix: "fn",
    snippet: "function $1() {\n  $2\n}",
    type: "Function",
    description: "Basic function declaration",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "afn",
    snippet: "const $1 = () => {\n  $2\n}",
    type: "Function",
    description: "Arrow function expression",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "iife",
    snippet: "(function() {\n  $1\n})();",
    type: "Function",
    description: "Immediately invoked function expression (IIFE)",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "trycatch",
    snippet: "try {\n  $1\n} catch (error) {\n  console.error(error);\n}",
    type: "Error Handling",
    description: "Try-catch block for error handling",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "settimeout",
    snippet: "setTimeout(() => {\n  $1\n}, $2);",
    type: "Async",
    description: "setTimeout with arrow function",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "setinterval",
    snippet: "setInterval(() => {\n  $1\n}, $2);",
    type: "Async",
    description: "setInterval with arrow function",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "forloop",
    snippet: "for (let i = 0; i < $1; i++) {\n  $2\n}",
    type: "Loop",
    description: "Basic for loop",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "foreach",
    snippet: "$1.forEach(item => {\n  $2\n});",
    type: "Loop",
    description: "Array forEach loop",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "map",
    snippet: "$1.map(item => $2);",
    type: "Loop",
    description: "Array map method",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "reduce",
    snippet: "$1.reduce((acc, item) => {\n  $2\n}, $3);",
    type: "Loop",
    description: "Array reduce method",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "log",
    snippet: "console.log($1);",
    type: "Debug",
    description: "Log to console",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "error",
    snippet: "console.error($1);",
    type: "Debug",
    description: "Console error",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "impreact",
    snippet: "import React from 'react';",
    type: "React",
    description: "Import React",
    fileTypes: [
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "usestate",
    snippet: "const [$1, set$1] = useState($2);",
    type: "React",
    description: "React useState hook",
    fileTypes: [
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "useeffect",
    snippet: "useEffect(() => {\n  $1\n}, [$2]);",
    type: "React",
    description: "React useEffect hook",
    fileTypes: [
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "comp",
    snippet: "const $1 = () => {\n  return (\n    <div>$2</div>\n  );\n};",
    type: "React Component",
    description: "Basic functional React component",
    fileTypes: [
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "impuse",
    snippet: "import { useState, useEffect } from 'react';",
    type: "React",
    description: "Import common React hooks",
    fileTypes: [
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "asyncfn",
    snippet: "async function $1() {\n  try {\n    $2\n  } catch (error) {\n    console.error(error);\n  }\n}",
    type: "Async",
    description: "Async function with error handling",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "class",
    snippet: "class $1 {\n  constructor() {\n    $2\n  }\n}",
    type: "OOP",
    description: "Basic class structure",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "newpromise",
    snippet: "new Promise((resolve, reject) => {\n  $1\n});",
    type: "Async",
    description: "Create a new Promise",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "jsonstr",
    snippet: "JSON.stringify($1, null, 2);",
    type: "Utility",
    description: "Stringify JSON object with formatting",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "date",
    snippet: "const date = new Date();",
    type: "Utility",
    description: "Create current date object",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "includes",
    snippet: "$1.includes($2)",
    type: "Array",
    description: "Array includes check",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "some",
    snippet: "$1.some(item => $2);",
    type: "Array",
    description: "Array some() method",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "every",
    snippet: "$1.every(item => $2);",
    type: "Array",
    description: "Array every() method",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  },
  {
    prefix: "find",
    snippet: "$1.find(item => $2);",
    type: "Array",
    description: "Array find() method",
    fileTypes: [
      "js",
      "jsx"
    ],
    category: "Universal"
  }
];
