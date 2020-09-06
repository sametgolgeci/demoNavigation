angular.module('app', ['cfp.hotkeys', 'ngAnimate'])
	.controller('MainController', function($scope, hotkeys) {
    
    	// functions
    	$scope.active = 0;
    
		$scope.previous = function() {
            if($scope.active != 0) $scope.active -= 1;
        }    
        
    	$scope.next = function() {
            
            if($scope.active + 1 < $scope.images.length) $scope.active += 1;
        }
        
    	$scope.setActive = function(i) {
            $scope.active = i;
        }
    	
    	$scope.images = [
            {
                'rank' : 1,
            	'name' : 'LOAE',
                'desc' : 'A magnificent Bamboo forest in the district of Arashiyama, west to Kyoto, Japan.',
                'location' : 'Kyoto, Japan',
                'img' : 'img/02-LOAE-S.jpg'
        	},
            {
                'rank' : 2,
            	'name' : ' REYYAN',
                'desc' : 'Located in the southern Sierra Nevada mountains of California. The forest is named for the majestic Giant Sequoia  trees which populate 38 distinct groves within the boundaries of the forest. The Sequoia National Forest covers 4,829 sq km (1,865 sq mi).',
                'location' : 'California, United States',
                'img' : 'img/03-REYYAN-A.jpg'
        	},
            {
                'rank' : 3,
            	'name' : 'RAWAA',
                'desc' : 'Also in California, The Redwood National parks is a combination of four parks that together protect 45% of all remaining coast redwood (Sequoia sempervirens) old-growth images, totaling at least 158 square km. These trees are the tallest and one of the most massive tree species on Earth.',
                'location' : 'California, United States',
                'img' : 'img/04-RAWAA-H.jpg'
        	},
            {
                'rank' : 4,
            	'name' : 'ZAINA',
                'desc' : 'Schwarzwald or “Black Forest” is a wooded mountain range in Baden-Württemberg, southwestern Germany. It is bordered by the Rhine valley to the west and south. The name “Black Forest” was given by the Romans who referred to the forest blocking out most of the sunlight from getting inside the forest by the dense growth of conifers.',
                'location' : 'Germany',
                'img' : 'img/05-ZAINA-M.jpg'
        	},
            
        ];
    
    	// hot keys
    	hotkeys.add({
            combo: 'right',
            description: 'Next slide',
            callback: function() {
              $scope.next();
            }
        });
    	hotkeys.add({
            combo: 'left',
            description: 'Previous slide',
            callback: function() {
              $scope.previous();
            }
        });
	});