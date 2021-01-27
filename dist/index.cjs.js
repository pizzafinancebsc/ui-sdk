'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) { return get__default['default'](theme, path, fallback); }; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1280 1160" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#6d1b4d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M240 1153 c-23 -9 -30 -24 -30 -69 0 -22 -6 -49 -14 -60 -15 -20 -9 -21 -105 18 -15 6 -35 8 -45 5 -23 -9 -21 -84 4 -172 18 -63 18 -71 3 -80 -68 -43 -68 -68 2 -87 40 -11 45 -15 45 -41 0 -23 4 -28 18 -25 13 4 26 -11 52 -55 62 -107 238 -278 408 -397 41 -29 59 -47 52 -54 -5 -5 -10 -27 -10 -48 0 -32 5 -41 32 -58 42 -26 121 -34 193 -21 190 34 363 198 420 395 14 47 16 84 12 180 -9 212 -30 238 -179 217 -102 -15 -258 -6 -302 16 -16 8 -43 13 -60 10 -17 -3 -57 0 -89 5 -52 9 -57 12 -51 32 3 11 10 25 15 31 18 19 10 73 -13 89 -54 38 -108 6 -118 -69 l-5 -44 -90 30 c-120 40 -121 42 -95 115 33 93 34 100 11 123 -21 21 -34 24 -61 14z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#c41924", stroke: "none" },
            React__default['default'].createElement("path", { d: "M393 688 c-27 -13 -47 -59 -38 -90 11 -34 54 -76 91 -88 125 -42 160 125 38 176 -39 16 -61 17 -91 2z" }),
            React__default['default'].createElement("path", { d: "M655 418 c-49 -29 -57 -73 -25 -125 25 -41 59 -63 109 -70 35 -5 44 -2 71 25 16 17 30 41 30 54 0 30 -33 83 -64 103 -33 22 -96 29 -121 13z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#62554d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 663 c-5 -29 7 -63 23 -63 5 0 7 8 4 18 -5 16 -5 16 6 0 16 -25 30 -22 30 5 0 21 -36 67 -52 67 -3 0 -8 -12 -11 -27z" }),
            React__default['default'].createElement("path", { d: "M670 646 c0 -22 28 -46 53 -46 18 0 19 2 7 10 -12 8 -10 10 9 10 23 0 24 1 6 20 -21 23 -75 27 -75 6z" }),
            React__default['default'].createElement("path", { d: "M911 517 c-33 -16 -41 -42 -12 -34 18 4 20 3 10 -9 -16 -20 5 -18 25 2 16 16 22 54 9 54 -5 0 -19 -6 -32 -13z" }),
            React__default['default'].createElement("path", { d: "M488 414 c-32 -17 -39 -49 -9 -41 14 3 18 1 14 -9 -3 -8 -1 -14 4 -14 14 0 39 31 47 58 9 27 -14 29 -56 6z" }),
            React__default['default'].createElement("path", { d: "M90 827 c0 -20 30 -57 46 -57 21 0 17 26 -8 50 -25 23 -38 26 -38 7z" }),
            React__default['default'].createElement("path", { d: "M49 768 c-32 -19 -32 -21 -14 -34 23 -17 72 -18 78 -1 3 6 3 -8 0 -33 l-4 -45 25 28 c27 29 33 52 16 62 -5 3 -10 1 -10 -4 0 -8 -6 -7 -19 1 -10 6 -17 17 -14 23 8 22 -24 24 -58 3z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#9a444d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1128 c-7 -7 -12 -30 -12 -53 0 -80 -44 -104 -120 -65 -60 31 -58 24 6 -20 33 -22 84 -63 114 -91 47 -43 43 -41 -27 15 -74 58 -132 96 -148 96 -9 0 -6 -45 6 -98 10 -42 17 -52 46 -66 18 -9 39 -27 45 -41 6 -14 17 -25 25 -25 18 0 17 -19 -2 -26 -8 -4 -12 -10 -9 -15 3 -5 0 -24 -7 -43 -11 -31 -10 -37 34 -104 81 -125 238 -275 413 -393 63 -43 86 -46 160 -21 135 47 229 136 265 253 21 67 25 163 9 221 -9 31 -15 37 -43 41 l-32 4 33 1 c60 3 30 26 -42 34 -83 8 -116 19 -162 54 -33 26 -38 27 -67 14 -18 -7 -50 -15 -73 -17 -36 -4 -44 -1 -63 22 -25 33 -26 46 -5 90 21 44 15 67 -20 80 -24 8 -31 6 -47 -14 -12 -15 -19 -39 -19 -67 0 -39 -3 -46 -27 -55 -46 -17 -142 10 -190 54 -40 36 -37 89 11 198 4 10 1 23 -9 33 -20 19 -27 20 -43 4z m66 -507 c3 -38 1 -41 -22 -41 -14 0 -35 9 -47 21 -17 17 -20 28 -14 57 10 53 14 56 48 29 25 -19 33 -33 35 -66z m191 71 c48 -24 76 -65 76 -112 0 -106 -146 -120 -212 -21 -32 47 -30 86 6 122 35 34 78 38 130 11z m252 -41 c20 -16 22 -23 13 -38 -18 -29 -73 -24 -97 9 -11 14 -16 31 -13 37 11 18 72 13 97 -8z m213 -138 c-13 -54 -45 -74 -84 -53 -39 21 13 78 73 80 14 0 16 -5 11 -27z m-408 -105 c-8 -43 -42 -71 -75 -63 -37 9 -43 19 -30 47 13 30 42 46 83 47 27 1 28 -1 22 -31z m214 14 c78 -39 103 -130 51 -183 -52 -51 -149 -31 -198 41 -69 101 33 200 147 142z" }),
            React__default['default'].createElement("path", { d: "M384 682 c-21 -14 -35 -53 -29 -82 6 -30 66 -90 88 -90 7 0 -3 9 -21 20 -36 22 -65 79 -55 107 3 10 13 26 21 36 16 18 14 22 -4 9z" }),
            React__default['default'].createElement("path", { d: "M630 398 c-24 -26 -26 -58 -5 -98 16 -30 60 -70 79 -70 6 0 -4 9 -22 20 -58 36 -74 107 -34 153 22 25 7 21 -18 -5z" }),
            React__default['default'].createElement("path", { d: "M733 223 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" }),
            React__default['default'].createElement("path", { d: "M299 896 c15 -18 96 -46 130 -45 16 0 -4 11 -54 29 -94 35 -91 34 -76 16z" }),
            React__default['default'].createElement("path", { d: "M609 807 c15 -19 56 -23 66 -7 3 6 -5 10 -19 10 -13 0 -33 3 -43 7 -16 6 -16 5 -4 -10z" }),
            React__default['default'].createElement("path", { d: "M1103 775 c-46 -20 -69 -59 -54 -92 11 -23 16 -25 60 -21 97 9 154 74 99 112 -27 19 -63 20 -105 1z" }),
            React__default['default'].createElement("path", { d: "M46 763 c-29 -15 -29 -16 -10 -30 22 -16 66 -14 71 4 2 6 -4 13 -14 16 -17 5 -17 5 0 6 10 0 15 6 12 11 -9 14 -25 12 -59 -7z" }),
            React__default['default'].createElement("path", { d: "M869 764 c19 -8 64 -18 101 -21 56 -5 68 -3 73 11 5 13 -1 16 -37 16 -24 0 -72 2 -107 5 l-64 5 34 -16z" }),
            React__default['default'].createElement("path", { d: "M1194 674 c-25 -14 -60 -25 -87 -26 l-45 -2 -4 -106 c-3 -87 -8 -115 -30 -162 -51 -111 -159 -191 -304 -227 -72 -17 -90 -34 -81 -73 11 -44 99 -66 193 -49 185 34 352 189 408 380 22 77 20 294 -3 290 -3 -1 -25 -12 -47 -25z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#a5602f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 1123 c-4 -3 -7 -28 -7 -55 0 -35 -6 -54 -20 -68 -23 -23 -28 -24 -67 -10 -27 10 -26 9 7 -17 19 -15 56 -47 81 -71 26 -23 71 -56 100 -72 30 -16 49 -30 43 -30 -19 0 -119 65 -192 127 -40 34 -86 66 -103 72 -34 12 -36 4 -17 -79 10 -43 18 -56 49 -76 21 -13 40 -32 44 -43 3 -12 11 -20 18 -18 6 1 13 -6 15 -15 2 -10 -2 -18 -10 -18 -7 0 -13 -10 -13 -22 -1 -13 -4 -32 -8 -44 -6 -16 5 -40 42 -96 79 -121 240 -273 409 -388 64 -43 64 -43 113 -32 135 31 257 128 299 237 18 45 24 81 24 145 1 136 2 136 -101 148 l-88 11 82 -5 c45 -2 84 0 87 5 6 9 -39 21 -88 21 -42 1 -99 22 -146 55 l-39 27 -54 -22 c-48 -20 -57 -21 -83 -9 -38 19 -52 60 -35 102 24 60 24 65 -2 81 -13 9 -31 14 -40 10 -20 -7 -38 -60 -31 -89 14 -57 -88 -70 -183 -24 -75 36 -90 96 -48 188 19 41 23 57 14 67 -12 15 -41 19 -52 7z m47 -442 c24 -21 38 -59 31 -82 -8 -25 -49 -25 -75 1 -22 22 -25 46 -10 85 10 27 18 27 54 -4z m224 9 c39 -24 72 -75 72 -111 0 -36 -34 -76 -70 -84 -99 -22 -196 78 -160 164 21 52 99 67 158 31z m247 -40 c9 -10 15 -26 11 -35 -8 -21 -47 -35 -69 -23 -23 12 -50 55 -42 68 11 18 80 12 100 -10z m210 -137 c-13 -55 -53 -78 -87 -50 -34 26 10 75 71 76 20 1 22 -2 16 -26z m-409 -105 c-12 -60 -58 -86 -100 -55 -14 10 -15 18 -7 40 12 30 40 45 85 46 27 1 28 -1 22 -31z m212 18 c66 -35 101 -117 72 -171 -26 -48 -118 -58 -176 -20 -54 35 -82 126 -51 166 31 40 104 51 155 25z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#4cb859", stroke: "none" },
            React__default['default'].createElement("path", { d: "M246 673 c-10 -11 -7 -51 5 -59 8 -4 9 1 4 17 -7 21 -5 20 18 -6 21 -24 26 -27 27 -12 0 36 -37 77 -54 60z" }),
            React__default['default'].createElement("path", { d: "M683 652 c-17 -11 11 -52 34 -52 14 0 14 2 -3 15 -18 15 -18 15 9 9 35 -8 36 13 1 26 -30 12 -26 12 -41 2z" }),
            React__default['default'].createElement("path", { d: "M895 504 c-21 -21 -13 -29 14 -14 14 7 21 7 21 0 0 -5 -5 -10 -12 -10 -6 0 -8 -3 -4 -7 8 -8 36 23 36 39 0 14 -38 9 -55 -8z" }),
            React__default['default'].createElement("path", { d: "M477 402 c-24 -26 -21 -33 9 -22 35 14 42 12 20 -5 -17 -13 -17 -15 -3 -15 16 0 37 28 37 49 0 18 -46 12 -63 -7z" }),
            React__default['default'].createElement("path", { d: "M90 828 c0 -8 7 -23 16 -34 8 -10 12 -12 8 -4 -7 13 -6 13 10 0 17 -13 18 -13 15 4 -5 25 -49 55 -49 34z" }),
            React__default['default'].createElement("path", { d: "M46 764 c-34 -19 -23 -35 24 -37 35 -2 53 18 23 26 -17 5 -17 5 0 6 10 0 15 6 12 11 -8 14 -25 12 -59 -6z" }),
            React__default['default'].createElement("path", { d: "M140 729 c0 -5 -4 -7 -10 -4 -11 7 -26 -43 -15 -53 9 -9 35 27 35 50 0 10 -2 18 -5 18 -3 0 -5 -5 -5 -11z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#d59a17", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1118 c-7 -7 -12 -33 -12 -58 0 -56 -25 -85 -65 -77 -15 2 -23 1 -18 -3 134 -122 218 -174 330 -205 26 -7 40 -14 30 -14 -31 -2 -169 48 -212 76 -21 14 -67 50 -102 79 -34 29 -81 63 -103 74 l-40 20 0 -22 c1 -51 26 -123 48 -134 32 -16 62 -45 62 -60 0 -7 6 -11 14 -8 20 8 29 -12 13 -28 -8 -7 -16 -25 -19 -38 -3 -14 -8 -32 -12 -41 -10 -24 81 -156 171 -246 84 -85 181 -166 280 -232 l62 -42 62 16 c128 32 222 102 271 203 30 60 33 77 36 172 5 131 3 135 -105 144 -147 14 -164 24 -33 20 l125 -4 -80 14 c-85 14 -116 26 -152 58 -23 22 -39 21 -120 -3 -39 -12 -45 -11 -70 7 -33 25 -42 78 -19 121 17 35 5 63 -27 63 -35 0 -47 -19 -47 -72 0 -56 -15 -68 -82 -68 -52 0 -139 39 -162 71 -22 32 -20 91 5 149 22 51 20 80 -4 80 -7 0 -18 -5 -25 -12z m58 -455 c30 -38 24 -77 -13 -81 -54 -6 -86 55 -57 109 13 23 37 14 70 -28z m236 5 c25 -25 37 -47 41 -76 5 -36 2 -45 -26 -73 -29 -29 -36 -31 -83 -27 -45 5 -57 11 -90 46 -48 52 -53 108 -12 149 23 23 31 25 80 21 47 -4 61 -10 90 -40z m224 -20 c11 -12 20 -25 20 -30 0 -14 -61 -39 -80 -33 -21 7 -61 65 -54 77 3 4 25 8 49 8 33 0 50 -6 65 -22z m210 -123 c0 -34 -30 -75 -54 -75 -60 0 -72 25 -31 65 28 29 85 35 85 10z m-220 -90 c36 -10 89 -64 99 -102 34 -123 -121 -173 -217 -71 -56 61 -42 151 28 175 34 12 40 11 90 -2z m-186 -12 c-25 -78 -40 -90 -94 -78 -65 14 -14 95 59 95 34 0 39 -3 35 -17z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#c6714f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -6 -3 -10 -10 -10 -14 0 -25 113 -174 189 -250 104 -104 331 -277 331 -253 0 4 15 14 33 21 l32 13 -26 8 c-105 31 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M378 673 c-8 -10 -18 -26 -21 -36 -8 -22 13 -77 38 -97 14 -11 12 -6 -5 17 -28 39 -30 85 -5 113 10 11 16 20 13 20 -3 0 -12 -8 -20 -17z" }),
            React__default['default'].createElement("path", { d: "M315 889 c6 -9 75 -33 80 -27 2 2 -16 11 -40 19 -25 9 -42 13 -40 8z" }),
            React__default['default'].createElement("path", { d: "M1088 764 c-43 -23 -51 -86 -13 -100 9 -4 36 -1 61 6 116 33 128 111 17 110 -21 -1 -50 -7 -65 -16z" }),
            React__default['default'].createElement("path", { d: "M872 765 c3 -3 38 -9 79 -15 60 -7 77 -6 89 6 12 12 2 14 -80 14 -51 0 -91 -2 -88 -5z" }),
            React__default['default'].createElement("path", { d: "M1230 693 c0 -17 -82 -53 -122 -53 l-35 0 -5 -98 c-5 -106 -29 -175 -84 -247 -52 -69 -177 -134 -306 -160 -38 -7 -48 -49 -19 -78 29 -30 140 -36 227 -12 172 46 329 220 364 402 14 73 9 228 -8 245 -8 8 -12 9 -12 1z m-34 -148 c-22 -16 -76 -20 -76 -6 0 5 8 7 18 5 9 -3 28 -1 42 5 35 14 38 13 16 -4z m-1 -45 c-3 -5 -21 -9 -38 -9 l-32 2 35 7 c19 4 36 8 38 9 2 0 0 -3 -3 -9z m-365 -427 c0 -3 -7 0 -15 7 -8 7 -15 22 -15 34 0 18 2 17 15 -8 8 -15 15 -31 15 -33z m-36 -2 c-6 -6 -24 19 -24 34 1 6 7 1 15 -9 8 -11 12 -22 9 -25z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -33 -21 -41 0 -24 26 -77 45 -93 13 -11 12 -5 -5 18 -29 39 -31 93 -5 122 10 11 15 20 12 20 -3 0 -15 -12 -26 -26z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#b77e87", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -16 -10 -13 -18 40 -99 61 -94 195 -229 321 -323 129 -96 131 -97 176 -77 38 16 38 16 12 24 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M91 829 c-1 -8 6 -24 15 -35 15 -19 15 -19 6 1 -5 11 -12 27 -15 35 -5 13 -6 13 -6 -1z" }),
            React__default['default'].createElement("path", { d: "M1230 672 c0 -27 -6 -35 -40 -52 -35 -18 -60 -45 -60 -66 0 -3 21 -4 47 -1 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 22 l-12 23 5 -23 c5 -27 -14 -30 -21 -3 -3 13 -16 21 -41 24 -21 3 -47 8 -59 12 -18 6 -23 2 -29 -20 -17 -67 106 -97 242 -60 172 46 329 220 364 402 14 73 9 228 -8 245 -9 9 -12 5 -12 -20z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -36 -20 -48 1 -17 3 -15 9 8 5 15 17 37 26 47 9 10 14 19 11 19 -3 0 -15 -12 -26 -26z" }),
            React__default['default'].createElement("path", { d: "M620 313 c0 -7 10 -22 23 -35 12 -13 17 -17 11 -8 -6 8 -16 24 -22 35 -6 11 -12 15 -12 8z" })),
        React__default['default'].createElement("g", { id: "layer110", fill: "#e4934d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1210 634 c-91 -58 -104 -89 -33 -81 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 23 l-12 22 5 -23 c5 -27 -14 -30 -21 -2 -4 14 -14 20 -35 20 -16 0 -39 5 -50 11 -27 15 -53 -9 -43 -41 16 -50 135 -65 247 -30 215 66 370 283 367 513 -1 91 -6 98 -49 71z" })),
        React__default['default'].createElement("g", { id: "layer111", fill: "#fecd04", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 968 c19 -93 24 -104 61 -121 20 -10 38 -27 41 -37 3 -11 11 -20 19 -20 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -5 -29 -10 -32 -21 -13 55 -128 147 -225 95 -100 181 -175 289 -249 l61 -43 39 17 c39 17 39 17 13 25 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -216 34 -288 61 -392 148 -141 118 -179 136 -168 80z m442 -268 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M1241 565 c-1 -118 -19 -197 -63 -274 -90 -157 -305 -279 -403 -227 -34 18 -61 20 -70 6 -10 -17 -45 8 -45 32 0 16 -3 19 -11 11 -18 -18 1 -54 37 -69 47 -20 131 -17 206 6 215 66 370 283 367 513 -1 110 -18 111 -18 2z" })),
        React__default['default'].createElement("g", { id: "layer112", fill: "#eccfa4", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 970 c13 -65 26 -112 31 -107 6 5 -22 127 -32 136 -3 3 -3 -10 1 -29z" }),
            React__default['default'].createElement("path", { d: "M166 648 c32 -63 78 -124 153 -202 67 -69 221 -204 221 -193 0 2 -37 37 -82 78 -70 62 -83 78 -80 101 4 30 -34 63 -60 53 -19 -8 -87 70 -125 142 -16 29 -31 53 -36 53 -4 0 0 -15 9 -32z" }),
            React__default['default'].createElement("path", { d: "M1245 585 c4 -51 1 -103 -9 -145 -16 -73 -14 -92 4 -33 17 56 24 204 11 233 -8 20 -10 8 -6 -55z" }),
            React__default['default'].createElement("path", { d: "M1192 315 c-12 -25 -20 -45 -17 -45 7 0 47 81 43 86 -3 2 -14 -17 -26 -41z" }),
            React__default['default'].createElement("path", { d: "M1075 163 c-33 -31 -46 -47 -30 -36 29 20 104 93 94 93 -2 -1 -31 -26 -64 -57z" }),
            React__default['default'].createElement("path", { d: "M640 98 c0 -27 34 -56 75 -64 78 -14 225 18 281 61 10 8 -6 4 -36 -10 -30 -13 -79 -30 -108 -36 -47 -9 -56 -8 -73 6 -14 13 -28 16 -58 11 -35 -5 -42 -3 -60 22 -16 21 -20 23 -21 10z" }))));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 10000 10000" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#6b194d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M4635 9994 c-1763 -137 -3300 -1160 -4100 -2729 -227 -446 -385 -924 -470 -1428 -54 -319 -60 -405 -60 -837 0 -432 6 -518 60 -837 246 -1456 1117 -2720 2395 -3478 513 -304 1100 -518 1703 -620 319 -54 405 -60 837 -60 432 0 518 6 837 60 1566 265 2904 1250 3628 2670 227 446 385 924 470 1428 54 319 60 405 60 837 0 432 -6 518 -60 837 -265 1566 -1250 2904 -2670 3628 -447 228 -924 385 -1428 470 -296 50 -393 57 -782 60 -203 1 -392 1 -420 -1z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#cb1722", stroke: "none" },
            React__default['default'].createElement("path", { d: "M3795 5630 c-72 -13 -133 -38 -191 -79 -63 -44 -95 -82 -131 -152 -38 -76 -45 -217 -14 -316 28 -95 84 -185 163 -263 300 -303 775 -299 924 6 23 48 29 74 32 151 3 53 -1 113 -8 140 -29 119 -115 250 -222 341 -70 60 -214 135 -299 156 -76 19 -194 26 -254 16z" }),
            React__default['default'].createElement("path", { d: "M5216 4160 c-63 -11 -179 -68 -231 -113 -109 -94 -158 -264 -124 -429 15 -72 78 -201 133 -270 97 -122 277 -238 428 -278 106 -27 289 -23 373 10 287 111 373 417 199 705 -50 84 -97 139 -173 202 -74 61 -216 135 -306 159 -72 19 -230 26 -299 14z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#48c75a", stroke: "none" },
            React__default['default'].createElement("path", { d: "M2845 5578 c-39 -107 -57 -294 -34 -355 16 -42 58 -83 114 -109 27 -13 51 -22 52 -20 2 2 -8 23 -22 47 -31 54 -65 160 -65 202 0 28 5 22 52 -53 51 -84 124 -167 166 -189 20 -10 22 -8 33 31 38 141 -38 292 -204 409 -75 52 -85 56 -92 37z" }),
            React__default['default'].createElement("path", { d: "M5187 5406 c-26 -7 -49 -15 -52 -18 -7 -7 71 -136 116 -189 24 -29 62 -59 94 -75 59 -29 90 -28 168 3 l40 16 -72 24 c-67 21 -171 78 -185 101 -3 5 22 1 57 -10 74 -24 270 -37 281 -19 10 15 -26 72 -69 109 -55 49 -132 72 -238 71 -51 0 -113 -6 -140 -13z" }),
            React__default['default'].createElement("path", { d: "M6565 4685 c-88 -19 -148 -50 -199 -105 -42 -45 -77 -122 -62 -137 20 -20 187 40 276 99 l35 23 -22 -30 c-34 -47 -94 -101 -143 -129 -28 -16 -39 -27 -30 -30 98 -31 182 10 235 114 23 46 65 171 65 196 0 18 -71 18 -155 -1z" }),
            React__default['default'].createElement("path", { d: "M4313 4145 c-102 -22 -178 -62 -232 -121 -41 -45 -81 -122 -81 -156 0 -32 186 23 288 86 58 36 70 41 61 23 -21 -38 -113 -123 -168 -155 -57 -32 -56 -36 1 -46 83 -15 168 31 218 117 29 50 90 221 90 252 0 19 -88 19 -177 0z" }),
            React__default['default'].createElement("path", { d: "M1976 6413 c15 -66 57 -179 82 -222 29 -50 120 -147 129 -138 3 3 -11 37 -31 74 l-37 68 75 -80 c58 -62 77 -77 87 -68 18 18 23 105 9 148 -19 58 -115 145 -219 199 -49 25 -92 46 -95 46 -4 0 -4 -12 0 -27z" }),
            React__default['default'].createElement("path", { d: "M1963 6108 c-93 -14 -218 -82 -323 -176 -33 -30 -42 -43 -34 -52 20 -20 188 -87 261 -104 73 -16 140 -19 181 -8 15 5 36 32 62 80 l39 72 -126 0 c-69 0 -124 2 -121 5 3 3 56 18 117 34 61 15 111 31 111 34 -1 3 -27 32 -58 64 l-57 58 -52 -7z" }),
            React__default['default'].createElement("path", { d: "M2242 5833 c-40 -85 -42 -86 -36 -43 3 25 8 56 11 70 6 22 5 24 -10 11 -23 -19 -63 -107 -76 -169 -14 -66 -15 -239 -1 -247 14 -9 118 97 163 165 46 69 67 149 55 203 -9 39 -42 97 -56 97 -4 0 -26 -39 -50 -87z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#d49818", stroke: "none" },
            React__default['default'].createElement("path", { d: "M2865 8018 c-35 -19 -66 -52 -88 -93 -20 -37 -22 -55 -22 -250 0 -177 -3 -218 -18 -263 -24 -69 -101 -153 -165 -180 -134 -58 -183 -45 -543 145 -132 70 -182 84 -207 59 -15 -15 -15 -16 5 -16 64 0 258 -106 435 -237 135 -100 369 -299 523 -443 206 -193 343 -289 595 -415 230 -115 478 -208 770 -289 180 -50 117 -44 -97 9 -310 77 -654 205 -846 316 -199 115 -287 178 -457 329 -408 362 -782 622 -929 646 -41 7 -41 6 -43 -27 -7 -153 40 -415 122 -680 l30 -96 68 -27 c86 -33 216 -113 269 -164 62 -60 94 -122 100 -192 6 -66 15 -72 56 -40 16 12 40 20 65 20 33 0 45 -6 66 -31 35 -41 34 -83 -2 -118 -23 -24 -50 -35 -149 -66 -9 -3 -8 -13 3 -42 12 -27 15 -58 12 -108 -5 -73 -24 -121 -80 -203 l-29 -43 56 -114 c277 -564 841 -1215 1589 -1835 325 -270 748 -579 1099 -803 l116 -74 86 13 c274 44 589 149 849 282 552 282 916 726 1056 1291 51 205 64 322 64 586 1 325 -24 533 -80 668 l-28 67 -69 0 c-211 0 -942 88 -1327 160 -118 22 -101 21 245 -15 345 -36 615 -54 898 -62 l247 -6 0 36 c0 19 3 42 6 50 4 12 -13 16 -98 21 -441 29 -705 72 -885 147 -92 39 -193 105 -303 198 -175 149 -226 153 -464 36 -161 -79 -270 -109 -370 -102 -149 10 -258 81 -321 210 -86 175 -68 356 53 541 46 69 52 85 52 130 0 98 -78 180 -199 211 -155 40 -275 -50 -312 -234 -8 -43 -10 -106 -6 -198 5 -93 3 -148 -5 -175 -16 -53 -78 -112 -146 -140 -52 -21 -72 -23 -222 -23 -138 1 -181 5 -260 24 -277 68 -504 181 -620 308 -95 104 -134 212 -133 373 1 174 52 346 169 568 58 111 67 134 68 183 1 44 -4 63 -26 96 -46 70 -165 113 -223 81z m1163 -2314 c277 -57 527 -269 608 -517 33 -101 38 -250 12 -334 -71 -224 -282 -354 -552 -341 -455 24 -834 466 -728 849 73 264 349 407 660 343z m-1145 -30 c125 -64 244 -169 301 -265 41 -71 60 -178 46 -259 -12 -71 -39 -139 -61 -156 -17 -14 -147 -1 -229 22 -136 38 -214 130 -227 267 -12 132 62 417 109 417 5 0 32 -12 61 -26z m2647 -210 c36 -17 83 -49 106 -72 45 -45 104 -148 104 -180 0 -28 -138 -136 -210 -163 -180 -69 -336 29 -466 293 -36 73 -37 79 -21 95 9 9 56 27 104 40 73 19 108 23 203 20 104 -3 122 -6 180 -33z m1254 -700 c23 -9 20 -54 -10 -164 -54 -195 -129 -286 -253 -306 -56 -9 -154 12 -231 49 -74 37 -79 48 -60 137 30 138 143 240 304 275 63 14 223 20 250 9z m-1299 -529 c227 -47 434 -186 559 -373 85 -128 120 -239 119 -382 0 -155 -50 -270 -160 -370 -253 -231 -715 -178 -1008 115 -151 151 -227 322 -227 510 0 242 151 431 394 495 89 23 226 25 323 5z m-905 -15 c21 -39 -53 -291 -111 -382 -106 -165 -275 -191 -501 -77 -53 27 -58 32 -58 62 0 50 28 147 57 196 85 145 247 219 485 220 108 1 118 -1 128 -19z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#ee4f7a", stroke: "none" },
            React__default['default'].createElement("path", { d: "M4635 9994 c-1763 -137 -3300 -1160 -4100 -2729 -227 -446 -385 -924 -470 -1428 -54 -319 -60 -405 -60 -837 0 -432 6 -518 60 -837 246 -1456 1117 -2720 2395 -3478 513 -304 1100 -518 1703 -620 319 -54 405 -60 837 -60 432 0 518 6 837 60 1566 265 2904 1250 3628 2670 227 446 385 924 470 1428 54 319 60 405 60 837 0 432 -6 518 -60 837 -265 1566 -1250 2904 -2670 3628 -447 228 -924 385 -1428 470 -296 50 -393 57 -782 60 -203 1 -392 1 -420 -1z m-1592 -1897 c71 -32 107 -66 142 -129 26 -45 30 -64 30 -124 -1 -68 -4 -76 -83 -235 -92 -185 -124 -274 -148 -410 -15 -87 -14 -182 3 -225 7 -19 47 -39 228 -112 251 -101 869 -302 929 -302 20 0 19 -11 21 205 1 205 16 270 80 360 44 63 130 122 191 131 138 20 267 -18 354 -105 59 -59 83 -111 88 -188 5 -75 -7 -113 -64 -200 -24 -37 -54 -92 -65 -123 -24 -60 -38 -213 -22 -223 12 -7 402 -87 549 -112 l100 -17 80 27 c147 51 255 34 374 -56 25 -19 50 -38 56 -42 17 -10 348 -45 584 -62 246 -17 720 -20 890 -5 73 7 154 22 220 41 84 25 130 32 230 36 146 6 213 -7 328 -63 103 -50 154 -103 180 -184 323 -1027 214 -1996 -313 -2785 -413 -617 -1041 -1077 -1700 -1245 -413 -106 -826 -102 -1111 9 -157 62 -237 138 -275 263 -43 139 -8 276 96 378 l44 43 -212 141 c-628 420 -1123 820 -1587 1285 -454 454 -743 830 -962 1251 -33 63 -61 116 -62 117 -1 1 -28 -21 -61 -48 -33 -27 -68 -49 -78 -49 -31 0 -41 48 -41 205 l-1 150 -90 0 c-110 1 -196 25 -343 97 -134 65 -143 81 -81 144 93 96 221 182 327 219 35 13 65 25 68 28 3 2 -14 58 -36 123 -203 585 -270 1028 -177 1165 38 56 71 74 136 73 61 -1 128 -30 389 -168 168 -90 247 -95 328 -24 73 64 79 88 80 313 0 110 4 216 8 235 18 77 65 144 139 199 48 37 158 36 240 -2z" }),
            React__default['default'].createElement("path", { d: "M3695 5603 c-52 -21 -136 -80 -168 -119 -58 -69 -81 -132 -85 -236 -5 -115 15 -196 75 -297 90 -153 301 -308 453 -335 28 -5 25 -2 -15 13 -223 82 -388 246 -452 449 -52 167 -16 332 96 441 28 27 74 61 103 75 59 28 55 34 -7 9z" }),
            React__default['default'].createElement("path", { d: "M5142 4139 c-91 -35 -173 -98 -219 -167 -50 -74 -63 -112 -70 -209 -7 -97 10 -180 57 -278 76 -157 194 -271 365 -356 93 -45 232 -89 219 -68 -3 5 -12 9 -20 9 -30 0 -174 62 -235 101 -135 87 -251 227 -306 365 -24 61 -27 83 -28 189 0 115 1 123 32 187 45 95 109 160 206 208 85 43 85 52 -1 19z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#e3924c", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1820 7435 c-11 -13 -9 -15 13 -15 14 0 27 7 31 15 3 10 -1 15 -13 15 -10 0 -24 -7 -31 -15z" }),
            React__default['default'].createElement("path", { d: "M3845 5450 c-8 -13 3 -68 15 -75 11 -7 33 51 26 70 -6 17 -32 20 -41 5z" }),
            React__default['default'].createElement("path", { d: "M3704 5395 c-5 -11 3 -26 19 -43 32 -31 43 -24 31 20 -11 36 -40 49 -50 23z" }),
            React__default['default'].createElement("path", { d: "M4246 5304 c-10 -27 -7 -54 7 -54 21 0 50 37 44 55 -8 20 -43 19 -51 -1z" }),
            React__default['default'].createElement("path", { d: "M3623 5264 c-8 -21 21 -44 55 -44 24 0 23 8 -6 43 -19 22 -41 22 -49 1z" }),
            React__default['default'].createElement("path", { d: "M4340 5160 c-29 -29 -25 -42 13 -38 24 2 33 8 35 24 4 30 -24 38 -48 14z" }),
            React__default['default'].createElement("path", { d: "M3637 5103 c-4 -3 -7 -15 -7 -25 0 -21 30 -24 62 -7 21 11 21 12 3 25 -20 15 -47 18 -58 7z" }),
            React__default['default'].createElement("path", { d: "M4320 4992 c0 -17 38 -44 57 -40 10 2 18 12 18 23 0 16 -8 21 -37 23 -21 2 -38 -1 -38 -6z" }),
            React__default['default'].createElement("path", { d: "M3735 4956 c-21 -15 -15 -46 9 -46 14 0 46 36 46 52 0 13 -35 9 -55 -6z" }),
            React__default['default'].createElement("path", { d: "M4240 4885 c0 -22 33 -65 50 -65 23 0 28 32 8 48 -17 13 -58 25 -58 17z" }),
            React__default['default'].createElement("path", { d: "M4124 4837 c-11 -30 0 -62 24 -65 18 -3 22 1 22 21 0 13 -9 32 -20 42 -17 16 -20 16 -26 2z" }),
            React__default['default'].createElement("path", { d: "M3109 6759 c105 -98 302 -192 513 -245 77 -19 140 -27 248 -31 80 -3 143 -3 139 0 -3 4 -72 27 -155 51 -205 62 -506 165 -655 226 -68 27 -128 50 -134 50 -5 -1 14 -23 44 -51z" }),
            React__default['default'].createElement("path", { d: "M4790 6270 c28 -39 100 -87 155 -101 48 -13 150 -6 223 16 51 16 70 35 33 35 -17 0 -353 63 -410 77 l-25 6 24 -33z" }),
            React__default['default'].createElement("path", { d: "M7665 6111 c-162 -45 -263 -97 -346 -180 -81 -81 -104 -136 -104 -241 0 -75 4 -92 30 -144 45 -89 74 -101 245 -100 149 1 253 23 406 84 90 36 230 125 270 173 49 58 77 133 71 187 -12 101 -68 161 -199 212 -78 31 -276 35 -373 9z" }),
            React__default['default'].createElement("path", { d: "M6050 6087 c14 -15 153 -78 215 -96 155 -48 444 -87 776 -107 114 -6 117 -6 124 15 3 12 31 48 61 80 30 32 54 60 54 62 0 2 -161 4 -358 5 -331 1 -433 6 -807 40 -38 4 -68 4 -65 1z" }),
            React__default['default'].createElement("path", { d: "M8175 5574 c-91 -77 -261 -155 -435 -201 -79 -21 -120 -26 -240 -27 -80 0 -158 3 -174 7 l-29 8 7 -63 c31 -301 32 -598 1 -807 -94 -642 -416 -1138 -967 -1487 -304 -193 -684 -334 -1073 -399 -108 -18 -146 -36 -196 -92 -53 -61 -72 -116 -67 -192 13 -171 128 -263 404 -321 128 -27 380 -37 524 -21 595 68 1140 341 1600 801 486 485 756 1025 852 1700 21 149 18 630 -5 800 l-18 135 -59 60 c-38 39 -62 72 -66 93 -8 38 -19 40 -59 6z m-59 -723 c-43 -45 -133 -88 -210 -102 -75 -13 -208 0 -253 24 -18 10 1 12 100 12 135 0 211 16 312 65 77 36 85 37 51 1z m-86 -292 c-74 -56 -219 -66 -308 -20 -24 12 -42 24 -40 26 1 2 28 -1 58 -7 65 -12 196 -4 260 16 54 16 64 12 30 -15z m-2075 -2204 c15 -27 46 -69 69 -93 l41 -45 -30 7 c-49 12 -91 52 -124 117 -25 50 -31 74 -30 123 l0 61 23 -61 c12 -34 35 -83 51 -109z m-185 33 c7 -24 27 -74 46 -112 19 -37 34 -70 32 -72 -2 -2 -19 6 -37 17 -52 31 -87 135 -65 193 9 24 12 20 24 -26z" }),
            React__default['default'].createElement("path", { d: "M5207 3964 c-14 -14 -7 -43 17 -71 l24 -28 7 26 c11 43 2 74 -20 77 -12 2 -24 0 -28 -4z" }),
            React__default['default'].createElement("path", { d: "M5087 3863 c-14 -13 -6 -42 15 -57 30 -21 48 -20 48 2 0 38 -43 76 -63 55z" }),
            React__default['default'].createElement("path", { d: "M5727 3834 c-10 -10 -9 -84 1 -84 5 0 19 11 32 25 19 21 22 30 14 43 -12 19 -36 27 -47 16z" }),
            React__default['default'].createElement("path", { d: "M5040 3685 c-18 -22 5 -45 46 -45 44 0 50 14 18 39 -32 25 -47 26 -64 6z" }),
            React__default['default'].createElement("path", { d: "M5811 3651 c-28 -38 -27 -41 13 -41 41 0 65 24 49 48 -17 28 -40 25 -62 -7z" }),
            React__default['default'].createElement("path", { d: "M5100 3505 c-16 -19 -6 -45 18 -45 17 0 62 38 62 53 0 14 -68 7 -80 -8z" }),
            React__default['default'].createElement("path", { d: "M5802 3482 c-9 -6 -6 -14 12 -31 31 -29 61 -24 61 9 0 21 -5 25 -30 28 -16 1 -36 -2 -43 -6z" }),
            React__default['default'].createElement("path", { d: "M5256 3399 c-35 -27 -32 -64 4 -64 21 0 26 6 31 38 7 47 -1 53 -35 26z" }),
            React__default['default'].createElement("path", { d: "M5724 3338 c8 -42 32 -61 57 -47 35 19 21 48 -35 69 -28 10 -29 10 -22 -22z" }),
            React__default['default'].createElement("path", { d: "M5584 3295 c-10 -53 26 -86 56 -50 10 12 8 21 -10 50 -27 44 -37 44 -46 0z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#fecd00", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1778 7308 c-7 -151 40 -415 122 -679 l30 -97 72 -26 c217 -80 367 -228 371 -366 1 -27 3 -50 5 -50 2 0 23 12 48 26 35 20 52 25 79 20 61 -12 92 -78 64 -139 -13 -29 -66 -60 -127 -77 -30 -8 -42 -15 -38 -25 42 -111 25 -207 -59 -324 l-37 -51 57 -115 c197 -401 510 -812 964 -1266 367 -366 717 -662 1193 -1009 218 -159 612 -423 581 -390 -10 11 15 22 130 61 78 26 198 71 267 100 111 48 121 54 90 56 -151 11 -288 51 -416 124 -103 58 -255 206 -312 305 -205 355 -86 724 272 840 108 35 270 37 391 5 384 -102 663 -441 642 -780 -3 -47 -12 -105 -21 -129 l-16 -43 40 31 c64 50 213 203 281 287 186 230 337 537 414 843 68 268 95 590 76 904 -7 110 -15 213 -18 228 -6 31 -1 30 -218 48 -217 19 -582 67 -935 125 -184 29 -470 74 -635 99 -165 25 -394 63 -510 85 -115 21 -257 46 -315 56 -444 74 -946 261 -1270 473 -113 74 -182 129 -361 288 -298 264 -620 494 -793 566 -91 37 -106 37 -108 -4z m850 -844 c30 -21 26 -58 -6 -62 -24 -4 -62 22 -62 43 0 14 21 35 35 35 6 0 21 -7 33 -16z m633 -393 c33 -33 37 -66 12 -93 -40 -44 -133 3 -133 67 0 61 71 76 121 26z m804 -372 c233 -56 431 -213 538 -425 47 -93 67 -175 67 -270 -1 -137 -36 -234 -118 -325 -184 -205 -516 -231 -812 -66 -95 53 -250 205 -303 297 -105 182 -119 390 -35 554 27 53 102 132 163 171 138 89 308 110 500 64z m-1172 -25 c265 -134 395 -363 328 -583 -12 -40 -31 -81 -42 -92 -19 -19 -28 -20 -92 -14 -199 20 -320 91 -361 213 -20 58 -20 197 -1 282 20 83 55 191 68 208 15 18 42 15 100 -14z m405 -40 c25 -29 27 -43 10 -66 -35 -46 -118 -8 -118 53 0 53 64 61 108 13z m2132 -134 c125 -24 227 -98 280 -203 42 -84 40 -97 -26 -155 -124 -111 -260 -148 -366 -100 -74 34 -119 76 -182 172 -70 105 -108 182 -104 209 8 55 259 103 398 77z m1263 -132 c20 -27 20 -28 2 -48 -23 -26 -65 -26 -99 1 -48 38 -27 82 38 77 29 -2 44 -10 59 -30z m-281 -147 c35 -39 35 -64 2 -98 -23 -23 -31 -25 -81 -21 -48 4 -61 10 -85 37 -36 40 -36 73 0 101 22 18 36 21 81 18 45 -4 59 -10 83 -37z m-1449 -122 c37 -51 -4 -94 -62 -64 -35 18 -50 57 -30 81 19 23 69 14 92 -17z m-1659 -230 c28 -22 35 -66 14 -87 -18 -18 -63 -15 -86 6 -70 59 0 138 72 81z m2389 -120 c32 -35 33 -49 8 -80 -24 -30 -80 -31 -118 -2 -66 48 -25 132 57 116 14 -3 37 -18 53 -34z m1105 7 c13 -12 12 -24 -3 -93 -41 -188 -107 -303 -200 -348 -50 -25 -63 -27 -133 -23 -62 4 -93 12 -159 43 -45 21 -85 45 -88 54 -9 30 14 121 47 183 57 107 165 173 323 198 80 12 194 5 213 -14z m-1710 -222 c28 -20 30 -69 3 -84 -34 -18 -91 16 -91 55 0 44 46 59 88 29z m-1177 -83 c51 -52 30 -121 -37 -121 -39 0 -89 38 -98 76 -18 72 76 103 135 45z m1987 -103 c21 -18 14 -57 -13 -70 -19 -9 -29 -7 -50 6 -38 25 -42 46 -15 68 23 18 51 17 78 -4z m-1338 -111 c22 -12 25 -19 23 -63 -4 -105 -81 -310 -145 -388 -64 -78 -168 -113 -279 -95 -75 12 -205 64 -235 94 -19 19 -20 27 -13 82 26 192 170 327 394 368 93 17 223 18 255 2z m1919 -311 c28 -30 21 -63 -16 -73 -54 -13 -104 45 -73 83 19 22 64 17 89 -10z" }),
            React__default['default'].createElement("path", { d: "M3853 5449 c-11 -11 -6 -56 7 -64 4 -3 13 8 20 25 16 40 -1 65 -27 39z" }),
            React__default['default'].createElement("path", { d: "M3706 5401 c-9 -14 4 -40 26 -52 18 -9 19 -7 16 23 -3 32 -29 51 -42 29z" }),
            React__default['default'].createElement("path", { d: "M4257 5313 c-4 -3 -7 -20 -7 -36 0 -29 0 -30 20 -12 23 20 27 55 7 55 -8 0 -17 -3 -20 -7z" }),
            React__default['default'].createElement("path", { d: "M3623 5264 c-7 -19 4 -29 40 -38 33 -8 35 3 4 32 -28 26 -36 27 -44 6z" }),
            React__default['default'].createElement("path", { d: "M4335 5150 c-10 -11 -16 -23 -12 -26 10 -10 62 12 62 27 0 22 -29 22 -50 -1z" }),
            React__default['default'].createElement("path", { d: "M3634 5095 c-10 -26 9 -37 41 -25 30 11 26 23 -13 35 -16 4 -24 2 -28 -10z" }),
            React__default['default'].createElement("path", { d: "M4332 4991 c-10 -6 -7 -12 13 -25 30 -20 52 -9 42 18 -7 17 -34 21 -55 7z" }),
            React__default['default'].createElement("path", { d: "M3745 4956 c-11 -8 -16 -19 -12 -30 10 -24 25 -19 42 14 17 34 4 41 -30 16z" }),
            React__default['default'].createElement("path", { d: "M4250 4875 c0 -16 26 -55 37 -55 23 0 27 30 7 45 -18 14 -44 20 -44 10z" }),
            React__default['default'].createElement("path", { d: "M4130 4812 c0 -36 3 -43 17 -40 25 5 27 31 4 59 l-20 24 -1 -43z" }),
            React__default['default'].createElement("path", { d: "M8256 5463 c64 -342 81 -808 39 -1083 -57 -371 -188 -736 -370 -1030 -297 -479 -775 -899 -1255 -1103 -140 -59 -333 -121 -455 -146 -180 -36 -459 -61 -437 -39 19 19 14 63 -10 85 -99 90 -345 113 -408 39 -12 -16 -12 -21 2 -46 l16 -28 -56 19 c-167 58 -246 158 -247 312 l0 78 -23 -28 c-59 -74 -68 -190 -21 -288 44 -93 171 -162 375 -205 128 -27 380 -37 524 -21 595 68 1140 341 1600 801 486 485 756 1025 852 1700 21 148 18 630 -5 800 l-18 135 -58 58 -58 59 13 -69z" }),
            React__default['default'].createElement("path", { d: "M5211 3956 c-13 -16 -4 -43 23 -65 12 -10 15 -7 21 19 10 46 -19 76 -44 46z" }),
            React__default['default'].createElement("path", { d: "M5093 3863 c-24 -9 -13 -42 18 -58 37 -19 42 -16 33 19 -7 28 -31 46 -51 39z" }),
            React__default['default'].createElement("path", { d: "M5724 3816 c-3 -8 -4 -27 -2 -43 l3 -28 27 27 c17 16 25 33 22 42 -8 20 -43 21 -50 2z" }),
            React__default['default'].createElement("path", { d: "M5053 3693 c-18 -7 -16 -42 2 -49 8 -4 27 -3 41 0 l27 7 -23 25 c-24 25 -27 26 -47 17z" }),
            React__default['default'].createElement("path", { d: "M5817 3652 c-24 -27 -21 -32 18 -32 31 0 35 3 35 25 0 30 -29 34 -53 7z" }),
            React__default['default'].createElement("path", { d: "M5113 3513 c-18 -7 -16 -42 3 -50 8 -3 26 4 40 18 23 21 23 24 7 30 -21 9 -33 9 -50 2z" }),
            React__default['default'].createElement("path", { d: "M5818 3483 c-25 -6 -22 -18 6 -37 31 -20 58 -11 54 18 -3 21 -26 29 -60 19z" }),
            React__default['default'].createElement("path", { d: "M5252 3387 c-24 -25 -16 -51 14 -45 13 2 20 13 22 36 4 38 -6 41 -36 9z" }),
            React__default['default'].createElement("path", { d: "M5725 3338 c10 -33 31 -52 49 -45 25 10 19 42 -9 55 -38 18 -47 15 -40 -10z" }),
            React__default['default'].createElement("path", { d: "M5590 3279 c0 -36 2 -40 22 -37 29 4 35 34 12 59 -26 29 -34 23 -34 -22z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#efcfba", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1820 7435 c-11 -13 -8 -15 14 -15 16 0 26 5 26 15 0 8 -6 15 -14 15 -7 0 -19 -7 -26 -15z" }),
            React__default['default'].createElement("path", { d: "M1778 7308 c-5 -114 12 -245 58 -438 35 -147 91 -340 99 -340 2 0 26 -9 53 -19 l49 -20 -39 122 c-74 234 -148 575 -148 685 0 30 -14 42 -51 42 -14 0 -19 -8 -21 -32z" }),
            React__default['default'].createElement("path", { d: "M1976 6413 c15 -66 57 -179 82 -222 29 -50 120 -147 129 -138 3 4 -14 28 -37 54 -51 57 -103 164 -120 248 -12 55 -30 85 -52 85 -5 0 -6 -12 -2 -27z" }),
            React__default['default'].createElement("path", { d: "M1610 5905 c-18 -22 -8 -29 96 -74 115 -50 229 -75 302 -68 84 9 90 27 8 27 -91 0 -171 22 -286 78 -52 25 -98 48 -101 49 -3 2 -12 -3 -19 -12z" }),
            React__default['default'].createElement("path", { d: "M2167 5808 c-14 -29 -30 -77 -36 -106 -12 -60 -15 -238 -3 -246 4 -2 15 2 25 9 16 11 16 21 8 94 -10 92 0 200 24 257 24 58 10 52 -18 -8z" }),
            React__default['default'].createElement("path", { d: "M2336 5559 l-27 -40 56 -115 c197 -400 510 -811 964 -1265 445 -444 942 -849 1516 -1234 271 -182 272 -179 5 27 -424 327 -911 741 -1237 1052 l-87 82 23 23 c125 125 -49 411 -250 411 -47 0 -82 -13 -109 -40 -27 -27 -24 -29 -156 125 -243 287 -454 598 -586 867 -40 81 -76 148 -79 148 -4 0 -18 -18 -33 -41z" }),
            React__default['default'].createElement("path", { d: "M3608 5553 c-66 -45 -97 -81 -135 -154 -38 -76 -45 -217 -14 -316 29 -97 85 -186 167 -267 63 -63 182 -143 239 -161 11 -4 -9 10 -45 31 -99 57 -236 200 -283 296 -53 107 -75 217 -60 302 20 117 77 213 167 278 57 41 30 34 -36 -9z" }),
            React__default['default'].createElement("path", { d: "M8256 5463 c44 -232 59 -406 59 -688 -1 -239 -4 -301 -23 -424 -93 -591 -348 -1086 -787 -1526 -460 -461 -1002 -723 -1585 -764 -80 -6 -149 -11 -154 -11 -5 0 -2 8 7 18 60 66 -67 149 -243 159 -131 8 -197 -28 -165 -91 14 -26 13 -27 -8 -21 -54 15 -166 77 -201 111 -58 56 -80 114 -80 212 l-1 83 -23 -28 c-59 -74 -68 -190 -21 -288 44 -93 171 -162 375 -205 128 -27 380 -37 524 -21 595 68 1140 341 1600 801 486 485 756 1025 852 1700 21 148 18 630 -5 800 l-18 135 -58 58 -58 59 13 -69z" }),
            React__default['default'].createElement("path", { d: "M5074 4105 c-173 -86 -256 -277 -213 -487 15 -72 78 -201 133 -270 25 -32 76 -83 113 -113 67 -56 220 -138 278 -150 17 -4 5 4 -26 18 -202 86 -361 248 -430 438 -51 141 -48 261 10 384 30 64 110 154 161 180 17 9 30 18 30 20 0 8 -3 7 -56 -20z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#feeba6", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1783 7325 c-18 -49 2 -224 51 -435 27 -114 48 -198 64 -245 5 -16 15 -49 23 -73 9 -32 18 -44 38 -49 14 -3 31 -9 36 -13 41 -29 42 -18 3 103 -74 234 -148 575 -148 685 0 26 -4 30 -31 34 -19 3 -33 0 -36 -7z" }),
            React__default['default'].createElement("path", { d: "M2338 5562 c-24 -35 -24 -39 -10 -72 21 -53 70 -149 103 -205 15 -27 34 -61 41 -75 7 -14 23 -39 35 -56 13 -17 23 -33 23 -36 0 -23 322 -463 405 -553 11 -12 34 -38 50 -57 128 -151 448 -477 615 -628 46 -41 96 -86 111 -100 15 -14 47 -41 71 -61 111 -94 143 -122 148 -128 3 -3 23 -19 45 -36 21 -16 47 -37 56 -46 9 -9 24 -21 32 -25 8 -5 32 -24 53 -42 39 -32 407 -312 454 -344 14 -9 77 -53 140 -98 196 -137 224 -156 265 -180 60 -35 26 -5 -155 135 -418 324 -889 725 -1207 1029 l-87 82 23 23 c125 125 -49 411 -250 411 -47 0 -82 -13 -109 -40 -27 -27 -24 -29 -156 125 -243 287 -454 598 -586 867 -40 81 -76 148 -79 148 -4 0 -18 -17 -31 -38z" }))));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1280 1160" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#6d1b4d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M240 1153 c-23 -9 -30 -24 -30 -69 0 -22 -6 -49 -14 -60 -15 -20 -9 -21 -105 18 -15 6 -35 8 -45 5 -23 -9 -21 -84 4 -172 18 -63 18 -71 3 -80 -68 -43 -68 -68 2 -87 40 -11 45 -15 45 -41 0 -23 4 -28 18 -25 13 4 26 -11 52 -55 62 -107 238 -278 408 -397 41 -29 59 -47 52 -54 -5 -5 -10 -27 -10 -48 0 -32 5 -41 32 -58 42 -26 121 -34 193 -21 190 34 363 198 420 395 14 47 16 84 12 180 -9 212 -30 238 -179 217 -102 -15 -258 -6 -302 16 -16 8 -43 13 -60 10 -17 -3 -57 0 -89 5 -52 9 -57 12 -51 32 3 11 10 25 15 31 18 19 10 73 -13 89 -54 38 -108 6 -118 -69 l-5 -44 -90 30 c-120 40 -121 42 -95 115 33 93 34 100 11 123 -21 21 -34 24 -61 14z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#c41924", stroke: "none" },
            React__default['default'].createElement("path", { d: "M393 688 c-27 -13 -47 -59 -38 -90 11 -34 54 -76 91 -88 125 -42 160 125 38 176 -39 16 -61 17 -91 2z" }),
            React__default['default'].createElement("path", { d: "M655 418 c-49 -29 -57 -73 -25 -125 25 -41 59 -63 109 -70 35 -5 44 -2 71 25 16 17 30 41 30 54 0 30 -33 83 -64 103 -33 22 -96 29 -121 13z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#62554d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 663 c-5 -29 7 -63 23 -63 5 0 7 8 4 18 -5 16 -5 16 6 0 16 -25 30 -22 30 5 0 21 -36 67 -52 67 -3 0 -8 -12 -11 -27z" }),
            React__default['default'].createElement("path", { d: "M670 646 c0 -22 28 -46 53 -46 18 0 19 2 7 10 -12 8 -10 10 9 10 23 0 24 1 6 20 -21 23 -75 27 -75 6z" }),
            React__default['default'].createElement("path", { d: "M911 517 c-33 -16 -41 -42 -12 -34 18 4 20 3 10 -9 -16 -20 5 -18 25 2 16 16 22 54 9 54 -5 0 -19 -6 -32 -13z" }),
            React__default['default'].createElement("path", { d: "M488 414 c-32 -17 -39 -49 -9 -41 14 3 18 1 14 -9 -3 -8 -1 -14 4 -14 14 0 39 31 47 58 9 27 -14 29 -56 6z" }),
            React__default['default'].createElement("path", { d: "M90 827 c0 -20 30 -57 46 -57 21 0 17 26 -8 50 -25 23 -38 26 -38 7z" }),
            React__default['default'].createElement("path", { d: "M49 768 c-32 -19 -32 -21 -14 -34 23 -17 72 -18 78 -1 3 6 3 -8 0 -33 l-4 -45 25 28 c27 29 33 52 16 62 -5 3 -10 1 -10 -4 0 -8 -6 -7 -19 1 -10 6 -17 17 -14 23 8 22 -24 24 -58 3z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#9a444d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1128 c-7 -7 -12 -30 -12 -53 0 -80 -44 -104 -120 -65 -60 31 -58 24 6 -20 33 -22 84 -63 114 -91 47 -43 43 -41 -27 15 -74 58 -132 96 -148 96 -9 0 -6 -45 6 -98 10 -42 17 -52 46 -66 18 -9 39 -27 45 -41 6 -14 17 -25 25 -25 18 0 17 -19 -2 -26 -8 -4 -12 -10 -9 -15 3 -5 0 -24 -7 -43 -11 -31 -10 -37 34 -104 81 -125 238 -275 413 -393 63 -43 86 -46 160 -21 135 47 229 136 265 253 21 67 25 163 9 221 -9 31 -15 37 -43 41 l-32 4 33 1 c60 3 30 26 -42 34 -83 8 -116 19 -162 54 -33 26 -38 27 -67 14 -18 -7 -50 -15 -73 -17 -36 -4 -44 -1 -63 22 -25 33 -26 46 -5 90 21 44 15 67 -20 80 -24 8 -31 6 -47 -14 -12 -15 -19 -39 -19 -67 0 -39 -3 -46 -27 -55 -46 -17 -142 10 -190 54 -40 36 -37 89 11 198 4 10 1 23 -9 33 -20 19 -27 20 -43 4z m66 -507 c3 -38 1 -41 -22 -41 -14 0 -35 9 -47 21 -17 17 -20 28 -14 57 10 53 14 56 48 29 25 -19 33 -33 35 -66z m191 71 c48 -24 76 -65 76 -112 0 -106 -146 -120 -212 -21 -32 47 -30 86 6 122 35 34 78 38 130 11z m252 -41 c20 -16 22 -23 13 -38 -18 -29 -73 -24 -97 9 -11 14 -16 31 -13 37 11 18 72 13 97 -8z m213 -138 c-13 -54 -45 -74 -84 -53 -39 21 13 78 73 80 14 0 16 -5 11 -27z m-408 -105 c-8 -43 -42 -71 -75 -63 -37 9 -43 19 -30 47 13 30 42 46 83 47 27 1 28 -1 22 -31z m214 14 c78 -39 103 -130 51 -183 -52 -51 -149 -31 -198 41 -69 101 33 200 147 142z" }),
            React__default['default'].createElement("path", { d: "M384 682 c-21 -14 -35 -53 -29 -82 6 -30 66 -90 88 -90 7 0 -3 9 -21 20 -36 22 -65 79 -55 107 3 10 13 26 21 36 16 18 14 22 -4 9z" }),
            React__default['default'].createElement("path", { d: "M630 398 c-24 -26 -26 -58 -5 -98 16 -30 60 -70 79 -70 6 0 -4 9 -22 20 -58 36 -74 107 -34 153 22 25 7 21 -18 -5z" }),
            React__default['default'].createElement("path", { d: "M733 223 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" }),
            React__default['default'].createElement("path", { d: "M299 896 c15 -18 96 -46 130 -45 16 0 -4 11 -54 29 -94 35 -91 34 -76 16z" }),
            React__default['default'].createElement("path", { d: "M609 807 c15 -19 56 -23 66 -7 3 6 -5 10 -19 10 -13 0 -33 3 -43 7 -16 6 -16 5 -4 -10z" }),
            React__default['default'].createElement("path", { d: "M1103 775 c-46 -20 -69 -59 -54 -92 11 -23 16 -25 60 -21 97 9 154 74 99 112 -27 19 -63 20 -105 1z" }),
            React__default['default'].createElement("path", { d: "M46 763 c-29 -15 -29 -16 -10 -30 22 -16 66 -14 71 4 2 6 -4 13 -14 16 -17 5 -17 5 0 6 10 0 15 6 12 11 -9 14 -25 12 -59 -7z" }),
            React__default['default'].createElement("path", { d: "M869 764 c19 -8 64 -18 101 -21 56 -5 68 -3 73 11 5 13 -1 16 -37 16 -24 0 -72 2 -107 5 l-64 5 34 -16z" }),
            React__default['default'].createElement("path", { d: "M1194 674 c-25 -14 -60 -25 -87 -26 l-45 -2 -4 -106 c-3 -87 -8 -115 -30 -162 -51 -111 -159 -191 -304 -227 -72 -17 -90 -34 -81 -73 11 -44 99 -66 193 -49 185 34 352 189 408 380 22 77 20 294 -3 290 -3 -1 -25 -12 -47 -25z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#a5602f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 1123 c-4 -3 -7 -28 -7 -55 0 -35 -6 -54 -20 -68 -23 -23 -28 -24 -67 -10 -27 10 -26 9 7 -17 19 -15 56 -47 81 -71 26 -23 71 -56 100 -72 30 -16 49 -30 43 -30 -19 0 -119 65 -192 127 -40 34 -86 66 -103 72 -34 12 -36 4 -17 -79 10 -43 18 -56 49 -76 21 -13 40 -32 44 -43 3 -12 11 -20 18 -18 6 1 13 -6 15 -15 2 -10 -2 -18 -10 -18 -7 0 -13 -10 -13 -22 -1 -13 -4 -32 -8 -44 -6 -16 5 -40 42 -96 79 -121 240 -273 409 -388 64 -43 64 -43 113 -32 135 31 257 128 299 237 18 45 24 81 24 145 1 136 2 136 -101 148 l-88 11 82 -5 c45 -2 84 0 87 5 6 9 -39 21 -88 21 -42 1 -99 22 -146 55 l-39 27 -54 -22 c-48 -20 -57 -21 -83 -9 -38 19 -52 60 -35 102 24 60 24 65 -2 81 -13 9 -31 14 -40 10 -20 -7 -38 -60 -31 -89 14 -57 -88 -70 -183 -24 -75 36 -90 96 -48 188 19 41 23 57 14 67 -12 15 -41 19 -52 7z m47 -442 c24 -21 38 -59 31 -82 -8 -25 -49 -25 -75 1 -22 22 -25 46 -10 85 10 27 18 27 54 -4z m224 9 c39 -24 72 -75 72 -111 0 -36 -34 -76 -70 -84 -99 -22 -196 78 -160 164 21 52 99 67 158 31z m247 -40 c9 -10 15 -26 11 -35 -8 -21 -47 -35 -69 -23 -23 12 -50 55 -42 68 11 18 80 12 100 -10z m210 -137 c-13 -55 -53 -78 -87 -50 -34 26 10 75 71 76 20 1 22 -2 16 -26z m-409 -105 c-12 -60 -58 -86 -100 -55 -14 10 -15 18 -7 40 12 30 40 45 85 46 27 1 28 -1 22 -31z m212 18 c66 -35 101 -117 72 -171 -26 -48 -118 -58 -176 -20 -54 35 -82 126 -51 166 31 40 104 51 155 25z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#4cb859", stroke: "none" },
            React__default['default'].createElement("path", { d: "M246 673 c-10 -11 -7 -51 5 -59 8 -4 9 1 4 17 -7 21 -5 20 18 -6 21 -24 26 -27 27 -12 0 36 -37 77 -54 60z" }),
            React__default['default'].createElement("path", { d: "M683 652 c-17 -11 11 -52 34 -52 14 0 14 2 -3 15 -18 15 -18 15 9 9 35 -8 36 13 1 26 -30 12 -26 12 -41 2z" }),
            React__default['default'].createElement("path", { d: "M895 504 c-21 -21 -13 -29 14 -14 14 7 21 7 21 0 0 -5 -5 -10 -12 -10 -6 0 -8 -3 -4 -7 8 -8 36 23 36 39 0 14 -38 9 -55 -8z" }),
            React__default['default'].createElement("path", { d: "M477 402 c-24 -26 -21 -33 9 -22 35 14 42 12 20 -5 -17 -13 -17 -15 -3 -15 16 0 37 28 37 49 0 18 -46 12 -63 -7z" }),
            React__default['default'].createElement("path", { d: "M90 828 c0 -8 7 -23 16 -34 8 -10 12 -12 8 -4 -7 13 -6 13 10 0 17 -13 18 -13 15 4 -5 25 -49 55 -49 34z" }),
            React__default['default'].createElement("path", { d: "M46 764 c-34 -19 -23 -35 24 -37 35 -2 53 18 23 26 -17 5 -17 5 0 6 10 0 15 6 12 11 -8 14 -25 12 -59 -6z" }),
            React__default['default'].createElement("path", { d: "M140 729 c0 -5 -4 -7 -10 -4 -11 7 -26 -43 -15 -53 9 -9 35 27 35 50 0 10 -2 18 -5 18 -3 0 -5 -5 -5 -11z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#d59a17", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1118 c-7 -7 -12 -33 -12 -58 0 -56 -25 -85 -65 -77 -15 2 -23 1 -18 -3 134 -122 218 -174 330 -205 26 -7 40 -14 30 -14 -31 -2 -169 48 -212 76 -21 14 -67 50 -102 79 -34 29 -81 63 -103 74 l-40 20 0 -22 c1 -51 26 -123 48 -134 32 -16 62 -45 62 -60 0 -7 6 -11 14 -8 20 8 29 -12 13 -28 -8 -7 -16 -25 -19 -38 -3 -14 -8 -32 -12 -41 -10 -24 81 -156 171 -246 84 -85 181 -166 280 -232 l62 -42 62 16 c128 32 222 102 271 203 30 60 33 77 36 172 5 131 3 135 -105 144 -147 14 -164 24 -33 20 l125 -4 -80 14 c-85 14 -116 26 -152 58 -23 22 -39 21 -120 -3 -39 -12 -45 -11 -70 7 -33 25 -42 78 -19 121 17 35 5 63 -27 63 -35 0 -47 -19 -47 -72 0 -56 -15 -68 -82 -68 -52 0 -139 39 -162 71 -22 32 -20 91 5 149 22 51 20 80 -4 80 -7 0 -18 -5 -25 -12z m58 -455 c30 -38 24 -77 -13 -81 -54 -6 -86 55 -57 109 13 23 37 14 70 -28z m236 5 c25 -25 37 -47 41 -76 5 -36 2 -45 -26 -73 -29 -29 -36 -31 -83 -27 -45 5 -57 11 -90 46 -48 52 -53 108 -12 149 23 23 31 25 80 21 47 -4 61 -10 90 -40z m224 -20 c11 -12 20 -25 20 -30 0 -14 -61 -39 -80 -33 -21 7 -61 65 -54 77 3 4 25 8 49 8 33 0 50 -6 65 -22z m210 -123 c0 -34 -30 -75 -54 -75 -60 0 -72 25 -31 65 28 29 85 35 85 10z m-220 -90 c36 -10 89 -64 99 -102 34 -123 -121 -173 -217 -71 -56 61 -42 151 28 175 34 12 40 11 90 -2z m-186 -12 c-25 -78 -40 -90 -94 -78 -65 14 -14 95 59 95 34 0 39 -3 35 -17z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#c6714f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -6 -3 -10 -10 -10 -14 0 -25 113 -174 189 -250 104 -104 331 -277 331 -253 0 4 15 14 33 21 l32 13 -26 8 c-105 31 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M378 673 c-8 -10 -18 -26 -21 -36 -8 -22 13 -77 38 -97 14 -11 12 -6 -5 17 -28 39 -30 85 -5 113 10 11 16 20 13 20 -3 0 -12 -8 -20 -17z" }),
            React__default['default'].createElement("path", { d: "M315 889 c6 -9 75 -33 80 -27 2 2 -16 11 -40 19 -25 9 -42 13 -40 8z" }),
            React__default['default'].createElement("path", { d: "M1088 764 c-43 -23 -51 -86 -13 -100 9 -4 36 -1 61 6 116 33 128 111 17 110 -21 -1 -50 -7 -65 -16z" }),
            React__default['default'].createElement("path", { d: "M872 765 c3 -3 38 -9 79 -15 60 -7 77 -6 89 6 12 12 2 14 -80 14 -51 0 -91 -2 -88 -5z" }),
            React__default['default'].createElement("path", { d: "M1230 693 c0 -17 -82 -53 -122 -53 l-35 0 -5 -98 c-5 -106 -29 -175 -84 -247 -52 -69 -177 -134 -306 -160 -38 -7 -48 -49 -19 -78 29 -30 140 -36 227 -12 172 46 329 220 364 402 14 73 9 228 -8 245 -8 8 -12 9 -12 1z m-34 -148 c-22 -16 -76 -20 -76 -6 0 5 8 7 18 5 9 -3 28 -1 42 5 35 14 38 13 16 -4z m-1 -45 c-3 -5 -21 -9 -38 -9 l-32 2 35 7 c19 4 36 8 38 9 2 0 0 -3 -3 -9z m-365 -427 c0 -3 -7 0 -15 7 -8 7 -15 22 -15 34 0 18 2 17 15 -8 8 -15 15 -31 15 -33z m-36 -2 c-6 -6 -24 19 -24 34 1 6 7 1 15 -9 8 -11 12 -22 9 -25z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -33 -21 -41 0 -24 26 -77 45 -93 13 -11 12 -5 -5 18 -29 39 -31 93 -5 122 10 11 15 20 12 20 -3 0 -15 -12 -26 -26z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#b77e87", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -16 -10 -13 -18 40 -99 61 -94 195 -229 321 -323 129 -96 131 -97 176 -77 38 16 38 16 12 24 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M91 829 c-1 -8 6 -24 15 -35 15 -19 15 -19 6 1 -5 11 -12 27 -15 35 -5 13 -6 13 -6 -1z" }),
            React__default['default'].createElement("path", { d: "M1230 672 c0 -27 -6 -35 -40 -52 -35 -18 -60 -45 -60 -66 0 -3 21 -4 47 -1 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 22 l-12 23 5 -23 c5 -27 -14 -30 -21 -3 -3 13 -16 21 -41 24 -21 3 -47 8 -59 12 -18 6 -23 2 -29 -20 -17 -67 106 -97 242 -60 172 46 329 220 364 402 14 73 9 228 -8 245 -9 9 -12 5 -12 -20z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -36 -20 -48 1 -17 3 -15 9 8 5 15 17 37 26 47 9 10 14 19 11 19 -3 0 -15 -12 -26 -26z" }),
            React__default['default'].createElement("path", { d: "M620 313 c0 -7 10 -22 23 -35 12 -13 17 -17 11 -8 -6 8 -16 24 -22 35 -6 11 -12 15 -12 8z" })),
        React__default['default'].createElement("g", { id: "layer110", fill: "#e4934d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1210 634 c-91 -58 -104 -89 -33 -81 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 23 l-12 22 5 -23 c5 -27 -14 -30 -21 -2 -4 14 -14 20 -35 20 -16 0 -39 5 -50 11 -27 15 -53 -9 -43 -41 16 -50 135 -65 247 -30 215 66 370 283 367 513 -1 91 -6 98 -49 71z" })),
        React__default['default'].createElement("g", { id: "layer111", fill: "#fecd04", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 968 c19 -93 24 -104 61 -121 20 -10 38 -27 41 -37 3 -11 11 -20 19 -20 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -5 -29 -10 -32 -21 -13 55 -128 147 -225 95 -100 181 -175 289 -249 l61 -43 39 17 c39 17 39 17 13 25 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -216 34 -288 61 -392 148 -141 118 -179 136 -168 80z m442 -268 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M1241 565 c-1 -118 -19 -197 -63 -274 -90 -157 -305 -279 -403 -227 -34 18 -61 20 -70 6 -10 -17 -45 8 -45 32 0 16 -3 19 -11 11 -18 -18 1 -54 37 -69 47 -20 131 -17 206 6 215 66 370 283 367 513 -1 110 -18 111 -18 2z" })),
        React__default['default'].createElement("g", { id: "layer112", fill: "#eccfa4", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 970 c13 -65 26 -112 31 -107 6 5 -22 127 -32 136 -3 3 -3 -10 1 -29z" }),
            React__default['default'].createElement("path", { d: "M166 648 c32 -63 78 -124 153 -202 67 -69 221 -204 221 -193 0 2 -37 37 -82 78 -70 62 -83 78 -80 101 4 30 -34 63 -60 53 -19 -8 -87 70 -125 142 -16 29 -31 53 -36 53 -4 0 0 -15 9 -32z" }),
            React__default['default'].createElement("path", { d: "M1245 585 c4 -51 1 -103 -9 -145 -16 -73 -14 -92 4 -33 17 56 24 204 11 233 -8 20 -10 8 -6 -55z" }),
            React__default['default'].createElement("path", { d: "M1192 315 c-12 -25 -20 -45 -17 -45 7 0 47 81 43 86 -3 2 -14 -17 -26 -41z" }),
            React__default['default'].createElement("path", { d: "M1075 163 c-33 -31 -46 -47 -30 -36 29 20 104 93 94 93 -2 -1 -31 -26 -64 -57z" }),
            React__default['default'].createElement("path", { d: "M640 98 c0 -27 34 -56 75 -64 78 -14 225 18 281 61 10 8 -6 4 -36 -10 -30 -13 -79 -30 -108 -36 -47 -9 -56 -8 -73 6 -14 13 -28 16 -58 11 -35 -5 -42 -3 -60 22 -16 21 -20 23 -21 10z" }))));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1280 1280" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#6e1d4d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#603a4b", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-145 -239 c23 -13 24 -27 5 -66 -17 -35 -15 -76 5 -80 8 -1 39 -12 69 -22 30 -11 58 -18 62 -16 5 3 8 18 8 33 0 49 49 68 73 29 8 -11 7 -23 -1 -40 -10 -21 -11 -21 -5 8 4 27 2 32 -21 36 -28 6 -36 -6 -36 -53 0 -42 -32 -55 -88 -36 -22 8 -51 13 -64 12 -13 -1 -15 0 -6 2 15 4 15 6 -3 24 -23 23 -24 56 -3 110 14 35 15 42 3 50 -23 15 -34 4 -37 -37 -3 -44 -23 -65 -54 -56 -16 4 -19 2 -13 -8 5 -9 4 -11 -4 -6 -6 4 -8 12 -5 18 5 8 1 9 -10 5 -10 -4 -15 -3 -11 3 9 14 -9 12 -23 -2 -9 -9 -12 -8 -12 5 0 21 17 21 61 3 46 -18 59 -11 59 33 0 20 5 42 12 49 15 15 15 15 39 2z m-127 -203 c18 -15 18 -16 2 -11 -16 6 -17 4 -7 -14 13 -24 31 -29 31 -9 0 6 5 4 11 -6 6 -10 15 -14 22 -10 9 5 9 3 1 -8 -7 -8 -15 -28 -19 -46 -5 -27 0 -42 30 -87 45 -68 169 -186 264 -251 55 -38 68 -51 56 -57 -19 -11 -19 -42 0 -58 8 -7 38 -16 67 -20 47 -7 49 -8 15 -9 -56 -2 -107 23 -107 51 0 13 5 29 11 35 8 8 -6 23 -52 54 -88 60 -225 193 -271 264 -22 33 -42 59 -46 57 -4 -2 -7 1 -8 7 -2 8 -1 8 3 1 8 -16 33 9 33 33 0 19 -1 19 -18 4 -10 -10 -27 -17 -38 -16 -15 1 -14 2 5 8 31 8 38 29 14 39 -10 4 -19 14 -19 22 -1 8 -4 29 -8 45 -3 17 -3 23 0 15 4 -8 16 -23 28 -33z m353 -22 c-1 -5 12 -11 28 -12 29 -2 29 -2 5 6 -34 11 79 5 140 -7 36 -8 39 -10 16 -11 -36 -1 -29 -11 16 -21 29 -7 30 -8 7 -9 -14 -1 -44 11 -65 25 -34 23 -42 25 -69 15 -47 -17 -72 -13 -89 11 -20 28 -21 43 -2 26 8 -7 13 -17 13 -23z m353 -28 c-47 -23 -63 -53 -37 -71 11 -9 12 -14 2 -23 -10 -9 -14 -5 -19 22 -5 24 -13 35 -29 38 -20 4 -20 4 3 6 14 0 31 10 37 20 11 17 29 24 78 29 6 1 -10 -9 -35 -21z m89 -6 c6 -10 12 -36 14 -57 3 -22 2 -29 0 -16 -5 26 -9 26 -43 7 -14 -8 -34 -14 -45 -14 -12 1 -8 4 12 10 18 5 39 19 48 32 15 20 14 23 -6 40 -16 13 -18 17 -5 17 8 0 20 -8 25 -19z m-657 -76 c4 -5 8 -14 8 -20 0 -5 -7 1 -16 13 -21 30 -36 28 -32 -5 2 -22 8 -28 26 -27 12 1 22 -3 22 -8 0 -15 -42 -5 -53 13 -5 9 -7 28 -3 43 6 25 9 26 24 14 9 -7 20 -17 24 -23z m157 9 c17 -14 31 -30 31 -34 0 -5 -13 5 -29 21 -31 31 -66 37 -104 18 -21 -10 -21 -10 -3 5 29 23 70 19 105 -10z m164 -45 c-8 -8 -13 -8 -17 0 -4 6 -2 11 5 11 8 0 8 5 -2 18 -12 16 -12 16 6 0 14 -13 16 -21 8 -29z m-267 -42 c5 -7 1 -4 -8 6 -10 11 -18 31 -17 46 1 24 2 23 9 -6 4 -18 11 -39 16 -46z m120 -23 c-11 -8 -34 -13 -50 -12 l-31 1 32 4 c17 2 37 11 44 19 6 8 15 12 18 8 3 -3 -3 -12 -13 -20z m238 -9 c-8 -20 25 -32 38 -14 8 12 9 11 5 -1 -5 -18 -35 -26 -49 -12 -10 10 -5 42 6 42 3 0 3 -7 0 -15z m101 -77 c-8 -21 -30 -54 -47 -74 -34 -38 -137 -94 -173 -94 -11 1 3 9 32 19 29 10 71 31 93 46 45 31 99 114 101 155 1 20 2 21 6 5 2 -11 -3 -37 -12 -57z m-166 6 c17 -14 31 -31 31 -37 0 -6 -7 -1 -16 12 -9 13 -31 29 -48 37 -17 7 -23 13 -14 14 9 0 30 -12 47 -26z m-123 -20 c-6 -19 -12 -28 -14 -20 -3 13 14 56 22 56 2 0 -2 -16 -8 -36z m413 -54 c-18 -34 -53 -80 -78 -102 -49 -44 -133 -88 -166 -88 -11 1 3 9 31 18 95 33 183 115 221 207 10 25 19 40 21 35 2 -5 -11 -37 -29 -70z m-366 -49 c-4 -6 -53 41 -53 50 0 4 13 -4 28 -19 15 -15 26 -29 25 -31z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#c41924", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-145 -239 c23 -13 24 -27 5 -66 -17 -35 -15 -76 5 -80 8 -1 39 -12 69 -22 30 -11 58 -18 62 -16 5 3 8 18 8 33 0 49 49 68 73 29 8 -11 7 -23 -1 -40 -10 -21 -11 -21 -5 8 4 27 2 32 -21 36 -28 6 -36 -6 -36 -53 0 -42 -32 -55 -88 -36 -22 8 -51 13 -64 12 -13 -1 -15 0 -6 2 15 4 15 6 -3 24 -23 23 -24 56 -3 110 14 35 15 42 3 50 -23 15 -34 4 -37 -37 -3 -44 -23 -65 -54 -56 -16 4 -19 2 -13 -8 5 -9 4 -11 -4 -6 -6 4 -8 12 -5 18 5 8 1 9 -10 5 -10 -4 -15 -3 -11 3 9 14 -9 12 -23 -2 -9 -9 -12 -8 -12 5 0 21 17 21 61 3 46 -18 59 -11 59 33 0 20 5 42 12 49 15 15 15 15 39 2z m-113 -217 c19 -18 39 -33 45 -33 6 0 6 -4 -1 -12 -5 -7 -13 -27 -17 -45 -5 -27 0 -42 30 -87 45 -68 169 -186 264 -251 55 -38 68 -51 56 -57 -19 -11 -19 -42 0 -58 8 -7 38 -16 67 -20 47 -7 49 -8 15 -9 -56 -2 -107 23 -107 51 0 13 5 29 11 35 8 8 -6 23 -52 54 -88 60 -225 193 -271 264 -22 33 -42 59 -46 57 -4 -2 -7 1 -8 7 -2 8 -1 8 3 1 7 -14 33 7 33 27 0 11 -4 11 -21 3 -11 -6 -28 -9 -37 -7 -12 3 -11 5 6 6 15 1 22 7 22 21 0 11 -6 20 -13 20 -7 0 -13 8 -13 18 -1 9 -4 31 -8 47 -3 17 -3 23 0 15 4 -8 23 -29 42 -47z m339 -8 c-1 -5 12 -11 28 -12 29 -2 29 -2 5 6 -34 11 79 5 140 -7 36 -8 39 -10 16 -11 -36 -1 -29 -11 16 -21 29 -7 30 -8 7 -9 -14 -1 -44 11 -65 25 -34 23 -42 25 -69 15 -47 -17 -72 -13 -89 11 -20 28 -21 43 -2 26 8 -7 13 -17 13 -23z m353 -28 c-47 -23 -63 -53 -37 -71 11 -9 12 -14 2 -23 -10 -9 -14 -5 -19 22 -5 24 -13 35 -29 38 -20 4 -20 4 3 6 14 0 31 10 37 20 11 17 29 24 78 29 6 1 -10 -9 -35 -21z m89 -6 c6 -10 12 -36 14 -57 3 -22 2 -29 0 -16 -5 26 -9 26 -43 7 -14 -8 -34 -14 -45 -14 -12 1 -8 4 12 10 18 5 39 19 48 32 15 20 14 23 -6 40 -16 13 -18 17 -5 17 8 0 20 -8 25 -19z m-838 -4 c-6 -8 -8 -17 -4 -20 3 -4 2 -7 -4 -7 -19 0 -22 13 -5 26 22 17 27 17 13 1z m181 -72 c4 -5 8 -20 8 -33 0 -18 -5 -23 -21 -20 -30 4 -43 29 -35 62 6 25 9 26 24 14 9 -7 20 -17 24 -23z m157 9 c17 -14 31 -30 31 -34 0 -5 -13 5 -29 21 -31 31 -66 37 -104 18 -21 -10 -21 -10 -3 5 29 23 70 19 105 -10z m161 -19 c18 -21 -3 -46 -22 -27 -9 9 -8 12 6 12 10 0 14 5 10 11 -3 6 -19 9 -35 7 -16 -3 -29 -1 -29 4 0 14 57 9 70 -7z m-264 -68 c5 -7 1 -4 -8 6 -10 11 -18 31 -17 46 1 24 2 23 9 -6 4 -18 11 -39 16 -46z m120 -23 c-11 -8 -34 -13 -50 -12 l-31 1 32 4 c17 2 37 11 44 19 6 8 15 12 18 8 3 -3 -3 -12 -13 -20z m294 7 c0 -5 -8 -7 -18 -4 -10 2 -25 -3 -33 -13 -12 -16 -12 -17 4 -11 11 4 16 3 12 -3 -3 -6 -2 -10 4 -10 5 0 12 5 14 10 3 6 4 5 3 -2 -1 -7 -12 -14 -24 -16 -30 -5 -41 26 -17 44 21 16 55 19 55 5z m45 -93 c-8 -21 -30 -54 -47 -74 -34 -38 -137 -94 -173 -94 -11 1 3 9 32 19 29 10 71 31 93 46 45 31 99 114 101 155 1 20 2 21 6 5 2 -11 -3 -37 -12 -57z m-335 13 c0 -10 -8 -25 -17 -32 -15 -11 -16 -11 -5 1 17 20 15 38 -5 43 -14 4 -12 5 5 6 15 1 22 -5 22 -18z m169 -7 c17 -14 31 -31 31 -37 0 -6 -7 -1 -16 12 -9 13 -31 29 -48 37 -17 7 -23 13 -14 14 9 0 30 -12 47 -26z m-225 5 c-3 -6 0 -15 7 -20 11 -6 10 -9 -4 -15 -10 -3 -20 -4 -23 -1 -6 6 13 47 22 47 3 0 2 -5 -2 -11z m102 -25 c-6 -19 -12 -28 -14 -20 -3 13 14 56 22 56 2 0 -2 -16 -8 -36z m413 -54 c-18 -34 -53 -80 -78 -102 -49 -44 -133 -88 -166 -88 -11 1 3 9 31 18 95 33 183 115 221 207 10 25 19 40 21 35 2 -5 -11 -37 -29 -70z m-366 -49 c-4 -6 -53 41 -53 50 0 4 13 -4 28 -19 15 -15 26 -29 25 -31z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#63534c", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-145 -239 c23 -13 24 -27 5 -66 -17 -35 -15 -76 5 -80 8 -1 39 -12 69 -22 30 -11 58 -18 62 -16 5 3 8 18 8 33 0 49 49 68 73 29 8 -11 7 -23 -1 -40 -10 -21 -11 -21 -5 8 4 27 2 32 -21 36 -28 6 -36 -6 -36 -53 0 -42 -32 -55 -88 -36 -22 8 -51 13 -64 12 -13 -1 -15 0 -6 2 15 4 15 6 -3 24 -23 23 -24 56 -3 110 14 35 15 42 3 50 -23 15 -34 4 -37 -37 -3 -44 -23 -65 -54 -56 -16 4 -19 2 -13 -8 5 -9 4 -11 -4 -6 -6 4 -8 12 -5 18 5 8 1 9 -10 5 -10 -4 -15 -3 -11 3 9 14 -9 12 -23 -2 -9 -9 -12 -8 -12 5 0 21 17 21 61 3 46 -18 59 -11 59 33 0 20 5 42 12 49 15 15 15 15 39 2z m-113 -217 c19 -18 39 -33 45 -33 6 0 6 -4 -1 -12 -5 -7 -13 -27 -17 -45 -5 -27 0 -42 30 -87 45 -68 169 -186 264 -251 55 -38 68 -51 56 -57 -19 -11 -19 -42 0 -58 8 -7 38 -16 67 -20 47 -7 49 -8 15 -9 -56 -2 -107 23 -107 51 0 13 5 29 11 35 8 8 -6 23 -52 54 -88 60 -225 193 -271 264 -22 33 -42 59 -46 57 -4 -2 -7 1 -8 7 -2 8 -1 8 3 1 7 -14 33 7 33 27 0 11 -4 11 -21 3 -11 -6 -28 -9 -37 -7 -12 3 -11 5 6 6 15 1 22 7 22 21 0 11 -6 20 -13 20 -7 0 -13 8 -13 18 -1 9 -4 31 -8 47 -3 17 -3 23 0 15 4 -8 23 -29 42 -47z m339 -8 c-1 -5 12 -11 28 -12 29 -2 29 -2 5 6 -34 11 79 5 140 -7 36 -8 39 -10 16 -11 -36 -1 -29 -11 16 -21 29 -7 30 -8 7 -9 -14 -1 -44 11 -65 25 -34 23 -42 25 -69 15 -47 -17 -72 -13 -89 11 -20 28 -21 43 -2 26 8 -7 13 -17 13 -23z m353 -28 c-47 -23 -63 -53 -37 -71 11 -9 12 -14 2 -23 -10 -9 -14 -5 -19 22 -5 24 -13 35 -29 38 -20 4 -20 4 3 6 14 0 31 10 37 20 11 17 29 24 78 29 6 1 -10 -9 -35 -21z m89 -6 c6 -10 12 -36 14 -57 3 -22 2 -29 0 -16 -5 26 -9 26 -43 7 -14 -8 -34 -14 -45 -14 -12 1 -8 4 12 10 18 5 39 19 48 32 15 20 14 23 -6 40 -16 13 -18 17 -5 17 8 0 20 -8 25 -19z m-838 -4 c-6 -8 -8 -17 -4 -20 3 -4 2 -7 -4 -7 -19 0 -22 13 -5 26 22 17 27 17 13 1z m181 -72 c4 -5 8 -20 8 -33 0 -18 -5 -23 -21 -20 -30 4 -43 29 -35 62 6 25 9 26 24 14 9 -7 20 -17 24 -23z m122 23 c-5 -7 -3 -8 5 -3 7 4 22 -2 35 -14 28 -26 30 -107 3 -105 -9 1 -14 -2 -11 -7 3 -5 -9 -9 -26 -9 -21 0 -29 4 -24 12 5 7 2 9 -8 5 -21 -8 -53 51 -46 86 3 17 1 25 -6 21 -6 -3 -2 2 8 10 23 19 81 22 70 4z m196 -33 c18 -21 -3 -46 -22 -27 -9 9 -8 12 6 12 10 0 14 5 10 11 -3 6 -19 9 -35 7 -16 -3 -29 -1 -29 4 0 14 57 9 70 -7z m-264 -68 c5 -7 1 -4 -8 6 -10 11 -18 31 -17 46 1 24 2 23 9 -6 4 -18 11 -39 16 -46z m414 -16 c0 -5 -8 -7 -18 -4 -10 2 -25 -3 -33 -13 -12 -16 -12 -17 4 -11 11 4 16 3 12 -3 -3 -6 -2 -10 4 -10 5 0 12 5 14 10 3 6 4 5 3 -2 -1 -7 -12 -14 -24 -16 -30 -5 -41 26 -17 44 21 16 55 19 55 5z m45 -93 c-8 -21 -30 -54 -47 -74 -34 -38 -137 -94 -173 -94 -11 1 3 9 32 19 29 10 71 31 93 46 45 31 99 114 101 155 1 20 2 21 6 5 2 -11 -3 -37 -12 -57z m-335 13 c0 -10 -8 -25 -17 -32 -15 -11 -16 -11 -5 1 17 20 15 38 -5 43 -14 4 -12 5 5 6 15 1 22 -5 22 -18z m175 -11 c14 -13 23 -30 21 -37 -3 -7 -1 -13 4 -13 6 0 10 -7 10 -15 0 -8 -5 -15 -12 -15 -6 0 -8 -3 -5 -7 9 -9 -13 -34 -24 -27 -5 3 -9 0 -9 -5 0 -6 -12 -11 -27 -11 -16 0 -23 4 -17 8 7 4 -3 14 -25 24 l-36 17 24 -19 c13 -11 20 -20 15 -20 -12 0 -54 42 -54 54 0 6 5 4 10 -4 7 -11 8 -5 4 18 -5 23 -2 38 10 51 9 10 13 20 10 23 -3 3 13 5 35 4 27 -1 49 -10 66 -26z m-231 9 c-3 -6 0 -15 7 -20 11 -6 10 -9 -4 -15 -10 -3 -20 -4 -23 -1 -6 6 13 47 22 47 3 0 2 -5 -2 -11z m102 -25 c-6 -19 -12 -28 -14 -20 -3 13 14 56 22 56 2 0 -2 -16 -8 -36z m413 -54 c-18 -34 -53 -80 -78 -102 -49 -44 -133 -88 -166 -88 -11 1 3 9 31 18 95 33 183 115 221 207 10 25 19 40 21 35 2 -5 -11 -37 -29 -70z" }),
            React__default['default'].createElement("path", { d: "M260 800 c11 -20 30 -28 30 -12 0 11 -22 32 -32 32 -5 0 -4 -9 2 -20z" }),
            React__default['default'].createElement("path", { d: "M362 683 c2 -16 10 -27 21 -29 20 -3 23 26 5 44 -19 19 -30 14 -26 -15z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#8c364b", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-145 -239 c23 -13 24 -27 5 -66 -17 -35 -15 -76 5 -80 8 -1 39 -12 69 -22 30 -11 58 -18 62 -16 5 3 8 18 8 33 0 49 49 68 73 29 8 -11 7 -23 -1 -40 -10 -21 -11 -21 -5 8 4 27 2 32 -21 36 -28 6 -36 -6 -36 -53 0 -42 -32 -55 -88 -36 -22 8 -51 13 -64 12 -13 -1 -15 0 -6 2 15 4 15 6 -3 24 -23 23 -24 56 -3 110 14 35 15 42 3 50 -23 15 -34 4 -37 -37 -3 -44 -23 -65 -54 -56 -16 4 -19 2 -13 -8 5 -9 4 -11 -4 -6 -6 4 -8 12 -5 18 5 8 1 9 -10 5 -10 -4 -15 -3 -11 3 9 14 -9 12 -23 -2 -9 -9 -12 -8 -12 5 0 21 17 21 61 3 46 -18 59 -11 59 33 0 20 5 42 12 49 15 15 15 15 39 2z m-113 -217 c19 -18 39 -33 45 -33 6 0 6 -4 -1 -12 -5 -7 -13 -27 -17 -45 -5 -27 0 -42 30 -87 45 -68 169 -186 264 -251 55 -38 68 -51 56 -57 -19 -11 -19 -42 0 -58 8 -7 38 -16 67 -20 47 -7 49 -8 15 -9 -56 -2 -107 23 -107 51 0 13 5 29 11 35 8 8 -6 23 -52 54 -88 60 -225 193 -271 264 -22 33 -42 59 -46 57 -4 -2 -7 1 -8 7 -2 8 -1 8 3 1 7 -15 33 7 33 28 0 12 -3 13 -12 4 -7 -7 -23 -11 -38 -11 -23 2 -23 2 -2 6 25 5 28 15 10 35 -7 7 -14 20 -14 28 -1 8 -4 29 -8 45 -3 17 -3 23 0 15 4 -8 23 -29 42 -47z m339 -8 c-1 -5 12 -11 28 -12 29 -2 29 -2 5 6 -34 11 79 5 140 -7 36 -8 39 -10 16 -11 -36 -1 -29 -11 16 -21 29 -7 30 -8 7 -9 -14 -1 -44 11 -65 25 -34 23 -42 25 -69 15 -47 -17 -72 -13 -89 11 -20 28 -21 43 -2 26 8 -7 13 -17 13 -23z m353 -28 c-47 -23 -63 -53 -37 -71 11 -9 12 -14 2 -23 -10 -9 -14 -5 -19 22 -5 24 -13 35 -29 38 -20 4 -20 4 3 6 14 0 31 10 37 20 11 17 29 24 78 29 6 1 -10 -9 -35 -21z m89 -6 c6 -10 12 -36 14 -57 3 -22 2 -29 0 -16 -5 26 -9 26 -43 7 -14 -8 -34 -14 -45 -14 -12 1 -8 4 12 10 18 5 39 19 48 32 15 20 14 23 -6 40 -16 13 -18 17 -5 17 8 0 20 -8 25 -19z m-838 -4 c-6 -8 -8 -17 -4 -20 3 -4 2 -7 -4 -7 -19 0 -22 13 -5 26 22 17 27 17 13 1z m181 -72 c4 -5 8 -20 8 -33 0 -18 -5 -23 -21 -20 -30 4 -43 29 -35 62 6 25 9 26 24 14 9 -7 20 -17 24 -23z m122 23 c-5 -7 -3 -8 5 -3 7 4 22 -2 35 -14 28 -26 30 -107 3 -105 -9 1 -14 -2 -11 -7 3 -5 -9 -9 -26 -9 -21 0 -29 4 -24 12 5 7 2 9 -8 5 -21 -8 -53 51 -46 86 3 17 1 25 -6 21 -6 -3 -2 2 8 10 23 19 81 22 70 4z m196 -33 c16 -19 6 -32 -25 -32 -22 0 -45 21 -45 41 0 13 58 5 70 -9z m-264 -68 c5 -7 1 -4 -8 6 -10 11 -18 31 -17 46 1 24 2 23 9 -6 4 -18 11 -39 16 -46z m414 -11 c0 -24 -23 -56 -40 -56 -29 0 -38 30 -15 46 18 13 55 19 55 10z m45 -98 c-8 -21 -30 -54 -47 -74 -34 -38 -137 -94 -173 -94 -11 1 3 9 32 19 29 10 71 31 93 46 45 31 99 114 101 155 1 20 2 21 6 5 2 -11 -3 -37 -12 -57z m-335 13 c0 -23 -17 -36 -52 -40 -33 -3 -36 11 -8 39 26 26 60 26 60 1z m175 -11 c14 -13 23 -30 21 -37 -3 -7 -1 -13 4 -13 6 0 10 -7 10 -15 0 -8 -5 -15 -12 -15 -6 0 -8 -3 -5 -7 9 -9 -13 -34 -24 -27 -5 3 -9 0 -9 -5 0 -6 -12 -11 -27 -11 -16 0 -23 4 -17 8 7 4 -3 14 -25 24 l-36 17 24 -19 c13 -11 20 -20 15 -20 -12 0 -54 42 -54 54 0 6 5 4 10 -4 7 -11 8 -5 4 18 -5 23 -2 38 10 51 9 10 13 20 10 23 -3 3 13 5 35 4 27 -1 49 -10 66 -26z m-129 -16 c-6 -19 -12 -28 -14 -20 -3 13 14 56 22 56 2 0 -2 -16 -8 -36z m413 -54 c-18 -34 -53 -80 -78 -102 -49 -44 -133 -88 -166 -88 -11 1 3 9 31 18 95 33 183 115 221 207 10 25 19 40 21 35 2 -5 -11 -37 -29 -70z" }),
            React__default['default'].createElement("path", { d: "M420 851 c19 -11 46 -20 60 -20 22 0 20 2 -10 13 -69 26 -87 28 -50 7z" }),
            React__default['default'].createElement("path", { d: "M667 674 c3 -8 12 -13 20 -10 8 3 19 6 24 6 6 0 7 5 4 10 -3 6 -17 10 -30 10 -18 0 -23 -4 -18 -16z" }),
            React__default['default'].createElement("path", { d: "M533 523 c-7 -2 -13 -9 -13 -15 0 -6 7 -8 15 -4 8 3 15 1 15 -5 0 -6 5 -7 10 -4 6 3 10 13 10 21 0 14 -14 17 -37 7z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#9c5533", stroke: "none" },
            React__default['default'].createElement("path", { d: "M357 1013 c-4 -3 -7 -21 -7 -39 0 -41 -28 -61 -62 -43 -27 14 -28 15 40 -45 52 -45 92 -64 59 -28 -21 23 -21 78 -2 112 8 14 14 31 15 38 0 13 -32 17 -43 5z" }),
            React__default['default'].createElement("path", { d: "M230 922 c0 -51 14 -83 41 -98 16 -8 29 -21 29 -29 0 -8 7 -15 16 -15 12 0 14 -3 6 -12 -5 -7 -13 -27 -16 -43 -13 -59 90 -184 249 -306 57 -43 101 -69 116 -69 84 0 204 85 234 165 19 47 24 133 12 177 -6 24 -12 27 -60 31 l-52 3 55 3 55 3 -67 13 c-37 8 -80 24 -97 36 -26 19 -34 21 -56 11 -14 -7 -39 -12 -56 -12 -38 0 -58 37 -41 75 20 43 15 57 -15 53 -24 -3 -28 -8 -31 -40 -4 -52 -28 -64 -93 -45 -57 17 -75 7 -23 -12 20 -7 34 -15 31 -17 -10 -10 -80 29 -127 71 -28 24 -64 52 -80 60 -28 15 -30 14 -30 -3z m170 -223 c16 -29 12 -59 -8 -59 -10 0 -23 5 -30 12 -12 12 -17 60 -6 71 9 9 34 -4 44 -24z m149 17 c27 -14 51 -53 51 -81 0 -27 -38 -55 -76 -55 -26 0 -43 8 -65 29 -71 71 -2 154 90 107z m178 -32 c4 -11 -1 -22 -12 -30 -16 -12 -22 -12 -39 0 -12 7 -22 21 -24 30 -5 23 66 23 75 0z m143 -85 c0 -23 -22 -49 -41 -49 -28 0 -37 30 -14 46 22 17 55 18 55 3z m-290 -78 c0 -26 -29 -54 -47 -47 -8 3 -19 6 -24 6 -14 0 -11 22 8 42 22 25 63 24 63 -1z m159 4 c34 -17 56 -65 47 -100 -14 -56 -105 -58 -150 -4 -30 35 -33 65 -10 97 18 26 70 30 113 7z" }),
            React__default['default'].createElement("path", { d: "M435 845 c17 -8 37 -14 45 -14 8 0 -1 7 -20 14 -46 18 -64 17 -25 0z" }),
            React__default['default'].createElement("path", { d: "M990 783 c-52 -15 -75 -39 -64 -68 14 -37 128 -2 122 37 -3 22 -33 38 -58 31z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#4cb259", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-135 -245 c10 -13 10 -21 0 -47 -19 -46 -19 -90 -1 -93 8 -1 40 -12 70 -23 l55 -20 6 30 c9 39 28 61 52 57 32 -5 44 -32 29 -70 -6 -17 -10 -34 -7 -36 11 -11 161 -25 293 -27 110 -1 146 -5 158 -16 8 -8 19 -51 26 -95 10 -69 9 -91 -5 -149 -29 -118 -107 -213 -213 -262 -72 -33 -148 -40 -198 -19 -37 15 -38 18 -33 54 6 37 5 38 -65 87 -90 63 -204 174 -248 243 -18 28 -39 52 -47 52 -7 0 -13 9 -13 20 0 13 -7 20 -18 20 -10 0 -26 6 -37 14 -17 12 -16 14 12 31 l31 18 -14 46 c-15 51 -18 117 -6 125 4 2 26 -4 49 -14 48 -21 63 -13 63 35 0 50 34 71 61 39z" }),
            React__default['default'].createElement("path", { d: "M361 683 c0 -16 3 -22 6 -15 4 10 8 10 19 1 18 -15 20 11 2 29 -19 19 -28 14 -27 -15z" }),
            React__default['default'].createElement("path", { d: "M666 676 c3 -8 12 -17 20 -20 9 -3 12 -1 9 4 -3 6 1 10 10 10 9 0 13 5 10 10 -10 16 -55 12 -49 -4z" }),
            React__default['default'].createElement("path", { d: "M821 586 c-9 -10 -8 -15 4 -19 9 -4 19 2 25 13 8 16 8 20 -3 20 -8 0 -20 -6 -26 -14z" }),
            React__default['default'].createElement("path", { d: "M533 523 c-7 -2 -13 -9 -13 -15 0 -6 7 -7 16 -4 12 5 15 2 10 -10 -5 -14 -4 -15 9 -4 30 25 14 48 -22 33z" }),
            React__default['default'].createElement("path", { d: "M256 806 c6 -16 34 -30 34 -18 0 10 -22 32 -32 32 -4 0 -5 -6 -2 -14z" }),
            React__default['default'].createElement("path", { d: "M221 767 c-14 -17 -4 -27 27 -27 18 0 23 4 18 16 -3 9 -6 18 -6 20 0 10 -28 3 -39 -9z" }),
            React__default['default'].createElement("path", { d: "M282 738 c-6 -6 -12 -19 -12 -27 0 -13 2 -13 16 1 9 9 15 21 13 27 -3 9 -8 8 -17 -1z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#b57327", stroke: "none" },
            React__default['default'].createElement("path", { d: "M354 1005 c-3 -8 -3 -19 1 -25 10 -15 -22 -60 -43 -60 -12 -1 -3 -13 28 -40 46 -40 76 -54 47 -22 -21 23 -22 78 -2 116 8 15 12 32 9 37 -8 14 -34 11 -40 -6z" }),
            React__default['default'].createElement("path", { d: "M230 922 c0 -51 14 -83 41 -98 16 -8 29 -21 29 -29 0 -8 3 -14 8 -14 18 3 24 -2 14 -13 -5 -7 -13 -27 -16 -43 -13 -59 90 -184 251 -307 89 -68 94 -70 134 -64 139 22 229 130 229 273 0 82 -8 92 -77 95 -32 1 -30 2 17 8 51 6 52 7 15 9 -49 2 -110 23 -136 47 -18 16 -21 16 -59 -1 -37 -17 -41 -17 -66 0 -27 17 -26 15 -12 100 2 16 -3 20 -22 20 -22 0 -25 -5 -28 -37 -2 -24 -10 -42 -22 -48 -19 -10 -71 -4 -102 12 -11 5 -18 5 -18 0 0 -5 14 -15 30 -22 17 -7 29 -14 27 -16 -9 -10 -79 29 -128 71 -30 26 -66 53 -81 61 -26 13 -28 13 -28 -4z m178 -251 c3 -32 -7 -38 -42 -25 -16 6 -23 64 -9 77 13 14 48 -21 51 -52z m157 35 c56 -57 37 -126 -36 -126 -75 0 -127 83 -82 132 24 27 88 24 118 -6z m165 -26 c9 -17 7 -22 -14 -32 -28 -12 -48 -2 -67 34 -9 16 -5 18 30 18 30 0 43 -5 51 -20z m140 -81 c0 -24 -22 -49 -45 -49 -32 0 -38 12 -19 38 15 22 64 31 64 11z m-285 -81 c-11 -37 -31 -51 -59 -44 -49 12 -20 66 35 66 27 0 30 -3 24 -22z m176 -9 c51 -55 27 -129 -42 -129 -35 0 -72 17 -64 30 3 5 0 12 -6 16 -8 4 -9 3 -5 -4 4 -7 3 -12 -2 -12 -5 0 -14 11 -20 25 -29 63 -3 105 66 105 36 0 49 -5 73 -31z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#a45b5c", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-135 -245 c10 -13 10 -21 0 -47 -19 -46 -19 -90 -1 -93 8 -1 40 -12 70 -23 l55 -20 6 30 c9 39 28 61 52 57 32 -5 44 -32 29 -70 -6 -17 -10 -34 -7 -36 11 -11 161 -25 293 -27 110 -1 146 -5 158 -16 8 -8 19 -51 26 -95 10 -69 9 -91 -5 -149 -29 -118 -107 -213 -213 -262 -72 -33 -148 -40 -198 -19 -37 15 -38 18 -33 54 6 37 5 38 -65 87 -90 63 -204 174 -248 243 -18 28 -39 52 -47 52 -7 0 -13 9 -13 20 0 14 -7 20 -21 20 -11 0 -17 4 -14 10 3 5 0 7 -8 4 -29 -11 -27 15 2 32 l29 17 -14 46 c-15 51 -18 117 -6 125 4 2 26 -4 49 -14 48 -21 63 -13 63 35 0 50 34 71 61 39z" }),
            React__default['default'].createElement("path", { d: "M230 922 c0 -46 14 -84 34 -92 31 -13 72 -60 59 -68 -6 -4 -13 -21 -17 -37 -13 -59 90 -184 251 -307 l93 -71 55 12 c71 16 143 66 179 125 24 38 30 61 34 124 5 94 -6 112 -71 113 -23 0 -60 4 -82 9 -30 7 -17 8 55 5 89 -3 91 -3 30 5 -38 6 -76 18 -93 31 -21 15 -36 19 -55 14 -70 -17 -78 -17 -96 4 -13 14 -17 29 -13 48 13 67 13 68 -13 68 -22 0 -25 -5 -28 -37 -4 -49 -26 -62 -84 -48 -62 14 -68 12 -28 -10 42 -23 36 -26 -11 -6 -19 8 -62 37 -97 65 -85 69 -102 77 -102 53z m325 -154 c13 -5 9 -6 -15 -2 -19 4 -42 10 -50 15 -18 11 34 1 65 -13z m-152 -70 c24 -32 16 -58 -17 -58 -31 0 -46 25 -39 63 7 34 28 32 56 -5z m168 3 c46 -47 36 -103 -24 -124 -43 -16 -117 39 -117 86 0 70 85 93 141 38z m159 -17 c13 -14 13 -17 -4 -30 -28 -20 -39 -18 -66 12 -21 21 -22 27 -10 35 19 11 60 3 80 -17z m140 -92 c0 -24 -19 -42 -46 -42 -31 0 -36 12 -18 38 19 27 64 30 64 4z m-288 -72 c-5 -44 -37 -62 -71 -41 -20 13 -4 48 27 59 37 14 48 9 44 -18z m142 16 c82 -34 90 -132 13 -159 -25 -9 -93 20 -111 48 -25 38 -20 80 10 104 31 25 43 26 88 7z" }),
            React__default['default'].createElement("path", { d: "M990 783 c-52 -15 -75 -39 -64 -68 13 -32 124 -1 124 35 0 19 -37 39 -60 33z" }),
            React__default['default'].createElement("path", { d: "M800 772 c23 -14 108 -23 115 -12 4 6 -8 10 -28 10 -19 0 -50 3 -68 6 -23 4 -29 2 -19 -4z" }),
            React__default['default'].createElement("path", { d: "M1020 698 c-19 -10 -45 -18 -57 -18 -21 0 -23 -5 -23 -55 0 -76 -31 -152 -82 -202 -52 -49 -75 -62 -153 -83 -65 -18 -82 -43 -49 -71 30 -25 140 -17 206 15 75 36 159 126 188 203 23 61 33 206 14 221 -5 5 -25 0 -44 -10z" })),
        React__default['default'].createElement("g", { id: "layer110", fill: "#d39618", stroke: "none" },
            React__default['default'].createElement("path", { d: "M360 988 c0 -39 -9 -54 -35 -65 -18 -7 -16 -11 23 -48 l44 -39 -18 36 c-16 35 -16 40 -1 80 21 54 21 68 2 68 -10 0 -15 -10 -15 -32z" }),
            React__default['default'].createElement("path", { d: "M230 922 c0 -46 14 -84 34 -92 30 -13 72 -60 59 -68 -25 -17 -24 -64 3 -110 36 -61 173 -196 262 -256 l70 -48 52 12 c68 16 138 66 174 124 24 38 30 61 34 124 5 94 -6 112 -71 113 -23 0 -60 4 -82 9 -30 7 -17 8 55 5 89 -3 91 -3 30 5 -38 6 -76 18 -93 31 -21 15 -36 19 -55 14 -70 -17 -78 -17 -96 4 -13 14 -17 29 -13 48 13 67 13 68 -13 68 -22 0 -25 -5 -28 -37 -4 -49 -26 -62 -84 -48 -62 14 -68 12 -28 -10 42 -23 36 -26 -11 -6 -19 8 -62 37 -97 65 -85 69 -102 77 -102 53z m325 -154 c13 -5 9 -6 -15 -2 -19 4 -42 10 -50 15 -18 11 34 1 65 -13z m-152 -70 c24 -32 16 -58 -17 -58 -31 0 -46 25 -39 63 7 34 28 32 56 -5z m168 3 c46 -47 36 -103 -24 -124 -43 -16 -117 39 -117 86 0 70 85 93 141 38z m159 -17 c13 -14 13 -17 -4 -30 -28 -20 -39 -18 -66 12 -21 21 -22 27 -10 35 19 11 60 3 80 -17z m140 -92 c0 -24 -19 -42 -46 -42 -31 0 -36 12 -18 38 19 27 64 30 64 4z m-288 -72 c-5 -44 -37 -62 -71 -41 -20 13 -4 48 27 59 37 14 48 9 44 -18z m142 16 c82 -34 90 -132 13 -159 -25 -9 -93 20 -111 48 -25 38 -20 80 10 104 31 25 43 26 88 7z" })),
        React__default['default'].createElement("g", { id: "layer111", fill: "#d4505f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M636 511 c-10 -11 -16 -28 -13 -38 4 -17 5 -17 6 1 0 11 8 28 18 38 9 10 14 18 11 18 -3 0 -13 -9 -22 -19z" })),
        React__default['default'].createElement("g", { id: "layer112", fill: "#c8744b", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-142 -235 c18 -7 21 -36 5 -65 -5 -11 -11 -32 -13 -47 -1 -23 4 -29 44 -46 25 -10 57 -22 73 -26 25 -8 27 -7 27 20 0 46 33 70 74 54 18 -7 21 -46 6 -74 -7 -13 -7 -21 1 -26 24 -15 149 -27 285 -28 98 -1 146 -6 157 -14 27 -23 42 -144 29 -224 -15 -87 -41 -137 -105 -205 -65 -69 -137 -104 -225 -110 -91 -5 -117 9 -116 63 0 38 -3 42 -63 83 -93 64 -198 165 -245 237 -23 35 -48 64 -55 64 -7 0 -13 9 -13 20 0 14 -7 20 -21 20 -11 0 -17 4 -14 10 3 5 0 7 -8 4 -29 -11 -28 17 1 33 29 16 29 18 17 53 -38 109 -24 154 38 124 45 -21 67 -13 67 25 0 56 14 70 54 55z" }),
            React__default['default'].createElement("path", { d: "M952 764 c-12 -8 -22 -26 -22 -40 0 -19 5 -24 26 -24 39 0 94 29 94 50 0 32 -60 41 -98 14z" }),
            React__default['default'].createElement("path", { d: "M843 763 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z" }),
            React__default['default'].createElement("path", { d: "M1025 699 c-16 -11 -42 -19 -56 -19 -26 0 -27 -2 -30 -73 -8 -149 -85 -232 -256 -277 -57 -14 -59 -44 -6 -67 116 -48 316 72 373 224 23 61 31 185 14 215 -8 13 -12 13 -39 -3z" })),
        React__default['default'].createElement("g", { id: "layer113", fill: "#b18186", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-133 -264 c0 -16 -4 -48 -8 -71 l-7 -41 43 -18 c24 -9 56 -21 72 -25 25 -8 27 -7 27 20 0 37 25 62 58 58 32 -4 45 -43 25 -75 -18 -28 -8 -34 70 -40 34 -3 67 -10 73 -14 6 -5 73 -8 148 -6 158 4 157 4 176 -86 36 -177 -42 -345 -199 -430 -40 -22 -70 -30 -131 -34 -75 -6 -79 -5 -105 21 -15 16 -24 33 -21 41 3 8 8 21 11 28 3 7 -19 27 -52 47 -74 46 -245 213 -272 267 -15 29 -26 41 -36 37 -11 -5 -15 1 -15 20 0 21 -5 26 -24 26 -13 0 -29 6 -35 14 -9 11 -6 18 15 33 24 18 25 22 15 59 -31 117 -21 148 42 118 45 -21 67 -13 67 25 0 48 10 62 39 59 22 -3 26 -8 24 -33z" }),
            React__default['default'].createElement("path", { d: "M230 922 c0 -46 14 -84 34 -92 44 -19 86 -70 57 -70 -5 0 -11 -14 -15 -32 -5 -23 0 -42 21 -77 33 -58 160 -184 246 -245 64 -45 98 -55 127 -36 12 8 10 10 -8 10 -13 0 -37 13 -53 29 -69 70 -8 168 82 131 38 -16 69 -55 69 -88 0 -24 1 -25 20 -7 25 23 70 113 69 139 0 18 -2 17 -10 -6 -11 -30 -28 -39 -58 -31 -50 13 -8 67 51 65 27 -1 28 1 28 48 0 48 -1 49 -32 54 -397 62 -427 70 -518 145 -25 21 -60 47 -77 60 -32 21 -33 22 -33 3z m304 -196 c67 -28 87 -98 40 -135 -15 -12 -33 -21 -41 -21 -31 0 -82 33 -96 62 -13 26 -16 28 -24 14 -7 -13 -15 -15 -35 -7 -30 11 -40 33 -32 67 8 31 21 30 56 -3 22 -21 28 -23 28 -10 0 14 42 46 63 47 4 0 23 -6 41 -14z m187 -35 c20 -16 21 -21 10 -35 -20 -24 -58 -20 -77 10 -15 22 -15 27 -3 35 22 14 45 11 70 -10z m-131 -159 c0 -33 -30 -63 -58 -60 -37 4 -38 47 -2 65 36 18 60 16 60 -5z" }),
            React__default['default'].createElement("path", { d: "M1055 704 c4 -16 -2 -24 -30 -37 -42 -20 -49 -52 -10 -45 34 7 32 -10 -2 -19 l-28 -7 25 -7 c24 -7 24 -7 4 -14 -16 -5 -24 -20 -33 -60 -18 -78 -66 -137 -146 -176 -43 -21 -64 -37 -61 -45 6 -16 -32 -13 -42 3 -4 6 -26 14 -49 18 -39 6 -43 5 -43 -15 0 -15 11 -25 37 -37 116 -48 316 72 373 224 25 66 31 187 11 219 -12 18 -12 18 -6 -2z" })),
        React__default['default'].createElement("g", { id: "layer114", fill: "#fecc01", stroke: "none" },
            React__default['default'].createElement("path", { d: "M230 923 c0 -34 21 -93 33 -93 28 -1 86 -70 58 -70 -5 0 -11 -14 -15 -32 -5 -26 0 -42 31 -87 46 -71 127 -151 224 -224 74 -56 108 -67 139 -47 12 8 10 10 -8 10 -13 0 -37 13 -53 29 -69 70 -8 168 82 131 38 -16 69 -55 69 -88 0 -24 1 -25 20 -7 25 23 70 113 69 139 0 18 -2 17 -10 -6 -11 -30 -28 -39 -58 -31 -50 13 -8 67 51 65 27 -1 28 1 28 48 0 48 -1 49 -32 54 -397 62 -427 70 -518 145 -25 21 -60 47 -77 60 -30 20 -33 21 -33 4z m304 -197 c67 -28 87 -98 40 -135 -15 -12 -33 -21 -41 -21 -31 0 -82 33 -96 62 -13 26 -16 28 -24 14 -7 -13 -15 -15 -35 -7 -30 11 -40 33 -32 67 8 31 21 30 56 -3 22 -21 28 -23 28 -10 0 14 42 46 63 47 4 0 23 -6 41 -14z m187 -35 c20 -16 21 -21 10 -35 -20 -24 -58 -20 -77 10 -15 22 -15 27 -3 35 22 14 45 11 70 -10z m-131 -159 c0 -33 -30 -63 -58 -60 -37 4 -38 47 -2 65 36 18 60 16 60 -5z" })),
        React__default['default'].createElement("g", { id: "layer115", fill: "#e89a54", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-133 -264 c0 -16 -4 -48 -8 -71 l-7 -41 43 -18 c24 -9 56 -21 72 -25 24 -8 27 -6 27 16 0 42 18 64 51 64 35 0 62 -41 41 -62 -13 -13 -16 -48 -4 -48 4 -1 41 -6 82 -12 41 -7 134 -12 206 -13 93 0 135 -4 147 -13 23 -19 40 -115 35 -193 -13 -176 -160 -333 -323 -347 -79 -6 -110 2 -131 32 -11 19 -13 30 -5 44 9 17 0 27 -77 84 -98 74 -208 185 -242 246 -14 25 -28 38 -36 35 -10 -4 -14 3 -14 21 0 21 -5 26 -24 26 -13 0 -29 6 -35 14 -9 11 -6 18 14 33 l26 18 -18 73 c-15 65 -15 74 -2 88 14 14 19 13 52 -2 48 -23 67 -14 67 34 0 46 6 54 40 50 21 -3 25 -8 23 -33z" }),
            React__default['default'].createElement("path", { d: "M231 925 c-1 -22 19 -99 24 -93 2 1 -3 28 -10 58 -7 30 -14 46 -14 35z" }),
            React__default['default'].createElement("path", { d: "M300 710 c0 -42 132 -196 230 -269 41 -30 40 -28 -12 22 -35 32 -58 62 -58 75 0 22 -34 47 -49 37 -5 -3 -20 9 -32 27 -13 18 -26 35 -29 38 -4 3 -10 12 -14 20 -19 41 -36 64 -36 50z" }),
            React__default['default'].createElement("path", { d: "M1028 669 c-44 -23 -53 -54 -13 -47 34 7 32 -10 -2 -19 l-28 -7 25 -7 c24 -7 24 -7 4 -14 -16 -5 -24 -20 -33 -60 -18 -78 -66 -137 -146 -176 -43 -21 -64 -37 -61 -45 6 -16 -32 -13 -42 3 -10 14 -79 26 -86 14 -10 -15 4 -40 27 -47 80 -26 204 14 283 91 74 73 106 145 112 253 3 45 3 82 1 82 -2 -1 -21 -10 -41 -21z" })),
        React__default['default'].createElement("g", { id: "layer116", fill: "#dcae93", stroke: "none" },
            React__default['default'].createElement("path", { d: "M231 920 c-1 -19 19 -93 24 -88 2 2 -2 26 -10 53 -7 28 -14 43 -14 35z" }),
            React__default['default'].createElement("path", { d: "M300 704 c0 -37 140 -196 230 -263 41 -30 40 -28 -12 22 -35 32 -58 62 -58 75 0 22 -34 47 -49 37 -5 -3 -20 9 -32 27 -13 18 -27 35 -31 36 -4 2 -8 8 -8 14 0 5 -9 21 -20 35 -11 14 -20 22 -20 17z" }),
            React__default['default'].createElement("path", { d: "M1062 660 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" }),
            React__default['default'].createElement("path", { d: "M954 358 l-29 -33 33 29 c17 17 32 31 32 33 0 8 -8 1 -36 -29z" }),
            React__default['default'].createElement("path", { d: "M640 305 c0 -35 60 -57 126 -45 l39 6 -40 8 c-22 4 -53 7 -70 8 -16 0 -35 8 -42 17 -7 9 -12 12 -13 6z" })),
        React__default['default'].createElement("g", { id: "layer117", fill: "#d1c3ac", stroke: "none" },
            React__default['default'].createElement("path", { d: "M650 293 c0 -19 35 -33 82 -33 l43 1 -34 15 c-19 8 -43 12 -54 8 -11 -4 -23 -1 -28 7 -6 10 -9 10 -9 2z" })),
        React__default['default'].createElement("g", { id: "layer118", fill: "#fed283", stroke: "none" },
            React__default['default'].createElement("path", { d: "M536 1269 c-201 -33 -377 -162 -463 -339 -53 -109 -67 -172 -67 -290 0 -118 14 -181 67 -290 58 -119 158 -219 277 -277 109 -53 172 -67 290 -67 118 0 181 14 290 67 247 120 390 409 336 681 -67 341 -394 572 -730 515z m-126 -244 c11 -13 10 -22 -3 -51 -28 -59 -23 -79 26 -99 23 -10 54 -21 70 -25 26 -8 27 -7 27 24 0 40 19 59 56 54 36 -4 53 -31 36 -58 -20 -32 -15 -50 16 -52 15 -1 43 -2 62 -4 19 -1 55 -7 80 -14 29 -8 81 -10 148 -6 62 3 111 2 122 -4 27 -14 44 -103 38 -196 -9 -143 -83 -256 -212 -320 -54 -26 -87 -36 -127 -37 -93 -2 -145 34 -120 81 9 16 1 25 -51 62 -88 62 -215 186 -257 251 -20 30 -42 54 -49 51 -7 -2 -12 5 -12 16 0 14 -10 24 -35 32 -42 14 -43 22 -9 49 l25 20 -15 52 c-32 106 -16 136 55 103 35 -15 42 -16 50 -3 5 8 7 20 4 27 -2 7 0 23 5 37 11 29 50 34 70 10z" }),
            React__default['default'].createElement("path", { d: "M324 662 c21 -40 144 -172 200 -214 34 -25 32 -21 -11 19 -32 30 -53 58 -53 71 0 22 -33 47 -49 37 -5 -3 -20 9 -32 27 -13 18 -27 35 -31 36 -4 2 -8 9 -8 17 0 7 -7 19 -17 26 -15 13 -15 11 1 -19z" }))));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 1280 1160" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#6d1b4d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M240 1153 c-23 -9 -30 -24 -30 -69 0 -22 -6 -49 -14 -60 -15 -20 -9 -21 -105 18 -15 6 -35 8 -45 5 -23 -9 -21 -84 4 -172 18 -63 18 -71 3 -80 -68 -43 -68 -68 2 -87 40 -11 45 -15 45 -41 0 -23 4 -28 18 -25 13 4 26 -11 52 -55 62 -107 238 -278 408 -397 41 -29 59 -47 52 -54 -5 -5 -10 -27 -10 -48 0 -32 5 -41 32 -58 42 -26 121 -34 193 -21 190 34 363 198 420 395 14 47 16 84 12 180 -9 212 -30 238 -179 217 -102 -15 -258 -6 -302 16 -16 8 -43 13 -60 10 -17 -3 -57 0 -89 5 -52 9 -57 12 -51 32 3 11 10 25 15 31 18 19 10 73 -13 89 -54 38 -108 6 -118 -69 l-5 -44 -90 30 c-120 40 -121 42 -95 115 33 93 34 100 11 123 -21 21 -34 24 -61 14z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#c41924", stroke: "none" },
            React__default['default'].createElement("path", { d: "M393 688 c-27 -13 -47 -59 -38 -90 11 -34 54 -76 91 -88 125 -42 160 125 38 176 -39 16 -61 17 -91 2z" }),
            React__default['default'].createElement("path", { d: "M655 418 c-49 -29 -57 -73 -25 -125 25 -41 59 -63 109 -70 35 -5 44 -2 71 25 16 17 30 41 30 54 0 30 -33 83 -64 103 -33 22 -96 29 -121 13z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#62554d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 663 c-5 -29 7 -63 23 -63 5 0 7 8 4 18 -5 16 -5 16 6 0 16 -25 30 -22 30 5 0 21 -36 67 -52 67 -3 0 -8 -12 -11 -27z" }),
            React__default['default'].createElement("path", { d: "M670 646 c0 -22 28 -46 53 -46 18 0 19 2 7 10 -12 8 -10 10 9 10 23 0 24 1 6 20 -21 23 -75 27 -75 6z" }),
            React__default['default'].createElement("path", { d: "M911 517 c-33 -16 -41 -42 -12 -34 18 4 20 3 10 -9 -16 -20 5 -18 25 2 16 16 22 54 9 54 -5 0 -19 -6 -32 -13z" }),
            React__default['default'].createElement("path", { d: "M488 414 c-32 -17 -39 -49 -9 -41 14 3 18 1 14 -9 -3 -8 -1 -14 4 -14 14 0 39 31 47 58 9 27 -14 29 -56 6z" }),
            React__default['default'].createElement("path", { d: "M90 827 c0 -20 30 -57 46 -57 21 0 17 26 -8 50 -25 23 -38 26 -38 7z" }),
            React__default['default'].createElement("path", { d: "M49 768 c-32 -19 -32 -21 -14 -34 23 -17 72 -18 78 -1 3 6 3 -8 0 -33 l-4 -45 25 28 c27 29 33 52 16 62 -5 3 -10 1 -10 -4 0 -8 -6 -7 -19 1 -10 6 -17 17 -14 23 8 22 -24 24 -58 3z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#9a444d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1128 c-7 -7 -12 -30 -12 -53 0 -80 -44 -104 -120 -65 -60 31 -58 24 6 -20 33 -22 84 -63 114 -91 47 -43 43 -41 -27 15 -74 58 -132 96 -148 96 -9 0 -6 -45 6 -98 10 -42 17 -52 46 -66 18 -9 39 -27 45 -41 6 -14 17 -25 25 -25 18 0 17 -19 -2 -26 -8 -4 -12 -10 -9 -15 3 -5 0 -24 -7 -43 -11 -31 -10 -37 34 -104 81 -125 238 -275 413 -393 63 -43 86 -46 160 -21 135 47 229 136 265 253 21 67 25 163 9 221 -9 31 -15 37 -43 41 l-32 4 33 1 c60 3 30 26 -42 34 -83 8 -116 19 -162 54 -33 26 -38 27 -67 14 -18 -7 -50 -15 -73 -17 -36 -4 -44 -1 -63 22 -25 33 -26 46 -5 90 21 44 15 67 -20 80 -24 8 -31 6 -47 -14 -12 -15 -19 -39 -19 -67 0 -39 -3 -46 -27 -55 -46 -17 -142 10 -190 54 -40 36 -37 89 11 198 4 10 1 23 -9 33 -20 19 -27 20 -43 4z m66 -507 c3 -38 1 -41 -22 -41 -14 0 -35 9 -47 21 -17 17 -20 28 -14 57 10 53 14 56 48 29 25 -19 33 -33 35 -66z m191 71 c48 -24 76 -65 76 -112 0 -106 -146 -120 -212 -21 -32 47 -30 86 6 122 35 34 78 38 130 11z m252 -41 c20 -16 22 -23 13 -38 -18 -29 -73 -24 -97 9 -11 14 -16 31 -13 37 11 18 72 13 97 -8z m213 -138 c-13 -54 -45 -74 -84 -53 -39 21 13 78 73 80 14 0 16 -5 11 -27z m-408 -105 c-8 -43 -42 -71 -75 -63 -37 9 -43 19 -30 47 13 30 42 46 83 47 27 1 28 -1 22 -31z m214 14 c78 -39 103 -130 51 -183 -52 -51 -149 -31 -198 41 -69 101 33 200 147 142z" }),
            React__default['default'].createElement("path", { d: "M384 682 c-21 -14 -35 -53 -29 -82 6 -30 66 -90 88 -90 7 0 -3 9 -21 20 -36 22 -65 79 -55 107 3 10 13 26 21 36 16 18 14 22 -4 9z" }),
            React__default['default'].createElement("path", { d: "M630 398 c-24 -26 -26 -58 -5 -98 16 -30 60 -70 79 -70 6 0 -4 9 -22 20 -58 36 -74 107 -34 153 22 25 7 21 -18 -5z" }),
            React__default['default'].createElement("path", { d: "M733 223 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" }),
            React__default['default'].createElement("path", { d: "M299 896 c15 -18 96 -46 130 -45 16 0 -4 11 -54 29 -94 35 -91 34 -76 16z" }),
            React__default['default'].createElement("path", { d: "M609 807 c15 -19 56 -23 66 -7 3 6 -5 10 -19 10 -13 0 -33 3 -43 7 -16 6 -16 5 -4 -10z" }),
            React__default['default'].createElement("path", { d: "M1103 775 c-46 -20 -69 -59 -54 -92 11 -23 16 -25 60 -21 97 9 154 74 99 112 -27 19 -63 20 -105 1z" }),
            React__default['default'].createElement("path", { d: "M46 763 c-29 -15 -29 -16 -10 -30 22 -16 66 -14 71 4 2 6 -4 13 -14 16 -17 5 -17 5 0 6 10 0 15 6 12 11 -9 14 -25 12 -59 -7z" }),
            React__default['default'].createElement("path", { d: "M869 764 c19 -8 64 -18 101 -21 56 -5 68 -3 73 11 5 13 -1 16 -37 16 -24 0 -72 2 -107 5 l-64 5 34 -16z" }),
            React__default['default'].createElement("path", { d: "M1194 674 c-25 -14 -60 -25 -87 -26 l-45 -2 -4 -106 c-3 -87 -8 -115 -30 -162 -51 -111 -159 -191 -304 -227 -72 -17 -90 -34 -81 -73 11 -44 99 -66 193 -49 185 34 352 189 408 380 22 77 20 294 -3 290 -3 -1 -25 -12 -47 -25z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#a5602f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M237 1123 c-4 -3 -7 -28 -7 -55 0 -35 -6 -54 -20 -68 -23 -23 -28 -24 -67 -10 -27 10 -26 9 7 -17 19 -15 56 -47 81 -71 26 -23 71 -56 100 -72 30 -16 49 -30 43 -30 -19 0 -119 65 -192 127 -40 34 -86 66 -103 72 -34 12 -36 4 -17 -79 10 -43 18 -56 49 -76 21 -13 40 -32 44 -43 3 -12 11 -20 18 -18 6 1 13 -6 15 -15 2 -10 -2 -18 -10 -18 -7 0 -13 -10 -13 -22 -1 -13 -4 -32 -8 -44 -6 -16 5 -40 42 -96 79 -121 240 -273 409 -388 64 -43 64 -43 113 -32 135 31 257 128 299 237 18 45 24 81 24 145 1 136 2 136 -101 148 l-88 11 82 -5 c45 -2 84 0 87 5 6 9 -39 21 -88 21 -42 1 -99 22 -146 55 l-39 27 -54 -22 c-48 -20 -57 -21 -83 -9 -38 19 -52 60 -35 102 24 60 24 65 -2 81 -13 9 -31 14 -40 10 -20 -7 -38 -60 -31 -89 14 -57 -88 -70 -183 -24 -75 36 -90 96 -48 188 19 41 23 57 14 67 -12 15 -41 19 -52 7z m47 -442 c24 -21 38 -59 31 -82 -8 -25 -49 -25 -75 1 -22 22 -25 46 -10 85 10 27 18 27 54 -4z m224 9 c39 -24 72 -75 72 -111 0 -36 -34 -76 -70 -84 -99 -22 -196 78 -160 164 21 52 99 67 158 31z m247 -40 c9 -10 15 -26 11 -35 -8 -21 -47 -35 -69 -23 -23 12 -50 55 -42 68 11 18 80 12 100 -10z m210 -137 c-13 -55 -53 -78 -87 -50 -34 26 10 75 71 76 20 1 22 -2 16 -26z m-409 -105 c-12 -60 -58 -86 -100 -55 -14 10 -15 18 -7 40 12 30 40 45 85 46 27 1 28 -1 22 -31z m212 18 c66 -35 101 -117 72 -171 -26 -48 -118 -58 -176 -20 -54 35 -82 126 -51 166 31 40 104 51 155 25z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#4cb859", stroke: "none" },
            React__default['default'].createElement("path", { d: "M246 673 c-10 -11 -7 -51 5 -59 8 -4 9 1 4 17 -7 21 -5 20 18 -6 21 -24 26 -27 27 -12 0 36 -37 77 -54 60z" }),
            React__default['default'].createElement("path", { d: "M683 652 c-17 -11 11 -52 34 -52 14 0 14 2 -3 15 -18 15 -18 15 9 9 35 -8 36 13 1 26 -30 12 -26 12 -41 2z" }),
            React__default['default'].createElement("path", { d: "M895 504 c-21 -21 -13 -29 14 -14 14 7 21 7 21 0 0 -5 -5 -10 -12 -10 -6 0 -8 -3 -4 -7 8 -8 36 23 36 39 0 14 -38 9 -55 -8z" }),
            React__default['default'].createElement("path", { d: "M477 402 c-24 -26 -21 -33 9 -22 35 14 42 12 20 -5 -17 -13 -17 -15 -3 -15 16 0 37 28 37 49 0 18 -46 12 -63 -7z" }),
            React__default['default'].createElement("path", { d: "M90 828 c0 -8 7 -23 16 -34 8 -10 12 -12 8 -4 -7 13 -6 13 10 0 17 -13 18 -13 15 4 -5 25 -49 55 -49 34z" }),
            React__default['default'].createElement("path", { d: "M46 764 c-34 -19 -23 -35 24 -37 35 -2 53 18 23 26 -17 5 -17 5 0 6 10 0 15 6 12 11 -8 14 -25 12 -59 -6z" }),
            React__default['default'].createElement("path", { d: "M140 729 c0 -5 -4 -7 -10 -4 -11 7 -26 -43 -15 -53 9 -9 35 27 35 50 0 10 -2 18 -5 18 -3 0 -5 -5 -5 -11z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#d59a17", stroke: "none" },
            React__default['default'].createElement("path", { d: "M242 1118 c-7 -7 -12 -33 -12 -58 0 -56 -25 -85 -65 -77 -15 2 -23 1 -18 -3 134 -122 218 -174 330 -205 26 -7 40 -14 30 -14 -31 -2 -169 48 -212 76 -21 14 -67 50 -102 79 -34 29 -81 63 -103 74 l-40 20 0 -22 c1 -51 26 -123 48 -134 32 -16 62 -45 62 -60 0 -7 6 -11 14 -8 20 8 29 -12 13 -28 -8 -7 -16 -25 -19 -38 -3 -14 -8 -32 -12 -41 -10 -24 81 -156 171 -246 84 -85 181 -166 280 -232 l62 -42 62 16 c128 32 222 102 271 203 30 60 33 77 36 172 5 131 3 135 -105 144 -147 14 -164 24 -33 20 l125 -4 -80 14 c-85 14 -116 26 -152 58 -23 22 -39 21 -120 -3 -39 -12 -45 -11 -70 7 -33 25 -42 78 -19 121 17 35 5 63 -27 63 -35 0 -47 -19 -47 -72 0 -56 -15 -68 -82 -68 -52 0 -139 39 -162 71 -22 32 -20 91 5 149 22 51 20 80 -4 80 -7 0 -18 -5 -25 -12z m58 -455 c30 -38 24 -77 -13 -81 -54 -6 -86 55 -57 109 13 23 37 14 70 -28z m236 5 c25 -25 37 -47 41 -76 5 -36 2 -45 -26 -73 -29 -29 -36 -31 -83 -27 -45 5 -57 11 -90 46 -48 52 -53 108 -12 149 23 23 31 25 80 21 47 -4 61 -10 90 -40z m224 -20 c11 -12 20 -25 20 -30 0 -14 -61 -39 -80 -33 -21 7 -61 65 -54 77 3 4 25 8 49 8 33 0 50 -6 65 -22z m210 -123 c0 -34 -30 -75 -54 -75 -60 0 -72 25 -31 65 28 29 85 35 85 10z m-220 -90 c36 -10 89 -64 99 -102 34 -123 -121 -173 -217 -71 -56 61 -42 151 28 175 34 12 40 11 90 -2z m-186 -12 c-25 -78 -40 -90 -94 -78 -65 14 -14 95 59 95 34 0 39 -3 35 -17z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#c6714f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -6 -3 -10 -10 -10 -14 0 -25 113 -174 189 -250 104 -104 331 -277 331 -253 0 4 15 14 33 21 l32 13 -26 8 c-105 31 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M378 673 c-8 -10 -18 -26 -21 -36 -8 -22 13 -77 38 -97 14 -11 12 -6 -5 17 -28 39 -30 85 -5 113 10 11 16 20 13 20 -3 0 -12 -8 -20 -17z" }),
            React__default['default'].createElement("path", { d: "M315 889 c6 -9 75 -33 80 -27 2 2 -16 11 -40 19 -25 9 -42 13 -40 8z" }),
            React__default['default'].createElement("path", { d: "M1088 764 c-43 -23 -51 -86 -13 -100 9 -4 36 -1 61 6 116 33 128 111 17 110 -21 -1 -50 -7 -65 -16z" }),
            React__default['default'].createElement("path", { d: "M872 765 c3 -3 38 -9 79 -15 60 -7 77 -6 89 6 12 12 2 14 -80 14 -51 0 -91 -2 -88 -5z" }),
            React__default['default'].createElement("path", { d: "M1230 693 c0 -17 -82 -53 -122 -53 l-35 0 -5 -98 c-5 -106 -29 -175 -84 -247 -52 -69 -177 -134 -306 -160 -38 -7 -48 -49 -19 -78 29 -30 140 -36 227 -12 172 46 329 220 364 402 14 73 9 228 -8 245 -8 8 -12 9 -12 1z m-34 -148 c-22 -16 -76 -20 -76 -6 0 5 8 7 18 5 9 -3 28 -1 42 5 35 14 38 13 16 -4z m-1 -45 c-3 -5 -21 -9 -38 -9 l-32 2 35 7 c19 4 36 8 38 9 2 0 0 -3 -3 -9z m-365 -427 c0 -3 -7 0 -15 7 -8 7 -15 22 -15 34 0 18 2 17 15 -8 8 -15 15 -31 15 -33z m-36 -2 c-6 -6 -24 19 -24 34 1 6 7 1 15 -9 8 -11 12 -22 9 -25z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -33 -21 -41 0 -24 26 -77 45 -93 13 -11 12 -5 -5 18 -29 39 -31 93 -5 122 10 11 15 20 12 20 -3 0 -15 -12 -26 -26z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#b77e87", stroke: "none" },
            React__default['default'].createElement("path", { d: "M50 988 c0 -13 6 -45 13 -73 11 -43 19 -53 51 -68 21 -10 40 -27 43 -38 3 -10 11 -19 19 -19 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -4 -29 -10 -32 -16 -10 -13 -18 40 -99 61 -94 195 -229 321 -323 129 -96 131 -97 176 -77 38 16 38 16 12 24 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -227 36 -280 58 -418 169 -49 39 -101 78 -118 86 -28 15 -29 15 -29 -7z m447 -288 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M91 829 c-1 -8 6 -24 15 -35 15 -19 15 -19 6 1 -5 11 -12 27 -15 35 -5 13 -6 13 -6 -1z" }),
            React__default['default'].createElement("path", { d: "M1230 672 c0 -27 -6 -35 -40 -52 -35 -18 -60 -45 -60 -66 0 -3 21 -4 47 -1 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 22 l-12 23 5 -23 c5 -27 -14 -30 -21 -3 -3 13 -16 21 -41 24 -21 3 -47 8 -59 12 -18 6 -23 2 -29 -20 -17 -67 106 -97 242 -60 172 46 329 220 364 402 14 73 9 228 -8 245 -9 9 -12 5 -12 -20z" }),
            React__default['default'].createElement("path", { d: "M631 394 c-12 -15 -21 -36 -20 -48 1 -17 3 -15 9 8 5 15 17 37 26 47 9 10 14 19 11 19 -3 0 -15 -12 -26 -26z" }),
            React__default['default'].createElement("path", { d: "M620 313 c0 -7 10 -22 23 -35 12 -13 17 -17 11 -8 -6 8 -16 24 -22 35 -6 11 -12 15 -12 8z" })),
        React__default['default'].createElement("g", { id: "layer110", fill: "#e4934d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M1210 634 c-91 -58 -104 -89 -33 -81 43 5 46 4 28 -9 -10 -8 -32 -14 -48 -14 -19 0 -27 -4 -24 -12 2 -7 18 -12 36 -12 17 1 31 -2 31 -7 0 -5 -16 -9 -35 -9 -34 0 -35 -1 -35 -38 0 -137 -116 -279 -268 -328 -51 -16 -52 -17 -36 -35 14 -16 15 -19 2 -19 -8 0 -20 10 -27 23 l-12 22 5 -23 c5 -27 -14 -30 -21 -2 -4 14 -14 20 -35 20 -16 0 -39 5 -50 11 -27 15 -53 -9 -43 -41 16 -50 135 -65 247 -30 215 66 370 283 367 513 -1 91 -6 98 -49 71z" })),
        React__default['default'].createElement("g", { id: "layer111", fill: "#fecd04", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 968 c19 -93 24 -104 61 -121 20 -10 38 -27 41 -37 3 -11 11 -20 19 -20 21 0 28 -22 11 -35 -10 -7 -17 -24 -17 -38 0 -14 -5 -29 -10 -32 -21 -13 55 -128 147 -225 95 -100 181 -175 289 -249 l61 -43 39 17 c39 17 39 17 13 25 -104 30 -153 154 -82 210 37 29 69 35 116 20 56 -16 105 -70 114 -123 l6 -41 30 35 c16 19 43 63 60 99 28 58 32 77 35 173 l4 107 -33 0 c-19 0 -74 7 -124 14 -49 8 -148 24 -220 36 -216 34 -288 61 -392 148 -141 118 -179 136 -168 80z m442 -268 c79 -35 110 -134 58 -185 -19 -20 -34 -25 -72 -25 -137 0 -205 156 -93 212 44 22 55 22 107 -2z m-206 -19 c29 -30 38 -72 20 -100 -7 -11 -15 -11 -44 -2 -38 13 -47 27 -47 71 0 66 24 77 71 31z m443 -11 c14 -5 30 -19 37 -31 10 -20 9 -25 -11 -41 -41 -33 -78 -20 -109 40 -10 20 -9 23 11 32 30 12 42 12 72 0z m166 -55 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m70 -98 c0 -50 -45 -80 -94 -61 -44 17 5 84 61 84 28 0 33 -4 33 -23z m-407 -101 c-4 -62 -50 -92 -107 -70 -38 14 -2 84 49 97 44 11 60 3 58 -27z" }),
            React__default['default'].createElement("path", { d: "M1241 565 c-1 -118 -19 -197 -63 -274 -90 -157 -305 -279 -403 -227 -34 18 -61 20 -70 6 -10 -17 -45 8 -45 32 0 16 -3 19 -11 11 -18 -18 1 -54 37 -69 47 -20 131 -17 206 6 215 66 370 283 367 513 -1 110 -18 111 -18 2z" })),
        React__default['default'].createElement("g", { id: "layer112", fill: "#eccfa4", stroke: "none" },
            React__default['default'].createElement("path", { d: "M55 970 c13 -65 26 -112 31 -107 6 5 -22 127 -32 136 -3 3 -3 -10 1 -29z" }),
            React__default['default'].createElement("path", { d: "M166 648 c32 -63 78 -124 153 -202 67 -69 221 -204 221 -193 0 2 -37 37 -82 78 -70 62 -83 78 -80 101 4 30 -34 63 -60 53 -19 -8 -87 70 -125 142 -16 29 -31 53 -36 53 -4 0 0 -15 9 -32z" }),
            React__default['default'].createElement("path", { d: "M1245 585 c4 -51 1 -103 -9 -145 -16 -73 -14 -92 4 -33 17 56 24 204 11 233 -8 20 -10 8 -6 -55z" }),
            React__default['default'].createElement("path", { d: "M1192 315 c-12 -25 -20 -45 -17 -45 7 0 47 81 43 86 -3 2 -14 -17 -26 -41z" }),
            React__default['default'].createElement("path", { d: "M1075 163 c-33 -31 -46 -47 -30 -36 29 20 104 93 94 93 -2 -1 -31 -26 -64 -57z" }),
            React__default['default'].createElement("path", { d: "M640 98 c0 -27 34 -56 75 -64 78 -14 225 18 281 61 10 8 -6 4 -36 -10 -30 -13 -79 -30 -108 -36 -47 -9 -56 -8 -73 6 -14 13 -28 16 -58 11 -35 -5 -42 -3 -60 22 -16 21 -20 23 -21 10z" }))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  align-items: ", ";\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  display: flex;\n  flex: none;\n  justify-content: center;\n  min-height: 56px;\n  padding: 12px;\n"], ["\n  align-items: ", ";\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  display: flex;\n  flex: none;\n  justify-content: center;\n  min-height: 56px;\n  padding: 12px;\n"])), function (_a) {
    var hasDescription = _a.hasDescription;
    return (hasDescription ? "start" : "center");
}, getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding: 12px;\n"], ["\n  flex: 1;\n  padding: 12px;\n"])));
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  padding: 12px 12px 12px 0;\n"], ["\n  border-radius: 0 16px 16px 0;\n  padding: 12px 12px 12px 0;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-items: ", ";\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  align-items: ",
    ";\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var hasDescription = _a.hasDescription;
    return hasDescription ? "stretch" : "center";
}, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, description = _a.description, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, { hasDescription: !!description },
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!description },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, null,
            React__default['default'].createElement(Text, { bold: true }, title),
            description && React__default['default'].createElement(Text, { as: "p" }, description)),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$h, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 16px;\n  padding-right: 16px;\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 16px;\n  padding-right: 16px;\n"])));
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$f, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ",
    ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardFooter = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ",
    ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
    ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$c;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$d;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$e, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$f;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ",
    "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return responsive ? (height / width) * 100 : 0;
}, styledSystem.space);
var templateObject_1$g;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$h, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$i;

var GridLayout = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$j;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$k;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$l;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return (outline ? getColor$1(variant, theme) : "#ffffff");
};
var StyledTag = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$m;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$n;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$p, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
    ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) {
    return props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$o, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$p;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$u, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? (React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } })) : null));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 240 240" }, props),
        React__default['default'].createElement("path", { opacity: "0.4", fill: "#4F3133", d: "M234.9,146.6C234.9,146.6,234.9,146.6,234.9,146.6C234.9,146.6,234.9,146.6,234.9,146.6\n\tc-0.2-1.4-0.8-3-1.8-4.8l0,0c0-0.1-0.1-0.2-0.1-0.2c-1-1.9-2.5-4-4.2-6.3l0,0c-0.1-0.1-0.2-0.2-0.3-0.3l0,0\n\tc-1.2-1.5-2.5-3.1-3.9-4.7c-0.1-0.1-0.2-0.2-0.3-0.3l0,0c-1.3-1.5-2.8-3.1-4.3-4.6l0,0c-0.1-0.1-0.2-0.2-0.3-0.3l0,0\n\tc-2.7-2.7-5.6-5.6-8.6-8.4l0,0c0,0-0.1-0.1-0.1-0.1c-7.6-7-16.1-14-24.5-20l0,0c0,0-0.1-0.1-0.1-0.1c-5.9-4.3-11.7-8.1-17-11.1\n\tc0,0,0,0,0,0l0,0c-8.8-4.9-16.1-7.5-20-6.2l-41.1,16.5l0,0l-0.7,0.3l-52.2,21c-7.2,2.9-10.9,7.9-11,13.5l0,0c0,0,0,0,0,0\n\tc0,0.1,0,0.3,0,0.4c0,0,0,0,0,0h0c0.1,4.3,2.5,9,7.2,13.2l0.5,0.5h0l0.3,0.3h0l14.4,13c-3,1.1-5.9,2.1-8.9,3\n\tc-0.9,0.3-1.8,0.5-2.6,0.7l0,0c-0.2,0.1-0.5,0.1-0.7,0.2l0,0c-7.9,2.1-13.2,3.1-17.4,3.7c-0.1,0-0.2,0-0.3,0l0,0\n\tc-3.3,0.5-5.9,0.8-8.5,1.2l0,0c0,0,0,0,0,0c-2.4,0.4-4.8,1-7.9,2.1c-23.9,8.2-13.8,20.2,7.9,15.6l0,0c0,0,0,0,0,0\n\tc0.3-0.1,0.7-0.1,1-0.2c0,0,0,0,0,0l0,0c2-0.5,4-1.1,6.2-1.8c10.5-3.7,11.1-5.6,17.7-9.4c0,0,0,0,0,0c0.6-0.3,1.2-0.7,1.9-1\n\tc0,0,0,0,0,0c2.4-1.3,5.6-2.8,10-4.7c2.5-1.1,5.3-2,8.2-3c0,0,0,0,0,0c0.2-0.1,0.4-0.1,0.5-0.2c0,0,0,0,0,0l0.1,0.1l3.7,3.3l0.2,0.2\n\tc0,0,0,0,0,0l7.9,7.1c2.6,2.3,5.7,4.4,9.1,6.1l0,0c0.1,0,0.1,0.1,0.2,0.1c11.2,5.5,25.6,7.3,36.3,3.7l101.2-33.9\n\tC234.5,150.2,235.2,148.7,234.9,146.6z M31,178.3c-0.4,0.2-0.9,0.5-1.4,0.6c-2.9,1-6.6,0.6-8.3-1c-1.5-1.4-0.9-3.2,1.5-4.3\n\tc0.2-0.1,0.3-0.1,0.5-0.2c0.5-0.2,1-0.3,1.5-0.4c2.3,0,4.5,0.6,5.8,1.7c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.1,0.1,0.2,0.1,0.2\n\tc0,0,0,0,0,0.1c0,0.1,0.1,0.2,0.1,0.2C31.7,176.7,31.6,177.6,31,178.3z" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { fill: "#874B22", d: "M230.8,148.8c17.9-6.2-65.8-77.8-83.2-71.7l-93.9,37.8c-13,5.2-14.6,17.3-3.8,27.2L84,172.8\n\t\tc11.2,10.1,31.6,14.6,45.6,9.9L230.8,148.8z" }),
            React__default['default'].createElement("path", { fill: "#BC6C37", d: "M226.9,148.4c17.3-6-62.7-74.4-79.6-68.6l-90.6,36.4c-12.6,5.1-14.2,16.6-3.8,26l32.6,29.4\n\t\tc10.7,9.7,30.3,13.9,43.8,9.4L226.9,148.4z" }),
            React__default['default'].createElement("path", { fill: "#874B22", d: "M63.4,165.3c8.8-3.7,20.2-6.4,33.1-9.7l-10-9c-10.6,4.7-20.2,9.3-30.4,12.2c-23.3,6.6-26,4-37.4,8\n\t\tc-26.4,9.1-11.3,22.8,15.1,13.6C48.6,175.2,43.8,173.5,63.4,165.3z M17.8,176.6c-1.9-1.7-1-4,2.1-5c3.1-1.1,7.1-0.5,9,1.2\n\t\tc1.9,1.7,1,4-2.1,5C23.7,178.8,19.7,178.3,17.8,176.6z" }),
            React__default['default'].createElement("path", { fill: "#E2824D", d: "M62.4,165.1c8.4-3.5,19.1-6.1,31.3-9.2l-8.8-7.9c-10.1,4.4-19.2,8.7-28.8,11.5c-22,6.3-24.3,4-35.2,7.8\n\t\tc-25,8.6-11.6,20.7,13.3,12C48.1,174.3,43.8,172.8,62.4,165.1z M19.4,176c-1.9-1.7-1.1-3.9,1.9-4.9c2.9-1,6.8-0.4,8.7,1.3\n\t\tc1.9,1.7,1.1,3.9-1.9,4.9C25.2,178.3,21.3,177.7,19.4,176z" }),
            React__default['default'].createElement("path", { fill: "#B56031", d: "M147.5,124c-17.3-9-32-18.6-43.6-28l-48.1,19.4c-12.7,5.1-14.2,16.9-3.7,26.4l33.2,30\n\t\tc10.9,9.8,30.7,14.2,44.4,9.6l89.1-29.9C196.5,145.9,171.5,136.5,147.5,124z" }),
            React__default['default'].createElement("path", { fill: "#BC6C37", d: "M90.2,170.6c-0.7-0.1-1.5,0-1.9,0.4c-0.4,0.3-0.5,0.8-0.1,1.1c4.9,4.7,20.9,15.2,44.3,7\n\t\tc0.8-0.3,1.2-0.8,1.1-1.3c-0.1-0.5-0.8-0.9-1.7-1.1L90.2,170.6z" }),
            React__default['default'].createElement("path", { fill: "#BC6C37", d: "M70.8,114.4c0.3-0.4,0.1-0.8-0.5-1.1c-0.5-0.3-1.3-0.4-2-0.2c-8.9,2.2-29.3,10-17,23.9\n\t\tc0.4,0.5,1.3,0.8,2.2,0.7c0.9,0,1.8-0.4,2.1-0.8L70.8,114.4z" }),
            React__default['default'].createElement("path", { fill: "#E2824D", d: "M147.2,78.5l-91.4,36.8c-12.7,5.1-14.2,16.9-3.7,26.4l33.2,30c10.9,9.8,30.7,14.2,44.4,9.6l98.4-33\n\t\tC245.6,142.3,164.2,72.7,147.2,78.5z M129.4,181.1c-13.6,4.6-33.1,0.3-43.8-9.4l-32.6-29.4c-10.4-9.4-8.8-21,3.8-26l90.6-36.4\n\t\tc16.8-5.8,96.9,62.6,79.6,68.6L129.4,181.1z" }),
            React__default['default'].createElement("path", { fill: "#B56031", d: "M61.8,164.6c8.5-3.4,19-6.1,31-9.5l-7.1-6.4c-10.2,4.3-19.5,8.4-29.1,11.3c-21.8,6.5-24.3,4.1-35.2,7.8\n\t\tc-25,8.6-12.9,19.5,12,10.8C47.5,173.7,43,172.1,61.8,164.6z M19.4,176c-1.7-1.5-0.7-3.6,2.2-4.6c2.9-1,6.7-0.6,8.4,1\n\t\tc1.7,1.5,0.7,3.6-2.2,4.6C24.9,178,21.1,177.5,19.4,176z" }),
            React__default['default'].createElement("path", { fill: "#BC6C37", d: "M49,167.8c-5.2-0.8-10.2-1.7-14.9-2.8c-4.2,0.6-7.5,1-12.5,2.8c-25,8.6-12.9,19.5,12,10.8\n\t\tc11.2-3.9,10.5-5.8,19.6-10.2C51.7,168.2,50.3,168,49,167.8z M27.8,177c-2.9,1-6.7,0.6-8.4-1c-1.7-1.5-0.7-3.6,2.2-4.6\n\t\tc2.9-1,6.7-0.6,8.4,1C31.7,173.9,30.7,176,27.8,177z" }),
            React__default['default'].createElement("path", { fill: "#E2824D", d: "M31.1,171.9c-2-1.8-6.4-2.3-9.9-1.1c-3.4,1.2-4.6,3.6-2.6,5.4c2,1.8,6.4,2.3,9.9,1.1\n\t\tC31.9,176.2,33.1,173.7,31.1,171.9z M27.9,176.8c-2.9,1-6.6,0.6-8.3-1c-1.7-1.5-0.7-3.6,2.2-4.5c2.9-1,6.6-0.6,8.3,1\n\t\tC31.7,173.8,30.8,175.8,27.9,176.8z" }),
            React__default['default'].createElement("g", { opacity: "0.7" },
                React__default['default'].createElement("path", { fill: "#874B22", d: "M85.3,111.1c18.9-7.2,35.5-12.5,50.8-16.2c7.6-1.8,13.7-3.1,19.4-4.1c0.7-0.1,1.5-0.3,2.3-0.5\n\t\t\tc1.9-0.4,4-0.9,5.9-0.9c-2.5,1.4-6,2.4-9.3,3.3c-1.6,0.4-3.2,0.9-4.6,1.4c-12.3,4.1-23.9,8.9-35.1,13.6l-1.5,0.6\n\t\t\tc-9.7,4.1-19.8,8.7-31.6,14.6c-0.5,0.2-1,0.5-1.5,0.7c-4.5,2.2-9.5,4.7-12,7.6l-0.2,0.2l0.4,0c3.7,0.3,8.2-1.3,11.7-2.5\n\t\t\tc1.1-0.4,2.2-0.8,3.1-1.1c11.8-3.5,23.2-7.6,34.3-11.6c3.9-1.4,8-2.9,12-4.3c18-6.3,36.9-12.1,55.3-17.8c-0.1-0.1-0.2-0.2-0.4-0.3\n\t\t\tc-18.4,5.7-37.2,11.5-55.2,17.8c-4,1.4-8.1,2.9-12,4.3c-11,3.9-22.4,8-34.2,11.5c-1,0.3-2,0.7-3.2,1.1c-3.3,1.2-7.5,2.6-10.9,2.5\n\t\t\tc2.5-2.8,7.4-5.2,11.7-7.3c0.5-0.2,1-0.5,1.5-0.7c11.9-5.9,21.9-10.5,31.6-14.6l1.5-0.6c11.2-4.7,22.8-9.6,35-13.6\n\t\t\tc1.4-0.5,3-0.9,4.6-1.3c3.6-1,7.3-2,9.9-3.6l0.4-0.3l-0.6,0c-2.1-0.1-4.6,0.5-6.8,0.9c-0.8,0.2-1.6,0.3-2.3,0.5\n\t\t\tc-5.7,1-11.9,2.3-19.5,4.1c-15.3,3.7-32,9-50.9,16.2l-0.1,0c-14.3,5.4-28.9,11.1-42.2,17.5c0,0.1,0,0.3,0,0.4\n\t\t\tC56,122.3,70.9,116.7,85.3,111.1L85.3,111.1z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M53.4,160c0.1-0.1,0.1-0.3,0.2-0.4c-0.2,0.1-0.5,0.1-0.7,0.2c0,0,0,0.1-0.1,0.1\n\t\t\tc-1.4,2.5-11.1,10.4-21.5,18.8c-1.6,1.3-3.2,2.6-4.7,3.8c0.3-0.1,0.7-0.1,1-0.2c1.4-1.1,2.8-2.3,4.2-3.4\n\t\t\tC42.2,170.4,52,162.5,53.4,160z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M83.9,142.5c1.2-0.4,2.4-0.8,3.6-1.2c4.6-1.6,9.4-3.2,13.5-5.1c1.5-0.7,3.6-1.7,4.5-2.9l0.1-0.2l-0.3,0\n\t\t\tc-2.9-0.4-7.5,0.6-10.9,1.4c-0.9,0.2-1.7,0.4-2.3,0.5c-2.8,0.6-5.6,1.1-8.4,1.7c-6,1.2-12.2,2.5-18.4,3.6\n\t\t\tc-4.9,0.9-10,1.6-14.9,2.3l0.3,0.3c4.9-0.7,9.9-1.4,14.7-2.3c6.2-1.1,12.4-2.4,18.4-3.6c2.7-0.6,5.6-1.1,8.4-1.7\n\t\t\tc0.7-0.1,1.4-0.3,2.3-0.5c3.2-0.7,7.5-1.7,10.2-1.4c-0.9,1-2.9,1.9-4.2,2.6c-4.1,1.9-8.8,3.5-13.4,5.1c-1.2,0.4-2.4,0.8-3.6,1.2\n\t\t\tl-1.2,0.4c-7.4,2.6-15.5,5.4-21.9,9l0.3,0.3c6.4-3.6,14.5-6.4,21.9-9L83.9,142.5z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M187,107.1c-9.2,3.3-19,7-27.8,11.2c-0.7,0.4-1.7,0.8-2.6,1.2c-4.1,1.8-9.2,4.1-10.6,6.3l-0.1,0.2l0.4,0\n\t\t\tc4,0.3,8.7-1,12.9-2.1c1.3-0.3,2.5-0.6,3.6-0.9c8.5-1.9,17.3-3.4,25.8-4.8c3.5-0.6,7.2-1.2,10.8-1.8c3.3-0.6,6.7-1.2,10-1.9\n\t\t\tc-0.1-0.1-0.2-0.2-0.3-0.3c-3.3,0.6-6.6,1.2-9.9,1.8c-3.6,0.6-7.2,1.2-10.8,1.8c-8.5,1.4-17.3,2.9-25.9,4.8\n\t\t\tc-1.1,0.2-2.3,0.6-3.6,0.9c-4,1-8.5,2.2-12.2,2c1.6-2.1,6.6-4.3,10.3-6c1-0.4,1.9-0.8,2.6-1.2c8.8-4.2,18.5-7.8,27.7-11.1\n\t\t\tc3.4-1.2,6.7-2.4,9.9-3.4c-0.1-0.1-0.2-0.2-0.3-0.3C193.7,104.7,190.5,105.8,187,107.1z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M108.3,139.8c8-2.5,16.2-3.7,27.6-4.1c21.4-0.8,44.1-2,65.9-8.2c5.4-1.5,10.9-2.9,16.6-4.3\n\t\t\tc-0.1-0.1-0.2-0.2-0.3-0.3c-5.7,1.3-11.2,2.7-16.6,4.3c-21.7,6.1-44.3,7.4-65.6,8.2c-11.5,0.4-19.9,1.7-27.9,4.2\n\t\t\tc-8.4,2.7-21.4,7.3-30.2,11.7c-7.7,3.9-18.3,12.6-26.2,19.7c0.6-0.3,1.2-0.7,1.9-1c7.8-6.9,17.5-14.8,24.7-18.4\n\t\t\tC86.9,147.1,99.8,142.5,108.3,139.8z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M173.5,105c-2.7,0.8-5.4,1.7-8,2.7c-3.8,1.2-7.9,2.5-12.2,3.7c-2.9,0.8-5.8,1.6-8.6,2.5\n\t\t\tc-19.2,5.7-15.7,2.9-28.6,11.8c-0.1,0-6.6,4.7-4.9,5.8c0.1,0.1,0.3,0.2,0.6,0.2c0.7,0.1,2-0.1,3.8-0.6c3.1-0.9,6.1-2.6,8.8-4\n\t\t\tc0.8-0.4,1.5-0.8,2.2-1.2l1.9-1c5.9-3.1,11.6-6,18-8.6c2.5-1,5-2.1,7.6-3.2c3.9-1.7,7.8-3.4,11.8-4.9c2.9-1,5.6-1.9,8-2.7\n\t\t\tL173.5,105z M153.6,112.7c-2.6,1.1-5.1,2.2-7.6,3.2c-6.4,2.6-12.1,5.5-18,8.6l-1.9,1c-0.7,0.4-1.5,0.8-2.2,1.2\n\t\t\tc-2.7,1.4-5.7,3-8.7,4c-2.7,0.8-3.4,0.6-3.6,0.5c-0.9-0.6,2.8-3.8,4.9-5.3c12.7-8.7,8.6-5.8,28.4-11.7c2.8-0.8,5.7-1.7,8.6-2.5\n\t\t\tc2.5-0.7,4.9-1.4,7.3-2.1C158.4,110.7,156,111.7,153.6,112.7z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M136.5,89c9.4-0.9,19.1-1.9,27.9-4.4c1.3-0.4,2.5-0.7,3.7-1.1c-0.1-0.1-0.3-0.2-0.4-0.2\n\t\t\tc-1.1,0.4-2.3,0.7-3.5,1.1c-8.7,2.5-18,3.4-27.7,4.4l-0.6,0.1c-11.2,1.1-20.8,2.7-29.2,4.9l-2.9,1.1c9.1-2.6,19.7-4.5,32.2-5.7\n\t\t\tL136.5,89z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M126.2,162.9c1.9-0.8,3.8-1.5,5.7-2.3c3.8-1.6,7.7-3.1,11.5-4.6c2.6-1,5.3-2.1,8-3.2\n\t\t\tc0.3-0.1,0.8-0.3,1.3-0.5c2.4-0.9,6-2.1,6.2-3.4c0.1-0.5-0.2-0.9-0.7-1.2c-1.7-1-6.1-1-8.7-1c-0.4,0-0.8,0-1.1,0\n\t\t\tc-3.7,0-7.4-0.2-11-0.4c-8.6-0.4-17.5-0.8-26.1,0.8c-10.3,1.9-19.1,5.7-27.6,9.4c-2.6,1.1-5.3,2.3-8,3.4c-1.1,0.4-2.4,1.3-3.9,2.4\n\t\t\tc0.2-0.1,0.4-0.1,0.6-0.2l0.2,0.2c1.3-1,2.6-1.7,3.5-2.1c2.7-1.1,5.4-2.2,8-3.4c8.5-3.6,17.2-7.4,27.4-9.3\n\t\t\tc8.5-1.6,17.3-1.2,25.9-0.8c3.6,0.2,7.3,0.3,11,0.4c0.3,0,0.7,0,1.1,0c2.5,0,6.7-0.1,8.3,0.9c0.4,0.3,0.6,0.6,0.6,1\n\t\t\tc-0.1,1.1-3.7,2.4-5.9,3.2c-0.6,0.2-1,0.4-1.4,0.5c-2.6,1.1-5.4,2.1-8,3.2c-3.8,1.5-7.7,3-11.5,4.6c-1.9,0.8-3.8,1.5-5.6,2.3\n\t\t\tc-12.1,4.9-23.5,9.5-32.7,16.2c0,0,0,0-0.1,0c0.2,0.1,0.3,0.2,0.5,0.2c0,0,0.1,0,0.1-0.1C102.8,172.4,114.1,167.8,126.2,162.9z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M161.4,170.4c-4.2,0.1-8.2,0.3-12.1-0.6c0.1-1.6,5-3.5,8-4.7c0.8-0.3,1.5-0.6,1.9-0.8\n\t\t\tc7.3-3.3,13.7-6.9,19.8-11.2c1-0.7,2.1-1.5,3.1-2.2c7.9-5.6,16.1-11.4,25.2-16.7c4-2.3,9-4.8,15.5-6c-0.1-0.1-0.2-0.2-0.3-0.3\n\t\t\tc-6.6,1.3-11.6,3.7-15.7,6.1c-9.2,5.3-17.3,11.1-25.2,16.7c-1,0.7-2.1,1.5-3.1,2.2c-6.1,4.3-12.5,7.9-19.7,11.2\n\t\t\tc-0.5,0.2-1.1,0.5-1.9,0.8c-3.3,1.3-8.4,3.4-8.2,5.1l0,0.1l0.2,0c0.7,0.2,1.4,0.3,2.1,0.4c3.4,0.5,6.8,0.4,10.4,0.3l0.9,0\n\t\t\tc1.1,0,2.2-0.1,3.4-0.1l1-0.3c-1.5,0-3,0-4.4,0.1L161.4,170.4z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M179.8,139.6c0.1-0.8-0.5-1.4-1.7-1.8c-4.4-1.3-13.7,0.4-18.7,1.3c-0.5,0.1-0.9,0.2-1.3,0.2\n\t\t\tc-3.9,0.7-11.4,2-14.4,3l0.3,0.3l0,0c2.1,0.3,4.3,0.6,6.5,0.8c6.6,0.6,12.8,1.2,15.5,5l0.1,0.2l0.3-0.1\n\t\t\tC169.7,147.7,179.4,142.6,179.8,139.6z M166.5,148c-2.8-3.8-9.4-4.4-15.8-5c-1.9-0.2-3.9-0.4-5.8-0.7c3.3-0.9,9.9-2.1,13.5-2.7\n\t\t\tc0.4-0.1,0.8-0.1,1.3-0.2c4.9-0.9,14.1-2.5,18.2-1.3c1,0.3,1.5,0.8,1.4,1.5C178.9,142.3,169.8,147.1,166.5,148z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M220.8,136.3c-2.2,1.2-4.5,2.3-6.7,3.4c-4,2-8,4-11.7,6.2c-5.5,3.3-10.3,6.5-14.2,9.5\n\t\t\tc-0.2,0.2-0.5,0.4-0.7,0.6c-1.1,0.8-2.4,1.8-2.7,2.7l-0.1,0.2l0.4,0c5.8-0.3,11.3-2.3,16.7-4.2c2.7-1,5.3-1.9,7.8-2.6\n\t\t\tc8.2-2.2,16.2-4.5,23.7-7.2c0-0.1,0-0.3,0-0.4c-7.6,2.8-15.6,5-23.9,7.3c-2.6,0.7-5.2,1.6-7.9,2.6c-5.2,1.9-10.5,3.8-16,4.2\n\t\t\tc0.4-0.8,1.5-1.6,2.5-2.3c0.3-0.2,0.5-0.4,0.8-0.6c3.9-3,8.6-6.2,14.1-9.5c3.7-2.2,7.8-4.2,11.7-6.2c2.2-1.1,4.5-2.2,6.8-3.4\n\t\t\tc0.9-0.5,1.7-1,2.5-1.5c1.1-0.7,2.2-1.3,3.4-1.9c-0.1-0.1-0.2-0.2-0.2-0.3c-1.3,0.6-2.5,1.3-3.6,2\n\t\t\tC222.4,135.4,221.6,135.9,220.8,136.3z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M223,142.8c-2.6,1.3-5.6,2.7-8.2,3.2c0.9-0.6,1.9-1.2,2.8-1.8c2.7-1.7,5.4-3.5,8.5-4.9l-0.4-0.3\n\t\t\tc-3.1,1.4-5.9,3.2-8.6,4.9c-1.1,0.7-2.3,1.5-3.5,2.2l-0.6,0.4l0.9-0.1c3.1-0.3,6.5-1.9,9.5-3.4c1.1-0.5,2.2-1,3.1-1.4\n\t\t\tc1.6-0.7,3.3-1.3,5-1.9c-0.1-0.1-0.1-0.2-0.2-0.3c-1.7,0.7-3.5,1.3-5.1,2C225.2,141.8,224.2,142.3,223,142.8z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M128.6,174.8c1.4-2.1,4-3.8,6.6-5.4c0.7-0.5,1.5-1,2.2-1.5c0.6-0.4,1.4-0.9,2.1-1.3c2.1-1.2,4.4-2.6,5-4.1\n\t\t\tl0.1-0.3l-0.5,0.1c-2.3,0.4-4.4,1.3-6.4,2.1c-0.7,0.3-1.3,0.6-1.9,0.8l-1.7,0.7c-5.2,2-10.5,4.1-15.5,6.3\n\t\t\tc-5.5,2.4-10.4,5.2-15.2,8c-0.7,0.4-1.5,0.8-2.2,1.3c-0.2,0.1-0.4,0.2-0.7,0.4c0.2,0.1,0.4,0.1,0.5,0.2c0.2-0.1,0.4-0.2,0.5-0.3\n\t\t\tc0.7-0.4,1.5-0.8,2.2-1.3c4.8-2.7,9.7-5.5,15.2-7.9c5-2.2,10.3-4.3,15.5-6.3l1.7-0.7c0.6-0.2,1.3-0.5,1.9-0.8\n\t\t\tc1.8-0.8,3.7-1.6,5.7-2c-0.8,1.3-2.9,2.5-4.7,3.6c-0.8,0.5-1.6,0.9-2.2,1.3c-0.7,0.5-1.5,1-2.2,1.4c-2.6,1.7-5.3,3.4-6.7,5.5\n\t\t\tc-2,3,1.6,4.1,4.8,5.1c1,0.3,1.9,0.6,2.7,0.9l0.5-0.2c-0.9-0.4-1.9-0.7-3-1C129.9,178.5,126.8,177.6,128.6,174.8z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M102.2,163.3c4.1-2,8.5-3.9,12.7-5.7c4-1.7,8.2-3.5,12.1-5.4l0.4-0.2l-0.5-0.1c-3.1-0.5-7.2,0.3-10.4,0.9\n\t\t\tc-0.7,0.1-1.4,0.3-2,0.4c-6.9,1.2-13.7,3.1-22,5.9c-5.6,1.9-11.3,4-16.6,6.3l0.3,0.3c4.9-2.2,10.4-4.2,16.6-6.3\n\t\t\tc8.3-2.8,15-4.6,21.9-5.9c0.6-0.1,1.3-0.2,2-0.4c3-0.6,6.7-1.3,9.5-1c-3.8,1.8-7.8,3.5-11.7,5.2c-4.3,1.8-8.6,3.7-12.7,5.7\n\t\t\tc-4.1,2-8.1,4.2-12,6.3c-2,1.1-4,2.2-6,3.3l0.2,0.2c0,0,0.1,0.1,0.1,0.1c2.1-1.1,4.1-2.2,6.1-3.3\n\t\t\tC94.1,167.5,98.1,165.3,102.2,163.3z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M33.2,167.2c-0.6,1-1.2,1.9-1.7,2.9c-0.6,1.1-1.3,2.2-2,3.2c0.1,0.2,0.2,0.4,0.3,0.5\n\t\t\tc0.8-1.2,1.5-2.4,2.3-3.7c0.6-0.9,1.1-1.9,1.7-2.9c0.7-1.1,1.3-2.2,1.9-3.4c0.1-0.2,0.2-0.3,0.3-0.5c-0.2,0-0.5,0.1-0.7,0.1\n\t\t\tc-0.1,0.1-0.1,0.2-0.2,0.3C34.4,165,33.8,166.2,33.2,167.2z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M26.4,177.9c-0.3,0.1-0.6,0.2-0.9,0.2c-0.8,0.8-1.7,1.5-2.8,2.2c-1.2,0.8-3.5,2.1-6.2,3.2\n\t\t\tc0.3,0,0.6,0,0.9,0c2.4-1,4.6-2.2,5.7-3C24.4,179.7,25.5,178.8,26.4,177.9z" }),
                React__default['default'].createElement("path", { fill: "#874B22", d: "M17.9,171.3c2.9-1.5,8.2-4.4,8.8-6.6c-0.2,0-0.4,0.1-0.7,0.1c-0.8,2-6.1,4.8-8.6,6.2\n\t\t\tc-0.5,0.3-1,0.5-1.3,0.7c-3.5,2-7.2,3.8-11.1,5.3c0,0.1,0,0.3,0,0.4c4.1-1.6,8-3.4,11.6-5.5C16.9,171.8,17.3,171.6,17.9,171.3z" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 240 240" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#F7AF41", d: "M49.9,168.9c0,0-3,9.6,19.4-4.1S147.6,140.6,174,144c26.4,3.3,7.8-59.5-11.9-69.6S81.1,107.8,49.9,168.9z\n    \t\t\t\t" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M51.6,166.8c0,0-4.8,11.7,17.6-2S147.6,140.6,174,144c26.4,3.3,7.8-59.5-11.9-69.6S82.9,105.7,51.6,166.8\n    \t\t\t\tz" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M53.7,172.5c-1.2,0-2.1-0.3-2.8-0.8c-2.1-1.7-1-5-0.9-5.2c0,0,0-0.1,0.1-0.1\n    \t\t\t\tC64.4,138.2,83,117.7,96,105.4c16.5-15.6,33.9-27.1,47.8-31.6c8-2.6,14.3-2.7,18.8-0.4c7.1,3.7,14.6,14.1,19.9,28\n    \t\t\t\tc5.2,13.6,6.9,27,4.5,34.9c-1.8,5.7-5.6,8.7-11,8.7c-0.7,0-1.4,0-2.1-0.1c-27.2-3.4-82.7,7.6-104.1,20.7\n    \t\t\t\tC62.4,170.2,57.1,172.5,53.7,172.5z M51.9,167.2c-0.2,0.6-0.5,2.2,0.3,2.8c0.7,0.5,3.8,1.7,16.5-6.1\n    \t\t\t\tc10.6-6.5,29.3-12.7,51.2-16.9c21.2-4.1,41.5-5.6,54.2-4c5.5,0.7,9.2-1.7,10.9-7.1c2.3-7.5,0.6-20.4-4.4-33.6\n    \t\t\t\tc-5.1-13.2-12.3-23.6-18.9-26.9c-3.9-2-9.9-1.8-17.3,0.5c-13.6,4.4-30.7,15.7-47,31.1C84.5,119,66.2,139.4,51.9,167.2z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#FFCE00", d: "M163.5,86.4c-3.1-0.7,0.3-1.9-3.8-6c-4.1-4.1-8.7-0.7-8.7-0.7c0.7-1.5,0.9-2.9,0.1-4\n    \t\t\t\t\tc-3.5-5-12.9-1.9-16.3-5.8c-3.4-4-11.5-0.3-11.5-0.3s-48.6,29-62.5,62.4c-13.9,33.4-12.8,43.7-6.8,41.3s10.5-7.5,14.9-3.4\n    \t\t\t\t\tc4.4,4.1-1.1,11.8,4.3,15.6c3,2.1,9.9-1.7,6.6-7.4c-3.3-5.7-7.8-16.2-0.3-21.9s24.7-8.7,23.6-0.7c-2.5,19.7,18.4,11.3,11.9,3\n    \t\t\t\t\tc-5.5-7.1-0.4-19.5,11.9-12.6c10.3,5.7,9-2.1,19.2-5.4c7.6-2.5,21.6-2.6,21.6-2.6c9.8-5.8,0.9-8.6,0.9-8.6s8.2-6.3,6.2-10.7\n    \t\t\t\t\tc-2.1-4.4-1.1-11.3-0.9-18.3C174.3,93.1,166.7,87.1,163.5,86.4z" })),
                    React__default['default'].createElement("g", { opacity: "0.3" },
                        React__default['default'].createElement("path", { fill: "#6C184E", d: "M163.5,86.4c-3.1-0.7,0.3-1.9-3.8-6c-4.1-4.1-8.7-0.7-8.7-0.7c0.7-1.5,0.9-2.9,0.1-4\n    \t\t\t\t\tc-3.5-5-12.9-1.9-16.3-5.8c-3.4-4-11.5-0.3-11.5-0.3s-1.1,0.7-3.1,1.9c15.2,4,46.6,16.8,40.8,62.4c0,0-60.7,4.4-77.4,14.7\n    \t\t\t\t\tc-12,7.5-24.1,21.5-33.4,23.3c0.7,1.7,2,2.1,3.8,1.4c6-2.3,10.5-7.5,14.9-3.4c4.4,4.1-1.1,11.8,4.3,15.6c3,2.1,9.9-1.7,6.6-7.4\n    \t\t\t\t\tc-3.3-5.7-7.8-16.2-0.3-21.9c7.5-5.7,24.7-8.7,23.6-0.7c-2.5,19.7,18.4,11.3,11.9,3c-5.5-7.1-0.4-19.5,11.9-12.6\n    \t\t\t\t\tc10.3,5.7,9-2.1,19.2-5.4c7.6-2.5,21.6-2.6,21.6-2.6c9.8-5.8,0.9-8.6,0.9-8.6s8.2-6.3,6.2-10.7c-2.1-4.4-1.1-11.3-0.9-18.3\n    \t\t\t\t\tC174.3,93.1,166.7,87.1,163.5,86.4z" })),
                    React__default['default'].createElement("g", { opacity: "0.65" },
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M166.2,87.9c0.3,0.1,0.6,0.2,0.9,0.3c-0.9-0.6-1.7-1.1-2.4-1.4C164.8,87.3,165,87.7,166.2,87.9z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M171.6,130.7C171.6,130.7,171.6,130.7,171.6,130.7C171.5,130.7,171.5,130.7,171.6,130.7\n    \t\t\t\t\t\tC171.5,130.7,171.5,130.7,171.6,130.7z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M153.7,81.2c0,0,2.7-2,5.8-1.1c-1.8-1.7-3.6-1.9-5.2-1.8C154.5,79.3,154.2,80.2,153.7,81.2z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M150.5,74.8c-3.1-3-8.9-2.1-12.8-3.3C140.4,74.4,146.3,73.3,150.5,74.8z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M123.4,69.5c0,0-21.6,12.9-40.1,31.4c-0.4,0.3-0.7,0.6-1,0.9c-0.2,0.2-0.4,0.5-0.6,0.7\n    \t\t\t\t\t\tc-8.6,8.9-16.4,18.9-20.7,29.4c-13.1,31.4-12.9,42.3-7.8,41.6c-1.7-4,0.5-16.1,10.5-40.1c3.8-9,10-17.7,17.2-25.6\n    \t\t\t\t\t\tc0.1,0.3,0.3,0.5,0.6,0.7c1.6,1.5,4.6,0.8,6.7-1.4c2.1-2.2,2.5-5.3,0.9-6.7c-0.2-0.1-0.3-0.3-0.5-0.4\n    \t\t\t\t\t\tc17.9-17.2,36.4-30.4,36.4-30.4s6.3-0.9,10.1,0.1C131.4,65.9,123.4,69.5,123.4,69.5z" }))),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6C184E", d: "M75.3,187c-1,0-1.9-0.3-2.7-0.8c-3.3-2.3-3.1-5.8-2.9-9c0.1-2.6,0.3-5.1-1.5-6.7\n    \t\t\t\t\tc-2.5-2.3-4.8-1.1-8.8,1.1c-1.6,0.9-3.2,1.8-5,2.5c-2.2,0.8-3.5,0.1-4.2-0.6c-4.5-4.7,2.8-25.5,9.7-42.1\n    \t\t\t\t\tc7.3-17.4,24-33.6,36.8-44.1c13.8-11.3,26-18.7,26.2-18.8c0,0,0.1,0,0.1-0.1c0.4-0.2,8.9-3.9,12.7,0.6c1.3,1.6,4,1.8,6.8,2.1\n    \t\t\t\t\tc3.4,0.4,7.3,0.8,9.5,3.8c0.6,0.8,0.8,1.7,0.7,2.7c2.2-0.7,5.1-0.7,7.7,2c2.5,2.5,2.5,4.1,2.6,5.1c0,0.1,0,0.3,0,0.4\n    \t\t\t\t\tc0.1,0,0.2,0.1,0.7,0.2l0,0c3.6,0.8,11.6,7.3,11.4,14.8c0,1.5-0.1,3.1-0.2,4.6c-0.3,5.2-0.5,10,1,13.2c1.9,4-2.7,8.7-5.2,10.9\n    \t\t\t\t\tc1.2,0.7,2.6,1.8,2.8,3.5c0.2,2.1-1.4,4.2-5.1,6.3c-0.2,0.1-0.3,0.1-0.5,0.1c-0.1,0-13.9,0.1-21.3,2.5c-3.7,1.2-5.7,3-7.5,4.6\n    \t\t\t\t\tc-3.4,2.9-5.8,4.5-12.5,0.8c-4.6-2.6-8.6-2.5-10.9,0.2c-2.4,2.8-2.3,7.6,0.3,10.9c1.9,2.4,2,5.2,0.2,7.5c-2.1,2.8-6.2,4-9.3,2.7\n    \t\t\t\t\tc-2.2-0.9-5.8-3.8-4.6-12.8c0.2-1.3-0.3-2.2-1.3-2.8c-3.9-2.3-14.9,0.1-20.7,4.5c-7.2,5.4-2,16.2,0.5,20.6\n    \t\t\t\t\tc1.6,2.8,1.3,5.7-0.9,7.7C78.6,186.4,76.9,187,75.3,187z M65.5,167.2c1.4,0,2.8,0.5,4.2,1.8c2.5,2.3,2.3,5.5,2.1,8.3\n    \t\t\t\t\tc-0.2,3-0.3,5.5,2,7.2c1.1,0.8,3.2,0.4,4.6-0.9c0.9-0.8,2.1-2.5,0.5-5.2c-2.8-4.8-8.5-16.8,0-23.2c5.9-4.5,17.9-7.5,23-4.6\n    \t\t\t\t\tc1.8,1,2.6,2.7,2.3,4.8c-0.7,5.6,0.5,9.4,3.4,10.6c2.3,0.9,5.4,0,6.9-2.1c0.7-0.9,1.6-2.8-0.2-5c-3.2-4-3.2-10-0.2-13.5\n    \t\t\t\t\tc2.9-3.5,8-3.7,13.4-0.7c5.8,3.2,7.3,2,10.2-0.6c1.9-1.6,4.2-3.6,8.3-5c7.2-2.4,19.6-2.6,21.7-2.6c3.5-2.1,3.9-3.5,3.9-4.2\n    \t\t\t\t\tc-0.1-1.3-2.2-2.2-3-2.4c-0.4-0.1-0.6-0.4-0.7-0.8c-0.1-0.4,0.1-0.8,0.4-1c2-1.5,7.3-6.5,5.9-9.5c-1.7-3.7-1.5-8.8-1.2-14.2\n    \t\t\t\t\tc0.1-1.5,0.2-3,0.2-4.5c0.2-6.3-6.9-12.1-9.8-12.7c-1.9-0.4-2.3-1.2-2.3-2.5c0-0.8-0.1-1.8-2-3.7c-3.4-3.4-7.2-0.7-7.3-0.6\n    \t\t\t\t\tc-0.4,0.3-0.9,0.3-1.3,0c-0.4-0.3-0.5-0.8-0.3-1.2c0.9-1.9,0.4-2.7,0.2-3c-1.6-2.3-4.7-2.6-8-2.9c-3.1-0.3-6.3-0.7-8.2-2.9\n    \t\t\t\t\tc-2.4-2.8-8.2-1-10.3-0.1C123,70.9,111.2,78.1,98,89c-12.6,10.3-29,26.3-36.1,43.3c-5.1,12.2-8.5,22-10,29.1\n    \t\t\t\t\tc-1.8,8-0.7,10.2-0.1,10.8c0.2,0.2,0.6,0.6,2,0.1c1.7-0.6,3.2-1.5,4.8-2.4C60.8,168.6,63.1,167.2,65.5,167.2z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M130.7,137.1c5.9-1.1,11.8-2,17.7-2.8c3-0.4,5.9-0.7,8.9-1c3-0.3,6-0.4,9-0.5c0.5,0,0.9,0.4,0.9,0.9\n    \t\t\t\tc0,0.5-0.4,0.9-0.9,0.9c0,0,0,0,0,0h0c-3-0.1-5.9-0.1-8.9,0.1c-3,0.1-5.9,0.3-8.9,0.5C142.6,135.6,136.6,136.3,130.7,137.1z" }))),
            React__default['default'].createElement("g", { opacity: "0.3" },
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M149.7,74.3C149.7,74.3,149.7,74.3,149.7,74.3C149.8,74.2,149.8,74.2,149.7,74.3\n    \t\t\t\tC149.7,74.2,149.7,74.3,149.7,74.3z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M172.8,94.8c-0.2,7-1.2,13.9,0.9,18.3c0.1,0.2,0.2,0.5,0.2,0.7c-0.4-4,0.1-8.8,0.3-13.6\n    \t\t\t\tc0.1-1.9-0.5-3.8-1.4-5.5C172.8,94.7,172.8,94.7,172.8,94.8z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M174,114.5c0.1,4.2-6.5,9.3-6.5,9.3s3.4,1.1,3.7,3.3c2.3-2.2,5.2-5.9,3.9-8.7\n    \t\t\t\tC174.5,117.3,174.2,116,174,114.5z" }))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8397 -0.543 0.543 0.8397 -28.1329 85.0321)", fill: "#EE1822", cx: "130", cy: "90.2", rx: "15", ry: "11.9" })),
                React__default['default'].createElement("g", { opacity: "0.65" },
                    React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M132.2,102c-7.3,1.9-13.8-1.8-14.4-8.2c-0.6-6.5,4.9-13.2,12.2-15.1c5.4-1.4,10.3,0.2,12.8,3.8\n    \t\t\t\tc-2.5-4.1-7.9-6.1-13.9-4.6c-7.8,2-13.6,9.2-12.9,16c0.6,6.8,7.5,10.8,15.3,8.7c2.1-0.5,4-1.4,5.7-2.6\n    \t\t\t\tC135.4,100.9,133.8,101.5,132.2,102z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M131.2,80.6l1.7,18.1c4.8-2.1,8.1-6.8,7.6-11.3C140.1,83,136.1,80.2,131.2,80.6z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M126.9,81.7c-4.6,2.1-7.8,6.7-7.4,11.2c0.4,4.4,4.3,7.2,9.1,6.9L126.9,81.7z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M126.9,81.7c-4.6,2.1-7.8,6.7-7.4,11.2c0.4,4.4,4.3,7.2,9.1,6.9L126.9,81.7z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#EE1822", d: "M127.5,87.8c-1.5,0.7-2.6,2.2-2.4,3.7c0.1,1.4,1.4,2.4,3,2.3L127.5,87.8z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#EE1822", d: "M131.6,86.7c1.6-0.1,2.8,0.8,3,2.3c0.1,1.4-0.9,3-2.4,3.7L131.6,86.7z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M127.1,104c-2.8,0-5.5-0.8-7.6-2.3c-2.6-1.8-4.2-4.6-4.5-7.8c-0.7-7.2,5.4-14.9,13.6-17\n    \t\t\t\tc4.4-1.1,8.7-0.5,11.9,1.7c2.6,1.8,4.2,4.6,4.5,7.8c0.7,7.2-5.4,14.9-13.6,17C129.9,103.8,128.5,104,127.1,104z M132.9,78.1\n    \t\t\t\tc-1.2,0-2.5,0.2-3.8,0.5c-7.4,1.9-12.9,8.7-12.3,15.1c0.3,2.7,1.6,5,3.8,6.5c2.7,1.9,6.5,2.4,10.4,1.4\n    \t\t\t\tc7.4-1.9,12.9-8.7,12.3-15.1c-0.3-2.7-1.6-5-3.8-6.5C137.6,78.8,135.3,78.1,132.9,78.1z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M125.3,95.8c0.1,0.3,0.2,0.5,0.2,0.8c0.1,0.3,0.1,0.5,0.1,0.7c0,0.3-0.3,0.6-0.7,0.6\n    \t\t\t\t\tc-0.3,0-0.6-0.3-0.6-0.7c0-0.1,0-0.1,0-0.2c0.1-0.2,0.2-0.4,0.4-0.6C124.9,96.2,125.1,96,125.3,95.8z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M123.3,94c0,0.3-0.1,0.5-0.2,0.8c-0.1,0.3-0.2,0.5-0.3,0.7c-0.2,0.3-0.6,0.4-0.9,0.2\n    \t\t\t\t\tc-0.3-0.2-0.4-0.6-0.2-0.9c0,0,0.1-0.1,0.1-0.1c0.2-0.2,0.4-0.3,0.6-0.4C122.8,94.2,123,94.1,123.3,94z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M122.7,91.1c-0.2,0.2-0.3,0.4-0.5,0.6c-0.2,0.2-0.4,0.3-0.6,0.4c-0.3,0.1-0.7,0-0.8-0.3\n    \t\t\t\t\tc-0.1-0.3,0-0.7,0.3-0.8c0.1,0,0.1,0,0.2-0.1c0.2,0,0.4,0,0.7,0C122.3,90.9,122.5,91,122.7,91.1z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M123.9,88.1c-0.2,0.1-0.5,0.1-0.7,0.1c-0.2,0-0.4,0-0.6,0c-0.3-0.1-0.6-0.4-0.5-0.8\n    \t\t\t\t\tc0.1-0.3,0.4-0.6,0.8-0.5c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.3,0.3,0.5,0.4C123.6,87.7,123.7,87.9,123.9,88.1z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M126.2,86.1c-0.2-0.1-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.3-0.5-0.4c-0.2-0.3-0.2-0.7,0.1-0.9\n    \t\t\t\t\tc0.3-0.2,0.7-0.2,0.9,0.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.1,0.4,0.1,0.7C126.3,85.6,126.3,85.8,126.2,86.1z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M135.5,93.1c0.2,0.1,0.4,0.3,0.6,0.4c0.2,0.1,0.4,0.3,0.5,0.5c0.2,0.3,0.1,0.7-0.2,0.9\n    \t\t\t\t\tc-0.3,0.2-0.7,0.1-0.9-0.2c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.1-0.4,0-0.7C135.4,93.7,135.4,93.4,135.5,93.1z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M137,90.4c0.2,0,0.5-0.1,0.7-0.1c0.2,0,0.4,0,0.6,0.1c0.3,0.1,0.5,0.5,0.4,0.8c-0.1,0.3-0.5,0.5-0.8,0.4\n    \t\t\t\t\tc-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.3-0.3-0.4-0.5C137.2,90.8,137.1,90.6,137,90.4z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M137,87.3c0.2-0.2,0.3-0.4,0.5-0.5c0.2-0.2,0.4-0.3,0.6-0.4c0.3-0.1,0.7,0,0.8,0.4\n    \t\t\t\t\tc0.1,0.3,0,0.7-0.4,0.8c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.7-0.1C137.4,87.5,137.2,87.4,137,87.3z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M135.4,85c0-0.3,0.1-0.5,0.2-0.8c0.1-0.2,0.2-0.5,0.3-0.7c0.2-0.3,0.6-0.3,0.9-0.1\n    \t\t\t\t\tc0.3,0.2,0.3,0.6,0.1,0.9c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.4,0.2-0.6,0.3C135.9,84.8,135.6,84.9,135.4,85z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M132.8,84.2c-0.1-0.3-0.1-0.5-0.2-0.8c-0.1-0.3-0.1-0.5-0.1-0.7c0-0.3,0.4-0.6,0.7-0.6s0.6,0.4,0.6,0.7\n    \t\t\t\t\tc0,0.1,0,0.1,0,0.2c-0.1,0.2-0.2,0.4-0.4,0.6C133.2,83.9,133,84.1,132.8,84.2z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M132.9,99.6c-0.2,0-0.3,0-0.4-0.1c-0.2-0.1-0.4-0.4-0.4-0.7l-1.7-18.1c0-0.2,0-0.5,0.2-0.6\n    \t\t\t\tc0.2-0.2,0.4-0.3,0.6-0.3c5.5-0.5,9.8,2.7,10.3,7.6c0.4,4.8-3,9.9-8.1,12.1C133.1,99.6,133,99.6,132.9,99.6z M132.1,81.4\n    \t\t\t\tl1.5,15.9c3.9-2.2,6.4-6.1,6-9.8C139.3,83.9,136.2,81.4,132.1,81.4C132.1,81.4,132.1,81.4,132.1,81.4z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M127.8,100.7c-5,0-8.8-3.1-9.2-7.7c-0.4-4.7,2.8-9.7,7.9-12c0.3-0.1,0.6-0.1,0.8,0\n    \t\t\t\tc0.2,0.1,0.4,0.4,0.4,0.7l1.7,18c0,0.2-0.1,0.5-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3C128.4,100.7,128.1,100.7,127.8,100.7z\n    \t\t\t\t M126.1,83.1c-3.7,2.2-6.1,6.1-5.8,9.7c0.3,3.6,3.3,6,7.3,6.1L126.1,83.1z" }))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8397 -0.543 0.543 0.8397 -50.6615 73.255)", fill: "#EE1822", cx: "98.8", cy: "122.4", rx: "14", ry: "11.2" })),
                React__default['default'].createElement("g", { opacity: "0.65" },
                    React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M100.8,133.5c-6.9,1.8-12.9-1.7-13.5-7.7c-0.6-6,4.5-12.4,11.4-14.1c5.1-1.3,9.6,0.2,12,3.5\n    \t\t\t\tc-2.3-3.9-7.4-5.7-13-4.3c-7.3,1.9-12.7,8.6-12.1,15c0.6,6.4,7,10.1,14.3,8.2c1.9-0.5,3.7-1.3,5.3-2.4\n    \t\t\t\tC103.8,132.4,102.4,133.1,100.8,133.5z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M99.9,113.5l1.6,16.9c4.4-1.9,7.5-6.3,7.1-10.5C108.2,115.7,104.5,113.1,99.9,113.5z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M95.9,114.6c-4.3,2-7.3,6.3-6.9,10.4c0.4,4.1,4,6.7,8.5,6.4L95.9,114.6z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M95.9,114.6c-4.3,2-7.3,6.3-6.9,10.4c0.4,4.1,4,6.7,8.5,6.4L95.9,114.6z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#EE1822", d: "M96.5,120.2c-1.4,0.7-2.4,2.1-2.3,3.4c0.1,1.4,1.3,2.2,2.8,2.1L96.5,120.2z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#EE1822", d: "M100.3,119.2c1.5-0.1,2.7,0.8,2.8,2.1c0.1,1.4-0.9,2.8-2.3,3.4L100.3,119.2z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M96.1,135.4c-2.7,0-5.2-0.7-7.2-2.1c-2.5-1.7-4-4.3-4.2-7.4c-0.6-6.8,5.1-14,12.8-16\n    \t\t\t\tc4.1-1.1,8.2-0.5,11.2,1.6c2.5,1.7,4,4.3,4.2,7.4l0,0c0.6,6.8-5.1,14-12.8,16C98.7,135.3,97.4,135.4,96.1,135.4z M101.5,111.3\n    \t\t\t\tc-1.2,0-2.3,0.2-3.6,0.5c-6.9,1.8-12,8.1-11.4,14c0.2,2.5,1.5,4.6,3.5,6.1c2.5,1.8,6.1,2.3,9.7,1.3c6.9-1.8,12-8.1,11.4-14l0,0\n    \t\t\t\tc-0.2-2.5-1.5-4.6-3.5-6.1C105.9,111.9,103.8,111.3,101.5,111.3z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M95.6,128c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.4,0.2,0.6c0.1,0.3-0.1,0.6-0.4,0.6s-0.6-0.1-0.6-0.4\n    \t\t\t\t\tc0,0,0-0.1,0-0.1c0-0.2,0.1-0.4,0.2-0.6C95.4,128.4,95.5,128.2,95.6,128z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M93.3,127.1c0,0.3,0,0.5,0,0.7c0,0.2,0,0.5-0.1,0.7c-0.1,0.3-0.4,0.4-0.7,0.3c-0.3-0.1-0.4-0.4-0.3-0.7\n    \t\t\t\t\tc0,0,0-0.1,0.1-0.1c0.1-0.2,0.3-0.3,0.5-0.5C92.9,127.3,93.1,127.2,93.3,127.1z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M92,124.7c-0.1,0.2-0.2,0.4-0.4,0.6s-0.3,0.4-0.4,0.5c-0.2,0.2-0.5,0.2-0.7-0.1\n    \t\t\t\t\tc-0.2-0.2-0.2-0.5,0.1-0.7c0,0,0.1-0.1,0.1-0.1c0.2-0.1,0.4-0.1,0.6-0.2C91.6,124.8,91.8,124.7,92,124.7z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M92.3,121.8c-0.2,0.1-0.4,0.2-0.6,0.3c-0.2,0.1-0.4,0.2-0.6,0.2c-0.3,0-0.5-0.2-0.6-0.5\n    \t\t\t\t\tc0-0.3,0.2-0.5,0.5-0.6c0,0,0.1,0,0.1,0c0.2,0,0.4,0.1,0.6,0.2C92,121.6,92.2,121.7,92.3,121.8z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M94.1,119.4c-0.2,0-0.4-0.1-0.6-0.1c-0.2-0.1-0.4-0.1-0.5-0.2c-0.2-0.2-0.3-0.5-0.1-0.7s0.5-0.3,0.7-0.1\n    \t\t\t\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.5C93.9,119,94,119.2,94.1,119.4z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M103.9,125.2c0.2,0.1,0.4,0.3,0.5,0.4c0.2,0.1,0.3,0.3,0.4,0.5c0.2,0.2,0.1,0.6-0.2,0.7\n    \t\t\t\t\tc-0.2,0.2-0.6,0.1-0.7-0.2c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.1-0.4-0.1-0.6C103.9,125.7,103.9,125.5,103.9,125.2z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M105.3,122.6c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0.1c0.3,0.1,0.4,0.4,0.3,0.7c-0.1,0.3-0.4,0.4-0.7,0.3\n    \t\t\t\t\tc0,0-0.1,0-0.1-0.1c-0.2-0.1-0.3-0.3-0.4-0.4C105.6,123,105.4,122.8,105.3,122.6z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M105.3,119.8c0.2-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.3-0.2,0.5-0.3c0.3-0.1,0.6,0,0.7,0.3\n    \t\t\t\t\tc0.1,0.3,0,0.6-0.3,0.7c0,0-0.1,0-0.1,0c-0.2,0-0.4,0-0.6-0.1C105.7,119.9,105.5,119.8,105.3,119.8z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M103.8,117.6c0.1-0.2,0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.2,0.5-0.3,0.7-0.1\n    \t\t\t\t\tc0.2,0.2,0.3,0.5,0.1,0.7c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.4,0.2-0.6,0.3C104.3,117.4,104.1,117.5,103.8,117.6z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F6C547", d: "M101.4,116.9c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.2-0.1-0.5,0-0.7c0-0.3,0.3-0.5,0.6-0.4\n    \t\t\t\t\tc0.3,0,0.5,0.3,0.4,0.6c0,0,0,0.1,0,0.1c-0.1,0.2-0.2,0.4-0.4,0.6C101.7,116.5,101.6,116.7,101.4,116.9z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M101.5,131.3c-0.2,0-0.3,0-0.5-0.1c-0.2-0.1-0.4-0.4-0.4-0.7L99,113.6c0-0.2,0.1-0.5,0.2-0.7\n    \t\t\t\tc0.2-0.2,0.4-0.3,0.6-0.3c5.2-0.5,9.3,2.6,9.7,7.2c0.4,4.5-2.8,9.3-7.7,11.4C101.7,131.3,101.6,131.3,101.5,131.3z M100.8,114.4\n    \t\t\t\tl1.4,14.7c3.5-2,5.8-5.7,5.5-9C107.4,116.7,104.6,114.4,100.8,114.4z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#BD1622", d: "M96.8,132.3c-4.7,0-8.3-3-8.7-7.3c-0.4-4.5,2.6-9.1,7.5-11.3c0.3-0.1,0.6-0.1,0.8,0\n    \t\t\t\tc0.3,0.1,0.4,0.4,0.4,0.7l1.6,16.9c0,0.2-0.1,0.5-0.2,0.7s-0.4,0.3-0.6,0.3C97.3,132.3,97,132.3,96.8,132.3z M95.1,116\n    \t\t\t\tc-3.4,2-5.6,5.6-5.3,8.9c0.3,3.3,3,5.5,6.6,5.6L95.1,116z" }))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#48C75A", d: "M80.3,120.6c-9.5,0.4-9.7,5.2-6.7,12.7C79.4,130.9,83.1,126.7,80.3,120.6z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#661A47", d: "M73.4,134.9c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.5-0.5c-1.5-4.2-2.5-8.6-0.5-11.5\n    \t\t\t\t\tc1.4-2,4.1-3,8.2-3.1c0.3,0,0.7,0.2,0.8,0.5c1.2,2.4,1.4,4.7,0.6,7c-1.1,3-3.9,5.7-8,7.6C73.7,134.9,73.5,134.9,73.4,134.9z\n    \t\t\t\t\t M79.8,121.5c-3.2,0.1-5.2,0.9-6.2,2.3c-1.4,2.1-0.7,5.6,0.4,8.9c3.1-1.6,5.3-3.8,6.1-6.1C80.6,125,80.5,123.3,79.8,121.5z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#651B47", d: "M80.6,121.5c-0.6,0.3-1.2,0.6-1.8,1.1c-0.6,0.5-1.1,1-1.6,1.6c-1,1.2-1.8,2.6-2.5,4.2\n    \t\t\t\t\tc0-0.8,0.1-1.7,0.3-2.5c0.2-0.8,0.5-1.7,0.9-2.4c0.4-0.8,0.9-1.5,1.6-2.2c0.7-0.6,1.5-1.2,2.4-1.4c0.5-0.1,1,0.2,1.1,0.7\n    \t\t\t\t\tC81.2,120.9,81,121.3,80.6,121.5L80.6,121.5z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#48C75A", d: "M97.5,94.7c8.4-4.4,11-0.4,12.1,7.6C103.5,103.1,98.2,101.3,97.5,94.7z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#661A47", d: "M108.3,103.8c-3.6,0-6.6-0.9-8.7-2.7c-1.8-1.6-2.8-3.7-3-6.4c0-0.3,0.2-0.7,0.5-0.8\n    \t\t\t\t\tc3.6-2,6.5-2.5,8.7-1.4c3.2,1.5,4.5,5.8,5.3,10.2c0,0.3,0,0.5-0.2,0.7c-0.2,0.2-0.4,0.3-0.6,0.4\n    \t\t\t\t\tC109.6,103.8,108.9,103.8,108.3,103.8z M98.5,95.2c0.2,1.9,1,3.4,2.3,4.6c1.9,1.6,4.9,2.4,8.4,2.2c-0.7-3.4-1.9-6.8-4.1-7.9\n    \t\t\t\t\tC103.5,93.3,101.3,93.7,98.5,95.2z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#651B47", d: "M97.4,93.8c0.9-0.3,1.9-0.2,2.8,0c0.9,0.2,1.7,0.6,2.5,1.1c0.7,0.5,1.4,1,2,1.6c0.6,0.6,1.1,1.3,1.6,2\n    \t\t\t\t\tc-1.4-1-2.8-1.8-4.3-2.3c-0.7-0.3-1.5-0.5-2.2-0.6c-0.7-0.1-1.4-0.1-2.1-0.1l0,0c-0.5,0-0.9-0.3-1-0.8\n    \t\t\t\t\tC96.7,94.3,96.9,93.9,97.4,93.8z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#48C75A", d: "M135,124.6c-6.5-6-9.8-3-12.8,3.9C127.5,130.7,132.8,130.5,135,124.6z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#661A47", d: "M127.2,130.8c-1.8,0-3.8-0.4-5.9-1.2c-0.2-0.1-0.4-0.3-0.5-0.5c-0.1-0.2-0.1-0.5,0-0.7\n    \t\t\t\t\tc1.9-3.8,4-7.3,7.3-7.9c2.3-0.4,4.7,0.7,7.5,3.4c0.2,0.2,0.3,0.6,0.2,0.9c-0.8,2.4-2.2,4.1-4.2,5\n    \t\t\t\t\tC130.3,130.5,128.8,130.8,127.2,130.8z M122.7,128.4c3.1,1,6,1,8.1,0c1.5-0.7,2.5-1.9,3.2-3.5c-2.2-2-4-2.9-5.6-2.6\n    \t\t\t\t\tC126.1,122.6,124.2,125.4,122.7,128.4z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#651B47", d: "M134.6,125.3c-0.6-0.2-1.2-0.4-1.9-0.4c-0.7-0.1-1.4-0.1-2.1,0c-1.5,0.1-2.9,0.5-4.4,1.1\n    \t\t\t\t\tc0.6-0.6,1.2-1,1.9-1.4c0.7-0.4,1.4-0.7,2.2-1c0.8-0.2,1.6-0.4,2.5-0.4c0.9,0,1.8,0.2,2.6,0.7c0.4,0.2,0.5,0.8,0.3,1.2\n    \t\t\t\t\tC135.4,125.3,135,125.5,134.6,125.3L134.6,125.3z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#48C75A", d: "M60.6,139.9c0.5,0,1,0.1,1.5,0.1c0.5,0.1,1,0.1,1.5,0.2c0.5,0.1,1,0.2,1.5,0.3c0.5,0.2,1,0.3,1.6,0.7\n    \t\t\t\t\tl0.1,0c0.6,0.4,0.8,1.1,0.4,1.7c-0.4,0.6-1.1,0.8-1.7,0.4c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.6-0.4-1-0.6\n    \t\t\t\t\tc-0.4-0.2-0.8-0.3-1.2-0.5c-0.4-0.1-0.9-0.3-1.3-0.4c-0.4-0.1-0.9-0.2-1.4-0.3l0,0c-0.4-0.1-0.7-0.5-0.6-1\n    \t\t\t\t\tC59.8,140.1,60.2,139.8,60.6,139.9z" })),
                    React__default['default'].createElement("g", { opacity: "0.3" },
                        React__default['default'].createElement("path", { fill: "#6C184E", d: "M60.6,139.9c0.5,0,1,0.1,1.5,0.1c0.5,0.1,1,0.1,1.5,0.2c0.5,0.1,1,0.2,1.5,0.3c0.5,0.2,1,0.3,1.6,0.7\n    \t\t\t\t\tl0.1,0c0.6,0.4,0.8,1.1,0.4,1.7c-0.4,0.6-1.1,0.8-1.7,0.4c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.6-0.4-1-0.6\n    \t\t\t\t\tc-0.4-0.2-0.8-0.3-1.2-0.5c-0.4-0.1-0.9-0.3-1.3-0.4c-0.4-0.1-0.9-0.2-1.4-0.3l0,0c-0.4-0.1-0.7-0.5-0.6-1\n    \t\t\t\t\tC59.8,140.1,60.2,139.8,60.6,139.9z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#661A47", d: "M66.1,144.3c-0.4,0-0.7-0.1-1-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2-0.2-0.8-0.5\n    \t\t\t\t\tc-0.3-0.2-0.7-0.3-1.2-0.5c-0.4-0.1-0.8-0.3-1.3-0.4c-0.5-0.1-0.9-0.2-1.3-0.3c-0.4-0.1-0.8-0.3-1-0.7c-0.2-0.3-0.3-0.8-0.2-1.2\n    \t\t\t\t\tc0.2-0.7,0.8-1.3,1.6-1.2l0,0c0.5,0,1,0.1,1.5,0.1c0.5,0.1,1,0.1,1.5,0.2c0.6,0.1,1.1,0.2,1.6,0.4c0.6,0.2,1.2,0.4,1.8,0.8\n    \t\t\t\t\tl0.1,0c0.9,0.6,1.2,1.8,0.6,2.7C67.4,144,66.8,144.3,66.1,144.3z M60.5,140.6c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0\n    \t\t\t\t\tc0.5,0.1,0.9,0.2,1.4,0.3c0.5,0.1,0.9,0.3,1.4,0.4c0.5,0.2,0.9,0.3,1.3,0.5c0.5,0.2,0.9,0.5,1.2,0.7c0,0,0.1,0,0.1,0.1\n    \t\t\t\t\tc0.2,0.2,0.6,0.1,0.7-0.2c0.2-0.3,0.1-0.6-0.2-0.7l-0.1,0c-0.5-0.3-0.9-0.4-1.5-0.6c-0.4-0.1-0.9-0.2-1.4-0.3\n    \t\t\t\t\tc-0.5-0.1-0.9-0.2-1.5-0.2C61.5,140.6,61,140.6,60.5,140.6C60.5,140.6,60.5,140.6,60.5,140.6z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#48C75A", d: "M61.7,140.8c-2.9-10.6-15.1-2-15.1-2S56.2,150.4,61.7,140.8z" })),
                        React__default['default'].createElement("g", { opacity: "0.65" },
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M61.7,140.9c0,0,0-0.1,0.1-0.1c-2.9-10.6-15.1-2-15.1-2s0.3,0.4,0.9,1\n    \t\t\t\t\t\tC49.8,138.4,58.6,133.4,61.7,140.9z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#661A47", d: "M56,145.3c-5.3,0-10.6-5.7-10.8-6c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.3-0.5\n    \t\t\t\t\t\tc0.3-0.2,7.5-4.9,12.7-3c2.1,0.8,3.6,2.6,4.4,5.3c0.1,0.2,0,0.4-0.1,0.5c-1.4,2.5-3.3,3.8-5.6,4.1\n    \t\t\t\t\t\tC56.5,145.3,56.2,145.3,56,145.3z M46.9,139c1.6,1.5,5.9,5.3,9.7,4.8c1.7-0.2,3.2-1.2,4.4-3.1c-0.6-2.1-1.8-3.5-3.4-4.1\n    \t\t\t\t\t\tC53.9,135.3,48.8,137.9,46.9,139z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("g", null,
                                React__default['default'].createElement("line", { fill: "none", x1: "61.7", y1: "140.8", x2: "53.5", y2: "139.8" })),
                            React__default['default'].createElement("g", null,
                                React__default['default'].createElement("path", { fill: "#651B47", d: "M61.6,141.5c-0.7,0-1.4-0.1-2-0.2c-0.7-0.1-1.4-0.3-2-0.4c-1.3-0.3-2.7-0.7-4-1.1\n    \t\t\t\t\t\t\tc1.4-0.1,2.8-0.1,4.2,0c0.7,0,1.4,0,2.1,0.1c0.7,0.1,1.4,0.1,2,0.3c0.4,0.1,0.6,0.5,0.6,0.9C62.3,141.3,62,141.6,61.6,141.5z" })))),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#661A47", d: "M55.7,145.3c0.9-0.8,1.9-1.6,2.8-2.4c0.9-0.8,1.9-1.6,2.9-2.4c0.3-0.2,0.8-0.2,1,0.1\n    \t\t\t\t\tc0.2,0.3,0.2,0.8-0.1,1c0,0-0.1,0.1-0.1,0.1l0,0c-1.1,0.5-2.2,1.1-3.2,1.7C57.9,144.1,56.8,144.7,55.7,145.3z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#48C75A", d: "M61.8,141c0,0-6.2,0.4-7.6,11.1C54.1,152.1,66.8,148,61.8,141z" })),
                        React__default['default'].createElement("g", { opacity: "0.65" },
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M55.9,151.1c1.2-8.8,6.2-9.2,6.3-9.3c-0.1-0.3-0.3-0.6-0.5-0.8c0,0-6.2,0.4-7.6,11.1\n    \t\t\t\t\t\tc0,0,2.7-0.9,5.1-2.5C57.6,150.5,55.9,151.1,55.9,151.1z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#661A47", d: "M54.1,152.8c-0.2,0-0.3-0.1-0.5-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c1.5-11.2,8-11.7,8.3-11.7\n    \t\t\t\t\t\tc0.2,0,0.5,0.1,0.6,0.3c1.3,1.8,1.6,3.6,1.1,5.3c-1.5,4.4-8.7,6.8-9,6.9C54.3,152.8,54.2,152.8,54.1,152.8z M61.4,141.8\n    \t\t\t\t\t\tc-1.2,0.3-5,1.7-6.4,9.2c2-0.8,6-2.7,7-5.6C62.4,144.2,62.2,143,61.4,141.8z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#661A47", d: "M58.3,145.6c0.5-0.9,0.9-1.7,1.4-2.6c0.5-0.9,1-1.7,1.5-2.6c0.2-0.3,0.7-0.4,1-0.2\n    \t\t\t\t\t\tc0.3,0.2,0.4,0.7,0.2,1c0,0-0.1,0.1-0.1,0.1c-0.7,0.6-1.4,1.3-2.1,2C59.6,144.2,58.9,144.9,58.3,145.6z" }))),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#48C75A", d: "M61.7,140.9c0,0-5.8-2.3-3.8-12.9C57.9,128,68.7,135.8,61.7,140.9z" })),
                        React__default['default'].createElement("g", { opacity: "0.65" },
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M59.6,129.4c-1-0.9-1.7-1.4-1.7-1.4c-2,10.6,3.8,12.9,3.8,12.9c0.1-0.1,0.2-0.1,0.2-0.2\n    \t\t\t\t\t\tC60.8,139.9,57.8,136.9,59.6,129.4z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#661A47", d: "M61.7,141.7c-0.1,0-0.2,0-0.3,0c-0.3-0.1-6.3-2.6-4.2-13.7c0-0.2,0.2-0.4,0.4-0.5\n    \t\t\t\t\t\tc0.2-0.1,0.5-0.1,0.7,0.1c0.3,0.2,6.4,4.7,6.5,9.3c0,1.8-0.9,3.4-2.6,4.7C62,141.6,61.9,141.7,61.7,141.7z M58.4,129.4\n    \t\t\t\t\t\tc-1,7.5,2.1,10.1,3.2,10.7c1.2-1,1.7-2,1.7-3.3C63.3,133.9,60.1,130.7,58.4,129.4z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#661A47", d: "M59.8,135.4c0.4,0.9,0.8,1.8,1.2,2.7c0.4,0.9,0.9,1.8,1.3,2.6c0.2,0.3,0.1,0.8-0.3,1\n    \t\t\t\t\t\tc-0.3,0.2-0.8,0.1-1-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.3-1-0.5-1.9-0.7-2.9C60.2,137.4,60,136.4,59.8,135.4z" }))))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { fill: "#6C184E", d: "M50.8,170C50.8,170,50.8,170,50.8,170c0.1,0.1,0.2,0.1,0.2,0.2c0.2,0,0.4,0,0.7,0c0.6-0.1,1.2-0.3,1.8-0.5\n    \t\t\tc1.2-0.5,2.4-1.2,3.5-1.9c2.3-1.4,4.5-3,6.7-4.7c2.2-1.7,4.3-3.4,6.4-5.2c0.5-0.5,1-0.9,1.5-1.4c0.5-0.5,1-0.9,1.5-1.4\n    \t\t\tc0.3-0.2,0.5-0.5,0.8-0.7l0.8-0.7l0.4-0.3l0.4-0.3l0.8-0.6c4.6-3.2,9.6-5.6,14.9-7.5c2.6-0.9,5.3-1.7,8-2.4\n    \t\t\tc2.7-0.7,5.4-1.2,8.1-1.6c-5.4,1.1-10.7,2.7-15.9,4.7c-2.6,1-5.1,2.1-7.5,3.4c-2.4,1.3-4.8,2.7-7,4.3l-0.8,0.6l-0.4,0.3l-0.4,0.3\n    \t\t\tl-0.8,0.7c-0.3,0.2-0.5,0.5-0.8,0.7c-0.5,0.4-1,0.9-1.5,1.4c-0.5,0.5-1,0.9-1.5,1.4c-2,1.9-4.1,3.7-6.3,5.4\n    \t\t\tc-2.2,1.7-4.4,3.4-6.8,5c-1.2,0.8-2.4,1.5-3.7,2.1c-0.7,0.3-1.4,0.6-2.2,0.7c-0.4,0.1-0.9,0.1-1.4,0c-0.3-0.1-0.5-0.2-0.8-0.3\n    \t\t\tc-0.3-0.2-0.5-0.4-0.6-0.7c-0.2-0.4-0.1-1,0.3-1.2C50,169.4,50.5,169.5,50.8,170L50.8,170z" })),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.968 -0.2508 0.2508 0.968 -27.0284 42.9795)", fill: "#6C184E", cx: "155.1", cy: "127.5", rx: "1.4", ry: "1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.968 -0.2508 0.2508 0.968 -26.3189 41.2015)", fill: "#6C184E", cx: "148.5", cy: "123.9", rx: "2.3", ry: "1.7" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.9355 -0.3532 0.3532 0.9355 -31.6146 54.5127)", fill: "#6C184E", cx: "133.6", cy: "113.9", rx: "1.8", ry: "1.4" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.9355 -0.3532 0.3532 0.9355 -24.3407 59.4877)", fill: "#6C184E", cx: "150.8", cy: "96.4", rx: "1.3", ry: "1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.9355 -0.3532 0.3532 0.9355 -28.8147 61.1336)", fill: "#6C184E", cx: "153.1", cy: "109.5", rx: "1.4", ry: "1.1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("path", { fill: "#6C184E", d: "M139.5,105c0.2,0.5-0.2,1.1-0.8,1.3c-0.6,0.2-1.3,0-1.4-0.5c-0.2-0.5,0.2-1.1,0.8-1.3\n    \t\t\t\tC138.7,104.3,139.3,104.5,139.5,105z" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -48.8209 92.1729)", fill: "#6C184E", cx: "118.3", cy: "121.7", rx: "1.3", ry: "1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -41.0021 91.5217)", fill: "#6C184E", cx: "121.2", cy: "109.2", rx: "1.3", ry: "1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -67.6664 74.6321)", fill: "#6C184E", cx: "81.7", cy: "142.1", rx: "1.7", ry: "1.3" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -62.1872 73.4016)", fill: "#6C184E", cx: "82.5", cy: "133", rx: "1.4", ry: "1.1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -75.2203 68.6707)", fill: "#6C184E", cx: "68.7", cy: "150.8", rx: "1", ry: "0.7" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -52.4013 70.4473)", fill: "#6C184E", cx: "82.9", cy: "116.4", rx: "1.4", ry: "1.1" })),
                React__default['default'].createElement("g", { opacity: "0.3" },
                    React__default['default'].createElement("ellipse", { transform: "matrix(0.8111 -0.5849 0.5849 0.8111 -44.6941 76.1262)", fill: "#6C184E", cx: "95.5", cy: "107.3", rx: "1.9", ry: "1.5" }))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#EB984E", d: "M167.7,130.2c-1.8,10.3,21.7,12,21.7,12s14.9-34.9-9.2-64.7s-56.8-25.3-60.4-18.2\n    \t\t\t\t\t\tc-3.6,7,3.5,10.3,3.5,10.3S177.5,74.2,167.7,130.2z" })),
                        React__default['default'].createElement("g", { opacity: "0.65" },
                            React__default['default'].createElement("path", { fill: "#FFFFFF", d: "M180.3,77.5c-24.1-29.8-56.8-25.3-60.4-18.2c-3.2,6.3,2.1,9.5,3.3,10.1c-1.4-1.5-2.6-4.1-0.8-7.7\n    \t\t\t\t\t\tc0.8-1.5,3.1-2.9,6.4-3.8c-0.8,0.5-1.2,1-1.1,1.6c0.2,1,2.4,1.5,5,1.1c2.6-0.5,4.5-1.7,4.3-2.7c-0.1-0.4-0.4-0.7-0.9-0.9\n    \t\t\t\t\t\tc11.7-0.3,28.6,4.6,42.5,21.8c22.4,27.7,8.5,60.2,8.5,60.2s-15.5-1.1-19.4-7.2c0.5,9,21.8,10.6,21.8,10.6\n    \t\t\t\t\t\tS204.3,107.3,180.3,77.5z" })),
                        React__default['default'].createElement("g", { opacity: "0.3" },
                            React__default['default'].createElement("path", { fill: "#6C184E", d: "M189.4,142.2c0,0,2-4.8,3.4-12.3c-2.5-2.3-6.2-4.3-10.1-5.9c-3.5-1.4-5.6-4.9-5.3-8.6\n    \t\t\t\t\t\tc0.8-9.6,0.8-21.8-7.5-32.1c-18.8-23.3-44.3-20.1-47.7-14.7c0.7,0.5,1.3,0.8,1.3,0.8s54.1,4.8,44.3,60.7\n    \t\t\t\t\t\tC165.9,140.5,189.4,142.2,189.4,142.2z" })),
                        React__default['default'].createElement("g", null,
                            React__default['default'].createElement("path", { fill: "#6C184E", d: "M189.4,143.2C189.4,143.2,189.4,143.2,189.4,143.2c-0.7,0-16.4-1.2-21.3-7.6c-1.3-1.7-1.8-3.6-1.4-5.6\n    \t\t\t\t\t\tc2.9-16.6,0.4-30.3-7.5-40.6c-12.8-16.7-35.6-18.9-35.9-18.9c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-3.5-1.6-4.7-5\n    \t\t\t\t\t\tc-0.7-2.1-0.5-4.3,0.7-6.6c1.4-2.8,6.2-4.9,12.4-5.5c13.6-1.4,33.9,4,49.7,23.6c12.6,15.6,14.5,32.7,13.8,44.2\n    \t\t\t\t\t\tc-0.7,12.5-4.4,21.2-4.5,21.5C190.2,143,189.8,143.2,189.4,143.2z M167.7,130.2l1,0.2c-0.3,1.5,0.1,2.8,1,4\n    \t\t\t\t\t\tc3.8,4.9,15.9,6.4,19,6.7c0.9-2.3,3.5-10,4.1-20.2c0.6-11.2-1.2-27.6-13.4-42.7c-15.3-19-34.8-24.2-47.9-22.9\n    \t\t\t\t\t\tc-6.2,0.7-9.9,2.7-10.8,4.4c-0.9,1.8-1.1,3.5-0.6,5c0.8,2.2,2.9,3.5,3.5,3.8c1.1,0.1,6.5,0.8,13.4,3.2\n    \t\t\t\t\t\tc7,2.5,16.7,7.4,23.7,16.5c8.3,10.8,10.9,25,7.9,42.2L167.7,130.2z" }))),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#F7AF41", d: "M189.4,142.2c0,0-4.6,5.2-13.7,2.4c-9.1-2.8-11.2-9.1-8-14.4C170.9,124.9,195.9,131.6,189.4,142.2z" })),
                    React__default['default'].createElement("g", { opacity: "0.3" },
                        React__default['default'].createElement("path", { fill: "#6C184E", d: "M189.4,142.2c0,0-4.6,5.2-13.7,2.4c-9.1-2.8-11.2-9.1-8-14.4C170.9,124.9,195.9,131.6,189.4,142.2z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6C184E", d: "M180.9,146.4c-1.6,0-3.5-0.3-5.6-0.9c-6.3-2-8.7-5.2-9.6-7.6c-1-2.7-0.6-5.6,1-8.3\n    \t\t\t\t\tc1.2-2,4.3-2.4,6.7-2.3c6.2,0.2,14.5,3.3,17.1,8.1c1.3,2.3,1.1,4.8-0.4,7.3c0,0.1-0.1,0.1-0.1,0.1\n    \t\t\t\t\tC190,143,186.9,146.4,180.9,146.4z M173,129.4c-2.3,0-4,0.5-4.5,1.3c-1.3,2.2-1.6,4.4-0.8,6.5c1,2.8,4,5,8.3,6.4\n    \t\t\t\t\tc7.9,2.4,12-1.5,12.6-2c1.1-1.8,1.2-3.5,0.3-5.1c-2.2-4-9.7-6.9-15.4-7C173.3,129.4,173.2,129.4,173,129.4z M189.4,142.2\n    \t\t\t\t\tL189.4,142.2L189.4,142.2z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6D184E", d: "M136.2,65c-0.2-0.5-0.3-1-0.3-1.5c0-0.5,0.1-1,0.3-1.5c0.2-0.5,0.5-0.9,0.8-1.3c0.4-0.4,0.8-0.6,1.3-0.7\n    \t\t\t\t\tc-0.2,0.5-0.5,0.8-0.7,1.2c-0.2,0.4-0.4,0.8-0.6,1.1c-0.2,0.4-0.3,0.8-0.5,1.2C136.5,64.1,136.3,64.5,136.2,65z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6D184E", d: "M138.9,66.8c-0.1-0.7-0.1-1.4,0-2c0.1-0.7,0.3-1.3,0.7-2c0.3-0.6,0.8-1.2,1.3-1.6\n    \t\t\t\t\tc0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.3-0.1,0.5-0.2c0.2,0,0.3-0.1,0.5-0.1c-0.5,0.5-0.9,0.9-1.3,1.4\n    \t\t\t\t\tc-0.4,0.5-0.8,1-1.1,1.5c-0.3,0.5-0.6,1.1-0.8,1.7C139.3,65.6,139.1,66.2,138.9,66.8z" }))),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6D184E", d: "M177.4,110.7c0.6-0.5,1.2-0.8,1.9-1c0.7-0.2,1.4-0.3,2.2-0.3c0.7,0,1.5,0.2,2.2,0.5\n    \t\t\t\t\tc0.2,0.1,0.3,0.2,0.5,0.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.1,0.3,0.3,0.4,0.4c-0.7-0.2-1.3-0.4-2-0.6\n    \t\t\t\t\tc-0.7-0.1-1.3-0.2-2-0.3c-0.7,0-1.3,0-2,0C178.8,110.5,178.1,110.6,177.4,110.7z" })),
                    React__default['default'].createElement("g", null,
                        React__default['default'].createElement("path", { fill: "#6D184E", d: "M176.3,115.5c0.9-0.5,1.9-0.7,2.9-0.9c1-0.1,2-0.1,3,0c0.3,0,0.5,0.1,0.8,0.1c0.2,0.1,0.5,0.1,0.7,0.2\n    \t\t\t\t\tc0.2,0.1,0.5,0.2,0.7,0.3l0.4,0.2l0.3,0.2c0.2,0.1,0.4,0.3,0.7,0.4c0.2,0.2,0.4,0.3,0.6,0.5c0.1,0.1,0.2,0.2,0.3,0.3l0.3,0.3\n    \t\t\t\t\tc0.2,0.2,0.3,0.4,0.5,0.6c-0.9-0.5-1.7-1-2.6-1.3l-0.3-0.1l-0.3-0.1c-0.2-0.1-0.4-0.2-0.7-0.2c-0.2-0.1-0.5-0.1-0.7-0.2\n    \t\t\t\t\tc-0.2-0.1-0.5-0.1-0.7-0.1c-0.9-0.2-1.9-0.2-2.8-0.3C178.2,115.3,177.3,115.3,176.3,115.5z" })))),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#48C75A", d: "M146.9,107.2c7.3-3.8,9.5-0.3,10.5,6.6C152.1,114.5,147.4,113,146.9,107.2z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#661A47", d: "M156.2,115.1c-3.1,0-5.7-0.8-7.5-2.3c-1.6-1.4-2.5-3.2-2.6-5.5c0-0.3,0.1-0.6,0.4-0.7\n    \t\t\t\tc3.1-1.7,5.6-2.1,7.5-1.2c2.8,1.3,3.9,5,4.6,8.8c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.3,0.3-0.6,0.3\n    \t\t\t\tC157.4,115.1,156.8,115.1,156.2,115.1z M147.7,107.6c0.2,1.6,0.9,3,2,3.9c1.6,1.4,4.2,2.1,7.2,1.9c-0.6-3-1.6-5.9-3.6-6.8\n    \t\t\t\tC152,106.1,150.1,106.4,147.7,107.6z" })),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { fill: "#651B47", d: "M146.7,106.4c0.8-0.2,1.7-0.2,2.5,0c0.8,0.2,1.5,0.5,2.1,0.9c0.6,0.4,1.2,0.9,1.8,1.4\n    \t\t\t\tc0.5,0.5,1,1.1,1.4,1.7c-1.2-0.9-2.4-1.5-3.7-2c-0.6-0.2-1.3-0.4-1.9-0.5c-0.6-0.1-1.2-0.1-1.8-0.1l0,0c-0.4,0-0.8-0.3-0.9-0.7\n    \t\t\t\tC146.1,106.9,146.4,106.5,146.7,106.4z" }))))));
};

var rotate$1 = styled.keyframes(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$D)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled__default['default'](Icon$C)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$q, templateObject_2$6, templateObject_3$2, templateObject_4$1, templateObject_5;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ",
    ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small;
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$r, templateObject_2$7, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var Handle = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$s, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending
                    ? data.sort(column.sort)
                    : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending =
                            column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending
                            ? state.rows.sort(column.sort)
                            : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id]
                        ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds
                    ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [
        columnsWithSorting,
    ]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) {
            return dispatch({ type: "SEARCH_STRING", searchString: searchString });
        },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #478bf1, 0px 0px 4px 8px rgba(31, 120, 212, 0.2)",
    success: "0px 0px 0px 1px #25d4aa, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ed4b5a, 0px 0px 0px 4px rgba(237, 75, 120, 0.2)",
    focus: "0px 0px 0px 1px #e0b870, 0px 0px 0px 4px rgba(224, 184, 112, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) {
    return "is" + size.charAt(0).toUpperCase() + size.slice(1);
};
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var CloseButton = styled__default['default'](Button)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  padding: 8px;\n  width: 48px;\n"], ["\n  padding: 8px;\n  width: 48px;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, children = _a.children;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(Heading, null, title),
            React__default['default'].createElement(CloseButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$h, { color: "primary", onClick: onDismiss }))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: "24px" }, children)));
};
var templateObject_1$t, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #202023;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #202023;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$u;

