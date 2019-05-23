<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

if(empty($_SESSION['cart_id'])){
    throw new Exception('No cart id.');
};

$cart_id = $_SESSION['cart_id'];
$user_id = $_SESSION['user_id'];

$cart_query = "SELECT
        p.`name`,
        p.`price`,
        ci.`quantity`,
        (SELECT `url` FROM `images` WHERE `images`.`product_id` = p.`id` LIMIT 1) AS url,
        p.`id`,
        c.`created`, c.`total_price`
    FROM `product` as p
    JOIN `cart_item` as ci
    ON ci.`product_id` = p.`id`
    JOIN `cart` as c
    ON ci.`cart_id` = c.`id`
    AND c.`user_id` = $user_id
";

$cart_data = mysqli_query($conn, $cart_query);

if (!$cart_data) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_num_rows($cart_data) === 0) {
    throw new Exception('Unable to retrieve cart data.');
}

$output['cartItems'] = [];
$output['cartData'] = [];

while ($row = mysqli_fetch_assoc($cart_data)) {
    $output['cartItems'][] = [
        'name' => $row['name'],
        'price' => (int)$row['price'],
        'image' => $row['url'],
        'quantity' => (int)$row['quantity'],
        'id' => (int)$row['id']
    ];

    $output['cartData']['created'] = $row['created'];
    $output['cartData']['total'] = (int)$row['total_price'];
    $output['cartData']['cart_id'] = $_SESSION['cart_id'];
}

$output['success'] = true;

print(json_encode($output));
