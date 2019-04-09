<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$card_id = $_SESSION['card_id'];

print(json_encode(['message' => 'Got data.']));