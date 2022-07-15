"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustonFontColor = exports.Terciary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/etiquetas/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" },
        fontBackground: { control: "color" },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "normal",
    label: "Example text",
    color: "primary",
    fontBackground: "orange",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = { size: "h1", label: "Example text", color: "secondary" };
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "h2",
    label: "Example text",
    color: "secondary",
};
exports.Terciary = Template.bind({});
exports.Terciary.args = {
    size: "normal",
    label: "Example text",
    color: "secondary",
    allCaps: true,
};
exports.CustonFontColor = Template.bind({});
exports.CustonFontColor.args = {
    size: "normal",
    label: "Example text",
    color: "secondary",
    allCaps: true,
    fontBackground: "pink",
};
