CREATE TABLE functions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount INT NOT NULL
);

CREATE TABLE resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount INT NOT NULL
);

CREATE TABLE servants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  salary INT NOT NULL,
  amount INT NOT NULL,
  production_amount INT,
  production_type VARCHAR(45)
);


insert into servants (name, salary, amount, production_amount, production_type) values ("stenhuggare", 3, 6, 4, "sten")