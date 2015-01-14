InviteView = Backbone.View.extend({
    template: JST['inviteReport.html'],
    inviteId:null,

    initialize: function(options){
        this.options = options || {};
        this.inviteId = this.options.id;
    },
    contactToString: function(contact){
        var contactString = "<div>{0} {1} {2} <div style='width: 50px;float: left' class='{3}'>YES</div></div>";

        var confirmed = contact.sms_response != null
            || contact.voice_response != null || contact.email_response!= null
            || false;
        var item_class = "hidden";
        if(confirmed)
            item_class = 'confirmed';

        return contactString.format(
                contact.name || '',
                contact.phone || '',
                contact.email || '',
                item_class
        );
    },
    render: function(data){
        this.inviteId = data.invite_id;

        if(this.inviteId == null)
            console.error('Invite Id is null, check routing');

        this.$el.html(this.template());
        var that = this;
        $.ajax({
            url: "/api/invite/" + this.inviteId,
            type: "GET",
            cache: false,
            success: function(data) {
                var inviteTitle = $('.invite-title');
                var inviteDate = $('.invite-date');
                var inviteTable = $('.invite_report_attendees');

                inviteTitle.html(data.title);
                inviteDate.html(data.start);

                var contact_html = "\
            <div id='contact{3}' class='row contact-row small-margin' data-contact='{0},{1},{2}' > \
                    <div class='col-sm-2  desktop'> {0} </div> \
                    <div class='col-sm-2  desktop'>  {1} </div> \
                    <div class='col-sm-2  desktop'> {2}</div> \
                    <div class='col-sm-2  desktop'> {3}</div> \
                    <div class='col-sm-2  desktop'> {4}</div> \
                    <div class='col-sm-2  desktop'> {5}</div> \
                    <div class='col-xs-12  mobile tablet'> {6}</div> \
            </div> ";

                data.contacts.forEach(function(contact){
                    inviteTable.append(contact_html.format(
                        contact.name || 'N/A',
                        contact.phone || 'N/A',
                        contact.email || 'N/A',
                        contact.sms_response || '<span class="text-danger">N/A</span>',
                        contact.voice_response || '<span class="text-danger">N/A</span>',
                        contact.email_response || '<span class="text-danger">N/A</span>',
                        that.contactToString(contact)
                    ));

//                    for(var i=0;i<100;i++)
//                        inviteTable.append(contact_html.format(
//                        contact.name || 'N/A',
//                        contact.phone || 'N/A',
//                        contact.email || 'N/A',
//                        contact.sms_response || '<span class="text-danger">N/A</span>',
//                        contact.voice_response || '<span class="text-danger">N/A</span>',
//                        contact.email_response || '<span class="text-danger">N/A</span>',
//                        that.contactToString(contact)
//                    ));
                });

            }
        });
    }
});
