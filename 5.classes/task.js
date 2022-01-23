class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; // уже знаем эти данные 
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;

    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else
        if (number > 100) {
            this._state = 100;
        } else
            this._state = number;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount); // вызвать конструктор родака
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }

    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name === bookName) {
                return this.books.splice(book, 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark, subject) {
        if (mark >= 1 && 5 >= mark) {
            this.marks.push({
                [subject]: mark
            });
        }
    }

    getAverageBySubject(subject) {
        let sum = 0;
        let avg = 0;
        let count = 0;
        for (let mark of this.marks) {
            if (mark[subject] !== undefined) {
                sum += mark[subject];
                count++;
            }
        }
        if (count > 0) {
            avg = sum / count;
        }
        return avg;
    }

    getAverage() {
        let sum = 0;
        let avg = 0;

        for (let mark of this.marks) {
            sum += Object.values(mark)[0];

        }
        avg = sum / this.marks.length;
        return avg;
    }
}