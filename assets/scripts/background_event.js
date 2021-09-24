const firstTextOffsetTop = document.querySelector(".product_intro").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    const setOpacity = (window.pageYOffset / firstTextOffsetTop);
    console.log(setOpacity);
    document.body.style.background = "linear-gradient(rgba(1, 89, 255, " + setOpacity + "), rgba(1, 89, 255, " + setOpacity + ")), url(../images/haagendaz_main.jpeg) no-repeat";
  }
}