"use strict";
(self["webpackChunkpeso_frontend"] = self["webpackChunkpeso_frontend"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _components_dashboard_WeightProgressChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/WeightProgressChart.vue */ "./assets/components/dashboard/WeightProgressChart.vue");
/* harmony import */ var _components_auth_LoginForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/LoginForm.vue */ "./assets/components/auth/LoginForm.vue");
/* harmony import */ var _components_auth_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/RegisterForm.vue */ "./assets/components/auth/RegisterForm.vue");
/* harmony import */ var _components_journal_JournalEntryForm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/journal/JournalEntryForm.vue */ "./assets/components/journal/JournalEntryForm.vue");
/* harmony import */ var _components_social_FriendList_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/social/FriendList.vue */ "./assets/components/social/FriendList.vue");
/* harmony import */ var _components_social_Feed_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/social/Feed.vue */ "./assets/components/social/Feed.vue");
/* harmony import */ var _components_social_ActivityCard_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/social/ActivityCard.vue */ "./assets/components/social/ActivityCard.vue");




// Import des composants Vue








// Montage conditionnel des composants Vue
var mountVueComponent = function mountVueComponent(componentName, component, selector) {
  var element = document.querySelector(selector);
  if (element) {
    console.log("Montage du composant ".concat(componentName, " sur ").concat(selector));
    var app = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({});
    var pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.createPinia)();
    app.use(pinia);
    app.component(componentName, component);
    app.mount(element);
  } else {
    console.log("\xC9l\xE9ment ".concat(selector, " non trouv\xE9 pour le composant ").concat(componentName));
  }
};

// Montage des composants selon les pages
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM chargé, montage des composants Vue...');

  // Dashboard components
  mountVueComponent('weight-progress-chart', _components_dashboard_WeightProgressChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"], '#weight-progress-chart');

  // Auth components
  mountVueComponent('login-form', _components_auth_LoginForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"], '#login-form');
  mountVueComponent('register-form', _components_auth_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"], '#register-form');

  // Journal components
  mountVueComponent('journal-entry-form', _components_journal_JournalEntryForm_vue__WEBPACK_IMPORTED_MODULE_6__["default"], '#journal-entry-form');

  // Social components
  mountVueComponent('friend-list', _components_social_FriendList_vue__WEBPACK_IMPORTED_MODULE_7__["default"], '#friend-list');
  mountVueComponent('feed', _components_social_Feed_vue__WEBPACK_IMPORTED_MODULE_8__["default"], '#feed');
  mountVueComponent('activity-card', _components_social_ActivityCard_vue__WEBPACK_IMPORTED_MODULE_9__["default"], '#activity-card');
  console.log('Montage des composants terminé');
});

/***/ }),

/***/ "./assets/components/auth/LoginForm.vue":
/*!**********************************************!*\
  !*** ./assets/components/auth/LoginForm.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_template_id_620216a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=620216a1 */ "./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js */ "./assets/components/auth/LoginForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoginForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoginForm_vue_vue_type_template_id_620216a1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/auth/LoginForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/auth/LoginForm.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./assets/components/auth/LoginForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1":
/*!****************************************************************************!*\
  !*** ./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_620216a1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginForm_vue_vue_type_template_id_620216a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginForm.vue?vue&type=template&id=620216a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1");


/***/ }),

/***/ "./assets/components/auth/RegisterForm.vue":
/*!*************************************************!*\
  !*** ./assets/components/auth/RegisterForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_085e34e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=085e34e3 */ "./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js */ "./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterForm_vue_vue_type_template_id_085e34e3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/auth/RegisterForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3":
/*!*******************************************************************************!*\
  !*** ./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_085e34e3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_085e34e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=template&id=085e34e3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3");


/***/ }),

/***/ "./assets/components/dashboard/WeightProgressChart.vue":
/*!*************************************************************!*\
  !*** ./assets/components/dashboard/WeightProgressChart.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WeightProgressChart_vue_vue_type_template_id_184d1f9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightProgressChart.vue?vue&type=template&id=184d1f9a */ "./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a");
/* harmony import */ var _WeightProgressChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightProgressChart.vue?vue&type=script&lang=js */ "./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WeightProgressChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WeightProgressChart_vue_vue_type_template_id_184d1f9a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/dashboard/WeightProgressChart.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WeightProgressChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WeightProgressChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WeightProgressChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a":
/*!*******************************************************************************************!*\
  !*** ./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WeightProgressChart_vue_vue_type_template_id_184d1f9a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WeightProgressChart_vue_vue_type_template_id_184d1f9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WeightProgressChart.vue?vue&type=template&id=184d1f9a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a");


/***/ }),

/***/ "./assets/components/journal/JournalEntryForm.vue":
/*!********************************************************!*\
  !*** ./assets/components/journal/JournalEntryForm.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JournalEntryForm_vue_vue_type_template_id_3dd5a532__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JournalEntryForm.vue?vue&type=template&id=3dd5a532 */ "./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532");
/* harmony import */ var _JournalEntryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JournalEntryForm.vue?vue&type=script&lang=js */ "./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_JournalEntryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_JournalEntryForm_vue_vue_type_template_id_3dd5a532__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/journal/JournalEntryForm.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JournalEntryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JournalEntryForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JournalEntryForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532":
/*!**************************************************************************************!*\
  !*** ./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JournalEntryForm_vue_vue_type_template_id_3dd5a532__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JournalEntryForm_vue_vue_type_template_id_3dd5a532__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JournalEntryForm.vue?vue&type=template&id=3dd5a532 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532");


/***/ }),

/***/ "./assets/components/shared/Alert.vue":
/*!********************************************!*\
  !*** ./assets/components/shared/Alert.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alert_vue_vue_type_template_id_1d499c6d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=1d499c6d */ "./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js */ "./assets/components/shared/Alert.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Alert_vue_vue_type_template_id_1d499c6d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/shared/Alert.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/shared/Alert.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./assets/components/shared/Alert.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alert_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Alert.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d":
/*!**************************************************************************!*\
  !*** ./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alert_vue_vue_type_template_id_1d499c6d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alert_vue_vue_type_template_id_1d499c6d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Alert.vue?vue&type=template&id=1d499c6d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d");


/***/ }),

/***/ "./assets/components/shared/BaseButton.vue":
/*!*************************************************!*\
  !*** ./assets/components/shared/BaseButton.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseButton_vue_vue_type_template_id_a04410bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=template&id=a04410bc */ "./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc");
/* harmony import */ var _BaseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=script&lang=js */ "./assets/components/shared/BaseButton.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BaseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseButton_vue_vue_type_template_id_a04410bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/shared/BaseButton.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/shared/BaseButton.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/shared/BaseButton.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc":
/*!*******************************************************************************!*\
  !*** ./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseButton_vue_vue_type_template_id_a04410bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseButton_vue_vue_type_template_id_a04410bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseButton.vue?vue&type=template&id=a04410bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc");


/***/ }),

/***/ "./assets/components/shared/LoadingSpinner.vue":
/*!*****************************************************!*\
  !*** ./assets/components/shared/LoadingSpinner.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingSpinner_vue_vue_type_template_id_e1d33a08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=template&id=e1d33a08 */ "./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08");
/* harmony import */ var _LoadingSpinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=script&lang=js */ "./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoadingSpinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingSpinner_vue_vue_type_template_id_e1d33a08__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/shared/LoadingSpinner.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingSpinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingSpinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingSpinner.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08":
/*!***********************************************************************************!*\
  !*** ./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingSpinner_vue_vue_type_template_id_e1d33a08__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingSpinner_vue_vue_type_template_id_e1d33a08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingSpinner.vue?vue&type=template&id=e1d33a08 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08");


/***/ }),

/***/ "./assets/components/social/ActivityCard.vue":
/*!***************************************************!*\
  !*** ./assets/components/social/ActivityCard.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActivityCard_vue_vue_type_template_id_dcd1e994__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityCard.vue?vue&type=template&id=dcd1e994 */ "./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994");
/* harmony import */ var _ActivityCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityCard.vue?vue&type=script&lang=js */ "./assets/components/social/ActivityCard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ActivityCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ActivityCard_vue_vue_type_template_id_dcd1e994__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/social/ActivityCard.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/social/ActivityCard.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./assets/components/social/ActivityCard.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994":
/*!*********************************************************************************!*\
  !*** ./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityCard_vue_vue_type_template_id_dcd1e994__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityCard_vue_vue_type_template_id_dcd1e994__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityCard.vue?vue&type=template&id=dcd1e994 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994");


/***/ }),

/***/ "./assets/components/social/Feed.vue":
/*!*******************************************!*\
  !*** ./assets/components/social/Feed.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Feed_vue_vue_type_template_id_1c557595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feed.vue?vue&type=template&id=1c557595 */ "./assets/components/social/Feed.vue?vue&type=template&id=1c557595");
/* harmony import */ var _Feed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feed.vue?vue&type=script&lang=js */ "./assets/components/social/Feed.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Feed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Feed_vue_vue_type_template_id_1c557595__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/social/Feed.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/social/Feed.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./assets/components/social/Feed.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feed.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/social/Feed.vue?vue&type=template&id=1c557595":
/*!*************************************************************************!*\
  !*** ./assets/components/social/Feed.vue?vue&type=template&id=1c557595 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feed_vue_vue_type_template_id_1c557595__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feed_vue_vue_type_template_id_1c557595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feed.vue?vue&type=template&id=1c557595 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=template&id=1c557595");


/***/ }),

/***/ "./assets/components/social/FriendList.vue":
/*!*************************************************!*\
  !*** ./assets/components/social/FriendList.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FriendList_vue_vue_type_template_id_3cc8ae13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FriendList.vue?vue&type=template&id=3cc8ae13 */ "./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13");
/* harmony import */ var _FriendList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendList.vue?vue&type=script&lang=js */ "./assets/components/social/FriendList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FriendList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FriendList_vue_vue_type_template_id_3cc8ae13__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/social/FriendList.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/social/FriendList.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/social/FriendList.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FriendList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13":
/*!*******************************************************************************!*\
  !*** ./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendList_vue_vue_type_template_id_3cc8ae13__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendList_vue_vue_type_template_id_3cc8ae13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FriendList.vue?vue&type=template&id=3cc8ae13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13");


/***/ }),

/***/ "./assets/store/modules/auth.js":
/*!**************************************!*\
  !*** ./assets/store/modules/auth.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAuthStore: () => (/* binding */ useAuthStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api.js */ "./assets/utils/api.js");
/* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers.js */ "./assets/utils/helpers.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var useAuthStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('auth', {
  state: function state() {
    return {
      user: null,
      token: _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.storage.get('jwt_token'),
      isLoading: false,
      error: null
    };
  },
  getters: {
    isAuthenticated: function isAuthenticated(state) {
      return !!state.token && !!state.user;
    },
    userRole: function userRole(state) {
      var _state$user;
      return ((_state$user = state.user) === null || _state$user === void 0 || (_state$user = _state$user.roles) === null || _state$user === void 0 ? void 0 : _state$user[0]) || 'ROLE_USER';
    },
    isAdmin: function isAdmin(state) {
      var _state$user2;
      return ((_state$user2 = state.user) === null || _state$user2 === void 0 || (_state$user2 = _state$user2.roles) === null || _state$user2 === void 0 ? void 0 : _state$user2.includes('ROLE_ADMIN')) || false;
    }
  },
  actions: {
    login: function login(credentials) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _error$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.isLoading = true;
              _this.error = null;
              _context.p = 1;
              _context.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.authAPI.login(credentials);
            case 2:
              response = _context.v;
              _this.token = response.data.token;
              _this.user = response.data.user;

              // Stocker le token
              _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.storage.set('jwt_token', _this.token);
              return _context.a(2, response);
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.error = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || 'Erreur de connexion';
              throw _t;
            case 4:
              _context.p = 4;
              _this.isLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    register: function register(userData) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _error$response2, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.isLoading = true;
              _this2.error = null;
              _context2.p = 1;
              _context2.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.authAPI.register(userData);
            case 2:
              response = _context2.v;
              return _context2.a(2, response);
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              _this2.error = ((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.error) || 'Erreur d\'inscription';
              throw _t2;
            case 4:
              _context2.p = 4;
              _this2.isLoading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    fetchProfile: function fetchProfile() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _error$response3, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (_this3.token) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _this3.isLoading = true;
              _this3.error = null;
              _context3.p = 2;
              _context3.n = 3;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.authAPI.profile();
            case 3:
              response = _context3.v;
              _this3.user = response.data.user;
              return _context3.a(2, response);
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              _this3.error = ((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.error) || 'Erreur de récupération du profil';
              throw _t3;
            case 5:
              _context3.p = 5;
              _this3.isLoading = false;
              return _context3.f(5);
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 4, 5, 6]]);
      }))();
    },
    updateProfile: function updateProfile(data) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _error$response4, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this4.isLoading = true;
              _this4.error = null;
              _context4.p = 1;
              _context4.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.authAPI.updateProfile(data);
            case 2:
              response = _context4.v;
              _this4.user = response.data.user;
              return _context4.a(2, response);
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              _this4.error = ((_error$response4 = _t4.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.error) || 'Erreur de mise à jour du profil';
              throw _t4;
            case 4:
              _context4.p = 4;
              _this4.isLoading = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    changePassword: function changePassword(data) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, _error$response5, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this5.isLoading = true;
              _this5.error = null;
              _context5.p = 1;
              _context5.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.authAPI.changePassword(data);
            case 2:
              response = _context5.v;
              return _context5.a(2, response);
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              _this5.error = ((_error$response5 = _t5.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.error) || 'Erreur de changement de mot de passe';
              throw _t5;
            case 4:
              _context5.p = 4;
              _this5.isLoading = false;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    logout: function logout() {
      this.user = null;
      this.token = null;
      this.error = null;
      _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.storage.remove('jwt_token');

      // Supprimer le cookie
      document.cookie = 'jwt_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';

      // Rediriger vers la page d'accueil
      window.location.href = '/';
    },
    clearError: function clearError() {
      this.error = null;
    }
  }
});

