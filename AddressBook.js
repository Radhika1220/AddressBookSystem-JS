
var prompt = require("prompt-sync")();

//UC1-->Create a addressbook
//contact class
class ContactClass {
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;
    //constructor
    constructor(...params) {
        //UC2-->validating the property using regular expression
        let nameRegex = RegExp("^[A-Z][a-z]{2,}$");
        let emailRegex = RegExp("^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$");
        let addressRegex = RegExp("^[A-za-z]{4,}");
        let phoneRegex = RegExp("^[0-9]+\\s[0-9]{10}$");
        let zipRegex = RegExp('^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$');
        if (nameRegex.test(params[0])) {
            this.firstName = params[0];
        }
        else throw "Incorrect firstname";
        if (nameRegex.test(params[1])) {
            this.lastName = params[1];
        }
        else throw "Incorrect lastname";
        if (addressRegex.test(params[2])) {
            this.address = params[2];
        }
        else throw "Incorrect address";
        if (addressRegex.test(params[3])) {
            this.city = params[3];
        }
        else throw "Incorrect city";
        if (addressRegex.test(params[4])) {
            this.state = params[4];
        }
        else throw "incorrect state";
        if (zipRegex.test(params[5])) {
            this.zipCode = params[5];
        }
        else throw "Incorrecr zipcode";
        if (phoneRegex.test(params[6])) {
            this.phoneNumber = params[6];
        }
        else throw "Incorrect phone number";
        if (emailRegex.test(params[7])) {
            this.emailId = params[7];
        }
        else throw "Incorrect email id";
    }
    //tostring method
    toString() {
        return ("Name: " + this.firstName + " " + this.lastName + " \t Address: " + this.address + " \t City: " + this.city + " \t State: " + this.state + " \t Pincode: " + this.zipCode + " \t Phone Number: " + this.phoneNumber + " \t Email Id: " + this.emailId)
    }
}
//function to create contact 
function createContact(contactArray) {
    try {
        var num = prompt("enter the number of contacts to be added : ");

        while (num--) {
            //getting the input from user 
            firstName = prompt('Enter first name : ');
            lastName = prompt('Enter last name : ');
            address = prompt('Enter address : ');
            city = prompt('Enter city name : ');
            state = prompt('Enter state name : ');
            zipCode = prompt('Enter ZipCode: ')
            phoneNumber = prompt('Enter phone number :');
            emailId = prompt('Enter EmailId : ');

            //creating a object 
            let contactClassObject = new ContactClass(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
            contactArray.push(contactClassObject);
        }
    }
    catch (e) {
        console.log(e);
    }
}
function Modify(address) {
    try {
        if (address.length > 0) {
            var name = prompt("enter first name");
            var res = address.find(x => x.firstName == name);
            if (res != null) {
                while (true) {
                    console.log("Enter the option to modify the property: ");
                    console.log("Enter 1 to Change First name ");
                    console.log("Enter 2 to Change Last name ");
                    console.log("Enter 3 to Change Phone Number ");
                    console.log("Enter 4 to Change Address ");
                    console.log("Enter 5 to Change City ");
                    console.log("Enter 6 to Change State ");
                    console.log("Enter 7 to Change Pincode ");
                    console.log("Enter 8 to Exit ");
                    let Check = prompt("enter option ");
                    switch (Check) {
                        case "1":
                            res.firstName = prompt("Enter the New First Name: ");
                            break;
                        case "2":
                            res.lastName = prompt('Enter new last Name: ');

                            break;
                        case "3":
                            res.address = prompt('Enter new address: ');

                            break;
                        case "4":
                            res.City = prompt('Enter new City Name: ');

                            break;
                        case "5":
                            res.State = prompt('Enter new State Name: ');

                            break;
                        case "6":
                            res.zip = prompt('Enter new zip: ');

                            break;
                        case "7":
                            res.phone = prompt('Enter new Phone Number: ');

                            break;
                        case "8":
                            res.email = prompt('Enter new Email ID: ');
                            break;
                        case "9":
                            return;
                    }
                }
            }
        }
    }

    catch (e) {
        console.log(e);
    }
}
//delete the contact using name
function Delete(contact) {
    var fName = prompt('Enter first name :');
    var lName = prompt('Enter last name: ');
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].firstName == fName && contact[i].lastName == lName) {
            contact.splice(i, 1);
            console.log("Deleted successfully");
            break;
        }
    }
}
//function for iterate array
function iterateArray(contact) {
    if (contact.length > 0) {
        for (let i = 0; i < contact.length; i++) {
            console.log(contact[i].toString() + "\n");
        }
    }
    else {
        console.log("No contacts present");
    }

}
function countOfContact(count) {
    return count + 1;
}
function check() {
    //creating a array
    var contactArray = new Array();
    while (true) {
     console.log("Enter 1 to add details to addressbook \nEnter 2 to Display \nEnter 3 to modify existing contact");
     console.log("\nEnter 4 to delete the contact\nEnter 5 to find count of addressbook\n");

        var c = prompt("enter a option");
        switch (c) {
            case "1":
                createContact(contactArray);
                break;
            case "2":
                iterateArray(contactArray);
                break;
            case "3":
                Modify(contactArray);
                break;
            case "4":
                Delete(contactArray);
                break;
            case "5":
                console.log("Total number of contacts in addressbook " + contactArray.reduce(countOfContact, 0));
                break;
            case "6":
                return;
            default:
                console.log("enter a valid option");
                break;
        }
    }
}
check();