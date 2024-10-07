USE almacenABC;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    nombre VARCHAR(20),
    email VARCHAR(50),
    usuario VARCHAR(10),
    contrasena VARCHAR(20),
    PRIMARY KEY(usuario)
);

DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20),
    precio FLOAT,
    inventario INT,
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS ordenes;
CREATE TABLE ordenes (
    id INT NOT NULL AUTO_INCREMENT,
    nombreCliente VARCHAR(20),
    emailCliente VARCHAR(50),
    totalCuenta FLOAT,
    fechahora DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
INSERT INTO usuarios (nombre, email, usuario, contrasena) VALUES ('Administrador', 'admin@mail.com', 'admin', '1234');
INSERT INTO usuarios (nombre, email, usuario, contrasena) VALUES ('Usuario1', 'user1@mail.com', 'user1', '12345');
INSERT INTO productos (nombre, precio, inventario) VALUES ('producto1', '20000', '25');