'use strict';

function ghost(id, x, y) {
   const wh = `${CELL_WIDTH_HEIGHT}px`;
   let theGhost = createSizedImage(`assets/images/ghost${id}.png`, wh, wh)
   theGhost.id = `ghost${id}`
   theGhost.classList.add('ghost');

   let direction = null;

   function moveGhost() {
      if (direction === 'right') {
         x = x === GRID_WIDTH ? 0 : x + 1;
      }
      if (direction === 'up') {
         y = y === GRID_HEIGHT ? GRID_HEIGHT : y + 1;
      }
      if (direction === 'left') {
         x = x === 0 ? GRID_WIDTH : x - 1;
      }
      if (direction === 'down') {
         y = y === 0 ? 0 : y - 1;
      }

      const newCell = document.getElementById(`c${x}_${y}`);
      newCell.appendChild(theGhost);
      const eventArgs = {
         'theGhost': theGhost,
         'xPos': x,
         'yPos': y
      };
      var e = new CustomEvent("ghostMove", {
         detail: eventArgs
      });

      window.dispatchEvent(e);
   }

   moveGhost();

   // setInterval(moveGhost, GHOST_INTERVAL)

   async function right(numberOfTimes) {
      direction = 'right';
      await moveTimes(numberOfTimes);
      stop();
   }

   async function up(numberOfTimes) {
      direction = 'up';
      await moveTimes(numberOfTimes);
      stop();
   }

   async function left(numberOfTimes) {
      direction = 'left';
      await moveTimes(numberOfTimes);
      stop();
   }

   async function down(numberOfTimes) {
      direction = 'down'
      await moveTimes(numberOfTimes);
      stop();
   }

   const moveTimes = async (numberOfTimes) => {
      for (let i = 0; i < numberOfTimes; i++) {
         await sleep(GHOST_INTERVAL);
         moveGhost();
      }
   }

   function stop() {
      direction = null
      // element.src = `./assets/images/ghostStatic.png`
   }

   function sleep(time) {
      return new Promise(resolve => {
         setTimeout(resolve, time)
      })
   }
   

   return {
      element: theGhost,
      moveLeft: left,
      moveUp: up,
      moveRight: right,
      moveDown: down,
      stop: stop
   }
}