import React from 'react';
import Link from 'next/link';
import { urlFor } from '../mediumsanitybuild/sanity';

const Post = ({ post }) => {
    return (
        <>




            <div className="md:max-w-[300px] w-full sm:justify-center sm:items-center bg-white rounded-lg border border-gray-200 shadow-md ">
                <Link href="#">
                    <img className="rounded-t-lg h-[170px] w-full object-cover" src={urlFor(post.mainImage)} alt="thumbnail" />
                </Link>
                <div className="p-5">
                    <div className='flex items-center gap-3 '>
                        {/* <img src={urlFor(post.author.image)} className = "w-10 h-10 rounded-full" alt="profile" /> */}
                        <p>By {post.author.name}</p>
                    </div>
                    
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{post.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">{post.description}</p>
                    <Link href={`posts/${post.slug.current}`} >
                        <div className="inline-flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                    </Link>
                </div>
            </div>



        </>)
}

export default Post