//Event #1 - When you click on list item #1 the list item reacts by adding the "serious" class, which makes the list item bold, uppercase, and red.

var bridgette = document.getElementById('bridgette');
function serious() {
    bridgette.className = 'serious';
}

bridgette.addEventListener('click', serious);

//Event #2 - A double-click event listener is set on the last paragraph on the page. When double-clicked, a section tag is added with a funny gif and a few paragraphs.

var warning = document.getElementById('warning');

function veryserious() {
    var theImage = document.createElement('section');

    theImage.innerHTML = '<h2>Okay, one more thought!</h2> <p>Me as I watch Frank make a complete fool out of Bridgette for all of America to see:</p> <img src="img/AubreyPlazaNo.gif" alt="My face when I hear her talk." /> <p>Honey, it\'s time for you to GO.</p>';

    document.getElementsByClassName('container')[0].appendChild(theImage);
}

warning.addEventListener('dblclick', veryserious);



// var header = document.getElementById('header');
// function tagline() {
//     var tag = document.createElement('article');
//     tag.innerHTML = '<p>Expect the unexpected!</p>';
//     document.getElementsByClassName('header').appendChild(tag);
// }

// header.addEventListener('keydown', tagline);
