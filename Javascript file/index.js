let mass;

const category = [
  "Severe Thinness",
  "Moderate Thinness",
  "Mild Thinness",
  "Normal",
  "Overweight",
  "Obese Class1",
  "Obese Class2",
  "Obese Class3",
];
const kg = [40, 35, 30, 25, 18.5, 17, 16, 0];
function calculate(val) {
  let result = document.querySelector(".result");
  if (val === "clear") {
    document.querySelector(".height").value = "";
    document.querySelector(".weight").value = "";
    result.style.display = "none";
    return;
  }
  let height = document.querySelector(".height").value;
  const weight = document.querySelector(".weight").value;
  height = height / 100;
  mass = weight / (height * height);
  mass = Math.round(mass * 10) / 10;
  result.style.display = "block";
  let bmi = document.querySelector(".bmi");
  let cat = "";
  let prev = 0;
  for (let i = 0; i < kg.length; i++) {
    if (mass >= kg[i]) {
      cat = category[7 - i];
      break;
    }
  }

  mass = mass + "kg/m2" + `(${cat})`;
  bmi.innerText = mass;
}

const alert = () => {
  let age = document.querySelector(".age").value;
  let alert = document.querySelector(".age-alert");
  if (age < 2 || age > 120) {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
  }
};

function checkH() {
  if (
    String(parseInt(document.querySelector(".height").value)) === "NaN" ||
    parseInt(document.querySelector(".height").value) <= 0
  ) {
    document.querySelector(".halert").style.display = "block";
  } else {
    document.querySelector(".halert").style.display = "none";
  }
}
function checkW() {
  if (
    String(parseInt(document.querySelector(".weight").value)) === "NaN" ||
    document.querySelector(".weight").value <= 0
  ) {
    document.querySelector(".walert").style.display = "block";
  } else {
    document.querySelector(".walert").style.display = "none";
  }
}
