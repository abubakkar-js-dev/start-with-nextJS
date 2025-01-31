
const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900/80">
      {/* Spinner */}
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="w-24 h-24 border-8 border-blue-600/30 rounded-full"></div>
          <div className="w-24 h-24 border-8 border-transparent border-t-blue-600 rounded-full absolute top-0 left-0 animate-spin"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-8 space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-gray-100">Loading...</h2>
        <p className="text-gray-400">Please wait while we fetch the content</p>
      </div>
    </div>
  );
};

export default Loading;