//let x = 10;
//alert(x);

/*document.getElementById('testParagraph').style.color = "red";
console.log(document.querySelectorAll('p.sampleClass'));
console.log(document.querySelectorAll('p.sampleClass')[0].innerHTML) //= 'My text has changed';
document.querySelectorAll('p.sampleClass')[0].innerHTML = '<i>My text has changed</i>';//can add aspects to html like italics*/

 /*document.getElementById('clickThisButton').addEventListener('click',(details) => 
{
    if(details.target.style.backgroundColor == 'red')
    {
        details.target.style.backgroundColor ='blue';
    }
    else
    {
        details.target.style.backgroundColor = 'red';
    }
});*/

 document.getElementById('nameInput').addEventListener('keyup', buttons => 
{
    if(buttons.target.value == '')
    {
        document.getElementsByTagName('p')[0].innerHTML = 'Nothing has changed';
    }
    else
    {
        document.getElementsByTagName('p')[0].innerHTML = `Everyone, say hello to ${e.target.value}`;
    }
});
