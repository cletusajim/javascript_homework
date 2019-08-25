// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data and print out each 
// data.forEach(function(ufo_data) {
//    console.log(ufo_data);
//  });

// Use d3 to append one table row `tr` for each data object
data.forEach(function(ufo) {
    var row = tbody.append("tr");

//  Use `Object.entries` to console.log each data value and text to the cells
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create filter
var button_filter = d3.select("#filter-btn");

button_filter.on("click", function() {
    // Page refreshes when click filter table,
    // prevent the page from refreshing
    d3.event.preventDefault();
    tbody.html("");

    // Select the input element and get the raw HTML node
    var dateTime = d3.select("#datetime");

    // Get the value property of the input element
    var user_input = dateTime.property("value");
    var queried_data = tableData.filter(queried_info => queried_info.datetime === user_input);

    // Use d3 to append one table row tr for each data object
    queried_data.forEach(function(ufo) {
        var row = tbody.append("tr");
        // Use Object.entries to print corresponding data value and text to cells
        Object.entries(ufo).forEach(function([key, value]) {
            var cell = row.append("td")
            cell.text(value);
        });
    });
})