//Event #1 - When you click on list item #1 the list item reacts by adding the "serious" class, which makes the list item bold, uppercase, and red.

var bridgette = document.getElementById('bridgette');
function serious() {
    bridgette.className = 'serious';
}

bridgette.addEventListener('click', serious);

//Event #2 - When you keydown, the tagline "Expect the unexpected!" appears beneath the h1 tag.

var header = document.getElementById('header');
function tagline() {
    var tag = document.createElement('article');
    tag.innerHTML = '<p>Expect the unexpected!</p>';
    document.getElementsByClassName('header').appendChild(tag);
}

header.addEventListener('keydown', tagline);
