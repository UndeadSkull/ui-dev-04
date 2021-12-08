// Sample Charts Generator
const charts = (xValues, yValues) => {

    //Total Clicks
    Chart.defaults.font.size = 18;
    Chart.defaults.font.weight = 500;

    new Chart("totalClicks", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: '#FFB200',
                data: yValues,
                borderRadius: 50,
                // barThickness: 15
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    titleFont: { size: 0 },
                    displayColors: false
                }
            },
            scales: {
                x: {
                    ticks: { font: { size: 9 } },
                    grid: { display: false }
                },
                y: {
                    ticks: { font: { size: 10 } },
                    grid: {
                        display: true,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true,
                    },
                },
            }
        }
    });

    //Top Devices

    new Chart("devices", {
        type: 'doughnut',
        data: {
            labels: [
                'Mobile',
                'Desktop',
                'Tablet'
            ],
            datasets: [{
                label: 'Devices Data',
                data: [300, 150, 100],
                backgroundColor: [
                    '#00B22D',
                    '#FFB200',
                    '#FB135A'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            // maintainAspectRatio: true,
            cutout: 100,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { usePointStyle: true },
                }
            }
        }
    })

    //Top Locations

    google.charts.load('current', { 'packages': ['geochart'] });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Clicks'],
            ['Germany', 20],
            ['United States', 35],
            ['Brazil', 43],
            ['Canada', 50],
            ['France', 61],
            ['Russia', 7],
            ['India', 50],
            ['Saudi Arabia', 60],
            ['Qatar', 40],
            ['China', 25]
        ]);
        var options = {};
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    }

    //Top browsers

    new Chart("browsers", {
        type: 'doughnut',
        data: {
            labels: [
                'Chrome',
                'Firefox',
                'Safari'
            ],
            datasets: [{
                label: 'Browsers Data',
                data: [300, 150, 100],
                backgroundColor: [
                    '#00B22D',
                    '#FFB200',
                    '#FB135A'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            cutout: 105,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { usePointStyle: true },
                }
            }
        }
    })
    //Top platforms

    new Chart("platforms", {
        type: 'doughnut',
        data: {
            labels: [
                'Android',
                'Microsoft',
                'IOS',
                'Linux'
            ],
            datasets: [{
                label: 'Platforms Data',
                data: [200, 150, 200, 50],
                backgroundColor: [
                    '#00B22D',
                    '#FFB200',
                    '#FB135A',
                    '#7003F5'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            cutout: 100,
            responsive: true,
            plugins: {
                legendItem: { borderRadius: 5 },
                legend: {
                    position: 'left',
                    labels: { usePointStyle: true },
                }
            }
        }
    })
}