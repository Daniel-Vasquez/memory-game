import { useState, useEffect } from 'react';
import { generateCards } from '@/utils';
import { Card } from '@/components/Card';

export const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);
      setTimeout(checkMatch, 1000);
    }
  }, [flipped]);

  const checkMatch = () => {
    const [first, second] = flipped;
    if (cards[first].icon === cards[second].icon) {
      setCards(prevCards =>
        prevCards.map(card =>
          card.id === first || card.id === second ? { ...card, matched: true } : card
        )
      );
    }
    setFlipped([]);
    setDisabled(false);
  };

  const handleClick = index => {
    if (disabled || flipped.includes(index) || cards[index].matched) return;
    setFlipped([...flipped, index]);
    setMoves(moves + 1);
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlipped([]);
    setDisabled(false);
    setMoves(0);
  }

  return (
    <>
      <div className="col-span-4 flex justify-center items-center pb-4">
        <p className="text-gray-700 font-bold text-2xl py-3 dark:text-white">
          Total de movimientos: {" "}
          <span className="text-yellow-500 text-3xl">
            {moves}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            flipped={flipped.includes(index) || card.matched}
            onClick={() => handleClick(index)}
          />
        ))}
        <div className="col-span-4 flex justify-center p-4">
          <button
            className="bg-white text-black shadow font-bold py-4 px-6 rounded dark:text-white dark:bg-gray-800 hover:bg-red-700 hover:text-white dark:hover:bg-red-700 transition-colors" 
            onClick={resetGame}
          >
            Volver a jugar
          </button>
        </div>
      </div>
    </>
  );
};
