function store(key, value) {
    var hasLocalStore = !!localStorage;
    var fn = hasLocalStore
        ? useStorage
        : useCookies;
    if (value === undefined)
        return fn(key);
    fn(key, value);
}
function useStorage(key, value) {
    if (!value)
        return JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(value));
}
function useCookies(key, value) {
    if (!value) {
        var cookie = "; " + document.cookie;
        var parts = cookie.split("; " + key + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
        throw new Error("Cookie '" + key + "' not found");
    }
    var oneYear = new Date();
    oneYear.setTime(oneYear.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = key + "=" + value + ";expires=" + oneYear.toUTCString() + "; path=/ ";
}
