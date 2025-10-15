# 🎮 Tic Tac Toe Game

A classic Tic Tac Toe game implemented with pure HTML, CSS, and JavaScript. Simple, fun, and fully functional!

## 🚀 Features

- **Modern and responsive interface**: Attractive design that works on any device
- **Two-player game**: Automatic alternation between X and O
- **Score system**: Keeps track of each player's victories
- **Smooth animations**: Visual effects for better experience
- **Win detection**: Highlights winning cells
- **Easy reset**: Buttons for new game and reset score

## 🎯 How to play

1. **Objective**: Be the first to complete a line of 3 symbols (horizontal, vertical, or diagonal)
2. **Turns**: Players alternate placing X and O
3. **Win**: Complete a line of 3 identical symbols
4. **Tie**: If the board fills up without a winner

## 🛠️ Technologies used

- **HTML5**: Semantic game structure
- **CSS3**: Modern styles with gradients and animations
- **JavaScript ES6+**: Game logic with classes and events

## 📁 Project structure

```
tic-tac-toe/
├── index.html          # Main page
├── style.css          # Game styles
├── script.js          # Game logic
└── README.md          # Documentation
```

## 🚀 Installation and usage

### Option 1: Open directly
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing!

### Option 2: Local server
```bash
# With Python 3
python -m http.server 8000

# With Node.js (if you have http-server installed)
npx http-server

# With PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🌐 Deployment

This project is perfect for deploying on:

- **GitHub Pages**: Enable Pages in repository settings
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag the folder or connect with Git
- **Render**: Deploy as static site

## 🎨 Customization

### Change colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --win-color: #48bb78;
}
```

### Add sounds
You can add sound effects by modifying `script.js`:
```javascript
// Example sound on click
const audio = new Audio('click.mp3');
audio.play();
```

## 🤝 Contributing

Contributions are welcome! Some ideas:

- [ ] AI opponent mode
- [ ] Different visual themes
- [ ] Sound effects
- [ ] Online multiplayer mode
- [ ] Game statistics
- [ ] Different board sizes

## 📝 License

This project is under the MIT License. Feel free to use and modify it!

## 🎉 Enjoy playing!

Have lots of fun with this classic game! 🎮✨