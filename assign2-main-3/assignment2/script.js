$(document).ready(function() {
    // Animation for each testimonial block
    $("#testimonial1").addClass("animated-card");
    $("#testimonial2").addClass("animated-card");
    $("#testimonial3").addClass("animated-card");
    $("#testimonial4").addClass("animated-card");
  });
  

  function validateForm() {
    var name = document.getElementById("formGroupExampleInput").value;
    var phoneNumber = document.getElementById("formGroupExampleInput2").value;
    var description = document.getElementById("formGroupExampleInput3").value;

    if (name === "") {
      alert("Please enter your name.");
      return false;
    }

    if (phoneNumber === "") {
      alert("Please enter your phone number.");
      return false;
    }

    if (description === "") {
      alert("Please describe your case.");
      return false;
    }

    return true;
  }
  function redirectToPaymentPage() {
    window.location.href = "payment.html";
  }