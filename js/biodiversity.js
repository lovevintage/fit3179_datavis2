var vg_1 = "js/one_chart.json";
vegaEmbed("#one_chart", vg_1).then(function(result) {
    console.log("First chart loaded successfully:", result.view);
}).catch(function(error) {
    console.error("Error loading the map chart:", error);
});

var vg_2 = "js/two_chart.json";
vegaEmbed("#two_chart", vg_2).then(function(result) {
    console.log("Second chart loaded successfully:", result.view);
}).catch(function(error) {
    console.error("Error loading the second chart:", error);
});

var vg_3 = "js/three_chart.json";
vegaEmbed("#three_chart", vg_3).then(function(result) {
    console.log("First chart loaded successfully:", result.view);
}).catch(function(error) {
    console.error("Error loading the map chart:", error);
});
