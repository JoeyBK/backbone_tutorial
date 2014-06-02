var map = L.mapbox.map('map', 'spotbrooklyn.i3jb181a').setView([40.685259, -73.977664], 11);

Stories = Backbone.Model.extend();

StoryCollection = Backbone.Collection.extend({
    model:Stories,
    url: 'js/data/story_data.json'
});

Spots = Backbone.Model.extend();

SpotCollection = Backbone.Collection.extend({
    model: Spots,
    url: 'js/data/spot_data.json'
});

StoryListView = Backbone.View.extend({
    id: 'list_container',
    initialize:function () {
        this.model.on("reset", this.render, this);
    },
    render:function (eventName) {
        _.each(this.model.models, function (story) {
            $(this.el).append(new StoryListItemView({model:story}).render().el);
        }, this);
        return this;
    }
});

StoryListItemView = Backbone.View.extend({
    className: 'list_item',
    template:_.template($('#list_item_template').html()),
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

StoryView = Backbone.View.extend({
    id: 'story_container',
    template:_.template($('#story_template').html()),
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

SpotView = Backbone.View.extend({
    id: 'story_container',
    template: _.template($('#spot_template').html()),
    render: function () {
        $(this.el).html(this.template(this.model));
        return this;
    }
});

var AppRouter = Backbone.Router.extend({
    routes:{
        "":"load_list",
        "story/:id":"load_story",
        "spot/:id":"load_spot"
    },
    initialize: function(storyListCollection){
        this.storyListCollection = storyListCollection;
    },
    load_list:function () {
        this.storyListView = new StoryListView({model:this.storyListCollection});
        $('#content_container').html(this.storyListView.render().el);
        if(map.hasLayer(this.markers)){
            map.removeLayer(this.markers);
        }
    },
    load_story:function (id) {
        this.story = this.storyListCollection.get(id);
        this.storyView = new StoryView({model:this.story});
        $('#content_container').html(this.storyView.render().el);
        this.geoData = this.story.attributes.spots;
        this.markers = L.geoJson(this.geoData, {
                onEachFeature: function(feature, layer) {
                    layer.on('click', function(){
                      location.href = '#spot/' + feature.properties.id;
                    });
                }
            }).addTo(map);
        this.button = $('#nav').on('click', function(){

        });
    },
    load_spot: function(id){
        console.log(id);
    }
});

$(document).ready(function() {
    var storyCollection = new StoryCollection();
    storyCollection.fetch({
        success: function () {

            var app = new AppRouter(storyCollection);
            Backbone.history.start();


        }
    });
});


/*load_spot: function (id){
    this.spot = this.spotCollection.get(id);
    var spot = new SpotView({model:this.spot});
    $('#content_container').html(spot.render().el);
}
});*/


