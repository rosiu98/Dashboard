var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: 'hours',
            data: [0, 1.5, 2.5, 1, 4, 3, 2],
            borderColor: 'rgb(0, 0, 0)',
            pointBackgroundColor: 'rgba(0,0,0)',
            pointBorderColor: 'rgba(0,0,0)',
            pointBorderWidth: 5,
            fill: false,
            drawBorder: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#000',
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#000',
                    padding: 13,
                    stepSize: 1,
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                },
                gridLines: {
                    drawBorder: false,
                    color: '#F5F5F7'
                    // drawOnChartArea: false

                }
            }]


        },


        parsing: false,
        responsive: true,
        legend: {
            position: 'top',
            align: 'end'
        },
        plugins: {
            datalabels: {
                color: '#000',
                align: 'top',
                offset: 20,
                backgroundColor: '#F5F5F7',
                borderRadius: 5,
                padding: {
                    left: 13,
                    right: 13
                },
                font: {
                    weight: 'bold',
                    size: 14,
                    // family: 'Baloo Bhai 2',
                },
                formatter: (value) => {
                    return value + 'h';
                }

            }
        }
    }
})

