var prompt=require("prompt-sync")();
//UC1-->Create a addressbook
//contact class
class ContactClass
{
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
    constructor(...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zipCode=params[5];
        this.phoneNumber=params[6];
        this.emailId=params[7];
    }
    //tostring method
    toString()
   {
    return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zipCode+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.emailId)
   }
}
//getting the input from user 
firstName = prompt('Enter first name : ');
lastName = prompt('Enter last name : ');
address = prompt('Enter address : ');
city = prompt('Enter city name : ');
state = prompt('Enter state name : ');
zipCode = prompt('Enter ZipCode: ')
phoneNumber = prompt('Enter phone number :');
emailId= prompt('Enter EmailId : ');
//creating a object 
let contactClassObject=new ContactClass(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
//calling a tostring method
console.log(contactClassObject.toString());