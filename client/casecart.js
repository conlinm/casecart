

if (Meteor.isClient) {
  // This code is only run on the client
//HELPERS
  Template.tempSearchMain.helpers({
    specialty: function () {
      return Specialty.find({}, {sort: {name: 1}});
    }
  });
  //AddSurgeon Helpers
  Template.tempAddSurgeon.helpers({
    specialty: function () {
      return Specialty.find({}, {sort: {name: 1}});
    }
  });
  //AddRule helpers
  Template.tempAddRule.helpers({
    specialty: function () {
      return Specialty.find({}, {sort: {name: 1}});
    }
  });
  Template.tempAddRule.helpers({
    medClass: function () {
      return MedClass.find({}, {sort: {name: 1}});
    }
  });
  //AddException Helpers
  Template.tempAddException.helpers({
    specialty: function () {
      return Specialty.find({}, {sort: {name: 1}});
    },
    surgeon: function () {
      var currentSpecialty = Session.get("sessionSpecialty")
      return Surgeons.find({specialty: currentSpecialty}, {sort: {lastName: 1}});
    },
    medClass: function () {
      return MedClass.find({}, {sort: {name: 1}});
    }
  });
  
  Template.tempSpecialtyPage.helpers({
    rules: function(){
      var currentID = this._id;
      return Rules.find({specialtyID: currentID})
    },
    exceptions: function(){
      var currentID = this._id;
      return Exceptions.find({specialtyID: currentID})
    }
  });
  //EVENTS
  //AddSurgeon Events
  Template.tempAddSurgeon.events({"submit #formAddSurgeon": function(event){
      //prevent default browser form submit
      event.preventDefault();

      //get value from form element
      var firstName = event.target.firstName.value;
      var lastName = event.target.lastName.value;
      var specialty = event.target.specialty.value;
      var specialtyIDObject = Specialty.findOne({name: specialty}, {name: 0});
      var specialtyID = specialtyIDObject._id; 

      //insert a surgeon into the collection
      Surgeons.insert({
        firstName: firstName,
        lastName: lastName,
        specialty: specialty,
        specialtyID: specialtyID,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.firstName.value = "",
      event.target.lastName.value = "",
      event.target.specialty.value = "";

  }});
  //AddSpecialty Events
  Template.tempAddSpecialty.events({"submit #formAddSpecialty": function(event){
      //prevent default browser form submit
      event.preventDefault();

      //get value from form element
      var specialty = event.target.specialty.value;

      //insert a surgeon into the collection
      Specialty.insert({
        name: specialty,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.specialty.value = "";

  }});
  //AddMedClass Events
  Template.tempAddMedClass.events({"submit #formAddMedClass": function(event){
      //prevent default browser form submit
      event.preventDefault();

      //get value from form element
      var medClass = event.target.medClass.value;

      //insert a surgeon into the collection
      MedClass.insert({
        name: medClass,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.medClass.value = "";

  }});
  //AddRule Events
  Template.tempAddRule.events({"submit #formAddRule": function(event){
      //prevent default browser form submit
      event.preventDefault();

      //get value from form element
      var specialty = event.target.specialty.value;
      var medClass = event.target.medClass.value;
      var rule = event.target.rule.value;
      var specialtyIDObject = Specialty.findOne({name: specialty}, {name: 0});
      var specialtyID = specialtyIDObject._id;

      //insert a rule into the collection
      Rules.insert({
        medClass: medClass,
        rule: rule,
        specialtyID: specialtyID,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.specialty.value = "",
      event.target.medClass.value = "",
      event.target.rule.value = "";

  }});
    Template.tempAddException.events({"change #specialtySelect": function(event){
      event.preventDefault();
      // note! below. Needs to be just event.target.value, not the named form elemen
      // since I am taking the value only from the one "#specialtySelect" dom element
      var currentSpecialty = event.target.value;
      Session.set("sessionSpecialty", currentSpecialty);
  },
  "submit #formAddException": function(event){
      //prevent default browser form submit
      event.preventDefault();
      //get value from form element
      var surgeonLastName = event.target.surgeon.value;
      var specialty = event.target.specialty.value;
      var medClass = event.target.medClass.value;
      var rule = event.target.rule.value;
      var surgeonIDObject = Surgeons.findOne({lastName: surgeonLastName}, {name: 0});
      var specialtyID = surgeonIDObject.specialtyID;

      //insert a rule into the collection
      Exceptions.insert({
        surgeonLastName: surgeonLastName,
        medClass: medClass,
        rule: rule,
        specialtyID: specialtyID,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.specialty.value = "",
      event.target.surgeon.value = "",
      event.target.medClass.value = "",
      event.target.rule.value = "";

  },
  
});
  //AddRole Events
  Template.tempAddRole.events({"submit #formAddRole": function(event){
      //prevent default browser form submit
      event.preventDefault();

      //get value from form element
      var role = event.target.role.value;

      //insert a surgeon into the collection
      Role.insert({
        roleName: role,
        createdAt: new Date() //current time and date
      });

      //clear form
      event.target.role.value = "";

  }});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
