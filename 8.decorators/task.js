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
    let flag = false;
    let intervalId;
    return function wrapper(...args) {
        let result = flag ? undefined : func(); // if (flag == true) {undefined} else {func()}
        flag = true;
        clearInterval(intervalId);
        intervalId = setTimeout(() => {
            flag = false;
        }, ms)
        return result;
    }
}

function debounceDecorator2(func, ms) {
    let flag = false;
    let intervalId;
    let count = 0;
    return function wrapper(...args) {
        let result = flag ? undefined : func();
        count++;
        flag = true;
        clearInterval(intervalId);
        intervalId = setTimeout(() => {
            flag = false;
            count++;
        }, ms)
        return result;
    }

}