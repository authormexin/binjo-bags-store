// Remove intro after 4 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
    }, 1000);
  }, 4000);
});
