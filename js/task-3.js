function getElementWidth(content, padding, border) {
    const contentSizing = Number.parseFloat(content);
    const paddingSizing = Number.parseFloat(padding);
    const borderSizing = Number.parseFloat(border);

    return (contentSizing + (paddingSizing * 2) + (borderSizing *2));
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
console.log(getElementWidth("0px", "0px", "0px"));