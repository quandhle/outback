<?php

ob_start(null, 0, PHP_OUTPUT_HANDLER_CLEANABLE ^ PHP_OUTPUT_HANDLER_REMOVABLE);
require_once('config.php');
ob_end_clean();

$output = [
    'success' => false
];

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$last_name = $input['last_name'];
$first_name = $input['first_name'];
$email = $input['email'];
$password = $input['password'];

if (empty($email)) {
    throw new Exception('Please enter email.');
};

if (empty($password)) {
    throw new Exception('Please provide password.');
};

$hashedPassword = sha1($password);
unset($password);

$query = "INSERT INTO `user`
    SET
        `last_name` = ?,
        `first_name` = ?,
        `email` = ?,
        `password` = ?,
        `is_guest` = 0
";

$statement = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($statement, 'ssss', $last_name, $first_name, $email, $hashedPassword);
$result = mysqli_stmt_execute($statement);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception('Unable to sign up.');
};

require_once('login.php');
