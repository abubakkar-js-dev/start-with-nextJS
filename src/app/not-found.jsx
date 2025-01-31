'use client'
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900/80">
      <div className="text-center space-y-6 p-8">   
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-gray-100">Page Not Found</h2>
          <p className="text-gray-400 text-lg">
            Oops! The page you are looking for doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Go Back
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;