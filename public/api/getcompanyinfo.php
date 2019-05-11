<?php

require_once('config.php');

$company = $_GET['company'];

$query = "SELECT * FROM `company` WHERE `company_name` = '$company'";

$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception (mysqli_error($conn));
};

if (mysqli_num_rows($result) > 1) {
    throw new Exception('Company does not exist.');
};

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = [
        'company-name' => $row['company-name'],
        'website' => $row['website'],
        'number' => $row['number'],
        'headquarter' => $row['headquarter']
    ];
}

$output['success'] = true;
$output['company'] = $data;

print(json_encode($output));
