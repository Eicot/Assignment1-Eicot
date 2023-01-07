window.addEventListener("DOMContentLoaded", async function() {
  // the loadData function is from data.js
  const data = await loadData('data.js');
  const series1 = transformData1(data);
  const series2 = transformData2(data);
  const series3 = transformData3(data)

  function drawchart1() {
    const options = {
      chart: {
        type: 'line',
        height: "100%"
      },
      series: [

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


    // display the loaded data as a series in the chart
    chart.updateSeries([{
      'name': 'Population',
      'data': series1
    },
    {
      'name': 'Female Population',
      'data': series2
    },
    {
      'name': 'Male Population',
      'data': series3
    },

    ])

  }
  drawchart1();

  function drawchart2() {
    const options = {
      chart: {
        type: 'line',
        height: "100%"
      },
      series: [

      ],

      // what to show there is no data
      noData: {
        "text": "Loading..."
      }

    }

    // create the chart
    const chart = new ApexCharts(document.querySelector('#chart2'), options);

    // render the chart
    chart.render()


    // display the loaded data as a series in the chart
    chart.updateSeries([{
      'name': 'Population',
      'data': series1
    },
    {
      'name': 'Female Population',
      'data': series2
    },
    {
      'name': 'Male Population',
      'data': series3
    },

    ])

  }
  drawchart2();

  function drawpie1() {
    const options = {
      chart: {
        type: 'pie',
        height: "280"
      },
      series: [100
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
})




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