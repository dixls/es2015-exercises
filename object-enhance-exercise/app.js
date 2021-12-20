const createInstructor = (firstName, lastName) => ({firstName, lastName});

const favoriteNumber = 42;

let instructor1 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

let instructor = {
    firstName: "Colt",
    sayHi () {
        return "Hi!";
    },
    sayBye () {
        return this.firstName + " says bye!";
    }
}

const createAnimal = (species, call, sound) => {
    return {
        species,
        [call]() {
            return sound
        }
    }
}