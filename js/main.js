var pageHeading = document.getElementById('pageHeading'); //assigning a variable to the h1's ID

function addParagraph() {
    var paragraph = document.createElement('article'); //creating the article for the paragraph to go into

    paragraph.innerHTML = '<p>This is click number ' + x + '</p>'; //creating the content of the article
    document.getElementById('container').appendChild(paragraph); //adding the "paragraph" variable within the container
}

// var i = 1; //tells JS the number to start
// while (i < 100) { //will only click to 100
//     console.log('Hello this is number ' + i);
//     i++; //increasing every time
// }

function clicks() {
    var x = counter.detail;
    document.getElementById('')
}

pageHeading.addEventListener('click', addParagraph); //the event listener
