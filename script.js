

function result() {
    event.preventDefault()
    let valueRadius = document.getElementById('inputRadius').value
    let valueHeight = document.getElementById('inputHeight').value
    let calc = document.getElementById('calculator').value

    if (calc === 'inputcm') {
        const volume = Math.PI * Math.pow(valueRadius, 2) * valueHeight;
        document.getElementById('mes').innerHTML = `Valumn: ${volume.toFixed(2)} cm³`

    } else {
        const radiusInCm = valueRadius / 10
        const heightInCm = valueHeight / 10

        const volumeMm = Math.PI * Math.pow(radiusInCm, 2) * heightInCm;
        document.getElementById('mes').innerHTML = `Valumn: ${volumeMm.toFixed(2)} cm³`
    }

}