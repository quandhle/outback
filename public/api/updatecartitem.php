<?php

require_once('config.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$user_id = $_SESSION['user_id'];
$cart_id = $_SESSION['cart_id'];
$product_id = intval($input['product_id']);
$quantity = intval($input['quantity']);
$price = intval($input['price']);

$update_query = "UPDATE `cart_item`
    SET
        `quantity` = $quantity - 1
    WHERE `cart_id` = $cart_id
    AND `product_id` = $product_id
";

$result = mysqli_query($conn, $update_query);

if (!$result) {
    throw new Exception($conn);
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('Could not update cart item.');
};

$update_cart_query = "UPDATE `cart`
    SET
        `item_count` = `item_count` - 1,
        `total_price` = `total_price` - $price
    WHERE `id` = $cart_id
    AND `user_id` = $user_id
";

$result = mysqli_query($conn, $update_cart_query);

if (!$result) {
    throw new exception($conn);
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('Could not update cart.');
};

$output = [
    'success' => true
];

print(json_encode($output));
