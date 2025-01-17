import React from 'react';
import { useNavigate } from 'react-router-dom';
import twoDAnimation from '../images/2danimation.jpg';

const characters = [
  {
    name: "Character 1",
    //image: twoDAnimation,
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 1",
    //image: twoDAnimation,
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 1",
    //image: twoDAnimation,
    description: "Character 1 is known for their courage and bravery.",
  },
  {
    name: "Character 2",
    //image: twoDAnimation,
    description: "Character 2 has a mysterious background and exceptional skills.",
  },
  {
    name: "Character 3",
    //image: twoDAnimation,
    description: "Character 3 is a master of strategy and quick thinking.",
  },
  {
    name: "Character 4",
    //image: twoDAnimation,
    description: "Character 4 is renowned for their unparalleled strength.",
  },
  // Add more characters as needed
];

const CharacterList = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/characters'); // Ensure this path matches your routing setup
  };

  return (
    <div className="bg-gray-900 p-6">
      <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-l from-white to-gray-950 text-transparent bg-clip-text">Animated Characters</h1>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Animated Characters</h2>
      <div className="flex flex-wrap justify-center bg-gray-900 p-6">
        {characters.slice(0, 6).map((character, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-gray-700 m-4">
            <img className="w-full" src={character.image} alt={character.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{character.name}</div>
              <p className="text-gray-400 text-base">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleViewMoreClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View More...
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
