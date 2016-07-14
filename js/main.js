//Event #1 - When you click on list item #1 the list item reacts by adding the "serious" class, which makes the list item bold, uppercase, and red.

var bridgette = document.getElementById('bridgette');
function serious() {
    bridgette.className = 'serious';
}

bridgette.addEventListener('click', serious);
