'use strict';

const score = () => {

   let count = 0;

   const getDot = () => {
      count += 123;
      updateScore();
   }

   const getPellet = () => {
      count += 3169;
      updateScore();
   }

   const getGhost = () => {
      count += 7138;
      updateScore();
   }

   const updateScore = () => {
      const s = document.getElementById('score');
      s.textContent = count;
   }

   return {
      scoreDot: getDot,
      scorePellet: getPellet,
      scoreGhost: getGhost
   }

}