// Check for collision with obstacles or goal
function checkCollision() {
    for (let obstacle of obstacles) {
      let obstaclePosition = {
        top: parseInt(obstacle.style.top),
        left: parseInt(obstacle.style.left)
      };
      // Check for collision with obstacle
      if (playerPosition.top < obstaclePosition.top + obstacle.offsetHeight &&
          playerPosition.top + player.offsetHeight > obstaclePosition.top &&
          playerPosition.left < obstaclePosition.left + obstacle.offsetWidth &&
          playerPosition.left + player.offsetWidth > obstaclePosition.left) {
        // Collision detected, reset player position
        playerPosition = {
          top: 200,
          left: 50
        };
        // Reset obstacle direction
        gameSettings.obstacleDirection = 'right';
      }
    }
    // Check for collision with goal
    let goalPosition = {
      top: parseInt(goal.style.top),
      left: parseInt(goal.style.left)
    };
    if (playerPosition.top < goalPosition.top + goal.offsetHeight &&
        playerPosition.top + player.offsetHeight > goalPosition.top &&
        playerPosition.left < goalPosition.left + goal.offsetWidth &&
        playerPosition.left + player.offsetWidth > goalPosition.left) {
      // Player reached goal, reset player position and obstacle direction
      playerPosition = {
        top: 200,
        left: 50
      };
      gameSettings.obstacleDirection = 'right';
    }
  }  