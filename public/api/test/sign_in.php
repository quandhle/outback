<?php 

session_start();

$output = [
    'message' => 'Sign in api working!'
];

if (empty($_SESSION['user'])) {
    $_SESSION['user'] = 'Quan Le';

    $output['message'] = 'Session set. User signed in.';
} else {
    $output['message'] = 'User already signed in.';
    $output['user'] = $_SESSION['user'];
}

print(json_encode($output));