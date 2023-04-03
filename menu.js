const open_m = document.getElementById("open");
const close_m = document.getElementById("close");
const mobileNav = document.getElementById("mobile-navbar");

open_m.addEventListener("click", () => {
  close_m.classList.remove("active");
  open_m.classList.add("active");
  open_m.classList.remove("block");
  mobileNav.classList.remove("active");
});
close_m.addEventListener("click", () => {
  open_m.classList.add("block");
  close_m.classList.add("active");
  mobileNav.classList.add("active");
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'ar,en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }
    , 'google_translate_element');
}
