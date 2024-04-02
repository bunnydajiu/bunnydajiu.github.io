<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "bunnydajiu@gmail.com"; // Replace with your email address
    $subject = "Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
}
?>
