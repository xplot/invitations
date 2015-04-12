this["JST"] = this["JST"] || {};

this["JST"]["add-group.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal addGroup-modal" tabindex="-1" >\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&amp;times;</button>\n            <h4 class="modal-title" id="myModalLabel">Add New Group</h4>\n            </div>\n            <div class="modal-body">\n                <input type="text" class="form-control new-group-input" />\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default close-dialog" data-dismiss="modal">Close</button>\n                <button type="button" class="btn btn-primary new-group-btn">Create</button>\n        </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["admin_edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="row">\n        <div id="invite-header"></div>\n    </div>\n    <div class="row">\n        <div class="col-md-6" id="invite-attendees"></div>\n        <div class="col-md-6" id="invite-edit"></div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["comment.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12 invite-comment-row">\n    <div class="col-xs-4 col-md-2 invite-comment-author">' +
__e(author) +
'</div>\n    <div class="col-xs-8 col-md-10">' +
__e(comment) +
'</div>\n</div>';

}
return __p
};

this["JST"]["contact-item-invite-create.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--<div id=\'' +
__e( unique_id ) +
'\'  class=\'contact-row col-md-12\' data-contact=\'' +
__e( name) +
';' +
__e(email) +
' ' +
__e(phone ) +
'\'>-->\n    <!--<div class=\'col-xs-8 col-xs-offset-2 col-md-10 col-md-offset-0\'>-->\n        <!--<b>' +
__e(name ) +
'</b> ' +
__e(email ) +
' ' +
__e(phone ) +
'-->\n    <!--</div>-->\n    <!--<div class=\'col-xs-8 col-xs-offset-2 col-md-2 col-md-offset-0\'>-->\n        <!--<button type=\'button\' class=\'btn btn-danger remove-contact\' data-rowid=\'' +
__e(unique_id ) +
'\'>-</button>-->\n    <!--</div>-->\n<!--</div>-->\n\n<div class="col-md-12 contact-item-details" id=\'' +
__e( unique_id ) +
'\'>\n    <span class="details"><b>' +
__e(name ) +
'</b> ' +
__e(email ) +
' ' +
__e(phone ) +
'</span>\n    <button type=\'button\' class=\'btn btn-danger remove-contact pull-right\' data-rowid=\'' +
__e(unique_id ) +
'\'>-</button>\n</div>\n';

}
return __p
};

this["JST"]["contact_item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="contact-row col-md-12 col-xs-12 col-sm-12" data-id="' +
__e( unique_id ) +
'" draggable="true">\n    <div class="editable col-md-3 col-xs-8 col-sm-4" >\n        ' +
__e( name ) +
'\n    </div>\n    <div class="editable desktop tablet col-md-3 col-sm-3">' +
__e( email ) +
'</div>\n    <div class="editable desktop tablet col-md-3 col-sm-3">' +
__e( phone ) +
'</div>\n    <div class="col-md-2 col-xs-4 update-column pull-right col-sm-2">\n        <a class="editable" href="#"><i class="fa-pen fa-1_2x"></i></a>\n        <a class="delete-contact" href="#"><i data-id="' +
__e( unique_id ) +
'" class="fa-delete-garbage-streamline fa-1_2x"></i></a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["contact_item_edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row" data-id="' +
__e( unique_id ) +
'">\n    <div class="editable col-md-3 col-xs-8">\n        <input id="edit-name" value="' +
__e( name ) +
'" placeholder="Name...">\n    </div>\n    <div class="desktop tablet col-md-3">\n        <input id="edit-email" value="' +
__e( email ) +
'" placeholder="Email...">\n    </div>\n    <div class="desktop tablet col-md-3">\n        <input id="edit-phone" value="' +
__e( phone ) +
'" placeholder="Phone...">\n    </div>\n    <div class="col-md-3 update-column">\n        <a href="#" class="finish-edit">OK</a>\n    </div>\n</div>';

}
return __p
};

