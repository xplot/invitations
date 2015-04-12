InviteAttendeesView = Backbone.View.extend({
    template: JST['invite_attendees.html'],
    contacts: null,
    last_selected_item: null,

    initialize: function(options){
        this.options = options || {};
        this.inviteId = this.options.id;
    },

    events: {

        'click .new-contact' : 'newContact',
        'click .remove-contact': 'removeContact',
        'keyup .contact-input': 'newAttendeeEnter',
        'click .new-contact-button': 'newAttendeeButtonClick',
        'click .contact-input-container': 'focusOnClick'

    },

    render: function(data){
        this.model = data.attendees;
        this.invite_id = data.invite_id;
        var json = {
            attendees: this.model.toJSON()
        };
        this.$el.html(this.template(json));

        this.$table = this.$el.find('.contact-table');
        this.$newContact = $('.contact-input');
        this.plugins();

        this.listenTo(this.model, 'add', this.newContact);
        this.listenTo(this.model, 'remove', this.removeContact_DOM);

        return this.$el.html();
    },

    newAttendeeEnter: function(evt) {
        if (evt.keyCode != 13) {
            return;
        }
        this.$newContact.trigger('blur');
        this.newAttendeeButtonClick();
    },

    newAttendeeButtonClick: function() {
        var contact = null;
        var group = null;
        if(this.last_selected_item != null && this.last_selected_item.is_group)
            group = this.last_selected_item;
        else if(this.last_selected_item != null ){
            contact = this.last_selected_item;
        }

        if(this.last_selected_item == null && this.$newContact.val() != ''){
            if(!validator.validateItem(this.$newContact)){
                alert_notification([{alertType: 'warning', message: 'You have incorrect or missing fields!'}]);
                return;
            }

            var emailAndPhone = this.parsePhoneAndEmail(this.$newContact.val());
            contact = {
                unique_id:  guid(),
                name:       '',
                email:      emailAndPhone.email,
                phone:      emailAndPhone.phone
            };
        }

        this.$newContact.val('');
        this.last_selected_item = null;

        if(contact != null){
            this.model.add(new Contact(contact));
            contactModel.includeInInvite(this.invite_id);
        }

        if(group != null){
            var group = new Group({unique_id: group.unique_id});
            group.fetchContacts($.proxy(this.addAttendeesFromGroup));
        }

        this.$newContact.focus();
    },

    addAttendeesFromGroup: function(contactList){
        var that = this;
        data.forEach(function(item){
            that.model.add(contact);
        });
    },

    //start-AddContact
    newContact: function(contactModel){
        if(this.$table == null)
            this.$table = this.$el.find('.contact-table');
        this.$table.prepend(
            JST['contact-item-invite-create.html'](contactModel.toJSON())
        );

        return false;
    },
    //end-AddContact

    //start-RemoveContact
    removeContact:function(e){
        var dataId = $(e.currentTarget).data('rowid');
        this.model.removeBy(dataId);
    },
    removeContact_DOM: function (contact) {
        if(this.$table == null)
            this.$table = this.$el.find('.contact-table');
        this.$table.find('#' + contact.attributes.unique_id).remove();
    },
    //end-RemoveContact

    plugins: function(){
        this.setupContactsTypeahead();
    },

    setupContactsTypeahead: function(){
        var that = this;

        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');

                $.each(strs, function(i, contact) {
                    if (substrRegex.test(contact.name) || substrRegex.test(contact.email) || substrRegex.test(contact.phone))
                        matches.push(contact);
                });
            cb(matches);
            };
        };

        var substringGroupMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');

                $.each(strs, function(i, group) {
                    if (substrRegex.test(group.name)){
                        group.is_group = true;
                        matches.push(group);
                    }
                });
            cb(matches);
            };
        };

        var setupTypeAhead = function(contacts_and_groups){
            that.$newContact.typeahead({
                hint: true,
                highlight: true,
                minLength: 1,
            },
            {
                autoselect: true,
                name: 'contacts',
                displayKey: 'name',
                source: substringMatcher(contacts_and_groups.contacts),
                templates: {
                    header: '<h5 class="typeahead-contact-header">Contacts</h5>',
                    suggestion: JST['contact_item_typeahead.html']
                }
            },
            {
                autoselect: true,
                name: 'groups',
                displayKey: 'name',
                source: substringGroupMatcher(contacts_and_groups.groups),
                templates: {
                    header: '<h5 class="typeahead-group-header">Groups</h5>',
                    suggestion: _.template('<%- name %>')
                }

            }
            ).on('typeahead:selected', function (obj, data) {
                that.last_selected_item = data;
            })
            .on('keypress keydown input', function($e) {
                $e.stopPropagation();
            });
        };

        if(currentUser == null){
            setupTypeAhead([]);
            return;
        }

        that.all_contacts = new ContactList();
        that.model.fetchForCurrentUser(setupTypeAhead);
    },

    parsePhoneAndEmail: function(addressString){
        var trimmedAddressString = addressString.trim();
        var addresses = addressString.split(';');
        if(addresses.length == 1)
            addresses = addressString.split(',');

        for(var i=0; i < addresses.length; i++)
            addresses[i] = addresses[i].trim();

        //only 1 address (phone or email)
        if(addresses.length == 1){
            if(isNaN(addresses[0]))
                return {email: addresses[0], phone: ''};
            else
                return {phone: addresses[0], email: ''};
        }
        else{ //phone and email at the same time.
            if(isNaN(addresses[0]))
                return {email: addresses[0], phone: addresses[1]};
            else
                return {phone: addresses[0], email: addresses[1]};
        }
    },
});
