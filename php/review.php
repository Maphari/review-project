<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);

    if ($user !== null && http_response_code(200)) {

        $username = $user['name'];
        $email = $user['email'];
        $rating = $user['rating'];
        $review = $user['review'];

        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        $_SESSION['rating'] = $rating;
        $_SESSION['review'] = $review;



        $response = [
            "status" => "success",
            "message" => "Review received and processed successfully",
            "data" => $user,
        ];

        echo json_encode($response);
    } else {
        // Handle JSON decoding error
        http_response_code(400); // Bad Request
        echo json_encode([
            "status" => "error",
            "message" => "Invalid JSON data",
        ]);
    }
} else {
    http_response_code(405); // Method Not Allowed
}
?>