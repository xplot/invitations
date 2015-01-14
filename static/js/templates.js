this["JST"] = this["JST"] || {};

this["JST"]["editProfile.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-content">\r\n        <div class="close-modal" data-action="dismiss">\r\n            <div class="lr">\r\n                <div class="rl">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="container">\r\n            <h4>Edit your profile</h4>\r\n           <div class="row controls">\r\n               <div class="col-sm-3"></div>\r\n                <div class="col-sm-6">\r\n                    <br/><br/>\r\n                    <div class="floating-label-form-group">\r\n                        <div id="edit-profile-email">Email</div>\r\n                    </div>\r\n                    <br/><br/>\r\n                    <div class="floating-label-form-group">\r\n                        <label for="edit-profile-name" class="fl">Full Name</label>\r\n                        <input id="edit-profile-name" type="text" class="form-control valid-before-submit" placeholder="John Smith..."\r\n                                data-validation="required">\r\n                    </div>\r\n                    <div class="floating-label-form-group">\r\n                        <label for="edit-profile-username" class="fl" data-validation="required">Username</label>\r\n                        <input id="edit-profile-username" type="text" class="form-control valid-before-submit" placeholder="username..." data-validation="required">\r\n                    </div>\r\n                    <div class="floating-label-form-group">\r\n                        <label for="edit-profile-username" class="fl" data-validation="required">Pasword</label>\r\n                        <input id="edit_profile_password" name="edit_profile_password" type="password" class="form-control valid-before-submit" placeholder="password..." data-validation="required">\r\n                    </div>\r\n                    <div class="floating-label-form-group">\r\n                        <label for="edit-profile-username" class="fl">Pasword Confirm</label>\r\n                        <input name="edit_profile_password_confirm" id="edit_profile_password_confirm" type="password" class="form-control valid-before-submit" placeholder=" confirm password..." data-validation="required">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="form-group col-xs-9 medium-margin">\r\n                <a class="btn btn-primary btn-lg save-profile pull-right" role="button">Save</a>\r\n            </div>\r\n        </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["invite.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="snap-panel invite-create">\r\n    <section data-panel="first" class="container invite first">\r\n        <div class="row text-center invite-content ">\r\n            <div class="">\r\n                <h4>Event</h4>\r\n            </div>\r\n            <div class="">\r\n\r\n                ';
  if( currentUser == null )  { ;
__p += '\r\n                    <label class="small-text">\r\n                    Note: For sms/calls to work, you have to be a registered\r\n                    <br/>\r\n                    Note2: Sms/calls will be free only during the beta phase. After that a subscription base fee will be offered\r\n                    </label>\r\n                ';
 } ;
__p += '\r\n            </div>\r\n            <div class="row">\r\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\r\n                    <input required type="text" class="form-control event-name valid-before-submit" placeholder="Event" autofocus data-validation="required" >\r\n                </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n                <div class="col-xs-12  col-md-3 col-md-offset-2">\r\n                    <div class="date-group" id="start-date-group">\r\n                        <input readonly="true" required type="text" class="date event-start-date valid-before-submit" placeholder="01/01/2000"\r\n                               data-validation="required,date"\r\n                        >\r\n                        <input readonly="true" required type="int" class="time event-start-time  valid-before-submit" placeholder="00:00 AM" data-validation="required" >\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-12 col-md-2 text-center label-text">\r\n                    To\r\n                </div>\r\n                <div class="col-xs-12 col-md-3">\r\n                    <div class="date-group">\r\n                        <input readonly="true" required type="text" class="date event-end-date" placeholder="01/01/2000">\r\n                        <input readonly="true" required type="text" class="time event-end-time" placeholder="00:00 AM"  >\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="row">\r\n                <div class="col-xs-12 col-md-8 col-md-offset-2">\r\n                  <textarea class="form-control event-description desktop tablet" rows="6"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row  menu-container menu-down">\r\n            <ul class="menu">\r\n                <li>\r\n                    <a href="" data-panel="second"><i class="fa fa-angle-down fa-5x"></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n        <section data-panel="second" class="container invite second">\r\n\r\n            <div class="row text-center invite-content ">\r\n                <div class="">\r\n                    <h4>Where</h4>\r\n                </div>\r\n\r\n                <div class="row">\r\n                    <div class="col-xs-8 col-md-6 col-md-offset-2">\r\n                        <input type="text" class="form-control event-address-street" placeholder="Address"  >\r\n                    </div>\r\n                    <div class="col-xs-4 col-md-2">\r\n                        <input type="text" class="form-control event-address-suite" placeholder="Apt"  >\r\n                    </div>\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-xs-12 col-md-4 col-md-offset-2">\r\n                        <input type="text" class="form-control event-address-city" placeholder="City"  >\r\n                    </div>\r\n\r\n                    <div class="col-xs-8 col-md-2">\r\n                        <select class="form-control event-address-state" placeholder="State">\r\n\r\n                        </select>\r\n                    </div>\r\n                    <div class="col-xs-4 col-md-2">\r\n                        <input type="text" class="form-control event-address-zip" placeholder="Zip"  >\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="row menu-container menu-down desktop tablet">\r\n                <ul class="menu">\r\n                    <li>\r\n                        <a href="" data-panel="third"><i class="fa fa-angle-down fa-5x"></i></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n\r\n        <section data-panel="third" class="container invite third">\r\n            <div class="row text-center invite-content ">\r\n                <div class="row2 text-center">\r\n                    <h4>Who is invited?</h4>\r\n                </div>\r\n\r\n                <div class="row zero-margin">\r\n                    <div class="col-md-4 col-md-offset-2">\r\n                        <input type="text" class="new-contact-name form-control" placeholder="Name">\r\n                    </div>\r\n\r\n                    <div class="col-md-3">\r\n                        <input type="text" class="new-contact-phone form-control"\r\n                            ';
  if( features.indexOf('voice') != -1 )  { ;
__p += '\r\n                                data-validation=\'required,email|phone\' placeholder=\'Phone Number or Email Address\'\r\n                            ';
 } else { ;
__p += '\r\n                                data-validation=\'required,email\' placeholder=\'Email Address\'\r\n                            ';
 } ;
__p += '\r\n                            name="newPhone" id="newPhone">\r\n                    </div>\r\n                    <div class="col-md-1">\r\n                        <button type="button" class="btn btn-info new-contact form-control">+</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="row2 contact-table">\r\n                </div>\r\n            </div>\r\n\r\n            <div class="row menu-container menu-down  desktop tablet">\r\n                <ul class="menu">\r\n                    <li>\r\n                        <a href="" data-panel="fourth"><i class="fa fa-angle-down fa-5x"></i></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n\r\n        <section data-panel="fourth" class="container invite fourth">\r\n            <div class="row text-center invite-content">\r\n                <div id="reportXXX"></div>\r\n            </div>\r\n\r\n             <div class="row  menu-container menu-down">\r\n                <button type="button" class="btn form-control btn-success send">Send</button>\r\n            </div>\r\n        </section>\r\n</div>\r\n\r\n<!--<ul class="menu">-->\r\n    <!--<li>-->\r\n        <!--<a href="" data-panel="first" class="active"><i class="fa fa-circle-line fa-1x"></i></a>-->\r\n    <!--</li>-->\r\n    <!--<li>-->\r\n\r\n    <!--</li>-->\r\n    <!--<li>-->\r\n        <!--<a href="" data-panel="third" ><i class="fa fa-circle-line fa-1x"></i></a>-->\r\n    <!--</li>-->\r\n    <!--<li>-->\r\n        <!--<a href="" data-panel="fourth" ><i class="fa fa-circle-line fa-1x"></i></a>-->\r\n    <!--</li>-->\r\n<!--</ul>-->\r\n\r\n<!-- Footer -->\r\n<div class="section-container footer desktop navbar-fixed-bottom">\r\n<div class="footer-below">\r\n    <div class="container">\r\n      <div class="row">\r\n          <div class="col-lg-12">\r\n              Miami, FL<br/>\r\n              Copyright 2014 &copy; iMeet Inc. All rights reserved.\r\n          </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="col-lg-12 quiet">\r\n            <br/>Built with love, Internet style\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["inviteReport.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-content">\n        <div class="close-modal" data-action="dismiss">\n            <div class="lr">\n                <div class="rl">\n                </div>\n            </div>\n        </div>\n        <div class="container">\n            <div class="row controls middle">\n                <h4><div class="invite-title pull-left"></div></h4>\n                <div class="pull-left">&nbsp;on&nbsp;</div>\n                <label class="invite-date pull-left"></label>\n            </div>\n\n            <div class="invite-location row pull-left">At Amelia EarthHeart Park, Hialeah, FL</div>\n\n            <div class="row medium-margin line"></div>\n\n\n            <div class="row">\n                <div class="col-md-8">\n                    <b>Attendees</b>\n                    <div class="invite-table"></div>\n                </div>\n\n                <div class="col-md-4">\n                    <b>Hangout</b>\n                    <ul class="invite-comments">\n\n                    </ul>\n                    <input placeholder="enter your comment here" class="invite-newComment">\n                </div>\n            </div>\n            <!--<div class="row medium-margin line"></div>-->\n        </div>\n    </div>\n';

}
return __p
};

