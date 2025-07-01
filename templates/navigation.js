// Navigation behavior - show header when mouse is near top
let header = document.querySelector('.navigation-header');

if (!header) {
  console.error('Navigation header not found');
  return;
}

// Function to check if mouse is near top
function checkMousePosition(e) {
  const threshold = 100; // Distance from top to show header
  const mouseY = e.clientY;
  
  if (mouseY < threshold) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
}

// Add mousemove event listener
document.addEventListener('mousemove', checkMousePosition);

// Show header when at the top of the page
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition < 50) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});
