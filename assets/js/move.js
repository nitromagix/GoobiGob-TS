'use strict';

const TIMEOUT = 200

const move = (goobiElement) => {

   async function moveWithArrowKeys(x_index, y_index, callback) {
      let direction = null;
      let x = x_index;
      let y = y_index;

      function moveCharacter() {
         const old_x = x;
         const old_y = y;

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

         if (direction !== null) {
            const newCell = document.getElementById(`c${x}_${y}`);
            const cellType = newCell.getAttribute('ctype');

            // if (cellType === '0') {
            //    x = old_x;
            //    y = old_y;
            // } else {
            //    newCell.appendChild(element);
            //    //  I don't know how to do inheritance in javascript yet so 
            //    //  I'm checking if the cell object is a dot or a pellet (which
            //    //  is essentially a special dot)
            //    const idPrefix = cellType === '1' ? 'd' : 'p';

            //    const cellObject = document.getElementById(`${idPrefix}${x}_${y}`)

            //    if (cellObject) {
            //       qq(cellObject);
            //       const eventArgs = {
            //          'character': element,
            //          'cellObject': cellObject
            //       };
            //       const e = new CustomEvent("onDot", {
            //          detail: eventArgs
            //       });
            //       cellObject.dispatchEvent(e);
            //    }
            // }

            switch (cellType) {
               case '0': {
                  x = old_x;
                  y = old_y;
                  break;
               }
               case '1':
               case '4': {
                  goobiElement.setAttribute('xPos', x);
                  goobiElement.setAttribute('yPos', y);
                  newCell.appendChild(goobiElement);
                  const dot = document.getElementById(`d${x}_${y}`)
                  if (dot) {
                     const eventArgs = {
                        'character': goobiElement,
                        'cellObject': dot
                     };
                     var e = new CustomEvent("dotEaten", {
                        detail: eventArgs
                     });
                     dot.dispatchEvent(e);
                  }
                  break;
               }
               case '2': {
                  goobiElement.setAttribute('xPos', x);
                  goobiElement.setAttribute('yPos', y);
                  newCell.appendChild(goobiElement);
                  const pellet = document.getElementById(`p${x}_${y}`)
                  if (pellet) {
                     const eventArgs = {
                        'character': goobiElement,
                        'cellObject': pellet
                     };
                     var e = new CustomEvent("pelletEaten", {
                        detail: eventArgs
                     });

                     pellet.dispatchEvent(e);
                  }
                  break;
               }
               case '3': {
                  x = old_x;
                  y = old_y;
                  break;
               }
            }
         }
      }

      setInterval(moveCharacter, MOVE_INTERVAL)

      document.addEventListener('keydown', function (e) {
         if (e.repeat) return;

         if (e.key === 'ArrowRight') {
            direction = 'right'
         }
         if (e.key === 'ArrowUp') {
            direction = 'up'
         }
         if (e.key === 'ArrowLeft') {
            direction = 'left'
         }
         if (e.key === 'ArrowDown') {
            direction = 'down'
         }
         callback(direction)
      })

      document.addEventListener('keyup', function (e) {
         direction = null
         callback(direction)
      })
   }

   return {
      withArrowKeys: moveWithArrowKeys
   }
}