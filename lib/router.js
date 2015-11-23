Router.configure({
	layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'tempSearchMain'});
Router.route('/admin', {name: 'tempAdmin'});
Router.route('/:name', {
  name: 'tempSpecialtyPage', 
  data: function () {return Specialty.findOne({name: Meteor.Collection.name(this.params.name)}); }
});
