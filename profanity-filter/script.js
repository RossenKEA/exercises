    const curseWords = [
      { bad: "var", good: "const" },
      { bad: "float", good: "grid" },
      { bad: "marquee", good: "just don't" },
    ];

    const textEl = document.querySelector("#text");
    const btn = document.querySelector("#btn");
    const dialog = document.querySelector("#doneDialog");
    const closeBtn = document.querySelector("#closeDialog");

    function updateText() {
      // bruger textContent så altid starter med ren tekst (uden <mark>)
      let txt = textEl.textContent;

      // tjek om der stadig findes nogle af de dårlige ord
      let foundBadWord = false;

      for (const word of curseWords) {
        if (txt.includes(word.bad)) {
          foundBadWord = true;
        }
      }

      // hvis der ikke var nogle dårlige ord, så vis dialog
      if (!foundBadWord) {
        dialog.showModal();
        return;
      }

      // ellers: erstat dårlige ord med gode (og highlight de gode)
      for (const word of curseWords) {
        txt = txt.replaceAll(word.bad, `<mark>${word.good}</mark>`);
      }

      textEl.innerHTML = txt;
    }

    btn.addEventListener("click", updateText);

    closeBtn.addEventListener("click", () => {
      dialog.close();
    });