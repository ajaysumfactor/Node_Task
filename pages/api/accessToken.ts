import { NextApiRequest,NextApiResponse } from "next";
import { verifyRefresh,generateJwtToken } from "@/lib/server";
import { executeQuery } from "@/lib/database/connection";
export default async function accessToken(req:NextApiRequest,res:NextApiResponse){
    try{
    const {email,token}=req.body;
    const isValid=verifyRefresh(email,token);
    if(!isValid){
        return res.status(401).send({success:false,error:"invalid token please try again"});

    }
    const getRecord = `select * from user where email='${email}'`
    let resultSet: any = await executeQuery(getRecord);
    let password:string=resultSet[0].password;
     let user: any = { email: email as string, password: password as string }
     let jwtToken = generateJwtToken(user);
     return res.send({message:"successfully token generated again",jwtToken:jwtToken});

}
catch (error) {
    console.log("refreshPromiseError", error);
}
}