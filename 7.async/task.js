class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, func, id) {
        if (id === undefined) {
            throw new Error("id неизвестен");

        }
        if (this.alarmCollection.some(elem => elem.id === id)) {
            console.error("такой id уже есть");
        } else {
            this.alarmCollection.push({
                time: time,
                func: func,
                id: id
            });
        }

    }
    removeClock(id) {
        let initialLength = this.alarmCollection.length;
        let removed = this.alarmCollection.find(item => item.id === id);
        this.alarmCollection.splice(removed, 1);
        let newLength = this.alarmCollection.length;
        return (initialLength > newLength);
        //let newArr = this.alarmCollection.filter(item => this.alarmCollection.id == 1);
        //if (initialLength != newArr.length) {
        //  this.alarmCollection = newArr;
        // }
    }
    getCurrentFormattedTime() {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        hours = hours < 10 ? ("0" + hours) : hours;
        minutes = minutes < 10 ? ("0" + minutes) : minutes;
        return (hours + ":" + minutes);
    }

    start() {
        let checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                return alarm.func();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 3000);
        }

    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item, idx) => console.log("Будильник № " + this.alarmCollection[idx].id + " установлен на " + this.alarmCollection[idx].time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let newAlarm = new AlarmClock;
    newAlarm.addClock("00:00", () => console.log("Вставать"), 1);
    newAlarm.addClock("00:01", () => {
        console.log("Срочно вставать!");
        newAlarm.removeClock(2)
    }, 2);
    newAlarm.addClock("00:02", () => {
        console.log("Очень срочно вставать!");
        newAlarm.stop();
        newAlarm.clearAlarms();
        newAlarm.printAlarms();
    }, 3);

    newAlarm.printAlarms();
    newAlarm.start();
}