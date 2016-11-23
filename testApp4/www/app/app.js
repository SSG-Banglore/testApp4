﻿(function () {
    "use strict";

    angular.module("myapp", ["ionic", "myapp.controllers", "myapp.services","ngCordova"])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "app/templates/view-menu.html",
                controller: "appCtrl"
            })
            .state("app.home", {
                url: "/home",
                templateUrl: "app/templates/view-home.html",
                controller: "homeCtrl"
            })
            .state("register", {
                url: "register",
                templateUrl: "app/templates/register.html",
                controller: "registerCtrl"
            })
              .state("view-login", {
                  url: "/view-login",
                  templateUrl: "app/templates/view-home.html",
                  controller: "registerCtrl"
              })
              .state("view-afterLogin", {
                  url: "/view-afterLogin",
                  templateUrl: "app/templates/view-afterLogin.html",
                  controller: "afterLoginCtrl"
              })
                  .state("view-forgetPassword", {
                      url: "/view-forgetPassword",
                      templateUrl: "app/templates/view-forgetPassword.html",
                      controller: "forgetPasswordCtrl"
                  })
            .state("view-getNewPassword", {
                url: "/view-getNewPassword",
                templateUrl: "app/templates/view-getNewPassword.html",
                controller: "getNewPasswordCtrl"
            })
            .state("view-parent-home", {
                url: "/view-parent-home",
                templateUrl: "app/templates/view-parent-home.html",
                controller: "parentHomeCtrl"
            })
            .state("view-subject-details", {
                url: "/view-subject-details",
                templateUrl: "app/templates/view-subject-details.html",
                controller: "subjectDetailCtrl"
            })
            .state("view-feeDeatils", {
                url: "/view-feeDeatils",
                templateUrl: "app/templates/view-feeDeatils.html",
                controller: "feeDetailCtrl"
            })
             .state("view-attendence", {
                 url: "/view-attendence",
                 templateUrl: "app/templates/view-attendence.html",
                 controller: "attendenceCtrl"
             })
              .state("view-transportFacility", {
                  url: "/view-transportFacility",
                  templateUrl: "app/templates/view-transportFacility.html",
                  controller: "transportFacilityCtrl"
              })
               .state("view-hostelDetails", {
                   url: "/view-hostelDetails",
                   templateUrl: "app/templates/view-hostelDetails.html",
                   controller: "hostelDetailsCtrl"
               })
                .state("view-personalDetails", {
                    url: "/view-personalDetails",
                    templateUrl: "app/templates/view-personalDetails.html",
                    controller: "personalDetailsCtrl"
                })
                 .state("view-HomeWork-Details", {
                     url: "/view-HomeWork-Details",
                     templateUrl: "app/templates/view-HomeWork-Details.html",
                     controller: "HomeWorkDetailsCtrl"
                 })
                 .state("view-holidays", {
                      url: "/view-holidays",
                      templateUrl: "app/templates/view-holidays.html",
                      controller: "holidaysCtrl"
                  })
                  .state("view-MessageBox", {
                          url: "/view-MessageBox",
                          templateUrl: "app/templates/view-MessageBox.html",
                          controller: "MessageBoxCtrl"
                      })
                  .state("view-TimeTable", {
                         url: "/view-TimeTable",
                         templateUrl: "app/templates/view-TimeTable.html",
                         controller: "TimeTableCtrl"
                     })
                  .state("view-ExaminationDetails", {
                          url: "/view-ExaminationDetails",
                          templateUrl: "app/templates/view-ExaminationDetails.html",
                          controller: "examinationDetailsCtrl"
                      })
                  .state("view-teacherDetail", {
                      url: "/view-teacherDetail",
                      templateUrl: "app/templates/view-teacherDetail.html",
                      controller: "TeacherDetailsCtrl"
                  })
                        .state("view-assesmentReport", {
                            url: "/view-assesmentReport",
                            templateUrl: "app/templates/view-assesmentReport.html",
                            controller: "assesmentReportCtrl"
                        })
                         .state("view-filteredHomeworkDetail", {
                             url: "/view-filteredHomeworkDetail",
                             //params: {
                             //    Hwork: {
                             //        assignmentsList: {
                             //            AssignmentName: '',
                             //            Question: '',
                             //            SubjectName: ''
                             //        }
                             //    }
                             //},
                             templateUrl: "app/templates/view-filteredHomeworkDetail.html",
                             controller: "HomeWorkDetailsCtrl"
                         })
                        .state("view-profile", {
                            url: "/view-profile",
                            templateUrl: "app/templates/view-profile.html",
                            controller: "profileCtrl"
                        })
                        .state("view-signout", {
                            url: "/view-signout",
                            templateUrl: "app/templates/view-signout.html",
                            controller: "signoutCtrl"
                        })
                        .state("Geolocation", {
                            url: "/Geolocation",
                            templateUrl: "app/templates/Geolocation.html",
                            controller: "GeolocationCtrl"
                        })
                          .state("barCodeScanner", {
                              url: "/barCodeScanner",
                              templateUrl: "app/templates/barCodeScanner.html",
                              controller: "barCodeScannerCtrl"
                        })
            ;
            

           
            $urlRouterProvider.otherwise("/view-parent-home");
        });
})();