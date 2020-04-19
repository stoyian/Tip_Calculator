document.getElementById('container').onchange = () =>{
    var bill = Number(document.getElementById('bill').value);
    var tipPercent = document.getElementById('Tip').value;
    var split = document.getElementById('people').value;
    var tipValue = bill * (tipPercent/100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;
    document.getElementById('TipOutput').innerHTML = tipPercent + "%";
    //document.getElementById('people').innerHTML = split;
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}