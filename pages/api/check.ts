import connection from '../../lib/database/connection';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function check(req:NextApiRequest,res:NextApiResponse){
if(req.method==='GET'){
try{
    // const query =  `insert into user(fname,lname,email,password,age,qualification)values('Abhay','verma','ajay@gmail.com','abhay@12345','23','B.tech')`;

    const query='select * from user';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error checking MySQL connection:', error);
        res.status(500).send({ done: false });
      } else {
        console.log('MySQL connection is established:', results);
        res.send({ message:results,done: true });
      }
    });
}
catch(error){
    console.error("something went wrong logging in", error);
    res.status(500).send({ done: false });
}
}
else
{
    res.send({done:false});
}
}
  