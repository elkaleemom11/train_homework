$(document).ready(function () {
	// 1. My Firebase config information

	var config = {
		apiKey: "AIzaSyCQSs6lVaJVObXQ5POiz7wzk-mXLQFzoeA",
		authDomain: "train-schedule-67a42.firebaseapp.com",
		databaseURL: "https://train-schedule-67a42.firebaseio.com",
		projectId: "train-schedule-67a42",
		storageBucket: "train-schedule-67a42.appspot.com",
		messagingSenderId: "349587371888"
	};
	firebase.initializeApp(config);

	// 2. Created a Button for adding Trains
	$("#addTrainBtn").on("click", function () {

	});
	// 3. Created variables to store data into my Firebase database
	var trainName = "";
	var lineName = "";
	var destination = "";
	var trainTimeInput = "";
	var frequencyInput = "";

	// 4. Added On click information to variables
	$("#addUser").on("click", function () {
		trainName = $("#trainNameInput").val().trim();
		lineName = $("#lineInput").val().trim();
		destination = $("#destinationInput").val().trim();
		trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
		frequencyInput = $("#frequencyInput").val().trim();

		// 5. Pushing information into database where it will be stored
		firebase.database().ref().push({
			trainName = Name,
			lineName = line,
			destination = destination,
			trainTimeInput = trainTime,
			frequencyInput = frequency,

		})
	})
	firebase.database().ref().orderByChild("dateAdded"), limitToLast(1).on("child_added", function (snapshot) {
		$("#trainNameDisplay").html(snapshot.val().trainName);
		$("#lineNameDisplay").html(snapshot.val().line);
		$("#destinationDisplay").html(snapshot.val().destination);
		$("#trainTimeInputDisplay").html(snapshot.val().trainTime);
		$("#frequencyInputDisplay").html(snapshot.val().frequency);
	}

	// 6. Assign firebase variables to snapshots
	var firebaseName = childSnapshot.val().name;
	var firebaseLine = childSnapshot.val().line;
	var firebaseDestination = childSnapshot.val().destination;
	var firebaseTrainTimeInput = childSnapshot.val().trainTime;
	var firebaseFrequency = childSnapshot.val().frequency;

	var diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
	var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency;
	var minutes = firebaseFrequency - timeRemainder;

	var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");

	// Test for correct times and info
	console.log(minutes);
	console.log(nextTrainArrival);
	console.log(moment().format("hh:mm A"));
	console.log(nextTrainArrival);
	console.log(moment().format("X"));

	// Append train info to table on page
	$("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseLine + "</td><td>" + firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

})