/***/ }),

/***/ "./assets/store/modules/weight.js":
/*!****************************************!*\
  !*** ./assets/store/modules/weight.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWeightStore: () => (/* binding */ useWeightStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api.js */ "./assets/utils/api.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var useWeightStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('weight', {
  state: function state() {
    return {
      entries: [],
      latestEntry: null,
      progress: [],
      summary: null,
      pagination: null,
      isLoading: false,
      error: null
    };
  },
  getters: {
    totalEntries: function totalEntries(state) {
      return state.entries.length;
    },
    currentWeight: function currentWeight(state) {
      var _state$latestEntry;
      return ((_state$latestEntry = state.latestEntry) === null || _state$latestEntry === void 0 ? void 0 : _state$latestEntry.weight) || null;
    },
    hasEntries: function hasEntries(state) {
      return state.entries.length > 0;
    },
    sortedEntries: function sortedEntries(state) {
      return _toConsumableArray(state.entries).sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    }
  },
  actions: {
    fetchEntries: function fetchEntries() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var page, limit, response, _error$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              limit = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 50;
              _this.isLoading = true;
              _this.error = null;
              _context.p = 1;
              _context.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.getEntries(page, limit);
            case 2:
              response = _context.v;
              _this.entries = response.data;
              _this.pagination = response.metadata;
              return _context.a(2, response);
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.error = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.error) || 'Erreur de récupération des entrées';
              throw _t;
            case 4:
              _context.p = 4;
              _this.isLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    fetchLatestEntry: function fetchLatestEntry() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _error$response2, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.isLoading = true;
              _this2.error = null;
              _context2.p = 1;
              _context2.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.getLatest();
            case 2:
              response = _context2.v;
              _this2.latestEntry = response.data.entry;
              return _context2.a(2, response);
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              _this2.error = ((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.error) || 'Erreur de récupération de la dernière entrée';
              throw _t2;
            case 4:
              _context2.p = 4;
              _this2.isLoading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    createEntry: function createEntry(entryData) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _error$response3, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this3.isLoading = true;
              _this3.error = null;
              _context3.p = 1;
              _context3.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.createEntry(entryData);
            case 2:
              response = _context3.v;
              // Ajouter la nouvelle entrée à la liste
              _this3.entries.unshift(response.data.entry);
              // Mettre à jour la dernière entrée si nécessaire
              if (!_this3.latestEntry || new Date(entryData.date) > new Date(_this3.latestEntry.date)) {
                _this3.latestEntry = response.data.entry;
              }
              return _context3.a(2, response);
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              _this3.error = ((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.error) || 'Erreur de création de l\'entrée';
              throw _t3;
            case 4:
              _context3.p = 4;
              _this3.isLoading = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    updateEntry: function updateEntry(id, entryData) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _this4$latestEntry, response, index, _error$response4, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this4.isLoading = true;
              _this4.error = null;
              _context4.p = 1;
              _context4.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.updateEntry(id, entryData);
            case 2:
              response = _context4.v;
              // Mettre à jour l'entrée dans la liste
              index = _this4.entries.findIndex(function (entry) {
                return entry.id === id;
              });
              if (index !== -1) {
                _this4.entries[index] = response.data.entry;
              }
              // Mettre à jour la dernière entrée si nécessaire
              if (((_this4$latestEntry = _this4.latestEntry) === null || _this4$latestEntry === void 0 ? void 0 : _this4$latestEntry.id) === id) {
                _this4.latestEntry = response.data.entry;
              }
              return _context4.a(2, response);
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              _this4.error = ((_error$response4 = _t4.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.error) || 'Erreur de mise à jour de l\'entrée';
              throw _t4;
            case 4:
              _context4.p = 4;
              _this4.isLoading = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    deleteEntry: function deleteEntry(id) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _this5$latestEntry, _error$response5, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this5.isLoading = true;
              _this5.error = null;
              _context5.p = 1;
              _context5.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.deleteEntry(id);
            case 2:
              // Supprimer l'entrée de la liste
              _this5.entries = _this5.entries.filter(function (entry) {
                return entry.id !== id;
              });
              // Mettre à jour la dernière entrée si nécessaire
              if (((_this5$latestEntry = _this5.latestEntry) === null || _this5$latestEntry === void 0 ? void 0 : _this5$latestEntry.id) === id) {
                _this5.latestEntry = _this5.entries[0] || null;
              }
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              _this5.error = ((_error$response5 = _t5.response) === null || _error$response5 === void 0 || (_error$response5 = _error$response5.data) === null || _error$response5 === void 0 ? void 0 : _error$response5.error) || 'Erreur de suppression de l\'entrée';
              throw _t5;
            case 4:
              _context5.p = 4;
              _this5.isLoading = false;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    fetchProgress: function fetchProgress() {
      var _arguments2 = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var days, response, _error$response6, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              days = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 30;
              _this6.isLoading = true;
              _this6.error = null;
              _context6.p = 1;
              _context6.n = 2;
              return _utils_api_js__WEBPACK_IMPORTED_MODULE_1__.weightAPI.getProgress(days);
            case 2:
              response = _context6.v;
              _this6.progress = response.data.progress;
              _this6.summary = response.data.summary;
              return _context6.a(2, response);
            case 3:
              _context6.p = 3;
              _t6 = _context6.v;
              _this6.error = ((_error$response6 = _t6.response) === null || _error$response6 === void 0 || (_error$response6 = _error$response6.data) === null || _error$response6 === void 0 ? void 0 : _error$response6.error) || 'Erreur de récupération du progrès';
              throw _t6;
            case 4:
              _context6.p = 4;
              _this6.isLoading = false;
              return _context6.f(4);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 3, 4, 5]]);
      }))();
    },
    clearError: function clearError() {
      this.error = null;
    },
    clearEntries: function clearEntries() {
      this.entries = [];
      this.latestEntry = null;
      this.progress = [];
      this.summary = null;
      this.pagination = null;
    }
  }
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/utils/api.js":
/*!*****************************!*\
  !*** ./assets/utils/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authAPI: () => (/* binding */ authAPI),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   userAPI: () => (/* binding */ userAPI),
/* harmony export */   weightAPI: () => (/* binding */ weightAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// Configuration de base d'Axios
var api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Intercepteur pour ajouter le token JWT à chaque requête
api.interceptors.request.use(function (config) {
  var token = localStorage.getItem('jwt_token');
  if (token) {
    config.headers.Authorization = "Bearer ".concat(token);
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Intercepteur pour gérer les réponses et les erreurs
api.interceptors.response.use(function (response) {
  // Extraire automatiquement les données de la réponse standardisée
  if (response.data && response.data.data !== undefined) {
    return _objectSpread(_objectSpread({}, response), {}, {
      data: response.data.data,
      metadata: response.data.metadata
    });
  }
  return response;
}, function (error) {
  var _error$response, _error$response2;
  // Gestion des erreurs d'authentification
  if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401) {
    localStorage.removeItem('jwt_token');
    window.location.href = '/login';
  }

  // Gestion des erreurs de validation
  if (((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 422) {
    return Promise.reject(_objectSpread(_objectSpread({}, error), {}, {
      validationErrors: error.response.data.errors
    }));
  }
  return Promise.reject(error);
});

// Méthodes API spécifiques
var authAPI = {
  login: function login(credentials) {
    return api.post('/auth/login', credentials);
  },
  register: function register(userData) {
    return api.post('/auth/register', userData);
  },
  profile: function profile() {
    return api.get('/auth/profile');
  },
  updateProfile: function updateProfile(data) {
    return api.put('/auth/update-profile', data);
  },
  changePassword: function changePassword(data) {
    return api.post('/auth/change-password', data);
  }
};
var userAPI = {
  getUsers: function getUsers() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    return api.get("/users?page=".concat(page, "&limit=").concat(limit));
  },
  getPublicProfiles: function getPublicProfiles() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    return api.get("/users/public?page=".concat(page, "&limit=").concat(limit));
  },
  getUser: function getUser(id) {
    return api.get("/users/".concat(id));
  }
};
var weightAPI = {
  getEntries: function getEntries() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    return api.get("/weight-entries?page=".concat(page, "&limit=").concat(limit));
  },
  getLatest: function getLatest() {
    return api.get('/weight-entries/latest');
  },
  createEntry: function createEntry(data) {
    return api.post('/weight-entries', data);
  },
  getEntry: function getEntry(id) {
    return api.get("/weight-entries/".concat(id));
  },
  updateEntry: function updateEntry(id, data) {
    return api.put("/weight-entries/".concat(id), data);
  },
  deleteEntry: function deleteEntry(id) {
    return api["delete"]("/weight-entries/".concat(id));
  },
  getProgress: function getProgress() {
    var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    return api.get("/weight-entries/stats/progress?days=".concat(days));
  }
};

// Export de l'instance Axios pour utilisation directe
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

// Export global pour utilisation dans les composants Vue
window.api = api;

/***/ }),

/***/ "./assets/utils/helpers.js":
/*!*********************************!*\
  !*** ./assets/utils/helpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBMI: () => (/* binding */ calculateBMI),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatNumber: () => (/* binding */ formatNumber),
/* harmony export */   getBMICategory: () => (/* binding */ getBMICategory),
/* harmony export */   isValidEmail: () => (/* binding */ isValidEmail),
/* harmony export */   storage: () => (/* binding */ storage),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
/**
 * Fonctions utilitaires JavaScript
 */

// Formatage des dates
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  if (!date) return '';
  var d = new Date(date);
  var year = d.getFullYear();
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
};

// Formatage des nombres (poids, etc.)
var formatNumber = function formatNumber(number) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (number === null || number === undefined) return '';
  return Number(number).toFixed(decimals);
};

// Validation des emails
var isValidEmail = function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validation des mots de passe
var validatePassword = function validatePassword(password) {
  var minLength = 6;
  var hasUpperCase = /[A-Z]/.test(password);
  var hasLowerCase = /[a-z]/.test(password);
  var hasNumbers = /\d/.test(password);
  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
    errors: {
      length: password.length < minLength ? "Au moins ".concat(minLength, " caract\xE8res") : null,
      uppercase: !hasUpperCase ? 'Au moins une majuscule' : null,
      lowercase: !hasLowerCase ? 'Au moins une minuscule' : null,
      numbers: !hasNumbers ? 'Au moins un chiffre' : null
    }
  };
};

// Calcul du BMI
var calculateBMI = function calculateBMI(weight, height) {
  var weightUnit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'kg';
  var heightUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'cm';
  if (!weight || !height) return null;
  var weightKg = weight;
  var heightM = height / 100;
  if (weightUnit === 'lbs') {
    weightKg = weight * 0.453592;
  }
  if (heightUnit === 'inch') {
    heightM = height * 0.0254;
  }
  return weightKg / (heightM * heightM);
};

// Catégorisation du BMI
var getBMICategory = function getBMICategory(bmi) {
  if (!bmi) return null;
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
};

// Gestion du stockage local
var storage = {
  set: function set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage:', error);
    }
  },
  get: function get(key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    try {
      var item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      return defaultValue;
    }
  },
  remove: function remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  },
  clear: function clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Erreur lors du nettoyage:', error);
    }
  }
};

// Debounce function
var debounce = function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
var throttle = function throttle(func, limit) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        return inThrottle = false;
      }, limit);
    }
  };
};

