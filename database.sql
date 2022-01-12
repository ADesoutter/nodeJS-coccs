CREATE USER 'coccs_admin'@'localhost' 
IDENTIFIED VIA mysql_native_password USING '***';
GRANT ALL PRIVILEGES ON *.* TO 'coccs_admin'@'localhost' 
REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `coccs_arthro`.* TO 'coccs_admin'@'localhost'; 

CREATE TABLE `coccs_arthro`.`user`
( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`lastname` INT(60) NOT NULL , 
`firstname` VARCHAR(60) NOT NULL , 
`hospital` VARCHAR(90) NOT NULL , 
`phone_number` INT NOT NULL , 
`function` VARCHAR(100) NOT NULL , 
`email` VARCHAR(180) NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB;

CREATE TABLE `coccs_arthro`.`Product` 
( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(60) NOT NULL , 
`ref_number` INT NOT NULL , 
`indication` TEXT NOT NULL , 
`use_site` TEXT NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB; 


CREATE TABLE `coccs_arthro`.`category` 
( `id` INT NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(60) NOT NULL , 
`function` TEXT NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB; 


CREATE TABLE `coccs_arthro`.`estimate` 
( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`lastname` VARCHAR(60) NOT NULL , 
`company` VARCHAR(180) NOT NULL , 
`email` VARCHAR(180) NOT NULL , 
`phone_number` INT NOT NULL , 
`message` TEXT NOT NULL , 
`product` VARCHAR(60) NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB; 


CREATE TABLE `coccs_arthro`.`contact` 
( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`lastname` VARCHAR(60) NOT NULL , 
`company` VARCHAR(180) NOT NULL , 
`email` VARCHAR(180) NOT NULL , 
`phone_number` INT NOT NULL , 
`message` TEXT NOT NULL , 
`subject` TEXT NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB; 


CREATE TABLE `coccs_arthro`.`FAQ` 
( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
`title` TEXT NOT NULL , 
`answer` TEXT NOT NULL , 
PRIMARY KEY (`id`)) 
ENGINE = InnoDB; 


ALTER TABLE `Product` 
ADD CONSTRAINT `fk_product_category_id` 
FOREIGN KEY (`category_id`) 
REFERENCES `category`(`id`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT; 