-- Exemple : Créer une table simple
CREATE TABLE member (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) UNIQUE NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birthday DATE,
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(100),
    postal_code VARCHAR(10),
    city VARCHAR(50),
    status VARCHAR(10)
);

-- Exemple : Insérer des données initiales
INSERT INTO member (first_name, last_name, birthday, email, phone, address, postal_code, city, status) VALUES
    ('Alice', 'Smith', DATE '2000-02-01', 'alice.smith@eemi.com', '0602937387', '22 rue des lilas', '75002', 'Paris', 'majeur'),
    ('bob', 'Johnson', DATE '2014-06-10', 'bob.johnson@eemi.com', '0412146578', '10 rue de la Loire', '75011', 'Paris', 'mineur'),
    ('Emma', 'Jones', DATE '2016-11-11', 'emma.jones@eemi.com', '0678767372', '20 rue des fraises tagada', '75001', 'Paris', 'mineur'),
    ('Grace', 'Brown', DATE '1994-07-19', 'grace.brown@eemi.com', '0682920304', '18 rue des tagliatelles', '75003', 'Paris', 'majeur'),
    ('Charlie', 'Davis', DATE '1992-08-29', 'charlie.davis@eemi.com', '0689370188', '10 rue des près', '75012', 'Paris', 'majeur'),
    ('Isabel', 'Miller', DATE '1996-07-11', 'isabel.miller@eemi.com', '0683838384', '1 bis rue des chats', '75002', 'Paris', 'majeur'),
    ('Frank', 'Wilson', DATE '1990-01-17', 'frank.wilson@eemi.com', '0699181283', '3 boulevard victor hugo', '75003', 'Paris', 'majeur'),
    ('Henry', 'Moore', DATE '1995-04-25', 'henry.moore@eemi.com', '0674737228', '15 rue des chiens', '75001', 'Paris', 'majeur'),
    ('David', 'Taylor', DATE '1998-05-12', 'david.taylor@eemi.com', '0673627378', '13 rue des chouettes', '75010', 'Paris', 'majeur'),
    ('Jack', 'Jones', DATE '1999-10-28', 'jack.jones@eemi.com', '0682928308', '70 rue de la liberté', '75008', 'Paris', 'majeur');

CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    member_id INTEGER REFERENCES member(id),
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(100),
    postal_code VARCHAR(10),
    city VARCHAR(50)
);

INSERT INTO contact (member_id, last_name, first_name, email, phone, address, postal_code, city) VALUES
    (2, 'Mathilde', 'Blache', 'mathilde.blache@parent.fr', '0672737289', '10 rue de la Loire', '75011', 'Paris'),
    (3, 'Pierre', 'Rock', 'pierre.rock@parent.fr', '0680201929', '20 rue des fraises tagada', '75001', 'Paris');

CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    professor VARCHAR(50),
    category VARCHAR(50),
    level VARCHAR(50),
    age_category VARCHAR(50),
    date DATE
);

INSERT INTO course (professor, category, level, age_category, date) VALUES
    ('Fabienne Auchard', 'classique', 'débutant', 'jeune adulte', DATE '2024-08-30'),
    ('Lucie Pierre', 'modern Jazz', 'intermédiaire', 'enfant',  DATE '2024-09-15'),
    ('Michael Lebon', 'contemporain', 'avancé', 'adulte',  DATE '2024-09-15');


CREATE TABLE inscription_course (
    id SERIAL PRIMARY KEY,
    member_id INTEGER REFERENCES member(id),
    course_id INTEGER REFERENCES course(id),
    present BOOLEAN DEFAULT NULL
);

INSERT INTO inscription_course (member_id, course_id) VALUES 
    (1, 1 ),
    (3, 2),
    (4, 3);

CREATE TABLE internship (
    id SERIAL PRIMARY KEY,
    address VARCHAR(100),
    postal_code VARCHAR(10),
    city VARCHAR(50),
    category VARCHAR(50),
    age_category VARCHAR(50),
    level VARCHAR(50),
    responsible VARCHAR(50),
    start_date Date,
    end_date Date,
    price FLOAT
);

INSERT INTO internship (address, postal_code, city, category, age_category, level, responsible, start_date, end_date, price) VALUES
    ('15 rue du marais', '75002', 'Paris', ' hip-hop', 'jeune adulte', 'éveil/initiation', 'Catherine Faure', '2024-08-20', '2024-08-30', 15);

CREATE TABLE internship_reservation (
     id SERIAL PRIMARY KEY,
     internship_id INTEGER REFERENCES internship(id),
     member_id INTEGER REFERENCES member(id)
);

INSERT INTO internship_reservation(internship_id, member_id) VALUES
    (1,9),
    (1,8);

CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    address VARCHAR(100),
    postal_code VARCHAR(10),
    city VARCHAR(50),
    free_ticket INTEGER,
    date Date,
    price FLOAT
);

INSERT INTO event ( address, postal_code, city, free_ticket, date, price) VALUES
    ('20 rue du pain', '75011', 'Paris', 2, DATE '2024-10-01', 10);

CREATE TABLE event_participant (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES event(id),
    member_id INTEGER REFERENCES member(id)
);

INSERT INTO event_participant(event_id, member_id) VALUES
    (1,1),
    (1,4),
    (1,8), 
    (1,9);