<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
if (0 === strpos($_SERVER['CONTENT_TYPE'], 'application/json')) {
    $_POST = json_decode(file_get_contents('php://input'), true);
    $info = file_get_contents('php://input');   
}
$email = strtolower( $_POST['email']);


$from =$_POST['from'];
if ($_POST['phone']) {
    $phone = $_POST['phone'];
} else {
    $phone = 000000000000;
}
if ($from == 'HOME') {
    $firstName = sanitizeName( $_POST['name']);
    $message =$_POST['message'];
    if( contactMail($email, $message, $firstName)) {
        $response = json_encode (appendData("OK",'100',false));
        echo $response;
    } else {
         $response = json_encode (appendData("OK",'100',false));
    }
} else if($from == 'BOAT-PAGE') {
     
    $firstName = sanitizeName( $_POST['name']);
    $data = $_POST;
    if( boatRequestMail($email, $data, $firstName)) {
        
        $response = json_encode (appendData("OK",'100',false));
        
    } else {
        
        $response = json_encode (appendData("OK",'602',true));
    }
    echo $response;
}




function appendData($data,$resultCode='100',$error) {
    $resultCodeToText = array
    (
        '100' => 'OK',
        '101' => 'No CSRFName found',
        '102' => 'Invalid CSRF token.',
        '103' => 'Too many Retry account blocked for 5 minutes',
        '104' => 'Wrong Password',
        '105' => 'Qr image Error',
        '106' => 'Qr image Ok',
        '107' => 'Insert Code',
        '108' => 'Error Server Connection aborted',
        '109' => 'Cannot Found Database',
        '110' => 'No Results',
        '111' => 'Not logged',
        '112' => 'Unauthorised',
        '113' => 'Already Logged',
        '201' => 'Authentication Error',
        '202' => 'Bad Authentication value',
        '203' => 'Bad Authentication parameter',
        '204' => 'Wrong parameter',
        '205' => 'Email Already Exists',
        '206' => 'Token Expired',
        '207' => 'Wrong Token',
        '208' => 'Bookmark Already deleted',
        '209' => 'Bookmark Already added',
        '210' => 'No Results.',
        '211' => 'Email not registered',
        '301' => 'Token Expired',
        '302' => 'Email already Validated',
        '401' => 'Bad request',
        '402' => 'Incorrect Parameter Value',
        '403' => 'User Not Allowed',
        '408' => 'Wrong Command',
        '409' => 'Missing Command',
        '410' => 'Required parameter missing',
        '411' => 'Query Error.',
        '412' => 'DB error. Try again later.',
        '413' => 'Execute Query Error',
        '414' => 'Captcha_Error',
        '415' => 'Captcha_Wrong',
        '416' => 'Missed Password Parameters',
        '417' => 'Different Password',
        '501' => 'Fill the form correctly',
        '502' => 'Email not exists',
        '503' => 'Wrong Password',
        '602' => 'Email not Sent',
        '701' => 'Error Chat ',
        '800' => 'Invalid Type Docs',
        '801' => 'Error Uploading File',
        '802' => 'Invalid file Size or Type',
        '803' => 'Image Uploaded Successfully!',
        '804' => 'File already exists',
        '805' => 'File Error',
        '806' => 'Max 3 upload'
    );
    $response['resultCode'] = $resultCode;
    $response['errorText'] = $resultCodeToText[$resultCode];
    $response['error'] = $error;
    $response['result'] = $data;
    return $response;
}

function sanitizeName($name){
    $name = preg_replace("/%u([0-9a-f]{3,4})/i", "&#x\\1;", urldecode($name));
    $name = html_entity_decode($name, null, 'UTF-8');
    $name=strtolower($name);
    $name=ucfirst($name);
    return $name ;
}

function boatRequestMail($email, $msg, $firstName) {

    $andata=
    '<br>Data: '.getDay( $msg['date']).', '.substr($msg['date'],0, 10).
    '<br>Nome: '.$firstName.
    '<br>Barca: '.$msg['boat']. 
    '<br>Email: '.$email;
    $services= false;
    $add= '<br>Servizi aggiuntivi: <br>';
    foreach ($msg as $key => $value) {
        if($key != 'boat' && $key != 'message' && $key != 'date' && $key != 'name'  && $key != 'email' && $key != 'from') {
            if($value ) {
                $services= true;
                $add.=$key.'<br>';
            }
        }
    }
    if($services) {
        $andata.=$add;    
    }
    $andata.='<br>Messaggio: '.$msg['message'];
    
        
    // $to = "chillemirosamaria@gmail.com";
    $to = "gaetanonuciforo@ezfarm.it";
    $subject = "Richiesta informazioni da ".$firstName;
    $headers = "From: Hugo Experience <info@hugoexperience.com>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $message = "<html>
    <head>
    
    <title>Hugo Experience - Richiesta informazioni</title>
    </head>
    
    <body style='background-color: white;color: #364C61;padding: 15px'>
        
    <p>Hai ricevuto la seguente richiesta di informazioni: <br>".
    $andata.
    
    '</p><br><br>
    <small>
        hugoexperience.com © 2025 All Rights Reserved 
    </small>
    </p>
    </body>
    </html>';


    $sendMail = mail($to, $subject, $message, $headers);

    if ($sendMail) {
        // echo $message;
        return true;
    }

    else {
        // echo'MAILKO';
        return false;
    }
   
}

function contactMail($email, $msg, $firstName) {
                                            
        $to = "gaenuc@gmail.com";
        // $to = "chillemirosamaria@gmail.com";
        $subject = "Richiesta informazioni da ".$firstName;

        // $headers = "Reply-To: info@gregan.it\r\n";
        $headers = "From: Hugo Experience <info@hugoexperience.com>\r\n";
        // headers .= "CC: info@dietebestiali.it\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Reply-To: ".$email." \r\n";
        
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $message = "<html>
        <head>
       
        <title>Hugo Experience - Richiesta informazioni</title>
        </head>
        
        <body style='background-color: white;color: #364C61;padding: 15px'>
          
        <p>Hai ricevuto la seguente richiesta di informazioni: <br> 
        <p>Nome e cognome: $firstName</p>
        <p>Email: $email</p>        
        <p>Messaggio: ".$msg."</p><br>
        <br><br>
        <small>
         hugoexperience.com © 2025 All Rights Reserved 
        </small>
        </p>
        </body>
       </html>";
        $sendMail = mail($to, $subject, $message, $headers);

        if ($sendMail) {
            // echo'MAILOK';
            return true;
        }

        else {
            // echo'MAILKO';
            return false;
        }
    
}

function getDay($date) {
    $days=substr($date, 0,2);
    $month = substr($date,3,2);
    $year = substr($date, 6,4);
    $dayofweek = date('w', strtotime($month."/".$days."/".$year));
    $days= array('Domenica', 'Lunedi', 'Martedi','Mercoledi', 'Giovedi','Venerdi','Sabato');
    return $days[$dayofweek];
}