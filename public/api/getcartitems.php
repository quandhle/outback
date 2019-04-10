<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

$cart_id = $_SESSION['cart_id'];

if (empty($_SESSION['cart_id'])) {
    throw new Exception('No cart id.');
}

// $cart_query = "SELECT
//     c.created, c.total_price, ci.quantity, p.id, p.name, p.price, (SELECT url FROM images WHERE products_id = p.id LIMIT 1 )
//     AS image
//     FROM carts AS c
//     JOIN cart_items AS ci
//     ON ci.carts_id = c.id
//     JOIN products AS p
//     ON ci.products_id = p.id
//     WHERE c.id = 1
// ";

$cart_query =
    "SELECT
        p.`name`,
        p.`price`,
        ci.`quantity`,
        (SELECT `url` FROM `images` WHERE `images`.`products_id` = p.`id` LIMIT 1) AS url,
        p.`id`
    FROM `products` as p
    JOIN `cart_items` as ci
    ON ci.`products_id` = p.`id`
    JOIN `carts` as c
    ON ci.`carts_id` = c.`id`
";

// $cart_data = mysqli_query($conn, $cart_query);

// if (!$cart_data) {
//     throw new Exception(mysqli_error($conn));
// };

// if (mysqli_num_rows($cart_data) === 0) {
//     throw new Exception('Unable to retrieve cart data.');
// }

// $output['cartItem'] = [];
// $output['cartMetaData'] = [];

// while ($row = mysqli_fetch_assoc($cart_data)) {
//     print_r($row);

//     $output['cartItem'][] = [
//         'name' => $row['name'],
//         'price' => $row['price'],
//         'image' => $row['image'],
//         'quantity' => $row['quantity'],
//         'id' => $row['id']
//     ];

//     $output['cartMetaData']['created'] = $row['created'];
//     $output['cartMetaData']['total'] = $row['total_price'];
// }

// $output['success'] = true;

// print(json_encode(
//     [
//         'message' => 'Get cart data endpoint',
//         'cartID' => $cart_id
//     ]
//     )
// );