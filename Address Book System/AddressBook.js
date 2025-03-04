// UC 2: Ability to find existing contact person using their name and edit it

class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Add a new contact to the address book
    addContact(contact) {
        const isDuplicate = this.contacts.some(c =>
            c.firstName === contact.firstName && c.lastName === contact.lastName
        );
        if (isDuplicate) throw new Error("Duplicate contact found");
        this.contacts.push(contact);
    }

}

