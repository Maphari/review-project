<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/main.css" />
    <script defer src="https://kit.fontawesome.com/4441d92e7c.js" crossorigin="anonymous"></script>
    <title>Review</title>
</head>

<body>
    <main class="main-container">
        <section class="main-container__wrapper">


            <header class="main-container__header">
                <h1 class="main-container__header-head">Write a review</h1>
                <p class="main-container__header-para">your review matters to us.</p>
            </header>
            <p id="error" class="error"></p>
            <section class="main-container__section">

                <form id="form" action="./review.php" method=" POST" class="main-container__section-form">
                    <div class="main-container__section-form__input-container">
                        <label for="names"
                            class="main-container__section-form__input-container__names-label">Name:</label>
                        <div>
                            <i class="fa-solid fa-user"></i> <input type="text" placeholder="John Doe" id="names"
                                name="name" class="main-container__section-form__input-container__names-input" />
                        </div>
                    </div>
                    <div class="main-container__section-form__input-container">
                        <label for="email"
                            class="main-container__section-form__input-container__names-label">Email:</label>
                        <div>
                            <i class="fa-solid fa-envelope"></i> <input type="email" placeholder="Someone@example.com"
                                id="email" name="email"
                                class="main-container__section-form__input-container__names-input" />
                        </div>
                    </div>
                    <div class="main-container__section-form__input-container">
                        <label for="rating"
                            class="main-container__section-form__input-container__names-label">Rating:</label>
                        <select id="rating" name="rating">
                            <option value="default">Select rating</option>
                            <option value="5">5 stars</option>
                            <option value="4">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="2">2 stars</option>
                            <option value="1">1 stars</option>
                        </select>
                    </div>
                    <div class="main-container__section-form__input-container">
                        <label for="review"
                            class="main-container__section-form__input-container__names-label">Review:</label>
                        <div>
                            <textarea rows="5" cols="100" placeholder="Enter your review" id="review" name="review"
                                class="main-container__section-form__input-container__names-input"></textarea>
                        </div>
                    </div>
                    <div class="main-container__section-form__input-container">
                        <button class="primary-BTN" type="submit">Submit review</button>
                    </div>

                </form>
            </section>
        </section>
        <script src="../js/index.js" type="text/javascript"></script>
</body>

</html>