class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        }
        if (number > 100) {
            this._state = 100;
        }
        this._state = number;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name);
        this.author = author;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name);
        this.type = "detective";
    }
}

class Library extends PrintEditionItem {
    constructor(name, books) {
        super(name);
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
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
        this.marks.push(subject)
        if (this.marks === undefined) {
            this.marks = [mark];

        } else {
            this.marks.push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.subject = true) {
            let sum = 0;
            let avg = 0;
            for (let i = 0; i < this.marks.length; i++) {
                sum += Number(this.marks[i]);
            }
            avg = sum / this.marks.length;
            console.log("Средний балл по предмету " + subject + " " + avg)
        } else {
            console.log("Несуществующий предмет")
        }
    }

}