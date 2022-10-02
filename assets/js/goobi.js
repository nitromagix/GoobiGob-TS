'use strict';

const goobi = (start_at_cell_x_index, start_at_cell_y_index) => {
   const wh = `${CELL_WIDTH_HEIGHT}px`;
   const g = createSizedImage('./assets/images/goobi.gif', wh, wh);
   g.id = 'goobi';
   const newCell = document.getElementById(`c${start_at_cell_x_index}_${start_at_cell_y_index}`);
   newCell.appendChild(g);
   let prev = 'right';
   let deg = 0;

   function handleDirectionChange(direction) {
      if (direction === null) {
         prev = 'right';
      }
      if (direction === 'left') {
         deg = (prev === 'up' ? 90 : prev === 'right' ? 180 : prev === 'down' ? -90 : 0);
         prev = 'left';
      }
      if (direction === 'up') {
         deg = (prev === 'left' ? 90 : prev === 'down' ? 180 : prev === 'right' ? -90 : 0);
         prev = 'up';
      }
      if (direction === 'right') {
         deg = (prev === 'down' ? 90 : prev === 'left' ? 180 : prev === 'up' ? -90 : 0);
         prev = 'right';
      }
      if (direction === 'down') {
         deg = (prev === 'right' ? 90 : prev === 'up' ? 180 : prev === 'left' ? -90 : 0);
         prev = 'down';
      }
      g.style.transform = 'rotate(' + deg + 'deg)';
   }

   move(g).withArrowKeys(start_at_cell_x_index, start_at_cell_y_index, handleDirectionChange)

   return {
      element: g
   }
}