<?php

session_start();

unset($_SESSION['user']);

session_destroy();

print(json_encode(['success' => true]));