// case 1: global this referes to the window when not in strict mode -- watch out for this (it will create bugs)

// console.log("the global 'this'", this) // ???

function thisCheck() {
    // "use strict"
    console.log(this);
}

thisCheck();

const instanceOfThisCheck = new thisCheck();

// Case 2: 'this' refers to an instance of an object from within a method embedded in that object
const dog = {
    name: "Trotsky",
    breed: "Bernedoodle",
    color: "Black and Gray",
    thisCheck: function() {
        console.log(this) // prints out Trotsky
    }
}

dog.thisCheck();

// Case 3: DOM events and this -- when inside of a DOM event handler 'this' refers to the event.target
document.querySelector("button").addEventListener('click', function(e) {
    console.log(this.id, e.target.id)
});

// // Arrow functions and the this keyword
// class Dog {
//     constructor(name, breed, color, sound) {
//         this.name = name;
//         this.breed = breed;
//         this.color = color;
//         this.sound = sound;
//     }

//     speak(speakCount, speakSpeed) {
//         // given a speak count and speak speed the dog will bark that many times
//         console.log('outside of the setTimeout', this)
//         // old school way of fixing the this conundrum
//         // make a reference to the class's this to be used in the setTimeout
//         const classThisReference = this
//         setTimeout(function() {
//             console.log('inside the setTimeout', classThisReference)
//             // create a new element
//             const newSpeak = document.createElement('h2');
//             // set its properties
//             newSpeak.innerText = `${classThisReference.name} the ${classThisReference.breed} says ${classThisReference.sound}!`;
//             // append it to an exsiting element
//             document.querySelector('body').append(newSpeak);
//             // if we haven't exceeded the speak count we should go again
//             if (speakCount >= 0) {
//                 speakCount--;
//                 classThisReference.speak(speakCount, speakSpeed)
//             }
//         }, speakSpeed);
//     }
// }

const arrowThis = () => {
    'use strict'
    console.log(this)
}

arrowThis();

// what if functions could be use as object factories??
// old school way of doing classes
// constructor function
function Dog(name, breed, color, sound) {
    // refer to the 'this' keyword and mount properties on it
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sound = sound;
    this.speak = function() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

const leopold = new Dog("King Leopold", "Newphiepoo", "Black", "BOOF!");
leopold.speak(10, 500); 