this["JST"]["contact_item_typeahead.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="details" data-id="' +
__e( unique_id ) +
'"><b>' +
__e(name ) +
'</b> ' +
__e(email ) +
' ' +
__e(phone ) +
'</span>';

}
return __p
};

this["JST"]["editProfile.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="edit-profile-view">\n\n   <div class="col-xs-12 text-center">\n       <h4>Edit your profile</h4>\n   </div>\n\n   <div class="col-xs-12 text-center">\n       <div id="edit-profile-email">Email</div>\n   </div>\n\n   <div class="col-xs-12 text-center">\n       <input id="edit-profile-name" type="text" class="form-control valid-before-submit" placeholder="John Smith..." data-validation="required">\n   </div>\n\n   <div class="col-xs-12 text-center">\n       <input id="edit-profile-username" type="text" class="form-control valid-before-submit" placeholder="username..." data-validation="required">\n   </div>\n\n   <div class="col-xs-12 text-center">\n       <input id="edit_profile_password" name="edit_profile_password" type="password" class="form-control" placeholder="password...">\n   </div>\n\n    <div class="col-xs-12 text-center">\n       <input name="edit_profile_password_confirm" id="edit_profile_password_confirm" type="password" class="form-control" placeholder=" confirm password...">\n   </div>\n\n    <div class="col-xs-12 text-center">\n       <button type=\'button\' class=\'save-profile btn btn-info form-control\'>Save</button>\n    </div>\n\n</div>\n';

}
return __p
};

this["JST"]["edit_contact.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-horizontal contacts-form">\n  <div class="form-group">\n    <label for="nameInput">Name</label>\n    <input type="text" class="form-control contact_input" id="nameInput" placeholder="Jane Doe" data-validation="required">\n  </div>\n\n  <div class="form-group">\n    <label for="emailInput">Email contact</label>\n    <input type="email" class="form-control contact_input" id="emailInput" placeholder="jane.doe@example.com" data-validation="email">\n  </div>\n  <div class="form-group">\n    <label for="phoneInput">Phone number</label>\n    <input type="text" class="form-control contact_input" id="phoneInput" placeholder="123-456-7890" data-validation="phone">\n  </div>\n\n  <div class="form-group">\n    <a class="add-contact btn" id="save-contact">Add contact</a>\n  </div>\n</div>';

}
return __p
};

