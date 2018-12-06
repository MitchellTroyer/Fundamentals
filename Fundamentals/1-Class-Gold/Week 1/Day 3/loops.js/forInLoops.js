/*let student = {name: "Jamie", awesome: true, course: "JavaScript"};

for(item in student)//item = keys(name,awesome,course)
{
    console.log(item);
    console.log(student[item]);//this shows the information in each key
}*/

/*let catArray = ['tabby', 'burmese', 'ragdoll', 'tortie'];
for(cat in catArray)
{
    console.log(cat);
    console.log(catArray[0]);
}*/

let name = 'mitchell';
let capName;

for(letter in name)
{
    if(letter == 0)
    {
        capName = name[letter].toUpperCase();//if it is the first letter then capitalize.
    }
    else
    {
        capName += name[letter].toLowerCase();//if any other number in array then lowercase.
    }
}

console.log(capName);