function myFunction() {
	document.getElementById("demo").innerHTML="Paragraph changed.";
	popUsers();
}

var numUsers = 0;
var users;

class User {

  constructor(user, pass, name) {
	numUsers++;
    this.name = name;
	this.user = user;
	this.pass = pass;
  }

}

function popUsers() {
	user = new User("khenry", "123456", "Kathy Henry");
	user2 = new User("rjanowitz", "123456", "Richenda Janowitz");
	user3 = new User("acchatriwala", "123456", "Alefiya Chhatriwala");
	user4 = new User("jhall", "123456", "Jerold Hall");
	users = [user, user2, user3, user4];
}

function userCheck() {
	popUsers();
	var user = document.getElementById("inputUser").value
	var pass = document.getElementById("inputPassword").value

	for (var i = 0; i < users.length; i++) {
		if (users[i].user == user) {
			alert("SUCCESS");
			i = users.length;
			window.location.href = "home.html";
		}
		else {
		}
	}
	document.getElementById("signin").innerHTML="*Username or password are incorrect.";
}

// Start of main view - admin

var search;

function popSearch() {
	user1 = "khenry";
	user2 = "rjanowitz";
	user3 = "acchatriwala";
	user4 = "jhall";
	user5 = "jtorres";
	user6 = "rskiver";
	search = [user1, user2, user3, user4, user5, user6];
}

function userSearch() {
	
	popSearch();
	var user = document.getElementById("searchUser").value

		if (search.indexOf(user) > -1) {
			window.location.href = user.concat(".html");
		}
		else {
			alert("NO SUCH USERS");
		}

}

function openItem(choice) {
	if (choice == 0) {
		document.getElementById("allitems").innerHTML="NO MORE ITEMS TO SHOW.";
	}
	else {
		alert("FAIL");
	}
}

// START OF PROJECT PAGE