this["JST"]["invite_report.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row equidistant invite_report">\r\n    <div class="col-xs-12 col-md-8 col-md-offset-2">\r\n        <div class="panel">\r\n         <div class="panel-heading" >\r\n                <div class="row">\r\n                     <div class=\'pull-left col-xs-3 col-md-6\'><h4 class=\'event-name\'></h4></div>\r\n                     <div class=\'col-xs-9 col-md-6 text-right\'>\r\n                        <div class=\'col-xs-12 col-md-12 event-start-date-formatted\'></div>\r\n                        <div class=\'col-xs-12 col-md-12 event-end-date-formatted\'></div>\r\n                     </div>\r\n                </div>\r\n             </div>\r\n         </div>\r\n\r\n          <div class="panel-body container">\r\n\r\n            <div class=\'left col-xs-12 col-md-6\'>\r\n                <div class=\' event-description\'></div>\r\n\r\n                <div class=\'small-margin-top event-where\'>\r\n                    <div class=\'label_title col-md-1 text-right\'>Address:</div>\r\n                    <div class=\'pull-left col-md-5 text-left small-margin-left\'>\r\n                        <div class=\'event-address-street-with-number\'></div>\r\n                        <div class=\'event-address-state-city\'></div>\r\n                        <div class=\'event-address-zip\'></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\' right col-xs-12 col-md-3\'>\r\n                <ul class="contact-read-table" style="list-style: none">\r\n\r\n                </ul>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["invite_sent.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal-content">\r\n    <form id="registerForm">\r\n        <div class="close-modal" data-action="dismiss">\r\n            <div class="lr">\r\n                <div class="rl">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="container">\r\n            <div class="row">\r\n                Invite Link <a href="http://imeet.io/view/';
  print(invite_id) ;
__p += '"><h5 class="text-lowercase">http://imeet.io/view/';
  print(invite_id) ;
__p += '</h5></a>\r\n            </div>\r\n            <div class="row small-margin-top"></div>\r\n            <div class="row">\r\n               Register\r\n               <div class="controls">\r\n                   <div class="col-sm-3"></div>\r\n                    <div class="col-sm-6">\r\n                        <div class="col-sm-9">\r\n                            <input required type="email" class="form-control register-email" placeholder="Enter email..." data-validation="email">\r\n                        </div>\r\n                        <div class="col-sm-3">\r\n                            <button type="button" class="btn btn-success form-control submit-register">Go</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-sm-3"></div>\r\n                </div>\r\n           </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n';

}
return __p
};

