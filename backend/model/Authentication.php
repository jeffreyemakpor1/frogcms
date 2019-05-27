<?php
require dirname( dirname(__DIR__)) . "/vendor/autoload.php";
class Authentication implements doAuth
{

    protected $conn = null;
    private $isConnected = false;

    function __construct() {
        $this->connect();
    }

    private function connect():bool{

        $this->conn = mysqli(
            config['DB_HOST'],
            config['DB_USERNAME'],
            config['DB_PASSWORD'],
            config['DB_DATABASE'],
            null,
            config[ 'DB_SOCKET']);
        
        ($this->conn) ? $this->isConnected = true : $this->isConnected = false;
        return $this->isConnected;
    }

    public function listFrog(): array{
        return[];
    }

    public function addFrog(array $data): bool
    {
        // $query = mysqli_query($this->conn, "INSERT  into  frog (frog_label,frog_weight,frog_color,frog_description) values()");
        $query = $this->conn->prepare("INSERT  into  frog (frog_label,frog_weight,frog_color,frog_description) values()");
        return false;
    }

    public function updateFrog(array $data): bool
    {
        return false;
    }

    public function removeFrog($label): bool
    {
        return false;
    }
}

$Auth = new Authentication;

var_dump(($Auth));
?>