// Export global pour utilisation dans les composants Vue
window.helpers = {
  formatDate: formatDate,
  formatNumber: formatNumber,
  isValidEmail: isValidEmail,
  validatePassword: validatePassword,
  calculateBMI: calculateBMI,
  getBMICategory: getBMICategory,
  storage: storage,
  debounce: debounce,
  throttle: throttle
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/modules/auth.js */ "./assets/store/modules/auth.js");
/* harmony import */ var _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BaseButton.vue */ "./assets/components/shared/BaseButton.vue");
/* harmony import */ var _shared_Alert_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Alert.vue */ "./assets/components/shared/Alert.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LoginForm',
  components: {
    BaseButton: _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Alert: _shared_Alert_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var authStore = (0,_store_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.useAuthStore)();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      email: '',
      password: ''
    });
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var setCookie = function setCookie(name, value) {
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
      var expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires.toUTCString(), ";path=/;SameSite=Lax");
    };
    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _err$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              isLoading.value = true;
              error.value = '';
              _context.p = 1;
              _context.n = 2;
              return authStore.login(form);
            case 2:
              response = _context.v;
              // Stocker le token dans un cookie pour les routes web
              setCookie('jwt_token', response.data.token);

              // Redirection après connexion réussie
              window.location.href = '/dashboard';
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              error.value = ((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'Erreur de connexion';
            case 4:
              _context.p = 4;
              isLoading.value = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }));
      return function handleSubmit() {
        return _ref.apply(this, arguments);
      };
    }();
    var clearError = function clearError() {
      error.value = '';
    };
    return {
      form: form,
      isLoading: isLoading,
      error: error,
      handleSubmit: handleSubmit,
      clearError: clearError
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/modules/auth.js */ "./assets/store/modules/auth.js");
/* harmony import */ var _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BaseButton.vue */ "./assets/components/shared/BaseButton.vue");
/* harmony import */ var _shared_Alert_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Alert.vue */ "./assets/components/shared/Alert.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RegisterForm',
  components: {
    BaseButton: _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Alert: _shared_Alert_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var authStore = (0,_store_modules_auth_js__WEBPACK_IMPORTED_MODULE_1__.useAuthStore)();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      email: '',
      password: ''
    });
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var handleSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _err$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              isLoading.value = true;
              error.value = '';
              _context.p = 1;
              _context.n = 2;
              return authStore.register(form);
            case 2:
              // Redirection après inscription réussie
              window.location.href = '/login';
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              error.value = ((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || 'Erreur d\'inscription';
            case 4:
              _context.p = 4;
              isLoading.value = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }));
      return function handleSubmit() {
        return _ref.apply(this, arguments);
      };
    }();
    var clearError = function clearError() {
      error.value = '';
    };
    return {
      form: form,
      isLoading: isLoading,
      error: error,
      handleSubmit: handleSubmit,
      clearError: clearError
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_modules_weight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/modules/weight.js */ "./assets/store/modules/weight.js");
/* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers.js */ "./assets/utils/helpers.js");
/* harmony import */ var _shared_LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/LoadingSpinner.vue */ "./assets/components/shared/LoadingSpinner.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WeightProgressChart',
  components: {
    LoadingSpinner: _shared_LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    userId: {
      type: [String, Number],
      required: true
    }
  },
  setup: function setup(props) {
    var weightStore = (0,_store_modules_weight_js__WEBPACK_IMPORTED_MODULE_1__.useWeightStore)();
    var chartCanvas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var selectedPeriod = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(30);
    var chart = null;
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return weightStore.isLoading;
    });
    var progress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return weightStore.progress;
    });
    var summary = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return weightStore.summary;
    });
    var hasData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return progress.value.length > 0;
    });
    var fetchProgress = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return weightStore.fetchProgress(selectedPeriod.value);
            case 1:
              updateChart();
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Erreur lors du chargement du progrès:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      return function fetchProgress() {
        return _ref.apply(this, arguments);
      };
    }();
    var updateChart = function updateChart() {
      if (!chartCanvas.value || !hasData.value) return;
      var ctx = chartCanvas.value.getContext('2d');

      // Détruire le graphique existant
      if (chart) {
        chart.destroy();
      }
      var labels = progress.value.map(function (entry) {
        return entry.date;
      });
      var weights = progress.value.map(function (entry) {
        return entry.weight;
      });
      var bmis = progress.value.map(function (entry) {
        return entry.bmi;
      });
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Poids (kg)',
            data: weights,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            yAxisID: 'y'
          }, {
            label: 'BMI',
            data: bmis,
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            yAxisID: 'y1'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Poids (kg)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'BMI'
              },
              grid: {
                drawOnChartArea: false
              }
            }
          },
          plugins: {
            legend: {
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: function label(context) {
                  var label = context.dataset.label || '';
                  var value = context.parsed.y;
                  return "".concat(label, ": ").concat((0,_utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.formatNumber)(value));
                }
              }
            }
          }
        }
      });
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      fetchProgress();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(progress, updateChart, {
      deep: true
    });
    return {
      chartCanvas: chartCanvas,
      selectedPeriod: selectedPeriod,
      isLoading: isLoading,
      progress: progress,
      summary: summary,
      hasData: hasData,
      fetchProgress: fetchProgress,
      formatNumber: _utils_helpers_js__WEBPACK_IMPORTED_MODULE_2__.formatNumber
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_modules_weight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/modules/weight.js */ "./assets/store/modules/weight.js");
/* harmony import */ var _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BaseButton.vue */ "./assets/components/shared/BaseButton.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'JournalEntryForm',
  components: {
    BaseButton: _shared_BaseButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  emits: ['entry-created'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var weightStore = (0,_store_modules_weight_js__WEBPACK_IMPORTED_MODULE_1__.useWeightStore)();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      weight: null,
      date: new Date().toISOString().split('T')[0],
      comment: ''
    });
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var handleSubmit = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              isLoading.value = true;
              _context.p = 1;
              _context.n = 2;
              return weightStore.createEntry(form);
            case 2:
              // Réinitialiser le formulaire
              form.weight = null;
              form.comment = '';
              form.date = new Date().toISOString().split('T')[0];

              // Émettre un événement de succès
              emit('entry-created');
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Erreur lors de l\'ajout:', _t);
            case 4:
              _context.p = 4;
              isLoading.value = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }));
      return function handleSubmit() {
        return _ref2.apply(this, arguments);
      };
    }();
    return {
      form: form,
      isLoading: isLoading,
      handleSubmit: handleSubmit
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Alert',
  props: {
    type: {
      type: String,
      "default": 'info',
      validator: function validator(value) {
        return ['info', 'success', 'warning', 'error'].includes(value);
      }
    },
    description: {
      type: String,
      "default": ''
    },
    dismissible: {
      type: Boolean,
      "default": false
    },
    show: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    alertClasses: function alertClasses() {
      var baseClasses = 'rounded-lg p-4 border';
      var typeClasses = {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
      };
      return "".concat(baseClasses, " ").concat(typeClasses[this.type]);
    },
    dismissButtonClasses: function dismissButtonClasses() {
      var typeClasses = {
        info: 'text-primary-500 hover:text-primary-700 focus:ring-primary-500',
        success: 'text-success-500 hover:text-success-700 focus:ring-success-500',
        warning: 'text-warning-500 hover:text-warning-700 focus:ring-warning-500',
        error: 'text-danger-500 hover:text-danger-700 focus:ring-danger-500'
      };
      return typeClasses[this.type];
    },
    iconComponent: function iconComponent() {
      var icons = {
        info: 'InfoIcon',
        success: 'SuccessIcon',
        warning: 'WarningIcon',
        error: 'ErrorIcon'
      };
      return icons[this.type];
    }
  },
  methods: {
    handleDismiss: function handleDismiss() {
      this.$emit('dismiss');
    }
  }
});

// Composants d'icônes
var InfoIcon = {
  template: "\n    <svg fill=\"currentColor\" viewBox=\"0 0 20 20\">\n      <path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clip-rule=\"evenodd\" />\n    </svg>\n  "
};
var SuccessIcon = {
  template: "\n    <svg fill=\"currentColor\" viewBox=\"0 0 20 20\">\n      <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\" />\n    </svg>\n  "
};
var WarningIcon = {
  template: "\n    <svg fill=\"currentColor\" viewBox=\"0 0 20 20\">\n      <path fill-rule=\"evenodd\" d=\"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z\" clip-rule=\"evenodd\" />\n    </svg>\n  "
};
var ErrorIcon = {
  template: "\n    <svg fill=\"currentColor\" viewBox=\"0 0 20 20\">\n      <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\" clip-rule=\"evenodd\" />\n    </svg>\n  "
};

