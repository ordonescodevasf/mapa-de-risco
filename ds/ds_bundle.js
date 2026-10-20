/* @ds-bundle: {"format":4,"namespace":"GOVBRDesignSystem_783538","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"CallToAction","sourcePath":"components/actions/CallToAction.jsx"},{"name":"MagicButton","sourcePath":"components/actions/MagicButton.jsx"},{"name":"SignIn","sourcePath":"components/actions/SignIn.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Item","sourcePath":"components/data/Item.jsx"},{"name":"List","sourcePath":"components/data/List.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"TableHeaderColumn","sourcePath":"components/data/TableHeaderColumn.jsx"},{"name":"Loading","sourcePath":"components/feedback/Loading.jsx"},{"name":"Message","sourcePath":"components/feedback/Message.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ControlOption","sourcePath":"components/forms/ControlOption.jsx"},{"name":"DateTimeItem","sourcePath":"components/forms/DateTimeItem.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/layout/Accordion.jsx"},{"name":"Carousel","sourcePath":"components/layout/Carousel.jsx"},{"name":"Cookiebar","sourcePath":"components/layout/Cookiebar.jsx"},{"name":"DateTimePicker","sourcePath":"components/layout/DateTimePicker.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Grid","sourcePath":"components/layout/Grid.jsx"},{"name":"Header","sourcePath":"components/layout/Header.jsx"},{"name":"Icon","sourcePath":"components/layout/Icon.jsx"},{"name":"Image","sourcePath":"components/layout/Image.jsx"},{"name":"Modal","sourcePath":"components/layout/Modal.jsx"},{"name":"Scrim","sourcePath":"components/layout/Scrim.jsx"},{"name":"Upload","sourcePath":"components/layout/Upload.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"PaginationPage","sourcePath":"components/navigation/PaginationPage.jsx"},{"name":"SkipLink","sourcePath":"components/navigation/SkipLink.jsx"},{"name":"SkipLinkItem","sourcePath":"components/navigation/SkipLinkItem.jsx"},{"name":"Step","sourcePath":"components/navigation/Step.jsx"},{"name":"StepItem","sourcePath":"components/navigation/StepItem.jsx"},{"name":"Tab","sourcePath":"components/navigation/Tab.jsx"},{"name":"TabItem","sourcePath":"components/navigation/TabItem.jsx"},{"name":"Wizard","sourcePath":"components/navigation/Wizard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"90e99ff6e084","components/actions/CallToAction.jsx":"4a4613652c9e","components/actions/MagicButton.jsx":"b8b1eb5e21fb","components/actions/SignIn.jsx":"29e8e51ef517","components/data/Avatar.jsx":"6bf7e3b7a974","components/data/Card.jsx":"4b18a14bc12e","components/data/Item.jsx":"79535fcd1bf3","components/data/List.jsx":"df403551f7e9","components/data/Table.jsx":"c4fb98e6efed","components/data/TableHeaderColumn.jsx":"f42288c2a569","components/feedback/Loading.jsx":"606195a8dcc4","components/feedback/Message.jsx":"db2b063fb62a","components/feedback/Notification.jsx":"be723ac932f6","components/feedback/Tag.jsx":"f601377676a2","components/feedback/Tooltip.jsx":"bad9d4e34025","components/forms/Checkbox.jsx":"fd6637972599","components/forms/ControlOption.jsx":"cc3d4660dac2","components/forms/DateTimeItem.jsx":"32dd34780682","components/forms/Input.jsx":"18464050eb15","components/forms/Radio.jsx":"ad4002ab6f6a","components/forms/SearchInput.jsx":"f1080ca67f91","components/forms/Select.jsx":"b183c4a0ea74","components/forms/Slider.jsx":"affa92b02c1d","components/forms/Switch.jsx":"2832401a1b6a","components/forms/Textarea.jsx":"ce1ae0ec8cd0","components/layout/Accordion.jsx":"33766c07c009","components/layout/Carousel.jsx":"913b351ba0f1","components/layout/Cookiebar.jsx":"de5642e9aeb0","components/layout/DateTimePicker.jsx":"4a7dfcfb2adc","components/layout/Divider.jsx":"f2349b5dded0","components/layout/Footer.jsx":"8918bc5e0835","components/layout/Grid.jsx":"f0ae1ad09162","components/layout/Header.jsx":"3faf36716885","components/layout/Icon.jsx":"b57ead9c0efb","components/layout/Image.jsx":"b95f847d68e0","components/layout/Modal.jsx":"c28e5ae2612d","components/layout/Scrim.jsx":"4e788fd706d0","components/layout/Upload.jsx":"8d9f16cab909","components/navigation/Breadcrumb.jsx":"a7870658592f","components/navigation/Menu.jsx":"9c8e473d1e84","components/navigation/Pagination.jsx":"d940ecdf9057","components/navigation/PaginationPage.jsx":"d8ae112d7239","components/navigation/SkipLink.jsx":"12053b8ef9f7","components/navigation/SkipLinkItem.jsx":"ddc38a63731c","components/navigation/Step.jsx":"5c2d3407c9cd","components/navigation/StepItem.jsx":"2c8b54454db7","components/navigation/Tab.jsx":"f9b7b0a3135a","components/navigation/TabItem.jsx":"9929533ab8b3","components/navigation/Wizard.jsx":"f66e026b72ea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GOVBRDesignSystem_783538 = window.GOVBRDesignSystem_783538 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "medium",
  icon,
  circle = false,
  block = false,
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  className = "",
  ...rest
}) {
  const cls = ["br-button", variant, size, circle && "circle", block && "block", loading && "loading", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading,
    onClick: onClick
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    "aria-hidden": "true"
  }), !circle && children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/CallToAction.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CallToAction({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `br-cta ${variant} ${className}`,
    disabled: disabled,
    onClick: onClick
  }, rest), children, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { CallToAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CallToAction.jsx", error: String((e && e.message) || e) }); }

// components/actions/MagicButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MagicButton({
  children = "Simplifique com IA",
  onClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `br-magic-button ${className}`,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-magic-sparkles",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { MagicButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/MagicButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/SignIn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SignIn({
  children = "Entrar com gov.br",
  onClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `br-sign-in ${className}`,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right-to-bracket",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { SignIn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/SignIn.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function Avatar({
  src,
  alt = "",
  size = "medium",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `br-avatar ${size} ${className}`
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-user",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  subtitle,
  avatar,
  footer,
  children,
  hover = false,
  className = "",
  ...rest
}) {
  const showHeader = title || subtitle || avatar;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `br-card ${hover ? "hover" : ""} ${className}`
  }, rest), showHeader && /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, avatar && /*#__PURE__*/React.createElement(__ds_scope.Avatar, avatar), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--fs-up-2)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-secondary)"
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    className: "card-content"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "card-footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Item.jsx
try { (() => {
function Item({
  children,
  selected = false,
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-item ${selected ? "selected" : ""} ${className}`,
    onClick: onClick,
    role: "option",
    "aria-selected": selected
  }, children);
}
Object.assign(__ds_scope, { Item });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Item.jsx", error: String((e && e.message) || e) }); }

// components/data/List.jsx
try { (() => {
function List({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-list ${className}`,
    role: "listbox"
  }, children);
}
Object.assign(__ds_scope, { List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/List.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  className = ""
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: `br-table ${className}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, row.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/TableHeaderColumn.jsx
try { (() => {
function TableHeaderColumn({
  children,
  sortable = false,
  sorted,
  onSort,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("th", {
    className: className,
    onClick: sortable ? onSort : undefined,
    style: sortable ? {
      cursor: "pointer"
    } : undefined
  }, children, sortable && /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-sort${sorted === "asc" ? "-up" : sorted === "desc" ? "-down" : ""}`,
    style: {
      marginLeft: 6,
      fontSize: 11
    }
  }));
}
Object.assign(__ds_scope, { TableHeaderColumn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableHeaderColumn.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loading.jsx
try { (() => {
function Loading({
  size = "medium",
  label,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `br-loading ${size === "small" ? "small" : ""} ${className}`,
    role: "status",
    "aria-label": label || "Carregando"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Message.jsx
try { (() => {
const ICONS = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-exclamation"
};
function Message({
  children,
  type = "info",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-message ${type} ${className}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${ICONS[type] || ICONS.info}`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Message });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Message.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
const ICONS = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  danger: "circle-exclamation"
};
function Notification({
  title,
  children,
  type = "info",
  onClose,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-notification ${type} ${className}`,
    role: "alert"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${ICONS[type] || ICONS.info}`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", null, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  })));
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  variant,
  type,
  className = ""
}) {
  const cls = ["br-tag", variant, type, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  text,
  className = ""
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: `br-tooltip ${className}`,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    className: "tooltip-bubble"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Checkbox({
  label,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `br-checkbox ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fid
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ControlOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function ControlOption({
  type = "checkbox",
  label,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  const cls = type === "radio" ? "br-radio" : "br-checkbox";
  return /*#__PURE__*/React.createElement("div", {
    className: `${cls} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    id: fid
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label));
}
Object.assign(__ds_scope, { ControlOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ControlOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateTimeItem.jsx
try { (() => {
function DateTimeItem({
  day,
  selected = false,
  disabled = false,
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `dt-day ${selected ? "selected" : ""} ${className}`,
    style: disabled ? {
      opacity: 0.4,
      cursor: "not-allowed"
    } : {
      cursor: "pointer"
    },
    onClick: disabled ? undefined : onClick
  }, day);
}
Object.assign(__ds_scope, { DateTimeItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateTimeItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Input({
  label,
  hint,
  error,
  success,
  size = "medium",
  icon,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  const cls = ["br-input", size, error && "danger", success && "success", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${icon}`,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid
  }, rest))), error && /*#__PURE__*/React.createElement("div", {
    className: "feedback danger-text"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), error), success && /*#__PURE__*/React.createElement("div", {
    className: "feedback success-text"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check"
  }), success), hint && !error && !success && /*#__PURE__*/React.createElement("div", {
    className: "feedback"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Radio({
  label,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `br-radio ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: fid
  }, rest)), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  placeholder = "O que você procura?",
  onSearch,
  className = "",
  ...rest
}) {
  const [value, setValue] = React.useState("");
  return /*#__PURE__*/React.createElement("form", {
    className: `br-search ${className}`,
    onSubmit: e => {
      e.preventDefault();
      onSearch?.(value);
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    value: value,
    onChange: e => setValue(e.target.value)
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Buscar"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass"
  })));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Select({
  label,
  hint,
  children,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `br-select ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest), children), hint && /*#__PURE__*/React.createElement("div", {
    className: "feedback"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
const {
  useState
} = React;
function Slider({
  label,
  min = 0,
  max = 100,
  defaultValue = 50,
  showValue = true,
  onChange,
  className = ""
}) {
  const [value, setValue] = useState(defaultValue);
  return /*#__PURE__*/React.createElement("div", {
    className: `br-slider ${className}`
  }, label && /*#__PURE__*/React.createElement("label", null, label, showValue ? `: ${value}` : ""), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: value,
    onChange: e => {
      setValue(+e.target.value);
      onChange?.(+e.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "slider-labels"
  }, /*#__PURE__*/React.createElement("span", null, min), /*#__PURE__*/React.createElement("span", null, max)));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  className = ""
}) {
  const [on, setOn] = useState(checked ?? defaultChecked);
  const isOn = checked ?? on;
  function toggle() {
    if (checked === undefined) setOn(v => !v);
    onChange?.(!isOn);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `br-switch ${className}`,
    onClick: toggle,
    role: "switch",
    "aria-checked": isOn,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", {
    className: `switch-track ${isOn ? "on" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "switch-thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fid = id || useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `br-textarea ${error ? "danger" : ""} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid
  }, rest)), error && /*#__PURE__*/React.createElement("div", {
    className: "feedback danger-text"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), error), hint && !error && /*#__PURE__*/React.createElement("div", {
    className: "feedback"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  sections = [],
  className = ""
}) {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: `br-accordion ${className}`
  }, sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "accordion-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-header",
    onClick: () => setOpen(open === i ? -1 : i)
  }, s.title, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-chevron-${open === i ? "up" : "down"}`
  })), open === i && /*#__PURE__*/React.createElement("div", {
    className: "accordion-panel"
  }, s.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/Carousel.jsx
try { (() => {
const {
  useState
} = React;
function Carousel({
  slides = [],
  className = ""
}) {
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: `br-carousel ${className}`
  }, /*#__PURE__*/React.createElement("div", null, slides[active]), /*#__PURE__*/React.createElement("div", {
    className: "carousel-bullets"
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `bullet ${i === active ? "active" : ""}`,
    onClick: () => setActive(i)
  }))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Cookiebar.jsx
try { (() => {
function Cookiebar({
  onAccept,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-cookiebar ${className}`
  }, /*#__PURE__*/React.createElement("span", null, "N\xF3s usamos cookies e outras tecnologias semelhantes para melhorar a sua experi\xEAncia."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "small",
    onClick: onAccept
  }, "Estou de acordo"));
}
Object.assign(__ds_scope, { Cookiebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Cookiebar.jsx", error: String((e && e.message) || e) }); }

// components/layout/DateTimePicker.jsx
try { (() => {
const {
  useState
} = React;
const DIAS = ["D", "S", "T", "Q", "Q", "S", "S"];
function DateTimePicker({
  daysInMonth = 30,
  selected = 12,
  onSelect,
  className = ""
}) {
  const [sel, setSel] = useState(selected);
  return /*#__PURE__*/React.createElement("div", {
    className: `br-datetimepicker ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-grid"
  }, DIAS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontWeight: 600,
      color: "var(--fg-secondary)"
    }
  }, d)), Array.from({
    length: daysInMonth
  }, (_, i) => i + 1).map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: `dt-day ${d === sel ? "selected" : ""}`,
    onClick: () => {
      setSel(d);
      onSelect?.(d);
    }
  }, d))));
}
Object.assign(__ds_scope, { DateTimePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DateTimePicker.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function Divider({
  vertical = false,
  className = ""
}) {
  return vertical ? /*#__PURE__*/React.createElement("div", {
    className: `br-divider vertical ${className}`
  }) : /*#__PURE__*/React.createElement("hr", {
    className: `br-divider ${className}`
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  logo = "/assets/logo/govbr-negativa.svg",
  links = [],
  className = ""
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: `br-footer ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "gov.br"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, links.map((group, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, group.title), group.items.map((it, j) => /*#__PURE__*/React.createElement("div", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href || "#"
  }, it.label)))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, "Governo Federal do Brasil"));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Grid.jsx
try { (() => {
function Grid({
  children,
  cols = 12,
  fluid = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-grid cols-${cols} ${fluid ? "fluid" : ""} ${className}`
  }, children);
}
Object.assign(__ds_scope, { Grid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Grid.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header.jsx
try { (() => {
function Header({
  logo = "/assets/logo/govbr.svg",
  title,
  subtitle,
  links = [],
  className = ""
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: `br-header ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "gov.br"
  }), (title || subtitle) && /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-down-1)",
      color: "var(--fg-secondary)"
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.SignIn, null))), links.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "header-bottom"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#"
  }, l.label))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header.jsx", error: String((e && e.message) || e) }); }

// components/layout/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("i", {
    className: `br-icon fa-solid fa-${name} ${className}`,
    style: {
      fontSize: size
    },
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/Image.jsx
try { (() => {
function Image({
  src,
  alt = "",
  ratio = "16/9",
  shape = "default",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-image ${shape} ${className}`,
    style: {
      aspectRatio: ratio
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-image",
    style: {
      fontSize: 28
    }
  }));
}
Object.assign(__ds_scope, { Image });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Image.jsx", error: String((e && e.message) || e) }); }

// components/layout/Scrim.jsx
try { (() => {
function Scrim({
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-scrim ${className}`,
    onClick: onClick
  });
}
Object.assign(__ds_scope, { Scrim });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Scrim.jsx", error: String((e && e.message) || e) }); }

// components/layout/Modal.jsx
try { (() => {
function Modal({
  title,
  children,
  onClose,
  actions,
  className = ""
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Scrim, {
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 51
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `br-modal ${className}`,
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--fs-up-3)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, actions))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Modal.jsx", error: String((e && e.message) || e) }); }

// components/layout/Upload.jsx
try { (() => {
function Upload({
  label = "Arraste e solte arquivos ou clique para selecionar",
  onFiles,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `br-upload ${className}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: true,
    hidden: true,
    onChange: e => onFiles?.(e.target.files)
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-cloud-arrow-up",
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", null, label));
}
Object.assign(__ds_scope, { Upload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Upload.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
const {
  Fragment
} = React;
function Breadcrumb({
  items = [],
  className = ""
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `br-breadcrumb ${className}`,
    "aria-label": "Voc\xEA est\xE1 aqui"
  }, items.map((item, i) => /*#__PURE__*/React.createElement(Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 10
    },
    "aria-hidden": "true"
  }), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "current"
  }, item.label) : /*#__PURE__*/React.createElement("a", {
    href: item.href || "#"
  }, item.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function Menu({
  items = [],
  activeHref,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `br-menu ${className}`
  }, items.map((item, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: item.href || "#",
    className: `menu-item ${item.href === activeHref ? "active" : ""}`
  }, item.icon && /*#__PURE__*/React.createElement("i", {
    className: `fa-solid fa-${item.icon}`,
    "aria-hidden": "true"
  }), item.label)));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  className = ""
}) {
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", {
    className: `br-pagination ${className}`,
    "aria-label": "Pagina\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: page <= 1,
    onClick: () => onChange?.(page - 1),
    "aria-label": "P\xE1gina anterior"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left"
  })), pages.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: p === page ? "current" : "",
    onClick: () => onChange?.(p),
    "aria-current": p === page
  }, p)), /*#__PURE__*/React.createElement("button", {
    disabled: page >= total,
    onClick: () => onChange?.(page + 1),
    "aria-label": "Pr\xF3xima p\xE1gina"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PaginationPage.jsx
try { (() => {
function PaginationPage({
  page,
  current = false,
  disabled = false,
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `${current ? "current" : ""} ${className}`,
    disabled: disabled,
    "aria-current": current,
    onClick: onClick
  }, page);
}
Object.assign(__ds_scope, { PaginationPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PaginationPage.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SkipLink.jsx
try { (() => {
function SkipLink({
  href = "#main",
  children = "Ir para o conteúdo principal",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: `br-skiplink ${className}`
  }, children);
}
Object.assign(__ds_scope, { SkipLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SkipLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SkipLinkItem.jsx
try { (() => {
function SkipLinkItem({
  href = "#main",
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: `br-skiplink ${className}`,
    style: {
      position: "static",
      display: "block"
    }
  }, children);
}
Object.assign(__ds_scope, { SkipLinkItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SkipLinkItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Step.jsx
try { (() => {
function Step({
  items = [],
  current = 0,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-step ${className}`
  }, items.map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `step-item ${i < current ? "done" : ""} ${i === current ? "active" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-circle"
  }, i < current ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }) : i + 1), /*#__PURE__*/React.createElement("span", null, label))));
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Step.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepItem.jsx
try { (() => {
function StepItem({
  label,
  index,
  state = "default",
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `step-item ${state === "active" ? "active" : ""} ${state === "done" ? "done" : ""} ${className}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-circle"
  }, state === "done" ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }) : index), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tab.jsx
try { (() => {
const {
  useState
} = React;
function Tab({
  items = [],
  defaultActive = 0,
  className = ""
}) {
  const [active, setActive] = useState(defaultActive);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "br-tab",
    role: "tablist"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `tab-item ${i === active ? "active" : ""}`,
    role: "tab",
    "aria-selected": i === active,
    tabIndex: 0,
    onClick: () => setActive(i)
  }, item.label))), /*#__PURE__*/React.createElement("div", {
    className: "br-tab-panel",
    role: "tabpanel"
  }, items[active]?.content));
}
Object.assign(__ds_scope, { Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabItem.jsx
try { (() => {
function TabItem({
  label,
  active = false,
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tab-item ${active ? "active" : ""} ${className}`,
    role: "tab",
    "aria-selected": active,
    tabIndex: 0,
    onClick: onClick
  }, label);
}
Object.assign(__ds_scope, { TabItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Wizard.jsx
try { (() => {
function Wizard({
  steps = [],
  current = 0,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `br-wizard ${className}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Step, {
    items: steps,
    current: current
  }), /*#__PURE__*/React.createElement("div", {
    className: "wizard-content"
  }, children));
}
Object.assign(__ds_scope, { Wizard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Wizard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CallToAction = __ds_scope.CallToAction;

__ds_ns.MagicButton = __ds_scope.MagicButton;

__ds_ns.SignIn = __ds_scope.SignIn;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Item = __ds_scope.Item;

__ds_ns.List = __ds_scope.List;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeaderColumn = __ds_scope.TableHeaderColumn;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ControlOption = __ds_scope.ControlOption;

__ds_ns.DateTimeItem = __ds_scope.DateTimeItem;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Cookiebar = __ds_scope.Cookiebar;

__ds_ns.DateTimePicker = __ds_scope.DateTimePicker;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Grid = __ds_scope.Grid;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Image = __ds_scope.Image;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Scrim = __ds_scope.Scrim;

__ds_ns.Upload = __ds_scope.Upload;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.PaginationPage = __ds_scope.PaginationPage;

__ds_ns.SkipLink = __ds_scope.SkipLink;

__ds_ns.SkipLinkItem = __ds_scope.SkipLinkItem;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.TabItem = __ds_scope.TabItem;

__ds_ns.Wizard = __ds_scope.Wizard;

})();
