document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // Show popup
        popup.style.display = "block";

        // Reset form fields
        form.reset();

        // Hide popup after 3 seconds
        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
});
