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

let realm = new Realm({schema: [Contact], schemaVersion: 4})

let getAllContacts = () => {
    return realm.Object('Contact')
}
let addContact = (_recordID, _givenName, _familyName, _phoneNumber) => {
realm.write(()=> {
    const Contact = realm.create('Contact',{
        recordID: _recordID,
        givenName: _givenName,
        familyName: _familyName,
        phoneNumber: _phoneNumber
    });
})
}
let deleteAllContact = ()=> {
    realm.write(()=> {
        realm.delete(getAllContacts)
    })
}
export default realm;

export {
    getAllContacts, addContact, deleteAllContact
}