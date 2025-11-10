export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#E6B325] border-opacity-80"></div>
      <p className="mt-4 text-gray-600 font-semibold text-lg">جار التحميل...</p>
    </div>
  );
}
