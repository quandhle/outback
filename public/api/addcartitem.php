<?php

require_once('config.php');

$quantity = intval($_GET['quantity']);
$product_id = intval($_GET['product_id']);


if(empty($_GET['quantity'])){
	throw new Exception('Please send quantity of product.');
}

if(empty($_GET['product_id'])){
	throw new Exception('You must send a product_id (int) with your request');
}

$query = "SELECT `price` FROM `product` WHERE `id` = $product_id";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception(mysqli_error($conn));
}

if( mysqli_num_rows($result) === 0){
	throw new Exception("no product matches product id $product_id");
}

$product_data = mysqli_fetch_assoc($result);

$price = (int)$product_data['price'];

$total = $price * $quantity;

if (empty($_SESSION['user_id'])) {
    $_SESSION['user_id'] = 0;
}

$user_id = $_SESSION['user_id'];

if (empty($_SESSION['cart_id'])) {
    $cart_create_query = "INSERT INTO `cart`
        SET
            `item_count` = $quantity,
            `total_price` = $total,
            `created` = NOW(),
            `user_id` = $user_id,
            `changed` = NOW()
    ";

    $cart_result = mysqli_query($conn, $cart_create_query);

    if (!$cart_result) {
		throw new Exception(mysqli_error($conn));
    }
    
	if (mysqli_affected_rows($conn) === 0) {
		throw new Exception('Unable to add product.');
    }
    
	$cart_id = mysqli_insert_id($conn);
	$_SESSION['cart_id'] = $cart_id;
} else {
    $cart_id = $_SESSION['cart_id'];

    $update_cart_query = "UPDATE `cart`
        SET
            `item_count` = `item_count` + $quantity,
            `total_price` = `total_price` + $total,
        WHERE `id` = $cart_id
    ";

    $update_result = mysqli_query($conn, $update_cart_query);

    if (!$update_result) {
		throw new Exception(mysqli_error($conn));
    };
    
	if (mysqli_affected_rows($conn) === 0) {
		throw new Exception('Cart data was not updated');
    };
}

$cart_item_query = "INSERT INTO `cart_item`
    SET
        `product_id` = $product_id,
        `quantity` = $quantity,
        `cart_id` = $cart_id
    ON DUPLICATE KEY UPDATE 
        `quantity` = `quantity` + $quantity
";

$cart_item_result = mysqli_query($conn, $cart_item_query);

if (!$cart_item_result) {
	throw new Exception( mysqli_error( $conn ));
};

if (mysqli_affected_rows($conn) === 0) {
	throw new Exception('failed to insert into cart items');
};

$cart_query = "SELECT `item_count`, `total_price` FROM `cart` WHERE `id` = $cart_id";

$cart_result = mysqli_query($conn, $cart_query);

if (!$cart_result) {
    throw new Exception('Unable to get updated cart data');
};

if (mysqli_num_rows($cart_result) === 0) {
    throw new Exception('No cart data found');
};

$row = mysqli_fetch_assoc($cart_result);

$cart_quantity = $row['item_count'];
$total = $row['total_price'];

$output = [
    'success' => true,
    'cartCount' => $cart_quantity,
    'cartTotal' => $total
];

print(json_encode($output));
