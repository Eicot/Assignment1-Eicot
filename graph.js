window.addEventListener("DOMContentLoaded", async function() {
  // the loadData function is from data.js
  const data = await getData("data.js");
  const series1 = transformData1(data);
  const series2 = transformData2(data);
  const series3 = transformData3(data);
  const series4 = transformData4(data);
  const series5 = transformData5(data);
  const series6 = transformData6(data);
  const series7 = transformData7(data);
  const series8 = transformData8(data);
  const series9 = transformData9(data);
  const series10 = transformData10(data);
  // const series11 = transformData11(data);

  function drawchart1() {
    const options = {
      chart: {
        foreColor: "#ccc",
        type: "line",
        height: "330"
      },
      series: [

      ],
      title: {
        text: "Population (1960 - 2021)"
      },

      //x-axis dats are congested, adjust interval to show clearer
      xaxis: {
        type: "category",
        tickAmount: 5
      },

      //Data are in million, in the y-axis divide by 1e3 to limit the number of digits
      yaxis: {
        labels: {
          formatter: function(val) { return (val / 1e3).toFixed(0); }
        },
        "title": {
          "text": "(in thousands)",
          "align": "left",
          style: {
            fontSize: "10px",
            fontWeight: "normal",
            color: "white"
          }
        }

      },

      // what to show there is no data
      noData: {
        "text": "Please select below categories"
      }

    }

    // create the chart
    const chart = new ApexCharts(document.querySelector("#chart1"), options);

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
    {
      'name': 'Population Ages 0-14',
      'data': series4
    },
    {
      'name': 'Population Ages 15-64',
      'data': series5
    },
    {
      'name': 'Population Ages 65 and over',
      'data': series6
    }

    ])

  }
  drawchart1();

  function drawchart2() {
    const options = {
      chart: {
        foreColor: "#ccc",
        type: "line",
        height: "330"
      },
      series: [

      ],

      theme: {
        mode: "light",
        palette: "palette1",
        opacity: 0.9,
        monochrome: {
          enabled: false,
          color: "#00CED1",
          shadeTo: "light",
          shadeIntensity: 0.65
        },
      },

      title: {
        text: "Population Rate(1960 - 2021)"
      },


      //Adjust xaxis interval to show 
      xaxis: {
        type: "category",
        tickAmount: 5,
      },

      //Set decemial to 0
      yaxis: {
        decimalsInFloat: 0,
      },

      // what to show there is no data
      noData: {
        "text": "Loading..."
      }

    }

    // create the chart
    const chart = new ApexCharts(document.querySelector("#chart2"), options);

    // render the chart
    chart.render()


    // display the loaded data as a series in the chart
    chart.updateSeries([{
      'name': 'Population growth (annual %)',
      'data': series7
    },
    {
      'name': 'Birth rate, crude (per 1,000 people)',
      'data': series8
    },
    {
      'name': 'Fertility rate, total (births per woman)',
      'data': series9
    },
    {
      'name': 'Death rate, crude (per 1,000 people)',
      'data': series10
    },

    ])
  }
  drawchart2();

  function drawmixedchart1() {
    const options = {
      series: [{
        name: "Population Number",
        type: "column",
        data: [5.31, 5.40, 5.47, 5.54, 5.61, 5.61, 5.64, 5.70, 5.69, 5.45, 5.64]
      }, {
        name: "Population Growth",
        type: "line",
        data: [2.5, 1.6, 1.3, 1.2, 1.3, 0.1, 0.5, 1.2, -0.3, -4.1, 3.4]
      }],
      chart: {
        foreColor: "#ccc",
        height: "330",
        type: "line",
      },
      stroke: {
        width: [0, 2]
      },
      title: {
        text: "Population in Singapore"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2022, 2021, 2022],
      // xaxis: {
      //   type: 'datetime'
      // },
      yaxis: [{
        title: {
          text: "Population in Million",
        },

      }, {
        opposite: true,
        title: {
          text: "Population Growth"
        }
      }]
    }


    const chart = new ApexCharts(document.querySelector("#mixedchart1"), options);
    // render the chart
    chart.render()

    // // chart.updateSeries([{
    //   'name': 'Population growth (annual %)',
    //   'type': column,
    //   'data': series11,
    // },
    // {
    //   'name': 'Birth rate, crude (per 1,000 people)',
    //   'type': line,
    //   'data': series11,
    // }

    // ])
  }
  drawmixedchart1();

  function drawpie1() {
    const options = {
      chart: {
        foreColor: "#ccc",
        type: "donut",
        height: "330"
      },
      series: [3.55, 1.56, 0.52],

      labels: ["Citizens", "Non-Residents", "Permanent Residents"],

      colors: ["#67597A", "#544E61", "#6E8894"],

      title: {
        text: "Population in 2022"
      },

      legend: {
        postion: "-30px"
      },

      // what to show there is no data
      noData: {
        "text": "Loading..."
      }


    }

    const chart = new ApexCharts(document.querySelector("#pie1"), options);
    // render the chart
    chart.render()
  }
  drawpie1();

})
