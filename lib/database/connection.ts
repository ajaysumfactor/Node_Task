import mysql from 'mysql';
 
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database!');
  });

  
  export const executeQuery = (sqlQuery: string) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(sqlQuery, (error, response) => {
                console.log("query error", error)
                if (error) return reject(error)

                return resolve(response)
            })
        } catch (error) {
            console.log("connection error ", error)

        }
    })
}
  
  export default connection;
  