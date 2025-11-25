import {
  isComplete,
  execute,
  resetBuild,
  nextToken,
  tokenIndex,
} from "./game.js";
import { drawToken, setButtonToExecute, l1, l2, l3, renderTerminal} from "./dom.js";

export const forLoopTokens = [
  // for (int i = 0; i < 10; i++)
  { text: "for", class: "keyword" },
  { text: " ", class: "whitespace" },
  { text: "(", class: "symbol" },

  { text: "int", class: "keyword" },
  { text: " ", class: "whitespace" },
  { text: "i", class: "other" },
  { text: " ", class: "whitespace" },
  { text: "=", class: "other" },
  { text: " ", class: "whitespace" },
  { text: "0", class: "other" },
  { text: ";", class: "symbol" },
  { text: " ", class: "whitespace" },

  { text: "i", class: "other" },
  { text: " ", class: "whitespace" },
  { text: "<", class: "other" },
  { text: " ", class: "whitespace" },
  { text: "10", class: "other" },
  { text: ";", class: "symbol" },
  { text: " ", class: "whitespace" },

  { text: "i", class: "other" },
  { text: "++", class: "other" },
  { text: ")", class: "symbol" },
  { text: " ", class: "whitespace" },
  { text: "{", class: "symbol" },

  // System.out.println(i);
  { text: "    ", class: "indent" },
  { text: "System", class: "keyword" },
  { text: ".", class: "symbol" },
  { text: "out", class: "property" },
  { text: ".", class: "symbol" },
  { text: "print", class: "function" },
  { text: "(", class: "symbol" },
  { text: "i", class: "other" },
  { text: ")", class: "symbol" },
  { text: ";", class: "symbol" },

  { text: "}", class: "symbol" },
];

export const forLoopOutput = [
    "java ForLoop",
    "> 0123456789"
]

const line1Count = 24;
const line2Count = 9;
const line3Count = 1;

export let forLoopExecutionCount = 0;

export function handleForLoop() {
  if (isComplete(forLoopTokens)) {
    execute(100);
    forLoopExecutionCount++
    renderTerminal(forLoopOutput, forLoopExecutionCount)
    resetBuild();
  } else {
    if (tokenIndex < line1Count) {
        drawToken(nextToken(forLoopTokens), l1)
    } else if (tokenIndex <= line1Count + line2Count) {
        drawToken(nextToken(forLoopTokens), l2)
    } else {
        drawToken(nextToken(forLoopTokens), l3)
    }
    if (tokenIndex >= forLoopTokens.length) {
      setButtonToExecute();
    }
  }
}
