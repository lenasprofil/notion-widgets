const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const modeButtonParent = document.querySelector('.buttoncenter');

function updateButtonLink() {
    if (darkButton.checked) {
        modeButtonParent.style.display = 'block';
        modeButtonParent.querySelector('a').href = '../widgets/potddark.html';
    } else if (lightButton.checked) {
        modeButtonParent.style.display = 'block';
        modeButtonParent.querySelector('a').href = '../widgets/potdlight.html';
    } else {
        modeButtonParent.style.display = 'none';
    }
}

// Call the function when the radio buttons are clicked
darkButton.addEventListener('click', updateButtonLink);
lightButton.addEventListener('click', updateButtonLink);
