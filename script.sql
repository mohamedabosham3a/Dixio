CREATE TABLE nestng.user (
  id INT NOT NULL,
  name VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
)

CREATE TABLE nestng.message (
  id INT NOT NULL,
  senderId INT NOT NULL,
  messageContent VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
   CONSTRAINT id  FOREIGN KEY (senderId) REFERENCES nestng.user (id)
)