/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const convertButton = document.getElementById("btn");

convertButton.addEventListener("click", convertLength);

function convertLength() {
  let metersFeet = inputBox.value * 3.281;
  let feetMeters = inputBox.value / 3.281;

  let lengthOutput = `${inputBox.value} meters = ${metersFeet.toFixed(3)}feet 
    | ${inputBox.value} feet = ${feetMeters.toFixed(3)} meters`;
  length.textContent = lengthOutput;
}

convertLength();

convertButton.addEventListener("click", convertVolume);

function convertVolume() {
  let litersGallons = inputBox.value * 0.264;
  let gallonsLiters = inputBox.value / 0.264;

  let volumeOutput = `${inputBox.value} liters = ${litersGallons.toFixed(
    3
  )} gallons 
    | ${inputBox.value} gallons = ${gallonsLiters.toFixed(3)} liters`;
  volume.textContent = volumeOutput;
}
convertVolume();

convertButton.addEventListener("click", convertMass);

function convertMass() {
  let kiloPounds = inputBox.value * 2.204;
  let poundsKilo = inputBox.value / 2.204;

  let massOutput = `${inputBox.value} kilos = ${kiloPounds.toFixed(3)} pounds
 | ${inputBox.value} pounds = ${poundsKilo.toFixed(3)} kilos`;

  mass.textContent = massOutput;
}

convertMass();
