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
/* harmony import */ var _question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-editor/question-editor.component */ "./src/app/question-editor/question-editor.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _question_end_question_end_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-end/question-end.component */ "./src/app/question-end/question-end.component.ts");
/* harmony import */ var _question_results_question_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-results/question-results.component */ "./src/app/question-results/question-results.component.ts");








var routes = [
    { path: 'editor', component: _question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_3__["QuestionEditorComponent"] },
    { path: 'questions', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'end', component: _question_end_question_end_component__WEBPACK_IMPORTED_MODULE_6__["QuestionEndComponent"] },
    { path: 'result', component: _question_results_question_results_component__WEBPACK_IMPORTED_MODULE_7__["QuestionResultsComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
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
        this.title = 'survey';
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
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/question-list/question-list.component.ts");
/* harmony import */ var _questions_new_questions_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-new/questions-new.component */ "./src/app/questions-new/questions-new.component.ts");
/* harmony import */ var _shared_questions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/questions.service */ "./src/app/shared/questions.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question-editor/question-editor.component */ "./src/app/question-editor/question-editor.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _question_end_question_end_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question-end/question-end.component */ "./src/app/question-end/question-end.component.ts");
/* harmony import */ var _question_results_question_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./question-results/question-results.component */ "./src/app/question-results/question-results.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__["QuestionListComponent"],
                _questions_new_questions_new_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsNewComponent"],
                _question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_12__["QuestionEditorComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_14__["QuestionsComponent"],
                _question_end_question_end_component__WEBPACK_IMPORTED_MODULE_15__["QuestionEndComponent"],
                _question_results_question_results_component__WEBPACK_IMPORTED_MODULE_16__["QuestionResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_shared_questions_service__WEBPACK_IMPORTED_MODULE_7__["QuestionsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background: white;\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-end\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/result\" routerLinkActive=\"active\">Ergebnisse</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/editor\" routerLinkActive=\"active\">Fragen Editor</a>\n  </li>\n</ul>\n<div class=\"jumbotron justify-content-center\">\n  <h1 class=\"text-center\">Umfragenname</h1>\n  <p class=\"text-center\">Beschreibung</p>\n  <hr class=\"my-4\">\n  <div class=\"row justify-content-center\">\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/questions\" role=\"button\">Umfrage Starten</a>\n  </div>\n</div>\n"

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

/***/ "./src/app/question-editor/question-editor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/question-editor/question-editor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWVkaXRvci9xdWVzdGlvbi1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/question-editor/question-editor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/question-editor/question-editor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-end\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Zurück</a>\n  </li>\n</ul>\n<div class=\"container\">\n  <div class=\"row\">\n    <app-questions-new class=\"col-6\"></app-questions-new>\n    <app-question-list class=\"col-6\"></app-question-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-editor/question-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-editor/question-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditorComponent", function() { return QuestionEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionEditorComponent = /** @class */ (function () {
    function QuestionEditorComponent() {
    }
    QuestionEditorComponent.prototype.ngOnInit = function () {
    };
    QuestionEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-editor',
            template: __webpack_require__(/*! ./question-editor.component.html */ "./src/app/question-editor/question-editor.component.html"),
            styles: [__webpack_require__(/*! ./question-editor.component.css */ "./src/app/question-editor/question-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionEditorComponent);
    return QuestionEditorComponent;
}());



/***/ }),

/***/ "./src/app/question-end/question-end.component.css":
/*!*********************************************************!*\
  !*** ./src/app/question-end/question-end.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background: white;\r\n  margin-top: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tZW5kL3F1ZXN0aW9uLWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1lbmQvcXVlc3Rpb24tZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/question-end/question-end.component.html":
/*!**********************************************************!*\
  !*** ./src/app/question-end/question-end.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-end\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Zurück</a>\n  </li>\n</ul>\n<div class=\"jumbotron justify-content-center\">\n  <h1 class=\"text-center\">Vielen Dank, dass Sie an der Umfrage teilgenommen haben!</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/question-end/question-end.component.ts":
/*!********************************************************!*\
  !*** ./src/app/question-end/question-end.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEndComponent", function() { return QuestionEndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionEndComponent = /** @class */ (function () {
    function QuestionEndComponent() {
    }
    QuestionEndComponent.prototype.ngOnInit = function () {
    };
    QuestionEndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-end',
            template: __webpack_require__(/*! ./question-end.component.html */ "./src/app/question-end/question-end.component.html"),
            styles: [__webpack_require__(/*! ./question-end.component.css */ "./src/app/question-end/question-end.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionEndComponent);
    return QuestionEndComponent;
}());



/***/ }),

/***/ "./src/app/question-list/question-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-list/question-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/question-list/question-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-list/question-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"text-center\">Fragenliste</h1>\n</div>\n<div class=\"card\" *ngFor=\"let question of questions\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        {{question.payload.doc.data().question}}\n      </div>\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <button class=\"btn btn-primary\" (click)=\"moveUp(question)\">/\\</button>\n          </div>\n          <div class=\"col-4\">\n            <button class=\"btn btn-primary\" (click)=\"moveDown(question)\">\\/</button>\n          </div>\n          <div class=\"col-4\">\n            <button class=\"btn btn-danger\" (click)=\"deleteQuestion(question)\">X</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-content\">\n    <div class=\"row\">\n      <h6>Frage Optionen</h6>\n    </div>\n    <div class=\"row\" *ngIf=\"question.payload.doc.data().audio != ''\">\n      <audio controls>\n        <source src=\"assets/{{question.payload.doc.data().audio}}\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n      </audio>\n    </div>\n    <div class=\"row\" *ngIf=\"question.payload.doc.data().color != ''\">\n      <div class=\"col-12\" [ngStyle]=\"{'backgroundColor': question.payload.doc.data().color}\">{{question.payload.doc.data().color}}</div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <h6>Antworten:</h6>\n    </div>\n    <div class=\"row\" *ngFor=\"let answer of question.payload.doc.data().answers\">\n      <div class=\"col-12\">{{answer}}</div>\n    </div>\n    <div class=\"row\" *ngFor=\"let color of question.payload.doc.data().colors\">\n      <div class=\"col-12\" [ngStyle]=\"{'backgroundColor': color}\">{{color}}</div>\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/question-list/question-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-list/question-list.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/questions.service */ "./src/app/shared/questions.service.ts");



var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(questionService) {
        this.questionService = questionService;
        this.questions = [];
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (res) {
            _this.questions = res;
            _this.questions.sort(_this.sortArray);
        });
    };
    QuestionListComponent.prototype.moveUp = function (question) {
        var i = this.questions.indexOf(question);
        if (i > 0) {
            var up = this.questions[i - 1];
            var down = this.questions[i];
            this.questionService.updateQuestion(up, down, i);
        }
    };
    QuestionListComponent.prototype.moveDown = function (question) {
        var i = this.questions.indexOf(question);
        if (i < this.questions.length - 1) {
            var up = this.questions[i];
            var down = this.questions[i + 1];
            this.questionService.updateQuestion(up, down, i + 1);
        }
    };
    QuestionListComponent.prototype.deleteQuestion = function (question) {
        this.questionService.deleteQUestion(question);
    };
    QuestionListComponent.prototype.sortArray = function (a, b) {
        if (a.payload.doc.data().pos > b.payload.doc.data().pos) {
            return 1;
        }
        if (a.payload.doc.data().pos < b.payload.doc.data().pos) {
            return -1;
        }
        if (a.payload.doc.data().pos === b.payload.doc.data().pos) {
            return 0;
        }
    };
    QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/question-list/question-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/question-results/question-results.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/question-results/question-results.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 50px;\r\n}\r\ntable, th, td {\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tcmVzdWx0cy9xdWVzdGlvbi1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi1yZXN1bHRzL3F1ZXN0aW9uLXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG50YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/question-results/question-results.component.html":
/*!******************************************************************!*\
  !*** ./src/app/question-results/question-results.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-end\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Zurück</a>\n  </li>\n</ul>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Alle Ergebnisse:</h1>\n    </div>\n    <div class=\"col\">\n      <button class=\"btn btn-primary\"(click)=\"formatAnswers()\">Herunterladen</button>\n    </div>\n  </div>\n  <table style=\"width:100%\">\n    <tr>\n      <th>ID / Frage</th>\n      <th *ngFor=\"let a of answers[0].payload.doc.data().answers\">{{a.question}}</th>\n    </tr>\n    <tr *ngFor=\"let row of answers; index as i\">\n      <td>{{i}}</td>\n      <td *ngFor=\"let a of row.payload.doc.data().answers\">{{a.answer}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/question-results/question-results.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/question-results/question-results.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionResultsComponent", function() { return QuestionResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/questions.service */ "./src/app/shared/questions.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);




var QuestionResultsComponent = /** @class */ (function () {
    function QuestionResultsComponent(service) {
        this.service = service;
        this.answers = [];
    }
    QuestionResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAnswers().subscribe(function (val) {
            _this.answers = val;
        });
    };
    QuestionResultsComponent.prototype.formatAnswers = function () {
        var a = [];
        var i = 0;
        for (var _i = 0, _a = this.answers; _i < _a.length; _i++) {
            var rows = _a[_i];
            var row = [];
            row.push(i);
            i++;
            for (var _b = 0, _c = rows.payload.doc.data().answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                row.push(answer.answer);
            }
            a.push(row);
        }
        this.downloadFile(a);
    };
    QuestionResultsComponent.prototype.downloadFile = function (data) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(';'); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'Results.csv');
    };
    QuestionResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-results',
            template: __webpack_require__(/*! ./question-results.component.html */ "./src/app/question-results/question-results.component.html"),
            styles: [__webpack_require__(/*! ./question-results.component.css */ "./src/app/question-results/question-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], QuestionResultsComponent);
    return QuestionResultsComponent;
}());



/***/ }),

