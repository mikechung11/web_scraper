(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("homeController", HomeController);

    // Inject services
    HomeController.$inject = ["$scope", "$window", "service"];

    function HomeController($scope, $window, service) {
        var vm = this;

        // View model
        vm.item = {};
        vm.items = [];
        vm.$scope = $scope;
        vm.service = service;
        vm.$onInit = _init;
        vm.submit = _submit;

        // The Fold
        // Initialize
        function _init() {
            console.log("Initialized.");
        }

        // Submit Button
        function _submit() {
            vm.item.url = vm.url;
            console.log(vm.item);
            vm.service.post("api/scrape/", vm.item)
                .then(_submitSuccess, _error);
        }

        // Submit Success
        function _submitSuccess(res) {
            vm.items = res.data.items;
            console.log(vm.items);
        }

        // Error
        function _error(err) {
            console.log(err);
        }
    }
})();
