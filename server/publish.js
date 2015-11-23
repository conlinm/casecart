Meteor.publish('specialty', function(){
  return Specialty.find();
});

Meteor.publish('surgeons', function(){
  return Surgeons.find();
});

Meteor.publish('medClass', function(){
  return MedClass.find();
});