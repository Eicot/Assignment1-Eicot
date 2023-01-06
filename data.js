async function loadData() {
    const response = await axios.get("singaporePopulationTable.json");
    console.log(response)
    return response.data;
}

loadData();


function transformData1(data) {
    const popt = data.map(function(dataPoint) {
        return {
            "amount" : dataPoint.populationTotal,
            "year": dataPoint.year
        }
    })
    console.log("population=", popt);

    const seriesB = [];

    for (let dataPoint of popt) {
        const pop = dataPoint.amount;
        const years = dataPoint.year;
        console.log(pop);
        console.log(years);

        seriesB.push({
            x: dataPoint.year,
            y: dataPoint.amount
        })
    }
    console.log(seriesB); 
    return seriesB;  

}

function transformData(data) {
    const population = data.map(function(dataPoint) {
        return {
            "amount" : dataPoint.populationFemale,
            "year": dataPoint.year
        }
    })
    console.log("population=", population);

    const series1 = [];

    for (let dataPoint of population) {
        const pop = dataPoint.amount;
        const years = dataPoint.year;
        // console.log(pop);
        // console.log(years);

        series1.push({
            x: dataPoint.year,
            y: dataPoint.amount
        })
    }
    console.log(series1); 
    return series1;
  

}