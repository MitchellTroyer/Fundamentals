const baseUrl = "https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json";

const sForm = document.querySelector('form'); 
const dUl = document.querySelector('ul');//grabbing the form and ul from the html

sForm.addEventListener('submit', fetchInfo);//when i click the button then start the function

function fetchInfo(e)
{
    e.preventDefault();//prevent refresh
    //this site has no key so I do not need to created a new url to unlock it

    fetch(baseUrl)//grabbing the url
        .then(function(results)
    {
        return results.json();//send any reults make json
    })
        .then(function(json)
    {
        displayR(json);//run function with the json
    })
}

function displayR(json)
{
    while(dUl.firstChild)
    {
        dUl.removeChild(dUl.firstChild);
    }
    console.log(json);//displays all data taken in from the external server by the API to your page.
            /*let creatures = json.forEach(cr => 
            {
                const names = document.createElement('h2');//creating how it will be listed
                const types = document.createElement('ul');
                const size = document.createElement('ul');
                const align = document.createElement('ul');
                const ac = document.createElement('ul');
                const hd = document.createElement('ul');
                const hp = document.createElement('ul');

                names.innerText = cr.name;//making the variable you made link to the value you want in the json
                types.innerText = cr.type;
                size.innerText = cr.size;
                align.innerText = cr.alignment;
                ac.innerText = cr.armor_class;
                hd.innerText = cr.hit_dice;
                hp.innerText = cr.hit_points;

                dUl.appendChild(names);//sending it through
                dUl.appendChild(types);
                dUl.appendChild(size);
                //dUl.appendChild(align);
                //dUl.appendChild(ac);
                //dUl.appendChild(hd);
                //dUl.appendChild(hp);
            });*/ //t\This code only prints out the entire array of objects.. which would be ok if there wasn't 325.

        for(i = 0; i < 10; i++)//pulls ten ojects
        {
            let random = Math.floor(Math.random() * Math.floor(326));//creates a random number
            let cr = json[random];//says to json it wants a random number the the for loop tells it to do this 10 times
            const names = document.createElement('h2');//creating how it will be listed
            const types = document.createElement('ul');
            const size = document.createElement('ul');
            const align = document.createElement('ul');
            const ac = document.createElement('ul');
            const hd = document.createElement('ul');
            const hp = document.createElement('ul');
            const sp = document.createElement('ul');
            const str = document.createElement('ul');

            names.innerText = cr.name;//making the variable you made link to the value you want in the json
            types.innerText = "Type: " + cr.type;
            size.innerText = "Size: " + cr.size;
            align.innerText = "Alignment: " + cr.alignment;
            ac.innerText = "Armor Class: " + cr.armor_class;
            hd.innerText = "Hit Dice: " + cr.hit_dice;
            hp.innerText = "Hit Points: " + cr.hit_points;
            sp.innerText = "Speed: " + cr.speed;
            str.innerText = "Strength: " + cr.strength;


            dUl.appendChild(names);//sending it through
            dUl.appendChild(types);
            dUl.appendChild(size);
            dUl.appendChild(align);
            dUl.appendChild(ac);
            dUl.appendChild(hd);
            dUl.appendChild(hp);
            dUl.appendChild(str);
            dUl.appendChild(sp);
        }


}
