// code along 1

let word = 'code is too good day to code'
let wordAr = word.split(' ')
let wCount = {}
wordAr.forEach(function (value, index) {
    wCount[value] = (wCount[value] || 0) + 1
    //iterates through an array 
    //and checks the value. if the value is not set, it 
    //gives 0 value to it and adds 1. if it has been set 
    //in previous iteration it adds 1 to it as an increment.
})
console.log("TCL: wordAr", wordAr)
console.log("TCL: wCount", wCount)

// code along 2
//witout constructor

const teleV = {
    type: 'LED',
    resolution: '720p',
    power: 250,
    togglePower: function (toggle) {
        if (toggle.toLowerCase() == 'on') {
            return 'Turned On!'
        } else {
            return 'Currently Turned Off.'
        }
    },
    incVol: function () {
        return `Volume Increased`
    },
    decVol: function () {
        return `Volume Decreased`
    }
}

//using this 

//constructor

function Tv(Type, resolution, power) {
    this.Type = Type
    this.resolution = resolution
    this.power = power
    this.togglePower = function (toggle) {
        if (toggle.toLowerCase() == 'on') {
            return 'Turned On!'
        } else {
            return 'Currently Turned Off.'
        }
    }
    this.decVol = function (percent) {
        return `Volume Increased by ${percent} %`
    }
    this.incVol = function (percent) {
        return `Volume Decreased by ${percent} %`
    }
}

let samsung = new Tv('LCD', '1080p', 200)
samsung.togglePower('ON')
console.log("TCL:  samsung.togglePower('off')", samsung.togglePower('off'))
console.log("TCL: samsung", samsung)

//last code along + lab ex

const instructor = {
    name: 'Ahmed',
    email: 'Ahmed@GA.com',
    address: 'home',
    runs: [{
            date: '2017-05-25 15:00',
            distance: 1200,
            timeTaken: 600
        },
        {
            date: '2017-05-25 15:00',
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
        let longRun = Math.max.apply(Math, this.runs.map(function(obj) { 
            return obj.distance; }))
        return longRun
    },
    averageSpeed: function () {
        let TotalSpeed= 0; let SpeedCount = 0
        for (let i = 0; i < this.runs.length; i++) {
            if (this.runs[i].timeTaken !== null) {
                TotalSpeed += this.runs[i].timeTaken
                ++SpeedCount
            }
        }
        return TotalSpeed/SpeedCount
    }
}

console.log(instructor.totalDistance())
console.log(instructor.longestRunDistance())
console.log(instructor.averageSpeed())