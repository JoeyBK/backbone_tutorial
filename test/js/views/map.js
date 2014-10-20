/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.MapView = Backbone.View.extend({

    initialize: function (collections) {
        this.storyCollection = collections.storyCollection;
        this.lmap = L.mapbox.map('map', 'spotbrooklyn.06i7wrk9', {
            attributionControl: false,
            zoomControl: false
        });


    },

    resetMap: function () {
        var self = this;
        self.lmap.setView([40.685259, -73.977664], 10);
        this.currentLayer = new L.GeoJSON([]);

    },


    updateMarkerOnScroll: function(){
        var self = this;

        function renderMarker () {
            if(self.currentLayer){
                self.lmap.removeLayer(self.currentLayer);
            }
            var listItem =  $('.list_item');
            listItem.each(function(index){
                if($(this).offset().top <= 500) {
                    listItem.removeAttr('id', 'marker');
                    listItem.eq(index).attr('id', 'marker');
                }
            });
            var spotId = $('#marker div:first').attr('id');
            console.log(spotId);
            var currentSpot = self.storyCollection.get(spotId);
            var currentMarker = currentSpot.get("geometry");
            self.currentLayer = new L.GeoJSON(currentMarker);
            self.lmap.addLayer(self.currentLayer);
        }

        renderMarker();



        $('#list_container').on('scroll', function(){
            renderMarker();
        });
    }







});
