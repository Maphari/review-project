<?php
session_start();

// Access session variables
$username = $_SESSION['username'];
$email = $_SESSION['email'];
$rating = $_SESSION['rating'];
$review = $_SESSION['review'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/thankyou.css" />
    <script defer src="https://kit.fontawesome.com/4441d92e7c.js" crossorigin="anonymous"></script>
    <title>Review</title>
</head>

<body>
    <header class="thankyou-container__header">
        <h1>Thanks for the review</h1>
    </header>
    <main class="thankyou-container__main">
        <i class="fa-solid fa-smile"></i>
        <section class="section-container" id="section-data">
            <p>
                <span>Names: </span>
                <?php echo $username; ?>
            </p>
            <p>
                <span>Email: </span>
                <?php echo $email; ?>
            </p>
            <p>
                <span>Rating: </span>
                <?php if($rating > 1) echo $rating . " stars"; else echo $rating . " star"; ?>
            </p>
            <p>
                <span>Review: </span>
                <?php echo $review; ?>
            </p>
            <a class="link" href="./index.php">Go to review</a>
        </section>
    </main>
</body>

</html>