    const themeSelect = document.querySelector('#themeSelect');
    const body = document.body;

    themeSelect.value = body.dataset.theme;

    themeSelect.addEventListener('change', (event) => {
      const chosenTheme = event.target.value;
      body.dataset.theme = chosenTheme;
    });