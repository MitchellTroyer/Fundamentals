console.log(scissors);
scissors = 'blue';

console.log(scissors);
var scissors;//will find this anywhere, but does not see the value until it gets to it in which case it doesnt know the value before the first console log.

b();
console.log(a);

function b()
{
    console.log('this is all hoisted');
}
var a = 'this is not hoisted';//console log above does not get this value before running.