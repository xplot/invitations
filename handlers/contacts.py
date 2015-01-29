import logging
import uuid
import json

from managers.auth import user_context
from boilerplate.basehandler import BaseHandler
from base import JsonHandler
from google.appengine.ext import ndb
from models.models import Contact


class ContactHandler(BaseHandler):
    def get(self):
        if self.user is None:
            self.redirect_to('home')

        contactlist = Contact.query(Contact.user == self.user_key)\
            .order(Contact.name)\
        .fetch()

        return self.render_template(
            'contacts.html',
            contacts=contactlist or [],
            show_search=len(contactlist) > 1
        )


class ApiContactHandler(JsonHandler):

    @user_context
    def add_contact(self):
        data = self._data()

        contact_data = data.get('contact', None)
        #TODO: Check if the name, email, phone exists.
        contact = Contact()
        contact.unique_id = str(uuid.uuid4()).replace('-', '')
        contact.name = contact_data['name']
        contact.email = contact_data['email']
        contact.phone = contact_data['phone']
        contact.user = self.user.key
        contact.put()

        return contact.unique_id

    def update_contact(self, unique_id):
        contact = Contact.query(Contact.unique_id == unique_id).get()

        if not contact:
            raise Exception("Contact not found")

        data = self._data()

        contact.name = data['name']
        contact.email = data['email']
        contact.phone = data['phone']
        contact.put()

        return unique_id

    def delete_contact(self, unique_id):
        contact = Contact.query(Contact.unique_id == unique_id).get()

        if not contact:
            raise Exception("Contact not found")

        contact.key.delete()
        return unique_id
