"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const DatePicker = props => {
  const id = props.id;

  const onChangeCallBack = e => {
    props.onChange(e.target.value);
  };

  return /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: id,
    onChange: e => {
      onChangeCallBack(e);
    }
  });
};

var _default = DatePicker;
exports.default = _default;