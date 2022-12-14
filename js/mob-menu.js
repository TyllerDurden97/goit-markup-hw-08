
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
   const mobileMenuRef = document.querySelector("[data-menu]");
   const bodyNoScroll = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {  

    menuBtnRef.classList.toggle("is-open");    

    mobileMenuRef.classList.toggle("is-open");
  });
})();