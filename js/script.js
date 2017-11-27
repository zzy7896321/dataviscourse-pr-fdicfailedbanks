
barChart = new BarChart();

d3.json("data/us-states.json", function (states) {
    bmap = new Map(states);
    d3.csv("data/joined_table.csv", function (error, banks) {
        for (let bank of banks) {
            bank.lat = +bank.lat;
            bank.lng = +bank.lng;
        }

        lineChart = new LineChart(barChart, bmap, banks);
        lineChart.update('bank_amounts');
    });
});

function changeData() {

    let choosedata = document.getElementById("dataset").value;
    lineChart.update(choosedata);
}



