const unused = "TS doesn't know that this isn't needed in another file, so doesn't error.";

const button = document.querySelector('button');

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    console.log('Clicked', message);
}

// A comment
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'A message'));
}