this["JST"]["group-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


    var color = randomColor();
    var inverse = colorInverter(color);
;
__p += '\n<div class="panel panel-default ' +
__e( panel_class ) +
'" data-id="' +
__e( unique_id ) +
'" id="panel_' +
__e( unique_id ) +
'">\n    <div class="panel-heading group-drop-area" role="tab" id="heading_' +
__e( unique_id ) +
'" data-id="' +
__e( unique_id ) +
'">\n        <div class="panel-title group-drop-area" data-id="' +
__e( unique_id ) +
'">\n            <a class="collapsed group-drop-area" data-toggle="collapse" data-parent="#groups_accordion" href="#collapse_' +
__e( unique_id ) +
'"\n               aria-expanded="false" aria-controls="collapse_' +
__e( unique_id ) +
'" data-id="' +
__e( unique_id ) +
'">\n                <div data-id="' +
__e( unique_id ) +
'" class="group-drop-area">\n                    ' +
__e( cut(name)) +
'<i style="float: right" class="fa fa-angle-down fa-1_5x"></i>\n                </div>\n            </a>\n      </div>\n    </div>\n    <div id="collapse_' +
__e( unique_id ) +
'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" >\n        <div class="panel-body group-box group-drop-area" data-id="' +
__e( unique_id ) +
'" id="groupbox_' +
__e( unique_id ) +
'">\n            Drop Here!!! <br/>\n            ';
_.each(contacts, function(contact) { ;
__p += '\n\n                <div class="col-md-5 group-contact">\n                    ' +
__e( cut(contact.name,8) ) +
'\n                </div>\n            ';
 }) ;
__p += '\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["invite.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="snap-panel invite-create">\n    <section data-panel="first" class="invite first">\n        <div class="zero-margin text-center invite-content ">\n            <div class="zero-margin">\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\n                    <h4>Event</h4>\n                </div>\n            </div>\n            <div class="">\n\n                ';
  if( currentUser == null )  { ;
__p += '\n                    <label class="small-text">\n                    Note: For sms/calls to work, you have to be a registered\n                    <br/>\n                    Note2: Sms/calls will be free only during the beta phase. After that a subscription base fee will be offered\n                    </label>\n                ';
 } ;
__p += '\n            </div>\n\n            <div class="zero-margin">\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\n                    <input type="text" class="form-control event-name-input valid-before-submit" placeholder="Event" autofocus data-validation="required" value="' +
__e(title) +
'" >\n                </div>\n            </div>\n\n            <div class="zero-margin">\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\n                    <h4>Details</h4>\n                </div>\n            </div>\n\n            <div class="zero-margin">\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\n                  <input type="text" class="form-control event-where-input" placeholder="Location...."  >\n                </div>\n            </div>\n\n            <div class="zero-margin">\n                <div class="col-xs-12  col-md-3 col-md-offset-2">\n                    <div class="date-group" id="start-date-group">\n                        <input readonly="true" required type="text" class="date event-start-date valid-before-submit" placeholder="01/01/2000" data-validation="required,date"  value="' +
__e(start_date ) +
'">\n                        <input readonly="true" required type="int" class="time event-start-time  valid-before-submit" placeholder="00:00 AM" data-validation="required"  value="' +
__e(start_time ) +
'">\n                    </div>\n                </div>\n                <div class="col-xs-12 col-md-2 text-center label-text">\n                    <h4>To</h4>\n                </div>\n                <div class="col-xs-12 col-md-3">\n                    <div class="date-group">\n                        <input readonly="true" required type="text" class="date event-end-date" placeholder="01/01/2000" value="' +
__e(end_date ) +
'">\n                        <input readonly="true" required type="text" class="time event-end-time" placeholder="00:00 AM"  value="' +
__e(end_time ) +
'">\n                    </div>\n                </div>\n            </div>\n            <div class="zero-margin desktop tablet small-margin-top">\n                <div class="col-xs-12 col-md-8 col-md-offset-2 ">\n                  <textarea class="form-control event-description-input" rows="6"></textarea>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\'row send-container col-xs-offset-0 col-xs-12 col-md-8 col-md-offset-2\'>\n            <div class="facebook_share pull-right">\n                <div>Share on Facebook</div>\n                <div><input type="checkbox"\n                   data-toggle="toggle"\n                   id="bt_toggle"\n                   class="share_to_facebook"\n                   data-style="android"\n                   data-on=" " data-off=" "\n                   data-onstyle="info"\n                   data-onstyle="success" data-offstyle="danger" />\n                </div>\n            </div>\n            <div class="">\n                <button type="button" class="btn form-control btn-success send">Create</button>\n            </div>\n\n        </div>\n    </section>\n</div>\n';

}
return __p
};

this["JST"]["inviteReport.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="invite-view">\n    <div class="panel">\n         <div class="panel-heading" >\n            <div class="zero-margin">\n                 <div class=\'pull-left col-xs-3 col-md-6\'><h2 class=\'invite-title\'></h2></div>\n                 <div class=\'col-xs-9 col-md-4 text-right\'>\n                    <div class=\'col-xs-12 col-md-12 invite-date\'></div>\n                 </div>\n            </div>\n         </div>\n        <div class="panel-body">\n            <div class="invite-view-content zero-margin small-margin-top">\n                <div class="col-md-6 attendees">\n                    <div class="row">\n                        <h4><b>Attendees</b></h4>\n                    </div>\n                    <div class="row invite-table">\n\n                    </div>\n                </div>\n                <div class="col-md-6 hangout">\n                    <h4><b>Hangout</b></h4>\n                    <div class="row invite-comments">\n                    </div>\n                    <input placeholder="Write a comment..." class="invite-newComment form-control ">\n                </div>\n            </div>\n        </div>\n     </div>\n\n    <!--<div class="invite-location"></div>-->\n\n\n</div>\n\n\n\n';

}
return __p
};

