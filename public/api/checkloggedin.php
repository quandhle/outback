<?php

require_once('config.php');

if (!empty($_SESSION['user_data']['token'])) {
    $token = $_SESSION['user_data']['token'];
} else {
    $json_input = file_get_contents("php://input");
    $input = json_decode($json_input, true);

    if (empty($_GET['token']) && empty($input['token'])) {
        $output = [
            'success' => true,
            'login' => false
        ];

        print(json_encode($output));

        exit();
    };

    if (!empty($_GET['token'])) {
        $token = $_GET['token'];
    };

    if (!empty($input['token'])) {
        $token = $input['token'];
    };
};

$checkLoginQuery = "SELECT * FROM `user_connection` WHERE `token` = ?";

$statement = mysqli_prepare($conn, $checkLoginQuery);
mysqli_stmt_bind_param($statement, 's', $token);
mysqli_stmt_execute($statement);

$result = mysqli_stmt_get_result($statement);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_num_rows($result) === 0) {
    $output = [
        'success' => true,
        'login' => false
    ];

    print(json_encode($output));

    exit();
};

$data = mysqli_fetch_assoc($result);
$user_id = $data['user_id'];
$token = $data['token'];

$_SESSION['user_data'] = [
    'user_id' => $user_id,
    'token' => $token
];

require_once('checkuserstatus');

$output = [
    'success' => true,
    'user_id' => $user_id,
    'login' => true,
    'token' => $token
];

print(json_encode($output));
