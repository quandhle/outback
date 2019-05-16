<?php

require_once('config.php');

$user_id = mysqli_insert_id($conn);
$token = session_id() . $user_id . microtime();
$token= sha1($token);

$guestIDQuery = "INSERT INTO
        `user`
    SET
        `is_guest` = 1,
        `token` = '$token'
";

$guestIDResult = mysqli_query($conn, $guestIDQuery);

if (!$guestIDResult) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception('Unable to add guest.');
};

$connectQuery = "INSERT INTO
        `user_connection`
    SET
        `token` = '$token',
        `user_id` = $user_id,
        `created` = NOW()
";

$connectResult = mysqli_query($conn, $connectQuery);

if (!$connectResult) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception('Cannot log in: connection now saved.');
};

$_SESSION['user_data'] = [
    'user_id' => $user_id,
    'token' => $token,
    'is_guest' => true
];
