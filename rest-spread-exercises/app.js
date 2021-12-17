const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(val => val * 2)];

const removeRandom = (items) => {
    const item = Math.floor(Math.random() * items.length)
    return [...items].filter(function(val, idx){
        return idx !== item
    })
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj}[key] = val);

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => ({ ...obj}[key] = val);