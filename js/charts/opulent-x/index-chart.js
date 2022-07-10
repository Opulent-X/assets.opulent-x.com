

new Chart("top-retirement-token-chart", {
type: 'line',
data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "Opulent-X Token",
        fill: false,
        backgroundColor: '#303030',
        borderColor: '#303030',
        data: [0, 11, 22, 35, 40, 50, 65],
        yAxisID: "y-axis-1"
        
    },
    
    {
      label: "Opulent-X Rewards",
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [0, 9, 18, 30, 40, 50, 40],
      yAxisID: "y-axis-2"
  },
    
    {
        label: "Opulent-X Utility",
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
        data: [0, 10, 20, 30, 40, 50, 60],
        yAxisID: "y-axis-3"
    
        
}]
},
options: {
    responsive: true,
    hoverMode: 'index',
    stacked: false,
    title:{
        display: true,
        text:'Our Retirement Tokens'
    },
    scales: {
        yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
        }, {
            type: "linear", 
            display: true,
            position: "right",
            id: "y-axis-2",
        }, {
            type: "linear", 
            id: "y-axis-3",
            display: false,
            position: "right",
            gridLines: {
                drawOnChartArea: false,
            },
        }],
    }
}
});