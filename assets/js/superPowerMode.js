'use strict';
const WALL_FLASH_INTERVAL = 250;

const superPowerMode = () => {

   let isInMode = false;
   const start = async (callback) => {
      callback(1);
      const walls = document.getElementsByClassName('wall');
      Array.prototype.forEach.call(walls, element => {
         element.style.backgroundColor = 'aquamarine';
      });
      const intv = setInterval(
         function () {
            Array.prototype.forEach.call(walls, element => {
               element.style.backgroundColor = element.style.backgroundColor === 'navy' ? 'aquamarine' : 'navy';
            });
         }, WALL_FLASH_INTERVAL);
      const ghosts = document.getElementsByClassName('ghost');
      Array.prototype.forEach.call(ghosts, element => {
         // element.classList.remove('ghost');
         // element.classList.add('weakghost');
         let imageSrc = element.src;
         imageSrc = imageSrc.replace('.png', '_.gif');
         element.src = imageSrc;
      });
      await waitFor(5678);
      Array.prototype.forEach.call(walls, element => {
         element.style.backgroundColor = 'navy';
      });
      Array.prototype.forEach.call(ghosts, element => {
         // element.classList.remove('weakghost');
         // element.classList.add('ghost');
         let imageSrc = element.src;
         imageSrc = imageSrc.replace('_.gif', '.png');
         element.src = imageSrc;
      });
      callback(0);
      clearInterval(intv);

   }

   return {
      start: start,
      inMode: isInMode
   }
}