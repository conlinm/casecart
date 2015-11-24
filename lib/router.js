Router.configure({
	layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'tempSearchMain'});
Router.route('/admin', {name: 'tempAdmin'});
Router.route('/specialty/:_id', {
  name: 'tempSpecialtyPage',
  template: 'tempSpecialtyPage', 
  data: function () {
  	var currentSpecialty = this.params._id;
  	return Specialty.findOne({_id: currentSpecialty});
  }
});
