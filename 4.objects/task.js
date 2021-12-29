function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    console.log("name: " + name + "; gender: " + gender + "; age: " + age)
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
    console.log("subject: " + subjectName)
}

Student.prototype.addMark = function(mark) {

    if (this.marks === undefined) {
        this.marks = [mark];

    } else {
        this.marks.push(mark);
    }
    console.log("marks: " + this.marks)
}

Student.prototype.addMarks = function(...marks) {
    for (let mark of marks) {
        this.addMark(mark);
    }
}

Student.prototype.getAverage = function(marks) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += Number(this.marks[i]);
    }
    avg = sum / this.marks.length;
    return avg;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}