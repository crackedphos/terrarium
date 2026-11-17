// I enable drag functionality for all 14 plants.
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function createCounter() {
    let count = 0; // this as a private variable.
    
    function increment() {
        count++; // use the inner function to remember the outer variable.
        return count;
    }
    
    return increment; // I return the inner function.
}

const myCounter = createCounter();
console.log(myCounter()); // I expect this to log 1.
console.log(myCounter()); // expect this to log 2.

function dragElement(terrariumElement) {
    if (!terrariumElement) {
        // stop here if the plant element does not exist.
        return;
    }

    // I initialize the position tracking variables.
    let pos1 = 0,  // store the previous pointer X position here.
        pos2 = 0,  // store the previous pointer Y position here.
        pos3 = 0,  // store the current pointer X position here.
        pos4 = 0;  // store the current pointer Y position here.

    function pointerDrag(e) {
        e.preventDefault();

        // I capture the initial pointer position.
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // I calculate the distance moved since the last event.
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        // I update the current pointer position.
        pos3 = e.clientX;
        pos4 = e.clientY;

        // I apply the movement to this plant.
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

    // I set up the initial drag event listener.
    terrariumElement.onpointerdown = pointerDrag;
}
