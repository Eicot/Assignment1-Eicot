
// Assign getData to retrieve data from json file
async function getData() {
  const response = await axios.get("singaporePopulationTable.json");
  // console.log(response)
  return response.data;
}

getData(); //Call getData function

// Assign transformData1 for Total Population
function transformData1(data) {
  const population = data.map(function(dataPoint) { //Assign dataPoint with .map to call year and its population 
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
  // console.log("population=", populationFemale);

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

function transformData4(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationages014total,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series4 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series4.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series4;

}

function transformData5(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationages1564total,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series5 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series5.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series5;

}

function transformData6(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationages65andabovetotal,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series6 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series6.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series6;

}

function transformData7(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.populationgrowth,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series7 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series7.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series7;

}

function transformData8(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.birthRate,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series8 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series8.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series8;

}

function transformData9(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.fertilityRateTotalBirthsPerWoman,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series9 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series9.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series9;

}

function transformData10(data) {
  const populationMale = data.map(function(dataPoint) {
    return {
      "pop": dataPoint.deathRatecperthousandpeople,
      "year": dataPoint.year
    }
  })
  // console.log("population=", populationMale);

  const series10 = [];

  for (let dataPoint of populationMale) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;
    // console.log(pop);
    // console.log(years);

    series10.push({
      x: dataPoint.year,
      y: dataPoint.pop
    })
  }
  // console.log(series3);
  return series10;

}


// function transformData11(data) {
//   const popt = data.map(function(dataPoint) {
//     return {
//       "amount": dataPoint.populationTotal,
//       "year": dataPoint.year
//     }
//   })
//   console.log("population=", popt);

//   const shortlisted = popt.filter(function(dataPoint) {
//     return dataPoint.year > 2011;

//   })
//   console.log("shortlisted", shortlisted)

//   const series11 = [];

//   for (let dataPoint of shortlisted) {
//     const amount = dataPoint.amount;
//     const year = dataPoint.year;
//     // console.log(pop);
//     // console.log(years);

//     series11.push({
//       x: dataPoint.year,
//       y: dataPoint.amount
//     })
//   }
//   // console.log(seriesB); 
//   return series11;

// }
