function captializeName(name)
{
    let capName = '';
    for(let h in name)
    {
        if(h == 0)
        {
            capName += name[h].toUpperCase();
        }
        else
        {
            capName += name[h].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;
}

const newName = captializeName('mitcH');

console.log(newName)