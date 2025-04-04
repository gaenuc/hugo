<?php
$apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2N2Q5ODhlMGQyZjlmZjU0NmE1NzYyYTMiLCJlbWFpbCI6ImdhZW51Y0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0tpMU9ZMEVqcHN2LXZTUEtlcTN2OGNNOGM1UmtaTkpTXzZWYVZpczZzTWJoYnd3PXM5Ni1jIiwibmFtZSI6IkdhZXRhbm8gTnVjaWZvcm8iLCJ1cGRhdGVkQXQiOiIyMDI1LTAzLTE4VDE0OjUzOjIwLjQ4OFoiLCJjcmVhdGVkQXQiOiIyMDI1LTAzLTE4VDE0OjUzOjIwLjQ4OFoiLCJnZW5lcmF0ZUF0IjoiMjAyNS0wMy0xOFQxNDo1MzoyMC40ODhaIn0.hBN59TxRUhFiGlQDwCkzGkIcOLLJaSVMIOITRFnDw9M";
$headers = [
    "Authorization: Bearer " . $apiKey,
    "Content-Type: application/json"
];
function getMe($headers) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.mwspace.ai/me");
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}
function getModels($headers) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.mwspace.ai/models");
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

function getChatMessages($headers,$modelId, $chatId) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.mwspace.ai/models/" . $modelId . "/" . $chatId . "/messages");
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}