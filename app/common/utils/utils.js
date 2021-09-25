var app = angular.module('myApp.utils', []);

app.factory('utils', function ($q, weatherService) {
    return {
        getFormattedWeatherInfo : getFormattedWeatherInfo
    }

    function getFormattedWeatherInfo (city) {
        var defered = $q.defer();
        var promise = defered.promise;
  
        weatherService.getWeather(city).then(function(response) {
            let weatherInfo = _getFormattedInfo(response.data);
            defered.resolve(weatherInfo);
        }).catch(function errorCallback(error) {
          defered.reject(error);
        });
        return promise;
    }


    function _getFormattedInfo (data) {
        var weatherData = [];
        angular.forEach(data.list, function (info) {
          weatherData.push({
            temperature : _roundValue((info.main.temp - 273.15), 1),
            wind : info.wind.speed,
            weather : info.weather[0],
            time : info.dt_txt.substr(11,5)})
        }, weatherData);

        return {
          city : data.city.name,
          forecast : weatherData
        }
    }

    function _roundValue (value, decimals) {
      var auxValue = decimals >= 0 ? Math.pow(10, decimals) : 1;
      return  Math.round(value * auxValue) / auxValue;
    }
})