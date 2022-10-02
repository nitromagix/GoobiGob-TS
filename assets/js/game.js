'use strict';

const MAZE_DATA_URL = './assets/mazes/20x20_maze.json';
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const CELL_WIDTH_HEIGHT = 22;
const MOVE_INTERVAL = 125;
const GHOST_INTERVAL = 175;

window.onload = async (e) => {
   await main(0);
};

let inSuperMode = false
const updateSuperMode = (inMode) => {
   inSuperMode = inMode;
}

const main = async (level) => {

   const _maze = await maze.getData(MAZE_DATA_URL);
   const _grid = grid.buildGrid(_maze);
   const _cellObjects = cellObjects();
   const _goobi = goobi(10, 5);
   const _ghostA = ghost('A', 10, 14);
   const _ghostB = ghost('B', 9, 13);
   const _ghostC = ghost('C', 10, 13);
   const _ghostD = ghost('D', 11, 13);
   const _super = superPowerMode();
   const _score = score();

   window.addEventListener('ghostMove', (e) => {
      // qq(`id: ${e.detail.id}, x: ${e.detail.x}, y: ${e.detail.y}`)
      // qq(`x: ${_goobi.element.getAttribute('xPos')}, y: ${_goobi.element.getAttribute('yPos')}`)
      const theGhost = e.detail.theGhost;
      const ghostX = e.detail.xPos;
      const ghostY = e.detail.yPos;
      const goobiX = _goobi.element.getAttribute('xPos');
      const goobiY = _goobi.element.getAttribute('yPos');

      if (
         (ghostX == goobiX && ghostY == goobiY) ||
         (ghostX == goobiX - 1 && ghostY == goobiY) ||
         (ghostX == goobiX && ghostY == goobiY - 1) ||
         (ghostX == goobiX - 1 && ghostY == goobiY - 1)
      ) {
         // qq(inSuperMode)
         if (!inSuperMode) {
            qq(inSuperMode)
            // get killed
            alert('you lost. please try again');
            const gridToRemove = document.getElementById('grid');
            gridToRemove.innerHTML = '';
            location.reload();
         } else {
            // kill ghosts
            _score.scoreGhost();
            // theGhost.remove();
            // _ghostA = ghost('A', 10, 14);
            // moveGhostA();
         }
      }
   })

   const goobiEncounterDot = (e) => {
      const eventArgs = e.detail;
      // qq(eventArgs);
      const dot = eventArgs.cellObject;
      _cellObjects.lessDot(dot);
      _score.scoreDot();
      if (_cellObjects.isEmpty()) {
         alert('YOU WON!!!!!!!!!!!!!')
         location.reload();
      }
   }

   const goobiEncountersPellet = (e) => {
      const eventArgs = e.detail;
      // qq(evetArgs);
      const pellet = eventArgs.cellObject;
      _cellObjects.lessPellet(pellet);
      _score.scorePellet();
      if (_cellObjects.isEmpty()) {
         alert('YOU WON!!!!!!!!!!!!!')
         location.reload();
      }
      _super.start(updateSuperMode);
   }

   Array.prototype.forEach.call(_cellObjects.dots, element => {
      element.addEventListener('dotEaten', goobiEncounterDot);
   });

   Array.prototype.forEach.call(_cellObjects.pellets, element => {
      element.addEventListener('pelletEaten', goobiEncountersPellet);
   });

   const moveGhostA = async () => {
      if (!document.stop) {
         // await _ghostA.moveUp(1);
         await _ghostA.moveRight(9);
         await _ghostA.moveDown(2);
         await _ghostA.moveLeft(6);
         await _ghostA.moveUp(6);
         await _ghostA.moveRight(4);
         await _ghostA.moveDown(4);
         await _ghostA.moveRight(2);
         await _ghostA.moveDown(4);
         await _ghostA.moveLeft(4);
         await _ghostA.moveDown(6);
         await _ghostA.moveLeft(6);
         await _ghostA.moveDown(4);
         await _ghostA.moveLeft(8);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(8);
         await _ghostA.moveUp(6);
         await _ghostA.moveLeft(4);
         await _ghostA.moveUp(2);
         await _ghostA.moveLeft(4);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(6);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(3);
         // await _ghostA.moveDown(1);
         await moveGhostA();
      }
   }

   const moveGhostB = async () => {
      if (!document.stop) {
         await _ghostB.moveLeft(9);
         await _ghostB.moveRight(6);
         await _ghostB.moveDown(2);
         await _ghostB.moveLeft(6);
         await _ghostB.moveDown(2);
         await _ghostB.moveRight(4);
         await _ghostB.moveDown(6);
         await _ghostB.moveRight(8);
         await _ghostB.moveUp(4);
         await _ghostB.moveRight(4);
         await _ghostB.moveDown(4);
         await _ghostB.moveRight(2);
         await _ghostB.moveDown(2);
         await _ghostB.moveLeft(8);
         await _ghostB.moveDown(2);
         await _ghostB.moveRight(8);
         await _ghostB.moveUp(8);
         await _ghostB.moveLeft(4);
         await _ghostB.moveUp(2);
         await _ghostB.moveRight(4);
         await _ghostB.moveUp(8);
         await _ghostB.moveLeft(2);
         await _ghostB.moveDown(4);
         await _ghostB.moveLeft(7);

         await moveGhostB();
      }
   }
   const moveGhostC = async () => {
      if (!document.stop) {
         await _ghostC.moveRight(1);
         await _ghostC.moveUp(4);
         await _ghostC.moveRight(8);
         await _ghostC.moveDown(8);
         await _ghostC.moveLeft(14);
         await _ghostC.moveRight(10);
         await _ghostC.moveLeft(14);
         await _ghostC.moveRight(4);
         await _ghostC.moveDown(6);
         await _ghostC.moveRight(4);
         await _ghostC.moveUp(4);
         await _ghostC.moveLeft(8);
         await _ghostC.moveDown(8);
         await _ghostC.moveUp(2);
         await _ghostC.moveRight(8);
         await _ghostC.moveLeft(8);
         await _ghostC.moveUp(6);
         await _ghostC.moveRight(4);
         await _ghostC.moveUp(2);
         await _ghostC.moveLeft(4);
         await _ghostC.moveUp(4);
         await _ghostC.moveRight(2);
         await _ghostC.moveUp(4);
         await _ghostC.moveRight(2);
         await _ghostC.moveDown(4);
         await _ghostC.moveRight(2);
         await _ghostC.moveUp(4);
         await _ghostC.moveRight(2);
         await _ghostC.moveDown(4);
         await _ghostC.moveRight(1);

         await moveGhostC();
      }
   }

   const moveGhostD = async () => {
      if (!document.stop) {
         await _ghostD.moveLeft(9);
         await _ghostD.moveUp(4);
         await _ghostD.moveRight(2);
         await _ghostD.moveDown(4);
         await _ghostD.moveRight(10);
         await _ghostD.moveLeft(5);
         await _ghostD.moveRight(7);
         await _ghostD.moveUp(4);
         await _ghostD.moveRight(4);
         await _ghostD.moveDown(4);
         await _ghostD.moveLeft(4);
         await _ghostD.moveUp(4);
         await _ghostD.moveLeft(4);
         await _ghostD.moveDown(4);
         await _ghostD.moveLeft(2);
         await _ghostD.moveUp(4);
         await _ghostD.moveLeft(6);
         await _ghostD.moveDown(4);
         await _ghostD.moveUp(4);
         await _ghostD.moveDown(4);
         await _ghostD.moveLeft(2);
         await _ghostD.moveDown(4);
         await _ghostD.moveRight(4);
         await _ghostD.moveDown(6);
         await _ghostD.moveRight(14);
         await _ghostD.moveDown(2);
         await _ghostD.moveLeft(8);
         await _ghostD.moveUp(2);
         await _ghostD.moveRight(4);
         await _ghostD.moveUp(6);
         await _ghostD.moveRight(4);
         await _ghostD.moveUp(4);
         await _ghostD.moveLeft(9);

         await moveGhostD();
      }
   }

   await _ghostA.moveUp(1);
   moveGhostA()
   await _ghostB.moveRight(1);
   await _ghostB.moveUp(2);
   moveGhostB();
   await _ghostC.moveUp(2);
   moveGhostC();
   await _ghostD.moveLeft(1);
   await _ghostD.moveUp(2);
   moveGhostD();
}