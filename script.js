function graph(chartid, html, js, css){
    var ctx = document.getElementById(chartid);

    var data = {
        labels: [''],
        datasets: [{
            label: 'HTML',
            data: [html],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }, {
            label: 'JS',
            data: [js],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }, {
            label: 'CSS',
            data: [css],
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
        }]
    };

    var options = {
        indexAxis: 'y', 
        scales: {
            x: { stacked: true },
            y: { stacked: true } 
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    };

    var myChart = new Chart(ctx, {
        type: 'bar', 
        data: data,
        options: options
    });
}
