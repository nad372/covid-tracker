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

var NavbarHeader = (function (_React$Component) {
    _inherits(NavbarHeader, _React$Component);

    function NavbarHeader() {
        var _this = this;

        _classCallCheck(this, _NavbarHeader);

        _get(Object.getPrototypeOf(_NavbarHeader.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Navigation bar header';

        this.getStyles = function () {
            return {
                header: {
                    marginRight: '-15px',
                    marginLeft: '-15px',
                    boxSizing: 'border-box',

                    '@media (min-width: 768px)': {
                        float: 'left',
                        marginRight: '0',
                        marginLeft: '0'
                    }
                },
                brand: {
                    float: 'left',
                    height: '50px',
                    padding: '15px',
                    lineHeight: '20px',
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    boxSizing: 'border-box',

                    fontSize: '18px',
                    color: '#777',
                    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',

                    ':hover': {
                        color: '#5e5e5e'
                    },

                    ':focus': {
                        color: '#5e5e5e'
                    },

                    '@media (min-width: 768px)': {
                        marginLeft: '-15px'
                    }
                },
                navbarToggle: {
                    position: 'relative',
                    float: 'right',
                    padding: '9px 10px',
                    marginTop: '8px',
                    marginRight: '15px',
                    marginBottom: '8px',
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '4px',
                    borderColor: '#ddd',
                    cursor: 'pointer',
                    boxSizing: 'border-box',

                    ':hover': {
                        backgroundColor: '#ddd'
                    },

                    ':focus': {
                        outline: '0',
                        backgroundColor: '#ddd'
                    },
                    '@media (min-width: 768px)': {
                        display: 'none'
                    }
                },
                srOnly: {
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: '0',
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    borderWidth: '0',
                    borderStyle: 'none',
                    boxSizing: 'border-box'
                },
                iconBar: {
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    borderRadius: '1px',
                    backgroundColor: '#888',
                    boxSizing: 'border-box'
                },
                burger: {
                    marginTop: '4px'
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

        this.renderToggleButton = function () {
            var defStyle = _this.getStyles();
            return _react2['default'].createElement(
                'button',
                { type: 'button', style: [defStyle.navbarToggle], onClick: _this.props.navbarToggle },
                _react2['default'].createElement(
                    'span',
                    { style: [defStyle.srOnly] },
                    'Toggle navigation'
                ),
                _react2['default'].createElement('span', { style: [defStyle.iconBar] }),
                _react2['default'].createElement('span', { style: [defStyle.iconBar, defStyle.burger] }),
                _react2['default'].createElement('span', { style: [defStyle.iconBar, defStyle.burger] })
            );
        };
    }

    _createClass(NavbarHeader, [{
        key: 'render',
        value: function render() {
            var defStyle = this.getStyles();
            var _props = this.props;
            var href = _props.href;
            var name = _props.name;
            var headerStyle = _props.headerStyle;
            var brandStyle = _props.brandStyle;

            return _react2['default'].createElement(
                'div',
                { key: 'header', style: [defStyle.header, headerStyle && headerStyle] },
                _react2['default'].createElement('span', { style: [defStyle.pseudoBefore] }),
                this.renderToggleButton(),
                _react2['default'].createElement(
                    'a',
                    { key: 'brand', style: [defStyle.brand, brandStyle && brandStyle], href: href },
                    name
                ),
                _react2['default'].createElement('span', { style: [defStyle.pseudoAfter] })
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            href: _react2['default'].PropTypes.string,
            name: _react2['default'].PropTypes.string,
            headerStyle: _react2['default'].PropTypes.object,
            brandStyle: _react2['default'].PropTypes.object
        },
        enumerable: true
    }]);

    var _NavbarHeader = NavbarHeader;
    NavbarHeader = (0, _radium2['default'])(NavbarHeader) || NavbarHeader;
    return NavbarHeader;
})(_react2['default'].Component);

exports['default'] = NavbarHeader;
module.exports = exports['default'];