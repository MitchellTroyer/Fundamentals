//create two arrays
//create a function 
//combine two arrays
//return;
let arrayOne = ['dog', 'cat', 'parrot', 'chicken', 'monkey'];
let arrayTwo = ['lion', 'cheeta', 'elephant', 'bear'];

function combine()
{
    let newArray = arrayOne + ',' + arrayTwo;
    return newArray;
}

const newerArray = combine();

combine();
//console.log(newerArray);
for(i = 0; i < newerArray.length; i++)
{
    //console.log(newerArray[i]);
}
///////////does not quite work/////combines but makes each individual letter an array

/////////////////////////////////////////////////////////////////////
//-static- can only be done as lng as you dont change it or youd have to modify the whole thing again- would have to keep running new for loops to reutrn each one
let arr1 = ['Tortie', 'Calico', 'Mainecoon', 'Burmese'];
let arr2 = ['poodle', 'Beagle', 'Godlen', 'terrier'];

function allAnimals()
{
    for(i = 0; i < arr1.length; i++)
    {
        arr2.push(arr1[i]);
        //console.log(arr2);
    }
    return arr2;
}

const arr3 = allAnimals();
console.log(arr3);
console.log(arr3[1])



///////////////////////////////////////////////////////////////////////
//-Malliable- can more easily add arrays in, can shift information easier
/*let arr1 = ['Tortie', 'Calico', 'Mainecoon', 'Burmese'];
let arr2 = ['poodle', 'Beagle', 'Godlen', 'terrier'];

function allAnimals(one, two)
{
    for(i = 0; i < one.length; i++)
    {
        two.push(one[i]);
    }
    return two;
}

let newArray = allAnimals(arr1, arr2);
console.log(newArray);*/