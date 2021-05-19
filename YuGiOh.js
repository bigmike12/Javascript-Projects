const checkYuGiOh = (n) => {
    const items = Array.from({ length: n }, (_, index) => index + 1);
    for (let i = 1; i < items.length; i++) {
        if (isNaN(n)) {
            return `invalid parameter: ${n}`
        } else if (items[i] % 2 === 0 && items[i] % 3 === 0 && items[i] % 5 === 0) {
            items[i] = 'yu-gi-oh';
        } else if (items[i] % 2 === 0 && items[i] % 3 === 0) {
            items[i] = 'yu-gi';
        } else if (items[i] % 2 === 0 && items[i] % 5 === 0) {
            items[i] = 'yu-oh';
        } else if (items[i] % 3 === 0 && items[i] % 5 === 0) {
            items[i] = 'gi-oh';
        }else if (items[i] % 2 === 0) {
            items[i] = 'yu'
        } else if (items[i] % 3 === 0) {
            items[i] = 'gi'
        } else if (items[i] % 5 === 0) {
            items[i] = 'oh'
        } 
    }
    return items
}

console.log(checkYuGiOh(30))

