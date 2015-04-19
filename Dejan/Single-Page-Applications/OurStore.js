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
	
	this.addItem = function(item){
		vm.itemsSelected.push(item);
	};
});


OurStoreApp.controller('CatalogCtrl', CatalogCtrl);
function CatalogCtrl(productService){
	this.products = productService.getAllBikes();
}


OurStoreApp.service('productService', ProductService);
function ProductService(){
	var bikes = [{
		name : 'GIANT',
		description : 'a really cool bike',
		price : 999,
		qty : 10
	},{
		name : 'Avanti',
		description : 'a really cool car',
		price : 9999,
		qty : 100
	},{
		name : 'Avanti',
		description : 'a really cool car',
		price : 9999,
		qty : 100
	},{
		name : 'Avanti',
		description : 'a really cool car',
		price : 9999,
		qty : 100
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