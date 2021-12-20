//  Object destructuring
//      1) numPlants returns 8, yearNeptuneDiscorvered returns 1846
//      2) discoveryYears returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//      3) "Your name is Alejandro and you like purple", "Your name is Melissa and you like green", "Your name is undefined and you like green"
//  Array destructuring
//      1) "Maya", "Marissa", "Chi"
//      2) "Raindrops on roses", "whiskers on kittens", ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
//      3) [10, 30, 20]

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let { numbers:{a, b} } = obj;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
