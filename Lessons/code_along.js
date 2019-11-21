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

const tV = {
    type: 'LED',
    resolution: '1080p',
    power: 200,
    model: 'samsung',
    currentStatOnOff: 'Off',
    currentVol: 10,
    currentChannel: 0,
    togglePower: function(boolX){ // Function(Method) to turn the tv on or off
        if(boolX){
            tV.currentStatOnOff = 'On'
            tV.power = 200
            return 'Turned On'
        } else {
            tV.currentStatOnOff = 'Off'
            tV.power = 0
            return 'Turned Off'
        }
    },
    toggleChannel: function(channel){
        tV.currentChannel = channel
        return `You are currently browsing channel number ${channel}`
    },
    toggleVol: function(updown, volPer){
        if (updown.toLowerCase() == 'increase') {
            tV.currentVol += volPer
            return `volume increased by ${volPer} percent.`
        } else {
            tV.currentVol -= volPer
            return `volume decreased by ${volPer} percent.`
        }
    }
}
// console.log(tV)
// console.log(tV.togglePower('on'))
// console.log(tV)
console.log(tV.toggleVol('increase', 20))
console.log(tV)
console.log(tV.toggleVol('',10))
console.log(tV)

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