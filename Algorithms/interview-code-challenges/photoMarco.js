let pictures = photos.split("\n");

let pictureObj = {};
pictures.forEach(picture => {
  pictureObj[picture] = picture;
});

function sortFiles(a, b) {
  let file1 = a.split(", "),
    file2 = b.split(", "),
    city1 = file1[1],
    city2 = file2[1];

  if (city1 === city2) {
    return new Date(file1[2]) > new Date(file2[2]);
  }

  return city1 > city2;
}

let sortedPictures = Object.values(pictureObj).sort(sortFiles);

let finalArr = pictures.map(picture => {
  return sortedPictures[picture];
});

// console.log(finalArr.join("\n"));