var ModalWrapper = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$v;

var useModal = function (modal) {
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    return [onPresentCallback, onDismiss];
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z", fill: "#191326" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 7010 1280" }, props),
        React__default['default'].createElement("g", { id: "layer101", fill: "#7b2450", stroke: "none" },
            React__default['default'].createElement("path", { d: "M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z" })),
        React__default['default'].createElement("g", { id: "layer102", fill: "#c31b25", stroke: "none" },
            React__default['default'].createElement("path", { d: "M357 1013 c-4 -3 -7 -21 -7 -39 0 -38 -28 -61 -57 -46 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -9 -3 -16 -16 -16 -29 0 -28 20 -85 29 -85 4 0 7 -10 7 -22 -1 -19 5 -24 32 -26 24 -2 31 -7 24 -15 -26 -32 -23 -72 10 -122 74 -115 290 -295 352 -295 37 0 103 29 149 64 69 53 113 188 89 271 -7 26 -14 31 -53 36 l-44 6 45 2 45 3 -63 12 c-34 7 -77 23 -94 36 -28 20 -34 21 -68 10 -70 -23 -112 8 -89 67 13 35 11 50 -7 57 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -144 l45 -41 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -6 40 -29 65 -52z m58 -180 c4 -10 -1 -9 -15 4 -11 9 -23 17 -26 17 -11 0 -8 -48 3 -55 6 -3 10 -2 10 4 0 6 7 8 15 5 23 -9 18 -26 -6 -22 -30 4 -43 29 -35 62 6 26 8 27 28 14 12 -8 24 -21 26 -29z m141 27 c27 -14 51 -53 51 -81 0 -23 -38 -55 -65 -55 -38 0 -75 21 -91 51 -19 38 -18 55 6 79 24 24 60 26 99 6z m118 -22 c-3 -4 -2 -16 4 -28 10 -20 10 -20 -5 -2 -19 24 -20 36 -4 36 6 0 8 -3 5 -6z m62 -13 c8 -14 7 -20 -4 -25 -8 -3 -17 -1 -20 4 -4 6 0 10 7 10 8 1 6 6 -6 15 -17 13 -17 15 -3 15 9 0 21 -9 26 -19z m140 -88 c0 -11 -3 -13 -6 -5 -7 17 -28 15 -44 -5 -12 -15 -12 -16 4 -10 12 5 16 3 11 -5 -5 -8 -2 -9 10 -5 10 4 15 3 11 -3 -10 -16 -45 -12 -52 6 -4 11 1 22 12 30 27 20 55 18 54 -3z m-309 -62 c-23 -4 -36 -12 -38 -25 -3 -13 0 -16 9 -11 8 5 10 4 5 -3 -13 -22 13 -12 28 10 9 12 16 17 16 11 0 -22 -31 -44 -54 -37 -30 9 -31 11 -12 39 12 19 24 25 49 24 l32 -2 -35 -6z m193 -15 c49 -46 45 -119 -8 -132 -83 -21 -171 80 -116 135 30 30 90 28 124 -3z" }),
            React__default['default'].createElement("path", { d: "M457 702 c-24 -27 -21 -50 12 -83 38 -37 84 -39 107 -4 19 29 12 57 -23 85 -32 25 -75 26 -96 2z" }),
            React__default['default'].createElement("path", { d: "M636 508 c-22 -30 -20 -42 9 -76 48 -57 135 -47 135 14 0 66 -109 113 -144 62z" })),
        React__default['default'].createElement("g", { id: "layer103", fill: "#64544d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M357 1013 c-4 -3 -7 -23 -7 -44 0 -41 -24 -58 -57 -41 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -9 -3 -16 -16 -16 -29 0 -28 20 -85 29 -85 4 0 7 -10 7 -22 -1 -19 5 -24 32 -26 24 -2 31 -7 24 -15 -26 -32 -23 -72 10 -122 75 -116 289 -295 353 -295 39 0 123 41 165 81 59 57 93 172 73 249 -8 32 -13 36 -54 41 l-44 6 45 2 c45 3 44 3 -24 17 -43 8 -78 22 -92 35 -22 21 -27 21 -63 9 -22 -7 -50 -10 -64 -6 -29 7 -43 46 -27 76 15 27 12 47 -6 54 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -143 l45 -42 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -5 40 -28 65 -51z m110 -76 c0 -2 -13 2 -30 11 -16 9 -30 18 -30 21 0 2 14 -2 30 -11 17 -9 30 -18 30 -21z m-52 -105 c4 -10 -1 -9 -15 4 -11 9 -23 17 -26 17 -11 0 -8 -48 3 -55 6 -3 10 -2 10 4 0 6 7 8 15 5 23 -9 18 -26 -6 -22 -30 4 -43 29 -35 62 6 26 8 27 28 14 12 -8 24 -21 26 -29z m149 21 c79 -48 37 -148 -52 -126 -14 4 -23 10 -21 15 3 5 -2 8 -12 7 -10 0 -16 6 -16 16 1 10 -2 15 -7 12 -5 -2 -11 6 -15 20 -7 31 12 69 32 62 9 -3 12 -1 9 4 -11 18 49 11 82 -10z m110 -16 c-3 -4 -1 -16 5 -28 10 -19 10 -20 -5 -7 -19 16 -23 41 -5 41 6 0 8 -3 5 -6z m62 -13 c8 -14 7 -20 -4 -25 -8 -3 -17 -1 -20 4 -4 6 0 10 7 10 8 1 6 6 -6 15 -17 13 -17 15 -3 15 9 0 21 -9 26 -19z m140 -88 c0 -11 -3 -13 -6 -5 -7 17 -28 15 -44 -5 -12 -15 -12 -16 4 -10 12 5 16 3 11 -5 -5 -8 -2 -9 10 -5 10 4 15 3 11 -3 -10 -16 -45 -12 -52 6 -4 11 1 22 12 30 27 20 55 18 54 -3z m-309 -62 c-23 -4 -36 -12 -38 -25 -3 -13 0 -16 9 -11 8 5 10 4 5 -3 -13 -22 13 -12 28 10 9 12 16 17 16 11 0 -22 -31 -44 -54 -37 -30 9 -31 11 -12 39 12 19 24 25 49 24 l32 -2 -35 -6z m199 -20 c68 -63 12 -158 -73 -125 -9 3 -13 10 -10 15 3 5 -1 6 -9 4 -18 -8 -45 24 -53 62 -14 71 84 101 145 44z" }),
            React__default['default'].createElement("path", { d: "M220 765 c-10 -12 -9 -16 4 -21 9 -3 25 -4 36 -1 17 4 19 2 13 -21 -6 -24 -5 -26 10 -13 22 18 21 27 -3 51 -24 24 -43 25 -60 5z" })),
        React__default['default'].createElement("g", { id: "layer104", fill: "#a55f2f", stroke: "none" },
            React__default['default'].createElement("path", { d: "M357 1013 c-4 -3 -7 -23 -7 -44 0 -41 -24 -58 -57 -41 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -33 -13 -10 -104 29 -122 14 -7 25 -18 25 -27 0 -8 7 -15 16 -15 12 0 14 -3 6 -12 -26 -33 -23 -73 10 -123 75 -116 289 -295 353 -295 39 0 123 41 165 81 59 57 93 172 73 249 -8 32 -13 36 -54 41 l-44 6 45 2 c45 3 44 3 -24 17 -43 8 -78 22 -92 35 -22 21 -27 21 -63 9 -22 -7 -50 -10 -64 -6 -29 7 -43 46 -27 76 15 27 12 47 -6 54 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -143 l45 -42 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -5 40 -28 65 -51z m110 -76 c0 -2 -13 2 -30 11 -16 9 -30 18 -30 21 0 2 14 -2 30 -11 17 -9 30 -18 30 -21z m-52 -123 c3 -29 1 -32 -19 -29 -30 4 -43 29 -35 62 6 26 8 27 29 13 13 -9 23 -27 25 -46z m149 39 c79 -48 37 -148 -52 -126 -14 4 -23 10 -21 15 3 5 -2 8 -12 7 -10 0 -16 6 -16 16 1 10 -2 15 -7 12 -5 -2 -11 6 -15 20 -7 31 12 69 32 62 9 -3 12 -1 9 4 -11 18 49 11 82 -10z m173 -30 c9 -17 7 -20 -16 -26 -31 -8 -57 5 -62 30 -5 25 64 22 78 -4z m140 -81 c0 -23 -22 -49 -41 -49 -28 0 -37 30 -14 46 22 17 55 18 55 3z m-291 -88 c-12 -33 -27 -42 -58 -34 -25 6 -26 12 -5 41 10 14 26 22 44 22 28 0 28 -1 19 -29z m180 0 c68 -63 12 -158 -73 -125 -9 3 -13 10 -10 15 3 5 -1 6 -9 4 -18 -8 -45 24 -53 62 -14 71 84 101 145 44z" }),
            React__default['default'].createElement("path", { d: "M983 782 c-28 -4 -64 -48 -56 -69 5 -12 16 -14 51 -10 53 6 92 38 73 60 -14 17 -38 24 -68 19z" }),
            React__default['default'].createElement("path", { d: "M800 772 c23 -15 120 -24 120 -12 0 5 -12 10 -27 10 -16 0 -46 3 -68 6 -27 3 -35 2 -25 -4z" }),
            React__default['default'].createElement("path", { d: "M1037 705 c-11 -7 -36 -16 -57 -20 l-37 -6 -5 -73 c-9 -144 -101 -244 -250 -271 -44 -8 -61 -41 -32 -62 53 -39 162 -23 252 37 118 79 184 220 167 357 -7 57 -10 60 -38 38z" })),
        React__default['default'].createElement("g", { id: "layer105", fill: "#4eb059", stroke: "none" },
            React__default['default'].createElement("path", { d: "M364 696 c-7 -19 -1 -29 21 -32 19 -3 19 20 0 36 -12 10 -16 9 -21 -4z" }),
            React__default['default'].createElement("path", { d: "M669 676 c7 -8 21 -12 31 -9 27 7 15 23 -17 23 -21 0 -23 -3 -14 -14z" }),
            React__default['default'].createElement("path", { d: "M821 586 c-9 -10 -8 -15 3 -19 14 -5 36 10 36 25 0 13 -27 9 -39 -6z" }),
            React__default['default'].createElement("path", { d: "M531 516 c-9 -11 -7 -15 8 -19 22 -5 31 0 31 20 0 17 -24 17 -39 -1z" }),
            React__default['default'].createElement("path", { d: "M260 812 c0 -5 7 -15 15 -22 8 -7 15 -8 15 -2 0 5 -7 15 -15 22 -8 7 -15 8 -15 2z" }),
            React__default['default'].createElement("path", { d: "M224 766 c-18 -14 -18 -15 9 -21 32 -8 42 -2 34 20 -8 19 -18 19 -43 1z" }),
            React__default['default'].createElement("path", { d: "M287 744 c-4 -4 -7 -14 -7 -23 0 -11 3 -12 11 -4 6 6 10 16 7 23 -2 6 -7 8 -11 4z" })),
        React__default['default'].createElement("g", { id: "layer106", fill: "#b05458", stroke: "none" },
            React__default['default'].createElement("path", { d: "M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z m-128 -245 c11 -13 10 -22 -3 -51 -10 -19 -17 -45 -17 -58 0 -25 3 -27 88 -56 l52 -19 0 25 c0 41 18 64 49 64 43 0 58 -23 42 -66 -7 -20 -11 -38 -8 -40 12 -12 176 -28 297 -28 74 -1 140 -4 147 -9 20 -13 36 -111 31 -195 -3 -61 -11 -93 -33 -138 -61 -126 -192 -214 -315 -214 -85 0 -114 18 -108 67 4 32 0 37 -63 83 -99 72 -193 164 -240 233 -22 34 -46 62 -52 62 -7 0 -13 10 -15 23 -2 13 -10 22 -21 22 -9 0 -26 6 -36 14 -19 14 -19 15 11 32 31 18 31 19 19 54 -24 68 -28 115 -10 130 14 12 22 11 50 -4 46 -25 65 -16 65 32 0 21 3 42 7 45 12 13 50 7 63 -8z" }),
            React__default['default'].createElement("path", { d: "M360 986 c0 -32 -20 -66 -40 -66 -5 0 -16 -3 -26 -7 -13 -5 -15 -3 -9 7 5 9 4 11 -3 6 -6 -4 -21 -2 -32 4 -17 9 -20 8 -20 -13 0 -36 20 -87 34 -87 17 0 48 -35 39 -43 -3 -4 2 -7 12 -7 12 0 15 -3 8 -12 -26 -33 -23 -75 9 -124 76 -117 294 -297 353 -293 16 2 35 5 40 8 6 3 12 6 15 6 13 2 87 45 105 62 49 44 75 113 77 203 2 70 -12 89 -66 92 -25 1 -22 2 14 8 42 7 43 7 10 9 -53 2 -109 20 -131 42 -19 19 -22 20 -64 4 -44 -17 -81 -12 -54 7 10 6 7 7 -8 3 -18 -5 -24 -1 -29 20 -4 15 -1 37 7 51 15 28 2 48 -27 42 -13 -2 -21 -15 -25 -42 -3 -21 -12 -42 -20 -47 -25 -17 -127 11 -114 31 3 5 0 12 -6 16 -8 4 -9 3 -5 -4 9 -16 -7 -15 -22 0 -17 17 -15 73 3 109 17 32 13 49 -11 49 -9 0 -14 -11 -14 -34z m-16 -106 c15 -17 48 -42 72 -56 24 -14 44 -28 44 -31 0 -2 -22 8 -48 24 -50 29 -112 77 -112 87 0 14 17 4 44 -24z m48 -167 c20 -23 29 -61 16 -69 -5 -3 -20 -3 -34 0 -19 5 -24 13 -24 40 0 49 15 59 42 29z m158 2 c59 -30 68 -94 19 -124 -25 -15 -37 -17 -60 -9 -16 5 -27 14 -24 18 3 4 -3 7 -13 6 -10 0 -16 6 -16 16 1 10 -2 16 -6 13 -4 -3 -11 2 -14 11 -25 66 41 107 114 69z m180 -30 c15 -18 4 -35 -26 -39 -22 -4 -54 21 -54 41 0 19 64 17 80 -2z m140 -93 c0 -25 -19 -42 -47 -42 -25 0 -32 27 -11 48 19 19 58 15 58 -6z m-155 -52 c7 0 27 -13 44 -29 37 -35 43 -87 12 -115 -22 -20 -98 -19 -94 1 2 7 -3 10 -11 7 -17 -6 -56 41 -56 68 0 43 44 84 78 72 8 -2 20 -4 27 -4z m-129 -14 c-1 -7 -9 -24 -17 -36 -12 -18 -21 -22 -42 -16 -31 7 -34 22 -10 48 19 21 72 25 69 4z" }),
            React__default['default'].createElement("path", { d: "M990 780 c-8 -5 -17 -7 -21 -4 -12 7 -48 -46 -42 -63 8 -21 86 -10 113 17 11 11 20 22 20 25 0 12 -57 33 -70 25z" }),
            React__default['default'].createElement("path", { d: "M803 774 c4 -4 14 -9 22 -10 8 -1 33 -5 55 -9 26 -4 40 -3 40 4 0 6 -13 11 -29 11 -16 0 -44 3 -62 6 -19 4 -30 3 -26 -2z" }),
            React__default['default'].createElement("path", { d: "M1050 696 c0 -17 -7 -26 -23 -30 -30 -7 -54 -53 -29 -53 10 0 23 4 30 10 7 5 15 7 18 5 3 -3 -8 -12 -24 -19 -21 -9 -29 -20 -30 -40 -3 -107 -89 -220 -187 -245 -15 -4 -30 -16 -35 -28 -8 -19 -9 -19 -9 -2 -1 16 -3 17 -18 5 -11 -10 -14 -10 -9 -1 5 8 -1 12 -19 12 -15 0 -35 4 -45 10 -27 14 -40 -28 -14 -47 53 -39 162 -23 252 37 118 79 184 220 167 357 -6 53 -25 74 -25 29z" })),
        React__default['default'].createElement("g", { id: "layer107", fill: "#d79c16", stroke: "none" },
            React__default['default'].createElement("path", { d: "M360 986 c0 -36 -21 -66 -46 -66 -24 0 86 -91 140 -116 28 -12 45 -23 38 -23 -23 -1 -106 46 -157 89 -28 23 -63 48 -79 56 l-28 16 7 -44 c6 -34 17 -52 54 -86 32 -29 42 -45 34 -50 -22 -14 -18 -67 9 -113 52 -88 291 -299 339 -299 46 0 136 44 179 89 53 54 72 106 71 195 0 70 -13 86 -70 87 -20 0 -56 4 -81 9 -34 6 -21 7 50 4 97 -3 102 0 18 11 -26 3 -63 17 -82 30 -34 23 -37 23 -72 9 -65 -27 -115 22 -83 82 15 28 2 48 -27 42 -14 -2 -20 -14 -22 -41 -4 -49 -31 -63 -89 -48 -62 17 -93 46 -93 87 0 19 7 48 15 65 17 32 13 49 -11 49 -9 0 -14 -11 -14 -34z m39 -282 c35 -44 23 -72 -25 -60 -19 5 -24 13 -24 40 0 53 17 60 49 20z m172 -3 c60 -60 27 -127 -59 -122 -33 2 -82 53 -82 87 0 68 87 89 141 35z m160 -17 c11 -14 10 -18 -6 -30 -10 -8 -23 -14 -29 -14 -15 0 -46 31 -46 47 0 19 64 17 81 -3z m139 -92 c0 -25 -19 -42 -47 -42 -25 0 -32 27 -11 48 19 19 58 15 58 -6z m-153 -52 c28 0 73 -56 73 -91 0 -46 -25 -69 -73 -69 -31 0 -46 7 -73 34 -35 35 -42 63 -23 97 12 23 47 40 67 33 8 -2 20 -4 29 -4z m-127 -14 c0 -8 -8 -24 -18 -36 -14 -18 -25 -22 -45 -16 -31 7 -34 22 -10 48 19 21 73 25 73 4z" })),
        React__default['default'].createElement("g", { id: "layer108", fill: "#ee4e7a", stroke: "none" },
            React__default['default'].createElement("path", { d: "M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z m-128 -245 c11 -13 10 -22 -3 -51 -10 -19 -17 -45 -17 -58 0 -25 3 -27 88 -56 l52 -19 0 25 c0 41 18 64 49 64 43 0 58 -23 42 -66 -7 -20 -11 -38 -8 -40 12 -12 176 -28 297 -28 74 -1 140 -4 147 -9 20 -13 36 -111 31 -195 -3 -61 -11 -93 -33 -138 -61 -126 -192 -214 -315 -214 -85 0 -114 18 -108 67 4 32 0 37 -63 83 -99 72 -193 164 -240 233 -23 35 -47 61 -55 59 -9 -2 -14 6 -14 23 0 20 -5 25 -24 25 -13 0 -29 7 -36 15 -10 12 -7 18 18 32 29 16 29 18 17 53 -24 68 -28 115 -10 130 14 12 22 11 50 -4 46 -25 65 -16 65 32 0 21 3 42 7 45 12 13 50 7 63 -8z" }),
            React__default['default'].createElement("path", { d: "M1050 690 c0 -11 -6 -20 -14 -20 -17 0 -46 -27 -46 -42 0 -6 12 -8 30 -4 39 7 38 -1 -2 -19 -28 -12 -29 -14 -10 -15 12 0 22 -4 22 -10 0 -5 -8 -10 -19 -10 -15 0 -20 -10 -25 -45 -13 -82 -94 -173 -181 -202 -18 -6 -29 -17 -29 -27 1 -9 -2 -16 -7 -16 -5 0 -9 6 -9 13 0 9 -3 8 -9 -2 -7 -11 -10 -11 -17 1 -11 18 -80 33 -88 19 -10 -15 4 -40 27 -47 12 -4 45 -7 74 -7 155 3 315 162 323 323 4 78 0 130 -10 130 -5 0 -10 -9 -10 -20z" }),
            React__default['default'].createElement("path", { d: "M3304 920 c-36 -14 -54 -50 -54 -106 0 -91 50 -129 186 -141 l76 -6 -7 -36 c-8 -47 -46 -81 -90 -81 -24 0 -35 5 -40 19 -6 19 -59 36 -77 25 -16 -10 -38 -71 -32 -87 11 -29 238 -38 300 -12 53 22 64 60 64 214 0 122 1 132 22 151 30 27 15 52 -38 63 -31 6 -43 4 -65 -12 -26 -20 -27 -20 -89 0 -65 20 -121 23 -156 9z m189 -92 c9 -11 17 -35 17 -53 0 -25 -5 -34 -22 -39 -41 -11 -75 -6 -98 12 -19 16 -22 24 -16 56 11 58 78 72 119 24z" }),
            React__default['default'].createElement("path", { d: "M5171 916 c-78 -43 -63 -185 24 -222 19 -8 69 -17 110 -21 62 -5 75 -9 75 -23 0 -31 -22 -80 -40 -90 -30 -16 -78 -12 -92 9 -7 10 -27 21 -45 25 -29 7 -33 4 -48 -24 -26 -50 -17 -74 30 -82 81 -14 218 -9 255 10 52 26 60 50 60 198 0 116 2 134 20 157 25 31 26 54 3 61 -61 17 -80 16 -105 -3 -25 -20 -26 -20 -81 -1 -65 23 -131 25 -166 6z m183 -77 c20 -16 26 -29 26 -59 0 -37 -2 -39 -35 -46 -72 -13 -117 24 -95 80 18 47 62 58 104 25z" }),
            React__default['default'].createElement("path", { d: "M6277 916 c-84 -31 -113 -89 -105 -211 7 -103 45 -167 123 -208 49 -25 201 -31 228 -8 19 15 22 43 7 71 -10 18 -13 18 -51 5 -62 -22 -122 -19 -145 6 -16 18 -19 37 -19 124 0 95 2 105 24 129 33 35 69 40 135 18 31 -10 58 -17 61 -14 3 3 5 20 5 37 0 25 -6 35 -27 45 -43 19 -190 23 -236 6z" }),
            React__default['default'].createElement("path", { d: "M6750 921 c-100 -20 -139 -76 -140 -196 0 -100 15 -143 65 -192 50 -47 126 -70 198 -58 91 16 127 60 127 157 0 87 -8 92 -144 96 l-116 4 6 27 c9 36 19 53 43 75 26 23 101 24 156 2 37 -16 40 -16 52 0 7 10 13 23 13 29 0 48 -146 79 -260 56z m115 -264 c14 -11 17 -21 11 -47 -3 -18 -11 -39 -17 -47 -16 -19 -73 -16 -91 5 -18 20 -32 77 -23 92 9 15 98 12 120 -3z" }),
            React__default['default'].createElement("path", { d: "M1480 896 c0 -21 6 -25 33 -28 l32 -3 3 -242 2 -242 -32 -3 c-28 -2 -33 -7 -33 -28 l0 -25 190 0 c160 0 197 3 237 18 57 22 86 59 94 119 19 140 -91 238 -269 238 l-57 0 0 69 c0 91 5 101 45 101 37 0 48 10 39 34 -5 14 -27 16 -145 16 l-139 0 0 -24z m351 -293 c28 -28 35 -89 15 -136 -18 -44 -67 -70 -124 -65 l-37 3 -3 114 -3 113 66 -4 c49 -3 71 -9 86 -25z" }),
            React__default['default'].createElement("path", { d: "M2053 905 c-7 -20 5 -32 37 -37 l25 -3 3 -131 c3 -144 -5 -180 -43 -194 -14 -5 -25 -16 -25 -24 0 -28 27 -37 107 -34 l78 3 5 190 5 190 28 3 c23 3 28 8 25 25 -3 21 -8 22 -121 25 -100 2 -118 0 -124 -13z" }),
            React__default['default'].createElement("path", { d: "M2350 897 c0 -13 34 -70 75 -128 41 -57 88 -130 105 -161 l31 -58 -61 0 c-33 0 -76 6 -94 14 -41 17 -56 6 -56 -41 l0 -33 183 2 182 3 -3 24 c-1 14 -35 77 -76 140 -78 124 -106 174 -106 191 0 15 79 12 136 -5 27 -8 52 -15 55 -15 11 0 16 46 8 68 -8 21 -13 22 -194 22 l-185 0 0 -23z" }),
            React__default['default'].createElement("path", { d: "M2800 894 c0 -17 26 -63 71 -125 66 -92 128 -194 129 -211 0 -14 -117 -8 -154 7 -36 15 -36 15 -47 -12 -22 -57 -20 -58 179 -61 l182 -2 0 23 c0 13 -14 45 -32 73 -69 107 -158 257 -158 265 0 14 82 10 138 -6 29 -9 57 -13 62 -10 17 10 12 72 -6 79 -9 3 -94 6 -190 6 l-174 0 0 -26z" }),
            React__default['default'].createElement("path", { d: "M3750 896 c0 -19 6 -25 28 -28 l27 -3 3 -242 2 -243 -30 0 c-27 0 -30 -3 -30 -30 l0 -30 235 0 235 0 5 23 c7 26 -9 77 -24 77 -5 0 -40 -7 -76 -15 -37 -9 -93 -15 -124 -13 l-56 3 -3 92 -3 92 113 3 113 3 3 33 3 32 -115 0 -116 0 0 88 c0 123 4 132 52 132 35 0 39 2 36 23 -3 21 -6 22 -140 25 l-138 3 0 -25z" }),
            React__default['default'].createElement("path", { d: "M4260 895 c0 -21 5 -25 30 -25 l30 0 0 -153 c0 -159 -4 -177 -43 -177 -14 0 -18 -6 -15 -27 3 -28 3 -28 91 -31 l87 -3 0 113 c0 62 3 150 7 196 l6 82 29 0 c25 0 29 4 26 23 -3 21 -7 22 -125 25 l-123 3 0 -26z" }),
            React__default['default'].createElement("path", { d: "M4560 896 c0 -19 6 -25 28 -28 l27 -3 3 -131 c3 -140 -6 -183 -38 -191 -24 -6 -27 -48 -4 -57 9 -3 45 -6 80 -6 57 0 64 2 64 20 0 25 -3 25 56 -2 62 -27 150 -30 187 -5 36 24 47 72 47 214 0 128 4 153 25 153 16 0 26 25 18 45 -4 13 -20 15 -82 13 l-76 -3 -6 -145 c-4 -80 -12 -157 -18 -173 -22 -56 -100 -57 -121 -1 -6 15 -9 81 -8 148 l3 121 28 3 c21 3 27 9 27 28 l0 24 -120 0 -120 0 0 -24z" }),
            React__default['default'].createElement("path", { d: "M5617 913 c-17 -17 -6 -42 21 -45 l27 -3 3 -143 3 -143 -31 -29 c-55 -52 -38 -70 66 -70 57 0 64 2 64 20 0 25 -3 25 56 -2 33 -14 69 -22 112 -22 55 0 66 4 90 27 27 27 27 30 30 170 3 162 7 187 27 187 19 0 27 16 20 40 -6 19 -14 21 -83 18 l-77 -3 -6 -150 c-3 -89 -10 -159 -18 -173 -27 -51 -107 -46 -122 8 -9 31 -11 217 -3 248 4 15 14 22 30 22 27 0 37 12 28 34 -5 13 -25 16 -118 16 -62 0 -116 -3 -119 -7z" }),
            React__default['default'].createElement("path", { d: "M2120 407 c-33 -17 -39 -66 -10 -92 24 -22 101 -25 124 -5 21 17 20 53 -1 78 -23 27 -80 36 -113 19z" }),
            React__default['default'].createElement("path", { d: "M4327 408 c-25 -9 -28 -14 -25 -52 3 -37 6 -42 40 -53 45 -15 104 -1 113 26 10 32 -15 70 -54 81 -41 11 -38 11 -74 -2z" })),
        React__default['default'].createElement("g", { id: "layer109", fill: "#e4934e", stroke: "none" },
            React__default['default'].createElement("path", { d: "M235 898 c8 -48 18 -64 45 -73 11 -3 22 -15 25 -26 4 -10 11 -17 16 -14 13 9 11 -10 -5 -49 -13 -32 -12 -37 14 -82 55 -98 270 -286 337 -296 18 -2 30 -1 27 3 -2 4 2 10 8 12 7 3 3 6 -8 6 -37 2 -84 54 -84 93 0 18 4 38 8 44 14 21 52 34 82 29 46 -8 69 -26 87 -67 15 -34 18 -36 33 -23 22 20 60 97 60 121 -1 18 -1 18 -12 -1 -20 -36 -35 -41 -62 -22 -15 11 -16 18 -8 34 14 25 59 38 78 22 12 -10 14 -3 14 44 0 63 3 61 -112 72 -43 5 -65 11 -61 18 3 6 1 7 -5 3 -7 -4 -38 -2 -69 3 -32 6 -74 13 -93 16 -19 3 -36 10 -38 15 -2 5 -9 7 -17 4 -22 -9 -95 29 -165 86 -36 28 -73 56 -84 62 -17 9 -18 7 -11 -34z m298 -167 c58 -22 86 -91 55 -134 -27 -36 -110 -24 -144 21 -15 19 -18 70 -6 88 9 14 43 33 59 34 6 0 23 -4 36 -9z m-143 -11 c9 -6 17 -5 21 2 4 7 9 7 13 -1 4 -6 3 -11 -3 -11 -6 0 -7 -14 -4 -34 6 -39 -6 -50 -40 -37 -29 11 -37 28 -30 64 6 28 18 33 43 17z m331 -19 c14 -2 19 -34 8 -47 -18 -22 -55 -17 -73 11 -9 14 -14 29 -12 34 5 7 43 8 77 2z m99 -36 c10 -12 10 -15 -4 -15 -9 0 -16 7 -16 15 0 8 2 15 4 15 2 0 9 -7 16 -15z m-230 -140 c0 -35 -23 -57 -55 -53 -24 2 -30 8 -30 28 0 26 27 46 64 46 15 0 21 -7 21 -21z" }),
            React__default['default'].createElement("path", { d: "M960 767 c-17 -8 -25 -21 -25 -37 0 -22 4 -25 38 -24 56 2 102 52 61 68 -24 9 -46 7 -74 -7z" }),
            React__default['default'].createElement("path", { d: "M853 763 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z" }),
            React__default['default'].createElement("path", { d: "M1050 693 c0 -13 -6 -23 -14 -23 -17 0 -46 -27 -46 -42 0 -6 12 -8 30 -4 39 7 38 -1 -2 -19 -28 -12 -29 -14 -10 -15 12 0 22 -4 22 -10 0 -5 -8 -10 -19 -10 -15 0 -20 -10 -25 -45 -13 -82 -94 -173 -181 -202 -18 -6 -29 -17 -29 -27 1 -9 -2 -16 -7 -16 -5 0 -9 6 -9 13 0 9 -3 8 -9 -2 -7 -11 -10 -11 -17 1 -5 9 -26 18 -46 22 -33 6 -38 4 -38 -12 0 -32 27 -45 90 -45 134 2 266 106 314 248 19 55 23 165 7 192 -10 16 -10 16 -11 -4z" })),
        React__default['default'].createElement("g", { id: "layer110", fill: "#ffce01", stroke: "none" },
            React__default['default'].createElement("path", { d: "M230 928 c0 -34 23 -89 41 -99 11 -6 30 -20 41 -31 19 -19 19 -22 5 -59 -15 -38 -15 -39 22 -96 44 -66 147 -168 240 -236 63 -47 92 -56 121 -37 12 8 11 10 -6 10 -36 0 -84 53 -84 92 0 39 7 51 37 67 49 25 114 -2 140 -60 15 -35 18 -37 33 -24 22 20 60 97 60 121 -1 18 -1 18 -12 -1 -20 -36 -35 -41 -62 -22 -15 11 -16 18 -8 34 14 25 59 38 78 22 12 -10 14 -2 14 45 0 31 -1 56 -2 56 -2 0 -46 7 -98 15 -312 47 -353 60 -455 141 -85 68 -105 80 -105 62z m303 -197 c79 -30 92 -139 19 -156 -58 -12 -122 35 -122 89 0 36 7 48 35 64 25 14 37 15 68 3z m-143 -11 c9 -6 17 -5 21 2 4 7 9 7 13 -1 4 -6 3 -11 -3 -11 -6 0 -7 -14 -4 -34 6 -39 -6 -50 -40 -37 -29 11 -37 28 -30 64 6 28 18 33 43 17z m334 -26 c9 -8 16 -19 16 -23 0 -14 -25 -31 -46 -31 -23 0 -59 44 -49 60 10 16 62 12 79 -6z m96 -29 c10 -12 10 -15 -4 -15 -9 0 -16 7 -16 15 0 8 2 15 4 15 2 0 9 -7 16 -15z m-230 -138 c0 -37 -22 -59 -55 -55 -60 6 -25 77 38 78 11 0 17 -8 17 -23z" })),
        React__default['default'].createElement("g", { id: "layer111", fill: "#e5c16d", stroke: "none" },
            React__default['default'].createElement("path", { d: "M322 668 c28 -51 122 -154 192 -209 l51 -41 -52 49 c-31 29 -53 58 -53 70 0 25 -25 47 -44 40 -10 -4 -28 14 -56 55 -22 33 -40 64 -40 69 0 5 -5 9 -11 9 -5 0 0 -19 13 -42z" }),
            React__default['default'].createElement("path", { d: "M1063 615 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z" }),
            React__default['default'].createElement("path", { d: "M954 358 l-29 -33 33 29 c17 17 32 31 32 33 0 8 -8 1 -36 -29z" }),
            React__default['default'].createElement("path", { d: "M650 293 c0 -21 36 -33 97 -32 l58 1 -40 10 c-22 5 -53 10 -70 10 -16 0 -33 6 -37 12 -6 8 -8 8 -8 -1z" }))));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$E,
    GroupsIcon: Icon$F,
    HamburgerIcon: Icon$G,
    HamburgerCloseIcon: Icon$H,
    HomeIcon: Icon$I,
    IfoIcon: Icon$J,
    InfoIcon: Icon$K,
    LanguageIcon: Icon$L,
    LogoIcon: Logo,
    MoonIcon: Icon$M,
    MoreIcon: Icon$N,
    NftIcon: Icon$O,
    PoolIcon: Icon$P,
    SunIcon: Icon$Q,
    TelegramIcon: Icon$R,
    TicketIcon: Icon$S,
    TradeIcon: Icon$T,
    TwitterIcon: Icon$U
});

