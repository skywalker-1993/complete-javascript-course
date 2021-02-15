'use strict';

// CHALLENGE #1

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // console.log(neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderErr(`Something went wrong 💥💥 ${err.message} Try again!`);
      // catches error anywhere in the chain
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (response.status === 403)
        throw new Error('More than 3 requests per second were made!');

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return getCountryData(data.country);
    })
    .catch(err => console.log(`${err} 💥💥💥`));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// CHALLENGE #2
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImage = document.createElement('img');
    console.log(`${imgPath} is being loaded...`);

    newImage.src = imgPath;

    newImage.addEventListener('load', function () {
      imgContainer.append(newImage);
      resolve(newImage);
    });

    newImage.addEventListener('error', err =>
      reject(new Error('Image not found!'))
    );
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 1 has been loaded :)`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 2 has been loaded :)`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// CHALLENGES #3
// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-3.jpg');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err.message);
//   }
// };
// loadNPause();

// const loadAll = async function (imgArr) {
//   const imgs = imgArr.map(img => createImage(img));
//   console.log('Before settlement: ', imgs);
//   const settledPromises = await Promise.allSettled(imgs);
//   console.log('After settlement: ', settledPromises);
//   settledPromises.forEach(el => el.value.classList.add('parallel'));
// };

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    // console.log(imgsEl);
    imgsEl.forEach(img => {
      console.log(img);
      img.classList.add('parallel');
    });
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
