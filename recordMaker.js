function person (name, address, phoneNumber, age, wombat) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.wombat = wombat;
}


function recordMaker (person) {
  
  console.log(person.name + " is " + person.age + " years old, and lives at " + person.address);
  if (person.wombat) {
    console.log("Calling " + person.name + " at " + person.phoneNumber + " about their wombat");
  } else {
    console.log(person.name + " doesn't have a wombat");
  }

}

var jimmyCarter = new person ("Jimmy Carter", "1 Dirt Road, Plains, Georgia", "800-Jim-Knows", 89, true);

recordMaker(jimmyCarter);