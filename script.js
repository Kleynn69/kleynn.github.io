// Social icon click: open in new tab
document.querySelectorAll('.profile-social a').forEach(el => {
  el.setAttribute('target', '_blank');
});

// Show alert on skill tag click
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    alert(`Skill: ${tag.textContent}`);
  });
});
