import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    sayHello(d) {
      alert(this.get('joke.joke'))
    }
  }
});
