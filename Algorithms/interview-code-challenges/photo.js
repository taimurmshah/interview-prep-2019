//found this problem online; I think it's good practice for OOP on interviews

/* Tasks:
 * 1. sort by city
 * 2. sort by date
 * 3. sort by time (after sorted by date)
 * 4. rename photos in format: "Warsaw02.jpg" or "London1.png"
 *   - count total number of photos, then add the number to the name of the photo
 * */

/* Thoughts:
 * - use OOP to tackle this; create classes
 *   - Photo
 *   - City
 * - the classes can have class methods:
 *   - sort by Date
 *   - sort by Time
 *
 * Photo-class:
 * - fullString
 * - name
 * - newName
 * - index (maybe not)
 * - city
 * - date
 * - time
 * - fileType
 * - Methods:
 *      - addValues()
 *      - addNumberToName(index, lengthOfPhotos)
 *
 * City-class:
 * - photos: array (of photos of this city)
 * - Methods:
 *      - sortByDate
 *      - sortByTime
 *      - appendNumberToName
 *
 * Process:
 * 1. take original array, map it and change each picture into a Photo object.
 *      - this preserves the original order
 *      - I can do all the work with class methods
 *      - In the end, I can just map again, and replace the object with the new name
 * 2.
 * */

class Photo {
  constructor(string) {
    this.fullString = string;

    this.newName = null;
    this.city = null;
    this.date = null;
    this.fileType = null;
  }

  addValues() {
    // "photo.jpg, Warsaw, 2013-09-05 14:08:15\n"
    let values = this.fullString.split(", ");
    let fileType = values[0].split(".")[1];
    fileType = "." + fileType;
    let city = values[1];
    let date = values[2];
    this.fileType = fileType;
    this.city = city;
    this.date = date;

    return this;
  }

  createNewName(index, length) {
    index = index.toString();
    length = length.toString();
    while (index.length < length.length) index = "0" + index;
    this.newName = this.city + index + this.fileType;
  }
}

class City {
  constructor() {
    this.photos = [];
  }

  addPhoto = cityObj => {
    this.photos.push(cityObj);
    return this;
  };

  sortByDate() {
    //this accounts for date and time bc the native js Date class accepts as a format date + time
    this.photos.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    return this.photos;
  }

  changePhotoNames = () => {
    for (let i = 0; i < this.photos.length; i++) {
      let photo = this.photos[i];
      photo.createNewName(i + 1, this.photos.length);
    }
  };
}

let formatPictures = photos => {
  photos = photos.split("\n");
  photos = photos.map(photo => {
    let transformedPic = new Photo(photo);
    transformedPic.addValues();
    return transformedPic;
  });

  let cities = {};

  for (let i = 0; i < photos.length; i++) {
    let city = photos[i].city;
    if (!cities[city]) {
      //create a key in this object with the name of the city
      //and the value of a city object
      cities[city] = new City().addPhoto(photos[i]);
    } else {
      cities[city].addPhoto(photos[i]);
    }
  }

  Object.keys(cities).forEach(city => {
    cities[city].sortByDate();
    cities[city].changePhotoNames();
  });

  photos = photos.map(photo => photo.newName);
  for (let i = 0; i < photos.length - 1; i++) {
    photos[i] = photos[i] + "\n";
  }
  return photos.join("");
};
