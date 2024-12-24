function appendValue(value) {
    // @ts-ignore
    document.getElementById('result').value += value;
}

function clearResult() {
    // @ts-ignore
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        // @ts-ignore
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
        alert('Invalid Expression');
    }
}
