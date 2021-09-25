var app = angular.module('myApp.service', []);

//define a service named myService
app.service('weatherService', function ($http) {
    
    this.getWeather = getWeather;

    function getWeather (city) {
        return $http({
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
            params: {
                q: city
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': '7f8b193aa8mshcfa42f561e4f3f9p1735cfjsnf3d9f38b8a51'
            },
        })}
});