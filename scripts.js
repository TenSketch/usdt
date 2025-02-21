// GSAP Animation for Navbar Scroll Effect

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // gsap.from(".navbar", { opacity: 0, y: -20, duration: 1, ease: "power2.out" });
});

//   coomon section gsap
document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".gsap-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" });
});


// form feedback
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");
    const inputs = form.querySelectorAll("input, textarea");
    const label = form.querySelectorAll("label");
  
    // Attach event listeners to all inputs
    inputs.forEach(input => {
      input.addEventListener("input", function () {
        validateField(this);
        toggleFloatingLabel(this);
      });
  
      input.addEventListener("blur", function () {
        validateField(this);
        toggleFloatingLabel(this);
      });
  
      // Ensure labels stay visible on page load if field has a value
      toggleFloatingLabel(input);
    });
  
    // Prevent form submission if validation fails
    form.addEventListener("submit", function (event) {
      let isValid = true;
  
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });
  
      if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      form.classList.add("was-validated");
    });
  
    // Function to validate individual fields
    function validateField(field) {
      let isValid = true;
      const value = field.value.trim();
      const feedback = field.nextElementSibling;
  
      if (value.length === 0) {
        hideError(field);
        return true; // Don't show error if field is empty
      }
  
      if (field.id === "donorName" && (value.length < 3 || value.length > 50)) {
        showError(field, "Name must be between 3 to 50 characters.");
        isValid = false;
      } else if (field.id === "donorMobile" && !/^[6-9]\d{9}$/.test(value)) {
        showError(field, "Enter a valid 10-digit mobile number.");
        isValid = false;
      } else if (field.id === "donorEmail" && !field.validity.valid) {
        showError(field, "Enter a valid email address.");
        isValid = false;
      } else if (field.id === "donorAadhar" && !/^\d{12}$/.test(value)) {
        showError(field, "Enter a valid 12-digit Aadhar number.");
        isValid = false;
      } else if (field.id === "donorPan" && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
        showError(field, "Enter a valid PAN number (Format: ABCDE1234F).");
        isValid = false;
      } else if (field.id === "donationAmount") {
        const amount = parseInt(value);
        if (isNaN(amount) || amount < 100 || amount > 1000000) {
          showError(field, "Enter an amount between ₹100 - ₹10,00,000.");
          isValid = false;
        }
      }
  
      // Hide error if valid
      if (isValid) {
        hideError(field);
      }
  
      return isValid;
    }
  
    // Function to show error message
    function showError(field, message) {
      const feedback = field.nextElementSibling;
      field.classList.add("is-invalid");
      field.classList.remove("is-valid");
      feedback.textContent = message;
      feedback.style.display = "block";
    }
  
    // Function to hide error message
    function hideError(field) {
      const feedback = field.nextElementSibling;
      const label = field.parentElement.querySelector("label");
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
      feedback.style.display = "none";
      label.style.display = "block";
    }
  
    // Function to ensure floating label stays visible when input has a value
    function toggleFloatingLabel(field) {
      if (field.value.trim() !== "") {
        field.classList.add("filled");
        // field.style.display= "block";
      } else {
        field.classList.remove("filled");
      }
    }
  });
  