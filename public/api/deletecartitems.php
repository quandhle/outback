<?php

require_once('config.php');

$user_id = $_SESSION['user_id'];
$cart_id = $_SESSION['user_id'];

print($cart_id);
exit();

$delete_query = "DELETE FROM `cart_item` WHERE `cart_id` = $cart_id LIMIT 1";

$result = mysqli_query($conn, $delete_query);

// print($result);
// exit();

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) === 0) {
    throw new Exception('Unable to remove from cart');
};

$output = [
    'success' => true,
    'cart_id' => $_SESSION['cart_id'],
    'user_id' => $_SESSION['user_id']
];

print(json_encode($output));
