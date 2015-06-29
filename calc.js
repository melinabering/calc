//JavaScript Document


var numDrivers = getElementById('numDrivers');
var hourlyRate = getElementById('hourlyRate');
var regHours = getElementById('regHours');

var weeklyAvgPay = numDrivers + hourlyRate + regHours;

$('#weeklyAvgPay').append(weeklyAvgPay).innerHTML = weeklyAvgPay;






// ADDS the static values to the last cell of the table
//var tableDriver = [7.65, 1.4, 13, 0.4, 5, 8.5];
//var i;
//
//for(i = 2; i < tableDriver.length; i++){
//	$('tr:nth-child(2) td:nth-child(3)').append(tableDriver[i]);
//}

var tableDriverObj = {
  SSaMedicare   : 7.65, //7.65, //percent
  unemployment  : 1.4, //percent
  workmansComp  : 13, //percent
  misc          : 0.4, //percent
  pto           : 5, //days per year
  benefits      : 8.5 //percent
};

$('tr:nth-child(2) td:nth-child(3)').append(tableDriverObj.SSaMedicare + "%");
$('tr:nth-child(3) td:nth-child(3)').append(tableDriverObj.unemployment + "%");
$('tr:nth-child(4) td:nth-child(3)').append(tableDriverObj.workmansComp + "%");
$('tr:nth-child(5) td:nth-child(3)').append(tableDriverObj.misc + "%");
$('tr:nth-child(6) td:nth-child(3)').append(tableDriverObj.pto + " Days");
$('tr:nth-child(7) td:nth-child(3)').append(tableDriverObj.benefits + "%");

