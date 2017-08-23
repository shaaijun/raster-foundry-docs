webpackJsonp([1,5],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(177);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(swaggerService) {
        this.swaggerService = swaggerService;
        this.classNames = 'container row';
        this.spec = {};
        this.isSpecLoaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loadingHash = location.hash;
        location.hash = '';
        this.swaggerService.fetchSpec().then(function (spec) {
            _this.spec = spec;
            _this.isSpecLoaded = true;
            setTimeout(function () {
                location.hash = loadingHash;
            });
        }, function (error) {
            console.error('There was an error while fetching the swagger spec', error);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], AppComponent.prototype, "classNames", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n    <app-sidebar-container *ngIf=\"isSpecLoaded\" [spec]=\"spec\"></app-sidebar-container>\n    <div class=\"content column\">\n      <app-topbar-container></app-topbar-container>\n      <app-operations-container perfect-scrollbar [spec]=\"spec\"></app-operations-container>\n    </div>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_settings_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topbar_topbar_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__operations_operations_module__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    minScrollbarLength: 75
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
                __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_9__topbar_topbar_module__["a" /* TopbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__operations_operations_module__["a" /* OperationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationBodyParameterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationBodyParameterComponent = (function () {
    function OperationBodyParameterComponent() {
        this.showJson = false;
        this.classNames = 'parameter body';
        this.parameters = [{}];
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    OperationBodyParameterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onJsonChange('{' +
            this.parameters.map(function (parameter) { return _this.combineSchemaProperties(parameter); }).map(function (parametersArray) { return parametersArray.map(function (parameter) { return "\n  \"" + parameter.name + "\": " + (parameter.example || '"' + parameter.type + '"'); }); }) + '\n}');
    };
    OperationBodyParameterComponent.prototype.isObjectParameter = function (parameter) {
        return parameter.type === 'object' ||
            parameter.schema && !parameter.schema.type ||
            parameter.schema.type === 'object';
    };
    OperationBodyParameterComponent.prototype.isArrayParameter = function (parameter) {
        return parameter.type === 'array' || parameter.schema && parameter.schema.type === 'array';
    };
    OperationBodyParameterComponent.prototype.getParameterProperties = function (parameter) {
        if (parameter.schema && parameter.schema.allOf) {
            return this.combineSchemaProperties(parameter);
        }
        else if (parameter.schema &&
            parameter.schema.type &&
            parameter.schema.type === 'array') {
            return [{ name: parameter.name, type: "array: " + parameter.schema.items.type }];
        }
        else if (parameter.schema) {
            var schema_1 = parameter.schema;
            return Object.keys(schema_1.properties)
                .map(function (key) {
                return Object.assign(schema_1.properties[key], { name: key });
            }).filter(function (item) { return !item.readOnly; });
        }
    };
    OperationBodyParameterComponent.prototype.combineSchemaProperties = function (parameter) {
        var schema = parameter.schema;
        var properties = [];
        function concatPropsForItem(schemaItem) {
            if (schemaItem && schemaItem.allOf) {
                schemaItem.allOf.forEach(concatPropsForItem);
            }
            else if (schemaItem && schemaItem.properties) {
                properties = properties.concat(Object.keys(schemaItem.properties)
                    .map(function (key) {
                    return Object.assign(schemaItem.properties[key], { name: key });
                }).filter(function (item) { return !item.readOnly; }));
            }
        }
        if (schema && schema.allOf || schema.properties) {
            concatPropsForItem(schema);
        }
        else if (schema.type === 'array') {
            properties = [parameter];
        }
        return properties;
    };
    OperationBodyParameterComponent.prototype.onJsonChange = function (jsonString) {
        this.parametersJson = jsonString;
        try {
            this.onChange.emit({ value: JSON.stringify(JSON.parse(jsonString)) });
            this.errorMessage = null;
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                this.errorMessage = e.message;
            }
            else {
                throw e;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationBodyParameterComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parameters'),
        __metadata("design:type", Array)
    ], OperationBodyParameterComponent.prototype, "parameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], OperationBodyParameterComponent.prototype, "onChange", void 0);
    OperationBodyParameterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-body-parameter',
            template: __webpack_require__(354),
            styles: [__webpack_require__(333)],
        }),
        __metadata("design:paramtypes", [])
    ], OperationBodyParameterComponent);
    return OperationBodyParameterComponent;
    var _a;
}());

//# sourceMappingURL=operation-body-parameter.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationContainerComponent = (function () {
    function OperationContainerComponent() {
        this.classNames = 'operation';
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationContainerComponent.prototype, "classNames", void 0);
    OperationContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-container',
            template: "\n    <div class=\"operation-area\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationContainerComponent);
    return OperationContainerComponent;
}());

//# sourceMappingURL=operation-container.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationDetailsComponent = (function () {
    function OperationDetailsComponent() {
        this.classNames = 'operation-details';
        this.title = '';
        this.content = '';
        this.level = 5;
        this.parent = '';
    }
    Object.defineProperty(OperationDetailsComponent.prototype, "headingClassNames", {
        get: function () {
            return "h" + this.level;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationDetailsComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], OperationDetailsComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('content'),
        __metadata("design:type", String)
    ], OperationDetailsComponent.prototype, "content", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('level'),
        __metadata("design:type", Number)
    ], OperationDetailsComponent.prototype, "level", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parent'),
        __metadata("design:type", String)
    ], OperationDetailsComponent.prototype, "parent", void 0);
    OperationDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-details',
            template: "\n    <a class=\"parent-tag\" href=\"\" *ngIf=\"parent\">{{parent}}</a>\n    <div [class]=\"headingClassNames\" *ngIf=\"title\">{{title}}</div>\n    <p [innerHTML]=\"content\" *ngIf=\"content\"></p>\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationDetailsComponent);
    return OperationDetailsComponent;
}());

//# sourceMappingURL=operation-details.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationParametersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationParametersComponent = (function () {
    function OperationParametersComponent() {
        this.classNames = 'parameters';
        this.method = {};
        this.onParameterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    OperationParametersComponent.prototype.ngOnInit = function () {
        this.pathParams = this.method.parameters.filter(function (param) { return param.in === 'path'; });
        this.queryParams = this.method.parameters.filter(function (param) { return param.in === 'query'; });
        this.bodyParams = this.method.parameters.filter(function (param) { return param.in === 'body'; });
    };
    OperationParametersComponent.prototype.onPathParamChange = function (event) {
        this.onParameterChange.emit(Object.assign({ type: 'path' }, event));
    };
    OperationParametersComponent.prototype.onQueryParamChange = function (event) {
        this.onParameterChange.emit(Object.assign({ type: 'query' }, event));
    };
    OperationParametersComponent.prototype.onBodyParamChange = function (event) {
        this.onParameterChange.emit(Object.assign({ type: 'body' }, event));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationParametersComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('method'),
        __metadata("design:type", Object)
    ], OperationParametersComponent.prototype, "method", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], OperationParametersComponent.prototype, "onParameterChange", void 0);
    OperationParametersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-parameters',
            template: "\n    <h4 *ngIf=\"pathParams && pathParams.length\">URI Parameters</h4>\n    <app-operation-query-parameter\n      *ngFor=\"let parameter of pathParams\"\n      [parameter]=\"parameter\"\n      (onChange)=\"onPathParamChange($event)\"></app-operation-query-parameter>\n    <h4 *ngIf=\"queryParams && queryParams.length\">Query Parameters</h4>\n    <app-operation-query-parameter\n      *ngFor=\"let parameter of queryParams\"\n      [parameter]=\"parameter\"\n      (onChange)=\"onQueryParamChange($event)\"></app-operation-query-parameter>\n    <h4 *ngIf=\"bodyParams && bodyParams.length\">Request Body</h4>\n    <app-operation-body-parameter\n      *ngIf=\"bodyParams && bodyParams.length\"\n      [parameters]=\"bodyParams\"\n      (onChange)=\"onBodyParamChange($event)\"></app-operation-body-parameter>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationParametersComponent);
    return OperationParametersComponent;
    var _a;
}());

//# sourceMappingURL=operation-parameters.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationPathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationPathComponent = (function () {
    function OperationPathComponent() {
        this.methodType = '';
        this.path = '';
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('methodType'),
        __metadata("design:type", String)
    ], OperationPathComponent.prototype, "methodType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('path'),
        __metadata("design:type", String)
    ], OperationPathComponent.prototype, "path", void 0);
    OperationPathComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-path',
            template: "\n    <pre class=\"definition\"><code><span class=\"http_method {{methodType}}\">{{methodType}}</span><span class=\"path\">{{path}}</span></code></pre>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationPathComponent);
    return OperationPathComponent;
}());

//# sourceMappingURL=operation-path.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationQueryParameterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationQueryParameterComponent = (function () {
    function OperationQueryParameterComponent() {
        this.classNames = 'parameter';
        this.parameter = {};
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    Object.defineProperty(OperationQueryParameterComponent.prototype, "shouldShowSelect", {
        get: function () {
            if (this.parameter.items && this.parameter.items.enum) {
                return Boolean(this.parameter.items.enum.length);
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationQueryParameterComponent.prototype, "requirement", {
        get: function () {
            return this.parameter.required ? 'required' : 'optional';
        },
        enumerable: true,
        configurable: true
    });
    OperationQueryParameterComponent.prototype.emitChange = function (event) {
        this.onChange.emit({ name: this.parameter.name, value: event.target.value, event: event });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationQueryParameterComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('parameter'),
        __metadata("design:type", Object)
    ], OperationQueryParameterComponent.prototype, "parameter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], OperationQueryParameterComponent.prototype, "onChange", void 0);
    OperationQueryParameterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-query-parameter',
            template: "\n    <div class=\"parameter-details\">\n      <label class=\"parameter-name\" for=\"ordering\">{{parameter.name}}</label>\n      <code class=\"parameter-type {{parameter.type}}\">{{parameter.type}}</code>\n    </div>\n    <div class=\"parameter-input\">\n      <select class=\"form-control\"\n              *ngIf=\"shouldShowSelect\"\n              (input)=\"emitChange($event)\">\n        <option *ngIf=\"requirement === 'optional'\"></option>\n        <option *ngFor=\"let option of parameter.items.enum\">{{option}}</option>\n      </select>\n\n      <input type=\"text\"\n             *ngIf=\"!shouldShowSelect\"\n             class=\"form-control\"\n             placeholder=\"{{parameter.type}}\"\n             (input)=\"emitChange($event)\">\n      <div class=\"parameter-requirement\">{{requirement}}</div>\n    </div>\n    <div class=\"parameter-description\">{{parameter.description}}</div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationQueryParameterComponent);
    return OperationQueryParameterComponent;
    var _a;
}());

//# sourceMappingURL=operation-query-parameter.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationResourceMethodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationResourceMethodComponent = (function () {
    function OperationResourceMethodComponent() {
        this.uriParameters = {};
        this.queryParameters = {};
        this.bodyParameters = {};
        this.headers = {};
    }
    OperationResourceMethodComponent.prototype.handleParameterChange = function (event) {
        var updatedParameter = {};
        updatedParameter[event.name] = event.value;
        if (event.type === 'path') {
            if (event.value.length) {
                this.uriParameters = Object.assign({}, this.uriParameters || {}, updatedParameter);
            }
            else if (this.uriParameters) {
                delete this.uriParameters[event.name];
                this.uriParameters = Object.assign({}, this.uriParameters);
            }
        }
        else if (event.type === 'query') {
            if (event.value.length) {
                this.queryParameters = Object.assign({}, this.queryParameters || {}, updatedParameter);
            }
            else if (this.queryParameters) {
                delete this.queryParameters[event.name];
                this.queryParameters = Object.assign({}, this.queryParameters);
            }
        }
        else if (event.type === 'body') {
            if (event.value.length) {
                this.bodyParameters = Object.assign({}, this.bodyParameters || {}, event);
            }
            else if (this.bodyParameters) {
                delete this.bodyParameters[event.name];
                this.bodyParameters = Object.assign({}, this.bodyParameters);
            }
        }
    };
    Object.defineProperty(OperationResourceMethodComponent.prototype, "pathId", {
        get: function () {
            return this.path.path + "#" + this.method.methodType;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('resource'),
        __metadata("design:type", Object)
    ], OperationResourceMethodComponent.prototype, "resource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('path'),
        __metadata("design:type", Object)
    ], OperationResourceMethodComponent.prototype, "path", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('method'),
        __metadata("design:type", Object)
    ], OperationResourceMethodComponent.prototype, "method", void 0);
    OperationResourceMethodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-resource-method',
            template: "\n<app-operation-container>\n  <app-operation-details\n    [id]=\"pathId\"\n    [parent]=\"resource.name\"\n    [title]=\"method.summary\"\n    [content]=\"method.description\"\n    [level]=3\n  >\n    <app-operation-path [methodType]=\"method.methodType\" [path]=\"path.path\">\n    </app-operation-path>\n    <app-operation-parameters\n      [method]=\"method\"\n      *ngIf=\"method.parameters && method.parameters.length\"\n      (onParameterChange)=\"handleParameterChange($event)\">\n    </app-operation-parameters>\n  </app-operation-details>\n  <app-operation-samples>\n    <app-operation-sample-request [path]=\"path.path\"\n                                  [headers]=\"headers\"\n                                  [methodType]=\"method.methodType\"\n                                  [uriParameters]=\"uriParameters\"\n                                  [queryParameters]=\"queryParameters\"\n                                  [bodyParameters]=\"bodyParameters\"\n    ></app-operation-sample-request>\n  </app-operation-samples>\n</app-operation-container>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationResourceMethodComponent);
    return OperationResourceMethodComponent;
}());

//# sourceMappingURL=operation-resource-method.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationResourceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationResourceComponent = (function () {
    function OperationResourceComponent() {
        this.resource = {};
        this.spec = {};
        this.headers = {};
    }
    Object.defineProperty(OperationResourceComponent.prototype, "matchingPaths", {
        get: function () {
            var _this = this;
            if (this.spec && this.resource) {
                return Object.keys(this.spec.paths)
                    .map(function (key) { return Object.assign(_this.spec.paths[key], { path: key }); })
                    .filter(function (path) { return path['x-resource'] == _this.resource.name; });
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    OperationResourceComponent.prototype.matchingMethods = function (path) {
        return Object.keys(path)
            .map(function (key) { return Object.assign(path[key], { methodType: key }); })
            .filter(function (method) { return method.summary; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('resource'),
        __metadata("design:type", Object)
    ], OperationResourceComponent.prototype, "resource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('spec'),
        __metadata("design:type", Object)
    ], OperationResourceComponent.prototype, "spec", void 0);
    OperationResourceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-resource',
            template: "\n    <app-operation-container>\n      <app-operation-details [id]=\"resource.name\"\n                             [title]=\"resource.name\"\n                             [content]=\"resource.description\"\n                             [level]=2></app-operation-details>\n      <app-operation-samples></app-operation-samples>\n    </app-operation-container>\n    <ng-container *ngFor=\"let path of matchingPaths\">\n      <app-operation-resource-method\n        *ngFor=\"let method of matchingMethods(path)\"\n        [path]=\"path\"\n        [method]=\"method\"\n        [resource]=\"resource\"\n      ></app-operation-resource-method>\n    </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationResourceComponent);
    return OperationResourceComponent;
}());

//# sourceMappingURL=operation-resource.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationSampleRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperationSampleRequestComponent = (function () {
    function OperationSampleRequestComponent(settingsService, authService) {
        this.settingsService = settingsService;
        this.authService = authService;
        this.classNames = 'sample-block';
        this.path = '';
        this.headers = {};
        this.methodType = '';
        this.uriParameters = {};
        this.queryParameters = {};
        this.bodyParameters = {};
    }
    OperationSampleRequestComponent.prototype.ngOnInit = function () {
        this.domain = this.settingsService.apiUrl;
    };
    OperationSampleRequestComponent.prototype.ngOnChanges = function (changes) {
        if (changes.uriParameters && changes.uriParameters.currentValue) {
            this.parsedUriParameters = Object.keys(changes.uriParameters.currentValue)
                .map(function (key) {
                return { name: key, value: changes.uriParameters.currentValue[key] };
            });
            this.uriParams = this.injectUriParams();
        }
        if (changes.queryParameters && changes.queryParameters.currentValue) {
            this.parsedQueryParameters = Object.keys(changes.queryParameters.currentValue)
                .map(function (key) {
                return { name: key, value: changes.queryParameters.currentValue[key] };
            });
        }
    };
    OperationSampleRequestComponent.prototype.injectUriParams = function () {
        var _this = this;
        return this.path.replace(/{([^{}]*)}/g, function (a, b) {
            var r = _this.uriParameters && _this.uriParameters[b] || a;
            return r.toString();
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationSampleRequestComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('path'),
        __metadata("design:type", String)
    ], OperationSampleRequestComponent.prototype, "path", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('headers'),
        __metadata("design:type", Object)
    ], OperationSampleRequestComponent.prototype, "headers", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('methodType'),
        __metadata("design:type", String)
    ], OperationSampleRequestComponent.prototype, "methodType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('uriParameters'),
        __metadata("design:type", Object)
    ], OperationSampleRequestComponent.prototype, "uriParameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('queryParameters'),
        __metadata("design:type", Object)
    ], OperationSampleRequestComponent.prototype, "queryParameters", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bodyParameters'),
        __metadata("design:type", Object)
    ], OperationSampleRequestComponent.prototype, "bodyParameters", void 0);
    OperationSampleRequestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-sample-request',
            template: "\n    <div class=\"sample-block-title\">Example Request</div>\n    <pre><code>curl -i \\\n     -H \"Accept: application/json\" \\<span *ngIf=\"authService.token\">\n     -H \"Authorization: Bearer {{authService.token}}\" \\</span><span *ngIf=\"methodType && methodType.length\">\n     -X {{methodType.toUpperCase()}}<span *ngIf=\"bodyParameters && bodyParameters.value\"> -d '{{bodyParameters.value}}'</span> \\</span>\n     '{{domain}}{{uriParams}}<span *ngFor=\"let parameter of parsedQueryParameters; let first = first; let last = last\"><span *ngIf=\"first\">?</span>{{parameter.name}}={{parameter.value}}<span *ngIf=\"!last\">&</span></span>'</code></pre>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], OperationSampleRequestComponent);
    return OperationSampleRequestComponent;
    var _a, _b;
}());

//# sourceMappingURL=operation-sample-request.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationSamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationSamplesComponent = (function () {
    function OperationSamplesComponent() {
        this.classNames = 'operation-samples';
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationSamplesComponent.prototype, "classNames", void 0);
    OperationSamplesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operation-samples',
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationSamplesComponent);
    return OperationSamplesComponent;
}());

//# sourceMappingURL=operation-samples.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperationsContainerComponent = (function () {
    function OperationsContainerComponent() {
        this.classNames = 'operations';
        this.spec = {};
    }
    Object.defineProperty(OperationsContainerComponent.prototype, "topMatter", {
        get: function () {
            if (this.spec) {
                return this.spec['x-top-matter'] || [];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperationsContainerComponent.prototype, "coreResources", {
        get: function () {
            if (this.spec) {
                return this.spec['x-resources'] || [];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], OperationsContainerComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('spec'),
        __metadata("design:type", Object)
    ], OperationsContainerComponent.prototype, "spec", void 0);
    OperationsContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operations-container',
            template: "\n    <!-- Top matter content -->\n    <app-operation-container *ngFor=\"let section of topMatter\">\n      <app-operation-details [id]=\"section.title\"\n                             [title]=\"section.title\"\n                             [content]=\"section.content\"\n                             [level]=\"section.level\"></app-operation-details>\n      <app-operation-samples></app-operation-samples>\n    </app-operation-container>\n\n    <!-- Operations content -->\n    <app-operation-container>\n      <app-operation-details id=\"Core Resources\"\n                             title=\"Core Resources\" [level]=1></app-operation-details>\n      <app-operation-samples></app-operation-samples>\n    </app-operation-container>\n    <ng-container *ngFor=\"let resource of coreResources\">\n      <app-operation-resource [resource]=\"resource\" [spec]=\"spec\"></app-operation-resource>\n    </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OperationsContainerComponent);
    return OperationsContainerComponent;
}());

//# sourceMappingURL=operations-container.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operations_container_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operation_container_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operation_details_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operation_samples_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operation_resource_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operation_resource_method_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operation_path_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__operation_parameters_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__operation_sample_request_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__operation_query_parameter_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__operation_body_parameter_component__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var OperationsModule = (function () {
    function OperationsModule() {
    }
    OperationsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__operations_container_component__["a" /* OperationsContainerComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__operation_container_component__["a" /* OperationContainerComponent */], __WEBPACK_IMPORTED_MODULE_5__operation_details_component__["a" /* OperationDetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__operation_samples_component__["a" /* OperationSamplesComponent */], __WEBPACK_IMPORTED_MODULE_3__operations_container_component__["a" /* OperationsContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__operation_resource_component__["a" /* OperationResourceComponent */], __WEBPACK_IMPORTED_MODULE_8__operation_resource_method_component__["a" /* OperationResourceMethodComponent */], __WEBPACK_IMPORTED_MODULE_9__operation_path_component__["a" /* OperationPathComponent */], __WEBPACK_IMPORTED_MODULE_10__operation_parameters_component__["a" /* OperationParametersComponent */], __WEBPACK_IMPORTED_MODULE_11__operation_sample_request_component__["a" /* OperationSampleRequestComponent */], __WEBPACK_IMPORTED_MODULE_12__operation_query_parameter_component__["a" /* OperationQueryParameterComponent */], __WEBPACK_IMPORTED_MODULE_13__operation_body_parameter_component__["a" /* OperationBodyParameterComponent */]]
        })
    ], OperationsModule);
    return OperationsModule;
}());

