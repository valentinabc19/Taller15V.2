<?php
    // Obtener los datos del formulario
    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $precio = $_POST["precio"];
    $inventario = $_POST["inventario"];
    // URL de la solicitud PUT, usando el ID del producto
    $url = 'http://producto:3002/productos/'.urlencode($id);

    // Datos que se enviarán en la solicitud PUT
    $data = array(
        'nombre' => $nombre,
        'precio' => $precio,
        'inventario' => $inventario
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

    // Manejar la respuesta
    if ($response === false) {
        header("Location:index.html");
    } else {
        // Redirigir a una página de confirmación o éxito
        header("Location: admin-prod.php");
    }

    // Cerrar la conexión cURL
    curl_close($ch);
?>