var MenuButton = styled__default['default'](Button)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$w;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$m, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "6px" }, isPushed ? (React__default['default'].createElement(Icon$H, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$G, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pizza home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pizza home page" }, innerLogo))));
};
var templateObject_1$x;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://swap.pizzafinance.app",
            },
            {
                label: "Liquidity",
                href: "https://swap.pizzafinance.app/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://info.pizzafinance.app",
            },
            {
                label: "Tokens",
                href: "https://info.pizzafinance.app/tokens",
            },
            {
                label: "Pairs",
                href: "https://info.pizzafinance.app/pairs",
            },
            {
                label: "Accounts",
                href: "https://info.pizzafinance.app/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/pizzafinancebsc",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "Pizza Group",
                href: "https://t.me/PizzaFinance",
            },
            {
                label: "Announcements",
                href: "https://t.me/PizzaFinanceNews",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Pizza_Finance",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var MenuEntry = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  font-weight: 500;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  svg {\n    fill: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ",
    ";\n  color: ", ";\n  box-shadow: ",
    ";\n  font-weight: 500;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n  svg {\n    fill: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  // Safari fix\n  flex-shrink: 0;\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return secondary ? theme.colors.background : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  font-weight: 600;\n  flex-grow: 1;\n"], ["\n  color: ",
    ";\n  transition: color 0.4s;\n  font-weight: 600;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.textSubtle : "transparent";
});
var templateObject_1$y, templateObject_2$a;

