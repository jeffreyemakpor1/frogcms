<?php
require dirname(dirname(__DIR__)) . "/vendor/autoload.php";



if( $_SERVER['REQUEST_METHOD'] === 'POST'){
            $Auth = new Authentication;

            if(isset($_POST['frogLabel'])&&
                isset($_POST['frogWeight'])  &&
                isset($_POST['frogColor'])&&
                isset($_POST['frogDescription']) 
                ){
                    if ($_POST['frogLabel'] === '' &&
                        $_POST[ 'frogWeight'] === '' &&
                        $_POST[ 'frogColor'] === '' &&
                        $_POST[ 'frogDescription'] === '' 
                    ) {
                        echo json_encode(["response" => "error"]);
                        exit;
                    }


                    $frogLabel = $_POST['frogLabel'];
                    $frogWeight = $_POST['frogWeight'];
                    $frogColor = $_POST['frogColor'];
                    $frogDescription = $_POST['frogDescription'];

                    
                    header('Content-Type: application/json');
                    if($Auth->addFrog([$frogLabel , $frogWeight , $frogColor , $frogDescription])){
                        echo json_encode(["response"=>"success"]);
                        exit;
                    }
                    
                    echo json_encode(["response"=> "error"]);
                }
    }


?>