const first = document.querySelector('#numbe1')
const second = document.querySelector('#numbe2')

const result = document.querySelector('.result')

if (window.Worker) {
    const myWorker = new Worker('worker.js')

    first.onchange = () => {
        myWorker.postMessage([first.nodeValue, second.value])
        console.log('message1 posted to worker')
    }

    second.onchange = () => {
        myWorker.postMessage([first.value, second.value])
        console.log('message1 posted to worker')
    }
    
    myWorker.onmessage = (e) => {
        result.textContent = e.data;
        console.log('message received from worker')
    }
} else {
    console.log('your browser doesn\'t support web workers.')
}