//# sourceMappingURL=operations.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarContainerComponent = (function () {
    function SidebarContainerComponent(swaggerService) {
        this.swaggerService = swaggerService;
        this.classNames = 'sidebar column';
        this.spec = {};
    }
    Object.defineProperty(SidebarContainerComponent.prototype, "topMatter", {
        get: function () {
            if (this.spec) {
                var xTopMatter = this.spec['x-top-matter'];
                if (xTopMatter) {
                    return xTopMatter.map(function (section) {
                        var isHeading = section.level == 1;
                        return {
                            label: section.title,
                            isHeading: isHeading
                        };
                    });
                }
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarContainerComponent.prototype, "topics", {
        get: function () {
            if (this.spec) {
                return this.spec['tags'] || [];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarContainerComponent.prototype, "coreResources", {
        get: function () {
            if (this.spec) {
                return this.spec['x-resources'] || [];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], SidebarContainerComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('spec'),
        __metadata("design:type", Object)
    ], SidebarContainerComponent.prototype, "spec", void 0);
    SidebarContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-container',
            template: "\n    <header>\n      <div class=\"logo\">\n        <a href=\"#\" class=\"icon\">\n          <img src=\"assets/images/logo.svg\">\n        </a>\n        <a href=\"#\" class=\"path\">\n          API\n        </a>\n      </div>\n    </header>\n\n    <nav class=\"sidebar-nav\" perfect-scrollbar>\n      <!-- Top Matter Navigation -->\n      <app-sidebar-section>\n        <app-sidebar-item *ngFor=\"let section of topMatter\" [section]=section>\n        </app-sidebar-item>\n      </app-sidebar-section>\n\n      <!-- Topics(tags)>\n      <app-sidebar-section title=\"Topics\">\n        <a class=\"sidebar-nav-item\" *ngFor=\"let topic of topics\">{{topic.name}}</a>\n      </app-sidebar-section -->\n\n      <!-- Core Resources -->\n      <app-sidebar-section href=\"#Core Resources\" title=\"Core Resources\">\n        <app-sidebar-resource-item *ngFor=\"let resource of coreResources\"\n                                   [resource]=\"resource\"\n                                   [spec]=\"spec\"\n        >\n        </app-sidebar-resource-item>\n      </app-sidebar-section>\n    </nav>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]) === "function" && _a || Object])
    ], SidebarContainerComponent);
    return SidebarContainerComponent;
    var _a;
}());

//# sourceMappingURL=sidebar-container.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarItemComponent = (function () {
    function SidebarItemComponent() {
        this.classNames = '';
        this.section = {};
    }
    Object.defineProperty(SidebarItemComponent.prototype, "labelClass", {
        get: function () {
            return this.section.isHeading ? 'sidebar-nav-heading' : 'sidebar-nav-item';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], SidebarItemComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('section'),
        __metadata("design:type", Object)
    ], SidebarItemComponent.prototype, "section", void 0);
    SidebarItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-item',
            template: "\n    <a [href]=\"'#' + section.label\"\n       class={{labelClass}}>{{section.label}}</a>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SidebarItemComponent);
    return SidebarItemComponent;
}());

//# sourceMappingURL=sidebar-item.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarResourceItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarResourceItemComponent = (function () {
    function SidebarResourceItemComponent() {
        // @TODO: this will be dynamic and default to false when we begin to detect which resource is in view
        this.isExpanded = true;
        this.resource = {};
        this.spec = {};
    }
    Object.defineProperty(SidebarResourceItemComponent.prototype, "matchingPaths", {
        get: function () {
            var _this = this;
            if (this.spec && this.resource) {
                var paths = Object.keys(this.spec.paths)
                    .map(function (key) { return Object({ path: key, methods: _this.spec.paths[key] }); });
                return paths.filter(function (path) { return path.methods['x-resource'] == _this.resource.name; });
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarResourceItemComponent.prototype, "matchingMethods", {
        get: function () {
            var paths = this.matchingPaths;
            if (paths.length) {
                var methods = paths.map(function (path) {
                    return Object.keys(path.methods)
                        .map(function (key) {
                        return Object.assign({
                            path: "#" + path.path + "#" + key
                        }, path.methods[key]);
                    })
                        .filter(function (method) { return method.summary; });
                });
                return [].concat.apply([], methods);
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean)
    ], SidebarResourceItemComponent.prototype, "isExpanded", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('resource'),
        __metadata("design:type", Object)
    ], SidebarResourceItemComponent.prototype, "resource", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('spec'),
        __metadata("design:type", Object)
    ], SidebarResourceItemComponent.prototype, "spec", void 0);
    SidebarResourceItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-resource-item',
            template: "\n    <a [href]=\"'#'+resource.name\"\n       class=\"sidebar-item\">\n      {{resource.name}}\n    </a>\n    <app-sidebar-section>\n      <a *ngFor=\"let method of matchingMethods\"\n         class=\"sidebar-item\"\n         [href]=\"method.path\"\n      >{{method.summary}}</a>\n    </app-sidebar-section>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SidebarResourceItemComponent);
    return SidebarResourceItemComponent;
}());

//# sourceMappingURL=sidebar-resource-item.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarSectionComponent = (function () {
    function SidebarSectionComponent() {
        this.classNames = 'sidebar-nav-items';
        this.title = '';
    }
    SidebarSectionComponent.prototype.shouldShowTitle = function () {
        return Boolean(this.title);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], SidebarSectionComponent.prototype, "classNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], SidebarSectionComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('href'),
        __metadata("design:type", String)
    ], SidebarSectionComponent.prototype, "href", void 0);
    SidebarSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-section',
            template: "\n    <a *ngIf=\"shouldShowTitle()\" [href]=\"href\" class=\"sidebar-nav-heading\">{{title}}</a>\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SidebarSectionComponent);
    return SidebarSectionComponent;
}());

