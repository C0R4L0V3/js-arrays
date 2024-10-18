//~~~~~~~~~~~~~~~~CORA'S NOTES~~~~~~~~~~~~~~~~~`


/* JS Arrays

Arrays can store multiple types of data elements and store that information on a numeral index.

example below 
*/

const num1 = 34;
const num2 = 56;
const num3 = 12;

// instead of doing this you can do an array instead

const nums = [ 34, 56, 12];

// the number index starts at index 0, then 1, etc
// so numder 34 is at array index 0

// arrays can also store multipe different types of data aswell
//example

const randomStuff = ["pizza", 42, true, false, 91, "This string data is at array index 5"];

// this array has 6 elements but the total indexs go up to 5. indexes always start at index 0

console.log(randomStuff);

// nested Arrays

const nestArry = [0, 1, 2, 3, 4, [0, 1, 2, 3, 4,], 6]


console.log(nestArry[5][2]); //<<--- the first [] called the index location, the second [] calls the index location of the inner array

const multiArray = [ 
    ["arrayIndex 0.0", "0.1", "0.2", "0.3", "0.4",["arrayIndex 0.5.0", "0.5.1", "0.5.2", "0.5.3", "0.5.4"] , "0.6"], 
    ["arrayIndex 1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
    ["arrayIndex 2.0", "2.1", "2.2", "2.3", "2.4", "2.5"]
 ];

 console.log(multiArray[0][5][3]) // grabs  array element in index postiion 0.5.3
 console.log(multiArray[1][4]); // grabs array element in index position 1.4
 console.log(multiArray[2][2]); // grabs array element in index position 2.2

 console.log(multiArray.length); // array length is 3 even though there are multiple arrays nested
 console.log(multiArray[0][5].length); // this gives the length of the array nests at index 0.5


//  for (let i = 0; i < 3; i++){
//     if (i = 0){
//         console.log(multiArray[i][5]);       
//     } else {
//         console.log("this isn't the Array you are looking for");       
//     }
// }

// ^^ DANGER this causes an endless loop!
 
 
 // to change the element in an array you tagert the index postion

 randomStuff[3] = "this was element was a false booleen, now it is a string"

 console.log(randomStuff);
 
 
 // to remove an element from the end an array, you can use .pop

 randomStuff.pop() // this will remove the last element at the end of the array

// to add an element to the end of an array you  use .push("new element type")

randomStuff.push("Index 5")

// can I pop and push in a specifc location??

const testArray = ["random1", "random2", "random3", "random4"]

// these array has 4 elements, but i want to add one at the beginng that says "random0" so the that elemnet matchs the index position
//lets see if testArray[0].push(random0) works

// testArray[0].push(random0); //this did not work

// console.log[testArray]

// //lets try testArray.push[0](random0)

// testArray.push[0](random0) // this did not work 


// console.log[testArray] // this did not work 




// LOOOOOOPS

// for loops for arrays

const movies = ["Transformers", "Lego Movie", "Alien", "Finch"];
for (let movie of movies){
    console.log(`I love ${movie}`)
};


for (let num = 0; num <=3 ; num++){
    console.log(num)
}

for(let i = 0; i < 4; i++){
    console.log(movies[i]);
    
}

// ===============OBJECTS=================

// Objects are text index based properties


const spiderMan = {
    firstName: "Peter",
    lastName: "Parker",
    age: 17,
    cityResidents: "Manhattan",
    superHeroAlias: "Spiderman",
    superPowers: ["sider sense", "web slinging", "wall crawling"],
    loveInterest: "Mary Jane"
}

// console.log(spiderMan)


// To access a property in an object, use dot notation


console.log(spiderMan.firstName)

// To manipulate an object to change a property use dot notation

spiderMan.age = 18;

console.log(spiderMan.age);


// to add properties you can do the same with dot notation

spiderMan.enemies = ["Green Goblin", "Shocker", "Doc Oct", "Venom"];

// console.log(spiderMan)

// to delete a propertiy from an objectyou start with 'delete objectName.objectProperty

delete spiderMan.age

// console.log(spiderMan);

delete spiderMan // if you forget to add a dot notation it will not accidently delet the object

console.log(spiderMan)

// objects can have array, but they also can have functions!

// const spiderMan = {
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 17,
//     cityResidents: "Manhattan",
//     superHeroAlias: "Spiderman",
//     superPowers: ["sider sense", "web slinging", "wall crawling"],
//     loveInterest: "Mary Jane",

// ^^ so the object was already declared, so we must ass the function using dot notation

    spiderMan.themeSong = () => {
        console.log(`${spiderMan.superHeroAlias}, ${spiderMan.superHeroAlias}, does whatever a spider can`)
    };

spiderMan.themeSong();

// You can nest an object within an object

spiderMan.loveInterest = {
    firstName: "Mary Jane",
    lastName: "Watson",
    nickName: "MJ"
}

// Output:
//      firstName: 'Peter',
//      lastName: 'Parker',
//      cityResidents: 'Manhattan',
//      superHeroAlias: 'Spiderman',
//      superPowers: [ 'sider sense', 'web slinging', 'wall crawling' ],
//      loveInterest: {firstName: 'Mary Jane', lastName: 'Watson', nickName: 'MJ' }, // <<---- changes the propert to a nested object
//      enemies: [ 'Green Goblin', 'Shocker', 'Doc Oct', 'Venom' ],
//      themeSong: [Function (anonymous)]


//======= Objects in Arrays =======

const marvelMemberSpiderMan = [ 
    {firstName: 'Peter'},                                                                                        // <<<--- index 0
    {lastName: 'Parker'},                                                                                        // <<<--- index 1
    {heroName: 'Spiderman'},                                                                                     // <<<--- index 2
    {powers: ['sider sense', 'web slinging', 'wall crawling' ]},                                                 // <<<--- index 3   
    {loveInterest: {firstName: 'Mary Jane', lastName: 'Watson', nickName: 'MJ' }},                               // <<<--- index 4
    {enemies: [ 'Green Goblin', 'Shocker', 'Doc Oct', 'Venom' ]},                                                // <<<--- index 5
    {themeSong: () => {
        console.log(`${marvelMemberSpiderMan[2].heroName}, ${marvelMemberSpiderMan[2].heroName}, does whatever a spider can`)      //<<<--- index 6
    }}
]

console.log(marvelMemberSpiderMan);                

console.log(marvelMemberSpiderMan[6]);           //<<<--- outputs {themeSong: [Function themeSong]}
console.log(marvelMemberSpiderMan[6].themeSong());//<<<--- outputs function properly but also outputs undefined?
marvelMemberSpiderMan[6].themeSong() //<<<--- this properly executes the function with no undefined output

