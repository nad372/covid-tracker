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

var NavItem = (function (_React$Component) {
    _inherits(NavItem, _React$Component);

    function NavItem() {
        _classCallCheck(this, _NavItem);

        _get(Object.getPrototypeOf(_NavItem.prototype), 'constructor', this).apply(this, arguments);

        this.displayName = 'Navigation bar item';

        this.getStyles = function () {
            return {
                base: {
                    position: 'relative',
                    display: 'block',
                    boxSizing: 'border-box',

                    '@media (min-width: 768px)': {
                        float: 'left'
                    }
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
                        color: '#333',
                        backgroundColor: 'transparent'
                    },

                    ':focus': {
                        color: '#333',
                        backgroundColor: 'transparent'
                    },

                    '@media (min-width: 768px)': {
                        paddingTop: '15px',
                        paddingBottom: '15px'
                    }
                }
            };
        };
    }

    _createClass(NavItem, [{
        key: 'render',
        value: function render() {
            var defStyle = this.getStyles();
            var _props = this.props;
            var style = _props.style;
            var link = _props.link;
            var title = _props.title;
            var itemStyle = _props.itemStyle;

            return _react2['default'].createElement(
                'li',
                { ref: 'list', style: [defStyle.base, style && style] },
                _react2['default'].createElement(
                    'a',
                    { ref: 'link', href: link, style: [defStyle.link, itemStyle && itemStyle] },
                    title
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            link: _react2['default'].PropTypes.string,
            title: _react2['default'].PropTypes.string,
            style: _react2['default'].PropTypes.object,
            itemStyle: _react2['default'].PropTypes.object
        },
        enumerable: true
    }]);

    var _NavItem = NavItem;
    NavItem = (0, _radium2['default'])(NavItem) || NavItem;
    return NavItem;
})(_react2['default'].Component);

exports['default'] = NavItem;
module.exports = exports['default'];