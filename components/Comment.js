import React from 'react'

const Comment = () => {
    return (
        <div className='bg-white drop-shadow-lg rounded-[20px] max-w-[800px] w-full p-5 mx-auto mt-5'>
            <form>
                <h1 className='text-3xl font-semibold'>Leave a comment</h1>
                <div class="mb-6 mt-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>

                </div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

            </form>
        </div>
    )
}

export default Comment