/***/ "./src/app/questions-new/questions-new.component.css":
/*!***********************************************************!*\
  !*** ./src/app/questions-new/questions-new.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy1uZXcvcXVlc3Rpb25zLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/questions-new/questions-new.component.html":
/*!************************************************************!*\
  !*** ./src/app/questions-new/questions-new.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"text-center\">Neue Frage</h1>\n</div>\n<form [formGroup]=\"this.questionService.form\">\n  <!-- Questions -->\n  <div class=\"row\">\n    <h4 class=\"text-center\">Frage Optionen</h4>\n  </div>\n  <div class=\"row\">\n    <input placeholder=\"Fragestellung\"\n           formControlName=\"question\"\n           type=\"text\"\n           class=\"col-12\">\n  </div>\n  <div class=\"row\">\n    <input placeholder=\"Audiodatei\"\n           formControlName=\"audio\"\n           type=\"text\"\n           class=\"col-12\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      Farbe:\n    </div>\n    <input placeholder=\"Farbe\"\n           formControlName=\"color\"\n           type=\"color\"\n           name=\"color\"\n           class=\"col-md-6\">\n  </div>\n  <!-- Answer Options -->\n  <div class=\"row\">\n    <h4 class=\"text-center\">Antwort Optionen</h4>\n  </div>\n  <div class=\"row\">\n    <input placeholder=\"Antwort\"\n           [(ngModel)]=\"answer\"\n           [ngModelOptions]=\"{standalone: true}\"\n           type=\"text\"\n           name=\"answer\"\n           class=\"col-md-6\">\n    <button class=\"btn btn-primary col-md-6\"\n            (click)=\"addAnswer()\">\n      Antwort Hinzufügen\n    </button>\n  </div>\n  <div class=\"row\">\n    <input placeholder=\"Farbe\"\n           [(ngModel)]=\"color\"\n           [ngModelOptions]=\"{standalone: true}\"\n           type=\"color\"\n           class=\"col-md-6\">\n    <button class=\"btn btn-primary col-md-6\"\n            (click)=\"addColor()\">\n      Farbe Hinzufügen\n    </button>\n  </div>\n\n  <!-- Answers -->\n  <div class=\"row\">\n    <h4 class=\"text-center\">Antworten</h4>\n  </div>\n  <div class=\"row\">\n    <h6 class=\"text-center\">Textantworten:</h6>\n  </div>\n  <div class=\"row\" *ngFor=\"let answer of answers\">\n    <div class=\"col-11\"> {{ answer }} </div>\n    <button class=\"btn btn-danger col-1\" (click)=\"removeAnswer(answer)\">X</button>\n  </div>\n  <div class=\"row\">\n    <h6 class=\"text-center\">Farbantworten:</h6>\n  </div>\n\n  <div class=\"row\" *ngFor=\"let color of colors\">\n    <div class=\"col-11\" [ngStyle]=\"{'backgroundColor': color}\"></div>\n    <button class=\"btn btn-danger col-1\" (click)=\"removeColor(color)\">X</button>\n  </div>\n\n  <button\n    class=\"btn btn-primary col-12\"\n    (click)=\"onSubmit()\">\n    Hinzufügen\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/questions-new/questions-new.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questions-new/questions-new.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsNewComponent", function() { return QuestionsNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/questions.service */ "./src/app/shared/questions.service.ts");



