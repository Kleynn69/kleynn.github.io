// Example JS for icon and future interactivity

// Social icon click: open in new tab
document.querySelectorAll('.profile-social a').forEach(el => {
  el.addEventListener('click', function(e) {
    this.setAttribute('target', '_blank');
  });
});

// Potential for light/dark mode toggle, modal, etc.
// Example: Show alert on skill tag click
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    alert(`Skill: ${tag.textContent}`);
  });
});
