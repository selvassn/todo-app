webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-item {\n  width: 100%;\n  border-bottom: 1px solid #CCC;\n}\n\n.list-item button .material-icons {\n  font-size: 16px;\n  padding: 0;\n}\n\n.list-item:hover button {\n  display: block;\n}\n\n.list-item button {\n  display: none;\n  float: right;\n  margin: -4px 5px;\n  width: 30px;\n  height: 30px;\n}\n\n.list-item /deep/ .md-checkbox-label {\n  margin: 10px 0;\n}\n\n.completed {\n  color: #9d9d9d;\n  text-decoration: line-through;\n}\n\n.fab-add {\n  position: absolute;\n  right: 30px;\n  top: 50px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"todoapp\">\n  <md-toolbar color=\"primary\">\n    TODO APP\n    <button md-fab class=\"fab-add\" (click)=\"todoDialog()\">\n      <md-icon>add</md-icon>\n    </button>\n  </md-toolbar>\n\n  <md-card-content *ngIf=\"todoList.length\">\n    <md-list>\n      <form>\n        <md-list-item *ngFor=\"let todo of todoList; let index=index\" class=\"list-item\">\n\n          <md-checkbox color=\"primary\" type=\"checkbox\" [name]=\"'item'+index\" [(ngModel)]=\"todo.completed\">\n            <span [class.completed]=\"todo.completed\">{{todo.title}}</span>\n          </md-checkbox>\n\n          <span>\n           <button md-mini-fab (click)=\"remove(index)\" color=\"primary\">\n             <md-icon>delete_forever</md-icon>\n           </button>\n\n           <button md-mini-fab (click)=\"todoDialog(todo)\" color=\"primary\"\n                   [disabled]=\"todo.completed\">\n             <md-icon>mode_edit</md-icon>\n           </button>\n         </span>\n\n        </md-list-item>\n      </form>\n    </md-list>\n  </md-card-content>\n</md-card>\n\n\n<app-dialog [title]=\"'New Task'\"\n            [template]=\"'Enter Task:'\"\n            [placeholder]=\"'What do you need to do?'\"\n            [okText]=\"okButtonText\"\n            [value]=\"fieldValue\"\n            (valueEmitted)=\"updateTodo($event)\"\n            [showPrompt]=\"showDialog\">\n</app-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.showDialog = false;
        this.editingTodo = null;
        this.fieldValue = '';
        this.todoList = [];
        this.okButtonText = 'Create task';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todoList = [];
        this.getAllTodo();
    };
    AppComponent.prototype.getAllTodo = function () {
        var _this = this;
        this.todoService.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (todos) {
            debugger;
            _this.todoList = todos;
        });
    };
    AppComponent.prototype.todoDialog = function (todo) {
        if (todo === void 0) { todo = null; }
        this.okButtonText = 'Create task';
        this.fieldValue = '';
        this.editingTodo = todo;
        if (todo) {
            this.fieldValue = todo.title;
            this.okButtonText = 'Edit task';
        }
        this.showDialog = true;
    };
    AppComponent.prototype.remove = function (index) {
        var _this = this;
        var todo = this.todoList[index];
        this.todoService.delete(todo._id)
            .map(function (res) { return res.json(); })
            .subscribe(function (resTodo) {
            debugger;
            _this.todoList.splice(index, 1);
        });
    };
    AppComponent.prototype.editTodo = function (todo) {
        var _this = this;
        this.todoService.update(todo)
            .map(function (res) { return res.json(); })
            .subscribe(function (resTodo) {
            if (!resTodo.ok) {
                return true;
            }
            _this.editingTodo = todo;
            _this.getAllTodo();
        });
    };
    AppComponent.prototype.updateTodo = function (title) {
        if (title) {
            title = title.trim();
            if (title && this.editingTodo) {
                this.editingTodo.title = title;
                this.editTodo(this.editingTodo);
            }
            else {
                this.addTodo(title);
            }
        }
        this.hideDialog();
    };
    AppComponent.prototype.addTodo = function (title) {
        var _this = this;
        var result;
        var todo = { title: title, completed: false };
        result = this.todoService.save(todo);
        result.subscribe(function (x) {
            // keep things in sync
            debugger;
            // this.todoList.push(todo);
            _this.getAllTodo();
        });
    };
    AppComponent.prototype.hideDialog = function () {
        this.showDialog = false;
        this.editingTodo = null;
        this.fieldValue = null; // make sure Input is new
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__todo_service__["a" /* TodoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n}\n\n.modalDialog {\n  max-width: 400px;\n  position: relative;\n  margin: 10% auto;\n  padding: 5px 20px 25px;\n  background: #fff;\n}\n\n.full-width { width: 100%; }\n\n.center { text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"showPrompt\">\n  <md-card class=\"modalDialog\">\n    <md-toolbar color=\"primary\">\n      {{title}}\n    </md-toolbar>\n    <md-card-content>\n      <br>{{template}}<br><br>\n      <md-input-container class=\"full-width\">\n        <input mdInput [placeholder]=\"placeholder\"\n               [(ngModel)]=\"value\"\n               (keyup.enter)=\"emitValue(value)\"\n               (keyup.escape)=\"emitValue(null)\"/>\n      </md-input-container>\n    </md-card-content>\n    <md-card-actions class=\"center\">\n      <button md-button (click)=\"emitValue(null)\" color=\"primary\">{{cancelText}}</button>\n      <button md-raised-button (click)=\"emitValue(value)\" color=\"primary\">{{okText}}</button>\n    </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.valueEmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.okText = 'OK';
        this.cancelText = 'Cancel';
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.emitValue = function (value) {
        this.valueEmitted.emit(value);
    };
    return DialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "showPrompt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "template", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "okText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DialogComponent.prototype, "cancelText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "valueEmitted", void 0);
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getAll = function () {
        return this.http.get('api/v1/todos');
    };
    TodoService.prototype.save = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/v1/todo', JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.update = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/v1/todo/' + todo._id, JSON.stringify(todo), { headers: headers });
    };
    TodoService.prototype.delete = function (id) {
        return this.http.delete('api/v1/todo/' + id);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map