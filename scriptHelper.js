// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    let document = document.querySelector("input[name=missionTarget]");// Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput = "") {
   return "Empty"
   } else if (isNaN(Number(testInput)) ) {
    return "Not a Number"
   } else {
    return "Is a Number"
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
    alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" 
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel)=== "Not a Number" ) {
        alert("Make sure to enter valid information for each field!");
    }

    //use validateinput to finish formsubmission
    
//     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
    //    window.alert("All fields are required");
   
//    let document;
//    let pilot = "";
//    let copilot = "";
//    let fuelLevel = 0;
//    let cargoLevel = 0;
   
//    let form = document.querySelector("testForm");
//     form.addEventListener("submit", function(event) {
//         let pilotNameInput = document.querySelector("input[name=pilotName]");
//         let copilotNameInput = document.querySelector("input[name=copilotName]");
//         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
//         let cargoMassInput = document.querySelector("input[name=cargoMass]");
//         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === isNaN(value)
//          || cargoMassInput.value === isNaN(value)) {
//        alert("All fields are required");
//         }
//     });

   
}





// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         response.json().then( function(json)) {

//         }
//         });
        
//     return planetsReturned;
// }

function pickPlanet(planets) {
    let planets;
    //Math.random()
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
