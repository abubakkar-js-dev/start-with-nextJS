import React from 'react';

export const getPost = async(postId)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await res.json();
}

const PostDetails = async({params}) => {
    const {id} = await params;
    const post = await getPost(id);
    console.log(id);
    return (
        <div className='container mx-auto px-6 py-12 flex justify-center items-center min-h-screen'>
            <div className='w-[720px] h-[580px] border border-slate-800 rounded-xl flex flex-col justify-center items-center space-y-8 p-12'>
                <p className='text-2xl font-medium'><strong>ID: </strong> {post.id}</p>
                <p className='text-xl font-medium'><strong>Title: </strong> {post.title}</p>
                <p className='text-base'><strong>Description: </strong> {post.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;