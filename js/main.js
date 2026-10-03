document.querySelector('#clickMe').addEventListener('click', getInput)

function getInput(){

  const userCoinSelection = document.querySelector("#userCoinSelection").value; // need to have the .value to get the thing inputted

  fetch(`/api?coinFlip=${userCoinSelection}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#winOrLose").textContent = data.yourChoice
      document.querySelector("#headsOrTailsCalculationFromAPI").textContent = data.flipResult
      document.querySelector("#winOrLoseMessage").textContent = data.winOrLoseMessage
    });

}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }



