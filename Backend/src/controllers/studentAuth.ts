import { Request, Response } from "express";


export const SignupAuth = (req:Request, res:Response)=>{
    try{
        console.log("hello");
    }
    catch(err){
        console.error("error bro");
    }
}