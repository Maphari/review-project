<?php
if(isset($_POST)) {
    // Get the JSON data from the request body
    $data = file_get_contents("php://input");
    $user = json_decode($data, true);
    $response = [
        "status" => "success",
        "message" => "Review received successfully",
        "data" => $user,
    ];
    if($response)
        echo json_encode($response);
} else {
    http_response_code(405); // Method Not Allowed
}
?>