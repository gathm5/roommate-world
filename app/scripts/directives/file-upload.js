'use strict';

/**
 * @ngdoc directive
 * @name roommateWorldApp.directive:fileUpload
 * @description
 * # fileUpload
 */
angular.module('roommateWorldApp')
    .directive('fileUpload', [
        'fileUploadService',
        function (fileUploadService) {
            return {
                template: '<input type="file" accept="image/*" capture="camera" />',
                restrict: 'E',
                replace: true,
                scope: {
                    uploadReady: '=',
                    uploaded: '='
                },
                link: function postLink(scope, element, attr) {
                    scope.selected = function () {
                        scope.selectedParams = fileUploadService.selected(element[0]);
                    };
                    scope.uploaded = {
                        flag: false,
                        reason: null
                    };
                    scope.$watch('uploadReady', function (ready) {
                        if (ready) {
                            fileUploadService
                                .upload(element[0])
                                .then(function (message) {
                                    scope.uploaded = {
                                        flag: true,
                                        reason: message
                                    };
                                }, function (reason) {
                                    scope.uploaded = {
                                        flag: false,
                                        reason: reason
                                    };
                                });
                        }
                    });
                }
            };
        }
    ]);