require('todos/vendor/jquery.min');
require('todos/vendor/handlebars');
require('todos/vendor/ember-1.0.0-rc.3');
require('todos/templates/todos');

App = Ember.Application.create();

App.Router.map(function() {
    this.route('todos', { path: '/todos' });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('todos');
    }
});

App.TodosRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('content', []);
    }
});

App.Todo = Ember.Object.extend({
  title: null,
  isDone: false
});

App.TodosController = Ember.ArrayController.extend({
  createTodo: function(title) {
    var todo = App.Todo.create({ title: title });
    this.pushObject(todo);
  },

  clearCompletedTodos: function() {
    this.filterProperty('isDone', true).forEach(this.removeObject, this);
  },

  remaining: function() {
    return this.filterProperty('isDone', false).get('length');
  }.property('@each.isDone'),

  isEmpty: function() {
    return this.get('length') === 0;
  }.property('length'),

  allAreDone: function(key, value) {
    if (arguments.length === 2) {
      this.setEach('isDone', value);

      return value;
    } else {
      return !this.get('isEmpty') && this.everyProperty('isDone', true);
    }
  }.property('@each.isDone')
});

App.CreateTodoView = Ember.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');

    if (value) {
      this.get('controller').send('createTodo', value);
      this.set('value', '');
    }
  }
});
