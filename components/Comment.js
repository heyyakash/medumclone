import React from 'react'
import { useForm,submitHandler } from 'react-hook-form'

const Comment = ({id}) => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    
    const onSubmit = async (data) => {
        // console.log(data);
        fetch('/api/createComment',{
            method:'POST',
            body:JSON.stringify(data)
        }).then(()=>console.log(data)
        ).catch((err)=>console.log(err)
        )
        
    }
    
    return (
        <div className='bg-white mb-5 drop-shadow-lg rounded-[20px] max-w-[800px] w-full p-5 mx-auto mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl font-semibold'>Leave a comment</h1>
                
                <input type="hidden" {...register("_id")} name = "_id" value = {id} />
                
                <div class="mb-6 mt-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                    <input {...register("name", {required:true})} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input {...register("email", {required:true})} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                
                <div className="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                    <textarea {...register("comment", {required:true})} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>

                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            
                <div className='flex flex-col p-5'>
                    {errors.name && (
                        <span className='text-red-500'>The name field is required</span>
                    )}
                    {errors.email && (
                        <span className='text-red-500'>The email field is required</span>
                    )}
                    {errors.comment && (
                        <span className='text-red-500'>The comment field is required</span>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Comment