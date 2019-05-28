<?php
require dirname( dirname(__DIR__)) . "/vendor/autoload.php";
error_reporting(E_ALL);


/***
 * 
 * Class Authentication contains all our database connections and query
 */
class Authentication implements doAuth
{

    protected $conn = null;
    private $isConnected = false;

    function __construct() {
        $this->connect();
    }

    private function connect():bool{

        $this->conn = mysqli_connect(
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
        $data = [];
        $query = mysqli_query(
            $this->conn,
            "SELECT * from frogmart");

        if(!$query)
        return false;
        
        while ($get = mysqli_fetch_assoc($query)) {
            array_push($data, $get);
        }
        
        return $data;
    }

    public function addFrog(array $data): bool
    {
        $label = $this->santize( $data[0]);
        $weight = $this->santize( $data[1]);
        $color = $this->santize( $data[2]);
        $desc = $this->santize( $data[3]);

        $query = mysqli_query($this->conn, "INSERT  into  frogmart (frog_label,frog_weight,frog_color,frog_description)
         values(
             '$label',
             '$weight',
             '$color',
             '$desc'

                )") or die(mysqli_error($this->conn));

        if($query){
            return true;  
        }

        return false;
    }


    //not yet done
    public function updateFrog(array $data): bool
    {
        $set = $data['set'];
        $query = mysqli_query($this->conn, "UPDATE frogmart set ");
    
    
        return false;
    }

    public function removeFrog($label): bool
    {   
        $label =  $this->santize($label);
        $query = mysqli_query($this->conn, "DELETE from frogmart where frog_label =  '$label' ") or die(mysqli_error($this->conn));
        
        if($query){
            if( mysqli_affected_rows($this->conn) > 0){
                return true;
            }
        }

        return false;
    }

    private function santize($data){
        $data = mysqli_escape_string($this->conn, $data);
        return $data;
    }
}
?>