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
        //UC2-->validating the property using regular expression
    let nameRegex = RegExp("^[A-Z][a-z]{2,}$");
    let emailRegex=RegExp("^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$");
    let addressRegex=RegExp("^[A-za-z]{4,}");
    let phoneRegex=RegExp("^[0-9]+\\s[0-9]{10}$");
    let zipRegex=RegExp('^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$');
    if(nameRegex.test(params[0]))
    {
        this.firstName=params[0];
    }
    else throw "Incorrect firstname";
    if(nameRegex.test(params[1]))
    {
        this.lastName=params[1];
    }
    else throw "Incorrect lastname";
    if(addressRegex.test(params[2]))
    {
        this.address=params[2];
    }
    else throw "Incorrect address";
    if(addressRegex.test(params[3]))
    {
        this.city=params[3];
    }
    else throw "Incorrect city";
    if(addressRegex.test(params[4]))
    {
        this.state=params[4];
    }
    else throw "incorrect state";
    if(zipRegex.test(params[5]))
    {
        this.zipCode=params[5];
    }
    else throw "Incorrecr zipcode";
    if(phoneRegex.test(params[6]))
    {
        this.phoneNumber=params[6];
    }
    else throw "Incorrect phone number";
    if(emailRegex.test(params[7]))
    {
        this.emailId=params[7];
    }
    else throw "Incorrect email id";
    }
    //tostring method
    toString()
   {
    return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zipCode+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.emailId)
   }
}
try
{
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
}
catch(e)
{
    console.log(e);
}