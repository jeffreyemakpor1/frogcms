<?php

    interface doAuth{
        public function addFrog() : bool;
        public function removeFrog() : bool;
        public function updateFrog() : bool;
        public function listFrog() : array;
    }

    $path= dirname(__DIR__);
    $file = file_get_contents($path."/config.json");
    $config = json_decode($file);
    define("config",[
        "DB_HOST" => $config->DB_HOST,
        "DB_USERNAME" => $config->DB_USERNAME,
        "DB_PASSWORD" => $config->DB_PASSWORD,
        "DB_DATABASE" => $config->DB_DATABASE,
        "DB_SOCKET" => $config->DB_SOCKET,
        ]);
?>
