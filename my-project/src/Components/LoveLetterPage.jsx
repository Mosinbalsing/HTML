import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.1.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
const LoveLetter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenLetter = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsOpened(true);
    }, 1000); // Show popup for 1 second
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-pink-200 to-red-300 flex items-center justify-center overflow-hidden">
      {!isOpened && (
        <motion.div
          className="relative w-40 h-28 bg-white rounded-xl shadow-2xl cursor-pointer flex items-center justify-center"
          drag
          dragElastic={0.5}
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          onClick={handleOpenLetter}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: showPopup ? 1.5 : 1, // Pop the envelope on click
            y: showPopup ? -100 : 0, // Move it up
          }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold text-red-500">💌</p>
          {showPopup && (
            <motion.div
              className="absolute bg-red-500 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
            >
              ❤️
            </motion.div>
          )}
        </motion.div>
      )}

      {isOpened && <LetterPages />}
    </div>
  );
};

const LetterPages = () => {
  const giftVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      x: Math.cos((index * Math.PI) / 5) * 250, // Spread in a circular fashion
      y: Math.sin((index * Math.PI) / 5) * 250,
      transition: { duration: 0.8, delay: index * 0.2 },
    }),
  };
  const pages = [
    {
      headline: "Forever yours, with love. 💕🎁",
      content: "Wishing you all the happiness in the world!",
      image: img5, // Add a valid image URL here
      paragraph:
        "Sneha , Radvl asel sorry , smile 😊 kar ani he varti tuj gift ahe🎁 , he gift khup mahag tr nahi but , majhi jevdhi aukat ahe mi tech deushak to , Pleas smile 😊 and stay happy always 🤗",
    },
    {
      headline: "Dear Sneha, 💖",
      content: "You are the light of my life!",
      image: img4, // Add a valid image URL here
      paragraph:
        "Sneha I Love you 💕, tu mala pahije but te hoil ki nahi te nahi mahit , but tu jyalahi bhetn khup lucky person asnar , mala khup jaln hote jevha tu kontya hi dusrya mulashi bolte , mahit nahi ka but hote Sorry , tu bolve mi yel but kadhi , bolvoon hurt nako karus, mi aatun khup weak ahe🥺  ",
    },
    {
      headline: "You fill my world with so much love and joy! ❤️",
      content: "I'm so grateful for everything you do for me!",
      image: img3, // Add a valid image URL here
      paragraph:
        "Sneha tu la as bolanar tr nahi kaym sobt raha , but jitha pn rahshil happy raha majha vichar nako kart jaus , maj hoil kahi na kahi tri ",
    },
    {
      headline: "May all your dreams come true this year! 🌟",
      content: "Your dreams are just as beautiful as you are.",
      image: img2, // Add a valid image URL here
      paragraph:
        "Tujhe sagle swapn purn houde , swatachya paya var ubharahun tu tujhr Dereams purn kar , kadhi hi majhi garj padli tr nakki bolv , mjya shi hot asel tr mi nakki purn karen",
    },
    {
      headline: "Happy Birthday Sneha! 🎉",
      content: "I will always cherish you!",
      image: img1, // Add a valid image URL here
      paragraph:
        "Bal tula Happy Birthday , but sorry late kar toy  , kay karnar karay ch hot but Himat nahi jhali ",
    },
  ];

  return (
    <div className="absolute w-screen h-screen flex flex-col items-center mt-[20%]">
      {/* Heading */}
      <div className="relative w-full flex justify-center items-center">
        <motion.div
          className="text-5xl font-bold text-pink-500 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0], // Creates a subtle swinging effect
          }}
          transition={{
            duration: 0.8, // 0.8 seconds duration for each animation cycle
            ease: "easeInOut",
            repeat: 2, // Repeat the animation 2 more times after the first cycle
            repeatType: "loop", // Loop the animation in the same direction
            delay: 0.8, // Delay before starting the animation
          }}
        >
          🎉 Happy Birthday! 🎉
        </motion.div>
        {/* Gift icons around the text */}
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl mt-40" 
            custom={index}
            variants={giftVariants}
            initial="hidden"
            animate="visible"
          >
            🎁 💌
          </motion.div>
        ))}
      </div>

      {/* Pages */}
      <div className="flex flex-wrap justify-center">
        {pages.map((page, index) => (
          <Page
            key={index}
            headline={page.headline}
            content={page.content}
            image={page.image}
            paragraph={page.paragraph}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

const Page = ({ headline, content, image, paragraph, index }) => {
  return (
    <motion.div
      className="absolute w-[300px] h-[400px] bg-white rounded-lg shadow-lg p-6 border border-gray-300 cursor-pointer hover:shadow-2xl mb-6"
      drag={index === 1 ? false : true}
      dragElastic={0.5}
      whileDrag={{ scale: 1.05 }}
      whileHover={{ scale: 1.1 }}
      style={{
        backgroundImage: "linear-gradient(white 90%, #f4f4f4 100%)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transform: `rotate(${index * 2}deg)`,
      }}
    >
      <div className="relative h-full flex flex-col justify-between">
        {/* Header */}
        <div className="text-left text-blue-700 text-lg font-bold">
          {headline}
        </div>

        {/* Image */}
        <div className="flex justify-center mt-4">
          <img src={image} alt="Love" className="w-36 h-36 rounded-full" />
        </div>

        {/* Content */}
        <div className="text-left text-gray-800 text-sm font-medium mt-4">
          {content}
        </div>

        {/* Paragraph */}

        <div className="text-left text-gray-600 text-xs  h-auto">
          {paragraph}
        </div>

        {/* Footer */}
      </div>
    </motion.div>
  );
};

export default LoveLetter;
