import { isComplete, execute, resetBuild, nextToken, tokenIndex } from "./game.js";
import { drawToken, setButtonToExecute, l1, renderTerminal } from "./dom.js";

export const helloWorld = [
  { text: "System", class: "keyword" },
  { text: ".", class: "symbol" },
  { text: "out", class: "property" },
  { text: ".", class: "symbol" },
  { text: "println", class: "function" },
  { text: "(", class: "symbol" },
  { text: '"', class: "string" },
  { text: "Hello ", class: "string" },
  { text: "World!", class: "string" },
  { text: '"', class: "string" },
  { text: ")", class: "symbol" },
  { text: ";", class: "symbol" }
];

export const helloWorldOutput = [
    "java HelloWorld",
    "> Hello World!"
]

export let helloWorldExecutionCount = 0

export function handleHelloWorld() {
    if(isComplete(helloWorld)){
        execute(1)
        helloWorldExecutionCount++
        renderTerminal(helloWorldOutput, helloWorldExecutionCount)
        resetBuild()
        
    } else{
        drawToken(nextToken(helloWorld), l1)
        if(tokenIndex >= helloWorld.length) {
            setButtonToExecute()
        }
    }
}