this["JST"]["register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-content">\r\n    <form id="registerForm">\r\n        <div class="close-modal" data-action="dismiss">\r\n            <div class="lr">\r\n                <div class="rl">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="container">\r\n            <h4>I want in!</h4>\r\n           <div class="row controls">\r\n               <div class="col-sm-3"></div>\r\n                <div class="col-sm-6">\r\n                    <div class="col-sm-9">\r\n                        <input required type="email" class="form-control register-email" placeholder="Enter email..." data-validation="email">\r\n                    </div>\r\n                    <div class="col-sm-3">\r\n                        <button type="button" class="btn btn-success form-control submit-register">Go</button>\r\n                    </div>\r\n                </div>\r\n                <div class="col-sm-3"></div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n';

}
return __p
};

this["JST"]["search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-content">\r\n    <div class="close-modal" data-action="dismiss">\r\n        <div class="lr">\r\n            <div class="rl">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="container">\r\n        <div class="row controls">\r\n            <div class="col-sm-10">\r\n                <input id="searchBox" type="text" class="form-control event-name" placeholder="Invite Title" data-validation="required">\r\n            </div>\r\n            <div class="col-sm-2">\r\n                <button type="button" class="btn btn-success form-control search">Go</button>\r\n            </div>\r\n        </div>\r\n        <div class="row" style="height: 50px"></div>\r\n        <div class="row search-result">\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};