this["JST"]["invite_attendees.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="invite-attendees-box">\n<div class="row text-center">\n    <div class="col-md-12 text-left"><h4>Invite People</h4></div>\n</div>\n<div class="row">\n    <div class="contact-input-container col-md-12">\n        <input type="text" class="contact-input form-control"\n        ';
  if( features.indexOf('voice') != -1 )  { ;
__p += '\n        data-validation=\'required,email|phone\' placeholder=\'Name, Phone Number, Email\'\n        ';
 } else { ;
__p += '\n        data-validation=\'required,email\' placeholder=\'Email Address\'\n        ';
 } ;
__p += '>\n        <button type="button" class="btn new-contact-button form-control">+</button>\n    </div>\n</div>\n<div class="row contact-table-container">\n    <div class="contact-table">\n\n        ';
 _.each( attendees, function( item ){ ;
__p += '\n            <div class="col-md-12 contact-item-details" id=\'' +
__e( item.unique_id ) +
'\'>\n                <span class="details"><b>' +
__e(item.name ) +
'</b> ' +
__e(item.email ) +
' ' +
__e(item.phone ) +
'</span>\n                <button type=\'button\' class=\'btn btn-danger remove-contact pull-right\' data-rowid=\'' +
__e(item.unique_id ) +
'\'>-</button>\n            </div>\n        ';
 }); ;
__p += '\n\n    </div>\n</div>\n</div>';

}
return __p
};

this["JST"]["invite_edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n\n<div class="invite-edit-box col-md-6">\n    <div class="row small-margin-top">\n        <div class="col-md-6"><h5>Event Start Time</h5></div>\n        <div class="col-md-6"><h5>Event End Time</h5></div>\n    </div>\n    <div class="row">\n        <div class="col-md-6">\n            ';
  if( !edit_view )  { ;
__p += '\n                    ' +
__e( start_date ) +
' ' +
__e( start_time ) +
'\n            ';
 } else { ;
__p += '\n                <div class="date-group" id="start-date-group">\n                    <input readonly="true" required type="text" class="date event-start-date valid-before-submit" placeholder="01/01/2000" data-validation="required,date"  value="' +
__e(start_date ) +
'">\n                    <input readonly="true" required type="int" class="time event-start-time  valid-before-submit" placeholder="00:00 AM" data-validation="required"  value="' +
__e(start_time ) +
'">\n                </div>\n            ';
 } ;
__p += '\n\n        </div>\n        <div class="col-md-6">\n            ';
  if( !edit_view )  { ;
__p += '\n                    ' +
__e( end_date ) +
' ' +
__e( end_time ) +
'\n            ';
 } else { ;
__p += '\n                <div class="date-group" id="end-date-group">\n                    <input readonly="true" required type="text" class="date event-end-date" placeholder="01/01/2000" data-validation="date"  value="' +
__e(end_date ) +
'">\n                    <input readonly="true" required type="int" class="time event-end-time" placeholder="00:00 AM" data-validation=""  value="' +
__e(end_time ) +
'">\n                </div>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n    <div class="row small-margin-top">\n        <div class="col-md-12"><h5>Location</h5></div>\n    </div>\n    <div class="row">\n        ';
  if( !edit_view )  { ;
__p += '\n            <div class="col-md-10">' +
__e( where ) +
'</div>\n        ';
 } else { ;
__p += '\n            <div class="col-md-10">\n                <input type="text" class="form-control event-where-input" placeholder="Location...."  >\n            </div>\n        ';
 } ;
__p += '\n        <div class="col-md-2"><i class="fa fa-map-pin-streamline fa-15x"></i></div>\n    </div>\n    <div class="row small-margin-top">\n        <div class="col-md-6"><h5>Event Details</h5></div>\n    </div>\n    <div class="row description">\n        <div class="col-md-12">\n            ';
  if( !edit_view )  { ;
__p += '\n                ' +
__e( description ) +
'\n            ';
 } else { ;
__p += '\n                <textarea class="event-description-input"></textarea>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n    <div class="row small-margin-top">\n        <div class="facebook_share col-md-6">\n            Share on Facebook\n        </div>\n        <div class="col-md-6">\n            <input type="checkbox"\n               data-toggle="toggle"\n               id="bt_toggle"\n               class="share_to_facebook"\n               data-style="android"\n               data-on=" " data-off=" "\n               data-onstyle="info"\n               data-onstyle="success" data-offstyle="danger" />\n        </div>\n    </div>\n    <div class="row medium-margin-top">\n        ';
  if( !edit_view )  { ;
__p += '\n            <div class="col-no-padding col-md-12"><button type="button" class="btn form-control btn-success edit-button">Edit</button></div>\n        ';
 } else { ;
__p += '\n            <div class="col-no-padding col-md-12"><button type="button" class="btn form-control btn-success save-button">Save</button></div>\n        ';
 } ;
__p += '\n\n    </div>\n</div>';

}
return __p
};

this["JST"]["invite_header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="block block1 invite-background"\n     ';
 if (poster_image_id != null) {
         print("style='background-image: url(/image/" + poster_image_id + ")'")
    }
    else {
         print("style='background-image: url(/img/default_image.jpg)'")
    } ;
__p += '\n>\n    <div class="center-block">\n       <div class="invite-title-container">\n       </div>\n       <div class="upload">\n            <form id="upload_image_form" data-id="' +
__e( unique_id ) +
'" method="POST" enctype="multipart/form-data">\n                <input type="file" name="upload_image_file" id="upload_image_file" >\n            </form>\n            <button id="image_select_btn" class="btn btn-success">Change cover</button>\n       </div>\n\n    </div>\n\n</div>\n';

}
return __p
};

