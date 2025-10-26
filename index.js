function switchLanguage(lang) {
  const html = document.documentElement;
  const elements = document.querySelectorAll("[data-ar]");
  // const inputs = document.querySelectorAll("[data-ar-placeholder]");

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    elements.forEach((el) => {
      if (!el.dataset.originalText) {
        el.dataset.originalText = el.textContent;
      }
      el.textContent = el.getAttribute("data-ar");
    });
    // inputs.forEach((input) => {
    //   if (!input.dataset.originalPlaceholder) {
    //     input.dataset.originalPlaceholder = input.placeholder;
    //   }
    //   input.placeholder = input.getAttribute("data-ar-placeholder");
    // });
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    elements.forEach((el) => {
      if (el.dataset.originalText) {
        el.textContent = el.dataset.originalText;
      }
    });
    // inputs.forEach((input) => {
    //   if (input.dataset.originalPlaceholder) {
    //     input.placeholder = input.dataset.originalPlaceholder;
    //   }
    // });
  }
}

const basic = document.getElementById("basic");
const premium = document.getElementById("premium");

const free = document.getElementById("free");
const paid = document.getElementById("paid");
console.log(basic, premium, free, paid);

function showFirst() {
  // basic.style.display = "block";
  // premium.style.display = "none";
  free.style.display = "flex";
  paid.style.display = "none";
}

function showSecond() {
  // basic.style.display = "none";
  // premium.style.display = "block";
  free.style.display = "none";
  paid.style.display = "flex";
}

basic.addEventListener("click", showFirst);
premium.addEventListener("click", showSecond);
