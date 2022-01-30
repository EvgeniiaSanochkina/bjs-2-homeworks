function cachingDecoratorNew(func) {

    let cache = [];

    function wrapper(...args) {
        const hash = args.join(",");

        let idx = cache.findIndex((item) => item.hash === hash);

        if (idx !== -1) {
            console.log("Из кэша: " + cache[idx].value);
            return "Из кэша: " + cache[idx].value;
        } else {
            let value = func(...args);
            cache.push({ hash, value });
            if (cache.length > 5) {
                cache.shift();
            }
            console.log("Вычисляем: " + value);
            return "Вычисляем: " + value;
        }

    }
    return wrapper;

}


function debounceDecoratorNew(func) {
    // Ваш код
}

function debounceDecorator2(func) {
    // Ваш код
}