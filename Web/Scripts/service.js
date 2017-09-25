(function () {
    'use strict';
    angular
        .module('mainApp')
        .factory('service', Service);

    Service.$inject = ['$http', '$q'];

    function Service($http, $q) {

        return {
            post: _post,
            postById: _postById,
            get: _get,
            getById: _getById,
            put: _put,
            delete: _delete,
        };

        // POST
        function _post(url, data) {
            return $http.post(url, data)
                .then(_postComplete)
                .catch(_postFailed);

            function _postComplete(res) {
                console.log("Post Complete", res);
                return res;
            }

            function _postFailed(err) {
                console.log("Post Failed", err);
                return $q.reject(err);
            }
        }

        // POST BY ID
        function _postById(url, id, data) {
            return $http.post(url + id, data)
                .then(_postByIdComplete)
                .catch(_postByIdFailed);

            function _postByIdComplete(res) {
                console.log("Post by ID complete", res);
                return res;
            }

            function _postByIdFailed(err) {
                console.log("Post by ID failed", err);
                return $q.reject(err);
            }
        }

        // GET
        function _get(url) {
            return $http.get(url)
                .then(_getComplete)
                .catch(_getFailed);

            function _getComplete(res) {
                console.log("Get Complete", res.status, res.statusText);
                return res;
            }

            function _getFailed(err) {
                console.log("Get Failed", err.status, err.statusText);
                return $q.reject(err);
            }
        }

        // GET BY ID
        function _getById(url, id) {
            return $http.get(url + id)
                .then(_getByIdComplete)
                .catch(_getByIdFailed);

            function _getByIdComplete(res) {
                console.log("Get by ID Complete", res.status, res.statusText);
                return res;
            }

            function _getByIdFailed(err) {
                console.log("Get by ID Failed", err.status, err.statusText);
                return $q.reject(err);
            }
        }

        // PUT
        function _put(url, id, data) {
            return $http.put(url + id, data)
                .then(_putComplete)
                .catch(_putFailed);

            function _putComplete(res) {
                console.log("Put Complete", res);
                return res;
            }

            function _putFailed(err) {
                console.log("Put Failed", err);
                return $q.reject(err);
            }
        }

        // DELETE
        function _delete(url, id) {
            return $http.delete(url + id)
                .then(_deleteComplete)
                .catch(_deleteFailed);

            function _deleteComplete(res) {
                console.log("Delete Complete", res);
                return res;
            }

            function _deleteFailed(err) {
                console.log("Delete Failed", err);
                return $q.reject(err);
            }
        }
    }
})();
