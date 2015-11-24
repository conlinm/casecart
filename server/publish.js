Meteor.publish('specialty', function(){
  return Specialty.find();
});

Meteor.publish('surgeons', function(){
  return Surgeons.find();
});

Meteor.publish('medClass', function(){
  return MedClass.find();
});
Meteor.publish('rules', function(){
  return Rules.find();
});
Meteor.publish('exceptions', function(){
  return Exceptions.find();
});
Meteor.publish('role', function(){
  return Role.find();
});