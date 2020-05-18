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

var NavbarDropdown = (function (_React$Component) {
    _inherits(NavbarDropdown, _React$Component);

    function NavbarDropdown() {
        var _this = this;

        _classCallCheck(this, _NavbarDropdown);

        _get(Object.getPrototypeOf(_NavbarDropdown.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Navigation bar dropdown button';
        this.state = {
            open: false
        };

        this.getStyles = function () {
            var styles = {
                dropdown: {
                    position: 'relative',
                    display: 'block',
                    boxSizing: 'border-box',

                    '@media (min-width: 768px)': {
                        float: 'left'
                    }
                },
                caret: {
                    display: 'inline-block',
                    width: '0',
                    height: '0',
                    marginLeft: '2px',
                    verticalAlign: 'middle',
                    borderTop: '4px dashed',
                    borderRight: '4px solid transparent',
                    borderLeft: '4px solid transparent'
                },
                link: {
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    lineHeight: '20px',
                    position: 'relative',
                    display: 'block',
                    boxSizing: 'border-box',
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    color: '#777',

                    ':hover': {
                        color: '#333'
                    },

                    ':focus': {
                        color: '#333'
                    },

                    '@media (min-width: 768px)': {
                        paddingTop: '15px',
                        paddingBottom: '15px'
                    }
                }
            };
            if (_this.props.index === _this.props.activeIndex) {
                styles.link.backgroundColor = _this.state.open ? '#e7e7e7' : 'transparent';
            }
            return styles;
        };

        this.renderChildren = function () {
            var _props = _this.props;
            var children = _props.children;
            var index = _props.index;
            var activeIndex = _props.activeIndex;

            var active = false;
            // this particular dropdown is clicked
            if (index === activeIndex) {
                active = true;
            }
            var newChildren = _react2['default'].Children.map(children, function (child) {
                return _react2['default'].cloneElement(child, {
                    open: _this.state.open,
                    active: active
                });
            });
            return newChildren;
        };

        this.handleDocumentClick = function () {
            if (_this.state.open) {
                _this.setState({ open: false });
                // when all the dropdowns are closed, activeIndex is set to -1
                _this.props.parentCallBack(-1);
            }
        };

        this.handleDropdownClick = function (e) {
            var _props2 = _this.props;
            var index = _props2.index;
            var parentCallBack = _props2.parentCallBack;

            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            parentCallBack(index);
        };
    }

    _createClass(NavbarDropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var index = nextProps.index;
            var activeIndex = nextProps.activeIndex;

            if (index === activeIndex) {
                if (this.state.open) {
                    this.setState({ open: false });
                    // when all the dropdowns are closed, activeIndex is set to -1
                    this.props.parentCallBack(-1);
                } else {
                    this.setState({ open: true });
                }
            } else {
                this.setState({ open: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var style = _props3.style;
            var name = _props3.name;
            var itemStyle = _props3.itemStyle;

            var defStyle = this.getStyles();
            return _react2['default'].createElement(
                'li',
                { ref: 'dropdown', style: [defStyle.dropdown, style && style] },
                _react2['default'].createElement(
                    'a',
                    { ref: 'link', onClick: this.handleDropdownClick, href: '#',
                        style: [defStyle.link, itemStyle && itemStyle] },
                    name,
                    ' ',
                    _react2['default'].createElement('b', { style: [defStyle.caret] })
                ),
                this.renderChildren()
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            name: _react2['default'].PropTypes.string,
            style: _react2['default'].PropTypes.object,
            itemStyle: _react2['default'].PropTypes.object,
            index: _react2['default'].PropTypes.number,
            activeIndex: _react2['default'].PropTypes.number,
            parentCallBack: _react2['default'].PropTypes.func
        },
        enumerable: true
    }]);

    var _NavbarDropdown = NavbarDropdown;
    NavbarDropdown = (0, _radium2['default'])(NavbarDropdown) || NavbarDropdown;
    return NavbarDropdown;
})(_react2['default'].Component);

exports['default'] = NavbarDropdown;
module.exports = exports['default'];