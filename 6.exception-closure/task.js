function parseCount(x, base) {
    const parsed = Number.parseInt(x, base);
    if (Number.isNaN(parsed)) {
        let message = new Error("Невалидное значение");
        throw message;
    }
    return parsed;
}

function validateCount(x, base) {
    try {
        parseCount(x, base);
        return parseCount(x, base);
    } catch (e) {
        let message = new Error("Невалидное значение");
        return message;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            let message = new Error("Треугольник с такими сторонами не существует");
            throw message;
        }
    }
    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea() {
        let perimeter = this.a + this.b + this.c;
        let s = perimeter / 2;
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        area = Number(area.toFixed(3));
        return area;

    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (e) {
        return {
            getArea() {
                let message = "Ошибка! Треугольник не существует";
                return message;
            },
            getPerimeter() {
                let message = "Ошибка! Треугольник не существует";
                return message;
            }

        }
    }
}