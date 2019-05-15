<?php

require_once('config.php');

$query = "SELECT `category` FROM `product` GROUP BY `category`";

$result = mysqli_query($conn, $query);

$data = [
    'category' => [],
    'activity' => [],
    'company' => []
];

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_num_rows($result) === 0) {
    throw new Exception('Companies not found.');
};

while ($row = mysqli_fetch_assoc($result)) {
    $data['category'][] = $row['category'];
};

$query = "SELECT `activity` from `product` GROUP BY `activity`";

$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $data['activity'][] = $row['activity'];
};

$query = "SELECT `company` from `product` GROUP BY `company`";

$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $data['company'][] = $row['company'];
};

$output['success'] = true;
$output['data'] = $data;

print(json_encode($output));