this["JST"]["invite_report.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<style>\n  .toggle.android { border-radius: 0px;}\n  .toggle.android .toggle-handle { border-radius: 0px; }\n</style>\n\n<div class="row equidistant invite_report">\n    <div class="col-xs-12 col-md-8 col-md-offset-2">\n\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["invite_sent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal-content">\n    <form id="registerForm">\n        <div class="close-modal" data-action="dismiss">\n            <div class="lr">\n                <div class="rl">\n                </div>\n            </div>\n        </div>\n\n        <div class="container">\n            <div class="row">\n                Invite Link <a href="http://imeet.io/view/';
  print(invite_id) ;
__p += '"><h5 class="text-lowercase">http://imeet.io/view/';
  print(invite_id) ;
__p += '</h5></a>\n            </div>\n            <div class="row small-margin-top"></div>\n            <div class="row">\n               Register\n               <div class="controls">\n                   <div class="col-sm-3"></div>\n                    <div class="col-sm-6">\n                        <div class="col-sm-9">\n                            <input required type="email" class="form-control register-email" placeholder="Enter email..." data-validation="email">\n                        </div>\n                        <div class="col-sm-3">\n                            <button type="button" class="btn btn-success form-control submit-register">Go</button>\n                        </div>\n                    </div>\n                    <div class="col-sm-3"></div>\n                </div>\n           </div>\n        </div>\n    </form>\n</div>\n';

}
return __p
};

