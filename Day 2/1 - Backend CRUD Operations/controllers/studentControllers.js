// import student from '../models/student.js'
import {student} from '../models/student.js'
import mongoose from 'mongoose';

export async function createStudent(req , res)
{
    try {

        
        console.log(req.body);


        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const age = req.body.age;
        const enrollment = req.body.enrollment;

        if(!firstName || !age || !enrollment)
        {
            return(
                res.status(400).json(
                    {
                        succes:false,
                        message:'Pass all fields'
                    }
                )
            )
        }

        const createdStudent = await student.create(
            {
                firstName:firstName,
                age:age,
                lastName:lastName,
                enrollment:enrollment
            }
        )

        return(res.status(200).json(
            {
                succes:true,
                message:'Entry created',
                body:createStudent
            }
        ))
        
    } catch (error) {
        
        return(
            res.status(400).json(
                {
                    success:false,
                    message:'Error in field Creation',
                    error:error.message
                }
            )
        )
    }
}

export async function updateStudent(req , res)
{
    try {

        const id = req.params.id;

        console.log(req.body);
        console.log("Id = " , id);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const enrollment = req.body.enrollment;

    

    const newBody = await student.findOneAndUpdate(
        {_id:id},
        {
            firstName:firstName,
            lastName:lastName,
            age:age,
            enrollment:enrollment
        },
        {new:true}
    )

    return (
        res.status(200).json(
            {
                success:false,
                message:'Field updated',
                body:newBody
            }
        )
    )
        
    } catch (error) {
     
        return(
            res.status(400).json(
                {
                    success:false,
                    message:'Error occured',
                    error:error.message
                }
            )
        )
    }
}