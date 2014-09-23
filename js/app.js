App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('posts');
});

App.PostsRoute = Ember.Route.extend({
	model : function(){
		return posts;
	}
});

var posts = [{
	id: 1,
	title: "Rails",
	author: {
		name: "pramod"},
	date: new Date('12-07-2013'),
	body: "I want this for my ORM, I want that for my template language, and lets finish it off."
},
{
	id: 2,
	title: "Rubby",
	author: {
		name: "abhijeet"},
	date: new Date('29-01-2013'),
	body: "I want this for my ORM, I want that for my template language, and lets finish it off."

},
{
	id: 3,
	title: "JS",
	author: {
		name: "anjinkya"},
	date: new Date('15-12-2012'),
	body: "I want this for my ORM, I want that for my template language, and lets finish it off."
}
]