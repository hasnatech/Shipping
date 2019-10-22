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
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/product-form/product-form.component */ "./src/app/pages/product-form/product-form.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _pages_outbound_form_outbound_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/outbound-form/outbound-form.component */ "./src/app/pages/outbound-form/outbound-form.component.ts");












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
        path: "inbound/form",
        component: _pages_inbound_new_inbound_new_component__WEBPACK_IMPORTED_MODULE_6__["InboundNewComponent"]
    },
    {
        path: "product/list",
        component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"]
    },
    {
        path: "product/form",
        component: _pages_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]
    },
    {
        path: "product/form/:id",
        component: _pages_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]
    },
    {
        path: "scan/:page_name",
        component: _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_7__["ScanComponent"]
    },
    {
        path: "product",
        component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]
    },
    {
        path: "outbound",
        component: _pages_outbound_outbound_component__WEBPACK_IMPORTED_MODULE_4__["OutboundComponent"]
    },
    {
        path: "outbound/form",
        component: _pages_outbound_form_outbound_form_component__WEBPACK_IMPORTED_MODULE_11__["OutboundFormComponent"]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<div class=\"page\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _pages_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/product-form/product-form.component */ "./src/app/pages/product-form/product-form.component.ts");
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ "./src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var _pages_outbound_form_outbound_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/outbound-form/outbound-form.component */ "./src/app/pages/outbound-form/outbound-form.component.ts");















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
                _pages_scan_scan_component__WEBPACK_IMPORTED_MODULE_11__["ScanComponent"],
                _pages_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductFormComponent"],
                _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _pages_outbound_form_outbound_form_component__WEBPACK_IMPORTED_MODULE_14__["OutboundFormComponent"]
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Application</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/inbound\" routerLinkActive=\"active\">Inbound</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/outbound\" routerLinkActive=\"active\">Outbound</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/product/list\" routerLinkActive=\"active\">Product</a>\n        </li>\n    </ul>\n\n  </div>\n</nav>\n"

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

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2 border-right\">\r\n      <h5>UNIFORM HAZARDOUS WASTE MAINFEST</h5>\r\n    </div>\r\n    <div class=\"col-sm-2 border-right\">\r\n      <p>1.Generator ID Number</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"CAL000092413\">\r\n    </div>\r\n    <div class=\"col-sm-2 border-right\">\r\n      <p>page 1 of</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"1\">\r\n    </div>\r\n    <div class=\"col-sm-3 border-right\">\r\n      <p>3.Emaegency Response Phone</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"(800) 424-9300\">\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <p>4.Manifest Tracking Number</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"020376270  JJK\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <p>Generator Name and Mailing Address</p>\r\n      <textarea class=\"form-control\" row=\"3\"\r\n        cols=\"50\">IOLCHANGERS &#13;&#10;198 VALACIA ST SAN FRANCISCO CA&#13;&#10;94103</textarea>\r\n      <p>Generator's Phone <input type=\"text\" class=\"form-control\" value=\"415 487 1740\"></p>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <p>Generator's site Address(if different than mailing address</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=col-sm-9>\r\n      <p>6.Transporter 1 Company Name</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"WORLD OIL ENVIRONMENTAL SERVICE\">\r\n    </div>\r\n    <div class=col-sm-3>\r\n      <p>U.S EPA ID Number</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"CAD028277036\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=col-sm-9>\r\n      <p>7.Transporter 2 Company Name</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"WORLDWIDE RECOVERY SYSTEM INC\">\r\n    </div>\r\n    <div class=col-sm-3>\r\n      <p>U.S EPA ID Number</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"CAR000175422\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=col-sm-9>\r\n      <p>8.Designated Facility Name and Site Address</p>\r\n      <textarea class=\"form-control\" row=\"3\"\r\n        cols=\"50\">YES MANAGEMENT INC &#13;&#10;6500 US HIGHWAY 95&#13;&#10;YUMA              AZ       85365</textarea>\r\n      <p>Facility's Phone</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"(928)344-9828\">\r\n\r\n    </div>\r\n    <div class=col-sm-3>\r\n      <p>U.S EPA ID Number</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"AZR000521146\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <table class=\"table table-bordered\">\r\n      <tr>\r\n        <th>9a.HM</th>\r\n        <th>9b. U.S DOT Description(including proper shipping Name,Hazard Class,ID Number, and Packing Group(if any))\r\n        </th>\r\n        <th colspan=\"2\">10. Containers</th>\r\n        <th>11.Total Quantity</th>\r\n        <th>12 Unit Wt/Vol</th>\r\n        <th>13.Waste Codes</th>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td></td>\r\n        <td>NO.</td>\r\n        <td>Type</td>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let item of products; let i = index;\">\r\n        <td>{{i + 1}}</td>\r\n        <td>{{item.name}}</td>\r\n        <td>{{item.container_no}}</td>\r\n        <td>{{item.container_type}}</td>\r\n        <td>{{item.quantity}}</td>\r\n        <td></td>\r\n        <td>{{item.waste_code}}</td>\r\n        <td></td>\r\n      </tr>\r\n\r\n    </table>\r\n    <button class=\"btn btn-primary\" routerLink=\"/scan/inbound\">Scan</button>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <p>14.Special Handling Instructions and Additional Information</p>\r\n      <h4>EMERGENCY CONTACT : CHEMTREC 1-800-424-9300 WHOSE TERMINAL NAERG# 9B1 : 171 *PROFILE# 9B1 : 162623NRS<br>OILY\r\n        DEBRIS * APPROPRIATE PERSONAL PROTECTIVE EQUIPMENT</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"TRUCK 2030\"></div>\r\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"1-559 PM\"></div>\r\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"WO#543295\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div>\r\n        <h5 style='display:inline'>GENERATOR'S/OFFERORS CERTIFICATION :</h5>\r\n        <p style='display:inline'>I hereby declare that the content of this cosigment are fully and accurately described\r\n          above by the proper shipping name,and are classified,packeged,marketed and labeled/placarded and are in all\r\n          respect in proper codition for transport According to applicable International and national govermental\r\n          regulations.if export shipment and\r\n          I am the primary Exporter, i certify that the contents of this consigment conform to the terms of the attached\r\n          EPA acknow;edgement of Consent<br>I certify that the waste minimization statement identified in 40CFR 262.27\r\n          (a)(if i am a large quantity Generator) or (b)(if i am a small quantity Generator) is true.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <p>Generator's/Officer's printed/Type Name </p>\r\n      <input type=\"text\" class=\"form-control\" value=\"Jonte\">\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <p>Signature</p>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <p>Date</p>\r\n      <input type=\"text\" class=\"form-control\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <p>International Shipments</p>\r\n      <p>Transporter Signature (for exports only): </p>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <p> <input type=\"checkbox\">Import to U.S</p>\r\n\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <p> <input type=\"checkbox\">Export from U.S</p>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n      <p>Port of entry/exit:_________________________________</p>\r\n      <p>Dateleaving U.S:</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <p>17.Transporter Acknowledgement of Receipt of Materials</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <p>Transporter 1 Printed/Typed Name</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"RAWN GANGA\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p>Signature</p>\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <p>Date</p>\r\n      <input type=\"text\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <p>Transporter 2 Printed/Typed Name</p>\r\n      <input type=\"text\" class=\"form-control\" value=\"Paul D Mic Tarcsno Jk\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p>Signature</p>\r\n\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <p>Date</p>\r\n      <input type=\"text\" class=\"form-control\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <p>18.Discrepancy</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/inbound-new/inbound-new.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/inbound-new/inbound-new.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc; }\n\n.container {\n  border: 1px solid #ccc; }\n\n.table {\n  margin-bottom: 0rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ib3VuZC1uZXcvRjpcXEdJVFxcUHJvamVjdFxcQnJhZFxcQmFyY29kZS1OZy9zcmNcXGFwcFxccGFnZXNcXGluYm91bmQtbmV3XFxpbmJvdW5kLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFFSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm91bmQtbmV3L2luYm91bmQtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufSJdfQ== */"

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
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InboundNewComponent = /** @class */ (function () {
    function InboundNewComponent(service, route) {
        this.service = service;
        this.route = route;
        this.products = [];
    }
    InboundNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            if (data.product != null) {
                _this.products.push(_this.service.getProduct(data.product));
            }
        });
    };
    InboundNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound-new',
            template: __webpack_require__(/*! ./inbound-new.component.html */ "./src/app/pages/inbound-new/inbound-new.component.html"),
            styles: [__webpack_require__(/*! ./inbound-new.component.scss */ "./src/app/pages/inbound-new/inbound-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <button class=\"btn btn-primary\" routerLink=\"/inbound/form\">New</button>\n        <div class=\"mt-3\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <div class=\"hori_scroll\">\n                <table class=\"table table-striped table-sm table-centered mb-0\">\n                  <thead>\n                    <tr>\n                      <th>Id</th>\n                      <th *ngFor=\"let item of formValue\">{{item.name}}</th>\n                      <th></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of data; let i=index\">\n                      <td>{{i+1}}</td>\n                      <td>\n                        <h5 class=\"font-15 mb-1 font-weight-normal\">{{item.name}}</h5>\n                      </td>\n                      <td>\n                        {{item.epa_id_number}}\n                      </td>\n                      <td>\n                        {{item.manifest_no}}\n                      </td>\n                      <td>\n                        {{item.profile_no}}\n                      </td>\n                      <td>{{item.waste_type}}</td>\n                      <td>{{item.no_of_container}}</td>\n                      <td>{{item.type}}</td>\n                      <td>{{item.total_gallons}}</td>\n                      <td>{{item.total_lbs}}</td>\n                      <td>\n                        <a (click)=\"getData(i)\" data-toggle=\"modal\" data-target=\"#BoxModal\"\n                          class=\"btn btn-primary btn-xs\"> <i class=\"mdi mdi-eye\"></i> Edit</a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div> <!-- end table-responsive-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var InboundComponent = /** @class */ (function () {
    function InboundComponent(service) {
        this.service = service;
    }
    InboundComponent.prototype.ngOnInit = function () {
        this.data = this.service.getInbounds();
        this.formValue = this.service.inbound_form;
    };
    InboundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbound',
            template: __webpack_require__(/*! ./inbound.component.html */ "./src/app/pages/inbound/inbound.component.html"),
            styles: [__webpack_require__(/*! ./inbound.component.scss */ "./src/app/pages/inbound/inbound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], InboundComponent);
    return InboundComponent;
}());



/***/ }),

