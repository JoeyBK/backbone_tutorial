/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.AppRouter = Backbone.Router.extend({
    routes: {
        "": "loadList",
        "!": "loadList",
        "!:storyId": "loadStory",
        "!:storyId/:spotId": "loadSpot"
    },

    initialize: function (storyCollection, spotCollection) {
        this.storyCollection = storyCollection;
        this.spotCollection = spotCollection;
        this.map = new sbk.MapView({
            storyCollection: storyCollection,
            spotCollection: spotCollection
        });
    },

    loadList: function () {
        this.storyListView = new sbk.StoryListView({collection: this.storyCollection});
        $('#content_container').html(this.storyListView.render().el);
        this.map.resetMap();
        this.map.updateStoryMarkerOnScroll();
    },

    loadStory: function (storyId) {

        var story = this.storyCollection.get(storyId);

        this.spotListView = new sbk.SpotListView({collection: this.spotCollection});
        $('#content_container').html(this.spotListView.render().el);

        this.map.resetMap();
        this.map.renderStory(story);
    },

    loadSpot: function () {

    }

});