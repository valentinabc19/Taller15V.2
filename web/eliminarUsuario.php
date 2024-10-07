<?php
    // Obtener el ID del producto desde el formulario
    $usuario = $_POST["usuario"];
    
    // URL de la solicitud DELETE, usando el ID del producto
    $url = 'http://usuario:3001/usuarios/'.urlencode($usuario);

    // Inicializar cURL
    $ch = curl_init();

    // Configurar opciones de cURL para la solicitud DELETE
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");  // Establecer el método DELETE
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud DELETE
    $response = curl_exec($ch);

    // Manejar la respuesta
    if ($response === false) {
        header("Location:index.html");
    } else {
        // Redirigir a una página de confirmación o éxito
        header("Location: admin.php");
    }

    // Cerrar la conexión cURL
    curl_close($ch);
?>
