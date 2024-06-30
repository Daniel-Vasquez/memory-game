# Memory Game

This is a memory game developed with React and Vite, using Tailwind CSS for layout and `useContext` to handle dark mode state. Dark mode settings are saved to `localStorage` for persistence.

## Characteristics

- **Memory game**: Find all the pairs of cards.
- **Dark Mode**: Toggle between light and dark mode.
- **Dark Mode Persistence**: Dark mode settings are saved in `localStorage`.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Facility

1. Clone the repository:
```sh
git clone git@github.com:Daniel-Vasquez/memory-game.git

cd memory-game
```
2. Install dependencies
```sh
npm install
````

3. Start the app
```sh
npm run dev
```

4. Open your browser and navigate to http://localhost:5173

## Use
Main Component (App.jsx)
This component wraps the application with the ThemeProvider and contains the header and the MemoryGame component.

### Theme Context (ThemeContext.jsx)
This context handles the dark mode state, saving and retrieving the state from localStorage.

### Memory Game (MemoryGame.jsx)
This component handles the logic of the memory game, including card generation, click handling, and match checking.

### Card (Card.jsx)
This component represents an individual card in the memory game. Manages the visual presentation of cards, displaying the corresponding icon when the card is flipped.

### Tailwind CSS
Tailwind CSS is used for the layout of the application. Styles are configured in tailwind.config.js and imported in src/index.css.

## Contact
Daniel Vásquez
- [Linkedin](https://www.linkedin.com/in/daniel-vasquez-nepomuceno/)
- Correo: dani.vasquez.dev@gmail.com
- [Portafolio web](https://daniel-dev-smoky.vercel.app/)