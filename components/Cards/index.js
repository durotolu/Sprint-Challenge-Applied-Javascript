// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const obj = response.data.articles;
    const arrAwesome = Object.values(obj);
    let arr = [];
    
    for (let i=0; i<arrAwesome.length; i++) {
        for (let j=0; j<arrAwesome[i].length; j++) {
            arr.push(arrAwesome[i][j]);
        }
    }

})
.catch(error => {
    error;
})

function articleComponent (anyArticles) {
    //debugger
    anyArticles.forEach((el) => {
        //debugger
        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');
        const headlineDiv = document.createElement('div');
        headlineDiv.setAttribute('class', 'headline');
        headlineDiv.textContent = el.headline;
        const aurthorDiv = document.createElement('div');
        aurthorDiv.setAttribute('class', 'author');
        const imageDiv = document.createElement('div');
        imageDiv.setAttribute('class', 'img-container');
        const image = document.createElement('img');
        image.setAttribute('src', el.authorPhoto);
        const span = document.createElement('span');
        span.textContent = `By ${el.authorName}`;

        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(aurthorDiv);
        imageDiv.appendChild(image);
        aurthorDiv.appendChild(imageDiv);
        aurthorDiv.appendChild(span);
        //debugger
        document.querySelector('.cards-container').appendChild(cardDiv);
    })
    //debugger
}