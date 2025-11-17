function loadNavbar() {
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    fetch("nav.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(err => console.error("Navbar failed to load:", err));
  }
}

document.addEventListener("DOMContentLoaded", loadNavbar);