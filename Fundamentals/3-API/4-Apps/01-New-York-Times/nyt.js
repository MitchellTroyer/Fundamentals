const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '8de2a9f5b1d8427ebbbe46cc03f6372c';
let url;
//declaring theBaseURL of thr API
//const key will let NYT know which user is using their API
//use let url to make a dynamic search

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage);
//these listen for certain things like a click or button press

function fetchResults(e)
{
    e.preventDefault();
    url = `${baseURL}?api-key=${key} &page= ${pageNumber}&q=${searchTerm.value}`; 
   
    if(startDate.value !== '') 
    {
      console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') 
    {
      url += '&end_date=' + endDate.value;
    };

    fetch(url)
      .then(function(result) 
    {
        console.log(result);
        return result.json();
    })
      .then(function(json) 
    { 
      console.log(json);
        displayResults(json); 
    });
};

 //storing the data in variable 'article'
  function displayResults(json) 
  {
    while(section.firstChild)
    {
      section.removeChild(section.firstChild);
    }

    let article = json.response.doc;
  
    //looking to see if the article contains anything
    if(articles.length === 0) 
    {
      console.log("No results");
    } 
    else {
      for(let i = 0; i < articles.length; i++) 
      {
        let article = document.createElement('article'); 
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');  
        let para = document.createElement('p');   
        let clearfix = document.createElement('div'); 

        let current = articles[i];
        console.log("Current:", current);

        link.href = current.web_url;
        link.textContent = current.headline.main;

        para.textContent = 'Keywords: ';

        for(let j = 0; j < current.keywords.length; j++) 
        {
          let span = document.createElement('span');   
          span.textContent += current.keywords[j].value + ' ';
          para.appendChild(span);
        }

        //
        if(current.multimedia.length > 0) 
        {
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          img.alt = current.headline.main;
        }

        clearfix.setAttribute('class','clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
  
      }
    }
 
      if(articles.length === 10)
      {
        nav.style.display = 'block';//shows nav if 10 items are in the array
      }
      else
      {
        nav.style.dsiplay = 'none';// hides the nav if less than 10 items are in the array
      }
  };
  

  function nextPage(e){
    pageNumber++;
    fetch(e);
    console.log("page number: ", pageNumber);
  } 
  
  function previousPage(e)
  {
    if(pageNumber > 0) 
    {
      pageNumber--;
    } else {
      return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber); 
  } 