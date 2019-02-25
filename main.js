(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/finish/finish.component.ts");
/* harmony import */ var _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-question/new-question.component */ "./src/app/new-question/new-question.component.ts");







var routes = [
    { path: 'questions', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'finish', component: _finish_finish_component__WEBPACK_IMPORTED_MODULE_5__["FinishComponent"] },
    { path: 'new', component: _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_6__["NewQuestionComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Umfrage';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/finish/finish.component.ts");
/* harmony import */ var _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-question/new-question.component */ "./src/app/new-question/new-question.component.ts");












var firebaseConfig = {
    apiKey: 'AIzaSyCCeg260YXcYa6K1PZKdKMVYcYU8ed1dNY',
    authDomain: 'umfrage-2e9dc.firebaseapp.com',
    databaseURL: 'https://umfrage-2e9dc.firebaseio.com',
    projectId: 'umfrage-2e9dc',
    storageBucket: 'umfrage-2e9dc.appspot.com',
    messagingSenderId: '818638260032'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _finish_finish_component__WEBPACK_IMPORTED_MODULE_10__["FinishComponent"],
                _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_11__["NewQuestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/finish/finish.component.css":
/*!*********************************************!*\
  !*** ./src/app/finish/finish.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100%;\r\n  background-color: white;\r\n  padding-top: 10%;\r\n}\r\n#heading, #underheading, #button{\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n.row{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbutton {\r\n  padding: 10px 50px 10px 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuI2hlYWRpbmcsICN1bmRlcmhlYWRpbmcsICNidXR0b257XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnJvd3tcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/finish/finish.component.html":
/*!**********************************************!*\
  !*** ./src/app/finish/finish.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col\">\n    <div class=\"row justify-content-center\" id=\"heading\">\n      <h1>Die Umfrage ist abgeschlossen</h1>\n    </div>\n    <div class=\"row justify-content-center\" id=\"underheading\">\n      <h4>Danke, dass sie teilgenommen haben.</h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/finish/finish.component.ts":
/*!********************************************!*\
  !*** ./src/app/finish/finish.component.ts ***!
  \********************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishComponent = /** @class */ (function () {
    function FinishComponent() {
    }
    FinishComponent.prototype.ngOnInit = function () {
    };
    FinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish',
            template: __webpack_require__(/*! ./finish.component.html */ "./src/app/finish/finish.component.html"),
            styles: [__webpack_require__(/*! ./finish.component.css */ "./src/app/finish/finish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinishComponent);
    return FinishComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100%;\r\n  background-color: white;\r\n  padding-top: 10%;\r\n}\r\n#heading, #underheading, #button{\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n.row{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbutton {\r\n  padding: 10px 50px 10px 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbiNoZWFkaW5nLCAjdW5kZXJoZWFkaW5nLCAjYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col\">\n    <div class=\"row justify-content-center\" id=\"heading\">\n      <h1>Umfragentitel</h1>\n    </div>\n    <div class=\"row justify-content-center\" id=\"underheading\">\n      <h4>Umfragentitel</h4>\n    </div>\n    <div class=\"row justify-content-center\" id=\"button\">\n      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/questions\">Umfrage Starten</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-question/new-question.component.css":
/*!*********************************************************!*\
  !*** ./src/app/new-question/new-question.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100%;\r\n  background-color: white;\r\n  padding-top: 10%;\r\n}\r\n\r\n.row {\r\n  padding: 10px 10px 10px 10px;\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\ninput, select{\r\n  width: 100%\r\n}\r\n\r\n.color {\r\n  width: 100%;\r\n  height: 50px;\r\n  margin: 0 10px 2px 10px;\r\n}\r\n\r\n.card-body, .color-row {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXF1ZXN0aW9uL25ldy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL25ldy1xdWVzdGlvbi9uZXctcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDAgMTBweCAycHggMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSwgLmNvbG9yLXJvdyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/new-question/new-question.component.html":
/*!**********************************************************!*\
  !*** ./src/app/new-question/new-question.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row justify-content-center\">\n\n    <div class=\"col-md-6\">\n\n      <div class=\"row justify-content-center\" id=\"heading\">\n        <h1>Frage Hinzufügen</h1>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <select [(ngModel)]=\"type\">\n          <option value=\"frage\">frage</option>\n        </select>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <input type=\"string\" [(ngModel)]=\"question\" name=\"question\" placeholder=\"Frage...\">\n      </div>\n\n      <div class=\"row justify-content-center\">\n\n        <input type=\"text\" [(ngModel)]=\"color\" placeholder=\"Farbe...\">\n\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <button class=\"btn btn-primary\" (click)=\"addColor()\">Farbe hinzufügen</button>\n      </div>\n\n      <div class=\"row color-row\" *ngFor=\"let c of colors\">\n        <div class=\"color\" [ngStyle]=\"{'backgroundColor': c}\"></div>\n      </div>\n\n      <div class=\"row justify-content-center\">\n        <button class=\"btn btn-primary\" (click)=\"uploadQuestion()\">Hinzufügen</button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/new-question/new-question.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-question/new-question.component.ts ***!
  \********************************************************/
/*! exports provided: NewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuestionComponent", function() { return NewQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewQuestionComponent = /** @class */ (function () {
    function NewQuestionComponent() {
        this.question = '';
        this.type = '';
        this.color = '';
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        this.colors = [];
    };
    NewQuestionComponent.prototype.addColor = function () {
        if (this.color === '') {
        }
        else {
            this.colors.push(this.color);
            this.color = '';
        }
    };
    NewQuestionComponent.prototype.uploadQuestion = function () {
        if (this.question !== '' && this.type !== '' && this.color.length !== 0) {
            console.log(this.type);
        }
    };
    NewQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-question',
            template: __webpack_require__(/*! ./new-question.component.html */ "./src/app/new-question/new-question.component.html"),
            styles: [__webpack_require__(/*! ./new-question.component.css */ "./src/app/new-question/new-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  height: 100%;\r\n  background-color: white;\r\n  padding-top: 10%;\r\n}\r\n\r\n.row{\r\n  padding: 10px 10px 10px 10px;\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  padding: 10px 50px 10px 50px;\r\n}\r\n\r\n.color-button{\r\n  padding: 0;\r\n  margin: 5px;\r\n  height: 150px;\r\n  width: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcclxufVxyXG5cclxuLmNvbG9yLWJ1dHRvbntcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"current==0\">\n    <div class=\"row justify-content-center\">\n      <h1>Geschlecht auswählen</h1>\n    </div>\n    <div class=\"row justify-content-center\">\n      <button (click)=\"onButton('m')\">Männlich</button>\n      <button (click)=\"onButton('f')\">Weiblich</button>\n      <button (click)=\"onButton('d')\">Divers</button>\n    </div>\n  </div>\n  <div *ngFor=\"let q of questions | async; let i = index\">\n    <div *ngIf=\"i == current && current > 0\">\n      <div class=\"row justify-content-center\">\n        <h4>Anleitung</h4>\n      </div>\n      <div class=\"row justify-content-center\">\n        <h1>{{q.question}}</h1>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div>\n          <audio controls>\n            <source src=\"{{q.music}}\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div *ngFor=\"let c of q.colors\">\n          <button class=\"color-button\" [ngStyle]=\"{'backgroundColor': c}\" (click)=\"onButton(c)\"></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);




var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router, afs) {
        this.router = router;
        this.afs = afs;
        this.max = 0;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current = 0;
        this.questionCols = this.afs.collection('Questions');
        this.questions = this.questionCols.valueChanges();
        this.answers = new Array();
        this.questions.subscribe(function (val) { return _this.max = val.length; });
    };
    QuestionsComponent.prototype.onButton = function (color) {
        this.answers.push(color);
        if (this.current < this.max - 1) {
            this.current++;
        }
        else {
            this.uploadAnswers();
            this.router.navigateByUrl('/finish');
        }
    };
    QuestionsComponent.prototype.uploadAnswers = function () {
        this.afs.collection('Answers').add({ 'answers': this.answers });
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kalli\Documents\angular_survey\survey\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map