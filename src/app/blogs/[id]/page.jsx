'use client'
import { useParams } from 'next/navigation';

const BlogDetails = () => {
  const { id } = useParams();
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

  console.log(id)
  
  const blog = blogs.find(blog => blog.id === parseInt(id));
    console.log('id from blog details',parseInt(id));
    console.log(blog,'from details')

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold">{blog.category}</span>
            <span className="text-gray-500">{blog.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-100">{blog.title}</h1>
          
          <div className="flex items-center space-x-4 text-gray-500">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.views} views</span>
            <span>•</span>
            <span>{blog.likes} likes</span>
          </div>
          
          <p className="text-gray-300 leading-relaxed">{blog.content}</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Comments ({blog.comments.length})</h2>
            {blog.comments.map((comment, index) => (
              <div key={index} className="bg-slate-900/80 p-4 rounded-lg mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-100">{comment.user}</span>
                  <span className="text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-300 mt-2">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails; 