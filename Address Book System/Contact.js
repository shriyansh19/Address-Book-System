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

    // UC 2: Ability to ensure Valid Contacts are added...
    validate() {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 chars
        const addressRegex = /^[a-zA-Z0-9\s]{4,}$/; // Min 4 chars
        const zipRegex = /^\d{6}$/; // Exactly 6 digits
        const phoneRegex = /^\d{10}$/; // Exactly 10 digits
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(this.firstName)) throw new Error("Invalid First Name");
        if (!nameRegex.test(this.lastName)) throw new Error("Invalid Last Name");
        if (!addressRegex.test(this.address)) throw new Error("Invalid Address");
        if (!addressRegex.test(this.city)) throw new Error("Invalid City");
        if (!addressRegex.test(this.state)) throw new Error("Invalid State");
        if (!zipRegex.test(this.zip)) throw new Error("Invalid Zip Code");
        if (!phoneRegex.test(this.phone)) throw new Error("Invalid Phone Number");
        if (!emailRegex.test(this.email)) throw new Error("Invalid Email");
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }
}

// Export the Contact class
module.exports = Contact;