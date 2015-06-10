from google.appengine.ext import ndb

from models import InviteAttendee, Invite, InviteAttendeeNotification
from query.invite import InviteNotFoundException
from query.attendee import InviteAttendeeQuery


class InviteAttendeeByUserQuery(object):

    def __init__(self, invite_id, user):
        self.user = user
        self.invite_id = invite_id

    def query(self):
        """
        Returns an Attendee on the Invite containing the parameter user

        """

        invite = Invite.get_by_unique_id(self.invite_id)

        invite_attendee = InviteAttendee.query(ndb.AND(
            InviteAttendee.user == self.user.key,
            InviteAttendee.invite == invite.key,
        )).get()

        if not invite_attendee:
            return None

        return InviteAttendeeQuery(invite_attendee).query()
