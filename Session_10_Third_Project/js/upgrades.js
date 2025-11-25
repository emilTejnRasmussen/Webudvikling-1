import { updateOutputPoints, total_output_points, upgradeRank, setAutoBuildPower, setPower, setRewardMultiplier } from "./game.js";
import { updatePointsLabel, renderUpgrades } from "./dom.js";

export const upgrades = [
  {
    id: "buildSpeed",
    title: "Build Speed +1",
    desc: "Adds one extra token per build click.",
    cost: 25,
    owned: 0,
    effect: () => setPower(),
  },
  {
    id: "runBoost",
    title: "Execution Boost +10%",
    desc: "Increases OP gained from executing code.",
    cost: 50,
    owned: 0,
    effect: () => setRewardMultiplier(0.1)
  },
  {
    id: "autoBuilder",
    title: "AI Completion +1",
    desc: "Automatically adds one token per second.",
    cost: 100,
    owned: 0,
    effect: () => setAutoBuildPower()
  },
  {
    id: "promotion",
    title: "Promotion",
    desc: "Apply for a job as a junior developer",
    cost: 1000,
    owned: 0,
    effect: (upg) => upgradeRank(upg)
  },
];

export function buyUpgrade(index) {
  const upg = upgrades[index];

  if (total_output_points >= upg.cost) {
    updateOutputPoints(-upg.cost);
    upg.owned++;
    upg.cost = Math.round(upg.cost * 1.1);
    upg.effect(upg);
    renderUpgrades()
    updatePointsLabel()
    return true;
  }
  return false;
}


