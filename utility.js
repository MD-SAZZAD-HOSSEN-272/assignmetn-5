
function getConvertedInnerTextById (id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue
}

function getById (id) {
    const value = document.getElementById(id);
    return value;
}