/***/ "./src/app/pages/outbound-form/outbound-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/outbound-form/outbound-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-2 border-right\">\n      <h5>NON HAZARDOUS WASTE MAINFEST</h5>\n    </div>\n    <div class=\"col-sm-2 border-right\">\n      <p>1. Generator ID Number</p>\n      <input type=\"text\" class=\"form-control\" value=\"CAL000092413\">\n    </div>\n    <div class=\"col-sm-2 border-right\">\n      <p>page 1 of</p>\n      <input type=\"text\" class=\"form-control\" value=\"1\">\n    </div>\n    <div class=\"col-sm-3 border-right\">\n      <p>3.Emaegency Response Phone</p>\n      <input type=\"text\" class=\"form-control\" value=\"(800) 424-9300\">\n    </div>\n    <div class=\"col-sm-3\">\n      <p>4.Manifest Tracking Number</p>\n      <input type=\"text\" class=\"form-control\" value=\"020376270  JJK\">\n    </div>\n\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <p>Generator Name and Mailing Address</p>\n      <textarea class=\"form-control\" row=\"3\"\n        cols=\"50\">IOLCHANGERS &#13;&#10;198 VALACIA ST SAN FRANCISCO CA&#13;&#10;94103</textarea>\n      <p>Generator's Phone <input type=\"text\" class=\"form-control\" value=\"415 487 1740\"></p>\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Generator's site Address(if different than mailing address</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=col-sm-9>\n      <p>6.Transporter 1 Company Name</p>\n      <input type=\"text\" class=\"form-control\" value=\"WORLD OIL ENVIRONMENTAL SERVICE\">\n    </div>\n    <div class=col-sm-3>\n      <p>U.S EPA ID Number</p>\n      <input type=\"text\" class=\"form-control\" value=\"CAD028277036\">\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=col-sm-9>\n      <p>7.Transporter 2 Company Name</p>\n      <input type=\"text\" class=\"form-control\" value=\"WORLDWIDE RECOVERY SYSTEM INC\">\n    </div>\n    <div class=col-sm-3>\n      <p>U.S EPA ID Number</p>\n      <input type=\"text\" class=\"form-control\" value=\"CAR000175422\">\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=col-sm-9>\n      <p>8.Designated Facility Name and Site Address</p>\n      <textarea class=\"form-control\" row=\"3\"\n        cols=\"50\">YES MANAGEMENT INC &#13;&#10;6500 US HIGHWAY 95&#13;&#10;YUMA              AZ       85365</textarea>\n      <p>Facility's Phone</p>\n      <input type=\"text\" class=\"form-control\" value=\"(928)344-9828\">\n\n    </div>\n    <div class=col-sm-3>\n      <p>U.S EPA ID Number</p>\n      <input type=\"text\" class=\"form-control\" value=\"AZR000521146\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <th>9a.HM</th>\n        <th>9b. U.S DOT Description(including proper shipping Name,Hazard Class,ID Number, and Packing Group(if any))\n        </th>\n        <th colspan=\"2\">10. Containers</th>\n        <th>11.Total Quantity</th>\n        <th>12 Unit Wt/Vol</th>\n        <th>13.Waste Codes</th>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td>NO.</td>\n        <td>Type</td>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr *ngFor=\"let item of products; let i = index;\">\n        <td>{{i + 1}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.container_no}}</td>\n        <td>{{item.container_type}}</td>\n        <td>{{item.quantity}}</td>\n        <td></td>\n        <td>{{item.waste_code}}</td>\n        <td></td>\n      </tr>\n\n    </table>\n    <button class=\"btn btn-primary\" routerLink=\"/scan/outbound\">Scan</button>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p>14.Special Handling Instructions and Additional Information</p>\n      <h4>EMERGENCY CONTACT : CHEMTREC 1-800-424-9300 WHOSE TERMINAL NAERG# 9B1 : 171 *PROFILE# 9B1 : 162623NRS<br>OILY\n        DEBRIS * APPROPRIATE PERSONAL PROTECTIVE EQUIPMENT</h4>\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"TRUCK 2030\"></div>\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"1-559 PM\"></div>\n        <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" value=\"WO#543295\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div>\n        <h5 style='display:inline'>GENERATOR'S/OFFERORS CERTIFICATION :</h5>\n        <p style='display:inline'>I hereby declare that the content of this cosigment are fully and accurately described\n          above by the proper shipping name,and are classified,packeged,marketed and labeled/placarded and are in all\n          respect in proper codition for transport According to applicable International and national govermental\n          regulations.if export shipment and\n          I am the primary Exporter, i certify that the contents of this consigment conform to the terms of the attached\n          EPA acknow;edgement of Consent<br>I certify that the waste minimization statement identified in 40CFR 262.27\n          (a)(if i am a large quantity Generator) or (b)(if i am a small quantity Generator) is true.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <p>Generator's/Officer's printed/Type Name </p>\n      <input type=\"text\" class=\"form-control\" value=\"Jonte\">\n\n    </div>\n    <div class=\"col-sm-3\">\n      <p>Signature</p>\n\n\n    </div>\n    <div class=\"col-sm-3\">\n      <p>Date</p>\n      <input type=\"text\" class=\"form-control\">\n    </div>\n\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <p>International Shipments</p>\n      <p>Transporter Signature (for exports only): </p>\n    </div>\n    <div class=\"col-sm-2\">\n      <p> <input type=\"checkbox\">Import to U.S</p>\n\n    </div>\n    <div class=\"col-sm-2\">\n      <p> <input type=\"checkbox\">Export from U.S</p>\n    </div>\n    <div class=\"col-sm-5\">\n      <p>Port of entry/exit:_________________________________</p>\n      <p>Dateleaving U.S:</p>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p>17.Transporter Acknowledgement of Receipt of Materials</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Transporter 1 Printed/Typed Name</p>\n      <input type=\"text\" class=\"form-control\" value=\"RAWN GANGA\">\n    </div>\n    <div class=\"col-sm-4\">\n      <p>Signature</p>\n\n    </div>\n    <div class=\"col-sm-3\">\n      <p>Date</p>\n      <input type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Transporter 2 Printed/Typed Name</p>\n      <input type=\"text\" class=\"form-control\" value=\"Paul D Mic Tarcsno Jk\">\n    </div>\n    <div class=\"col-sm-4\">\n      <p>Signature</p>\n\n    </div>\n    <div class=\"col-sm-3\">\n      <p>Date</p>\n      <input type=\"text\" class=\"form-control\">\n    </div>\n\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p>18.Discrepancy</p>\n    </div>\n  </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/outbound-form/outbound-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/outbound-form/outbound-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc; }\n\n.container {\n  border: 1px solid #ccc; }\n\n.table {\n  margin-bottom: 0rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3V0Ym91bmQtZm9ybS9GOlxcR0lUXFxQcm9qZWN0XFxCcmFkXFxCYXJjb2RlLU5nL3NyY1xcYXBwXFxwYWdlc1xcb3V0Ym91bmQtZm9ybVxcb3V0Ym91bmQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFFSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL291dGJvdW5kLWZvcm0vb3V0Ym91bmQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/outbound-form/outbound-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/outbound-form/outbound-form.component.ts ***!
  \****************************************************************/
