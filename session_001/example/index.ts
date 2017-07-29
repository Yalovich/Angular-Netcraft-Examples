class Person
{
    /**
     * Jsut say hello. Very gentle. 
     * @param name 
     */
    sayHello(name: string)
    {
        console.log("Hello ".concat(name));
    }
}

let person = new Person();
person.sayHello("Idan Yalovich");