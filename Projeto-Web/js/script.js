location.href = "index.html";
location.replace("index.html");
window.location.reload();
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading").classList.add("sumir");
    }, 1500);
  });
