function captitalize(str: string) {
    return str.replace(/./, function (m) { return m[0].toUpperCase() })
}

function parseQueryString() {
    const arr = window.location.search.replace(/^\?/, '').split('&');
    const result = arr.reduce(function (prev, cur) {
        const [key, val] = cur.split('=');
        prev[key] = val;
        return prev;
    }, {})
    return result;
}

function parseCookie() {
    return JSON.parse("{\"" + document.cookie.replace(/;\s+/gim, "\",\"").replace(/=/gim, "\":\"") + "\"}")
}

function toThousands(val: number | string): string {
    const str = parseFloat(`${val}`).toFixed(2);
    const reg = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
    const result = str.replace(reg, "$1,");
    return result;
}

function removeArrayItem(arr: any[], ele: any) {
    var index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function padStart(str: number | string, len: number, char: string) {
    if (typeof str === 'number') str = String(str);
    return (char.repeat(len - 1) + str).substr(-len);
}

function formatDate(date: number | string | Date, format: string) {
    if (!date) return '';
    date = new Date(date);
    let dateStr = format
        .replace('yyyy', `${date.getFullYear()}`)
        .replace('MM', `${padStart(date.getMonth() + 1, 2, '0')}`)
        .replace('dd', `${padStart(date.getDate() + 1, 2, '0')}`)
        .replace('hh', `${padStart(date.getHours() + 1, 2, '0')}`)
        .replace('mm', `${padStart(date.getMinutes() + 1, 2, '0')}`)
        .replace('ss', `${padStart(date.getMonth() + 1, 2, '0')}`)
        .replace('M', `${date.getMonth() + 1}`)
        .replace('d', `${date.getDate()}`)
        .replace('h', `${date.getHours()}`)
        .replace('m', `${date.getMinutes()}`)
        .replace('s', `${date.getSeconds()}`);
    return dateStr;
}