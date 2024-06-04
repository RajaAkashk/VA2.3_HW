<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
</head>

<body>

  <label for="selectMovie">Choose a movie genre:</label>
  <select id="selectMovie">
    <option value="Action">Action</option>
    <option value="Comedy">Comedy</option>
    <option value="Drama">Drama</option>
  </select>
  <p id="MovieResult"></p>


  <label for="selectWeather">Select a weather condition:</label>
  <select id="selectWeather">
    <option value="Sunny">Sunny</option>
    <option value="Rainy">Rainy</option>
    <option value="Snowy">Snowy</option>
  </select>
  <p id="weatherResult"></p>


  <label for="selectLanguage">Select a Language:</label>
  <select id="selectLanguage">
    <option value="English">English</option>
    <option value="Spanish">Spanish</option>
    <option value="French">French</option>
  </select>
  <button id="greetingBtn">Display Greeting</button>
  <p id="greetingResult"></p>


  <label for="selectInstrument">Choose a music instrument:</label>
  <select id="selectInstrument">
    <option value="Piano">Piano</option>
    <option value="Guitar">Guitar</option>
    <option value="Violin">Violin</option>
  </select>
  <button id="instrumentBtn">Display Fun Fact</button>
  <p id="instrumentResult"></p>

  <label for="selectPet">Select a pet:</label>
  <select id="selectPet">
    <option value="Cat">Cat</option>
    <option value="Dog">Dog</option>
    <option value="Fish">Fish</option>
  </select>
  <button id="petBtn">Display Pet Description.</button>
  <p id="petResult"></p>

  <script>

    const selectMovie = document.getElementById('selectMovie')
    const MovieResult = document.getElementById('MovieResult')

    selectMovie.addEventListener('change', function () {
      const movie = selectMovie.value
      if (movie === "Action") {
        MovieResult.textContent = `Recommended Action Movie: Godzilla: King of Monsters.`
      }
      else if (movie === "Comedy") {
        MovieResult.textContent = `Recommended Comedy Movie: Golmaal`
      }
      else if (movie === "Drama") {
        MovieResult.textContent = `Recommended Drama: Vincenzo`
      } else {
        MovieResult.textContent = `Please select a movie genre.`
      }
    })



    const selectWeather = document.getElementById('selectWeather')
    const weatherResult = document.getElementById('weatherResult')

    selectWeather.addEventListener('change', function () {
      const weather = selectWeather.value

      if (weather === "Sunny") {
        weatherResult.textContent = `Outdoor Activity Suggestion: Picnic in the Park.`
      }
      else if (weather === "Rainy") {
        weatherResult.textContent = `Stay Indoor: Spend time with family and have pakode and chai. `
      }
      else if (weather === "Snowy") {
        weatherResult.textContent = `Outdoor Activity Suggestion: Make a Snowman.`
      } else {
        weatherResult.textContent = `Select a weather of your preference.`
      }

    })



    const selectLanguage = document.getElementById('selectLanguage')
    const greetingResult = document.getElementById('greetingResult')
    const greetingBtn = document.getElementById('greetingBtn')

    greetingBtn.addEventListener('click', function () {

      const language = selectLanguage.value

      if (language === "English") {
        greetingResult.textContent = `Common Greeting: Hello!`
      }
      else if (language === "Spanish") {
        greetingResult.textContent = `Common Greeting: Ola!`
      }
      else if (language === "French") {
        greetingResult.textContent = `Common Greeting: Bonjour!`
      } else {
        greetingResult.textContent = `Select a language.`
      }
    })



    const selectInstrument = document.getElementById('selectInstrument')
    const instrumentResult = document.getElementById('instrumentResult')
    const instrumentBtn = document.getElementById('instrumentBtn')

    instrumentBtn.addEventListener('click', function () {
      const instrument = selectInstrument.value

      if (instrument === "Piano") {
        instrumentResult.textContent = `Fun Fact: The piano had 88 keys.`
      } else if (instrument === "Guitar") {
        instrumentResult.textContent = `Fun Fact: Most popular instrument.`
      } else if (instrument === "Violin") {
        instrumentResult.textContent = `Fun Fact: Violin is a string instrument known for it's sweet sound.`
      } else {
        instrumentResult.textContent = `Select an instrument.`
      }
    })



    const selectPet = document.getElementById('selectPet')
    const petBtn = document.getElementById('petBtn')
    const petResult = document.getElementById('petResult')

    petBtn.addEventListener('click', function () {
      const pet = selectPet.value

      if (pet === "Cat") {
        petResult.textContent = `Cats are independent and playful.`
      } else if (pet === "Dog") {
        petResult.textContent = `Dogs are loyal and friendly companions.`
      } else if (pet === "Fish") {
        petResult.textContent = `Fish are low-maintenance and peaceful pets.`
      } else {
        petResult.textContent = `Select a pet.`
      }
    })


  <label for="selectPlanet">Choose a Planet:</label>
  <select id="selectPlanet">
    <option value="Earth">Earth</option>
    <option value="Mars">Mars</option>
    <option value="Jupitor">Jupitor</option>
  </select>
  <button id="planetBtn">Display Planet Facts</button>
  <p id="planetResult"></p>

