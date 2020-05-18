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

var NavbarItems = (function (_React$Component) {
    _inherits(NavbarItems, _React$Component);

    function NavbarItems() {
        var _this = this;

        _classCallCheck(this, _NavbarItems);

        _get(Object.getPrototypeOf(_NavbarItems.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Navigation list of items';

        this.getStyles = function () {
            var styles = {
                base: {
                    margin: '7.5px -15px',
                    listStyle: 'outside none none',
                    paddingLeft: '0',
                    boxSizing: 'border-box',

                    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                    fontSize: '14px',

                    '@media (min-width: 768px)': {
                        float: 'left',
                        margin: '0'
                    }
                },
                collapse: {
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    overflowX: 'visible',
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderColor: '#E7E7E7',
                    boxShadow: '0px 1px 0px rgba(255, 255, 255, .1) inset',
                    marginRight: '-15px',
                    marginLeft: '-15px',
                    maxHeight: '340px',
                    boxSizing: 'border-box',
                    display: 'none',

                    '@media (min-width: 768px)': {
                        marginRight: '0px',
                        marginLeft: '0px',
                        paddingRight: '0px',
                        paddingLeft: '0px',
                        height: 'auto',
                        paddingBottom: '0px',
                        display: 'block',
                        overflow: 'visible',
                        width: 'auto',
                        borderTopWidth: '0px',
                        borderTopStyle: 'none',
                        boxShadow: 'none',
                        overflowY: 'visible'
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
            if (_this.props.collapseIn) {
                styles.collapse.display = 'block';
                styles.collapse.overflowY = 'auto';
            }
            return styles;
        };

        this.onClickHandler = function (activeIndex) {
            _this.setState({
                activeIndex: activeIndex
            });
        };

        this.renderChildren = function () {
            var children = _this.props.children;
            var activeIndex = _this.state.activeIndex;

            return _react2['default'].Children.map(children, function (child, index) {
                return _react2['default'].cloneElement(child, {
                    index: index,
                    activeIndex: activeIndex,
                    parentCallBack: _this.onClickHandler
                });
            });
        };
    }

    _createClass(NavbarItems, [{
        key: 'render',
        value: function render() {
            var defStyle = this.getStyles();
            var style = this.props.style;

            return _react2['default'].createElement(
                'div',
                { ref: 'collapse', style: [defStyle.collapse] },
                _react2['default'].createElement('span', { style: [defStyle.pseudoBefore] }),
                _react2['default'].createElement(
                    'ul',
                    { ref: 'navitems', style: [defStyle.base, style && style] },
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
            style: _react2['default'].PropTypes.object,
            children: _react2['default'].PropTypes.node
        },
        enumerable: true
    }]);

    var _NavbarItems = NavbarItems;
    NavbarItems = (0, _radium2['default'])(NavbarItems) || NavbarItems;
    return NavbarItems;
})(_react2['default'].Component);

exports['default'] = NavbarItems;
module.exports = exports['default'];