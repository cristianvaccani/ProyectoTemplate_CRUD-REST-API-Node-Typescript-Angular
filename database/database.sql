CREATE DATABASE marelli_DB;

USE marelli_DB;

CREATE TABLE obra (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(180),
    FechaFinalizacion date,
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

USE marelli_DB;
DESCRIBE obra;