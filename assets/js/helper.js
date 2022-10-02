'use strict';

'use strict';

const createImage = (imageName) => {
   let image = document.createElement('img')
   image.src = imageName;
   document.body.append(image);
   return image
}

const createSizedImage = (imageName, width, height) => {
   let image = createImage(imageName);
   image.style.width = width;
   image.style.height = height;
   return image
}

const qq = (message) => {
   console.log(message);
}

const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));