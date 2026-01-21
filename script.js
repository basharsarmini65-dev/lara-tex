// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// Year in footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Demo form (no backend)
const form = document.getElementById("quoteForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Quote request:", data);
    note.textContent = "✅ تم الإرسال (تجريبي). إذا بدك، بربطه بواتساب أو ايميل.";
    form.reset();
  });
}