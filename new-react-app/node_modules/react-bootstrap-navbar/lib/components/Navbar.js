'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var Navbar = (function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        var _this = this;

        _classCallCheck(this, _Navbar);

        _get(Object.getPrototypeOf(_Navbar.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Navigation bar';
        this.state = {
            collapseIn: false
        };

        this.getStyles = function () {
            return {
                navbar: {
                    backgroundColor: '#f8f8f8',
                    border: '1px solid #e7e7e7',
                    borderRadius: '0px',
                    position: 'relative',
                    top: '0px',
                    minHeight: '50px',
                    marginBottom: '20px',
                    display: 'block',
                    boxSizing: 'border-box'
                },
                container: {
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    boxSizing: 'border-box',

                    '@media (min-width: 768px)': {
                        width: '750px'
                    },
                    '@media (min-width: 992px)': {
                        width: '970px'
                    },
                    '@media (min-width: 1200px)': {
                        width: '1170px'
                    }
                },
                pseudoBefore: {
                    display: 'table',
                    content: ' ',
                    boxSizing: 'border-box'
                },
                pseudoAfter: {
                    clear: 'both',
                    display: 'table',
                    content: ' ',
                    boxSizing: 'border-box'
                }
            };
        };

        this.renderChildren = function () {
            var children = _this.props.children;

            return _react2['default'].Children.map(children, function (child) {
                return _react2['default'].cloneElement(child, {
                    navbarToggle: _this.navbarToggle,
                    collapseIn: _this.state.collapseIn
                });
            });
        };

        this.navbarToggle = function () {
            _this.setState({ collapseIn: !_this.state.collapseIn });
        };
    }

    _createClass(Navbar, [{
        key: 'render',
        value: function render() {
            var defStyle = this.getStyles();
            var _props = this.props;
            var navStyle = _props.navStyle;
            var contStyle = _props.contStyle;

            return _react2['default'].createElement(
                'nav',
                { ref: 'navbar', style: [defStyle.navbar, navStyle && navStyle] },
                _react2['default'].createElement('span', { style: [defStyle.pseudoBefore] }),
                _react2['default'].createElement(
                    'div',
                    { ref: 'container', style: [defStyle.container, contStyle && contStyle] },
                    _react2['default'].createElement('span', { style: [defStyle.pseudoBefore] }),
                    this.renderChildren(),
                    _react2['default'].createElement('span', { style: [defStyle.pseudoAfter] })
                ),
                _react2['default'].createElement('span', { style: [defStyle.pseudoAfter] })
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            navStyle: _react2['default'].PropTypes.object,
            contStyle: _react2['default'].PropTypes.object,
            children: _react2['default'].PropTypes.node
        },
        enumerable: true
    }]);

    var _Navbar = Navbar;
    Navbar = (0, _radium2['default'])(Navbar) || Navbar;
    return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];