var Container$2 = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ",
    ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$7, null) : React__default['default'].createElement(Icon$6, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$z, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$A;

var getColor$2 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize$1 = function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "10px";
};
var CrText = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor$2, getFontSize$1, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
CrText.defaultProps = {
    color: "text",
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$i, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://info.cheeseswap.app/token/0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB", target: "_blank" },
                React__default['default'].createElement(Icon$r, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = {
                    width: "24px",
                    color: "textSubtle",
                    style: { cursor: "pointer" },
                };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            }))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); }))),
        React__default['default'].createElement(CrText, { color: "text" }, "Copyright | 2021. \u00A9 Swapgate Ltd. London, UK"),
        React__default['default'].createElement(CrText, { color: "text" }, "Reg No: 12864908 | License: GNU-AGPL v3.0 ")));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$6, templateObject_4$3;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ",
    ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$V,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$Y,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$W,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$X,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$Z,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$_,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$k, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
            } }, account),
        React__default['default'].createElement(Link, { fontSize: "14px", href: "https://bscscan.com/address/" + account, target: "blank", rel: "noopener noreferrer", mb: "32px" },
            React__default['default'].createElement(Icon$p, { width: "20px", color: "primary", mr: "4px" }),
            "View on BscScan"),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account, logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account
        ? account.substring(0, 4) + "..." + account.substring(account.length - 4)
        : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Wrapper$1 = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            if (currentOffset < refPrevOffset.current) {
                // Has scroll up
                setShowMenu(true);
            }
            else {
                // Has scroll down
                setShowMenu(false);
            }
            refPrevOffset.current = currentOffset;
        };
        var debouncedHandleScroll = debounce__default['default'](handleScroll, 300, {
            leading: true,
            trailing: true,
        });
        window.addEventListener("scroll", debouncedHandleScroll);
        return function () {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout })),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$F, templateObject_2$d, templateObject_3$7, templateObject_4$4, templateObject_5$2;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [
        id,
        removeHandler,
    ]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, description: description, variant: alertTypeMap[type], onClick: handleRemove }))));
};
var templateObject_1$G;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$H;

