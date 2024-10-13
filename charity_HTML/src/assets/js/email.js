(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("cnqq3om5pemE7dJeH");
})();
const submitBtn = document.getElementById("submit-btn");
window.onload = function () {
  const contactForm = document.getElementById("contact-form");
  contactForm &&
    contactForm.addEventListener("submit", function (event) {
      submitBtn.innerText = "Please Wait";
      event.preventDefault();

      // these IDs from the previous steps
      emailjs.sendForm("service_74bjsag", "template_mw85j7f", this).then(
        function () {
          console.log("SUCCESS!");
          contactForm.reset();
          submitBtn.innerText = "Thank You For Contacting with Us!";
          setTimeout(function () {
            submitBtn.innerHTML = `Send Message <i
          class="ti ti-arrow-up-right"></i>`;
          }, 3000);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
