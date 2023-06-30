import connection,{executeQuery} from '../../lib/database/connection';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';


export default async function userRegister(req:NextApiRequest,res:NextApiResponse){
if(req.method==='POST'){
try{
    // const query =  `insert into user(fname,lname,email,password,age,qualification)values('Abhay','verma','ajay@gmail.com','abhay@12345','23','B.tech')`;
    console.log(req.body);
    const {fname,lname,email,password,age,qualification}=req.body;


    // insert
    // const query =  `insert into user(fname,lname,email,password,age,qualification)values('${fname}','${lname}','${email}','${password}','${age}','${qualification}')`;

    //retrive
    // const query=`select * from user;`//retreaving all user data
    //update
    // const query = `update user set fname='hitesh' where email="abhay@gmail.com"`

    //delete
    //  const query = `delete from user where email="abhay@gmail.com"`





    const findRecordsQuery=`select * from user where email='${email}'`;

    const UserData:any=await executeQuery(findRecordsQuery);
    // check if a particular user data is already in database
    if(UserData.length>0){
     return res.status(400).send({message: "user is already registered please login"});
    }
    // encrypt the password then storing in database---------------------
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log({hashedPassword});
    const queryToInsert =  `insert into user(fname,lname,email,password,age,qualification)values('${fname}','${lname}','${email}','${hashedPassword}','${age}','${qualification}')`;
    const response:any=await executeQuery(queryToInsert);

    // ===================================================================

    console.log({response});

    res.send({message:response,done:true});
 
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
  