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

var DropdownMenu = (function (_React$Component) {
    _inherits(DropdownMenu, _React$Component);

    function DropdownMenu() {
        var _this = this;

        _classCallCheck(this, _DropdownMenu);

        _get(Object.getPrototypeOf(_DropdownMenu.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Dropdown menu items';

        this.getStyles = function () {
            var _props = _this.props;
            var open = _props.open;
            var active = _props.active;

            var styles = {
                menu: {
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    zIndex: '1000',
                    float: 'left',
                    minWidth: '160px',
                    margin: '0px',
                    padding: '5px 0px',
                    fontSize: '14px',
                    textAlign: 'left',
                    listStyle: 'none',
                    backgroundColor: '#fff',
                    backgroundClip: 'padding-box',
                    border: '1px solid #ccc',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    boxShadow: '0 6px 12px #C9C9C9',
                    boxSizing: 'border-box',

                    '@media (max-width: 767px)': {
                        position: 'static',
                        float: 'none',
                        width: 'auto',
                        marginTop: '0',
                        backgroundColor: 'transparent',
                        border: '0',
                        boxShadow: 'none'
                    }
                },
                link: {
                    display: 'block',
                    padding: '3px 20px',
                    clear: 'both',
                    fontWeight: 'normal',
                    lineHeight: '1.42857143',
                    color: '#333',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    boxSizing: 'border-box',

                    ':hover': {
                        color: '#262626',
                        backgroundColor: '#f5f5f5'
                    },

                    ':focus': {
                        color: '#262626',
                        backgroundColor: '#f5f5f5'
                    },

                    '@media (max-width: 767px)': {
                        backgroundColor: 'transparent',
                        color: '#777',

                        ':hover': {
                            color: '#333',
                            backgroundColor: 'transparent'
                        }
                    }
                }
            };
            if (active) {
                styles.menu.display = open ? 'block' : 'none';
            } else {
                styles.menu.display = 'none';
            }
            return styles;
        };
    }

    _createClass(DropdownMenu, [{
        key: 'render',
        value: function render() {
            var defStyle = this.getStyles();
            var _props2 = this.props;
            var menuItems = _props2.menuItems;
            var style = _props2.style;
            var menuItemStyle = _props2.menuItemStyle;

            return _react2['default'].createElement(
                'ul',
                { style: [defStyle.menu, style && style] },
                menuItems.map(function (item) {
                    return _react2['default'].createElement(
                        'li',
                        { key: menuItems.indexOf(item) },
                        _react2['default'].createElement(
                            'a',
                            { key: item.name, style: [defStyle.link, menuItemStyle && menuItemStyle],
                                href: item.href },
                            item.name
                        )
                    );
                })
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            menuItems: _react2['default'].PropTypes.array,
            style: _react2['default'].PropTypes.object,
            menuItemStyle: _react2['default'].PropTypes.object,
            open: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }]);

    var _DropdownMenu = DropdownMenu;
    DropdownMenu = (0, _radium2['default'])(DropdownMenu) || DropdownMenu;
    return DropdownMenu;
})(_react2['default'].Component);

exports['default'] = DropdownMenu;
module.exports = exports['default'];