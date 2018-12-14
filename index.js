table = require("table");

console.log("Initializing...");

if (typeof require !== 'undefined') XLSX = require('xlsx');

var workbook = XLSX.readFile("spreadsheet.xlsx");

var sheets = workbook.Sheets;
var sheetNames = workbook.SheetNames;

var sheet0 = sheets[sheetNames[0]];
var json0 = XLSX.utils.sheet_to_json(sheet0);

//console.log(Object.keys(json0[0]));

//var testtable = [[0,1,1], [1,2,3], [3,4,5]];

var array = [];

for (var i = 0; i < json0.length; i++) {
	if (Object.keys(json0[i]).length == 4) {
		var row = Object.values(json0[i]);
		array.push(row);
		//console.log(Object.values(json0[i]));
	}
}

console.log(table.table(array));
