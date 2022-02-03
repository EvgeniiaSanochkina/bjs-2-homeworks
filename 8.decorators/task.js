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
    let flag = false;

    function wrapper(...args) {

        clearInterval(intervalId); //"Вам нужно сначала сбросить текущий таймаут"

        intervalId = setTimeout(func, ms); //"затем создать новый (чтобы спустя время функция вызывалась) "

        if (!flag) { // "и только после этих действий проверять флаг: если он опущен, то синхронно вызывать полученную функцию."
            flag = true;
            func.apply(this, ...args);
        }
    }
    return wrapper;
}






function debounceDecorator2(func, ms) {
    let intervalId;
    wrapper.count = 0;

    function wrapper(...args) {

        clearInterval(intervalId);
        intervalId = setTimeout(func, ms);
        if (!flag) {
            flag = true;
            func.apply(this, ...args);
        }
        wrapper.count++;
    }
    return wrapper;

}