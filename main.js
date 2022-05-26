domModule = (() => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {

    const dropdownItems = dropdown.querySelectorAll("li");
    dropdownItems.forEach((item) => {
      item.style.display = "none";
    })

    dropdown.addEventListener(("mouseover"), () => {
      dropdownItems.forEach((item) => {
        item.style.display = "block";
      })
    })

    dropdown.addEventListener(("mouseout"), () => {
      dropdownItems.forEach((item) => {
        item.style.display = "none";
      })
    })
  })
})();