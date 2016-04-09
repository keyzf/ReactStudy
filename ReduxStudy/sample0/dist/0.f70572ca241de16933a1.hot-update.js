webpackHotUpdate(0,{

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(23);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AddTodo = __webpack_require__(86);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _TodoList = __webpack_require__(89);\n\nvar _TodoList2 = _interopRequireDefault(_TodoList);\n\nvar _Footer = __webpack_require__(87);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_AddTodo2.default, {\n          onAddClick: function onAddClick(text) {\n            return console.log('add todo', text);\n          } }),\n        _react2.default.createElement(_TodoList2.default, {\n          todos: [{\n            text: 'Use Redux',\n            completed: true\n          }, {\n            text: 'Learn to connect it to React',\n            completed: false\n          }],\n          onTodoClick: function onTodoClick(todo) {\n            return console.log('todo clicked', todo);\n          } }),\n        _react2.default.createElement(_Footer2.default, {\n          filter: 'SHOW_ALL',\n          onFilterChange: function onFilterChange(filter) {\n            return console.log('filter change', filter);\n          } })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n\nrender(_react2.default.createElement(App, null), d);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2FtcGxlMS9jb250YWluZXJzL0FwcC5qcz9iNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL0FkZFRvZG8nO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG9cbiAgICAgICAgICBvbkFkZENsaWNrPXt0ZXh0ID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvZG8nLCB0ZXh0KVxuICAgICAgICAgIH0gLz5cbiAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgICAgdG9kb3M9e1t7XG4gICAgICAgICAgICB0ZXh0OiAnVXNlIFJlZHV4JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRleHQ6ICdMZWFybiB0byBjb25uZWN0IGl0IHRvIFJlYWN0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9XX1cbiAgICAgICAgICBvblRvZG9DbGljaz17dG9kbyA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gY2xpY2tlZCcsIHRvZG8pXG4gICAgICAgICAgfSAvPlxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgZmlsdGVyPSdTSE9XX0FMTCdcbiAgICAgICAgICBvbkZpbHRlckNoYW5nZT17ZmlsdGVyID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyIGNoYW5nZScsIGZpbHRlcilcbiAgICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwPjwvQXBwPiwgZClcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzYW1wbGUxL2NvbnRhaW5lcnMvQXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQW5CQTs7OztBQUZBOzs7Ozs7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})