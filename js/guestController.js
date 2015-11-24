function guestController($scope) {

  $scope.guests = [];
  $scope.id;

	if(window.localStorage['guests']) {
		console.log('local storage called');
		$scope.guests = JSON.parse(window.localStorage['guests']);
	}

	$scope.addGuest = function() {
		var guest = {
			name: $scope.name, 
			email: $scope.email,
			img: "http://www.gravatar.com/avatar/"+hex_md5($scope.email)
		};
		$scope.guests.push(guest);
		$scope.saveLocalStorage();
		$scope.email = '';
		$scope.name = '';
	}

	$scope.editGuestName = function(guest) {
		console.log('edit guest', guest);
		var newValue;
		newValue = prompt('Type a new name: ', guest.name);
		if(newValue){
			guest.name = newValue;
		}
		$scope.saveLocalStorage();
	}


	$scope.editGuestEmail = function(guest) {
		console.log('edit guest', guest);
		var newValue;
		newValue = prompt('Type a new email: ', guest.email);
		if(newValue){
			guest.email = newValue;
		}
		$scope.saveLocalStorage();
	}

	$scope.deleteGuest = function(id) {
		console.log("Index: " + id);
		$scope.guests.splice(id, 1);
		$scope.saveLocalStorage();
	}

	$scope.saveLocalStorage = function() {
		console.log('save storage called');
		window.localStorage['guests']=JSON.stringify($scope.guests);
	}
}