var QuestionsNewComponent = /** @class */ (function () {
    function QuestionsNewComponent(questionService) {
        this.questionService = questionService;
        this.answer = '';
        this.color = '';
        this.answers = [];
        this.colors = [];
        this.pos = 0;
    }
    QuestionsNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (val) {
            _this.pos = val.length;
        });
    };
    QuestionsNewComponent.prototype.addAnswer = function () {
        if (this.answer !== '') {
            this.answers.push(this.answer);
        }
    };
    QuestionsNewComponent.prototype.addColor = function () {
        if (this.color !== '') {
            this.colors.push(this.color);
        }
    };
    QuestionsNewComponent.prototype.removeAnswer = function (answer) {
        var index = this.answers.indexOf(answer);
        if (index > -1) {
            this.answers.splice(index, 1);
        }
    };
    QuestionsNewComponent.prototype.removeColor = function (color) {
        var index = this.colors.indexOf(color);
        if (index > -1) {
            this.colors.splice(index, 1);
        }
    };
    QuestionsNewComponent.prototype.onSubmit = function () {
        this.questionService.form.value.colors = this.colors;
        this.questionService.form.value.answers = this.answers;
        this.questionService.form.value.pos = this.pos;
        var data = this.questionService.form.value;
        this.questionService.createQuestion(data)
            .then(function (res) {
            console.log('Upload');
        });
    };
    QuestionsNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions-new',
            template: __webpack_require__(/*! ./questions-new.component.html */ "./src/app/questions-new/questions-new.component.html"),
            styles: [__webpack_require__(/*! ./questions-new.component.css */ "./src/app/questions-new/questions-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], QuestionsNewComponent);
    return QuestionsNewComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  padding: 5% 0 0 0;\r\n}\r\n.color-button{\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 2px;\r\n}\r\n.question-button{\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiA1JSAwIDAgMDtcclxufVxyXG4uY29sb3ItYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbi5xdWVzdGlvbi1idXR0b257XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\">\n  <div *ngFor=\"let q of questions\">\n    <div class=\"row\">\n      <div class=\"col-2\"></div>\n      <div class=\"col-8\" *ngIf=\"q.payload.doc.data().pos == currentQuestion\">\n        <h1 class=\"text-center\">\n          {{q.payload.doc.data().question}}\n        </h1>\n        <div class=\"row\" *ngIf=\"q.payload.doc.data().audio != ''\">\n          <audio controls>\n            <source src=\"assets/{{q.payload.doc.data().audio}}\" type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n        <div class=\"row\" *ngIf=\"q.payload.doc.data().color != ''\">\n          <div class=\"col-12\"\n               [ngStyle]=\"{'backgroundColor': q.payload.doc.data().color}\">{{q.payload.doc.data().color}}</div>\n        </div>\n        <div class=\"row\">\n          <h5>Antworten:</h5>\n        </div>\n        <div *ngIf=\"q.payload.doc.data().colors\" class=\"row justify-content-center\">\n          <div *ngFor=\"let c of q.payload.doc.data().colors\" class=\"btn color-button\" (click)=\"addAnswer(c)\"\n               [ngStyle]=\"{'backgroundColor': c}\"></div>\n        </div>\n        <div *ngIf=\"q.payload.doc.data().answers\">\n          <div class=\"row\" *ngFor=\"let a of q.payload.doc.data().answers\">\n            <button class=\"btn btn-primary col-12 question-button\" (click)=\"addAnswer(a)\">{{a}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

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
/* harmony import */ var _shared_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/questions.service */ "./src/app/shared/questions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.currentQuestion = 0;
        this.questions = [];
        this.answers = [];
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getQuestions().subscribe(function (val) {
            console.log(val);
            _this.questions = val;
            _this.questions.sort(_this.sortArray);
        });
    };
    QuestionsComponent.prototype.addAnswer = function (a) {
        var answer = {
            question: this.currentQuestion,
            answer: a
        };
        this.answers.push(answer);
        this.currentQuestion++;
        if (this.currentQuestion === this.questions.length) {
            this.uploadAnswers();
            this.router.navigateByUrl('/end');
        }
    };
    QuestionsComponent.prototype.uploadAnswers = function () {
        this.service.uploadAnswers(this.answers).then(function (val) {
            console.log(val);
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    QuestionsComponent.prototype.sortArray = function (a, b) {
        if (a.payload.doc.data().pos > b.payload.doc.data().pos) {
            return 1;
        }
        if (a.payload.doc.data().pos < b.payload.doc.data().pos) {
            return -1;
        }
        if (a.payload.doc.data().pos === b.payload.doc.data().pos) {
            return 0;
        }
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/questions.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/questions.service.ts ***!
  \*********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var QuestionsService = /** @class */ (function () {
    function QuestionsService(firestore) {
        this.firestore = firestore;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            //Questions
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            audio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            //Answers
            colors: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    QuestionsService.prototype.createQuestion = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestore.collection('Questions').add(data).then(function (res) {
            }, function (err) { return reject(err); });
        });
    };
    QuestionsService.prototype.getQuestions = function () {
        return this.firestore.collection('Questions').snapshotChanges();
    };
    QuestionsService.prototype.updateQuestion = function (up, down, i) {
        this.firestore.collection('Questions').doc(up.payload.doc.id).set({ pos: i }, { merge: true });
        this.firestore.collection('Questions').doc(down.payload.doc.id).set({ pos: i - 1 }, { merge: true });
    };
    QuestionsService.prototype.deleteQUestion = function (data) {
        return this.firestore.collection('Questions').doc(data.payload.doc.id).delete();
    };
    QuestionsService.prototype.uploadAnswers = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestore.collection('Answers').add({ answers: data }).then(function (res) {
            }, function (err) { return reject(err); });
        });
    };
    QuestionsService.prototype.getAnswers = function () {
        return this.firestore.collection('Answers').snapshotChanges();
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], QuestionsService);
    return QuestionsService;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCCeg260YXcYa6K1PZKdKMVYcYU8ed1dNY',
        authDomain: 'umfrage-2e9dc.firebaseapp.com',
        databaseURL: 'https://umfrage-2e9dc.firebaseio.com',
        projectId: 'umfrage-2e9dc',
        storageBucket: 'umfrage-2e9dc.appspot.com',
        messagingSenderId: '818638260032',
        appId: '1:818638260032:web:a1fe1f65834fff5a'
    }
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

module.exports = __webpack_require__(/*! F:\survey\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map