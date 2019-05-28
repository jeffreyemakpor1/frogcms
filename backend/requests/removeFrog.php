<?php
require dirname(dirname(__DIR__)) . "/vendor/autoload.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $Auth = new Authentication;

    if (isset($_POST[ 'froglabel'])) {

        $froglabel = $_POST[ 'froglabel'];

        header('Content-Type: application/json');
        if ($result = $Auth->removeFrog($froglabel)) {
            echo json_encode(["response" => "success"]);
            exit;
        }

        echo json_encode(["response" => "error"]);
    }
}
