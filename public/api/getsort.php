<?php

require_once('config.php');

$output = [
    'success' => false
];

$type = $_GET['type'];
$sortValue = $_GET['sortValue'];

if (!$type) {
    throw new Exception('Please provide sort type.');
};

if (!$sortValue) {
    throw new Exception('Please provide sort value.');
};

$query = "SELECT * FROM `product` WHERE `$type` = `$sortValue`";

$result = mysqli_query($conn, $query);

if (!$result) {
	throw new Exception(mysqli_error($conn));
}

if (mysqli_num_rows($result) === 0) {
	throw new Exception('Unable to get products');
};

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
};

$output = [
    'success' => true,
    'data' => $data
];

print(json_encode($output));
