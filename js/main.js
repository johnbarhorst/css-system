const themeSelect = document.getElementById('theme-select');
const body = document.getElementById('theme-body');

let currentTheme;

themeSelect.addEventListener('change', (e) => {
  const theme = e.target.value;
  body.classList.remove(currentTheme);
  body.classList.add(theme);
  return currentTheme = theme;
});