export const generateCards = () => {
  const icons = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍑', '🍍'];
  const cards = icons.concat(icons).sort(() => 0.5 - Math.random());
  return cards.map((icon, index) => ({ id: index, icon, matched: false }));
};