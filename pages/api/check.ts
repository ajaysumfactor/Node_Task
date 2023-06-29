import connection from '../../lib/database/connection';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function check(req:NextApiRequest,res:NextApiResponse){
if(req.method==='POST'){
try{
    // const query =  `insert into user(fname,lname,email,password,age,qualification)values('Abhay','verma','ajay@gmail.com','abhay@12345','23','B.tech')`;
    console.log(req.body);
    const {fname,lname,email,password,age,qualification}=req.body;

    // insert
    // const query =  `insert into user(fname,lname,email,password,age,qualification)values('${fname}','${lname}','${email}','${password}','${age}','${qualification}')`;

    //retrive
    // const query='select * from user';

    //update
    // const query = `update user set fname='hitesh' where email="abhay@gmail.com"`

    //delete
     const query = `delete from user where email="abhay@gmail.com"`

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
  