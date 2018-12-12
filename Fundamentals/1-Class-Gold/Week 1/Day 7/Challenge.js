let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'white', 'grey', 'bronze', 'gold', 'platnum', 'silver', 'copper', 'turquise', 'crimson', 'navy blue', 'light blue', 'royal blue', 'dark green'];
let suf = ['st', 'nd', 'rd' , 'th'];

function order(col)
{
    for(col = 0; col < colors.length; col++)
    {
        if(col === 0)
        {
            console.log(col+1 + suf[0] + " is " + colors[col]);
        }
        else if(col === 1)
        {
            console.log(col+1 + suf[1] + " is " + colors[col]);
        }
        else if(col === 2)
        {
            console.log(col+1 + suf[2] + " is " + colors[col]);
        }
        else
        {
            console.log(col+1 + suf[3] + " is " + colors[col]);
        };
    }
    return col;
}

order(colors);

//console.log(number + sufffix + " " + color)//repeat until end of colors array

//1. color array in for loop to end of length --> (works)
//2. number incremented uo one each time to print out beside each color
//3. add each suffix depending on the number - if statement

/*let colors = [0, 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'white'];
let suf = ['st', 'nd', 'rd' , 'th'];

function colorArray(color, placements)
{
    for(i=0; i < 10; i++)///////////////
    {
        console.log(`${i + 1} ${placements[i]} is ${colors[i]} `)
    }
}

colorArray();*/