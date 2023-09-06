document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearform;

function tempConvert() {
    let cel = document.getElementById("cel").value;
    let far = document.getElementById("far").value;

    if(far != '') {
        cel = (parseFloat(far) - 32) / 1.8;
    }
    else {
        far = (parseFloat(cel) * 1.8) + 32;
    }

    document.getElementById('far').value = parseFloat(far).toFixed(1);
    document.getElementById('cel').value = parseFloat(cel).toFixed(1);
}

function clearform() {
    document.getElementById('far').value = ' ';
    document.getElementById('cel').value = ' ';
}
