function cachingDecoratorNew(func) {

    let cache = [];

    function wrapper(...args) {
        const hash = args.join(",");

        let idx = cache.findIndex((item) => item.hash === hash);

        if (idx !== -1) {
            console.log("Из кэша: " + cache[idx].value);
            return "Из кэша: " + cache[idx].value;
        }
        let value = func(...args);
        cache.push({ hash, value });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;


    }
    return wrapper;

}


function debounceDecoratorNew(func, ms) {
    let intervalId;
    let flag;

    return function(...args) {

        clearInterval(intervalId);
        intervalId = setTimeout(() => {
            func(...args);
        }, ms)

        if (!flag) {
            flag = true;
            func(...args);
        }
    }
}





function debounceDecorator2(func, ms) {
    let count = 0;
    let history = [];
    let intervalId;

    return function(...args) {

        clearInterval(intervalId);
        intervalId = setTimeout(() => {
            func(...args);
        }, ms)

        if (!flag) {
            flag = true;
            func(...args);
            history.push(count++)
        }
    }
}