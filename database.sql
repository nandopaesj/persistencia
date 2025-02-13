CREATE DATABASE IF NOT EXISTS AULA;

USE AULA;

CREATE TABLE IF NOT EXISTS cliente (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    TELEFONE VARCHAR(20),
    ENDERECO VARCHAR(255)
);  

DELIMITER //

CREATE PROCEDURE inserirCliente(
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_telefone VARCHAR(100),
    IN p_endereco VARCHAR(100)
)
BEGIN 
    INSERT INTO cliente(nome, email, telefone, endereco)
    VALUES(p_nome, p_email, p_telefone, p_endereco);
END //

DELIMITER ;