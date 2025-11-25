const main_btn = document.querySelector("#main-btn");
const main_btn_txt = document.querySelector("#main-btn-text");
const total_Output_points_label = document.querySelector(
  "#total-output-points"
);

// Lines
const l1 = document.querySelector("#l1-content");
const l2 = document.querySelector("#l2-content");
const l3 = document.querySelector("#l3-content");
const l4 = document.querySelector("#l4-content");
const l5 = document.querySelector("#l5-content");
const l6 = document.querySelector("#l6-content");

// Terminal
const t1 = document.querySelector("#t1-content");
const t2 = document.querySelector("#t2-content");
const execution_count_label = document.querySelector("#execute-count-label");
const t4 = document.querySelector("#t4-content");

// Total stats
let total_output_points = 1500;
let power = 1;
let rewardMultiplier = 1;
let rank = "Beginner Programmer";

// Game logic
let autoBuildPower = 0;

// Upgrades
const upgrades = [
  {
    id: "buildSpeed",
    title: "Build Speed +1",
    desc: "Adds one extra token per build click.",
    cost: 25,
    owned: 0,
    effect: () => {
      power += 1;
    },
  },
  {
    id: "runBoost",
    title: "Execution Boost +10%",
    desc: "Increases OP gained from executing code.",
    cost: 50,
    owned: 0,
    effect: () => {
      rewardMultiplier += 0.1;
    },
  },
  {
    id: "autoBuilder",
    title: "AI Completion +1",
    desc: "Automatically adds one token per second.",
    cost: 100,
    owned: 0,
    effect: () => {
      autoBuildPower += 1;
    },
  },
  {
    id: "promotion",
    title: "Promotion",
    desc: "Apply for a job as a junior developer",
    cost: 1000,
    owned: 0,
    effect: handlePromotion,
  },
];

const helloWorld = [
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
  { text: ";", class: "symbol" },
];

let helloWorldIndex = 0;
let helloWorldString = "";
let helloWorldExecutionCount = 0;

// Render buy panel to the left
renderUpgrades();

main_btn.addEventListener("click", () => {
  for (let i = 0; i < power; i++) {
    handleHelloWorld();
  }
});

function handleHelloWorld() {
  // reset when complete
  if (helloWorldIndex >= helloWorld.length) {
    execute();
  } else {
    const token = helloWorld[helloWorldIndex];

    // create styled span
    const span = document.createElement("span");
    span.textContent = token.text;
    span.classList.add(token.class);

    // append to the line
    l1.appendChild(span);

    helloWorldIndex++;

    if (helloWorldIndex >= helloWorld.length) {
      main_btn_txt.textContent = "Execute";
    }
  }
}

function execute() {
  helloWorldIndex = 0;
  helloWorldExecutionCount++;
  l1.innerHTML = "";
  main_btn_txt.textContent = "Build";

  t1.textContent = "java HelloWorld";
  t2.textContent = "> Hello World!";

  if (helloWorldExecutionCount > 1) {
    execution_count_label.textContent = helloWorldExecutionCount;
    execution_count_label.classList.add("count");
  }
  t4.textContent = "Process finished with exit code 0";

  updateOutputPoints(1 * rewardMultiplier);
}

function updateOutputPoints(amount) {
  total_output_points += amount;
  total_Output_points_label.textContent = total_output_points.toLocaleString(
    undefined,
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }
  );
}

function buyUpgrade(upg, index) {
  if (total_output_points >= upg.cost) {
    updateOutputPoints(-upg.cost);
    upg.owned++;
    upg.effect.call(upg);

    // Increase cost
    upg.cost = Number((upg.cost * 1.1).toFixed(1));

    // Update UI
    document.getElementById(`owned-${index}`).textContent = upg.owned;
    document.getElementById(`cost-${index}`).textContent =
      upg.cost.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      });
  }
}

function renderUpgrades() {
  const panel = document.getElementById("upgrade-panel");
  panel.innerHTML = ""; // clear old content

  const rankDisplay = document.createElement("div");
  rankDisplay.id = "rank-display";
  rankDisplay.textContent = `Rank: ${rank}`;
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

    // Hook up the buy button
    document.getElementById(`buy-${index}`).addEventListener("click", () => {
      buyUpgrade(upg, index);
    });
  });
}

function handlePromotion() {
  rank = "Junior Developer";
  this.desc = "Apply for a job as a Senior Developer";
  this.cost = 25000;
  this.owned = 0;
  renderUpgrades();
}

setInterval(() => {
  for (let i = 0; i < autoBuildPower; i++) {
    handleHelloWorld();
  }
}, 1000);
