<?php

require_once('config.php');

if (empty($_GET['productId'])) {
	throw new Exception('Please provide a product ID.');
}

$id = (int)$_GET['productId'];

// 
$query = "SELECT p.`id`, p.`name`, p.`price`, p.`description`, p.`misc_details` AS `miscDetails`,
		GROUP_CONCAT(i.`url`) AS `images`
	FROM `product` AS p
	JOIN `images` AS i
		ON p.`id` = i.`product_id`
	WHERE p.`id` = $id
	GROUP BY p.`id`
";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception( mysqli_error($conn) );
}

if(mysqli_num_rows($result) === 0){
	throw new Exception( "No data available for product id $id");
}

$data = mysqli_fetch_assoc($result);

$data['price'] = intval($data['price']);
$data['images'] = explode(',', $data['images']);

$output = [
    'success' => true,
    'productInfo' => $data
];

print(json_encode($output));
