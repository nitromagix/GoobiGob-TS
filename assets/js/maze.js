'use strict';

const maze = {

   getData: async (mazeJsonUrl) => {
      const fetchMaze = await fetch(mazeJsonUrl);
      const mazeJson = await fetchMaze.json();
      return mazeJson;
   }
}