import { clearLine, renderUpgrades, setButtonToBuild, updatePointsLabel } from "./dom.js";
import { handleHelloWorld } from "./helloWorld.js";
import { handleForLoop } from "./forLoop.js";

export let total_output_points = 150000;
export let power = 1;
export let rewardMultiplier = 1;
export let autoBuildPower = 0;

export const ranks = [
    {title: "Beginner Programmer", cost: 1000},
    {title: "Junior Develpoper", cost: 25000},
    {title: "Senior Developer", cost: 10000000}
];

export let rank = ranks[0];
export let tokenIndex = 0;

export function handleButtonPress() {
  if (rank === ranks[0]) {
    handleHelloWorld();
  } else if (rank === ranks[1]) {
    handleForLoop();
  }
}

export function updateOutputPoints(amount) {
  total_output_points += amount;
}

export function isComplete(tokenList) {
  return tokenIndex >= tokenList.length;
}

export function resetBuild() {
  tokenIndex = 0;
  clearLine();
}

export function execute(outputPointAmount) {
  setButtonToBuild();
  updateOutputPoints(outputPointAmount * rewardMultiplier);
  updatePointsLabel();
}

export function nextToken(tokenList) {
  const token = tokenList[tokenIndex];
  tokenIndex++;
  return token;
}

export function setPower() {
  power++;
}

export function setRewardMultiplier(amount) {
  rewardMultiplier += amount;
}

export function setAutoBuildPower() {
  autoBuildPower++;
}

export function upgradeRank(upg) {
  switch (rank) {
    case ranks[0]:
      rank = ranks[1];
      upg.desc = "Apply for a job as a senior developer"
      break;
    case ranks[1]:
      rank = ranks[2];
      upg.desc = "WIN"
      break;

    default:
      break;
  }

  upg.cost = rank.cost
  renderUpgrades()
  resetBuild()
}
