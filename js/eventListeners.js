window.addEventListener('keydown', (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case 'ArrowUp':
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite('enterDoor')
          door.play()
          playDoorSound()
          return
        }
      }
      if (player.velocity.y === 0) player.velocity.y = -21

      break
    case 'ArrowLeft':
      // move player to the left
      keys.ArrowLeft.pressed = true
      playWalkSound()
      break
    case 'ArrowRight':
      // move player to the right
      keys.ArrowRight.pressed = true
      playWalkSound()
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      // move player to the left
      keys.ArrowLeft.pressed = false
      stopWalkSound()

      break
    case 'ArrowRight':
      // move player to the right
      keys.ArrowRight.pressed = false
      stopWalkSound()

      break
  }
})

// Get the main screen overlay and buttons
const mainScreen = document.getElementById('mainScreen')
const startGameButton = document.getElementById('startGame')
const instructionsButton = document.getElementById('instructions')

// Add click event listeners for the buttons
startGameButton.addEventListener('click', () => {
  mainScreen.style.display = 'none'
  playBackgroundMusic()
})

instructionsButton.addEventListener('click', () => {
  alert('Add your game instructions here')
})
