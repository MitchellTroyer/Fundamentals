//array - sqaure breackets []
//can hold multiple data types

let students = ['Tony', 'Marshall', 'Randy', 'ray', 23, true, ['Ryan', 'Iesha']];
//console.log(typeof students);
//console.log(students instanceof Array);
//console.log(students[2]);
//console.log(students[6][0])
//console.log(`Hello ${students[6][1]}, you look nice today.`)

let food = ['Oatmeal pie', 'lobster', 'Quesadilla', 'Cheese cake', 'Hot dog'];
for(f in food)
{
    //
    //console.log(food[f]);
}

food.push('Pizza');
for( f in food)
{
    //console.log(food[f]);
}

food.splice(1,0, 'blueberry pie');//first number where it goes in the array, second one chooses if it replaces or just adds
for( f in food)
{
    //console.log(food[f]);
}

food.pop();
for( f in food)
{
    //console.log(food[f]);
}

let foods = ['Oatmeal pie', 'lobster', 'Quesadilla', 'Cheese cake', 'Hot dog'];
foods.forEach((foods, number) => 
{
    //console.log(number); 
    //console.log(foods);
});

let movies = ['Star Wars','Lord of the Rings','X-Men Origins','Saving Private Ryan']
movies.push('Braveheart');
movies.splice(3,1,'Merlin');
movies.forEach((movies) =>
{
    //console.log(movies);
});

let long = [1,2,3,4,5,6,7,8,9,10]
//console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
//console.log(colors.length);
//console.log(typeof colors);
//console.log(typeof colors.toString());
//colors.forEach(c => console.log(c));

let arr = [1,2,3,4,5,6]
if(arr instanceof Array === true)
{
    let reArr = arr.reverse();
    reArr.forEach(a => console.log(a));
}