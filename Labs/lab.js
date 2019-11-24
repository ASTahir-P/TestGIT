
//lab1
const instructor = {
    name: 'Ahmed',
    email: 'Ahmed@GA.com',
    address: 'home',
    runs: [{
            date: '2019-05-25 15:00',
            distance: 1200,
            timeTaken: 600
        },
        {
            date: '2019-05-25 15:00',
            distance: 1400,
            timeTaken: 800
        }
    ],
    totalDistance: function () {
        let TotalRun = 0
        for (let i = 0; i < this.runs.length; i++) {
            TotalRun += this.runs[i].distance
        }
        return TotalRun
    },
    longestRunDistance: function () {
        let longRun = Math.max.apply(Math, this.runs.map(function (obj) {
            return obj.distance;
        }))
        return longRun
    },
    averageSpeed: function () {
        let TotalSpeed = 0;
        let SpeedCount = 0
        for (let i = 0; i < this.runs.length; i++) {
            if (this.runs[i].timeTaken !== null) {
                TotalSpeed += this.runs[i].timeTaken
                    ++SpeedCount
            }
        }
        return TotalSpeed / SpeedCount
    }
}

console.log(instructor.totalDistance())
console.log(instructor.longestRunDistance())
console.log(instructor.averageSpeed())


//lab2
function Meals(Arr) {
    this.title = Arr[0]; //using the array to assign values to our Meals constructor
    this.date = new Date(Arr[1]); //format '2016-06-25'
    this.description = Arr[2];
    this.calories = Arr[3]
}

function User(name, bornOn, calorieTarget, meals) {
    this.name = name
    this.bornOn = bornOn
    this.calorieTarget = calorieTarget
    this.meals = new Meals(meals.split(',')) //creating array of input and pushing the input to our meals constructor with the 'new' keyword
    this.caloriesEatenOn = function () {
            let totalCal = 0
            for (let i = 0; i < Object.keys(this.meals).length; i++) {
                totalCal += this.runs[i].distance
            }
            return totalCal
    }
    this.avgDailyCalories = function() {

    }
    this.onTrack = function () {
        
}

console.log(new User('ahmed', 2000, 100, 'apple,2019-11-21,healthy,100'))
