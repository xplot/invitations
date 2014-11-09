UserProfileView = Backbone.View.extend({
    template: JST['editProfile.html'],
    initialize: function(options){
        this.options = options || {};
    },
    events: {
       'click .save-profile' : 'save'
    },

    render: function() {
        this.$el.html(this.template());

        this.$editProfileForm = this.$el.find('#editProfileForm');
        this.$name = this.$el.find('#edit-profile-name');
        this.$username = this.$el.find('#edit-profile-username');
        this.$password = this.$el.find('#edit_profile_password');
        this.$email = this.$el.find('#edit-profile-email');

        var that = this;
        $.ajax({
            url: "/api/profile/"+ currentUser.id,
            type: "GET",
            cache: false,
            success: function(data) {
                if(data.email != null){
                    that.$email.html(data.email);
                    that.$email.parent().addClass('floating-label-form-group-with-value');
                }

                if(data.username != null){
                    that.$username.val(data.username);
                    that.$username.parent().addClass('floating-label-form-group-with-value');
                }

                if(data.name != null){
                    that.$name.val(data.name + " " + data.last_name);
                    that.$name.parent().addClass('floating-label-form-group-with-value');
                }
            }
        });

    },

    save: function(){
        this.$editProfileForm.validate({
            rules: {
                edit_profile_password: {
                    minlength: 5
                },
                edit_profile_password_confirm: {
                    minlength: 5,
                    equalTo: "#edit_profile_password"
                }
            }
        });
        if(!this.$editProfileForm.valid())
            return;
        var user = {
          'username':   this.$username.val(),
          'password':   this.$password.val()
        };

        if(this.$name.val() != null) {
            user.name = this.$name.val().split(' ')[0];
            user.last_name = this.$name.val().split(' ')[1];
        }

        var that = this;
        $.ajax({
            url: "/api/profile/"+ currentUser.id,
            type: "POST",
            data: JSON.stringify(user),
            cache: false,
            success: function(data) {
                Backbone.pubSub.trigger('childClose', { 'view' : that } );
            }
        });

    }
});