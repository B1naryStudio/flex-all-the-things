angular.module('playground', [])
	.controller('playgroundController', ['$scope', function($scope){
		$scope.mainblocks = [{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem. Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur'
		}, {
			text: 'Lorem ipsum dolor sit amet'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posue'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin olor sit amet, consectetur'
		},{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.'
		}, {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitllus a pretium quam. Proin posuere ligula sem.Lorem ipsum dolor sit amet, consectetur'
		}];

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

		$scope.main = {
			justifying: 'center',
			wrap: 'wrap',
			direction: 'column',
			alignitems: 'flex-start',
			aligncontent: 'flex-start'
		};

		$scope.addImagesToGallery = function(){
			this.galleryRows.forEach(function(array){
				array.push({url: 'http://lorempixel.com/700/700/?' + Math.floor(Math.random()*10) })
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

	}]);