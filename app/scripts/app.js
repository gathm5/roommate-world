'use strict';

/**
 * @ngdoc overview
 * @name roommateWorldApp
 * @description
 * # roommateWorldApp
 *
 * Main module of the application.
 */
angular
    .module('roommateWorldApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'gsDirectives',
        'ngAutocomplete',
        'ngTell',
        'LocalForageModule',
        'angularMoment'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$localForageProvider',
        function ($stateProvider, $urlRouterProvider, $localForageProvider) {
            $localForageProvider.config({
                name: 'RoommateWorld', // name of the database and prefix for your data, it is "lf" by default
                version: 1.0, // version of the database, you shouldn't have to use this
                storeName: 'roommateworldstorage', // name of the table
                description: 'Store the roommate world'
            });
            $localForageProvider.setNotify(true, true); // itemSet, itemRemove

            $stateProvider
                .state('load', {
                    url: '/load',
                    views: {
                        '@': {
                            templateUrl: '/views/common/selection-screen.html',
                            controller: 'SelectionScreenCtrl'
                        }
                    }
                })
                .state('start', {
                    url: '/start',
                    views: {
                        '@': {
                            templateUrl: '/views/common/load-screen.html'
                        }
                    }
                })
                .state('start.main', {
                    url: '/',
                    views: {
                        'MainContent@start': {
                            templateUrl: '/views/common/main-content.html',
                            controller: 'MainContentCtrl'
                        },
                        'MenuPanel@start': {
                            templateUrl: '/views/menu/menu-panel.html',
                            controller: 'MenuPanelCtrl'
                        },
                        'Header@start.main': {
                            templateUrl: '/views/common/header.html',
                            controller: 'HeaderCtrl'
                        }
                    }
                })
                .state('start.main.dashboard', {
                    url: 'dashboard',
                    views: {
                        'Content@start.main': {
                            templateUrl: '/views/dashboard/dashboard.html',
                            controller: 'DashboardCtrl'
                        },
                        'SlideMenu@start': {
                            templateUrl: '/views/common/filter.html',
                            controller: 'FilterCtrl'
                        }
                    }
                })
                .state('start.main.settings', {
                    url: 'settings',
                    views: {
                        'Content@start.main': {
                            templateUrl: '/views/menu/settings.html',
                            controller: 'SettingsCtrl'
                        }
                    }
                });
            //$urlRouterProvider.otherwise('/start/dashboard');
            $urlRouterProvider.otherwise('/load');
        }
    ])
    .run([
        '$state',
        '$stateParams',
        'drawerParams',
        'slideOutMenuParams',
        'gsDeviceListeners',
        '$rootScope',
        function ($state, $stateParams, drawerParams, slideOutMenuParams, gsDeviceListeners, $rootScope) {
            $rootScope.$state = $state;
            $rootScope.drawerParams = drawerParams;
            $rootScope.slideOutMenuParams = slideOutMenuParams;
            gsDeviceListeners.init();
            $rootScope.$on('$stateChangeStart', function () {
                drawerParams.close();
                slideOutMenuParams.close();
            });
            $rootScope.$on('$$back', function (event) {
                if (drawerParams.isDrawerOpen || slideOutMenuParams.isSlideOpen) {
                    event.preventDefault();
                    event.defaultPrevented = true;
                    drawerParams.close();
                    slideOutMenuParams.close();
                    $rootScope.$apply();
                }
            });
            $rootScope.$on('$$menu', function (event) {
                event.preventDefault();
                event.defaultPrevented = true;
                if (!slideOutMenuParams.isSlideOpen) {
                    drawerParams.toggle();
                }
                $rootScope.$apply();
            });
        }
    ]);