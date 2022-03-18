import Realm from "realm";

class Contact extends Realm.object{}
Contact.schema = {
    name : "contact",
    properties: {
        recordID: 'string',
        givenName: 'string',
        familyName: 'string',
        phoneNumber: 'string'
    },
    primaryKey: 'recordID'
};

export default new Realm({schema: [Contact]});