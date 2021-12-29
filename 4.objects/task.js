function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    console.log("name: " + name + "; gender: " + gender + "; age: " + age)
}

let student1 = new Student("Vova", "male", "18")


Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
    console.log("subject: " + subjectName)
}

student1.setSubject("Math");

Student.prototype.addMark = function(mark) {

    if (this.marks === undefined) {
        this.marks = [mark];

    } else {
        this.marks = this.marks.push(mark);
    }
    console.log("marks: " + this.marks)
}

student1.addMark("10");
student1.addMark("3")

Student.prototype.addMarks = function(...mark) {
    console.log("marks: " + mark)
}

student1.addMarks("2", "3", "5")