this["JST"]["login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row medium-margin-top">\n   <div class="col-md-12 section-item contact-table equidistant">\n      <form id="loginForm" action="/login" method="post">\n          <section class="section">\n              <div class="row controls">\n                  <div class="col-sm-4"></div>\n                  <div class="col-sm-4 medium-margin">\n                      <h4>Login</h4>\n                      <fieldset>\n                          <div class="row">\n                              <div class="col-sm-1"></div>\n                              <div class="col-sm-10">\n                                  <input id="username" name="username" required type="text" class="form-control small-margin" placeholder="Username">\n                                  <input id="password" name="password" required type="password" class="form-control small-margin" placeholder="Password">\n                              </div>\n                              <div class="col-sm-1"></div>\n\n                          </div>\n                          <div class="row">\n                              <div class="col-sm-1"></div>\n                              <div class="col-sm-10">\n                                  <label class="remember pull-right" style="padding: 10px">\n                                    Remember me?\n                                    <input type="checkbox" name="remember_me" id="remember_me" value="on">\n                                  </label>\n                              </div>\n                              <div class="col-sm-1"></div>\n                          </div>\n                          <div class="row">\n                              <div class="col-sm-1"></div>\n                              <div class="col-sm-10"><button type="submit" class="btn btn-success form-control pull-right">Login</button></div>\n                              <div class="col-sm-1"></div>\n                          </div>\n\n                          <div class="row" style="margin-top: 20px">\n                              <div class="col-sm-1"></div>\n                              <div class="col-sm-10">\n                                  <div id="third_party_login">\n                                      <ul class="social-login-icons">\n                                          <li style="width: auto">\n\n                                          </li>\n                                          <li>\n                                              <a href="/social_login/google">\n                                                  <i class="fa fa-google fa-2x"></i>\n                                              </a>\n                                          </li>\n                                          <li>\n\n                                              <a href="/social_login/facebook">\n                                                  <i class="fa fa-facebook fa-2x"></i>\n                                              </a>\n                                          </li>\n                                      </ul>\n                                  </div>\n                              </div>\n                              <div class="col-sm-1"></div>\n                          </div>\n\n                          <div class="row" style="margin-top: 20px">\n                              <div class="col-sm-1"></div>\n\n                              <div class="col-sm-1"></div>\n                          </div>\n\n                          <div class="row">\n                              <div class="col-sm-1"></div>\n                              <div class="col-sm-10">\n                                  <label class="remember pull-right">\n                                      Don\'t have an account?\n                                      <a href="/register" class="">Sign Up - It\'s Free.</a>\n                                  </label>\n                              </div>\n                              <div class="col-sm-1"></div>\n                          </div>\n                      </fieldset>\n                  </div>\n                  <div class="col-sm-4"></div>\n              </div>\n          </section>\n        </form>\n    </div>\n</div>';

}
return __p
};

this["JST"]["register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="signup-container">\n    <div class="signup">\n        <h4>I want in!</h4>\n       <div class="row controls">\n           <div class="col-sm-3"></div>\n            <div class="col-sm-6">\n                <div class="col-sm-9">\n                    <input required type="email" class="form-control register-email" placeholder="Enter email..." data-validation="email">\n                </div>\n                <div class="col-sm-3">\n                    <button type="button" class="btn btn-success form-control submit-register">Go</button>\n                </div>\n            </div>\n            <div class="col-sm-3"></div>\n        </div>\n    </div>\n</div>\n\n<!-- Footer -->\n<div class="section-container footer desktop navbar-fixed-bottom">\n<div class="footer-below">\n    <div class="container">\n      <div class="row">\n          <div class="col-lg-12">\n              Miami, FL<br/>\n              Copyright 2014 &copy; iMeet Inc. All rights reserved.\n          </div>\n      </div>\n    </div>\n</div>\n</div>\n';

}
return __p
};

this["JST"]["search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="search-view">\n    <div class="controls zero-margin">\n        <div class="col-sm-10">\n            <input id="searchBox" type="text" class="form-control event-name" placeholder="Invite Title" data-validation="required">\n        </div>\n        <div class="col-sm-2">\n            <button type="button" class="btn btn-success form-control search">Search</button>\n        </div>\n    </div>\n    <div class="" style="height: 50px"></div>\n    <div class="controls search-result">\n    </div>\n</div>\n\n';

}
return __p
};