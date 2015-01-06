/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.StoryListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'story-list-item',
    template: Handlebars.compile($('#story-list-item-template').html()),
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click' : 'vote'
    },
    vote: function (ev) {
        var self = this;
        $(this.el).css('box-shadow', '0 1px 1px 0px #888888');
        $.when(setTimeout( function() {
            $(self.el).css('box-shadow', '0 2px 5px 1px #888888');
        }, 75)).then(function(){

            if($(self.el).find('.fa-thumbs-up:last-of-type').hasClass('liked')){

                $(self.el).find('.liked').animate({
                    color: "#D3D3D3"
                });
                $(self.el).find('.fa-thumbs-up:last-of-type').removeClass('liked');

            } else {

                $(self.el).find('.fa-thumbs-up:first-of-type').fadeIn(500, function(){
                    setTimeout(function(){
                        $(self.el).find('.fa-thumbs-up:last-of-type').animate({
                            color: "red"
                        }).addClass('liked');
                        $(self.el).find('.fa-thumbs-up:first-of-type').fadeOut(500);
                    }, 200);
                });

            }





        });
        var vote = $(ev.currentTarget).attr('aria-label');
        var title = this.model.get('headline');
        ga('send', 'event', vote, 'click', title, 1);
    }
});