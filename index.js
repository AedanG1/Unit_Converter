/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const displayElements = document.querySelectorAll('.display')

const metricToImperialRatios = {
    meter: 3.281,
    liter: 0.264,
    kilometer: 0.621
}

function convert(num, ratio, metricUnit, imperialUnit) {
    const imperialConversion = (num * ratio).toFixed(3)
    const metricConversion = (num / ratio).toFixed(3)
    return `${num} ${metricUnit} = ${imperialConversion} ${imperialUnit} | ${num} ${imperialUnit} = ${metricConversion} ${metricUnit}`
}

document.querySelector('button').addEventListener('click', () => {
    const numberInput = Number(document.getElementById('number-input').value)
    for (let i = 0; i < displayElements.length; i++) {
        const ratio = metricToImperialRatios[displayElements[i].dataset.metric]
        const metricUnit = displayElements[i].dataset.metric
        const imperialUnit = displayElements[i].dataset.imperial
        displayElements[i].innerHTML = convert(numberInput, ratio, metricUnit, imperialUnit)
    }
})