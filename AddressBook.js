  
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
//function to create contact 
function createContact(contactArray)
{
try
{
var num=prompt("enter the number of contacts to be added : ");

while(num--)
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
contactArray.push(contactClassObject);
}
}
catch(e)
{
    console.log(e);
}
}
//function for iterate array
function iterateArray(contact)
{
    for(let i=0;i<contact.length;i++)
    {
        console.log(contact[i].toString()+"\n");
    }

}

function check()
{
    //creating a array
var contactArray=new Array();
while(true)
{
var option=console.log("Enter 1 to add details to addressbook \nEnter 2 to Display \nEnter 3 to Exit\n");
var c=prompt("enter a option");
switch(c)
{
    case "1":
        createContact(contactArray);
        break;
     case "2":
        iterateArray(contactArray);
        break;
        default:
            console.log("enter a valid option");
            break;
}
}
}
check();