const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const bmi_label = document.querySelector("#bmi-result")
const calc_btn = document.querySelector("#calc-button")

calc_btn.addEventListener("click", () => {
    bmi_label.classList.remove("normal", "danger", "ok");
    console.log(height.value)
    
    if(weight.value === ""){
        bmi_label.textContent = "Add weight (kg)"
        return
    }
    if(height.value === ""){
        bmi_label.textContent = "Add height (cm)"
        return
    }

    const bmi = Number(weight.value) / Math.pow(Number(height.value) / 100, 2)

    const isHealthy = bmi < 25 && bmi >= 18.5
    const isSevere = bmi > 30 

    if (isHealthy) {
        bmi_label.classList.add("normal")
    } else if (isSevere) {
        bmi_label.classList.add("danger")
    } else {
        bmi_label.classList.add("ok")
    }
    bmi_label.textContent = "BMI = " + bmi.toFixed(1)
    
})
