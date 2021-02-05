'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Running([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

//////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
  _map;
  _mapZoomLevel = 13;
  _mapEvent;
  _workouts = [];
  _markers = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    // Below we'll need the bind method, because if don't use it
    // the method will point to the html element instead of out class
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.selectedIndex = 0;
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    containerWorkouts.addEventListener(
      'mouseover',
      this._toggleRemoveIcon.bind('remove')
    );
    containerWorkouts.addEventListener(
      'mouseout',
      this._toggleRemoveIcon.bind('add')
    );
    containerWorkouts.addEventListener('click', this._deleteWorkout.bind(this));
    // containerWorkouts.addEventListener('mouseover', function (e) {
    //   if (
    //     e.target
    //       .closest('.workout')
    //       ?.firstElementChild?.classList.contains('x_icon')
    //   ) {
    //     e.target
    //       .closest('.workout')
    //       .firstElementChild.classList.remove('hidden');
    //   }
    //   // if (e.target.firstElementChild?.classList.contains('x_icon')) {
    //   //   e.target.firstElementChild?.classList.remove('hidden');
    //   // }
    // });
    // containerWorkouts.addEventListener('mouseout', function (e) {
    //   if (e.target.firstElementChild?.classList.contains('x_icon')) {
    //     e.target.firstElementChild?.classList.add('hidden');
    //   }
    // });
  }

  _getPosition() {
    // L is a global variable from the leaflet script
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this._map = L.map('map').setView(coords, this._mapZoomLevel);
    // console.log(map.on);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);

    // Handling clicks on map
    this._map.on('click', this._showForm.bind(this));

    if (!this._workouts.length > 0) return;
    // console.log(this._workouts, this._markers);
    // console.log('IMPOSSIBLE!!!');
    this._workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this._mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this._mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this._workouts.push(workout);
    // console.log(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    const newMarker = L.marker(workout.coords)
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'} ${workout.description}`
      )
      .openPopup();

    // const { lat, lng } = newMarker._latlng;
    this._markers.push(newMarker);
    // console.log(this._markers.some(e => e.lat === lat && e.lng === lng));
    // if (!this._markers.some(e => e.lat === lat && e.lng === lng))
    //   this._markers.push({ lat, lng });
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <img alt="&#10006" class="x_icon hidden" />
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
        </div>
        `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
            <span class="workout__icon">🚵‍♂️</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">spm</span>
            </div>
        `;
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    // console.log(workoutEl);

    const workout = this._workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);

    this._map.setView(workout.coords, this._mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    workout.click();

    // Updates the workout each time it is clicked
    this._setLocalStorage();
  }

  _setLocalStorage() {
    // console.log('Here the local storage will be set:', this._workouts);
    localStorage.setItem('workouts', JSON.stringify(this._workouts));
    // console.log(this._workouts);
    // console.log('AQUI ESTA: ', this._markers);
    //localStorage.setItem('markers', JSON.stringify(this._markers));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    //const dataMarkers = JSON.parse(localStorage.getItem('markers'));
    // console.log(data);

    if (!data) return;

    this._workouts = data;
    //this._markers = dataMarkers;

    // Rebuild workout objects to reflect their classes
    this._workouts.forEach(work =>
      work.type === 'running'
        ? (work.__proto__ = Running.prototype)
        : (work.__proto__ = Cycling.prototype)
    );

    // NOTE:
    // In strict mode if you call a function not through a property reference and   // without specifying what this should be, it's undefined.
    // arrow functions don't have their own 'this', so they get it from outer scope
    this._workouts.forEach(work => {
      this._renderWorkout(work);
    });
    // this._workouts.forEach(function (work) {
    //   console.log(this);
    //   this._renderWorkout(work);
    // });
  }

  reset() {
    localStorage.removeItem('workouts');
    localStorage.removeItem('markers');
    location.reload();
  }

  _toggleRemoveIcon(event) {
    // console.log(this);
    // console.log(event);
    if (
      event.target
        .closest('.workout')
        ?.firstElementChild?.classList.contains('x_icon')
    ) {
      const xClList = event.target.closest('.workout').firstElementChild
        .classList;
      if (this === 'remove') xClList.remove('hidden');
      if (this === 'add') xClList.add('hidden');
    }
  }

  _deleteWorkout(event) {
    // console.log(this);
    // console.log(this._map);
    // console.log(this._workouts);
    // console.log(this._markers);
    if (event.target.classList.contains('x_icon')) {
      const option = confirm('Do you want to delete this workout?');
      if (!option) return;
    } else {
      return;
    }
    /* if (event.target.classList.contains('x_icon')) alert('Are you sure?');
    else return; */

    const workoutEl = event.target.closest('.workout');

    // console.log(workoutEl);

    const workout = this._workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);
    const workoutIndex = this._workouts.indexOf(workout);
    this._workouts.splice(workoutIndex, 1);
    // console.log(this._workouts);
    // this._workouts.forEach(work => this._renderWorkout(work));
    //console.log(this._markers);
    // console.log(workoutIndex);
    //this._markers.splice(workoutIndex, 1);

    // Delete element from HTML
    workoutEl.remove(workoutEl.selectedIndex);

    // const LamMarker = new L.marker([
    //   this._markers[workoutIndex].lat,
    //   this._markers[workoutIndex].lng,
    // ]);
    // console.log(LamMarker);

    // const LamMarker = new L.marker([
    //   this._markers[workoutIndex].lat,
    //   this._markers[workoutIndex].lng,
    // ]);

    // Remove marker from _markers array
    const removed = this._markers.splice(workoutIndex, 1)[0];
    // this._map.addLayer(removed);
    // this._map.remove();
    // this._getPosition();

    /* console.log(removed.lat, removed.lng);
    console.log(L.marker([removed.lat, removed.lng]).addTo(this._map));
    this._map.removeLayer(
      L.marker([removed.lat, removed.lng]).addTo(this._map)
    ); */

    // Delete marker from map
    //this._map.removeLayer(removed);
    //this._map.removeLayer(_markers[])
    this._map.removeLayer(removed);
    this._setLocalStorage();
    // console.log('GOT HERE!!!');
  }
}

const app = new App();

// TODO
// Edit a workout
// Delete all workouts
// Sort workouts

//Object.entries(app._map._layers).forEach(elem => console.log(elem[1]?._latlng))

/* var map = L.map('map', {
  'center': [0, 0],
  'zoom': 1,
  'layers': [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});

var marker = L.marker([0, 0]).addTo(map);

map.on('click', function () {
  map.removeLayer(marker);
}); */
