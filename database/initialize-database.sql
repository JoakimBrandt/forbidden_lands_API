CREATE TABLE functions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount VARCHAR(45) NOT NULL,
  CONSTRAINT functionNameUnique UNIQUE (name)
);

CREATE TABLE resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  amount VARCHAR(45) NOT NULL,
  CONSTRAINT resourceNameUnique UNIQUE (name)
);

CREATE TABLE servants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  salary VARCHAR(45) NOT NULL,
  amount VARCHAR(45) NOT NULL,
  production_amount VARCHAR(45),
  production_type VARCHAR(45),
  CONSTRAINT servantNameUnique UNIQUE (name)
);

CREATE TABLE keeps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  treasury INT,
  CONSTRAINT keepNameUnique UNIQUE (name)
);