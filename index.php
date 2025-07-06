<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Skip domain validation temporarily
// $allowed_domains = ['localhost', '127.0.0.1', 'localhost:5173'];
// $referer = isset($_SERVER['HTTP_REFERER']) ? parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) : '';
// $origin = isset($_SERVER['HTTP_ORIGIN']) ? parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST) : '';
// if (in_array($referer, $allowed_domains) || in_array($origin, $allowed_domains)) {

$name = $_POST['name'] ?? null;
$message = $_POST['message'] ?? null;
$email = $_POST['sendto'] ?? null;

if ($name && $message && $email) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'charwkr.contact@gmail.com';
        $mail->Password   = 'yeiawfdsoeiib232';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('charwkr.contact@gmail.com', 'React Contact Form');
        $mail->addAddress($email);
        $mail->addReplyTo('charwkr.contact@gmail.com', 'Information');

        $mail->isHTML(true);
        $mail->Subject = 'New Message from React Contact Form';
        $mail->Body    = "Name: {$name}<br>Email: {$email}<br><br><b>Message:</b><br>{$message}";

        if ($mail->send()) {
            echo "Message has been sent!";
        } else {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
} else {
    echo "All fields are required!";
}

// } else {
//     echo "Unauthorized request.";
// }
?>