/*! exports provided: OutboundFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundFormComponent", function() { return OutboundFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OutboundFormComponent = /** @class */ (function () {
    function OutboundFormComponent(service, route) {
        this.service = service;
        this.route = route;
        this.products = [];
    }
    OutboundFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            if (data.product != null) {
                _this.products.push(_this.service.getProduct(data.product));
            }
        });
    };
    OutboundFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outbound-form',
            template: __webpack_require__(/*! ./outbound-form.component.html */ "./src/app/pages/outbound-form/outbound-form.component.html"),
            styles: [__webpack_require__(/*! ./outbound-form.component.scss */ "./src/app/pages/outbound-form/outbound-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OutboundFormComponent);
    return OutboundFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/outbound/outbound.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/outbound/outbound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <h2>Out bound</h2>\n        <button class=\"btn btn-primary\" routerLink=\"/outbound/form\">New</button>\n        <div class=\"mt-3\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n\n              <table class=\"table table-striped table-sm table-centered mb-0\">\n                <thead>\n                  <tr>\n                    <th>Id</th>\n                    <th *ngFor=\"let item of formValue\">{{item.name}}</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of data; let i=index\">\n                    <td>{{i+1}}</td>\n                    <td>\n                      <h5 class=\"font-15 mb-1 font-weight-normal\">{{item.name}}</h5>\n                    </td>\n                    <td>\n                      {{item.epa_id_number}}\n                    </td>\n                    <td>\n                      {{item.manifest_no}}\n                    </td>\n                    <td>\n                       {{item.profile_no}}\n                     </td>\n                    <td>{{item.waste_type}}</td>\n                    <td>{{item.no_of_container}}</td>\n                    <td>{{item.type}}</td>\n                    <td>{{item.total_gallons}}</td>\n                    <td>{{item.total_lbs}}</td>\n                    <td>\n                      <a (click)=\"getData(i)\" data-toggle=\"modal\" data-target=\"#BoxModal\"\n                        class=\"btn btn-primary btn-xs\"> <i class=\"mdi mdi-eye\"></i> Edit</a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div> <!-- end table-responsive-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var OutboundComponent = /** @class */ (function () {
    function OutboundComponent(service) {
        this.service = service;
    }
    OutboundComponent.prototype.ngOnInit = function () {
        this.data = this.service.getInbounds();
        this.formValue = this.service.inbound_form;
    };
    OutboundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outbound',
            template: __webpack_require__(/*! ./outbound.component.html */ "./src/app/pages/outbound/outbound.component.html"),
            styles: [__webpack_require__(/*! ./outbound.component.scss */ "./src/app/pages/outbound/outbound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], OutboundComponent);
    return OutboundComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-form/product-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <b>Name :</b>\r\n                   </div>\r\n                 <div class=\"col-sm-4\">\r\n                  <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n\r\n         </div>\r\n \r\n \r\n\r\n         <div class=\"row\">\r\n              <div class=\"col-sm-2\">\r\n              <b>Code :</b>\r\n             </div>\r\n             <div class=\"col-sm-4\">\r\n            <input type=\"text\" class=\"form-control\">\r\n             </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <b>Container Number :</b>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n               </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <b>Container Type :</b>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <select class=\"browser-default custom-select\">\r\n                            <option selected>DM</option>\r\n                            <option>BM</option>\r\n                            <option>SM</option>\r\n                            \r\n                        </select>\r\n                </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <b>Quantity :</b>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <b>Unit :</b>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <b>Waste Code :</b>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <input type=\"text\" class=\"form-control\"><br>\r\n                        \r\n                        </div>\r\n                </div>\r\n                \r\n\r\n\r\n                <div class=\"row justify-content-start\">\r\n                        <div class=\"col-sm-2\">\r\n                            \r\n                            </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button type=\"button\" class=\"btn btn-primary\">ADD</button></div>\r\n                   </div>\r\n              \r\n\r\n                \r\n            \r\n    "

/***/ }),

/***/ "./src/app/pages/product-form/product-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1mb3JtL0Y6XFxHSVRcXFByb2plY3RcXEJyYWRcXEJhcmNvZGUtTmcvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWZvcm1cXHByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent() {
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/pages/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.scss */ "./src/app/pages/product-form/product-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <button class=\"btn btn-primary\" routerLink=\"/product/form\">New</button>\n          <div class=\"mt-3\">\n            <div class=\"row \">\n              <div class=\"col-lg-12\">\n  \n                <table class=\"table table-striped table-sm table-centered mb-0\">\n                  <thead>\n                    <tr>\n                      <th>Id</th>\n                      <th *ngFor=\"let item of formValue\">{{item.name}}</th>\n                      <th></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of data; let i=index\">\n                      <td>{{i+1}}</td>\n                      <td>\n                        <h5 class=\"font-15 mb-1 font-weight-normal\">{{item.name}}</h5>\n                      </td>\n                      <td>{{item.code}}</td>\n                      <td>{{item.container_no}}</td>\n                      <td>{{item.container_type}}</td>\n                      <td>{{item.quantity}}</td>\n                      <td>{{item.unit}}</td>\n                      <td>{{item.waste_code}}</td>\n                      <td>\n                        <a class=\"btn btn-primary btn-xs\"> <i class=\"mdi mdi-eye\"></i> Edit</a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div> <!-- end table-responsive-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(service) {
        this.service = service;
        this.formValue = [{
                "name": "Name",
                "type": "text",
                "rule": "required",
                "value": ""
            },
            {
                "name": "Code",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "Container Number",
                "type": "text",
                "rule": "required",
                "value": ""
            },
            {
                "name": "Container Type",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "Quantity",
                "type": "text",
                "rule": "required",
                "value": ""
            }, {
                "name": "Units",
                "type": "number",
                "rule": "required",
                "value": ""
            }, {
                "name": "Waste Code",
                "type": "text",
                "rule": "required",
                "value": ""
            }
        ];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.data = this.service.getProducts();
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/pages/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/pages/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"btn btn-primary\" routerLink=\"/scan/{{goto}}\">Rescan</button> &nbsp;\n  <button class=\"btn btn-success\" routerLink=\"/{{goto}}/form\" [queryParams]=\"{ product: code}\" *ngIf=\"product != undefined\">Confirm</button>\n  <button class=\"btn btn-danger\"  routerLink=\"/product/form\"  [queryParams]=\"{ code: code}\"  *ngIf=\"product == undefined\">Add Product</button>\n\n  <br><br>\n  <div class=\"alert alert-danger\" *ngIf=\"product == undefined\">There is no product with the code {{code}}. Click Rescan\n    or Add Product.</div>\n  \n  <div *ngIf=\"product != undefined\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Product Name</div>\n          <div class=\"value\">{{product.name}}</div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Code</div>\n          <div class=\"value\">{{product.code}}</div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Container Number</div>\n          <div class=\"value\">{{product.container_no}}</div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Container Type</div>\n          <div class=\"value\">{{product.container_type}}</div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Quantity</div>\n          <div class=\"value\">{{product.quantity}} {{product.unit}}</div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"grp\">\n          <div class=\"label\">Waste Code</div>\n          <div class=\"value\">{{product.waste_code}}</div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  font-weight: bold; }\n\n.grp {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9GOlxcR0lUXFxQcm9qZWN0XFxCcmFkXFxCYXJjb2RlLU5nL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmdycHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.route.queryParams.subscribe(function (data) {
            _this.code = data.code;
            _this.goto = data.goto;
            console.log(_this.code, _this.goto);
            _this.product = _this.service.getProduct(_this.code);
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
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

module.exports = "<div>{{output}}</div>\n\n<div class=\"barcode_panel\">\n  <div id=\"barcode_line\"></div>\n  <div id=\"barcode\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/scan/scan.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/scan/scan.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barcode_panel {\n  max-width: 640px;\n  height: 480px;\n  position: relative; }\n  .barcode_panel #barcode_line {\n    height: 2px;\n    background-color: #B6000F;\n    position: absolute;\n    width: 100%;\n    -webkit-animation-name: example;\n            animation-name: example;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate; }\n  .barcode_panel #barcode {\n    width: 100%;\n    height: auto; }\n  /* Standard syntax */\n  @-webkit-keyframes example {\n  from {\n    bottom: 100%; }\n  to {\n    bottom: 0px; } }\n  @keyframes example {\n  from {\n    bottom: 100%; }\n  to {\n    bottom: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Nhbi9GOlxcR0lUXFxQcm9qZWN0XFxCcmFkXFxCYXJjb2RlLU5nL3NyY1xcYXBwXFxwYWdlc1xcc2Nhblxcc2Nhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUhwQjtJQUtJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxzQ0FBOEI7WUFBOUIsOEJBQThCLEVBQUE7RUFabEM7SUFlSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBSWhCLG9CQUFBO0VBQ0E7RUFDSTtJQUFNLFlBQVksRUFBQTtFQUNsQjtJQUFJLFdBQVcsRUFBQSxFQUFBO0VBRm5CO0VBQ0k7SUFBTSxZQUFZLEVBQUE7RUFDbEI7SUFBSSxXQUFXLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJjb2RlX3BhbmVsIHtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIGhlaWdodCAgIDogNDgwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICNiYXJjb2RlX2xpbmV7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNjAwMEY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIH1cclxuICAjYmFyY29kZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8qIFN0YW5kYXJkIHN5bnRheCAqL1xyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAxMDAlO31cclxuICAgIHRvIHtib3R0b206IDBweDt9XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ScanComponent = /** @class */ (function () {
    function ScanComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.output = "Scanning...";
    }
    ScanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (data) {
            _this.page_name = data.page_name;
        });
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
                ths.output = "Code Detected: " + code;
                quagga__WEBPACK_IMPORTED_MODULE_2___default.a.stop();
                ths.service.setBarCode(code);
                ths.router.navigate(["/product"], { queryParams: { code: code, goto: ths.page_name } });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ScanComponent);
    return ScanComponent;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.product = [{
                name: "Sutter Home Vineyards Inc",
                code: "CAL000171777",
                container_no: "019150099JJK",
                container_type: "DM",
                quantity: "1",
                unit: "",
                waste_code: "400"
            }, {
                name: "World Oil Environmental Services",
                code: "CAD028277036 ",
                container_no: "CH00109 ",
                container_type: "DM ",
                quantity: "71 ",
                unit: "",
                waste_code: "35000",
            }, {
                name: "Guidos Auto Precision ",
                code: "CAL000386161",
                container_no: "019150080JJK",
                container_type: "DM",
                quantity: "1",
                unit: "",
                waste_code: "100"
            },];
        //"epa_id_number": "CAD028277036",
        this.inbound = [{
                "name": "World Oil Environmental Services",
                "epa_id_number": "9840033126",
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
        this.inbound_form = [{
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
    CommonService.prototype.setBarCode = function (code) {
        this._barcode = code;
    };
    CommonService.prototype.getBarCode = function () {
        return this._barcode;
    };
    CommonService.prototype.getProduct = function (c) {
        return this.product.filter(function (item) { return item.code == c; })[0];
    };
    CommonService.prototype.getProducts = function () {
        return this.product;
    };
    CommonService.prototype.getInbound = function (c) {
        return this.inbound.filter(function (item) { return item.epa_id_number == c; })[0];
    };
    CommonService.prototype.getInbounds = function () {
        return this.inbound;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
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