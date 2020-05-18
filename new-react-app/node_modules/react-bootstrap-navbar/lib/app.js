'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsNavbar = require('./components/Navbar');

var _componentsNavbar2 = _interopRequireDefault(_componentsNavbar);

var _componentsNavItem = require('./components/NavItem');

var _componentsNavItem2 = _interopRequireDefault(_componentsNavItem);

var _componentsNavbarHeader = require('./components/NavbarHeader');

var _componentsNavbarHeader2 = _interopRequireDefault(_componentsNavbarHeader);

var _componentsNavbarItems = require('./components/NavbarItems');

var _componentsNavbarItems2 = _interopRequireDefault(_componentsNavbarItems);

var _componentsNavbarDropdown = require('./components/NavbarDropdown');

var _componentsNavbarDropdown2 = _interopRequireDefault(_componentsNavbarDropdown);

var _componentsDropdownMenu = require('./components/DropdownMenu');

var _componentsDropdownMenu2 = _interopRequireDefault(_componentsDropdownMenu);

var navitems = [{ link: '#', title: 'Setup' }, { link: '#', title: 'Usage' }, { link: '#', title: 'Advanced' }, { link: '#', title: 'Try it out' }, { link: '#', title: 'FAQ' }];

var dropdownItems = [{ href: '#', name: 'ES2015' }, { href: '#', name: 'Setup' }, { href: '#', name: 'Usage' }, { href: '#', name: 'Advanced' }, { href: '#', name: 'Try it' }, { href: '#', name: 'FAQ' }];

var navbarInstance = _react2['default'].createElement(
    _componentsNavbar2['default'],
    null,
    _react2['default'].createElement(_componentsNavbarHeader2['default'], { href: 'http://www.google.com', name: 'Babel' }),
    _react2['default'].createElement(
        _componentsNavbarItems2['default'],
        null,
        navitems.map(function (item) {
            return _react2['default'].createElement(_componentsNavItem2['default'], { key: navitems.indexOf(item), link: item.link, title: item.title });
        }),
        _react2['default'].createElement(
            _componentsNavbarDropdown2['default'],
            { name: 'Dropdown' },
            _react2['default'].createElement(_componentsDropdownMenu2['default'], { menuItems: dropdownItems })
        ),
        _react2['default'].createElement(
            _componentsNavbarDropdown2['default'],
            { name: 'Dropdown' },
            _react2['default'].createElement(_componentsDropdownMenu2['default'], { menuItems: dropdownItems })
        )
    )
);

_react2['default'].render(navbarInstance, document.getElementById('navigation_bar'));