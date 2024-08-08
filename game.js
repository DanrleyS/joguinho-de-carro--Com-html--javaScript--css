document.addEventListener('keydown', (e) => {
    console.log(`Key down: ${e.key}`); // Adicione isso para depurar
    if (e.key === 'ArrowLeft') {
        isLeftPressed = true;
    }
    if (e.key === 'ArrowRight') {
        isRightPressed = true;
    }
    if (e.key === 'ArrowUp') {
        isUpPressed = true;
    }
    if (e.key === 'ArrowDown') {
        isDownPressed = true;
    }
    if (e.key === 'r' || e.key === 'R') {
        if (isGameOver) {
            resetGame();
        }
    }
});

document.addEventListener('keyup', (e) => {
    console.log(`Key up: ${e.key}`); // Adicione isso para depurar
    if (e.key === 'ArrowLeft') {
        isLeftPressed = false;
    }
    if (e.key === 'ArrowRight') {
        isRightPressed = false;
    }
    if (e.key === 'ArrowUp') {
        isUpPressed = false;
    }
    if (e.key === 'ArrowDown') {
        isDownPressed = false;
    }
});
