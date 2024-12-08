import  { useState } from "react";

const LoveLetterPage = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-red-300">
      {page === 1 && (
        <div
          className="p-8 bg-white rounded-lg shadow-xl transform transition duration-500"
          onClick={nextPage}
        >
          <h1 className="text-4xl font-bold mb-4">Dear Sneha 💌</h1>
          <p className="text-lg">
            From the moment I met you, my world has been brighter. You're the
            reason my days are filled with joy. Happy Birthday, my love!
          </p>
          <p className="text-sm text-gray-600 mt-6">Click to turn the page...</p>
        </div>
      )}
      {page === 2 && (
        <div className="p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Forever Yours, Mosin 💕</h1>
          <p className="text-lg">
            On your special day, I just want to remind you how much I love you
            and how grateful I am to have you in my life. Here's to many more
            birthdays together!
          </p>
        </div>
      )}
    </div>
  );
};

export default LoveLetterPage;
