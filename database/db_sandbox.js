// inspired by https://heintz-s.github.io/GIS/lecture/db/5
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const dbFilePath = 'hochschule.db'; // sqlite Datei

async function main() {
  // open the database
  const db = await sqlite.open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });

  const tables = await db.all('SELECT name FROM sqlite_schema WHERE type="table" ORDER BY name');
  console.log(tables);

  // list all students
    const students = await db.all('SELECT * FROM student');
    console.log(students);

  // TODO: list all courses
  

  // TODO: display first name and which course they study (as string) of all students
  
  
  await db.close();
}

main();