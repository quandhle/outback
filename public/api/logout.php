<?php

require_once('config.php');

if (empty($_SESSION['user_data']['token'])) {
    $output['success'] = true;
    $output['login'] = false;
    
    print(json_encode($output));

    exit();
}

$token = $_SESSION['user_data']['token'];

if ($_SESSION['user_data']['is_guest'] === true) {
    $query = "DELETE FROM
            `user`
        WHERE
            `token` = '$token'
    ";

    $result = mysqli_query($conn, $query);

    if (!$result) {
        throw new Exception(mysqli_error($conn));
    };

    if (mysqli_affected_rows($conn) !== 1) {
        $output = [
            'success' => true,
            'login' => false
        ];

        unset($_SESSION['user_data']);

        print(json_encode($output));

        exit();
    };
}

$query = "DELETE FROM
        `user_connection`
    WHERE `token` = '$token'
";

$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) !== 1) {
    $output = [
        'success' => true,
        'login' => false
    ];

    print(json_encode($output));

    exit();
};

unset($_SESSION['user_data']);

$output['success'] = true;

$json_output = json_encode($output);

print($json_output);
