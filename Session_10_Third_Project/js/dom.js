import { total_output_points, rank } from "./game.js";
import { upgrades, buyUpgrade } from "./upgrades.js";


// Lines
export const l1 = document.querySelector("#l1-content");
export const l2 = document.querySelector("#l2-content");
export const l3 = document.querySelector("#l3-content");
export const l4 = document.querySelector("#l4-content");
export const l5 = document.querySelector("#l5-content");
export const l6 = document.querySelector("#l6-content");

// Terminal
export const t1 = document.querySelector("#t1-content");
export const t2 = document.querySelector("#t2-content");
export const execution_count_label = document.querySelector(
  "#execute-count-label"
);
export const t4 = document.querySelector("#t4-content");

export const main_btn = document.querySelector("#main-btn-text");

export function updatePointsLabel() {
  document.querySelector("#total-output-points").textContent =
    total_output_points.toLocaleString();
}

export function drawToken(token, lineElement) {
  const span = document.createElement("span");
  span.textContent = token.text;
  span.classList.add(token.class);
  lineElement.appendChild(span);
}

export function clearLine() {
  l1.innerHTML = "";
  l2.innerHTML = "";
  l3.innerHTML = "";
  l4.innerHTML = "";
  l5.innerHTML = "";
  l6.innerHTML = "";
}

export function setButtonToExecute() {
  main_btn.textContent = "Execute";
}

export function setButtonToBuild() {
  main_btn.textContent = "Build";
}

export function renderTerminal(codeOutput, executionCount) {
  t1.textContent = codeOutput[0];
  t2.textContent = codeOutput[1];

  if (executionCount > 1) {
    execution_count_label.textContent = executionCount;
    execution_count_label.classList.add("count");
  }
  t4.textContent = "Process finished with exit code 0";
}

export function renderUpgrades() {
  const panel = document.querySelector("#upgrade-panel");
  panel.innerHTML = "";

  const rankDisplay = document.createElement("div");
  rankDisplay.id = "rank-display";
  rankDisplay.textContent = `Rank: ${rank.title}`;
  panel.appendChild(rankDisplay);

  upgrades.forEach((upg, index) => {
    const div = document.createElement("div");
    div.classList.add("upgrade");

    div.innerHTML = `
            <div class="upgrade-info">
                <h3 class="upgrade-title">${upg.title}</h3>
                <p class="upgrade-desc">${upg.desc}</p>
                <div class="upgrade-meta">
                    <span>Cost: <span id="cost-${index}">${upg.cost}</span> OP</span>
                    <span>Owned: <span id="owned-${index}">${upg.owned}</span></span>
                </div>
            </div>
            <button class="upgrade-buy" id="buy-${index}">Buy</button>
        `;

    panel.appendChild(div);
    document.getElementById(`buy-${index}`).addEventListener("click", () => {
      buyUpgrade(index);
    });
  });
}
