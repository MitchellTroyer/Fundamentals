document.getElementById('buttonOne').addEventListener('click', bu => 
{
    if(bu.target.value == '')
    {
        document.getElementById('outPut').innerHTML = "Please fill in all the required information";
      }
      else
      {
        document.getElementById('outPut').innerHTML = "You are good to go. Thank you";
    }
}); 