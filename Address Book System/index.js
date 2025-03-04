const Contact = require("./Contact");
const AddressBook = require("./AddressBook");

const addressBook = new AddressBook();

try {
    const contact1 = new Contact("Thor", "Kumar", "123 Main St", "Asguard", "NY", "10001", "1234567890", "thor.kumar@example.com");
    const contact2 = new Contact("Bruce", "Wayne", "456 Elm St", "Gowtham", "CA", "90001", "9876543210", "bruce.wayne@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    console.log("All Contacts:");
    console.log(addressBook.toString());

    console.log("\nSorted by Name:");
    console.log(addressBook.sortByName().map(c => c.toString()).join("\n"));

    console.log("\nSearch by City (New York):");
    console.log(addressBook.searchByCity("New York").map(c => c.toString()).join("\n"));
} catch (error) {
    console.error(error.message);
}