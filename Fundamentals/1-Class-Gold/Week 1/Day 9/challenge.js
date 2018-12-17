/*let hulk = 
{
    name: 'hulk',
    color: 'green',
    smash: 'yes'
}

function colors()
{

    //console.log(Object.values(hulk));
    for(let i = 0; i < hulk.length; i++)
    {
        if(hulk[i].color === 'green')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

console.log(colors(hulk));*/

/////////////////////////////////////////////////////////////////////////
/*let passObj =
{
    color: 'green',
    smash: 'true',
    name: 'hulk'
}

let failObj =
{
    name: 'mitch',

}

function colorIsGreen(obj)
{
    if(obj['color'] === 'green')
    {
        return true;
    }
    return false;
}

console.log(colorIsGreen(PassObj));
console.log(colorIsGreen(failObj));*/

////////////////////////////////////////////////////////////////////

/*
Challenge (Objects):
Create a function that takes in an object
In the function, check if the object contains a specific property and return a boolean answer
checks for color has the value of 'green'
Example: 
exampleObj = {
  color: 'green',
  smashes: true,
  name: 'Hulk'
}
output: true

let passObj = {
    color: 'green',
    smashes: true,
    name: 'Hulk'
}
let failObj = {
    name: 'Alecx',
    languages: ['JavaScript', 'C#', 'Python']
}
let colorIsGreen = obj => {
    if (obj['color'] === 'green') {
        return true;
    }
    return false;
}
console.log(colorIsGreen(passObj));*/
// console.log(colorIsGreen(failObj));
// exampleObj = {
//     color: "green",
//     smashes: true,
//     name: "Hulk"
// }
// function colorChecker(object){
//     let colorArray = Object.values(object.color);  //[g,r,e,e,n]
//     let color = ""
//     for(i = 0; i < colorArray.length; i++){
//         color += colorArray[i].toLowerCase();
//     };
//     console.log(color);
//     if(color == "green"){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(colorChecker(exampleObj));
// exObj = {
//     color: 'green',
//     smashes: true,
//     name: 'Hulk'
//  }
//  //for(let key in exObj)
//  //console.log(exObj[key]);
//  function checkColor(obj) {
//     for(let key in obj){
//         if(obj[key].hasOwnProperty){
//             obj[key].value === 'green';
//        }
//     return true;
//   }
//  }
//  console.log(checkColor(exObj));
// let exampleObj ={
//     color: 'green',
//     smashes: true,
//     name: 'Hulk',
//     f: function(){
//         if (this.color === 'green'){
//             return true
//         } else {return false}
//     }
//  }
//  console.log (exampleObj.f())
function property() {
    let garden = {
        vegetable: 'zucchini',
        flower: 'sun flower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    };
    if (garden.hasOwnProperty("vegetable")) {
        return true
    } else {
        return false
    }
}
console.log(property())