var ourStoreModule = angular.module('ourStoreModule', []);

// Controllers (testable code)
ourStoreModule.controller('coreCtrl', CoreCtrl);

function CoreCtrl() {
	this.storeName = 'Bike World';
}

ourStoreModule.controller('navigationCtrl', NavigationCtrl);

function NavigationCtrl() {
	this.storeName = 'Another store name';
}

ourStoreModule.controller('catalogCtrl', CatalogCtrl);

function CatalogCtrl(bikeStockService) {
	this.bikes = bikeStockService.getBikes();
}

ourStoreModule.controller('cartCtrl', CartCtrl);

function CartCtrl() {
	var vm = this;
	vm.selectedBikes = [];

	this.addProduct = function (prd, qty) {
		var bike = angular.copy(prd);
		bike.qty = qty;
		bike.total = function(){
			return this.qty * this.price;
		}
		vm.selectedBikes.push(bike);
	};
	
	this.hasItems = function(){
		return vm.selectedBikes.length > 0;
	};
	
	this.totalValue = function(){
		var t = 0;
		for(var idx = 0; idx < vm.selectedBikes.length; idx++){
			t += vm.selectedBikes[idx].price;
		}
		return t;
	};
	
	this.clear = function(){
		vm.selectedBikes = [];
	};
}


// Services
ourStoreModule.service('bikeStockService', BikeStockService);

function BikeStockService($http) {
	var bikes = [{
		name : 'Giant',
		description : "Giant Manufacturing Co. Ltd. is a Taiwanese bicycle manufacturer that is recognized as the world's largest bicycle manufacturer. Giant has manufacturing facilities in Taiwan, the Netherlands, and China",
		price : 200,
		qty : 10
	},{
		name : 'Cervelo',
		description : "Cervélo Cycles is a Canadian manufacturer of racing bicycle frames. Cervélo uses CAD, computational fluid dynamics, and wind tunnel testing at a variety of facilities including the San Diego Air ",
		price : 300,
		qty : 5
	},{
		name : 'Trek',
		description : "Trek Bicycle Corporation is a major bicycle and cycling product manufacturer and distributor under brand names Trek, Electra Bicycle Company, Gary Fisher, Bontrager, Diamant Bikes, Villiger Bikes and until 2008, LeMond Racing Cycles and Klein",
		price : 400,
		qty : 2
	},{
		name : 'Avanti',
		description : "Avanti bikes is an Australasian company originating from New Zealand and now distributes bicycles to many countries within Oceania, Asia and Europe",
		price : 500,
		qty : 1
	}];

	return {
		getBikes: function () {
			var availableBikes = bikes.filter(function (item) {
				return item.qty > 0;
			});

			return availableBikes;
		}
	}
}