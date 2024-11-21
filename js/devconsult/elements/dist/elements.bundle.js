/* eslint-disable */
this.BX = this.BX || {};
(function (exports,main_core,ui_vue3) {
    'use strict';

    var ElementsList = {
      data: function data() {},
      template: "\n        <div>\u042D\u0442\u043E \u0441\u043F\u0438\u0441\u043E\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432</div>\n    "
    };

    var ElementAddList = {
      data: function data() {},
      template: "\n        <div>\u0410 \u044D\u0442\u043E \u0444\u043E\u0440\u043C\u0430 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435</div>\n    "
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
    var _application = /*#__PURE__*/new WeakMap();
    var Elements = /*#__PURE__*/function () {
      function Elements(rootNode) {
        babelHelpers.classCallCheck(this, Elements);
        _classPrivateFieldInitSpec(this, _application, {
          writable: true,
          value: void 0
        });
        this.rootNode = document.querySelector(rootNode);
      }
      babelHelpers.createClass(Elements, [{
        key: "start",
        value: function start() {
          var context = this;
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'Elements',
            components: {
              ElementsList: ElementsList,
              ElementAddList: ElementAddList
            },
            beforeCreate: function beforeCreate() {
              this.$bitrix.Application.set(context);
            },
            template: "\n\t\t\t\t<ElementAddList />\n\t\t\t\t<br/>\n\t\t\t\t<ElementsList />\n\t\t\t"
          }));
          babelHelpers.classPrivateFieldGet(this, _application).mount(this.rootNode);
        }
      }]);
      return Elements;
    }();

    exports.Elements = Elements;

}((this.BX.Devconsult = this.BX.Devconsult || {}),BX,BX.Vue3));
