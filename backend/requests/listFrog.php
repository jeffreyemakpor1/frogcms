<?php
require dirname(dirname(__DIR__)) . "/vendor/autoload.php";

if( $_SERVER['REQUEST_METHOD'] === 'POST'){
            $Auth = new Authentication;

            if(isset($_POST['listApp'])
                ){

                    $listApp = $_POST['listApp'];

                    header('Content-Type: application/json');
                    if($result = $Auth->listFrog()){
                        echo json_encode(["response"=> $result]);
                        exit;
                    }
                    
                    echo json_encode(["response"=> "error"]);
                }
    }
