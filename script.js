document.addEventListener("DOMContentLoaded", () => {
  // Load About Me content
  fetch("content.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("aboutMe-content").textContent = data.body;

    //   const skillsList = document.getElementById("skills-list");
    //   data.skills.forEach((skill) => {
    //     const li = document.createElement("li");
    //     li.textContent = skill;
    //     skillsList.appendChild(li);
    //   });

    })
    .catch((error) => console.error("Error loading content.json:", error));
});