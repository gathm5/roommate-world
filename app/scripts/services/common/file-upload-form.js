'use strict';

/**
 * @ngdoc service
 * @name roommateWorldApp.fileUploadForm
 * @description
 * # fileUploadForm
 * Factory in the roommateWorldApp.
 */
angular.module('roommateWorldApp')
    .factory('fileUploadService', [
        '$config',
        '$q',
        function ($config, $q) {
            // Public API here
            return {
                selected: function (elem) {
                    var count = elem.files.length;
                    var fileData = [];
                    for (var index = 0; index < count; index++) {
                        var file = elem.files[index];
                        var fileSize = 0;
                        if (file.size > 1024 * 1024) {
                            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                        }
                        else {
                            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                        }
                        fileData.push({
                            name: file.name,
                            size: fileSize,
                            type: file.type
                        });
                    }
                    return fileData;
                },
                upload: function (elem) {
                    var fd = new FormData();
                    var count = elem.files.length;
                    var deferred = $q.defer();
                    var xhr = new XMLHttpRequest();
                    var callType = 'POST';
                    for (var index = 0; index < count; index++) {
                        var file = elem.files[index];
                        fd.append('myFile', file);
                    }
                    //xhr.upload.addEventListener('progress', uploadProgress, false);
                    xhr.addEventListener('load', function (evt) {
                        deferred.resolve(evt);
                    }, false);
                    xhr.addEventListener('error', function (evt) {
                        deferred.reject(evt);
                    }, false);
                    xhr.addEventListener('abort', function (evt) {
                        deferred.reject(evt);
                    }, false);
                    xhr.open(callType, $config.fileServer.url);
                    xhr.send(fd);
                    return deferred.promise;
                }
            };
        }
    ]);