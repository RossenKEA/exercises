    // 6) EventListener på select -> skift data-theme på body
    const themeSelect = document.querySelector('#themeSelect');
    const body = document.body;

    // Sørg for at dropdown matcher det theme, body starter med
    themeSelect.value = body.dataset.theme;

    themeSelect.addEventListener('change', (event) => {
      const chosenTheme = event.target.value;
      body.dataset.theme = chosenTheme;
    });