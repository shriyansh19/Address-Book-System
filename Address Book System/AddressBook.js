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

    // UC 6: Count the number of contacts in the address book
    countContacts() {
        return this.contacts.reduce(count => count + 1, 0);
    }

     // UC 8: Search contacts by city or state
     searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state === state);
    }

    // UC 9: View contacts grouped by city or state
    viewByCity() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = acc[contact.city] || [];
            acc[contact.city].push(contact);
            return acc;
        }, {});
    }

    viewByState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.state] = acc[contact.state] || [];
            acc[contact.state].push(contact);
            return acc;
        }, {});
    }

    // UC 10: Count contacts by city or state
    countByCity() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});
    }

    countByState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});
    }

    // UC 11: Sort contacts alphabetically by name
    sortByName() {
        return this.contacts.sort((a, b) =>
            a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName)
        );
    }

    // UC 12: Sort contacts by city, state, or zip
    sortByCity() {
        return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    sortByState() {
        return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    sortByZip() {
        return this.contacts.sort((a, b) => a.zip - b.zip);
    }

    // Convert all contacts to string format
    toString() {
        return this.contacts.map(contact => contact.toString()).join("\n");
    }

}

// Export the AddressBook class
module.exports = AddressBook;
