angular.module('playground', [])
	.controller('playgroundController', ['$scope', function($scope){
		$scope.mainblocks = [{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem. Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		}, {
			text: 'Lorem ipsum dolor sit amet',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posue',
			shrink: '0',
			grow: '1',
			basis: '250px'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin olor sit amet, consectetur',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.Lorem ipsum dolor sit amet, consectetur',
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		}];
		$scope.header = { 
			justifying: 'center'
		};
		$scope.globalStyles = true;
		$scope.global = {
			shrink: '0',
			grow: '1',
			basis: '250px',
			order: '',
			alignself: 'flex-start'
		};

		$scope.toggleLeftSidebar = function(){
			$scope.leftSideVisible = $scope.leftSideVisible ? false : true;
		};

		$scope.toggleRightSidebar = function(){
			$scope.rightSideVisible = $scope.rightSideVisible ? false : true;
		};

		$scope.leftSideVisible = false;
		$scope.rightSideVisible = false;

		$scope.deleteItem = function(){
			$scope.mainblocks.pop();
		};

		$scope.pushItem = function(){
			$scope.mainblocks.push({
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin olor sit amet, consectetur',
				shrink: '0',
				grow: '1',
				basis: '250px',
				order: '',
				alignself: 'flex-start'
			});
		};

		$scope.galleryRows = 
		[[{url: 'http://lorempixel.com/700/700/?1'},
		{url: 'http://lorempixel.com/700/700/?2'},
		{url: 'http://lorempixel.com/700/700/?3'}],
		[{url: 'http://lorempixel.com/700/700/?4'},
		{url: 'http://lorempixel.com/700/700/?5'},
		{url: 'http://lorempixel.com/700/700/?6'}],
		[{url: 'http://lorempixel.com/700/700/?7'},
		{url: 'http://lorempixel.com/700/700/?8'},
		{url: 'http://lorempixel.com/700/700/?9'}]];
		$scope.setFlexEnd = function(evt){
			// evt.target.parent().css({'flex-direction','flex-end'});
			console.log(evt);
		};

		$scope.showModal = false;

		$scope.showAccordion = false;
		$scope.showMain = true;
		$scope.showGallery = false;

		$scope.main = {
			justifying: 'center',
			wrap: 'wrap',
			direction: 'row',
			alignitems: 'flex-start',
			aligncontent: 'flex-start'
		};

		$scope.addImagesToGallery = function(){
			this.galleryRows.forEach(function(array){
				array.push({url: 'http://lorempixel.com/700/700/?' + Math.floor(Math.random()*10) })
			});
		};

		$scope.applyGlobal = function(){
			$scope.mainblocks.forEach(function(item){
				item.shrink = $scope.global.shrink;
				item.grow = $scope.global.grow;
				item.basis = $scope.global.basis;
				item.order = $scope.global.order;
				item.alignself = $scope.global.alignself;
			});
		};

		$scope.removeImagesFromGallery = function(){
			this.galleryRows.forEach(function(array){
				array.pop();
			});
		};

		$scope.setMainBlockProperties = function(){
			console.log();
			document.getElementsByClassName('main-first-block-wrapper')[0].style.justifyContent = this.main.justifying;
		};

		$scope.setMainBlockPropertiesWrap = function(){
			console.log();
			document.getElementsByClassName('main-first-block-wrapper')[0].style.flexWrap = this.main.wrap;
		};

		$scope.setMainBlockPropertiesDirection = function(){
			console.log();
			document.getElementsByClassName('main-first-block-wrapper')[0].style.flexDirection = this.main.direction;
		};

		$scope.setMainBlockPropertiesAlignItems = function(){
			console.log();
			document.getElementsByClassName('main-first-block-wrapper')[0].style.alignItems = this.main.alignitems;
		};

		$scope.setMainBlockPropertiesAlignContent = function(){
			console.log();
			document.getElementsByClassName('main-first-block-wrapper')[0].style.alignContent = this.main.aligncontent;
		};

		$scope.showAccordionFunc = function(){
			$scope.showAccordion = $scope.showAccordion ? false : true;
		};

		$scope.showMainFunc = function(){
			$scope.showMain = $scope.showMain ? false : true;
		};

		$scope.showGalleryFunc = function(){
			$scope.showGallery = $scope.showGallery ? false : true;
		};

		$scope.showCSSCode = function(evt){
			var i = 0;
		 	$scope.properties = [];
		 	$scope.elementClass = evt.target.parentElement.classList[0];
			while(evt.target.parentElement.style[i]){
				$scope.properties.push({name:evt.target.parentElement.style[i],
					value: evt.target.parentElement.style[evt.target.parentElement.style[i]]});
				i++;
			}
			console.log($scope.properties);
			$scope.showModal = true;
			setTimeout(function(){
				$scope.$apply();	
			}, 1000);
			
		};

		$scope.closeModal = function(evt){
			if (evt.target.classList[0]=='modal') {
				$scope.showModal = false;
			}
		};

	}])
.directive('cssCode', function(){
		return {
			restrict: 'EA',
			template: ' <div class="modal-wrapper">\
			<div><span class="row-number">1</span><span class="className">{{elementClass}}</span> {</div>  \
				 \
					<div class="properties"> \
						<div ng-repeat="prop in properties"> \
							<div class="property-row"><span class="row-number">{{$index+2}}</span><span class="property">{{prop.name}}</span>: <span class="value">{{prop.value}}</span>;</div> \
						</div> \
					</div>\
				<span class="row-number">{{properties.length+2}}</span>} \
			</div>'
		};
	});