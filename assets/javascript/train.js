// create database
//create on click to add train info
// grab value from user input - send to db
// do child added function
// use moment js to convert time 
// should display on page

var config = {
  apiKey: "AIzaSyDF1-tUO8yp8oivPP5mRf_0Gn5Ov3PnM-M",
  authDomain: "train-schedule-37b41.firebaseapp.com",
  databaseURL: "https://train-schedule-37b41.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();


//adding trains



$("add-train-btn").on("click", function (event) {
  event.preventDefault();

  var tName = $("#train-name-input").val().trim();
  var tDest = $("#destination-input").val().trim();
  var tTime = $("#first-train-input").val().trim();
  var tFrequent = $("#how-frequent-input").val().trim();

 var newTrain = {

  name: tName,
  dest: tDest,
  time: tTime,
  frequent: tFrequent,

 };

 database.ref().push(newTrain);

alert("Train has been added!");


$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#how-frequent-input").val("");




}

)

database.ref().on("child_added", function(childSnapshot) {

var tName = childSnapshot.val().name;
var tDest = childSnapshot.val().dest;
var tTime = childSnapshot.val().time;
var tFrequent = childSnapshot.val().frequent;

var newRow = $("<tr>").append(
  $("<td>").text(empName),
  $("<td>").text(empRole),
  $("<td>").text(empStartPretty),
  $("<td>").text(empMonths),
  $("<td>").text(empRate),
  $("<td>").text(empBilled)
);
$("#train-table > tbody").append(newRow);


}

)
