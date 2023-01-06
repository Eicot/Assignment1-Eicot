const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
    
    ],
   
    // what to show there is no data
    noData: {
        "text": "Loading..."
    }
    
}
 
// create the chart
const chart = new ApexCharts(document.querySelector('#chart1'), options);
 
// render the chart
chart.render()

// when all the content are ready
// the DOMContentLoaded for the window happens when
// the DOM elements have been created
// window.addEventListener("DOMContentLoaded", async function(){
//     // the loadData function is from data.js
//     const data = await loadData('data.js');
//     const series1 = transformData(data);
//     const seriesB = transformData1(data);

//     // display the loaded data as a series in the chart
//     chart.updateSeries([{
//         'name':'Population',
//         'data': series1
//     },
//     {
//         'name':'Growth',
//         'data': seriesB
//     }])
// })


// function drawchart2() {
//     const options =  {
//     chart: {
//         type: 'line',
//         height:"100%"
//     },
//     series:[
//         // NO DATA
//     ],
//     // what to show there is no data
//     noData: {
//         "text": "Loading..."
//     }
   
    
// }

// const chart = new ApexCharts(document.querySelector('#chart2'), options);

// // render the chart
// chart.render()
// }
// drawchart2();

// function drawpie1() {
//     const options =  {
//         chart: {
//             type: 'pie',
//             height:"280"
//         },
//         series:[ 100
//             // NO DATA
//         ],
//         // what to show there is no data
//         noData: {
//             "text": "Loading..."
//         }
       
        
//     }

// const chart = new ApexCharts(document.querySelector('#pie1'), options);
// // render the chart
// chart.render()
// }
// drawpie1();