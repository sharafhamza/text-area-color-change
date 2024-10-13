import React, { useState } from "react";

const Textarea = () => {
  const [colorText, setColorText] = useState("");

  const changeColor = (color) => {
    if (color === "black") {
      setColorText("black1");
    } else if (color === "yellow") {
      setColorText("yellow1");
    } else if (color === "blue") {
      setColorText("blue1");
    } else if (color === "red") {
      setColorText("red1");
    }
  };

  return (
    <>
      <div className="flex space-x-4 p-6 justify-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => changeColor("red")}
        >
          Red Button
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => changeColor("blue")}
        >
          Blue Button
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => changeColor("yellow")}
        >
          Yellow Button
        </button>

        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => changeColor("black")}
        >
          Black Button
        </button>
      </div>

      <textarea
        rows="5"
        className={`w-full px-4 py-3 text-gray-700 border ${colorText} bg-[#ddd] border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 `}
        placeholder="Type your message here..."
      />
    </>
  );
};

export default Textarea;
