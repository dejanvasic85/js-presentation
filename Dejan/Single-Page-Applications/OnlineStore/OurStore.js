var OurStoreApp = angular.module('OurStoreApp', []);

OurStoreApp.controller('HomeCtrl', HomeCtrl);
function HomeCtrl(){
	this.storeName = 'Our Store!';
}


OurStoreApp.controller('NavigationCtrl', NavigationCtrl);
function NavigationCtrl(){
	this.storeName = 'Navigation Store!';
}

OurStoreApp.controller('ShoppingCartCtrl', function(){
	var vm = this;
	vm.itemsSelected = [];
	
	this.hasItems = function(){
		return vm.itemsSelected.length > 0;
	};
	
	this.totalValue = function(){
		
		if(vm.itemsSelected.length === 0){
			return 0;
		}
		
		var total = 0;
		for(var idx = 0; idx < vm.itemsSelected.length; idx++){
			total += parseFloat( vm.itemsSelected[idx].price );
		}
		
		return total;
	};
	
	this.addItem = function(item, qty){
		var selectedProduct = angular.copy(item);
		selectedProduct.qty = qty;
		selectedProduct.getTotal = function(){
			return this.qty * this.price;
		}
		vm.itemsSelected.push(selectedProduct);
	};
});


OurStoreApp.controller('CatalogCtrl', CatalogCtrl);
function CatalogCtrl(productService){
	this.products = productService.getAllBikes();
}


OurStoreApp.service('productService', ProductService);
function ProductService(){
	var bikes = [{
		id : 1,
		name : 'Giant',
		description : "Giant Manufacturing Co. Ltd. is a Taiwanese bicycle manufacturer that is recognized as the world's largest bicycle manufacturer. Giant has manufacturing facilities in Taiwan, the Netherlands, and China",
		price : 200,
		qty : 10
	},{
		id : 2,
		name : 'Cervelo',
		description : "Cervélo Cycles is a Canadian manufacturer of racing bicycle frames. Cervélo uses CAD, computational fluid dynamics, and wind tunnel testing at a variety of facilities including the San Diego Air ",
		price : 300,
		qty : 5
	},{
		id : 3,
		name : 'Trek',
		description : "Trek Bicycle Corporation is a major bicycle and cycling product manufacturer and distributor under brand names Trek, Electra Bicycle Company, Gary Fisher, Bontrager, Diamant Bikes, Villiger Bikes and until 2008, LeMond Racing Cycles and Klein",
		price : 400,
		qty : 2
	},{
		id : 4,
		name : 'Avanti',
		description : "Avanti bikes is an Australasian company originating from New Zealand and now distributes bicycles to many countries within Oceania, Asia and Europe",
		price : 500,
		qty : 1
	}];
	
	return {
		getAllBikes : function(){
			var itemsWithQuantity = bikes.filter(function(item){
				return item.qty > 0;
			});
			
			return itemsWithQuantity;
		}
	};
}