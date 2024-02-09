import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showGifBackground, setShowGifBackground] = useState(false);
  const yesButtonSize = Math.min(noCount, 15) * 10 + 16;

  const getYesButtonText = () => {
    if (noCount >= 15) {
      return "YES (Choice is an illusion)";
    } else {
      return "Yes";
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Yo, what you doing??",
      "Tf?",
      "Think again!",
      "Last chance!",
      "I lied",
      "You misclicked",
      "Nope",
      "Now that's just mean",
      "I have to write these yk?",
      "The green button",
      "Button to the left",
      "Is that your final answer?",
      "This is tedious :(",
      "I thought we had somethig special",
      "-__-",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleGifLinkClick = () => {
    setShowGifBackground(!showGifBackground);
  };

  const getBackgroundStyle = () => {
    return showGifBackground
      ? {
          backgroundImage: `url('https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif')`, // Replace with the actual URL of your gif
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};
  };

  return (
    <div
      className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900"
      style={getBackgroundStyle()}
    >
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Pucker up Pookie!!!
            <a
            href="#"
            className="fixed bottom-2 left-2 text-white underline cursor-pointer"
            onClick={handleGifLinkClick}
          >
            Complimentary nudes
          </a>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize, whiteSpace: "pre-line" }}
              onClick={() => setYesPressed(true)}
            >
              {getYesButtonText()}
            </button>
            {noCount !== 15 && (
              <button
                onClick={() => setNoCount(noCount + 1)}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            )}
          </div>
        </>
      )}
      <div className="fixed bottom-2 right-2 backdrop-blur-md opacity-80">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </div>
    </div>
  );
}