//# sourceMappingURL=sidebar-section.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_container_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_section_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_resource_item_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_item_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sidebar_container_component__["a" /* SidebarContainerComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sidebar_container_component__["a" /* SidebarContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__sidebar_section_component__["a" /* SidebarSectionComponent */], __WEBPACK_IMPORTED_MODULE_4__sidebar_resource_item_component__["a" /* SidebarResourceItemComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_item_component__["a" /* SidebarItemComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopbarContainerComponent = (function () {
    function TopbarContainerComponent(authService, settingsService) {
        this.authService = authService;
        this.settingsService = settingsService;
        this.apiTokenEnabled = true;
        this.loginEnabled = false;
        this.error = 'No Token';
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        this.token = '';
        this.refreshToken = '';
        this.useRefreshToken = true;
        this.classNames = 'navbar';
    }
    TopbarContainerComponent.prototype.onTokenChange = function (token) {
        var cleanToken = token && token.length && token.replace(/['"]+/g, '');
        if (cleanToken) {
            var validationResult = this.authService.validateToken(token);
            if (validationResult instanceof Error) {
                this.error = validationResult.toString();
            }
            else {
                this.error = null;
            }
        }
        else {
            this.error = 'No Token';
        }
    };
    TopbarContainerComponent.prototype.onGetSessionTokenClick = function () {
        var _this = this;
        console.log("Getting a session token using refresh token: " + this.refreshToken);
        this.authService.getSessionToken(this.refreshToken)
            .subscribe(function (response) {
            var apiTokenResponse = response.json();
            _this.token = apiTokenResponse.id_token;
            _this.onTokenChange(_this.token);
            _this.useRefreshToken = false;
        });
    };
    TopbarContainerComponent.prototype.onSetSessionTokenClick = function () {
        console.log(this.token);
        this.authService.token = this.token;
    };
    Object.defineProperty(TopbarContainerComponent.prototype, "isSetTokenDisabled", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], TopbarContainerComponent.prototype, "classNames", void 0);
    TopbarContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topbar-container',
            template: "\n<nav class=\"nav-left\">\n  <div *ngIf=\"useRefreshToken && apiTokenEnabled\" class=\"nav-form\">\n    <input type=\"text\"\n           class=\"form-control nav-control\"\n           placeholder=\"Refresh Token\"\n           [(ngModel)]=\"refreshToken\">\n    <span class=\"btn-group\">\n      <button type=\"button\"\n              class=\"btn btn-default btn-navbar\"\n              (click)=\"onGetSessionTokenClick(refreshToken)\"\n              [disabled]=\"!refreshToken.length\">Get Session Token</button>\n      <button type=\"button\"\n              class=\"btn btn-navbar\"\n              (click)=\"useRefreshToken = false;\">Enter Session Token</button>\n    </span>\n  </div>\n  <div *ngIf=\"!useRefreshToken && apiTokenEnabled\" class=\"nav-form\">\n    <input type=\"text\"\n           class=\"form-control nav-control\"\n           placeholder=\"Session Token\"\n           [value]=\"token\"\n           (input)=\"onTokenChange($event.target.value)\">\n    <span class=\"btn-group\">\n      <button type=\"button\"\n              class=\"btn btn-default btn-navbar\"\n              [disabled]=\"isSetTokenDisabled\"\n              (click)=\"onSetSessionTokenClick()\">\n        Use Session Token\n      </button>\n      <button type=\"button\"\n              class=\"btn btn-navbar\"\n              (click)=\"useRefreshToken = true\">\n        Change Refresh Token\n      </button>\n    </span>\n  </div>\n  <button *ngIf=\"loginEnabled\" class=\"btn btn-navbar\">Login</button>\n</nav>\n<nav class=\"nav-right\">\n  <a href=\"#\" class=\"btn btn-secondary\">curl</a>\n  {{error}}\n</nav>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
    ], TopbarContainerComponent);
    return TopbarContainerComponent;
    var _a, _b;
}());

