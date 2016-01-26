'use strict';

angular.module('budgetApp')
    .factory('TransactionLineItem', function ($resource, DateUtils) {
        return $resource('api/transactionLineItems/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
