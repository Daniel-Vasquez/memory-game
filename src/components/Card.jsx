export const Card = ({ card, flipped, onClick }) => {
  return (
    <div
      className={`card p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer ${
        flipped ? 'flipped' : ''
      }`}
      onClick={onClick}
    >
      <div className="inner h-24 flex justify-center items-center text-5xl">
        {flipped ? card.icon : '❓'}
      </div>
    </div>
  );
};
