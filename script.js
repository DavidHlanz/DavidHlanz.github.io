    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Comprobar la preferencia guardada
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Guardar la preferencia en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

