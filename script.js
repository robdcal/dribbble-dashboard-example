const ctx = document.getElementById('main__box__chart__area').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['4 Mon', '5 Tue', '6 Wed', '3 Sun', '7 Thu', '8 Fri', '9 Sat'],
        datasets: [{
            data: [2250, 1950, 5100, 3400, 5000, 3600, 4500],
            borderWidth: 1,
            fill: false,
            borderColor: '#8ac389',
            backgroundColor: '#8ac389',
        }, {
            data: [1300, 3600, 3000, 5600, 2700, 2500, 1700],
            borderWidth: 1,
            fill: false,
            borderColor: '#fe5e37',
            backgroundColor: '#fe5e37',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, ticks) {
                        return value / 1000 + "K";
                    },
                    autoSkip: true,
                    maxTicksLimit: 4
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        family: "'Inter', sans-serif"
                    }
                }
            },
            tooltip: {
                enabled: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

document.fonts.onloadingdone = () => {
    myChart.update();
};