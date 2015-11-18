

if (Meteor.isClient) {
  // This code is only run on the client

  Template.tempSearchMain.helpers({
    specialty: function () {
      return Specialty.find({});
    }
  });
  Template.body.events({"submit.new-surgeon": function(event){
  		//prevent default browser form submit
  		event.preventDefault();

  		//get value from form element
  		var firstName = event.target.firstName.value;
  		var lastName = event.target.lastName.value;

  		//insert a surgeon into the collection
  		Surgeons.insert({
  			firstName: firstName,
  			lastName: lastName,
  			createdAt: new Date() //current time and date
  		});

  		//clear form
  		event.target.firstName.value = "",
  		event.target.lastName.value = "";

  }});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
