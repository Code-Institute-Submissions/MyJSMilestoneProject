function sendMail(contactForm) {
    emailjs.send("service_r7h2fwq","template_msk96o5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_phone": contactForm.phone.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    alert("Thank you we will response as fast as we can");}
