(function() {
 
  const config = {
    apiKey: "AIzaSyC09k9QLQIhnbcRbyXj-IqgErM2s6BugW8",
    authDomain: "testprojectbotdev.firebaseapp.com",
    databaseURL: "https://testprojectbotdev.firebaseio.com",
    storageBucket: "testprojectbotdev.appspot.com",
    messagingSenderId: "217376507512"
  };
  firebase.initializeApp(config);

	// Get Elements
	// Logout
	const btnLogout = document.getElementById('btnLogout');

	
	//Add Logout Event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		window.location="index.html";
	});
	
	//console.log(firebase);
	//Removing The Hide
	//btnLogout.classList.remove('hide');
	
	
 }());