//JavaScript Document

// ADDS the static values to the last cell of the table
//var tableDriver = [7.65, 1.4, 13, 0.4, 5, 8.5];
//var i;
//
//for(i = 2; i < tableDriver.length; i++){
//	$('tr:nth-child(2) td:nth-child(3)').append(tableDriver[i]);
//}

var tableDriverObj = {
  SSaMedicare   : 7.65, 	//7.65, //percent
  unemployment  : 1.40, 	//percent
  workmansComp  : 13.00, 	//percent
  misc          : 0.40, 	//percent
  pto           : 5, 		//days per year
  benefits      : 8.50 		//percent
};

$('table.driverTable tr:nth-child(2) td:nth-child(3)').append(tableDriverObj.SSaMedicare + "%");
$('table.driverTable tr:nth-child(3) td:nth-child(3)').append(tableDriverObj.unemployment + "%");
$('table.driverTable tr:nth-child(4) td:nth-child(3)').append(tableDriverObj.workmansComp + "%");
$('table.driverTable tr:nth-child(5) td:nth-child(3)').append(tableDriverObj.misc + "%");
$('table.driverTable tr:nth-child(6) td:nth-child(3)').append(tableDriverObj.pto + " Days");
$('table.driverTable tr:nth-child(7) td:nth-child(3)').append(tableDriverObj.benefits + "%");

var tableVehicleObj = {
  originalCost  		: 2.50, //percent
  fees  				: 0.03, //percent
  taxes					: 0.00, //percent
  gasCost       		: "", 	//null
  insurance           	: 1.80, //days per year
  normalMaintenance     : 0.70, //percent
  exteriorMaintenance	: 0.10 	//percent
};

$('table.vehicleTable tr:nth-child(1) td:nth-child(3)').append(tableVehicleObj.originalCost + "%");
$('table.vehicleTable tr:nth-child(2) td:nth-child(3)').append(tableVehicleObj.fees + "%");
$('table.vehicleTable tr:nth-child(3) td:nth-child(3)').append(tableVehicleObj.taxes + "%");
$('table.vehicleTable tr:nth-child(4) td:nth-child(3)').append( "$" + tableVehicleObj.gasCost);
$('table.vehicleTable tr:nth-child(5) td:nth-child(3)').append(tableVehicleObj.insurance + " Days");
$('table.vehicleTable tr:nth-child(6) td:nth-child(3)').append(tableVehicleObj.normalMaintenance + "%");
$('table.vehicleTable tr:nth-child(7) td:nth-child(3)').append(tableVehicleObj.exteriorMaintenance + "%")




var weeklyAvgPay = function(){
	var numDrivers = getElementById('numDrivers');
	var hourlyRate = getElementById('hourlyRate');
	var regHours = getElementById('regHours');
		
	var result = numDrivers + hourlyRate + regHours;
	
	$('#weeklyAvgPay').append(result).innerHTML;
};