var ResetCSS = styled.createGlobalStyle(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Heebo', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Heebo', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$I;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#EF4E7B",
    primaryBright: "#FD5E8A",
    primaryDark: "#D8446D",
    secondary: "#FD5A71",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FFFBFB", backgroundDisabled: "#EAEDF1", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#ECE6DB", tertiary: "#F7E7E8", text: "#82632D", textDisabled: "#BDC2C4", textSubtle: "#967232", borderColor: "#E9EAEB", card: "#FFFFFF" });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#F35369", background: "#1B1916", backgroundDisabled: "#313138", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#38373A", primaryDark: "#0098A1", tertiary: "#2C2C37", text: "#DABC86", textDisabled: "#666671", textSubtle: "#FFD283", borderColor: "#524B63", card: "#27262c" });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -2px 0px rgba(187, 39, 80, 0.4)",
        boxShadowActive: "inset 0px -2px 0px rgba(187, 39, 80, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 0px 10px rgba(9, 31, 67, 0.1)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 0px 10px rgba(9, 31, 67, 0.1)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowDownIcon = Icon$5;
exports.ArrowDropDownIcon = Icon$6;
exports.ArrowDropUpIcon = Icon$7;
exports.ArrowForwardIcon = Icon$8;
exports.AutoRenewIcon = Icon$9;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$a;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$c;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$b;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$d;
exports.ChevronDownIcon = Icon$e;
exports.ChevronRightIcon = Icon$f;
exports.ChevronUpIcon = Icon$g;
exports.CloseIcon = Icon$h;
exports.CogIcon = Icon$i;
exports.CommunityIcon = Icon$j;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$k;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$l;
exports.LogoIcon = Icon$m;
exports.LogoRoundIcon = Icon$n;
exports.Menu = Menu;
exports.MinusIcon = Icon$o;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$p;
exports.PancakeRoundIcon = Icon$r;
exports.PancakesIcon = Icon$q;
exports.Progress = Progress;
exports.ProgressBunny = Icon$u;
exports.Radio = Radio;
exports.RemoveIcon = Icon$s;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$y;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$z;
exports.SyncAltIcon = Icon$A;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$w;
exports.TicketRound = Icon$x;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$t;
exports.WarningIcon = Icon$B;
exports.Won = Icon$v;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
