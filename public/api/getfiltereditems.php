<?php

require_once('config.php');

$type = $_GET['type'];
$key = $_GET['key'];

$output = [
    'success' => true,
    'type' => $type,
    'key' => $key
];

if ($type === 'brand') {
	$type = 'company';
};

$query = "SELECT
		p.`id`, p.`company`, p.`name`, p.`price`, p.`category`, p.`description`, p.`misc_details`,
		ANY_VALUE(i.`url`) as `url`
	FROM `product` AS p
	JOIN `images` AS i
	ON i.`product_id` = p.`id`
	WHERE `${type}` =  '${key}'
	GROUP BY p.`id`
";

$result = mysqli_query($conn, $query);

if (!$result) {
	throw new Exception(mysqli_error($conn));
}

if (mysqli_num_rows($result) === 0) {
	throw new Exception('Unable to get filtered products.');
};

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = [
        'id' => $row['id'],
		'company' => $row['company'],
		'name' => $row['name'],
		'price' => $row['price'],
		'cateogry' => $row['category'],
		'description' => $row['description'],
		'misc_details' => $row['misc_details'],
		'url' => $row['url']
    ];
};

$output = [
    'success' => true,
    'products' => $data
];

print(json_encode($output));
