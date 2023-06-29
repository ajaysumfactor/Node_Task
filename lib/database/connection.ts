import mysql from 'mysql';
 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "php@java",
    database: "crud"
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database!');
  });
  
  export default connection;
  