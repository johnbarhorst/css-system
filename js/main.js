const themeSelect = document.getElementById('theme-select');
const body = document.getElementById('theme-body');


// Started to make a more resilient way of toggling theme classes.
// Then I remembered this is way overengineering.
// Left it here in case I look back at this one day.
const themeNames = Array.from(themeSelect.options).map(option => option.value);


themeSelect.addEventListener('change', (e) => {
  const theme = e.target.value;
  body.removeAttribute('class');
  body.classList.add(theme);

});