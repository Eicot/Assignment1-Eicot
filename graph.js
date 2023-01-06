function drawchart1() {
    const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        // NO DATA
    ],
    // what to show there is no data
    noData: {
        "text": "Loading..."
    }
   
    
}

const chart = new ApexCharts(document.querySelector('#chart1'), options);

// render the chart
chart.render()
}
drawchart1();

function drawchart2() {
    const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        // NO DATA
    ],
    // what to show there is no data
    noData: {
        "text": "Loading..."
    }
   
    
}

const chart = new ApexCharts(document.querySelector('#chart2'), options);

// render the chart
chart.render()
}
drawchart2();

function drawpie1() {
    const options =  {
        chart: {
            type: 'pie',
            height:"280"
        },
        series:[ 100
            // NO DATA
        ],
        // what to show there is no data
        noData: {
            "text": "Loading..."
        }
       
        
    }

const chart = new ApexCharts(document.querySelector('#pie1'), options);
// render the chart
chart.render()
}
drawpie1();