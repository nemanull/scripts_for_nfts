const fs = require('fs');
const path = require('path');



const folderPath = './png'; // Replace this with the actual path to your folder

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const imageFiles = files.filter(file => {
    const extension = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.gif'].includes(extension);
  });

  imageFiles.sort();

  imageFiles.forEach((oldName, index) => {
    const extension = path.extname(oldName);
    const newName = `${index + 1}${extension}`;
    
    const oldPath = path.join(folderPath, oldName);
    const newPath = path.join(folderPath, newName);

    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(`Error renaming ${oldName}:`, err);
      } else {
        console.log(`Renamed: ${oldName} -> ${newName}`);
      }
    });
  });

  console.log('All images have been renamed.');
});
