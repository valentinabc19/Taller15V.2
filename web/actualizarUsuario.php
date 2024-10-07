<?php
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $usuario = $_POST["usuario"];
    $password = $_POST["contrasena"];
    // URL de la solicitud PUT, usando el user del usuario
    $url = 'http://usuario:3001/usuarios/'.urlencode($usuario);

    // Datos que se enviarán en la solicitud PUT
    $data = array(
        'nombre' => $nombre,
        'email' => $email,
        'contrasena' => $password
    );
    $json_data = json_encode($data);

    // Inicializar cURL
    $ch = curl_init();

    // Configurar opciones de cURL para la solicitud PUT
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");  // Establecer el método PUT
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud PUT
    $response = curl_exec($ch);

    // Verificar si hubo algún error en la ejecución del cURL
    // Manejar la respuesta
    if ($response === false) {
        header("Location:index.html");
    } else {
        // Redirigir a una página de confirmación o éxito
        header("Location: usuario.php");
    }

    // Cerrar la conexión cURL
    curl_close($ch);
?>