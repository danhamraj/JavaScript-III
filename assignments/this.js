/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 * When in the global scope, the value of “this” will be the window / console Object.
 * 
 * 2. Implicit Binding
 * Whenever a function is called by a preceding dot, the object before that dot is this.
 * It is most common principle.
 * Implict is automatic.It requires no settings.
 * It only applies to objects with methods.
 * when we log out the THIS keyword we get a different object each time it’ s run.
 * 
 * 3. New Binding
 * Whenever a constructor function is used, THIS refers to the 
 * specific instance of the object that is created and returned by the constructor function.
 * A constructor function is a function that returns an object. It’ s an object creator.
 * When we call it we have to use the new keyword.
 * 
 * 
 * 4. Explicit Binding
 * Whenever JS APPLY or CALL method is used THIS is fully and clearly defined.*It is used to invoke a
 function with a specific value for THIS.
 It tells a function what the ThIS keyword should be.
 It uses Call Apply and Bind
 CALL will immediately invoke the function whereas dot call passes in the arguments one by one
 Apply will do the same accept for dot Apply it passes the argument in an array.
 Bind will pass in arguments one by one but it does not immediately invoke the function but it
 returns a brand new function that can be used later.

 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function car() {
    console.log(this);
}
car();

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        //console.log(this);
    }
};
myObj.sayHello('Dan');

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(`${this.greeting} ${this.greeter}!`);
        //console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');
const rosanna = new CordialPerson('rosanna');

jerry.speak();
newman.speak();
rosanna.speak();

// Principle 4
jerry.speak.call(newman);
newman.speak.apply(jerry);

// code example for Explicit Binding