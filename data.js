async function loadData() {
  const response = await axios.get("singaporePopulation.json");
  // console.log(response)
  return response.data;
}

loadData();

function transformData1(data) {
  const population = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationTotal,
      "year": dataPoint.year
    }
  })
  // console.log("population=", popt);

  const series1 = [];

  for (let dataPoint of population) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series1.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(seriesB);
  return series1;

}

function transformData2(data) {
  const populationFemale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationFemale,
      "year": dataPoint.year
    }
  })
  console.log("population=", populationFemale);

  const series2 = [];

  for (let dataPoint of populationFemale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series2.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series2);
  return series2;

}

function transformData3(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationMale,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series3 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series3.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series3;

}