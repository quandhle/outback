<?php

require_once('config.php');

$quer = "SELECT `last_name`, `first_name` FROM `user` WHERE `id` = $user_id";

$result = mysqli_query($conn, $query);

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

$user = mysqli_fetch_assoc($result);

if ((int)$user['is_guest'] === 0) {
    $output = [
        'name' => $user['first_name'].' '.$user['last_name'],
        'is_guest' => false
    ];
    $_SESSION['user_data']['is_guest'] = false;
} else {
    $output = [
        'name' => 'Guest',
        'is_guest' => true
    ];
    $_SESSION['user_data']['is_guest'] = true;
};