// Enregistrer les composants d'icônes globalement
if (typeof window !== 'undefined') {
  window.InfoIcon = InfoIcon;
  window.SuccessIcon = SuccessIcon;
  window.WarningIcon = WarningIcon;
  window.ErrorIcon = ErrorIcon;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner.vue */ "./assets/components/shared/LoadingSpinner.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BaseButton',
  components: {
    LoadingSpinner: _LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary',
      validator: function validator(value) {
        return ['primary', 'secondary', 'danger', 'success', 'warning'].includes(value);
      }
    },
    size: {
      type: String,
      "default": 'md',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    type: {
      type: String,
      "default": 'button'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    fullWidth: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    buttonClasses: function buttonClasses() {
      var baseClasses = 'btn font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
      var variantClasses = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 disabled:bg-primary-300',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100',
        danger: 'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500 disabled:bg-danger-300',
        success: 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 disabled:bg-success-300',
        warning: 'bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500 disabled:bg-warning-300'
      };
      var sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
      };
      var widthClass = this.fullWidth ? 'w-full' : '';
      return "".concat(baseClasses, " ").concat(variantClasses[this.variant], " ").concat(sizeClasses[this.size], " ").concat(widthClass);
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LoadingSpinner',
  props: {
    size: {
      type: String,
      "default": 'md',
      validator: function validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      }
    },
    showText: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    spinnerClasses: function spinnerClasses() {
      var sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
      };
      return "inline-block ".concat(sizeClasses[this.size]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ActivityCard'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Feed'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FriendList'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/LoginForm.vue?vue&type=template&id=620216a1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card max-w-md mx-auto"
};
var _hoisted_2 = ["disabled"];
var _hoisted_3 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Alert");
  var _component_BaseButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseButton");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-2xl font-bold text-gray-900 mb-6"
  }, "Connexion", -1 /* CACHED */)), $setup.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Alert, {
    key: 0,
    type: "error",
    description: $setup.error,
    dismissible: "",
    onDismiss: $setup.clearError
  }, null, 8 /* PROPS */, ["description", "onDismiss"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.handleSubmit && $setup.handleSubmit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "space-y-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email",
    "class": "form-label"
  }, "Email", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.email = $event;
    }),
    type: "email",
    required: "",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "password",
    "class": "form-label"
  }, "Mot de passe", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.password = $event;
    }),
    type: "password",
    required: "",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseButton, {
    type: "submit",
    variant: "primary",
    loading: $setup.isLoading,
    "full-width": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Se connecter ")]);
    }),
    _: 1 /* STABLE */,
    __: [5]
  }, 8 /* PROPS */, ["loading"])], 32 /* NEED_HYDRATION */), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "mt-4 text-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-600"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pas encore de compte ? "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/register",
    "class": "text-primary-600 hover:text-primary-700"
  }, " S'inscrire ")])], -1 /* CACHED */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/auth/RegisterForm.vue?vue&type=template&id=085e34e3 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card max-w-md mx-auto"
};
var _hoisted_2 = ["disabled"];
var _hoisted_3 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Alert");
  var _component_BaseButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseButton");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-2xl font-bold text-gray-900 mb-6"
  }, "Inscription", -1 /* CACHED */)), $setup.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Alert, {
    key: 0,
    type: "error",
    description: $setup.error,
    dismissible: "",
    onDismiss: $setup.clearError
  }, null, 8 /* PROPS */, ["description", "onDismiss"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.handleSubmit && $setup.handleSubmit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "space-y-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email",
    "class": "form-label"
  }, "Email", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.email = $event;
    }),
    type: "email",
    required: "",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "password",
    "class": "form-label"
  }, "Mot de passe", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.password = $event;
    }),
    type: "password",
    required: "",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseButton, {
    type: "submit",
    variant: "primary",
    loading: $setup.isLoading,
    "full-width": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" S'inscrire ")]);
    }),
    _: 1 /* STABLE */,
    __: [5]
  }, 8 /* PROPS */, ["loading"])], 32 /* NEED_HYDRATION */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/dashboard/WeightProgressChart.vue?vue&type=template&id=184d1f9a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = {
  "class": "flex items-center justify-between mb-6"
};
var _hoisted_3 = {
  "class": "flex items-center space-x-2"
};
var _hoisted_4 = {
  key: 1,
  "class": "text-center py-8"
};
var _hoisted_5 = {
  key: 2,
  "class": "space-y-4"
};
var _hoisted_6 = {
  "class": "h-64"
};
var _hoisted_7 = {
  ref: "chartCanvas"
};
var _hoisted_8 = {
  key: 0,
  "class": "grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t"
};
var _hoisted_9 = {
  "class": "text-center"
};
var _hoisted_10 = {
  "class": "text-2xl font-bold text-primary-600"
};
var _hoisted_11 = {
  "class": "text-center"
};
var _hoisted_12 = {
  "class": "text-2xl font-bold text-success-600"
};
var _hoisted_13 = {
  "class": "text-center"
};
var _hoisted_14 = {
  "class": "text-2xl font-bold text-warning-600"
};
var _hoisted_15 = {
  "class": "text-center"
};
var _hoisted_16 = {
  "class": "text-2xl font-bold text-gray-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LoadingSpinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoadingSpinner");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg font-semibold text-gray-900"
  }, "Progression du poids", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.selectedPeriod = $event;
    }),
    "class": "form-input text-sm py-1",
    onChange: _cache[1] || (_cache[1] = function () {
      return $setup.fetchProgress && $setup.fetchProgress.apply($setup, arguments);
    })
  }, _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "7"
  }, "7 jours", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "30"
  }, "30 jours", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "90"
  }, "90 jours", -1 /* CACHED */)]), 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedPeriod]])])]), $setup.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LoadingSpinner, {
    key: 0,
    "class": "w-8 h-8 mx-auto"
  })) : !$setup.hasData ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-gray-500"
  }, "Aucune donnée disponible", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-400 mt-2"
  }, "Ajoutez votre premier poids pour commencer", -1 /* CACHED */)]))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Graphique "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_7, null, 512 /* NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Résumé "), $setup.summary ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatNumber($setup.summary.currentWeight)), 1 /* TEXT */), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-500"
  }, "Poids actuel", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatNumber($setup.summary.totalWeightLoss)), 1 /* TEXT */), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-500"
  }, "Perte totale", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatNumber($setup.summary.remainingWeight)), 1 /* TEXT */), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-500"
  }, "Reste à perdre", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatNumber($setup.summary.targetWeight)), 1 /* TEXT */), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-gray-500"
  }, "Objectif", -1 /* CACHED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/journal/JournalEntryForm.vue?vue&type=template&id=3dd5a532 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = ["disabled"];
var _hoisted_3 = ["disabled"];
var _hoisted_4 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BaseButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseButton");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg font-semibold text-gray-900 mb-4"
  }, "Ajouter un poids", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.handleSubmit && $setup.handleSubmit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "space-y-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "weight",
    "class": "form-label"
  }, "Poids (kg)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "weight",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.weight = $event;
    }),
    type: "number",
    step: "0.1",
    required: "",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.weight, void 0, {
    number: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "date",
    "class": "form-label"
  }, "Date", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "date",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.date = $event;
    }),
    type: "date",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.date]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "comment",
    "class": "form-label"
  }, "Commentaire (optionnel)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "comment",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.comment = $event;
    }),
    rows: "3",
    "class": "form-input",
    disabled: $setup.isLoading
  }, null, 8 /* PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.comment]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BaseButton, {
    type: "submit",
    variant: "primary",
    loading: $setup.isLoading,
    "full-width": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ajouter ")]);
    }),
    _: 1 /* STABLE */,
    __: [7]
  }, 8 /* PROPS */, ["loading"])], 32 /* NEED_HYDRATION */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/Alert.vue?vue&type=template&id=1d499c6d ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-start"
};
var _hoisted_2 = {
  "class": "flex-shrink-0"
};
var _hoisted_3 = {
  "class": "ml-3 flex-1"
};
var _hoisted_4 = {
  "class": "text-sm font-medium"
};
var _hoisted_5 = {
  key: 0,
  "class": "mt-1 text-sm opacity-90"
};
var _hoisted_6 = {
  key: 0,
  "class": "ml-auto pl-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.alertClasses),
    role: "alert"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.iconComponent), {
    "class": "w-5 h-5"
  }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.description), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.dismissible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", $options.dismissButtonClasses]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleDismiss && $options.handleDismiss.apply($options, arguments);
    })
  }, _cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "sr-only"
  }, "Fermer", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    "class": "w-4 h-4",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })], -1 /* CACHED */)]), 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/BaseButton.vue?vue&type=template&id=a04410bc ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["type", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LoadingSpinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoadingSpinner");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    type: $props.type,
    disabled: $props.disabled || $props.loading,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.buttonClasses),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleClick && $options.handleClick.apply($options, arguments);
    })
  }, [$props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LoadingSpinner, {
    key: 0,
    "class": "w-4 h-4 mr-2"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 10 /* CLASS, PROPS */, _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/shared/LoadingSpinner.vue?vue&type=template&id=e1d33a08 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "sr-only"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.spinnerClasses),
    role: "status",
    "aria-label": "Chargement"
  }, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    "class": "animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    "class": "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "class": "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })], -1 /* CACHED */)), $props.showText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, "Chargement...")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/ActivityCard.vue?vue&type=template&id=dcd1e994 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg font-semibold text-gray-900 mb-4"
  }, "Activité", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-gray-500"
  }, "Fonctionnalité à venir", -1 /* CACHED */)]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=template&id=1c557595":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/Feed.vue?vue&type=template&id=1c557595 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg font-semibold text-gray-900 mb-4"
  }, "Flux d'activités", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-gray-500"
  }, "Fonctionnalité à venir", -1 /* CACHED */)]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/social/FriendList.vue?vue&type=template&id=3cc8ae13 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "text-lg font-semibold text-gray-900 mb-4"
  }, "Amis", -1 /* CACHED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-gray-500"
  }, "Fonctionnalité à venir", -1 /* CACHED */)]));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_axios_lib_axios_js-node_mod-7aef38"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm0udnVlPzA5MjAiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGgvTG9naW5Gb3JtLnZ1ZT8wMjI2Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9hdXRoL0xvZ2luRm9ybS52dWU/NDlkYiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlckZvcm0udnVlPzg0YTQiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJGb3JtLnZ1ZT9jM2FlIiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVyRm9ybS52dWU/ZDc4YiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1dlaWdodFByb2dyZXNzQ2hhcnQudnVlPzEzMmIiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2Rhc2hib2FyZC9XZWlnaHRQcm9ncmVzc0NoYXJ0LnZ1ZT82NDk4Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9kYXNoYm9hcmQvV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWU/OTExZSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvam91cm5hbC9Kb3VybmFsRW50cnlGb3JtLnZ1ZT9jZTdiIiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9qb3VybmFsL0pvdXJuYWxFbnRyeUZvcm0udnVlPzE2YTciLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2pvdXJuYWwvSm91cm5hbEVudHJ5Rm9ybS52dWU/ODE3YSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc2hhcmVkL0FsZXJ0LnZ1ZT8xMGM4Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9zaGFyZWQvQWxlcnQudnVlP2JlNTMiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NoYXJlZC9BbGVydC52dWU/MjE0MSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc2hhcmVkL0Jhc2VCdXR0b24udnVlPzViYTciLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NoYXJlZC9CYXNlQnV0dG9uLnZ1ZT82Zjk2Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9zaGFyZWQvQmFzZUJ1dHRvbi52dWU/ZjcyZiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmdTcGlubmVyLnZ1ZT9mOWY4Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZ1NwaW5uZXIudnVlP2Q1ODYiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NoYXJlZC9Mb2FkaW5nU3Bpbm5lci52dWU/YmYxMiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWU/ZDQ1ZiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWU/ODQ0ZiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWU/MjhmMiIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0ZlZWQudnVlPzFhNmIiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NvY2lhbC9GZWVkLnZ1ZT81MTI0Iiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9zb2NpYWwvRmVlZC52dWU/ZGE1MSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0ZyaWVuZExpc3QudnVlP2M4NDUiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NvY2lhbC9GcmllbmRMaXN0LnZ1ZT9lODkzIiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9zb2NpYWwvRnJpZW5kTGlzdC52dWU/YzhiZCIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL3N0b3JlL21vZHVsZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL3N0b3JlL21vZHVsZXMvd2VpZ2h0LmpzIiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NGI3NCIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL3V0aWxzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2F1dGgvTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlckZvcm0udnVlIiwid2VicGFjazovL3Blc28tZnJvbnRlbmQvLi9hc3NldHMvY29tcG9uZW50cy9kYXNoYm9hcmQvV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWUiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL2pvdXJuYWwvSm91cm5hbEVudHJ5Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NoYXJlZC9BbGVydC52dWUiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NoYXJlZC9CYXNlQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmdTcGlubmVyLnZ1ZSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWUiLCJ3ZWJwYWNrOi8vcGVzby1mcm9udGVuZC8uL2Fzc2V0cy9jb21wb25lbnRzL3NvY2lhbC9GZWVkLnZ1ZSIsIndlYnBhY2s6Ly9wZXNvLWZyb250ZW5kLy4vYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0ZyaWVuZExpc3QudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tICdwaW5pYSc7XG5cbi8vIEltcG9ydCBkZXMgY29tcG9zYW50cyBWdWVcbmltcG9ydCBXZWlnaHRQcm9ncmVzc0NoYXJ0IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWUnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm0udnVlJztcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJGb3JtLnZ1ZSc7XG5pbXBvcnQgSm91cm5hbEVudHJ5Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvam91cm5hbC9Kb3VybmFsRW50cnlGb3JtLnZ1ZSc7XG5pbXBvcnQgRnJpZW5kTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFsL0ZyaWVuZExpc3QudnVlJztcbmltcG9ydCBGZWVkIGZyb20gJy4vY29tcG9uZW50cy9zb2NpYWwvRmVlZC52dWUnO1xuaW1wb3J0IEFjdGl2aXR5Q2FyZCBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWUnO1xuXG4vLyBNb250YWdlIGNvbmRpdGlvbm5lbCBkZXMgY29tcG9zYW50cyBWdWVcbmNvbnN0IG1vdW50VnVlQ29tcG9uZW50ID0gKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCwgc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKGBNb250YWdlIGR1IGNvbXBvc2FudCAke2NvbXBvbmVudE5hbWV9IHN1ciAke3NlbGVjdG9yfWApO1xuICAgIGNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7fSk7XG4gICAgY29uc3QgcGluaWEgPSBjcmVhdGVQaW5pYSgpO1xuICAgIGFwcC51c2UocGluaWEpO1xuICAgIFxuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcbiAgICBhcHAubW91bnQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYMOJbMOpbWVudCAke3NlbGVjdG9yfSBub24gdHJvdXbDqSBwb3VyIGxlIGNvbXBvc2FudCAke2NvbXBvbmVudE5hbWV9YCk7XG4gIH1cbn07XG5cbi8vIE1vbnRhZ2UgZGVzIGNvbXBvc2FudHMgc2Vsb24gbGVzIHBhZ2VzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NIGNoYXJnw6ksIG1vbnRhZ2UgZGVzIGNvbXBvc2FudHMgVnVlLi4uJyk7XG4gIFxuICAvLyBEYXNoYm9hcmQgY29tcG9uZW50c1xuICBtb3VudFZ1ZUNvbXBvbmVudCgnd2VpZ2h0LXByb2dyZXNzLWNoYXJ0JywgV2VpZ2h0UHJvZ3Jlc3NDaGFydCwgJyN3ZWlnaHQtcHJvZ3Jlc3MtY2hhcnQnKTtcbiAgXG4gIC8vIEF1dGggY29tcG9uZW50c1xuICBtb3VudFZ1ZUNvbXBvbmVudCgnbG9naW4tZm9ybScsIExvZ2luRm9ybSwgJyNsb2dpbi1mb3JtJyk7XG4gIG1vdW50VnVlQ29tcG9uZW50KCdyZWdpc3Rlci1mb3JtJywgUmVnaXN0ZXJGb3JtLCAnI3JlZ2lzdGVyLWZvcm0nKTtcbiAgXG4gIC8vIEpvdXJuYWwgY29tcG9uZW50c1xuICBtb3VudFZ1ZUNvbXBvbmVudCgnam91cm5hbC1lbnRyeS1mb3JtJywgSm91cm5hbEVudHJ5Rm9ybSwgJyNqb3VybmFsLWVudHJ5LWZvcm0nKTtcbiAgXG4gIC8vIFNvY2lhbCBjb21wb25lbnRzXG4gIG1vdW50VnVlQ29tcG9uZW50KCdmcmllbmQtbGlzdCcsIEZyaWVuZExpc3QsICcjZnJpZW5kLWxpc3QnKTtcbiAgbW91bnRWdWVDb21wb25lbnQoJ2ZlZWQnLCBGZWVkLCAnI2ZlZWQnKTtcbiAgbW91bnRWdWVDb21wb25lbnQoJ2FjdGl2aXR5LWNhcmQnLCBBY3Rpdml0eUNhcmQsICcjYWN0aXZpdHktY2FyZCcpO1xuICBcbiAgY29uc29sZS5sb2coJ01vbnRhZ2UgZGVzIGNvbXBvc2FudHMgdGVybWluw6knKTtcbn0pOyAiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMDIxNmExXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL2F1dGgvTG9naW5Gb3JtLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2MjAyMTZhMVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYyMDIxNmExJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjIwMjE2YTEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIwMjE2YTFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjIwMjE2YTEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjAyMTZhMVwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODVlMzRlM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVyRm9ybS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMDg1ZTM0ZTNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwODVlMzRlMycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzA4NWUzNGUzJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NWUzNGUzXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzA4NWUzNGUzJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDg1ZTM0ZTNcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dlaWdodFByb2dyZXNzQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4NGQxZjlhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1dlaWdodFByb2dyZXNzQ2hhcnQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE4NGQxZjlhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMTg0ZDFmOWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxODRkMWY5YScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg0ZDFmOWFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMTg0ZDFmOWEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1dlaWdodFByb2dyZXNzQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vV2VpZ2h0UHJvZ3Jlc3NDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9XZWlnaHRQcm9ncmVzc0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODRkMWY5YVwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSm91cm5hbEVudHJ5Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkNWE1MzJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Kb3VybmFsRW50cnlGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Kb3VybmFsRW50cnlGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9qb3VybmFsL0pvdXJuYWxFbnRyeUZvcm0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjNkZDVhNTMyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnM2RkNWE1MzInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczZGQ1YTUzMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSm91cm5hbEVudHJ5Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkNWE1MzJcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2RkNWE1MzInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0pvdXJuYWxFbnRyeUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSm91cm5hbEVudHJ5Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Kb3VybmFsRW50cnlGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGQ1YTUzMlwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQWxlcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkNDk5YzZkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWxlcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FsZXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9zaGFyZWQvQWxlcnQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFkNDk5YzZkXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWQ0OTljNmQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxZDQ5OWM2ZCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWxlcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkNDk5YzZkXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzFkNDk5YzZkJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BbGVydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BbGVydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BbGVydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWQ0OTljNmRcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Jhc2VCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwNDQxMGJjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvc2hhcmVkL0Jhc2VCdXR0b24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImEwNDQxMGJjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYTA0NDEwYmMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdhMDQ0MTBiYycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTA0NDEwYmNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYTA0NDEwYmMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0Jhc2VCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQmFzZUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CYXNlQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMDQ0MTBiY1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTG9hZGluZ1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUxZDMzYTA4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZGluZ1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWRpbmdTcGlubmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZ1NwaW5uZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImUxZDMzYTA4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZTFkMzNhMDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdlMWQzM2EwOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9hZGluZ1NwaW5uZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUxZDMzYTA4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2UxZDMzYTA4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Mb2FkaW5nU3Bpbm5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Mb2FkaW5nU3Bpbm5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Mb2FkaW5nU3Bpbm5lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTFkMzNhMDhcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FjdGl2aXR5Q2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGNkMWU5OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3Rpdml0eUNhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGl2aXR5Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0FjdGl2aXR5Q2FyZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZGNkMWU5OTRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkY2QxZTk5NCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2RjZDFlOTk0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY3Rpdml0eUNhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRjZDFlOTk0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2RjZDFlOTk0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BY3Rpdml0eUNhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQWN0aXZpdHlDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FjdGl2aXR5Q2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGNkMWU5OTRcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZlZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjNTU3NTk1XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvc29jaWFsL0ZlZWQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFjNTU3NTk1XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWM1NTc1OTUnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxYzU1NzU5NScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmVlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM1NTc1OTVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMWM1NTc1OTUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZlZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRmVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GZWVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzU1NzU5NVwiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRnJpZW5kTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjOGFlMTNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmllbmRMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmllbmRMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9zb2NpYWwvRnJpZW5kTGlzdC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2NjOGFlMTNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczY2M4YWUxMycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNjYzhhZTEzJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmllbmRMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2M4YWUxM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczY2M4YWUxMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJpZW5kTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmllbmRMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyaWVuZExpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjYzhhZTEzXCIiLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IGF1dGhBUEkgfSBmcm9tICcuLi8uLi91dGlscy9hcGkuanMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMuanMnO1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aFN0b3JlID0gZGVmaW5lU3RvcmUoJ2F1dGgnLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIHVzZXI6IG51bGwsXG4gICAgdG9rZW46IHN0b3JhZ2UuZ2V0KCdqd3RfdG9rZW4nKSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICB9KSxcblxuICBnZXR0ZXJzOiB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiAoc3RhdGUpID0+ICEhc3RhdGUudG9rZW4gJiYgISFzdGF0ZS51c2VyLFxuICAgIHVzZXJSb2xlOiAoc3RhdGUpID0+IHN0YXRlLnVzZXI/LnJvbGVzPy5bMF0gfHwgJ1JPTEVfVVNFUicsXG4gICAgaXNBZG1pbjogKHN0YXRlKSA9PiBzdGF0ZS51c2VyPy5yb2xlcz8uaW5jbHVkZXMoJ1JPTEVfQURNSU4nKSB8fCBmYWxzZSxcbiAgfSxcblxuICBhY3Rpb25zOiB7XG4gICAgYXN5bmMgbG9naW4oY3JlZGVudGlhbHMpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBUEkubG9naW4oY3JlZGVudGlhbHMpO1xuICAgICAgICB0aGlzLnRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICBcbiAgICAgICAgLy8gU3RvY2tlciBsZSB0b2tlblxuICAgICAgICBzdG9yYWdlLnNldCgnand0X3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdFcnJldXIgZGUgY29ubmV4aW9uJztcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyByZWdpc3Rlcih1c2VyRGF0YSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFQSS5yZWdpc3Rlcih1c2VyRGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgJ0VycmV1ciBkXFwnaW5zY3JpcHRpb24nO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIGZldGNoUHJvZmlsZSgpIHtcbiAgICAgIGlmICghdGhpcy50b2tlbikgcmV0dXJuO1xuICAgICAgXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQVBJLnByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdFcnJldXIgZGUgcsOpY3Vww6lyYXRpb24gZHUgcHJvZmlsJztcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyB1cGRhdGVQcm9maWxlKGRhdGEpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBUEkudXBkYXRlUHJvZmlsZShkYXRhKTtcbiAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdFcnJldXIgZGUgbWlzZSDDoCBqb3VyIGR1IHByb2ZpbCc7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgY2hhbmdlUGFzc3dvcmQoZGF0YSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFQSS5jaGFuZ2VQYXNzd29yZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnRXJyZXVyIGRlIGNoYW5nZW1lbnQgZGUgbW90IGRlIHBhc3NlJztcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlKCdqd3RfdG9rZW4nKTtcbiAgICAgIFxuICAgICAgLy8gU3VwcHJpbWVyIGxlIGNvb2tpZVxuICAgICAgZG9jdW1lbnQuY29va2llID0gJ2p3dF90b2tlbj07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQztwYXRoPS87JztcbiAgICAgIFxuICAgICAgLy8gUmVkaXJpZ2VyIHZlcnMgbGEgcGFnZSBkJ2FjY3VlaWxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIH0sXG5cbiAgICBjbGVhckVycm9yKCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfSxcbiAgfSxcbn0pOyAiLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHdlaWdodEFQSSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS5qcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VXZWlnaHRTdG9yZSA9IGRlZmluZVN0b3JlKCd3ZWlnaHQnLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGVudHJpZXM6IFtdLFxuICAgIGxhdGVzdEVudHJ5OiBudWxsLFxuICAgIHByb2dyZXNzOiBbXSxcbiAgICBzdW1tYXJ5OiBudWxsLFxuICAgIHBhZ2luYXRpb246IG51bGwsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgfSksXG5cbiAgZ2V0dGVyczoge1xuICAgIHRvdGFsRW50cmllczogKHN0YXRlKSA9PiBzdGF0ZS5lbnRyaWVzLmxlbmd0aCxcbiAgICBjdXJyZW50V2VpZ2h0OiAoc3RhdGUpID0+IHN0YXRlLmxhdGVzdEVudHJ5Py53ZWlnaHQgfHwgbnVsbCxcbiAgICBoYXNFbnRyaWVzOiAoc3RhdGUpID0+IHN0YXRlLmVudHJpZXMubGVuZ3RoID4gMCxcbiAgICBzb3J0ZWRFbnRyaWVzOiAoc3RhdGUpID0+IFsuLi5zdGF0ZS5lbnRyaWVzXS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKSksXG4gIH0sXG5cbiAgYWN0aW9uczoge1xuICAgIGFzeW5jIGZldGNoRW50cmllcyhwYWdlID0gMSwgbGltaXQgPSA1MCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2VpZ2h0QVBJLmdldEVudHJpZXMocGFnZSwgbGltaXQpO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSByZXNwb25zZS5tZXRhZGF0YTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnRXJyZXVyIGRlIHLDqWN1cMOpcmF0aW9uIGRlcyBlbnRyw6llcyc7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgZmV0Y2hMYXRlc3RFbnRyeSgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlaWdodEFQSS5nZXRMYXRlc3QoKTtcbiAgICAgICAgdGhpcy5sYXRlc3RFbnRyeSA9IHJlc3BvbnNlLmRhdGEuZW50cnk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgJ0VycmV1ciBkZSByw6ljdXDDqXJhdGlvbiBkZSBsYSBkZXJuacOocmUgZW50csOpZSc7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgY3JlYXRlRW50cnkoZW50cnlEYXRhKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3ZWlnaHRBUEkuY3JlYXRlRW50cnkoZW50cnlEYXRhKTtcbiAgICAgICAgLy8gQWpvdXRlciBsYSBub3V2ZWxsZSBlbnRyw6llIMOgIGxhIGxpc3RlXG4gICAgICAgIHRoaXMuZW50cmllcy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEuZW50cnkpO1xuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBkZXJuacOocmUgZW50csOpZSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICBpZiAoIXRoaXMubGF0ZXN0RW50cnkgfHwgbmV3IERhdGUoZW50cnlEYXRhLmRhdGUpID4gbmV3IERhdGUodGhpcy5sYXRlc3RFbnRyeS5kYXRlKSkge1xuICAgICAgICAgIHRoaXMubGF0ZXN0RW50cnkgPSByZXNwb25zZS5kYXRhLmVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgJ0VycmV1ciBkZSBjcsOpYXRpb24gZGUgbFxcJ2VudHLDqWUnO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHVwZGF0ZUVudHJ5KGlkLCBlbnRyeURhdGEpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlaWdodEFQSS51cGRhdGVFbnRyeShpZCwgZW50cnlEYXRhKTtcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdlbnRyw6llIGRhbnMgbGEgbGlzdGVcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmVudHJpZXMuZmluZEluZGV4KGVudHJ5ID0+IGVudHJ5LmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmVudHJpZXNbaW5kZXhdID0gcmVzcG9uc2UuZGF0YS5lbnRyeTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBkZXJuacOocmUgZW50csOpZSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICBpZiAodGhpcy5sYXRlc3RFbnRyeT8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5sYXRlc3RFbnRyeSA9IHJlc3BvbnNlLmRhdGEuZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnRXJyZXVyIGRlIG1pc2Ugw6Agam91ciBkZSBsXFwnZW50csOpZSc7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgZGVsZXRlRW50cnkoaWQpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWlnaHRBUEkuZGVsZXRlRW50cnkoaWQpO1xuICAgICAgICAvLyBTdXBwcmltZXIgbCdlbnRyw6llIGRlIGxhIGxpc3RlXG4gICAgICAgIHRoaXMuZW50cmllcyA9IHRoaXMuZW50cmllcy5maWx0ZXIoZW50cnkgPT4gZW50cnkuaWQgIT09IGlkKTtcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGEgZGVybmnDqHJlIGVudHLDqWUgc2kgbsOpY2Vzc2FpcmVcbiAgICAgICAgaWYgKHRoaXMubGF0ZXN0RW50cnk/LmlkID09PSBpZCkge1xuICAgICAgICAgIHRoaXMubGF0ZXN0RW50cnkgPSB0aGlzLmVudHJpZXNbMF0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnRXJyZXVyIGRlIHN1cHByZXNzaW9uIGRlIGxcXCdlbnRyw6llJztcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBmZXRjaFByb2dyZXNzKGRheXMgPSAzMCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2VpZ2h0QVBJLmdldFByb2dyZXNzKGRheXMpO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcmVzcG9uc2UuZGF0YS5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5zdW1tYXJ5ID0gcmVzcG9uc2UuZGF0YS5zdW1tYXJ5O1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdFcnJldXIgZGUgcsOpY3Vww6lyYXRpb24gZHUgcHJvZ3LDqHMnO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsZWFyRXJyb3IoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9LFxuXG4gICAgY2xlYXJFbnRyaWVzKCkge1xuICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICB0aGlzLmxhdGVzdEVudHJ5ID0gbnVsbDtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBbXTtcbiAgICAgIHRoaXMuc3VtbWFyeSA9IG51bGw7XG4gICAgICB0aGlzLnBhZ2luYXRpb24gPSBudWxsO1xuICAgIH0sXG4gIH0sXG59KTsgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gQ29uZmlndXJhdGlvbiBkZSBiYXNlIGQnQXhpb3NcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICcvYXBpJyxcbiAgdGltZW91dDogMTAwMDAsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG59KTtcblxuLy8gSW50ZXJjZXB0ZXVyIHBvdXIgYWpvdXRlciBsZSB0b2tlbiBKV1Qgw6AgY2hhcXVlIHJlcXXDqnRlXG5hcGkuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0X3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG4gIChlcnJvcikgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbi8vIEludGVyY2VwdGV1ciBwb3VyIGfDqXJlciBsZXMgcsOpcG9uc2VzIGV0IGxlcyBlcnJldXJzXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gRXh0cmFpcmUgYXV0b21hdGlxdWVtZW50IGxlcyBkb25uw6llcyBkZSBsYSByw6lwb25zZSBzdGFuZGFyZGlzw6llXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlc3BvbnNlLFxuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLmRhdGEsXG4gICAgICAgIG1ldGFkYXRhOiByZXNwb25zZS5kYXRhLm1ldGFkYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICAvLyBHZXN0aW9uIGRlcyBlcnJldXJzIGQnYXV0aGVudGlmaWNhdGlvblxuICAgIGlmIChlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3RfdG9rZW4nKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG4gICAgfVxuICAgIFxuICAgIC8vIEdlc3Rpb24gZGVzIGVycmV1cnMgZGUgdmFsaWRhdGlvblxuICAgIGlmIChlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MjIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIC4uLmVycm9yLFxuICAgICAgICB2YWxpZGF0aW9uRXJyb3JzOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG4vLyBNw6l0aG9kZXMgQVBJIHNww6ljaWZpcXVlc1xuZXhwb3J0IGNvbnN0IGF1dGhBUEkgPSB7XG4gIGxvZ2luOiAoY3JlZGVudGlhbHMpID0+IGFwaS5wb3N0KCcvYXV0aC9sb2dpbicsIGNyZWRlbnRpYWxzKSxcbiAgcmVnaXN0ZXI6ICh1c2VyRGF0YSkgPT4gYXBpLnBvc3QoJy9hdXRoL3JlZ2lzdGVyJywgdXNlckRhdGEpLFxuICBwcm9maWxlOiAoKSA9PiBhcGkuZ2V0KCcvYXV0aC9wcm9maWxlJyksXG4gIHVwZGF0ZVByb2ZpbGU6IChkYXRhKSA9PiBhcGkucHV0KCcvYXV0aC91cGRhdGUtcHJvZmlsZScsIGRhdGEpLFxuICBjaGFuZ2VQYXNzd29yZDogKGRhdGEpID0+IGFwaS5wb3N0KCcvYXV0aC9jaGFuZ2UtcGFzc3dvcmQnLCBkYXRhKSxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyQVBJID0ge1xuICBnZXRVc2VyczogKHBhZ2UgPSAxLCBsaW1pdCA9IDIwKSA9PiBhcGkuZ2V0KGAvdXNlcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCksXG4gIGdldFB1YmxpY1Byb2ZpbGVzOiAocGFnZSA9IDEsIGxpbWl0ID0gMjApID0+IGFwaS5nZXQoYC91c2Vycy9wdWJsaWM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCksXG4gIGdldFVzZXI6IChpZCkgPT4gYXBpLmdldChgL3VzZXJzLyR7aWR9YCksXG59O1xuXG5leHBvcnQgY29uc3Qgd2VpZ2h0QVBJID0ge1xuICBnZXRFbnRyaWVzOiAocGFnZSA9IDEsIGxpbWl0ID0gNTApID0+IGFwaS5nZXQoYC93ZWlnaHQtZW50cmllcz9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gKSxcbiAgZ2V0TGF0ZXN0OiAoKSA9PiBhcGkuZ2V0KCcvd2VpZ2h0LWVudHJpZXMvbGF0ZXN0JyksXG4gIGNyZWF0ZUVudHJ5OiAoZGF0YSkgPT4gYXBpLnBvc3QoJy93ZWlnaHQtZW50cmllcycsIGRhdGEpLFxuICBnZXRFbnRyeTogKGlkKSA9PiBhcGkuZ2V0KGAvd2VpZ2h0LWVudHJpZXMvJHtpZH1gKSxcbiAgdXBkYXRlRW50cnk6IChpZCwgZGF0YSkgPT4gYXBpLnB1dChgL3dlaWdodC1lbnRyaWVzLyR7aWR9YCwgZGF0YSksXG4gIGRlbGV0ZUVudHJ5OiAoaWQpID0+IGFwaS5kZWxldGUoYC93ZWlnaHQtZW50cmllcy8ke2lkfWApLFxuICBnZXRQcm9ncmVzczogKGRheXMgPSAzMCkgPT4gYXBpLmdldChgL3dlaWdodC1lbnRyaWVzL3N0YXRzL3Byb2dyZXNzP2RheXM9JHtkYXlzfWApLFxufTtcblxuLy8gRXhwb3J0IGRlIGwnaW5zdGFuY2UgQXhpb3MgcG91ciB1dGlsaXNhdGlvbiBkaXJlY3RlXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cbi8vIEV4cG9ydCBnbG9iYWwgcG91ciB1dGlsaXNhdGlvbiBkYW5zIGxlcyBjb21wb3NhbnRzIFZ1ZVxud2luZG93LmFwaSA9IGFwaTsgIiwiLyoqXG4gKiBGb25jdGlvbnMgdXRpbGl0YWlyZXMgSmF2YVNjcmlwdFxuICovXG5cbi8vIEZvcm1hdGFnZSBkZXMgZGF0ZXNcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUsIGZvcm1hdCA9ICdZWVlZLU1NLUREJykgPT4ge1xuICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBcbiAgcmV0dXJuIGZvcm1hdFxuICAgIC5yZXBsYWNlKCdZWVlZJywgeWVhcilcbiAgICAucmVwbGFjZSgnTU0nLCBtb250aClcbiAgICAucmVwbGFjZSgnREQnLCBkYXkpO1xufTtcblxuLy8gRm9ybWF0YWdlIGRlcyBub21icmVzIChwb2lkcywgZXRjLilcbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtYmVyLCBkZWNpbWFscyA9IDEpID0+IHtcbiAgaWYgKG51bWJlciA9PT0gbnVsbCB8fCBudW1iZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuICByZXR1cm4gTnVtYmVyKG51bWJlcikudG9GaXhlZChkZWNpbWFscyk7XG59O1xuXG4vLyBWYWxpZGF0aW9uIGRlcyBlbWFpbHNcbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPSAoZW1haWwpID0+IHtcbiAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbn07XG5cbi8vIFZhbGlkYXRpb24gZGVzIG1vdHMgZGUgcGFzc2VcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IG1pbkxlbmd0aCA9IDY7XG4gIGNvbnN0IGhhc1VwcGVyQ2FzZSA9IC9bQS1aXS8udGVzdChwYXNzd29yZCk7XG4gIGNvbnN0IGhhc0xvd2VyQ2FzZSA9IC9bYS16XS8udGVzdChwYXNzd29yZCk7XG4gIGNvbnN0IGhhc051bWJlcnMgPSAvXFxkLy50ZXN0KHBhc3N3b3JkKTtcbiAgXG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogcGFzc3dvcmQubGVuZ3RoID49IG1pbkxlbmd0aCAmJiBoYXNVcHBlckNhc2UgJiYgaGFzTG93ZXJDYXNlICYmIGhhc051bWJlcnMsXG4gICAgZXJyb3JzOiB7XG4gICAgICBsZW5ndGg6IHBhc3N3b3JkLmxlbmd0aCA8IG1pbkxlbmd0aCA/IGBBdSBtb2lucyAke21pbkxlbmd0aH0gY2FyYWN0w6hyZXNgIDogbnVsbCxcbiAgICAgIHVwcGVyY2FzZTogIWhhc1VwcGVyQ2FzZSA/ICdBdSBtb2lucyB1bmUgbWFqdXNjdWxlJyA6IG51bGwsXG4gICAgICBsb3dlcmNhc2U6ICFoYXNMb3dlckNhc2UgPyAnQXUgbW9pbnMgdW5lIG1pbnVzY3VsZScgOiBudWxsLFxuICAgICAgbnVtYmVyczogIWhhc051bWJlcnMgPyAnQXUgbW9pbnMgdW4gY2hpZmZyZScgOiBudWxsLFxuICAgIH1cbiAgfTtcbn07XG5cbi8vIENhbGN1bCBkdSBCTUlcbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVCTUkgPSAod2VpZ2h0LCBoZWlnaHQsIHdlaWdodFVuaXQgPSAna2cnLCBoZWlnaHRVbml0ID0gJ2NtJykgPT4ge1xuICBpZiAoIXdlaWdodCB8fCAhaGVpZ2h0KSByZXR1cm4gbnVsbDtcbiAgXG4gIGxldCB3ZWlnaHRLZyA9IHdlaWdodDtcbiAgbGV0IGhlaWdodE0gPSBoZWlnaHQgLyAxMDA7XG4gIFxuICBpZiAod2VpZ2h0VW5pdCA9PT0gJ2xicycpIHtcbiAgICB3ZWlnaHRLZyA9IHdlaWdodCAqIDAuNDUzNTkyO1xuICB9XG4gIFxuICBpZiAoaGVpZ2h0VW5pdCA9PT0gJ2luY2gnKSB7XG4gICAgaGVpZ2h0TSA9IGhlaWdodCAqIDAuMDI1NDtcbiAgfVxuICBcbiAgcmV0dXJuIHdlaWdodEtnIC8gKGhlaWdodE0gKiBoZWlnaHRNKTtcbn07XG5cbi8vIENhdMOpZ29yaXNhdGlvbiBkdSBCTUlcbmV4cG9ydCBjb25zdCBnZXRCTUlDYXRlZ29yeSA9IChibWkpID0+IHtcbiAgaWYgKCFibWkpIHJldHVybiBudWxsO1xuICBcbiAgaWYgKGJtaSA8IDE4LjUpIHJldHVybiAndW5kZXJ3ZWlnaHQnO1xuICBpZiAoYm1pIDwgMjUpIHJldHVybiAnbm9ybWFsJztcbiAgaWYgKGJtaSA8IDMwKSByZXR1cm4gJ292ZXJ3ZWlnaHQnO1xuICByZXR1cm4gJ29iZXNlJztcbn07XG5cbi8vIEdlc3Rpb24gZHUgc3RvY2thZ2UgbG9jYWxcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0ge1xuICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgc3RvY2thZ2U6JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcbiAgXG4gIGdldDogKGtleSwgZGVmYXVsdFZhbHVlID0gbnVsbCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb246JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH0sXG4gIFxuICByZW1vdmU6IChrZXkpID0+IHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb246JywgZXJyb3IpO1xuICAgIH1cbiAgfSxcbiAgXG4gIGNsZWFyOiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBuZXR0b3lhZ2U6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRGVib3VuY2UgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn07XG5cbi8vIFRocm90dGxlIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbGltaXQpID0+IHtcbiAgbGV0IGluVGhyb3R0bGU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGlmICghaW5UaHJvdHRsZSkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBpblRocm90dGxlID0gZmFsc2UsIGxpbWl0KTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyBFeHBvcnQgZ2xvYmFsIHBvdXIgdXRpbGlzYXRpb24gZGFucyBsZXMgY29tcG9zYW50cyBWdWVcbndpbmRvdy5oZWxwZXJzID0ge1xuICBmb3JtYXREYXRlLFxuICBmb3JtYXROdW1iZXIsXG4gIGlzVmFsaWRFbWFpbCxcbiAgdmFsaWRhdGVQYXNzd29yZCxcbiAgY2FsY3VsYXRlQk1JLFxuICBnZXRCTUlDYXRlZ29yeSxcbiAgc3RvcmFnZSxcbiAgZGVib3VuY2UsXG4gIHRocm90dGxlLFxufTsgIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBtYXgtdy1tZCBteC1hdXRvXCI+XG4gICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItNlwiPkNvbm5leGlvbjwvaDI+XG4gICAgXG4gICAgPEFsZXJ0XG4gICAgICB2LWlmPVwiZXJyb3JcIlxuICAgICAgdHlwZT1cImVycm9yXCJcbiAgICAgIDpkZXNjcmlwdGlvbj1cImVycm9yXCJcbiAgICAgIGRpc21pc3NpYmxlXG4gICAgICBAZGlzbWlzcz1cImNsZWFyRXJyb3JcIlxuICAgIC8+XG4gICAgXG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPEJhc2VCdXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgOmxvYWRpbmc9XCJpc0xvYWRpbmdcIlxuICAgICAgICBmdWxsLXdpZHRoXG4gICAgICA+XG4gICAgICAgIFNlIGNvbm5lY3RlclxuICAgICAgPC9CYXNlQnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgUGFzIGVuY29yZSBkZSBjb21wdGUgP1xuICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnktNjAwIGhvdmVyOnRleHQtcHJpbWFyeS03MDBcIj5cbiAgICAgICAgICBTJ2luc2NyaXJlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9tb2R1bGVzL2F1dGguanMnO1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vc2hhcmVkL0Jhc2VCdXR0b24udnVlJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9zaGFyZWQvQWxlcnQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTG9naW5Gb3JtJyxcbiAgY29tcG9uZW50czoge1xuICAgIEJhc2VCdXR0b24sXG4gICAgQWxlcnQsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuICAgIGNvbnN0IGZvcm0gPSByZWFjdGl2ZSh7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpO1xuICAgIGNvbnN0IGVycm9yID0gcmVmKCcnKTtcblxuICAgIGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cyA9IDcpID0+IHtcbiAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICAgICAgZXhwaXJlcy5zZXRUaW1lKGV4cGlyZXMuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTtleHBpcmVzPSR7ZXhwaXJlcy50b1VUQ1N0cmluZygpfTtwYXRoPS87U2FtZVNpdGU9TGF4YDtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIGVycm9yLnZhbHVlID0gJyc7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aFN0b3JlLmxvZ2luKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgLy8gU3RvY2tlciBsZSB0b2tlbiBkYW5zIHVuIGNvb2tpZSBwb3VyIGxlcyByb3V0ZXMgd2ViXG4gICAgICAgIHNldENvb2tpZSgnand0X3Rva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgIFxuICAgICAgICAvLyBSZWRpcmVjdGlvbiBhcHLDqHMgY29ubmV4aW9uIHLDqXVzc2llXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yLnZhbHVlID0gZXJyLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnRXJyZXVyIGRlIGNvbm5leGlvbic7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJFcnJvciA9ICgpID0+IHtcbiAgICAgIGVycm9yLnZhbHVlID0gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb3JtLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgZXJyb3IsXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBjbGVhckVycm9yLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+ICIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmQgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTZcIj5JbnNjcmlwdGlvbjwvaDI+XG4gICAgXG4gICAgPEFsZXJ0XG4gICAgICB2LWlmPVwiZXJyb3JcIlxuICAgICAgdHlwZT1cImVycm9yXCJcbiAgICAgIDpkZXNjcmlwdGlvbj1cImVycm9yXCJcbiAgICAgIGRpc21pc3NpYmxlXG4gICAgICBAZGlzbWlzcz1cImNsZWFyRXJyb3JcIlxuICAgIC8+XG4gICAgXG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiaGFuZGxlU3VibWl0XCIgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPEJhc2VCdXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgOmxvYWRpbmc9XCJpc0xvYWRpbmdcIlxuICAgICAgICBmdWxsLXdpZHRoXG4gICAgICA+XG4gICAgICAgIFMnaW5zY3JpcmVcbiAgICAgIDwvQmFzZUJ1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvbW9kdWxlcy9hdXRoLmpzJztcbmltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9CYXNlQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vc2hhcmVkL0FsZXJ0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1JlZ2lzdGVyRm9ybScsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYXNlQnV0dG9uLFxuICAgIEFsZXJ0LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbiAgICBjb25zdCBmb3JtID0gcmVhY3RpdmUoe1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKTtcbiAgICBjb25zdCBlcnJvciA9IHJlZignJyk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgZXJyb3IudmFsdWUgPSAnJztcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXV0aFN0b3JlLnJlZ2lzdGVyKGZvcm0pO1xuICAgICAgICAvLyBSZWRpcmVjdGlvbiBhcHLDqHMgaW5zY3JpcHRpb24gcsOpdXNzaWVcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvci52YWx1ZSA9IGVyci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgJ0VycmV1ciBkXFwnaW5zY3JpcHRpb24nO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyRXJyb3IgPSAoKSA9PiB7XG4gICAgICBlcnJvci52YWx1ZSA9ICcnO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZm9ybSxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgY2xlYXJFcnJvcixcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PiAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlByb2dyZXNzaW9uIGR1IHBvaWRzPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFBlcmlvZFwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0IHRleHQtc20gcHktMVwiXG4gICAgICAgICAgQGNoYW5nZT1cImZldGNoUHJvZ3Jlc3NcIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj43IGpvdXJzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzAgam91cnM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOTBcIj45MCBqb3Vyczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPExvYWRpbmdTcGlubmVyIHYtaWY9XCJpc0xvYWRpbmdcIiBjbGFzcz1cInctOCBoLTggbXgtYXV0b1wiIC8+XG4gICAgXG4gICAgPGRpdiB2LWVsc2UtaWY9XCIhaGFzRGF0YVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktOFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwXCI+QXVjdW5lIGRvbm7DqWUgZGlzcG9uaWJsZTwvcD5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG10LTJcIj5Bam91dGV6IHZvdHJlIHByZW1pZXIgcG9pZHMgcG91ciBjb21tZW5jZXI8L3A+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJzcGFjZS15LTRcIj5cbiAgICAgIDwhLS0gR3JhcGhpcXVlIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImgtNjRcIj5cbiAgICAgICAgPGNhbnZhcyByZWY9XCJjaGFydENhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDwhLS0gUsOpc3Vtw6kgLS0+XG4gICAgICA8ZGl2IHYtaWY9XCJzdW1tYXJ5XCIgY2xhc3M9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IHB0LTQgYm9yZGVyLXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1wcmltYXJ5LTYwMFwiPnt7IGZvcm1hdE51bWJlcihzdW1tYXJ5LmN1cnJlbnRXZWlnaHQpIH19PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+UG9pZHMgYWN0dWVsPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zdWNjZXNzLTYwMFwiPnt7IGZvcm1hdE51bWJlcihzdW1tYXJ5LnRvdGFsV2VpZ2h0TG9zcykgfX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5QZXJ0ZSB0b3RhbGU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdhcm5pbmctNjAwXCI+e3sgZm9ybWF0TnVtYmVyKHN1bW1hcnkucmVtYWluaW5nV2VpZ2h0KSB9fTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlJlc3RlIMOgIHBlcmRyZTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS02MDBcIj57eyBmb3JtYXROdW1iZXIoc3VtbWFyeS50YXJnZXRXZWlnaHQpIH19PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+T2JqZWN0aWY8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkLCBjb21wdXRlZCwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlV2VpZ2h0U3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9tb2R1bGVzL3dlaWdodC5qcyc7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzLmpzJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9zaGFyZWQvTG9hZGluZ1NwaW5uZXIudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnV2VpZ2h0UHJvZ3Jlc3NDaGFydCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2FkaW5nU3Bpbm5lcixcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IHdlaWdodFN0b3JlID0gdXNlV2VpZ2h0U3RvcmUoKTtcbiAgICBjb25zdCBjaGFydENhbnZhcyA9IHJlZihudWxsKTtcbiAgICBjb25zdCBzZWxlY3RlZFBlcmlvZCA9IHJlZigzMCk7XG4gICAgbGV0IGNoYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGlzTG9hZGluZyA9IGNvbXB1dGVkKCgpID0+IHdlaWdodFN0b3JlLmlzTG9hZGluZyk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBjb21wdXRlZCgoKSA9PiB3ZWlnaHRTdG9yZS5wcm9ncmVzcyk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGNvbXB1dGVkKCgpID0+IHdlaWdodFN0b3JlLnN1bW1hcnkpO1xuICAgIGNvbnN0IGhhc0RhdGEgPSBjb21wdXRlZCgoKSA9PiBwcm9ncmVzcy52YWx1ZS5sZW5ndGggPiAwKTtcblxuICAgIGNvbnN0IGZldGNoUHJvZ3Jlc3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWlnaHRTdG9yZS5mZXRjaFByb2dyZXNzKHNlbGVjdGVkUGVyaW9kLnZhbHVlKTtcbiAgICAgICAgdXBkYXRlQ2hhcnQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcHJvZ3LDqHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVDaGFydCA9ICgpID0+IHtcbiAgICAgIGlmICghY2hhcnRDYW52YXMudmFsdWUgfHwgIWhhc0RhdGEudmFsdWUpIHJldHVybjtcblxuICAgICAgY29uc3QgY3R4ID0gY2hhcnRDYW52YXMudmFsdWUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIFxuICAgICAgLy8gRMOpdHJ1aXJlIGxlIGdyYXBoaXF1ZSBleGlzdGFudFxuICAgICAgaWYgKGNoYXJ0KSB7XG4gICAgICAgIGNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFiZWxzID0gcHJvZ3Jlc3MudmFsdWUubWFwKGVudHJ5ID0+IGVudHJ5LmRhdGUpO1xuICAgICAgY29uc3Qgd2VpZ2h0cyA9IHByb2dyZXNzLnZhbHVlLm1hcChlbnRyeSA9PiBlbnRyeS53ZWlnaHQpO1xuICAgICAgY29uc3QgYm1pcyA9IHByb2dyZXNzLnZhbHVlLm1hcChlbnRyeSA9PiBlbnRyeS5ibWkpO1xuXG4gICAgICBjaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnUG9pZHMgKGtnKScsXG4gICAgICAgICAgICAgIGRhdGE6IHdlaWdodHMsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzBlYTVlOScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQsIDE2NSwgMjMzLCAwLjEpJyxcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICAgIHRlbnNpb246IDAuNCxcbiAgICAgICAgICAgICAgeUF4aXNJRDogJ3knLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdCTUknLFxuICAgICAgICAgICAgICBkYXRhOiBibWlzLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMyMmM1NWUnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDM0LCAxOTcsIDk0LCAwLjEpJyxcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjQsXG4gICAgICAgICAgICAgIHlBeGlzSUQ6ICd5MScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICAgIGludGVyYWN0aW9uOiB7XG4gICAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0RhdGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUG9pZHMgKGtnKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeTE6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0JNSScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjb250ZXh0LmRhdGFzZXQubGFiZWwgfHwgJyc7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHQucGFyc2VkLnk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYCR7bGFiZWx9OiAke2Zvcm1hdE51bWJlcih2YWx1ZSl9YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBmZXRjaFByb2dyZXNzKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaChwcm9ncmVzcywgdXBkYXRlQ2hhcnQsIHsgZGVlcDogdHJ1ZSB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaGFydENhbnZhcyxcbiAgICAgIHNlbGVjdGVkUGVyaW9kLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBzdW1tYXJ5LFxuICAgICAgaGFzRGF0YSxcbiAgICAgIGZldGNoUHJvZ3Jlc3MsXG4gICAgICBmb3JtYXROdW1iZXIsXG4gICAgfTtcbiAgfSxcbn07XG48L3NjcmlwdD4gIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxoMyBjbGFzcz1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTRcIj5Bam91dGVyIHVuIHBvaWRzPC9oMz5cbiAgICBcbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJoYW5kbGVTdWJtaXRcIiBjbGFzcz1cInNwYWNlLXktNFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIndlaWdodFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBvaWRzIChrZyk8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIndlaWdodFwiXG4gICAgICAgICAgdi1tb2RlbC5udW1iZXI9XCJmb3JtLndlaWdodFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5EYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kYXRlXCJcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZW50XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q29tbWVudGFpcmUgKG9wdGlvbm5lbCk8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cImNvbW1lbnRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmNvbW1lbnRcIlxuICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxCYXNlQnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIDpsb2FkaW5nPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgZnVsbC13aWR0aFxuICAgICAgPlxuICAgICAgICBBam91dGVyXG4gICAgICA8L0Jhc2VCdXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyByZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVdlaWdodFN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUvbW9kdWxlcy93ZWlnaHQuanMnO1xuaW1wb3J0IEJhc2VCdXR0b24gZnJvbSAnLi4vc2hhcmVkL0Jhc2VCdXR0b24udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSm91cm5hbEVudHJ5Rm9ybScsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYXNlQnV0dG9uLFxuICB9LFxuICBlbWl0czogWydlbnRyeS1jcmVhdGVkJ10sXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHdlaWdodFN0b3JlID0gdXNlV2VpZ2h0U3RvcmUoKTtcbiAgICBjb25zdCBmb3JtID0gcmVhY3RpdmUoe1xuICAgICAgd2VpZ2h0OiBudWxsLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICBjb21tZW50OiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyA9IHJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB3ZWlnaHRTdG9yZS5jcmVhdGVFbnRyeShmb3JtKTtcbiAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxuICAgICAgICBmb3JtLndlaWdodCA9IG51bGw7XG4gICAgICAgIGZvcm0uY29tbWVudCA9ICcnO1xuICAgICAgICBmb3JtLmRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgXG4gICAgICAgIC8vIMOJbWV0dHJlIHVuIMOpdsOpbmVtZW50IGRlIHN1Y2PDqHNcbiAgICAgICAgZW1pdCgnZW50cnktY3JlYXRlZCcpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dDonLCBlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb3JtLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+ICIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwic2hvd1wiIDpjbGFzcz1cImFsZXJ0Q2xhc3Nlc1wiIHJvbGU9XCJhbGVydFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImljb25Db21wb25lbnRcIiBjbGFzcz1cInctNSBoLTVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWwtMyBmbGV4LTFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCB2LWlmPVwiZGVzY3JpcHRpb25cIiBjbGFzcz1cIm10LTEgdGV4dC1zbSBvcGFjaXR5LTkwXCI+XG4gICAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtaWY9XCJkaXNtaXNzaWJsZVwiIGNsYXNzPVwibWwtYXV0byBwbC0zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IHJvdW5kZWQtbWQgcC0xLjUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICA6Y2xhc3M9XCJkaXNtaXNzQnV0dG9uQ2xhc3Nlc1wiXG4gICAgICAgICAgQGNsaWNrPVwiaGFuZGxlRGlzbWlzc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GZXJtZXI8L3NwYW4+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctNCBoLTRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiXG4gICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQWxlcnQnLFxuICBwcm9wczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdpbmZvJyxcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ10uaW5jbHVkZXModmFsdWUpLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgZGlzbWlzc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIHNob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgYWxlcnRDbGFzc2VzKCkge1xuICAgICAgY29uc3QgYmFzZUNsYXNzZXMgPSAncm91bmRlZC1sZyBwLTQgYm9yZGVyJztcbiAgICAgIFxuICAgICAgY29uc3QgdHlwZUNsYXNzZXMgPSB7XG4gICAgICAgIGluZm86ICdhbGVydC1pbmZvJyxcbiAgICAgICAgc3VjY2VzczogJ2FsZXJ0LXN1Y2Nlc3MnLFxuICAgICAgICB3YXJuaW5nOiAnYWxlcnQtd2FybmluZycsXG4gICAgICAgIGVycm9yOiAnYWxlcnQtZXJyb3InLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGAke2Jhc2VDbGFzc2VzfSAke3R5cGVDbGFzc2VzW3RoaXMudHlwZV19YDtcbiAgICB9LFxuICAgIFxuICAgIGRpc21pc3NCdXR0b25DbGFzc2VzKCkge1xuICAgICAgY29uc3QgdHlwZUNsYXNzZXMgPSB7XG4gICAgICAgIGluZm86ICd0ZXh0LXByaW1hcnktNTAwIGhvdmVyOnRleHQtcHJpbWFyeS03MDAgZm9jdXM6cmluZy1wcmltYXJ5LTUwMCcsXG4gICAgICAgIHN1Y2Nlc3M6ICd0ZXh0LXN1Y2Nlc3MtNTAwIGhvdmVyOnRleHQtc3VjY2Vzcy03MDAgZm9jdXM6cmluZy1zdWNjZXNzLTUwMCcsXG4gICAgICAgIHdhcm5pbmc6ICd0ZXh0LXdhcm5pbmctNTAwIGhvdmVyOnRleHQtd2FybmluZy03MDAgZm9jdXM6cmluZy13YXJuaW5nLTUwMCcsXG4gICAgICAgIGVycm9yOiAndGV4dC1kYW5nZXItNTAwIGhvdmVyOnRleHQtZGFuZ2VyLTcwMCBmb2N1czpyaW5nLWRhbmdlci01MDAnLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHR5cGVDbGFzc2VzW3RoaXMudHlwZV07XG4gICAgfSxcbiAgICBcbiAgICBpY29uQ29tcG9uZW50KCkge1xuICAgICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICAgIGluZm86ICdJbmZvSWNvbicsXG4gICAgICAgIHN1Y2Nlc3M6ICdTdWNjZXNzSWNvbicsXG4gICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nSWNvbicsXG4gICAgICAgIGVycm9yOiAnRXJyb3JJY29uJyxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJldHVybiBpY29uc1t0aGlzLnR5cGVdO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVEaXNtaXNzKCkge1xuICAgICAgdGhpcy4kZW1pdCgnZGlzbWlzcycpO1xuICAgIH0sXG4gIH0sXG59O1xuXG4vLyBDb21wb3NhbnRzIGQnaWPDtG5lc1xuY29uc3QgSW5mb0ljb24gPSB7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxufTtcblxuY29uc3QgU3VjY2Vzc0ljb24gPSB7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMC41ODYgNy43MDcgOS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG59O1xuXG5jb25zdCBXYXJuaW5nSWNvbiA9IHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04LjI1NyAzLjA5OWMuNzY1LTEuMzYgMi43MjItMS4zNiAzLjQ4NiAwbDUuNTggOS45MmMuNzUgMS4zMzQtLjIxMyAyLjk4LTEuNzQyIDIuOThINC40MmMtMS41MyAwLTIuNDkzLTEuNjQ2LTEuNzQzLTIuOThsNS41OC05Ljkyek0xMSAxM2ExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLThhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMDAyIDBWNmExIDEgMCAwMC0xLTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG59O1xuXG5jb25zdCBFcnJvckljb24gPSB7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOC43MDcgNy4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRMOC41ODYgMTBsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTAgMTEuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTEuNDE0IDEwbDEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEwIDguNTg2IDguNzA3IDcuMjkzelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxufTtcblxuLy8gRW5yZWdpc3RyZXIgbGVzIGNvbXBvc2FudHMgZCdpY8O0bmVzIGdsb2JhbGVtZW50XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LkluZm9JY29uID0gSW5mb0ljb247XG4gIHdpbmRvdy5TdWNjZXNzSWNvbiA9IFN1Y2Nlc3NJY29uO1xuICB3aW5kb3cuV2FybmluZ0ljb24gPSBXYXJuaW5nSWNvbjtcbiAgd2luZG93LkVycm9ySWNvbiA9IEVycm9ySWNvbjtcbn1cbjwvc2NyaXB0PiAiLCI8dGVtcGxhdGU+XG4gIDxidXR0b25cbiAgICA6dHlwZT1cInR5cGVcIlxuICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IGxvYWRpbmdcIlxuICAgIDpjbGFzcz1cImJ1dHRvbkNsYXNzZXNcIlxuICAgIEBjbGljaz1cImhhbmRsZUNsaWNrXCJcbiAgPlxuICAgIDxMb2FkaW5nU3Bpbm5lciB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICA8c2xvdCAvPlxuICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi9Mb2FkaW5nU3Bpbm5lci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdCYXNlQnV0dG9uJyxcbiAgY29tcG9uZW50czoge1xuICAgIExvYWRpbmdTcGlubmVyLFxuICB9LFxuICBwcm9wczoge1xuICAgIHZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2RhbmdlcicsICdzdWNjZXNzJywgJ3dhcm5pbmcnXS5pbmNsdWRlcyh2YWx1ZSksXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmNsdWRlcyh2YWx1ZSksXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYnV0dG9uJyxcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGJ1dHRvbkNsYXNzZXMoKSB7XG4gICAgICBjb25zdCBiYXNlQ2xhc3NlcyA9ICdidG4gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMic7XG4gICAgICBcbiAgICAgIGNvbnN0IHZhcmlhbnRDbGFzc2VzID0ge1xuICAgICAgICBwcmltYXJ5OiAnYmctcHJpbWFyeS02MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5LTcwMCBmb2N1czpyaW5nLXByaW1hcnktNTAwIGRpc2FibGVkOmJnLXByaW1hcnktMzAwJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnYmctZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTMwMCBmb2N1czpyaW5nLWdyYXktNTAwIGRpc2FibGVkOmJnLWdyYXktMTAwJyxcbiAgICAgICAgZGFuZ2VyOiAnYmctZGFuZ2VyLTYwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWRhbmdlci03MDAgZm9jdXM6cmluZy1kYW5nZXItNTAwIGRpc2FibGVkOmJnLWRhbmdlci0zMDAnLFxuICAgICAgICBzdWNjZXNzOiAnYmctc3VjY2Vzcy02MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1zdWNjZXNzLTcwMCBmb2N1czpyaW5nLXN1Y2Nlc3MtNTAwIGRpc2FibGVkOmJnLXN1Y2Nlc3MtMzAwJyxcbiAgICAgICAgd2FybmluZzogJ2JnLXdhcm5pbmctNjAwIHRleHQtd2hpdGUgaG92ZXI6Ymctd2FybmluZy03MDAgZm9jdXM6cmluZy13YXJuaW5nLTUwMCBkaXNhYmxlZDpiZy13YXJuaW5nLTMwMCcsXG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCBzaXplQ2xhc3NlcyA9IHtcbiAgICAgICAgc206ICdweC0zIHB5LTEuNSB0ZXh0LXNtJyxcbiAgICAgICAgbWQ6ICdweC00IHB5LTInLFxuICAgICAgICBsZzogJ3B4LTYgcHktMyB0ZXh0LWxnJyxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IHdpZHRoQ2xhc3MgPSB0aGlzLmZ1bGxXaWR0aCA/ICd3LWZ1bGwnIDogJyc7XG4gICAgICBcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gJHt2YXJpYW50Q2xhc3Nlc1t0aGlzLnZhcmlhbnRdfSAke3NpemVDbGFzc2VzW3RoaXMuc2l6ZV19ICR7d2lkdGhDbGFzc31gO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD4gIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cInNwaW5uZXJDbGFzc2VzXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGFiZWw9XCJDaGFyZ2VtZW50XCI+XG4gICAgPHN2Z1xuICAgICAgY2xhc3M9XCJhbmltYXRlLXNwaW5cIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICA+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGNsYXNzPVwib3BhY2l0eS0yNVwiXG4gICAgICAgIGN4PVwiMTJcIlxuICAgICAgICBjeT1cIjEyXCJcbiAgICAgICAgcj1cIjEwXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICA+PC9jaXJjbGU+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzcz1cIm9wYWNpdHktNzVcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICAgIDxzcGFuIHYtaWY9XCJzaG93VGV4dFwiIGNsYXNzPVwic3Itb25seVwiPkNoYXJnZW1lbnQuLi48L3NwYW4+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xvYWRpbmdTcGlubmVyJyxcbiAgcHJvcHM6IHtcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmNsdWRlcyh2YWx1ZSksXG4gICAgfSxcbiAgICBzaG93VGV4dDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3Bpbm5lckNsYXNzZXMoKSB7XG4gICAgICBjb25zdCBzaXplQ2xhc3NlcyA9IHtcbiAgICAgICAgc206ICd3LTQgaC00JyxcbiAgICAgICAgbWQ6ICd3LTYgaC02JyxcbiAgICAgICAgbGc6ICd3LTggaC04JyxcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJldHVybiBgaW5saW5lLWJsb2NrICR7c2l6ZUNsYXNzZXNbdGhpcy5zaXplXX1gO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+ICIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+QWN0aXZpdMOpPC9oMz5cbiAgICA8cCBjbGFzcz1cInRleHQtZ3JheS01MDBcIj5Gb25jdGlvbm5hbGl0w6kgw6AgdmVuaXI8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FjdGl2aXR5Q2FyZCcsXG59O1xuPC9zY3JpcHQ+ICIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+Rmx1eCBkJ2FjdGl2aXTDqXM8L2gzPlxuICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTUwMFwiPkZvbmN0aW9ubmFsaXTDqSDDoCB2ZW5pcjwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRmVlZCcsXG59O1xuPC9zY3JpcHQ+ICIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+QW1pczwvaDM+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwXCI+Rm9uY3Rpb25uYWxpdMOpIMOgIHZlbmlyPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdGcmllbmRMaXN0Jyxcbn07XG48L3NjcmlwdD4gIl0sIm5hbWVzIjpbImNyZWF0ZUFwcCIsImNyZWF0ZVBpbmlhIiwiV2VpZ2h0UHJvZ3Jlc3NDaGFydCIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkpvdXJuYWxFbnRyeUZvcm0iLCJGcmllbmRMaXN0IiwiRmVlZCIsIkFjdGl2aXR5Q2FyZCIsIm1vdW50VnVlQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImNvbXBvbmVudCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJhcHAiLCJwaW5pYSIsInVzZSIsIm1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfaW52b2tlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZGVmaW5lU3RvcmUiLCJhdXRoQVBJIiwic3RvcmFnZSIsInVzZUF1dGhTdG9yZSIsInN0YXRlIiwidXNlciIsInRva2VuIiwiZ2V0IiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJnZXR0ZXJzIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlclJvbGUiLCJfc3RhdGUkdXNlciIsInJvbGVzIiwiaXNBZG1pbiIsIl9zdGF0ZSR1c2VyMiIsImluY2x1ZGVzIiwiYWN0aW9ucyIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJfdGhpcyIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9lcnJvciRyZXNwb25zZSIsIl90IiwiX2NvbnRleHQiLCJkYXRhIiwic2V0IiwicmVnaXN0ZXIiLCJ1c2VyRGF0YSIsIl90aGlzMiIsIl9jYWxsZWUyIiwiX2Vycm9yJHJlc3BvbnNlMiIsIl90MiIsIl9jb250ZXh0MiIsImZldGNoUHJvZmlsZSIsIl90aGlzMyIsIl9jYWxsZWUzIiwiX2Vycm9yJHJlc3BvbnNlMyIsIl90MyIsIl9jb250ZXh0MyIsInByb2ZpbGUiLCJ1cGRhdGVQcm9maWxlIiwiX3RoaXM0IiwiX2NhbGxlZTQiLCJfZXJyb3IkcmVzcG9uc2U0IiwiX3Q0IiwiX2NvbnRleHQ0IiwiY2hhbmdlUGFzc3dvcmQiLCJfdGhpczUiLCJfY2FsbGVlNSIsIl9lcnJvciRyZXNwb25zZTUiLCJfdDUiLCJfY29udGV4dDUiLCJsb2dvdXQiLCJyZW1vdmUiLCJjb29raWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjbGVhckVycm9yIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5Iiwid2VpZ2h0QVBJIiwidXNlV2VpZ2h0U3RvcmUiLCJlbnRyaWVzIiwibGF0ZXN0RW50cnkiLCJwcm9ncmVzcyIsInN1bW1hcnkiLCJwYWdpbmF0aW9uIiwidG90YWxFbnRyaWVzIiwiY3VycmVudFdlaWdodCIsIl9zdGF0ZSRsYXRlc3RFbnRyeSIsIndlaWdodCIsImhhc0VudHJpZXMiLCJzb3J0ZWRFbnRyaWVzIiwic29ydCIsImIiLCJEYXRlIiwiZGF0ZSIsImZldGNoRW50cmllcyIsIl9hcmd1bWVudHMiLCJwYWdlIiwibGltaXQiLCJ1bmRlZmluZWQiLCJnZXRFbnRyaWVzIiwibWV0YWRhdGEiLCJmZXRjaExhdGVzdEVudHJ5IiwiZ2V0TGF0ZXN0IiwiZW50cnkiLCJjcmVhdGVFbnRyeSIsImVudHJ5RGF0YSIsInVuc2hpZnQiLCJ1cGRhdGVFbnRyeSIsImlkIiwiX3RoaXM0JGxhdGVzdEVudHJ5IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJkZWxldGVFbnRyeSIsIl90aGlzNSRsYXRlc3RFbnRyeSIsImZpbHRlciIsImZldGNoUHJvZ3Jlc3MiLCJfYXJndW1lbnRzMiIsIl90aGlzNiIsIl9jYWxsZWU2IiwiZGF5cyIsIl9lcnJvciRyZXNwb25zZTYiLCJfdDYiLCJfY29udGV4dDYiLCJnZXRQcm9ncmVzcyIsImNsZWFyRW50cmllcyIsImF4aW9zIiwiYXBpIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsImNvbmZpZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBdXRob3JpemF0aW9uIiwicmVqZWN0IiwiX29iamVjdFNwcmVhZCIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJ2YWxpZGF0aW9uRXJyb3JzIiwiZXJyb3JzIiwicG9zdCIsInB1dCIsInVzZXJBUEkiLCJnZXRVc2VycyIsImdldFB1YmxpY1Byb2ZpbGVzIiwiZ2V0VXNlciIsImdldEVudHJ5IiwiZm9ybWF0RGF0ZSIsImZvcm1hdCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJyZXBsYWNlIiwiZm9ybWF0TnVtYmVyIiwibnVtYmVyIiwiZGVjaW1hbHMiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaXNWYWxpZEVtYWlsIiwiZW1haWwiLCJlbWFpbFJlZ2V4IiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkIiwibWluTGVuZ3RoIiwiaGFzVXBwZXJDYXNlIiwiaGFzTG93ZXJDYXNlIiwiaGFzTnVtYmVycyIsImlzVmFsaWQiLCJ1cHBlcmNhc2UiLCJsb3dlcmNhc2UiLCJudW1iZXJzIiwiY2FsY3VsYXRlQk1JIiwiaGVpZ2h0Iiwid2VpZ2h0VW5pdCIsImhlaWdodFVuaXQiLCJ3ZWlnaHRLZyIsImhlaWdodE0iLCJnZXRCTUlDYXRlZ29yeSIsImJtaSIsImtleSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGVmYXVsdFZhbHVlIiwiaXRlbSIsInBhcnNlIiwiY2xlYXIiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiZXhlY3V0ZWRGdW5jdGlvbiIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImxhdGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRocm90dGxlIiwiaW5UaHJvdHRsZSIsImNvbnRleHQiLCJoZWxwZXJzIiwicmVmIiwicmVhY3RpdmUiLCJCYXNlQnV0dG9uIiwiQWxlcnQiLCJjb21wb25lbnRzIiwic2V0dXAiLCJhdXRoU3RvcmUiLCJmb3JtIiwic2V0Q29va2llIiwiZXhwaXJlcyIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmIiwiX2VyciRyZXNwb25zZSIsIm9uTW91bnRlZCIsImNvbXB1dGVkIiwid2F0Y2giLCJMb2FkaW5nU3Bpbm5lciIsInByb3BzIiwidXNlcklkIiwidHlwZSIsInJlcXVpcmVkIiwid2VpZ2h0U3RvcmUiLCJjaGFydENhbnZhcyIsInNlbGVjdGVkUGVyaW9kIiwiY2hhcnQiLCJoYXNEYXRhIiwidXBkYXRlQ2hhcnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGVzdHJveSIsImxhYmVscyIsIm1hcCIsIndlaWdodHMiLCJibWlzIiwiQ2hhcnQiLCJkYXRhc2V0cyIsImxhYmVsIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImZpbGwiLCJ0ZW5zaW9uIiwieUF4aXNJRCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImludGVyYWN0aW9uIiwibW9kZSIsImludGVyc2VjdCIsInNjYWxlcyIsIngiLCJkaXNwbGF5IiwidGl0bGUiLCJ0ZXh0IiwicG9zaXRpb24iLCJ5MSIsImdyaWQiLCJkcmF3T25DaGFydEFyZWEiLCJwbHVnaW5zIiwibGVnZW5kIiwidG9vbHRpcCIsImNhbGxiYWNrcyIsImRhdGFzZXQiLCJwYXJzZWQiLCJkZWVwIiwiZW1pdHMiLCJlbWl0IiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNvbW1lbnQiLCJfcmVmMiIsInZhbGlkYXRvciIsImRlc2NyaXB0aW9uIiwiZGlzbWlzc2libGUiLCJCb29sZWFuIiwic2hvdyIsImFsZXJ0Q2xhc3NlcyIsImJhc2VDbGFzc2VzIiwidHlwZUNsYXNzZXMiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkaXNtaXNzQnV0dG9uQ2xhc3NlcyIsImljb25Db21wb25lbnQiLCJpY29ucyIsIm1ldGhvZHMiLCJoYW5kbGVEaXNtaXNzIiwiJGVtaXQiLCJJbmZvSWNvbiIsInRlbXBsYXRlIiwiU3VjY2Vzc0ljb24iLCJXYXJuaW5nSWNvbiIsIkVycm9ySWNvbiIsInZhcmlhbnQiLCJzaXplIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiZnVsbFdpZHRoIiwiYnV0dG9uQ2xhc3NlcyIsInZhcmlhbnRDbGFzc2VzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImRhbmdlciIsInNpemVDbGFzc2VzIiwic20iLCJtZCIsImxnIiwid2lkdGhDbGFzcyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJzaG93VGV4dCIsInNwaW5uZXJDbGFzc2VzIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiJHNldHVwIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9BbGVydCIsIm9uRGlzbWlzcyIsIm9uU3VibWl0IiwiX2NhY2hlIiwiX3dpdGhNb2RpZmllcnMiLCIkZXZlbnQiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0Jhc2VCdXR0b24iLCJfaG9pc3RlZF8yIiwiX2hvaXN0ZWRfMyIsIm9uQ2hhbmdlIiwiX2NvbXBvbmVudF9Mb2FkaW5nU3Bpbm5lciIsIl9ob2lzdGVkXzQiLCJfaG9pc3RlZF81IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwidG90YWxXZWlnaHRMb3NzIiwiX2hvaXN0ZWRfMTMiLCJfaG9pc3RlZF8xNCIsInJlbWFpbmluZ1dlaWdodCIsIl9ob2lzdGVkXzE1IiwiX2hvaXN0ZWRfMTYiLCJ0YXJnZXRXZWlnaHQiLCJzdGVwIiwicm93cyIsIiRwcm9wcyIsIl9ub3JtYWxpemVDbGFzcyIsIiRvcHRpb25zIiwicm9sZSIsIl9yZXNvbHZlRHluYW1pY0NvbXBvbmVudCIsIl9yZW5kZXJTbG90IiwiX2N0eCIsIiRzbG90cyIsIm9uQ2xpY2siLCJ2aWV3Qm94IiwieG1sbnMiLCJjeCIsImN5Iiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==