CREATE TABLE functions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount INT NOT NULL,
  CONSTRAINT functionNameUnique UNIQUE (name)
);

CREATE TABLE resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount INT NOT NULL,
  CONSTRAINT resourceNameUnique UNIQUE (name)
);

CREATE TABLE servants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  salary INT NOT NULL,
  amount INT NOT NULL,
  production_amount INT,
  production_type VARCHAR(45),
  CONSTRAINT servantNameUnique UNIQUE (name)
);