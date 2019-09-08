// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'header');
    const dateSpan = document.createElement('span');
    dateSpan.setAttribute('class', 'date');
    dateSpan.textContent = 'SMARCH 28, 2019';
    const paperHeader = document.createElement('h1');
    paperHeader.textContent = 'Lambda Times';
    const tempSpan = document.createElement('span');
    tempSpan.textContent = '98°';

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(paperHeader);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}

document.querySelector('.header-container').appendChild(Header());