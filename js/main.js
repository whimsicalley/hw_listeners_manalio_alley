//Event #1 - When you click on list item #1 in the ordered list, the list item reacts by adding the "serious" class, which is stylized to make the list item bold, uppercase, and red.

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


//Event #3 - This event listener begins when the user mouses over the h1 element "Big Brother 18." Once the mouse moves over the h1, the show's official tagline "Expect the Unexpected" appears under it.

var headline = document.getElementById('headline');

function tagline() {
    var tag = document.createElement('p');

    tag.innerHTML = '<em>"Expect the unexpected!"</em>';
    document.getElementById('header').appendChild(tag);
}

headline.addEventListener('mouseover', tagline);
