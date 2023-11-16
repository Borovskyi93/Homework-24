const containerDiv = document.querySelector('input');
const ghostDiv = document.createElement('div');
ghostDiv.classList.add('visible');

containerDiv.addEventListener('mousemove', () => {
    document.body.appendChild(ghostDiv);
});

containerDiv.addEventListener('mouseout', () => {
    ghostDiv.remove();
});

