CREATE TABLE Stat (
  id INT AUTO_INCREMENT PRIMARY KEY,
  infected INT,
  activeinfected INT,
  deceased INT,
  recovered INT,
  quarantined INT,
  tested INT,
  updated DATETIME
);