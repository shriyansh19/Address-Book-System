// UC 1: Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email...

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;

        // Validate inputs using regex
        this.validate();
    }
}