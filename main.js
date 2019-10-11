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
/* harmony import */ var _pages_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inbound/inbound.component */ "./src/app/pages/inbound/inbound.component.ts");
/* harmony import */ var _pages_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/outbound/outbound.component */ "./src/app/pages/outbound/outbound.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_inbound_new_inbound_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inbound-new/inbound-new.component */ "./src/app/pages/inbound-new/inbound-new.component.ts");
/* harmony import */ var _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/scan/scan.component */ "./src/app/pages/scan/scan.component.ts");








var routes = [{
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "home",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "inbound",
        component: _pages_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_3__["InboundComponent"]
    },
    {
        path: "inbound/new",
        component: _pages_inbound_new_inbound_new_component__WEBPACK_IMPORTED_MODULE_6__["InboundNewComponent"]
    },
    {
        path: "scan/:page_name",
        component: _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_7__["ScanComponent"]
    },
    {
        path: "outbound",
        component: _pages_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_4__["OutboundComponent"]
    }];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Barcode-Ag';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/menu/menu.component */ "./src/app/component/menu/menu.component.ts");
/* harmony import */ var _pages_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/inbound/inbound.component */ "./src/app/pages/inbound/inbound.component.ts");
/* harmony import */ var _pages_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/outbound/outbound.component */ "./src/app/pages/outbound/outbound.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_inbound_new_inbound_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/inbound-new/inbound-new.component */ "./src/app/pages/inbound-new/inbound-new.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/scan/scan.component */ "./src/app/pages/scan/scan.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _pages_inbound_inbound_component__WEBPACK_IMPORTED_MODULE_6__["InboundComponent"],
                _pages_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_7__["OutboundComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_inbound_new_inbound_new_component__WEBPACK_IMPORTED_MODULE_9__["InboundNewComponent"],
                _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_11__["ScanComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/menu/menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/menu/menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Application</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\"routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/inbound\">Inbound</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/outbound\">Outbound</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/menu/menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/menu/menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.menu ul {\n  list-style: none;\n  margin: 0px; }\n  nav.menu ul li {\n    display: inline;\n    padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lbnUvRjpcXEdJVFxcUHJvamVjdFxcQnJhZFxcQmFyY29kZS1OZy9zcmNcXGFwcFxcY29tcG9uZW50XFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsZ0JBQWU7RUFDZixXQUFXLEVBQUE7RUFKbkI7SUFPWSxlQUFlO0lBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdi5tZW51e1xyXG4gICAgdWxcclxuICAgIHtcclxuICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbGlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/component/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div><button routerLink=\"/inbound\" class=\"btn btn-xl btn-primary\">Inbound</button></div>\n  <br>\n  <div><button routerLink=\"/outbound\" class=\"btn btn-xl btn-secondary\">Outbound</button></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/inbound-new/inbound-new.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/inbound-new/inbound-new.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/inbound-new/inbound-new.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/inbound-new/inbound-new.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm91bmQtbmV3L2luYm91bmQtbmV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/inbound-new/inbound-new.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/inbound-new/inbound-new.component.ts ***!
  \************************************************************/
/*! exports provided: InboundNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundNewComponent", function() { return InboundNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InboundNewComponent = /** @class */ (function () {
    function InboundNewComponent() {
    }
    InboundNewComponent.prototype.ngOnInit = function () {
    };
    InboundNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-new',
            template: __webpack_require__(/*! ./inbound-new.component.html */ "./src/app/pages/inbound-new/inbound-new.component.html"),
            styles: [__webpack_require__(/*! ./inbound-new.component.scss */ "./src/app/pages/inbound-new/inbound-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InboundNewComponent);
    return InboundNewComponent;
}());



/***/ }),

/***/ "./src/app/pages/inbound/inbound.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/inbound/inbound.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" routerLink=\"/scan/inbound\">Scan</button>\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <button class=\"btn btn-primary\" routerLink=\"/inbound/new\">New</button>\n        <div class=\"mt-3\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n\n              <table class=\"table table-striped table-sm table-centered mb-0\">\n                <thead>\n                  <tr>\n                    <th>Id</th>\n                    <th *ngFor=\"let item of formValue\">{{item.name}}</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of data; let i=index\">\n                    <td>{{i+1}}</td>\n                    <td>\n                      <h5 class=\"font-15 mb-1 font-weight-normal\">{{item.name}}</h5>\n                    </td>\n                    <td>\n                      {{item.epa_id_number}}\n                    </td>\n                    <td>\n                      {{item.manifest_no}}\n                    </td>\n                    <td>\n                       {{item.profile_no}}\n                     </td>\n                    <td>{{item.waste_type}}</td>\n                    <td>{{item.no_of_container}}</td>\n                    <td>{{item.type}}</td>\n                    <td>{{item.total_gallons}}</td>\n                    <td>{{item.total_lbs}}</td>\n                    <td>\n                      <a (click)=\"getData(i)\" data-toggle=\"modal\" data-target=\"#BoxModal\"\n                        class=\"btn btn-primary btn-xs\"> <i class=\"mdi mdi-eye\"></i> Edit</a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div> <!-- end table-responsive-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/inbound/inbound.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/inbound/inbound.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm91bmQvaW5ib3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/inbound/inbound.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/inbound/inbound.component.ts ***!
  \****************************************************/
/*! exports provided: InboundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundComponent", function() { return InboundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InboundComponent = /** @class */ (function () {
    function InboundComponent() {
        this.data = [{
                "name": "World Oil Environmental Services",
                "epa_id_number": "CAD028277036",
                "manifest_no": "CH00109",
                "profile_no": "",
                "waste_type": "Drained Used Oil Filters",
                "no_of_container": "71",
                "type": "DM",
                "total_gallons": "",
                "total_lbs": "35,000",
            },
            {
                "name": "Guidos Auto Precision",
                "epa_id_number": "CAL000386161",
                "manifest_no": "019150080JJK",
                "profile_no": "",
                "waste_type": "Oily Paper, Plastic Filters, Debris",
                "no_of_container": "1",
                "type": "DM",
                "total_gallons": "",
                "total_lbs": "100",
            },
            {
                "name": "Sutter Home Vineyards Inc",
                "epa_id_number": "CAL000171777",
                "manifest_no": "019150099JJK",
                "profile_no": "",
                "waste_type": "Oily Solids",
                "no_of_container": "1",
                "type": "DM",
                "total_gallons": "",
                "total_lbs": "400",
            }];
        this.formValue = [{
                "name": "Generator's Name",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "EPA ID Number",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "Manifest Number",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "Profile Number",
                "type": "number",
                "rule": "required",
                "value": ""
            }, {
                "name": "Waste Type",
                "type": "text",
                "rule": "required",
                "value": ""
            },
            {
                "name": "Number of Containers",
                "type": "number",
                "rule": "required",
                "value": ""
            },
            {
                "name": "Type",
                "type": "select",
                "rule": "required",
                "value": ["DM", "BA", "CM"]
            },
            {
                "name": "Total Gallons",
                "type": "number",
                "rule": "required",
                "value": ""
            },
            {
                "name": "Total Lbs",
                "type": "number",
                "rule": "required",
                "value": ""
            }
        ];
    }
    InboundComponent.prototype.ngOnInit = function () {
    };
    InboundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound',
            template: __webpack_require__(/*! ./inbound.component.html */ "./src/app/pages/inbound/inbound.component.html"),
            styles: [__webpack_require__(/*! ./inbound.component.scss */ "./src/app/pages/inbound/inbound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InboundComponent);
    return InboundComponent;
}());



/***/ }),

/***/ "./src/app/pages/outbound/outbound.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/outbound/outbound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  outbound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/outbound/outbound.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/outbound/outbound.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL291dGJvdW5kL291dGJvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/outbound/outbound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/outbound/outbound.component.ts ***!
  \******************************************************/
/*! exports provided: OutboundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundComponent", function() { return OutboundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutboundComponent = /** @class */ (function () {
    function OutboundComponent() {
    }
    OutboundComponent.prototype.ngOnInit = function () {
    };
    OutboundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outbound',
            template: __webpack_require__(/*! ./outbound.component.html */ "./src/app/pages/outbound/outbound.component.html"),
            styles: [__webpack_require__(/*! ./outbound.component.scss */ "./src/app/pages/outbound/outbound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OutboundComponent);
    return OutboundComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/scan/scan.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/scan/scan.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>{{output}}</div>\n\n<div id=\"barcode\"></div>"

/***/ }),

/***/ "./src/app/pages/scan/scan.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/scan/scan.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/scan/scan.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/scan/scan.component.ts ***!
  \**********************************************/
/*! exports provided: ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quagga */ "./node_modules/quagga/dist/quagga.min.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_2__);



var ScanComponent = /** @class */ (function () {
    function ScanComponent() {
        this.output = "Scanning...";
    }
    ScanComponent.prototype.ngOnInit = function () {
        var ths = this;
        quagga__WEBPACK_IMPORTED_MODULE_2___default.a.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#barcode') // Or '#yourElement' (optional)
            },
            decoder: {
                readers: ["code_128_reader", "ean_reader"]
                //,"ean_reader", "ean_8_reader", "code_39_reader","code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"] 
            }
        }, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Initialization finished. Ready to start");
            quagga__WEBPACK_IMPORTED_MODULE_2___default.a.start();
        });
        var last_code_arr = [];
        quagga__WEBPACK_IMPORTED_MODULE_2___default.a.onDetected(function (result) {
            var last_code = result.codeResult.code;
            last_code_arr.push(last_code);
            console.log(last_code);
            if (last_code_arr.length > 20) {
                var code = ths.order_by_occurrence(last_code_arr)[0];
                last_code_arr = [];
                //Quagga.stop();
                console.log(ths);
                console.log("Code Detected: " + code);
                ths.output = "Code Detected: " + code;
            }
        });
    };
    ScanComponent.prototype.order_by_occurrence = function (arr) {
        console.log(arr);
        var counts = {};
        arr.forEach(function (value) {
            if (!counts[value]) {
                counts[value] = 0;
            }
            counts[value]++;
        });
        return Object.keys(counts).sort(function (curKey, nextKey) {
            if (counts[curKey] < counts[nextKey])
                return counts[curKey];
        });
    };
    ScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scan',
            template: __webpack_require__(/*! ./scan.component.html */ "./src/app/pages/scan/scan.component.html"),
            styles: [__webpack_require__(/*! ./scan.component.scss */ "./src/app/pages/scan/scan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScanComponent);
    return ScanComponent;
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

module.exports = __webpack_require__(/*! F:\GIT\Project\Brad\Barcode-Ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map