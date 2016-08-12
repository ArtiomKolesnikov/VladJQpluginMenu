<h1 style="text-align: center; font-size: 25px; margin-top: 2rem" >Contact info</h1>
<p>
<?php

$data = array(
    "phone" => "112233",
    "address" => "Ulicz Pushkina dom kukushkina",
    "email" => "Admin@site.com"
);

if(isset($_GET['info'])){
    if(!$data[$_GET['info']]){
        header("HTTP/1.0 404 Not Found");
    }
    echo $_GET['info']." : ".$data[$_GET['info']];
}else{
    foreach ($data as $param => $value){
        echo $param . " : " . $value ."<br/>";
    }
}

?>
</p>
