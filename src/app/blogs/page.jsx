'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const BlogPage = () => {
  // Sample blog data - in a real app, this would come from an API or database

  const router = useRouter();
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "John Doe",
      date: "2024-01-15",
      category: "Technology",
      content: "Web development is evolving rapidly with the rise of new frameworks and AI integration...",
      image: "https://images.pexels.com/photos/11035360/pexels-photo-11035360.jpeg",
      views: 1050,
      likes: 230,
      comments: [
        { user: "Alice", comment: "Great insights! Can't wait for the next post.", date: "2024-01-16" },
        { user: "Bob", comment: "Really helpful information, thanks!", date: "2024-01-17" }
      ]
    },
    {
      id: 2,
      title: "10 Tips for Better UI/UX Design",
      author: "Jane Smith",
      date: "2024-02-02",
      category: "Design",
      content: "Good UI/UX can make or break an application. Here are 10 tips to improve your designs...",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      views: 760,
      likes: 180,
      comments: [
        { user: "Charlie", comment: "These tips are gold! Thank you.", date: "2024-02-03" }
      ]
    },
    {
      id: 3,
      title: "Understanding JavaScript Closures",
      author: "David Lee",
      date: "2024-03-10",
      category: "Programming",
      content: "Closures are a fundamental concept in JavaScript. Let's break them down with examples...",
      image: "https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg",
      views: 920,
      likes: 210,
      comments: []
    },
    {
      id: 4,
      title: "How to Start a Successful Blog",
      author: "Emily Carter",
      date: "2024-04-05",
      category: "Blogging",
      content: "Starting a blog is easier than ever. Learn the best strategies to build and grow your audience...",
      image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
      views: 850,
      likes: 190,
      comments: [
        { user: "Daniel", comment: "Super helpful guide!", date: "2024-04-06" }
      ]
    },
    {
      id: 5,
      title: "The Rise of AI in Content Creation",
      author: "Michael Brown",
      date: "2024-05-20",
      category: "Artificial Intelligence",
      content: "AI is transforming content creation in ways we never imagined. Here’s what you need to know...",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      views: 1200,
      likes: 310,
      comments: []
    },
    {
      id: 6,
      title: "Mastering React.js for Frontend Development",
      author: "Sophia Wilson",
      date: "2024-06-15",
      category: "Frontend Development",
      content: "React.js is the most popular front-end framework. Let's explore key concepts for mastering it...",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      views: 980,
      likes: 250,
      comments: [
        { user: "Ethan", comment: "React is amazing! Thanks for the insights.", date: "2024-06-16" }
      ]
    },
    {
      id: 7,
      title: "Cybersecurity Trends in 2024",
      author: "Liam Johnson",
      date: "2024-07-08",
      category: "Cybersecurity",
      content: "With increasing cyber threats, staying updated on cybersecurity trends is crucial...",
      image: "https://images.pexels.com/photos/5380640/pexels-photo-5380640.jpeg",
      views: 670,
      likes: 140,
      comments: []
    },
    {
      id: 8,
      title: "The Best Programming Languages to Learn in 2024",
      author: "Olivia Martinez",
      date: "2024-08-12",
      category: "Programming",
      content: "Choosing the right programming language can boost your career. Here are the best ones to learn...",
      image: "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg",
      views: 1500,
      likes: 390,
      comments: [
        { user: "Lucas", comment: "Python is my favorite!", date: "2024-08-13" }
      ]
    }
  ];

  const handleReadMore = (blogId) => {
    
    router.push(`/blogs/${blogId}`)
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Our Blog Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-slate-900/80 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 space-y-4">
              <div className="text-sm text-blue-600 font-semibold mb-1">
                {blog.category}
              </div>
              <h2 className="text-2xl font-bold text-gray-200 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-400">
                {blog.content.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{blog.date}</span>
                <button 
                  className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                  onClick={() => handleReadMore(blog.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;