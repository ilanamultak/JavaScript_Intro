// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterBtn = d3.select("#filter-btn");

tbody = d3.select("tbody");

var inputElement = "tbd";

filterBtn.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property('value');

    var filteredData = tableData.filter(function (ufosighting) {
    return ufosighting.datetime === inputElement;
    });

    tbody.text('');

FilteredData.forEach(record => { 
    var row = tbody.append('tr');

Object.entries(record).forEach( ([key, value]) => {
    row.append('td').text(value);
});
});
});

//LEVEL TWO
var filterCriteria = {};
var filteredData = tableData;

var filterTableBtn = d3.select("#filter-btn");
var tbody = d3.select("tbody");	

var keyvalue = [{
    fieldName: 'Date', 
    tableKey: 'datetime'
},
{
    fieldName: 'City', 
    tableKey: 'city'
},
{
    fieldName: 'State', 
    tableKey: 'state'
},
{
    fieldName: 'Country', 
    tableKey: 'country'
},
{
    fieldName: 'Shape', 
    tableKey: 'shape'
}
];

Object.entries(keyvalue).forEach(([key, value]) => populate(value.fieldName, value.tableKey));

function populate(fieldName, tableKey) {
    var field_menu = d3.select('#sel'+fieldName);

    var optionsArray = [...new Set(tableData.map(sighting => sighting[tableKey]))];
	optionsArray.unshift('No filter');
	optionsArray.forEach(option => field_menu.append('option').attr('value', option).text(option.toUpperCase()));
}

function updateFilteredData(queryField, queryValue) {

filteredData = tableData; 
filterCriteria[queryField] = queryValue;

Object.entries(filterCriteria).forEach(([key, value]) => {
    filteredData = filteredData.filter(function (sighting) {
        if (value === 'No filter') {
            return sighting[key];
        } else {
            return sighting[key] === value;
        }
    });
  });
}

filterTableBtn.on("click", function() {
    d3.event.preventDefault();
    updateTbody(filteredData);
});
function updateTbody(filteredData) {
    tbody.text('');

filteredData.forEach(report => { 
    var row = tbody.append('tr');

Object.entries(report).forEach( ([key, value]) => {
	row.append('td').text(value);
		});
	});
}
