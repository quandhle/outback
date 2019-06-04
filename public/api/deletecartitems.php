<?php

require_once('config.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$user_id = $_SESSION['user_id'];
$cart_id = $_SESSION['cart_id'];
$product_id = intval($input['product_id']);
$quantity = intval($input['quantity']);
$total_price = intval($input['total_price']);


$delete_query = "DELETE FROM `cart_item` WHERE `cart_id` = $cart_id AND `product_id` = $product_id";

$result = mysqli_query($conn, $delete_query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception ('Unable to find and delete budget entry');
}

$update_cart_query = "UPDATE `cart`
    SET
        `item_count` = `item_count` - $quantity,
        `total_price` = `total_price` - $total_price
    WHERE `user_id` = $user_id
    AND `id` = $cart_id
";

$update_cart_result = mysqli_query($conn, $update_cart_query);

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception ('Unable to find and delete cart item.');
}

$output = [
    'success' => true,
];

print(json_encode($output));
