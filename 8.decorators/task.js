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

    function wrapper(...args) {
        const fnCall = () => { func.apply(this, ...args) };
        clearInterval(intervalId);
        intervalId = setTimeout(fnCall, ms)
    }
    return wrapper;
}






function debounceDecorator2(func, ms) {
    let intervalId;
    wrapper.count = 0;

    function wrapper(...args) {
        const fnCall = () => { func.apply(this, ...args) };
        wrapper.count++;
        clearInterval(intervalId);
        intervalId = setTimeout(fnCall, ms)
    }
    return wrapper;

}