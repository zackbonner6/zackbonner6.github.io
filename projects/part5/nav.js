const toggleNav = () => {
  document.getElementById("nav-links").classList.toggle("nav-open");
  if (document.getElementById("nav-links").classList.contains("nav-open")) {
    document.getElementById("nav-toggle").innerHTML = "&#10005;";
  } else {
    document.getElementById("nav-toggle").innerHTML = "&#9776;";
  }
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
};
