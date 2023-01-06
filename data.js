async function loadData() {
    const response = await axios.get("singaporePopulationTable.json");
    // console.log(response)
    return response.data;
}

loadData();

function transformData(data) {
    const population = data[1].map(function(dataPoint) {
        return {
            "amount" : dataPoint.unit,
            "year": dataPoint.date
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