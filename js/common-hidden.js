const toggleButton = document.getElementById('toggleButton');
const hiddenElement = document.getElementById('hiddenElement');

toggleButton.addEventListener('click', () => {
hiddenElement.style.display = (hiddenElement.style.display === 'none') ? 'block' : 'none';
});