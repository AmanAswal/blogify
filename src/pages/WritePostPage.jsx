import React from 'react';
import {useUser} from "@clerk/clerk-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WritePostPage = () => {

  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div className=''>Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className="">You should login!</div>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
        <input className='text-4xl font-semibold bg-transparent outline-none' type="text" placeholder='Title...' />
        <div className="flex items-center gap-4">
          <label className='text-sm' htmlFor="">Choose a category:</label>
          <select name='cat' className='p-2 rounded-xl bg-white shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="content-creation">Content Creation</option>
            <option value="video-editing">Video Editing</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" className='p-4 rounded-xl bg-white shadow-md' placeholder='A short Description' />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md" />
        <button className='bg-blue-800 text-white p-2 mt-4 font-medium rounded-xl w-36'>Send</button>
      </form>
    </div>
  )
}

export default WritePostPage