function sendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_4pkont5", "template_vpnqxis", params)
        .then(function (response) {
            alert("Success!" + response.status);
            document.getElementById("fullname").value = '';
            document.getElementById("email_id").value = '';
            document.getElementById("message").value = '';
        }, function (error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}
