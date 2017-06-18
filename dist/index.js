'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//helpers:
function dasherize(inStr) {
  return inStr.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

var LifecycleWebpackPlugin = function () {
  function LifecycleWebpackPlugin(inOptions) {
    _classCallCheck(this, LifecycleWebpackPlugin);

    this.options = Object.assign(_const2.default, inOptions);
  }

  _createClass(LifecycleWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      var keys = Object.keys(this.options);

      console.log(dasherize(item), this.options[item]);
      keys.forEach(function (item) {
        compiler.plugin(dasherize(item), _this.options[item]);
      });
    }
  }]);

  return LifecycleWebpackPlugin;
}();

exports.default = LifecycleWebpackPlugin;