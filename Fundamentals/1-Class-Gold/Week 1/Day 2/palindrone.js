let word = "house";
console.log(word);

function palin()
{
    flipWord = word.split("").reverse().join("");
    console.log(flipWord);
}

palin();

if(word == flipWord)
{
  console.log("This is a palindrone.");
}
else
{
  console.log("This word is not a palindrone");
}