<label for="selectSeason">Choose a Season:</label>
  <select id="selectSeason">
    <option value="Spring">Spring</option>
    <option value="Summer">Summer</option>
    <option value="Fall">Fall</option>
    <option value="Winter">Winter</option>
  </select>
  <button id="seasonBtn">Display Typical Weather</button>
  <p id="seasonResult"></p>



  <label for="selectMovie">Choose a movie genre:</label>
  <select id="selectMovie">
    <option value="ScienceFriction">Science Friction</option>
    <option value="Mystery">Mystery</option>
    <option value="Romance">Romance</option>
  </select>
  <button id="movieBtn">Display Movie Recommendation</button>
  <p id="movieResult"></p>

 const selectSeason = document.getElementById('selectSeason')
    const seasonBtn = document.getElementById('seasonBtn')
    const seasonResult = document.getElementById('seasonResult')

    seasonBtn.addEventListener('click', function () {
      const season = selectSeason.value

      if (season === "Summer") {
        seasonResult.textContent = `Typical Weather: Hot temperatures and sunny days.`
      } else if (season === "Fall") {
        seasonResult.textContent = `Typical Weather: Cooler temperature and falling leaves.`
      }
      else if (season === "Winter") {
        seasonResult.textContent = `Typical Weather: Cold temperature and snowfall.`
      }
      else if (season === "Spring") {
        seasonResult.textContent = `Typical Weather: Mild temperature and blooming flowers.`
      }
    })



    const selectMovie = document.getElementById('selectMovie')
    const movieBtn = document.getElementById('movieBtn')
    const movieResult = document.getElementById('movieResult')

    movieBtn.addEventListener('click', function () {
      const movie = selectMovie.value

      if (movie === "Mystery") {
        movieResult.textContent = `Movie Recommedation: Gone Girl`
      } else if (movie === "ScienceFriction") {
        movieResult.textContent = `Movie Recommedation: Dune`
      }
      else if (movie === "Romance") {
        movieResult.textContent = `Movie Recommedation: Pride and Prejudice`
      }
    })

 const selectPlanet = document.getElementById('selectPlanet')
    const planetBtn = document.getElementById('planetBtn')
    const planetResult = document.getElementById('planetResult')

    planetBtn.addEventListener('click', function () {
      const planet = selectPlanet.value

      if (planet === "Earth") {
        planetResult.textContent = `Planet Fact: Earth is the only planet with life.`
      } else if (planet === "Mars") {
        planetResult.textContent = `Planet Fact: Mars is often called as the "Red Planet" due to it's color. `
      } else if (planet === "Jupitor") {
        planetResult.textContent = `Planet Fact: Jupitor is the largest planet in our solor system.`
      }
    })

  </script>
</body>

</html>
