export default function DownloadCV() {
    return (
      <div className="flex justify-center mt-10">
        <a
          href="/cv.pdf"
          download
          className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Download CV
        </a>
      </div>
    );
  }
  