'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _navBarJsx = require('./navBar.jsx');

var _navBarJsx2 = _interopRequireDefault(_navBarJsx);

var Signup = (function (_Component) {
  _inherits(Signup, _Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    _get(Object.getPrototypeOf(Signup.prototype), 'constructor', this).call(this, props);
    this.state = { firstName: '',
      lastName: '',
      password: '',
      email: '',
      description: '',
      confirm: ''
    };
    this.checkFilled = this.checkFilled.bind(this);
  }

  _createClass(Signup, [{
    key: 'createUser',
    value: function createUser(newUserObj) {
      var that = this;
      _axios2['default'].post('/signup', newUserObj).then(function (response) {
        console.log("new user created: ", response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.user.firstName);
        localStorage.setItem('lastName', response.data.user.lastName);
        localStorage.setItem('id', response.data.user.id);
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('description', response.data.user.description);
        _reactRouter.browserHistory.push('/app');
      })['catch'](function (error) {
        (0, _reactDom.render)(_react2['default'].createElement(
          'div',
          { id: 'emailError' },
          ' User email already exists. Please enter a different email address. '
        ), document.getElementById('create'));
        console.log(error);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }
  }, {
    key: 'checkFilled',
    value: function checkFilled(e) {
      e.preventDefault();
      var filled = true;
      for (var attr in this.state) {
        if (this.state[attr] === '') {
          filled = false;
        }
      }
      if (!filled) {
        (0, _reactDom.render)(_react2['default'].createElement(
          'div',
          null,
          ' Please fill out all empty fields '
        ), document.getElementById('create'));
      } else {
        if (this.state.password !== this.state.confirm) {
          (0, _reactDom.render)(_react2['default'].createElement(
            'div',
            null,
            ' Passwords do not match '
          ), document.getElementById('create'));
        } else {
          (0, _reactDom.render)(_react2['default'].createElement('div', null), document.getElementById('create'));
          this.createUser(this.state);
        }
      }
    }
  }, {
    key: 'submitNewUser',
    value: function submitNewUser() {
      this.props.createUser(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(_navBarJsx2['default'], null),
        _react2['default'].createElement(
          'form',
          { className: 'signUp form-group', onSubmit: this.checkFilled },
          _react2['default'].createElement(
            'h1',
            null,
            'Create Your Account'
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'label',
              { 'for': 'fName' },
              'First Name'
            ),
            _react2['default'].createElement('input', {
              value: this.state.firstName,
              placeholder: 'Johnny',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'firstName') })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'label',
              { 'for': 'lName' },
              'Last Name'
            ),
            _react2['default'].createElement('input', {
              value: this.state.lastName,
              placeholder: 'Appleseed',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'lastName') })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'label',
              { 'for': 'trips' },
              'What trips interest you?'
            ),
            _react2['default'].createElement('input', {
              value: this.state.description,
              placeholder: 'Find my father',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'description') })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'label',
              { 'for': 'inpEmail' },
              'Email Address'
            ),
            _react2['default'].createElement('input', {
              type: 'email',
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$',
              value: this.state.email,
              placeholder: 'Your Email',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'email')
            })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'label',
              { 'for': 'password' },
              'Account Creation'
            ),
            _react2['default'].createElement('input', {
              value: this.state.password,
              type: 'password',
              pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}', title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
              placeholder: 'Create Password',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'password') })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('input', {
              value: this.state.confirm,
              type: 'password',
              placeholder: 'Confirm password',
              className: 'form-control',
              onChange: this.handleChange.bind(this, 'confirm') })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('input', {
              type: 'submit',
              value: 'Sign Up',
              className: 'btn btn-primary' })
          )
        )
      );
    }
  }]);

  return Signup;
})(_react.Component);

exports['default'] = Signup;
module.exports = exports['default'];