webpackHotUpdate(0,{

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(23);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AddTodo = __webpack_require__(86);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _TodoList = __webpack_require__(89);\n\nvar _TodoList2 = _interopRequireDefault(_TodoList);\n\nvar _Footer = __webpack_require__(87);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _reactDom = __webpack_require__(176);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_AddTodo2.default, {\n          onAddClick: function onAddClick(text) {\n            return console.log('add todo', text);\n          } }),\n        _react2.default.createElement(_TodoList2.default, {\n          todos: [{\n            text: 'Use Redux',\n            completed: true\n          }, {\n            text: 'Learn to connect it to React',\n            completed: false\n          }],\n          onTodoClick: function onTodoClick(todo) {\n            return console.log('todo clicked', todo);\n          } }),\n        _react2.default.createElement(_Footer2.default, {\n          filter: 'SHOW_ALL',\n          onFilterChange: function onFilterChange(filter) {\n            return console.log('filter change', filter);\n          } })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('example'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2FtcGxlMS9jb250YWluZXJzL0FwcC5qcz9iNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL0FkZFRvZG8nO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkVG9kb1xuICAgICAgICAgIG9uQWRkQ2xpY2s9e3RleHQgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdG9kbycsIHRleHQpXG4gICAgICAgICAgfSAvPlxuICAgICAgICA8VG9kb0xpc3RcbiAgICAgICAgICB0b2Rvcz17W3tcbiAgICAgICAgICAgIHRleHQ6ICdVc2UgUmVkdXgnLFxuICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdGV4dDogJ0xlYXJuIHRvIGNvbm5lY3QgaXQgdG8gUmVhY3QnLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH1dfVxuICAgICAgICAgIG9uVG9kb0NsaWNrPXt0b2RvID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9kbyBjbGlja2VkJywgdG9kbylcbiAgICAgICAgICB9IC8+XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBmaWx0ZXI9J1NIT1dfQUxMJ1xuICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXtmaWx0ZXIgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXIgY2hhbmdlJywgZmlsdGVyKVxuICAgICAgICAgIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxucmVuZGVyKDxBcHA+PC9BcHA+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzYW1wbGUxL2NvbnRhaW5lcnMvQXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFuQkE7Ozs7QUFGQTs7Ozs7O0FBNkJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = __webpack_require__(106);\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kb20vaW5kZXguanM/ZjkxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QvbGliL1JlYWN0RE9NJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kb20vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})