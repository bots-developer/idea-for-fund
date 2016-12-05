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
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogIn = document.getElementById('btnLogIn');
	const btnSignUp = document.getElementById('btnSignUp');
	const txtErrors = document.getElementById('errorMsg');
	const confMsgs = document.getElementById('confirmationMsg');
	
	// Logout
	/* const btnLogout = document.getElementById('btnLogout'); */
	
	//Add login Event
	
	btnLogIn.addEventListener('click', e => {
		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//Sign In
		
		const promise = auth.signInWithEmailAndPassword(email, pass);
		
		promise.catch(e => txtErrors.innerHTML = e.message);
		
	});
	
	//Ad signup event
	
	btnSignUp.addEventListener('click', e => {
		//Get email and pass
		// TODO: Check 4 REAL EMAILZ
		
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		
		//Sign In
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise
		//.then(user => console.log(user))
		//.catch(e => console.log(e.message));
		.catch(e => txtErrors.innerHTML = e.message);
		
		
	});
	
	/* //Add Logout Event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	}); */
	
	//console.log(firebase);
	//Removing The Hide
	//btnLogout.classList.remove('hide');
	
	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			confMsgs.innerHTML = "Successfully Signed In!";
			window.location="home_page.html";
	//Removing The Hide
	//btnLogout.classList.remove('hide');
	
		}	else{
			console.log('not logged in');
			txtErrors.innerHTML = "Username or Password Is Incorrect";
	//Removing The Hide
	//btnLogout.classList.add('hide');
			
		}
	});
	
	
 }());