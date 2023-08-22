SELECT mahasiswa.nama AS Nama_Mahasiswa, jurusan.nama AS Nama_Jurusaan
FROM mahasiswa
JOIN jurusan ON mahasiswa.jurusan_id = jurusan.jurusan_id;

ALTER TABLE mahasiswa
ADD tanggal_lahir DATE;

UPDATE mahasiswa SET tanggal_lahir='2004-10-22' WHERE nim="00001";
UPDATE mahasiswa SET tanggal_lahir='2005-11-02' WHERE nim="00002";
UPDATE mahasiswa SET tanggal_lahir='2000-02-02' WHERE nim="00003";
UPDATE mahasiswa SET tanggal_lahir='2001-04-28' WHERE nim="00004";
UPDATE mahasiswa SET tanggal_lahir='2002-10-22' WHERE nim="00001";

SELECT nim, nama
FROM mahasiswa
WHERE strftime('%Y', 'now') - strftime('%Y', tanggal_lahir) < 20;

SELECT DISTINCT khs.nim
FROM khs
JOIN (
    SELECT nim, SUM(sks) AS total_sks
    FROM khs
    GROUP BY nim
    HAVING total_sks > 10
) AS mahasiswa_lebih_10_sks
ON khs.nim = mahasiswa_lebih_10_sks.nim;

INSERT INTO mata_kuliah(mk_id, nama, sks) VALUES
("006", "Data Mining", 3)

INSERT INTO khs(nim, mk_id, nidn, sks) VALUES
("00001", "006","0003", 3),
("00003", "006","0003", 3),
("00005", "006","0003", 3),

SELECT DISTINCT khs.nim
FROM khs
WHERE khs.mk_id IN (
  SELECT mk_id           
  FROM mata_kuliah
  WHERE mata_kuliah.nama = 'Data Mining'
);

SELECT dosen.nidn, dosen.nama, COUNT(DISTINCT khs.nim) AS jumlah_mahasiswa
FROM dosen
LEFT JOIN khs ON dosen.nidn = khs.nidn
GROUP BY dosen.nidn, dosen.nama
ORDER BY dosen.nidn;

SELECT nim, tanggal_lahir
FROM mahasiswa
ORDER BY tanggal_lahir;

SELECT * FROM khs JOIN mahasiswa ON khs.nim=mahasiswa.nim JOIN jurusan ON jurusan.jurusan_id=mahasiswa.jurusan_id JOIN dosen ON dosen.nidn=khs.nidn WHERE khs.nilai IN ('D', 'E');