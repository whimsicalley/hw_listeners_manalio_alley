var pageHeading = document.getElementById('pageHeading'); //assigning a variable to the h1's ID

var x = 1;

function addParagraph() {
    var paragraph = document.createElement('p'); //creating the space for the paragraph
    paragraph.innerHTML = 'This is click number ' + x++; //creating the content of the paragraph
    document.getElementById('container').appendChild(paragraph); //adding the "paragraph" variable within the container
}

pageHeading.addEventListener('click', addParagraph); //the event listener
