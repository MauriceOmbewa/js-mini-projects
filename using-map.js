const citiesOnly = (arr, property = 'city') => {
    return arr.map(obj => obj[property]);
}

// const upperCasingStates = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].length === 0){
//             arr[i] = arr[i]
//         }

//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr
// }
function upperCasingStates(arr) {
    return arr.map(str => {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    });
}

function fahrenheitToCelsius(temperatures) {
    return temperatures.map(temp => {
      let fahrenheit = parseFloat(temp);
      let celsius = (fahrenheit - 32) * 5 / 9;
    //   return celsius.toFixed(2) + '°C';
      return Math.floor(celsius) + '°C';
    });
}

function trimTemp(arr) {
    return arr.map(obj => {
        return {
            ...obj,
            temperature: obj.temperature.replace(/\s+/g, '')
        };
    });
}

function fahrenheitToCelsius2(fahrenheit) {
    return ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(1);
  }
  
  function capitalizeFirstLetter2(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  function tempForecasts(forecasts) {
    return forecasts.map(({ city, temperature, state }) => {
      // Trim spaces from the temperature and convert to Celsius
      const tempInCelsius = fahrenheitToCelsius2(temperature.trim().replace('°F', ''));
      
      // Capitalize city and state
      const capitalizedCity = capitalizeFirstLetter2(city.toLowerCase());
      const capitalizedState = capitalizeFirstLetter2(state.toLowerCase());
  
      // Format the result
      return `${Math.floor(tempInCelsius)}°Celsius in ${capitalizedCity}, ${capitalizedState}`;
    });
  }

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))
