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
  // console.log("Tables: ");
  // console.log(tables);

  // list all students
  const students = await db.all('SELECT * FROM student');
  console.log("Students: ");
  console.log(students);
  
  // test inner join
  const selection = await db.all('SELECT * FROM student INNER JOIN course ON student.course = course.id');
  // console.log(selection);

  // test another join
  const selection2 = await db.all('SELECT student.studentNr, student.firstName, student.lastName, course.name AS "course", faculty.name AS "faculty" FROM (student INNER JOIN course ON student.course = course.id) INNER JOIN faculty ON course.faculty = faculty.id');
  // console.log(selection2);

  // create a view
  //const view = await db.all('CREATE VIEW student_data AS SELECT student.studentNr, student.firstName, student.lastName, course.name AS "course", faculty.name AS "faculty" FROM (student INNER JOIN course ON student.course = course.id) INNER JOIN faculty ON course.faculty = faculty.id');
  //console.log(view);

  // show the view
  //const showView = await db.all('SELECT * FROM student_data');
  //console.log(showView);

  // TODO: list all courses
  

  // TODO: display first name and which course they study (as string) of all students
  
  
  await db.close();
}

main();