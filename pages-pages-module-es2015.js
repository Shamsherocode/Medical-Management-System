(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "/fh3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page register-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/jan-sendereks.jpg\">\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 ml-auto\">\n            <div class=\"info-area info-horizontal mt-5\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-tv-2\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Marketing</h5>\n                <p class=\"description\">\n                  We've created the marketing campaign of the website. It was a very interesting collaboration.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-html5\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Fully Coded in HTML5</h5>\n                <p class=\"description\">\n                  We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-info\">\n                <i class=\"nc-icon nc-atom\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Built Audience</h5>\n                <p class=\"description\">\n                  There is also a Fully Customizable CMS Admin Dashboard for this product.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 mr-auto\">\n            <div class=\"card card-signup text-center\">\n              <div class=\"card-header \">\n                <h4 class=\"card-title\">Register</h4>\n                <div class=\"social\">\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                  </button>\n                  <p class=\"card-description\"> or be classical </p>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <form class=\"form\" method=\"\" action=\"\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-circle-10\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-email-85\"></i>\n                      </span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      I agree to the\n                      <a href=\"#something\">terms and conditions</a>.\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer \">\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-round\">Get Started</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"#\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"#/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ng-recaptcha3.service */ "uLhy");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let LoginComponent = class LoginComponent {
    constructor(element, http, recaptcha3, auth, router, formBuilder, api, cookies) {
        this.element = element;
        this.http = http;
        this.recaptcha3 = recaptcha3;
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.cookies = cookies;
        this.message = '';
        this.communicationChannel = '';
        this.deviceID = '';
        this.ques = '';
        this.cred = '';
        this.forgotPassBtnText = 'Next';
        this.forgetUserBtnText = 'Next';
        this.formName = 'login';
        this.passwordType = 'password';
        this.passwordType1 = 'password';
        this.passwordType2 = 'password';
        this.formHeading = 'WELCOME BACK';
        this.iconType = 'fa fa-eye-slash';
        this.iconType1 = 'fa fa-eye-slash';
        this.iconType2 = 'fa fa-eye-slash';
        this.submitted = false;
        this.forgotPassStep = 1;
        this.forgotUserstep = 1;
        this.username = "";
        this.siteKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    }
    ;
    ngOnInit() {
        this.forgotPassStep = 1;
        this.forgotUserstep = 1;
        this.forgotPassBtnText = 'Next';
        this.forgetUserBtnText = 'Next';
        this.loading = false;
        this.login = {
            username: '',
            password: '',
        };
        this.forgetPass = {
            answer: '',
            secretcode: '',
            newpassword: '',
            selectedOption: '',
            email: '',
            newpassword2: '',
        };
        this.recaptcha3.init(this.siteKey);
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    TogglePasswordType() {
        if (this.passwordType == 'password' && this.iconType == 'fa fa-eye-slash') {
            this.passwordType = 'text';
            this.iconType = 'fa fa-eye';
        }
        else {
            this.passwordType = 'password';
            this.iconType = 'fa fa-eye-slash';
        }
    }
    TogglePasswordType1() {
        if (this.passwordType1 == 'password' && this.iconType1 == 'fa fa-eye-slash') {
            this.passwordType1 = 'text';
            this.iconType1 = 'fa fa-eye';
        }
        else {
            this.passwordType1 = 'password';
            this.iconType1 = 'fa fa-eye-slash';
        }
    }
    TogglePasswordType2() {
        if (this.passwordType2 == 'password' && this.iconType2 == 'fa fa-eye-slash') {
            this.passwordType2 = 'text';
            this.iconType2 = 'fa fa-eye';
        }
        else {
            this.passwordType2 = 'password';
            this.iconType2 = 'fa fa-eye-slash';
        }
    }
    // Login function and redirect to the Dashboard
    loginSubmit(model, isValid) {
        if (isValid) {
            this.loading = true;
            let bodydata = {
                email: model.username,
                password: model.password,
            };
            this.submitted = true;
            let headers = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            // this.api.httpRequest('post', '/api/login', bodydata).subscribe((result: any) => {
            this.http.post('http://www.api.psd2htmlx.com/api/login', bodydata, headers).subscribe((result) => {
                this.submitted = false;
                this.auth.setToken(result.jwt);
                // this.auth.setJwt(result.jwt)
                this.message = "";
                this.loading = false;
                window.location.href = '#/dashboard';
                // this.getUserData()
            }, error => {
                this.loading = false;
                this.message = error.message;
            });
        }
    }
    getUserData() {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        if (this.auth.jwt) {
            this.http.get('http://www.api.psd2htmlx.com/api/user', headers).subscribe((data) => {
            });
        }
        else {
            window.location.href = 'login';
        }
    }
    destroyRecaptcha() {
        this.recaptcha3.destroy();
    }
    // Redirect on the Forget Password Page
    forgetPassword() {
        this.submitted = false;
        this.loading = false;
        this.message = "";
        this.formName = 'forgotPassForm';
        this.forgotPassStep = 1;
        this.formHeading = 'FORGOT PASSWORD';
    }
    // Redirect on the Login Page
    loginRedirect() {
        this.message = "";
        this.formName = 'login';
        this.loading = false;
        this.formHeading = 'WELCOME BACK';
    }
    // Redirect on the Forget Username Form
    usernameRedirect() {
        this.forgotUserstep = 1;
        this.message = "";
        this.formName = 'forgetUsername';
        this.loading = false;
        this.formHeading = 'FORGOT USERNAME';
    }
    // Resend OTP
    resendOTP() {
        this.sendOTP(this.option);
    }
    // Send OTP
    sendOTP(option) {
        this.recaptcha3.getToken().then(token => {
            let bodydata = {
                channel: option,
                deviceID: this.deviceID,
                captcha: token
            };
            this.api.httpRequest('post', 'users/forgotPassword/step3', bodydata).subscribe((result) => {
                if (result.isOK) {
                    this.message = "";
                    this.forgotPassStep = 4;
                    this.forgotPassBtnText = 'Submit';
                    this.loading = false;
                    this.submitted = false;
                }
                else {
                    this.message = result.message;
                    this.loading = false;
                }
            }, error => {
                this.loading = false;
                this.message = error.message;
            });
        }, error => {
            this.loading = false;
            this.message = error.message;
        });
    }
    // Forget Password function
    submitForgotPassword(model, isValid) {
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.recaptcha3.getToken().then(token => {
                this.deviceID = this.auth.getDeviceID();
                if (this.forgotPassStep == 1) {
                    let bodydata = {
                        username: model.username,
                        captcha: token,
                        deviceID: this.deviceID
                    };
                    this.api.httpRequest('post', 'users/forgotPassword/step1', bodydata).subscribe((result) => {
                        if (result.isOK) {
                            this.ques = result.params;
                            this.message = "";
                            this.forgotPassStep = 2;
                            this.loading = false;
                            this.submitted = false;
                        }
                        else {
                            this.message = result.message;
                            this.loading = false;
                        }
                    }, error => {
                        this.message = error.message;
                        this.loading = false;
                    });
                }
                if (this.forgotPassStep == 2) {
                    let bodydata = {
                        question: this.ques[0] + '',
                        captcha: token,
                        deviceID: this.deviceID,
                        answer: model.answer,
                    };
                    this.api.httpRequest('post', 'users/forgotPassword/step2', bodydata).subscribe((result) => {
                        if (result.isOK) {
                            this.cred = result.params;
                            this.message = "";
                            this.forgotPassStep = 3;
                            this.loading = false;
                            this.submitted = false;
                        }
                        else {
                            this.message = result.message;
                            this.loading = false;
                        }
                    }, error => {
                        this.loading = false;
                        this.message = error.message;
                    });
                }
                if (this.forgotPassStep == 3) {
                    this.option = Number(model.selectedOption);
                    this.sendOTP(this.option);
                }
                if (this.forgotPassStep == 4) {
                    if (model.newpassword != model.newpassword2) {
                        this.message = "Password does not match";
                        this.loading = false;
                    }
                    else {
                        let bodydata = {
                            deviceID: this.deviceID,
                            resetCode: model.secretcode,
                            newPassword: model.newpassword,
                            captcha: token
                        };
                        this.api.httpRequest('post', 'users/forgotPassword/step4', bodydata).subscribe((result) => {
                            if (result.isOK) {
                                this.message = "";
                                this.auth.setToken(result.authData.accessToken);
                                this.auth.setRefreshToken(result.authData.refreshToken);
                                window.location.href = 'dashboard';
                            }
                            else {
                                this.message = result.message;
                                this.loading = false;
                            }
                        }, error => {
                            this.loading = false;
                            this.message = error.message;
                        });
                    }
                }
            }, error => {
                this.loading = false;
                this.message = error.message;
            });
        }
    }
    // Forget Username
    forgetUsername(model, isValid) {
        if (isValid) {
            this.loading = true;
            this.recaptcha3.getToken().then(token => {
                if (this.forgotUserstep == 1) {
                    let bodydata = {
                        deviceID: this.auth.getDeviceID(),
                        captcha: token,
                    };
                    this.api.httpRequest('post', '/users/' + model.email + '/emails/usernameReminder', bodydata).subscribe((result) => {
                        if (result.isOK) {
                            this.message = "";
                            this.loading = false;
                            this.forgotUserstep = 2;
                            this.forgetUserBtnText = 'Done';
                        }
                        else {
                            this.loading = false;
                            this.message = result.message;
                        }
                    }, error => {
                        this.loading = false;
                        this.message = error.message;
                    });
                }
                if (this.forgotUserstep == 2) {
                    this.formName = 'login';
                    this.loading = false;
                }
            }, error => {
                this.loading = false;
                this.message = error.message;
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__["NgRecaptcha3Service"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-cmp',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _services_ng_recaptcha3_service__WEBPACK_IMPORTED_MODULE_5__["NgRecaptcha3Service"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], LoginComponent);



/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ApiService = class ApiService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    httpRequest(method, url, data) {
        if (data) {
            this.incodeURL = this.incodedData(data);
        }
        // if(withAuth){
        //   if(this.checkAccessToken()){
        // 	 this.apiheader = this.HeaderWithToken();
        // 	}else{
        // 	 window.location.href = 'login'
        // 	}
        // }else{
        // 	this.apiheader = this.Header();
        // }
        if (method == 'post') {
            return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${url}`, this.incodeURL, this.apiheader);
        }
        else if (method == 'put') {
        }
        else {
            return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${url}`, this.apiheader);
        }
    }
    // public checkAccessToken(){
    // var AccessToken = this.authService.getAccessToken();
    // if(AccessToken){
    // var tokenData = jwt_decode(AccessToken);
    // var _accessTokenCurrentTime = new Date();
    // var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);
    // var seconds = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime())/ 1000) ;
    // console.log(seconds)
    // if(seconds < 5){
    // 	return this.refreshAccessToken();
    // }else{
    // 	return true
    // }
    // }
    // }
    // public refreshAccessToken(){
    //   const url = 'jwtRefreshSessions';
    //   var data = {'refreshToken': this.authService.getRefreshToken(), 'deviceID': this.authService.getDeviceID()};
    //   const incodeURL = this.incodedData(data)
    //   return this.http.post<any>(`${baseUrl}${url}`, incodeURL, { headers: headers }).subscribe((result: any) => {
    //     if(result.isOK){
    //    	 this.authService.setToken(result.authData.accessToken)
    //    	 this.authService.setRefreshToken(result.authData.refreshToken)
    //    	 return true;
    //     }else{
    //     return false;
    //     }
    //   })
    // }
    // public HeaderWithToken() {
    //   let header = new HttpHeaders();
    //   header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
    //   return { headers: header };
    // }
    Header() {
        return { headers: environments_environment__WEBPACK_IMPORTED_MODULE_3__["headers"] };
    }
    incodedData(data) {
        const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
        return (toUrlEncoded(data));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ApiService);



/***/ }),

/***/ "assJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lock/lock.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page lock-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/bruno-abatti.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-lock text-center\">\n            <div class=\"card-header \">\n              <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\">\n            </div>\n            <div class=\"card-body \">\n              <h4 class=\"card-title\">Joe Gardner</h4>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password..\">\n              </div>\n            </div>\n            <div class=\"card-footer \">\n              <a href=\"javascript:void(0)\" class=\"btn btn-outline-default btn-round\">Unlock</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"#\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"#/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "lYjW");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "fNfI");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock/lock.component */ "p1Qj");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _lock_lock_component__WEBPACK_IMPORTED_MODULE_7__["LockComponent"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "/fh3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RegisterComponent = class RegisterComponent {
    constructor(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    }
    ;
    ngOnInit() {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'register-cmp',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], RegisterComponent);



/***/ }),

