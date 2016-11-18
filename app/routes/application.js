import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return[
            Photo.creat({id: 1}),
            Photo.creat({id: 2}),
            Photo.creat({id: 3}),
            Photo.creat({id: 4}),
            Photo.creat({id: 5})
            ];
    }   
});
