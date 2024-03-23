// animationScript.js
const container = document.getElementById('animation-container');
const numVerticalLines = 10;
const numHorizontalLines = 10;
const duration = 2000;

// Create vertical lines
for (let i = 0; i < numVerticalLines; i++) {
  const line = document.createElement('div');
  line.classList.add('line', 'vertical-line');
  line.style.left = `${Math.random() * 200}%`;
  container.appendChild(line);
}

// Create horizontal lines
for (let i = 0; i < numHorizontalLines; i++) {
  const line = document.createElement('div');
  line.classList.add('line', 'horizontal-line');
  line.style.top = `${Math.random() * 200}%`;
  container.appendChild(line);
}

// Animation timeline
anime.timeline({
  duration: duration,
  easing: 'easeInOutQuad',
  complete: () => {
    container.style.display = 'none';
  }
})
.add({
  targets: '.vertical-line',
  height: '100%',
  delay: anime.stagger(50)
})
.add({
  targets: '.horizontal-line',
  width: '100%',
  delay: anime.stagger(50)
}, '-=2950')
.add({
  targets: '#animation-container',
  opacity: [1, 0],
  duration: 500,
  easing: 'easeOutQuad'
}, '-=1000');
