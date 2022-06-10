// import { NextApiRequest, NextApiResponse } from "next";
import sanityClient from '@sanity/client'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === "production",
};

const client = sanityClient(config);

export default async function createComment(req, res) {
    // res.status(200).json(req.body);
    const {name,email,_id,comment} = JSON.parse(req.body);
    try{
        await client.create({
            _type:'comment',
            post:{
                _type:'reference',
                _ref: _id
            },
            name,
            email,
            comment,
        });
        res.status(200).json({msg:"Submitted"})
        console.log('submitted');
        
    }
    catch(err){
        res.status(500).json({msg:err})
        
    }

}