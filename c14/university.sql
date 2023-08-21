CREATE TABLE jurusan(
    jurusan_id  CHAR(5) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL
); 

INSERT INTO jurusan(jurusan_id, nama) VALUES
("90241", "Desain Komunikasi Visual
"),
('61209', "Bisnis Digital
"),
("49202
", "Sains Data"),
("55202
", "Teknologi Informasi
"),
("59202
", "Rekayasa Perangkat Lunak
");

CREATE TABLE mata_kuliah(
    id CHAR(3) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    sks INTEGER(1) NOT NULL,
);

INSERT INTO mata_kuliah(mk_id, nama, sks) VALUES
("001", "Pengantar Teknologi Informasi", 3),
("002", "Algoritma dan Pemrograman", 2),
("003", "Basis Data", 3),
("004", "Kalkulus", 2),
("005", "Agama", 3);

CREATE TABLE dosen(
    nidn CHAR(4) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL
);

INSERT INTO dosen(nidn, nama) VALUES
("0001", "Dosen 1"),
("0002", "Dosen 2"),
("0003", "Dosen 3"),
("0004", "Dosen 4");

CREATE TABLE mahasiswa(
    nim CHAR(5) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    alamat VARCHAR(50) NOT NULL,
    jurusan_id char(5) NOT NULL,
    FOREIGN KEY(jurusan_id) REFERENCES jurusan(jurusan_id)
);

INSERT INTO mahasiswa(nim, nama, alamat, jurusan_id) VALUES
("00001", "Mahasiswa 1", "Jakarta", "90241"),
("00002", "Mahasiswa 2", "Bogor", "61209"),
("00003", "Mahasiswa 3", "Tangerang", "49202"),
("00004", "Mahasiswa 4", "Bekasi", "55202"),
("00005", "Mahasiswa 5", "Bandung", "59202");

CREATE TABLE khs(
    khs_id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(5) NOT NULL,
    mk_id CHAR(3) NOT NULL,
    nidn CHAR(4) NOT NULL,
    sks CHAR(1) NOT NULL,
    nilai CHAR(1) DEFAULT "T",
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(mk_id) REFERENCES mata_kuliah(mk_id),
    FOREIGN KEY(nidn) REFERENCES dosen(nidn)
);

INSERT INTO khs(nim, mk_id, nidn, sks) VALUES
("00001", "001","0001", 3),
("00001", "002","0002", 2),
("00001", "003","0003", 3),
("00002", "001","0001", 3),
("00002", "002","0002", 2),
("00002", "003","0003", 3),
("00003", "001","0001", 3),
("00003", "002","0002", 2),
("00003", "003","0003", 3),
("00004", "001","0001", 3),
("00004", "002","0002", 2),
("00004", "003","0003", 3),
("00005", "001","0001", 3),
("00005", "002","0002", 2),
("00005", "003","0003", 3);

UPDATE khs set nilai="E" WHERE khs_id=1;
UPDATE khs set nilai="B+" WHERE khs_id=2;
UPDATE khs set nilai="C" WHERE khs_id=3;
UPDATE khs set nilai="C" WHERE khs_id=4;
UPDATE khs set nilai="A" WHERE khs_id=5;
UPDATE khs set nilai="B" WHERE khs_id=6;
UPDATE khs set nilai="B+" WHERE khs_id=7;
UPDATE khs set nilai="A" WHERE khs_id=8;
UPDATE khs set nilai="B" WHERE khs_id=9;
UPDATE khs set nilai="E" WHERE khs_id=10;
UPDATE khs set nilai="c" WHERE khs_id=11;
UPDATE khs set nilai="A-" WHERE khs_id=12;
UPDATE khs set nilai="c" WHERE khs_id=13;
UPDATE khs set nilai="A" WHERE khs_id=14;
