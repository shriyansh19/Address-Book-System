// UC 3: Ability to find existing contact person using their name and edit it

const Contact = require("./Contact");

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

    // UC 4: Ability to find existing contact person using their name and edit it
    findContactByName(firstName, lastName) {
        return this.contacts.find(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        );
    }

    editContact(firstName, lastName, updatedDetails) {
        const contact = this.findContactByName(firstName, lastName);
        if (!contact) throw new Error("Contact not found");
        Object.assign(contact, updatedDetails); // Update contact details
    }

    // UC 5: Delete a contact by first and last name
    deleteContact(firstName, lastName) {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact =>
            !(contact.firstName === firstName && contact.lastName === lastName)
        );
        if (this.contacts.length === initialLength) throw new Error("Contact not found");
    }

}

