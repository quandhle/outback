<?php

require_once('config.php');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$user_id = $_SESSION['user_id'];
$cart_id = $_SESSION['user_id'];
$product_id = intval($input['product_id']);

// $output = [
//     'cart_id' => $cart_id,
//     'user_id' => $user_id,
//     'product_id' => $product_id
// ];

// print(json_encode($output));
// exit();

$delete_query = "DELETE FROM `cart_item` WHERE `cart_id` = $cart_id AND `product_id` = $product_id";

$result = mysqli_query($conn, $delete_query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (!$result) {
    throw new Exception(mysqli_error($conn));
}

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception ('Unable to find and delete budget entry');
}

$output = [
    'success' => true,
];

print(json_encode($output));
