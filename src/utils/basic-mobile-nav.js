const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;
  console.log("keluar diawal : ", isMobileNavOpen);

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    console.log("keluar ketika di click doang", isMobileNavOpen);
  });

  mobileLinks.forEach((Link) => {
    Link.addEventListener("click", () => {
      isMobileNavOpen = false;
      console.log("ketika link pada nav bar di click", isMobileNavOpen);
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
