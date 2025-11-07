const buttons = document.querySelectorAll(".box")
const start_btn = document.querySelector("#start")
const score_label = document.querySelector("#score")

let sequence = []
let entered_sequence = []
let allowInput = false
let level = 0


start_btn.addEventListener("click", () => {
    sequence = []
    entered_sequence = []
    allowInput = false
    level = 0
    start_btn.classList.add("hidden")
    addToSequence()
})

for (const btn of buttons) {
    btn.addEventListener("mousedown", e => {
        if(allowInput){
            handleClick(e)
        }
    })
}

async function addToSequence(){
    allowInput = false
    entered_sequence = []
    score_label.textContent = level

    const randInt = Math.floor(Math.random() * 4) + 1;

    sequence.push("b" + randInt)

    await new Promise(res => setTimeout(res, 1000));

    await playSequence()
    allowInput = true
}

async function playSequence() {
    for(const id of sequence){
        makeSound(id)
        makeGlow(id)
        await new Promise(res => setTimeout(res, 600));
    }
}

async function handleClick(e) {

    makeSound(e.target.id)
    entered_sequence.push(e.target.id)

    let index = entered_sequence.length - 1

    if (entered_sequence[index] !== sequence[index]) {
        console.log("Wrong entry")
        handleGameOver()
        return
    }

    if (arraysEqual(entered_sequence, sequence)) {
        console.log("Correct")
        level++
        await addToSequence()
    }
}

function handleGameOver() {
    allowInput = false;
    console.log("Game over")

    document.body.classList.add("gameover");
    setTimeout(() => {
        document.body.classList.remove("gameover");
    }, 500);

    
    score_label.textContent = "0";

    start_btn.classList.remove("hidden")

    alert("Game Over! Your score: " + (level));

}



function makeGlow(id){
    const btn = document.getElementById(id)
    btn.classList.add("glow")

    setTimeout(() => {
        btn.classList.remove("glow")
    }, 400)
}

function makeSound(id) {
    switch(id){
        case "b1":
            playTone(tones.green);
            break
        case "b2":
            playTone(tones.blue);
            break
        case "b3":
            playTone(tones.red);
            break
        case "b4":
            playTone(tones.yellow);
            break
    }
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}




function playTone(freq, duration = 300) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "sine"; // smooth sound
  oscillator.frequency.value = freq;

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  // quick fade out (prevents clicking)
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

  oscillator.start();
  oscillator.stop(ctx.currentTime + duration / 1000);
}

// Example Simon tones:
const tones = {
  green: 329.63,
  red: 261.63,
  yellow: 220,
  blue: 164.81
};