//# sourceMappingURL=topbar-container.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topbar_container_component__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TopbarModule = (function () {
    function TopbarModule() {
    }
    TopbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__topbar_container_component__["a" /* TopbarContainerComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__topbar_container_component__["a" /* TopbarContainerComponent */]]
        })
    ], TopbarModule);
    return TopbarModule;
}());

//# sourceMappingURL=topbar.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".tab-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .tab-header div {\n    padding: 0.5em;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n    background: #f3f3f3;\n    cursor: pointer; }\n    .tab-header div.active {\n      cursor: auto;\n      background: initial; }\n\n.tab-body {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /* padding: 1em; */ }\n  .tab-body textarea {\n    width: 100%;\n    resize: vertical; }\n  .tab-body .json-example {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background: #465076;\n    border-radius: 4px;\n    padding: .5em; }\n    .tab-body .json-example .json-entry {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      margin: .5em; }\n      .tab-body .json-example .json-entry .json-key {\n        padding: 0 1em 0 1em; }\n      .tab-body .json-example .json-entry .json-value {\n        padding-right: 1em; }\n        .tab-body .json-example .json-entry .json-value code {\n          cursor: pointer; }\n      .tab-body .json-example .json-entry .json-description {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        text-align: right; }\n    .tab-body .json-example .json-expanded {\n      padding: 1em;\n      border-radius: 4px; }\n\n.json-error {\n  padding: .5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-header\">\n  <div class=\"tab-select\"\n       (click)=\"showJson = false\"\n       [ngClass]=\"{'active': !showJson}\">\n    Format\n  </div>\n  <div class=\"tab-select\"\n       (click)=\"showJson = true\"\n       [ngClass]=\"{'active': showJson}\">\n    Json\n  </div>\n</div>\n<div class=\"tab-body\" *ngIf=\"showJson\">\n  <textarea class=\"form-control\"\n            autocomplete=\"off\"\n            autocorrect=\"off\"\n            autocapitalize=\"off\"\n            spellcheck=\"false\"\n            [rows]=\"parametersJson.split('\\n').length\"\n            [value]=\"parametersJson\"\n            (input)=\"onJsonChange($event.target.value)\"\n  ></textarea>\n  <div class=\"json-error color-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n</div>\n<div class=\"tab-body\" *ngIf=\"!showJson\">\n  <div class=\"json-example\">\n    <ng-container *ngFor=\"let parameter of parameters\" >\n      <ng-container *ngFor=\"let property of getParameterProperties(parameter)\">\n        <div class=\"json-entry\">\n          <div class=\"json-key\">\n            {{property.name}}:\n          </div>\n          <div class=\"json-value\">\n            <code class=\"parameter-type {{property.type || property.schema && 'object'}}\">\n            {{property.type || property.schema && property.schema.type || property.name + ' schema' }}\n            </code>\n          </div>\n          <div class=\"json-description\" *ngIf=\"property.description\">\n            {{property.description}}\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        var isLocalhost = location.host.includes('localhost');
        this.hostname = isLocalhost ? 'app.rasterfoundry.com' : location.host;
    }
    Object.defineProperty(SettingsService.prototype, "specUrl", {
        get: function () {
            var parts = this.hostname.split('.');
            parts[0] = 'spec';
            var specUrl = 'https://' + parts.join('.');
            // let specUrl = '/assets/spec.yml'; // uncomment to use assets/spec.yml as the spec instead
            return specUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "apiUrl", {
        get: function () {
            var parts = this.hostname.split('.');
            parts[0] = 'app';
            return "https://" + parts.join('.') + "/api";
        },
        enumerable: true,
        configurable: true
    });
    SettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_service__ = __webpack_require__(43);
/* unused harmony export TokenExpiredError */
/* unused harmony export TokenParseError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenExpiredError = (function (_super) {
    __extends(TokenExpiredError, _super);
    function TokenExpiredError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = 'Token Expired Error';
        _this.message = message;
        _this.stack = new Error().stack;
        return _this;
    }
    TokenExpiredError.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
    return TokenExpiredError;
}(Error));

var TokenParseError = (function (_super) {
    __extends(TokenParseError, _super);
    function TokenParseError(message, error) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = 'Token Parse Error';
        _this.message = message;
        _this.stack = error ? error.stack : new Error().stack;
        return _this;
    }
    TokenParseError.fromError = function (error) {
        return new TokenParseError(error.message, error);
    };
    TokenParseError.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
    return TokenParseError;
}(Error));

var AuthService = (function () {
    function AuthService(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.validateToken = function (token) {
        var error;
        try {
            var decoded = this.jwtHelper.decodeToken(token);
            if (this.jwtHelper.isTokenExpired(token)) {
                var expiredAt = this.jwtHelper.getTokenExpirationDate(token);
                error = new TokenExpiredError("Expired at " + expiredAt);
            }
            else if (!decoded) {
                error = new TokenParseError('Error parsing token');
            }
            else {
                return decoded;
            }
        }
        catch (e) {
            error = TokenParseError.fromError(e);
        }
        return error;
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            if (this.sessionToken && this.jwtHelper.isTokenExpired(this.sessionToken)) {
                this.sessionToken = null;
            }
            return this.sessionToken;
        },
        set: function (token) {
            var validationResult = this.validateToken(token);
            if (validationResult instanceof Error) {
                throw validationResult;
            }
            else {
                this.sessionToken = token;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setToken = function (token) {
        try {
            var decodedToken = this.jwtHelper.decodeToken(token);
            if (this.jwtHelper.isTokenExpired(token)) {
                return { error: 'Token is expired' };
            }
            this.sessionToken = token;
            return decodedToken;
        }
        catch (e) {
            return { error: e.message };
        }
    };
    AuthService.prototype.getSessionToken = function (refreshToken) {
        var requestUrl = this.settingsService.apiUrl + "/tokens";
        return this.http.post(requestUrl, { refresh_token: refreshToken });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwaggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwaggerService = (function () {
    function SwaggerService(http, settingsService) {
        this.http = http;
        this.settingsService = settingsService;
    }
    SwaggerService.prototype.fetchSpec = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.settingsService.specUrl).subscribe(function (response) {
                try {
                    var parsed = SwaggerParser.YAML.parse(response.text());
                    SwaggerParser.dereference(parsed).then(function (file) {
                        resolve(file);
                    }, function (err) {
                        reject(err);
                    });
                }
                catch (e) {
                    reject(e);
                }
            }, function (error) {
                _this.error = error;
                reject(error);
            });
        });
    };
    SwaggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
    ], SwaggerService);
    return SwaggerService;
    var _a, _b;
}());

//# sourceMappingURL=swagger.service.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.bundle.js.map