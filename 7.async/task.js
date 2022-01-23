class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = timerId;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            let message = new Error("ошибочка");
            throw message;
        }
        for (id of this.alarmCollection) {
            if (this.alarmCollection.includes(id, 0) === true) {
                console.error();
            }
        }
        this.alarmCollection.push({
            [time]: time,
            [callback]: callback,
            [id]: id
        });
    }
    removeClock(id) {
        let initialLength = this.alarmCollection.length;
        let newArr = this.alarmCollection.filter(item => this.alarmCollection.id == 1);
        if (initialLength != newArr.length) {
            this.alarmCollection = newArr;
        }
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
        checkClock()



    }
}