/***/ "lYjW":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "fNfI");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/lock.component */ "p1Qj");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");



const PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            }]
    }];


/***/ }),

/***/ "p1Qj":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _raw_loader_lock_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lock.component.html */ "assJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LockComponent = class LockComponent {
    constructor(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    }
    ;
    ngOnInit() {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
};
LockComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
LockComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lock-cmp',
        template: _raw_loader_lock_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], LockComponent);



/***/ }),

/***/ "uLhy":
/*!***************************************************!*\
  !*** ./src/app/services/ng-recaptcha3.service.ts ***!
  \***************************************************/
/*! exports provided: NgRecaptcha3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRecaptcha3Service", function() { return NgRecaptcha3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NgRecaptcha3Service = class NgRecaptcha3Service {
    constructor() {
        this.baseUrl = 'https://www.google.com/recaptcha/api.js';
        this.siteKey = '';
        this.isLoaded = false;
        window['ngRecaptcha3Loaded'] = () => {
            this.isLoaded = true;
        };
        this.scriptId = +(new Date());
    }
    getToken(action) {
        try {
            return window['grecaptcha'].execute(this.siteKey, action);
        }
        catch (e) {
            return new Promise((resolve, reject) => {
                reject(e);
            });
        }
    }
    init(siteKey) {
        return new Promise((resolve, reject) => {
            if (this.isLoaded) {
                resolve('success');
                return;
            }
            else {
                this.siteKey = siteKey;
                const script = document.createElement('script');
                script.innerHTML = '';
                script.src = this.baseUrl + `?render=${this.siteKey}&onload=ngRecaptcha3Loaded`;
                script.id = `recapthcha-${this.scriptId}`;
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    resolve('success');
                };
                script.onerror = () => {
                    reject('error');
                };
                document.head.appendChild(script);
            }
        });
    }
    destroy() {
        this.isLoaded = false;
        const script = document.getElementById(`recapthcha-${this.scriptId}`);
        if (script) {
            script.remove();
        }
        const badge = document.getElementsByClassName('grecaptcha-badge')[0];
        if (badge) {
            badge.remove();
        }
    }
};
NgRecaptcha3Service.ctorParameters = () => [];
NgRecaptcha3Service = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], NgRecaptcha3Service);



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .form-control{border-color:#DDDDDD!important;}\n  .input-group .form-control:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child){\n      border-top-right-radius: 0!important;\n       border-bottom-right-radius: 0!important; \n  }\n  h4.header{margin-top:0px;}\n  small, .small {\n      margin-bottom: 10px;\n      float: left;\n  }\n  </style>\n  <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n    <div class=\"container\" >\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n          <button type=\"button\" class=\"navbar-toggler\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n        </div>\n        <!-- <img src=\"./assets/img/logo(1).png\" alt=\"image\" style=\"margin: left 110px; height: 50px; opacity: 0.6;\"> -->\n      </div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      </div>\n    </div>\n  </nav>\n  <div class=\"text-white bg-dark\">\n  <div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page\" style=\"color: #1e4b63\">\n      <div class=\"content\">\n        <div class=\"container\">\n          <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n  \n            <div class=\"card card-login\">\n              <div class=\"card-header \">\n                <div class=\"card-header \">\n                  <h4 class=\"header text-center\">{{this.formHeading}}</h4>\n                </div>\n              </div>\n  \n            <!-- login form -->\n            <div *ngIf=\"formName=='login'\">\n            <form #f1=\"ngForm\" novalidate  (ngSubmit)=\"loginSubmit(f1.value, f1.valid)\">\n              \n                <div class=\"card-body \">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                   <input type=\"text\" class=\"form-control\" name=\"username\" [ngModel]=\"login.username\" required  #username=\"ngModel\" placeholder=\"Username\">\n                   \n                  </div>\n                  <small [hidden]=\"username.valid || (username.pristine && !f1.submitted)\" class=\"text-danger\">\n                                    Username is required.\n                                  </small>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-lock-circle-open\"></i>\n                      </span>\n                    </div>\n                     <input type=\"{{this.passwordType}}\" class=\"form-control\" name=\"password\"  [ngModel]=\"login.password\" required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\" placeholder=\"Password\">\n                     <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">\n                        <i class=\"{{this.iconType}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType()\"></i>\n                      </span>\n                    </div>\n                    </div>\n                   <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                    Password is required\n                                  </small>\n                    <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"forgetPassword()\">Forgot Password?</a>\n                  </div>\n                  \n                  \n                </div>\n               \n  \n                <div class=\"card-footer\">\n                <small class=\"text-danger\">{{this.message}}</small>\n                  <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                  <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                  </div>\n                   <div *ngIf=\"!loading\">\n                   <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">Sign in</button>\n                   </div>\n                </div>\n  \n            </form>\n            </div>\n            <!-- end -->\n  \n            <!-- forget password form -->\n            <div *ngIf=\"formName=='forgotPassForm'\">\n                <form #f2=\"ngForm\" novalidate  (ngSubmit)=\"submitForgotPassword(f2.value, f2.valid)\">\n  \n                   \n                    <div style=\"text-align: right; font-size: small; padding-right: 4%; color: darkgray;\">\n                      <span>Step {{this.forgotPassStep}}/4</span>\n                  </div>\n                    \n                    <div *ngIf=\"forgotPassStep==1\">\n                    <div class=\"card-body \">\n                      \n                      <div class=\"input-group\">\n                        \n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-single-02\"></i>\n                          </span>\n                        </div>\n                       <input type=\"text\" class=\"form-control\" name=\"username\" [ngModel]=\"login.username\" required  #username=\"ngModel\" placeholder=\"Username\">\n                       \n                      </div>\n                      <small [hidden]=\"username.valid || (username.pristine && !submitted)\" class=\"text-danger\">\n                          Username is required.\n                      </small>\n                     \n                      \n                      <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"usernameRedirect()\">Forgot Username?</a>\n                      </div>\n                      \n                    </div>\n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==2\">\n                    <span style=\"padding-left: 5%;\">Answer Your Secret Question</span>\n                    <div class=\"card-body \">\n                  \n                     <div class=\"input\" style=\"margin-bottom:10px;\">\n                       <select class=\"form-control\">\n                          <option value=`{{this.ques[0]}}` aria-readonly=\"true\">{{this.ques[1]}}</option>\n                      </select>\n                    </div>\n                  \n                    <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"nc-icon nc-bulb-63\"></i>\n                        </span>\n                      </div>\n                     <input ype=\"text\" class=\"form-control\" name=\"answer\" [ngModel]=\"forgetPass.answer\" required  #answer=\"ngModel\" placeholder=\"Answer\" autocomplete=\"off\">    \n                    </div>\n                    <small [hidden]=\"answer.valid || (answer.pristine && !submitted)\" class=\"text-danger\">\n                      Answer is required.\n                    </small>\n  \n                  <div style=\"text-align: right; font-size: small;\">\n                    <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                </div>\n  \n                </div>\n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==3\">\n                    \n                    <span style=\"padding-left: 5%;\">Receive Verification Code</span>\n                  <div class=\"card-body\">\n                        ?? <input type=\"radio\" id=\"css\" name=\"selectedOption\" [ngModel]=\"forgetPass.selectedOption\" required  #selectedOption=\"ngModel\" value=1 style=\"margin-top: 10px;\">\n                        ?? <label for=\"css\" style=\"color: black; font-size: 0.971em;\"> Email to address {{this.cred[0]}}</label><br>\n                        ?? <input type=\"radio\" id=\"javascript\" name=\"selectedOption\" [ngModel]=\"forgetPass.selectedOption\" required  #selectedOption=\"ngModel\" value=2>\n                        ?? <label for=\"javascript\" style=\"color: black; font-size: 0.981em;\">SMS to phone number {{this.cred[1]}}</label>\n  \n                    <div style=\"text-align: right; font-size: small;\">\n                      <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                  </div>\n                  <small [hidden]=\"selectedOption.valid || (selectedOption.pristine && !submitted)\" class=\"text-danger\">\n                    Please Select..\n                  </small>\n  \n                  </div>\n                  \n                    \n                    </div>\n                    \n                    <div *ngIf=\"forgotPassStep==4\">\n                    <span style=\"padding: 5%;float:left;width:100%;text-align:left;font-size:12px;\">Please retrieve the security code form your email account. Remember to check your spam folder if you cannot see the message in your inbox.</span>\n                    <div class=\"card-body \">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-key-25\"></i>\n                          </span>\n                        </div>\n                       <input type=\"text\" class=\"form-control\" name=\"secretcode\" [ngModel]=\"forgetPass.secretcode\" required  #secretcode=\"ngModel\" placeholder=\"Secret Code\">\n                      </div>\n                      <small [hidden]=\"secretcode.valid || (secretcode.pristine && !submitted)\" class=\"text-danger\">\n                        Secret Code is required.\n                      </small>\n  \n                      <div style=\"text-align: right; font-size: small;\">\n                         <button type=\"button\" (click)=\"resendOTP()\" style=\"border: 0px;background: none;color:#3D5A80;margin-bottom:10px;\">Resend OTP</button>\n                      </div>\n  \n                      <div class=\"input-group mb-3\" >\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-lock-circle-open\"></i>\n                          </span>\n                        </div>\n                         <input type=\"{{this.passwordType1}}\" onCopy=\"return false\" onPaste=\"return false\" class=\"form-control\" name=\"newpassword\" [ngModel]=\"forgetPass.newpassword\" required  #newpassword=\"ngModel\" placeholder=\"New Password\">\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"{{this.iconType1}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType1()\"></i>\n                          </span>\n                        </div>\n                        </div>\n                      <small [hidden]=\"newpassword.valid || (newpassword.pristine &&  !submitted)\" class=\"text-danger\">\n                        New Password is required.\n                      </small>\n                      \n                      <!-- confirm Password -->\n                      <div class=\"input-group\"  [ngClass]=\"{'input-group-focus':focus2===true}\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-lock-circle-open\"></i>\n                          </span>\n                        </div>\n                         <input type=\"{{this.passwordType2}}\" onCopy=\"return false\" onPaste=\"return false\" class=\"form-control\" name=\"newpassword2\" [ngModel]=\"forgetPass.newpassword2\" required  #newpassword2=\"ngModel\" placeholder=\"Confirm Password\">\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"{{this.iconType2}}\" style=\"margin-left: 4px;\" (click)=\"TogglePasswordType2()\"></i>\n                          </span>\n                        </div>\n                        </div>\n                      <small [hidden]=\"newpassword2.valid || (newpassword2.pristine  && !submitted)\" class=\"text-danger\">\n                        Confirm Password is required.\n                      </small>\n  \n                      <div style=\"text-align: right; font-size: small;\">\n                        <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                    </div>\n  \n                    </div>\n                    </div>\n                  \n                    \n                    \n                    <div class=\"card-footer\">\n                    <small class=\"text-danger\">{{this.message}}</small>\n                    \n                      <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                      <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                      </div>\n                       <div *ngIf=\"!loading\">\n                       <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">{{this.forgotPassBtnText}}</button>\n                       </div>\n                    </div>\n  \n                </form>\n            </div>\n            <!-- end -->\n  \n            <!-- Forget Username -->\n            <div *ngIf=\"formName=='forgetUsername'\">\n              <form #f6=\"ngForm\" (ngSubmit)=\"forgetUsername(f6.value, f6.valid)\">\n   \n                  \n                  <div style=\"text-align: right; font-size: small; padding-right: 4%; color: darkgray;\">\n                    <span>Step {{this.forgotUserstep}}/2</span>\n                </div>\n                <div *ngIf=\"forgotUserstep==1\">\n                <div class=\"card-body\">\n                    <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"nc-icon nc-email-85\"></i>\n                        </span>\n                      </div>\n                     <input type=\"email\" class=\"form-control\" name=\"email\" [email]=\"true\" [ngModel]=\"forgetPass.email\" required  #email=\"ngModel\" placeholder=\"Email Address\" autocomplete=\"off\">    \n                    </div>\n                    <small [hidden]=\"email.valid || (email.pristine && !f6.submitted)\" class=\"text-danger\">\n                      Please enter valid email into Email field.\n                    </small>\n  \n                  <div style=\"text-align: right; font-size: small;\">\n                    <a href=\"#\" (click)=\"loginRedirect()\">Sign in</a>\n                </div>\n  \n                </div>\n              </div>\n  \n                <div *ngIf=\"forgotUserstep==2\">\n                <div class=\"card-body\">\n                  <span>Check your email for a message from Vision Care Direct\n                    containing your username.</span>\n                </div>\n                </div>\n                \n                  \n  \n                  <div class=\"card-footer\">\n                  <small class=\"text-danger\">{{this.message}}</small>\n                    <div *ngIf=\"loading\"><button class=\"btn btn-warning btn-round btn-block mb-3\">\n                    <i class=\"fa fa-spinner fa-spin\"  style=\"align-items: center;\"></i></button>\n                    </div>\n                     <div *ngIf=\"!loading\">\n                     <button type=\"submit\" class=\"btn btn-warning btn-round btn-block mb-3\">{{this.forgetUserBtnText}}</button>\n                     </div>\n                  </div>\n  \n              </form>\n            </div>\n            <!-- end -->\n  \n            </div>\n            \n          </div>\n        </div>\n      </div>\n      <!-- <footer class=\"footer footer-black  footer-white \">\n        <div class=\"container\">\n          <div class=\"row\">\n            <nav class=\"footer-nav\">\n              <span class=\"copyright\" style=\"font-size: small;\">\n               <i class=\"\"></i> \n              </span>\n            </nav>\n            <div class=\"credits ml-auto\">\n              <span class=\"copyright\">\n                &copy; 2022 All Rights Reserved.<i class=\"\"></i> \n              </span>\n            </div>\n          </div>\n        </div>\n      </footer> -->\n    </div>\n  </div>\n  </div>");

/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map