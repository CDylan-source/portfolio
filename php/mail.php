<?php 
$array =  array();

function check($x) {

    if( !isset($x)) {
        $array[] = "$x";
        print_r($array);
        return false;
    }

    else {
        if(empty($x)) {
            
            
            return "$x est vide";
        }
        else{
            return true;
        }
    }

    
};



if(check($_POST['mail']) && check($_POST['name']) && check($_POST['subject']) && check($_POST['message']) && check($_POST['firstname'])){
    $name=$_POST['name'];
    $firstname=$_POST['firstname'];
$mail=$_POST['mail'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$email_to="chapuis.dylan18@gmail.com";

    if(!preg_match('/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/iD', $mail)) {
        echo json_encode("Le mail ne correspond pas à une valeur possible");
    }
    elseif(!preg_match("/^[a-zA-ZéàèêâûôîÉÀÈËëÊÂÎÛÔ]+([-']?([a-zA-ZéàèêâûôîÉÀÈËëÊÂÎÛÔ])$)/", $name)){
        echo json_encode("Le nom entré n'est pas bon");
    }
    elseif(!preg_match("/^[a-zA-ZéàèêâûôîÉÀÈËëÊÂÎÛÔ]+([-']?([a-zA-ZéàèêâûôîÉÀÈËëÊÂÎÛÔ])$)/", $firstname)) {
        echo json_encode("Le prénom entré n'est pas bon");
    }
    elseif(preg_match("/[<]+/", $subject) || preg_match("/[<]+/", $message)){
        echo json_encode("Pas de script !");
    }
    else {
        mail($email_to, $subject, $message."\r\n".$mail."\r\n".$name."\r\n".$firstname);
        echo json_encode("Message envoyé");
    }

}
else{
    echo json_encode("Tous les champs ne sont pas remplis.");
};




