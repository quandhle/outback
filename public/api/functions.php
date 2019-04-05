<?php

if (!function_exists('handleError')) {
    function handleError($error) {
        $output = [
            'success' => false,
            'error' => $error -> getMessage() 
        ];
    
        $json_output = json_encode($output);
        print($json_output);
    }
}

if (!handleError('handleCors')) {
    function handleCors() {
        header("Access-Control-Allow-Origin: *");
        if ($_SERVER['REQUEST METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        }
    }
}

?>