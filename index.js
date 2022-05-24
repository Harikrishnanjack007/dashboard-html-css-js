const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn?.addEventListener("click", () => {
  console.log("llll");
  sideMenu.style.display = "block";
});

function onMenuOpen() {
  const sideMenu = document.querySelector("aside");
  sideMenu.style.display = "block";
}
function onClose(){
    const sideMenu = document.querySelector("aside");
  sideMenu.style.display = "none";
}

function onChangeTheme(){
    const toggler=document.querySelector(".theme-toggler")
    document.body.classList.toggle('dark-theme-variables')
    toggler.querySelector('span:nth-child(1)').classList.toggle('active')
    toggler.querySelector('span:nth-child(2)').classList.toggle('active')

}