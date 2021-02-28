"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_helmet_1 = require("react-helmet");
/**
 * See the documentation: [BootswatchSelect](https://justinmahar.github.io/react-bootswatch-select/BootswatchSelect)
 *
 * A Bootswatch theme selector. Supports three modes:
 *
 * - **Selector visible:** A `select` element is rendered that allows the user to choose a theme to use. Dynamically swaps CSS out of head based on selection.
 * - **Selector hidden:** Provide a `selectedThemeName` prop along with `selectorHidden` and the provided theme will be used on the page. Adds CSS to head only. It doesn't matter where on the page this component is placed since no `select` is rendered.
 * - **Display-only:** Provide the `disableHeadLink` prop to disable the CSS `link` in `head`. Turns this into a plain old `select`. Use `onChange` to listen for selection.
 *
 * The Bootswatch version defaults to `4.4.1`,
 * CDN defaults to [bootstrapcdn.com](https://www.bootstrapcdn.com/), and filename defaults to
 * `bootstrap.min.css`
 *
 * The selector is not hidden by default, and initially `selectedThemeName` is `default`.
 *
 * @param props Provide the `version` of Bootswatch, and optionally provide the `cdnLocation` and `themeFilename`. Can also specify the initially selected `selectedThemeName`, and can specify `selectorHidden` to hide the select element.
 *
 * **In addition, all props for the `select` element are supported**, such as `onChange`.
 *
 * The template for the Bootswatch CSS file is: `${cdnLocation}/${version}/${selectedThemeName}/${themeFilename}`
 *
 * The following theme names are available:
 * - `default`
 * - `cerulean`
 * - `cosmo`
 * - `cyborg`
 * - `darkly`
 * - `flatly`
 * - `journal`
 * - `litera`
 * - `lumen`
 * - `lux`
 * - `materia`
 * - `minty`
 * - `pulse`
 * - `sandstone`
 * - `simplex`
 * - `sketchy`
 * - `slate`
 * - `solar`
 * - `spacelab`
 * - `superhero`
 * - `united`
 * - `yeti`
 */
function BootswatchSelect(props) {
  var _a = React.useState(props.selectedThemeName),
    selectedThemeName = _a[0],
    setSelectedThemeName = _a[1];
  // Remove trailing slash
  var cdnLocation = props.cdnLocation
    ? props.cdnLocation.replace(/(.*)[/]+$/, "$1")
    : "";
  // Construct CSS path
  var themeCss =
    cdnLocation +
    "/" +
    props.version +
    "/" +
    selectedThemeName +
    "/" +
    props.themeFilename;
  var selectProps = __assign(__assign({}, props), {
    onChange: function(e) {
      setSelectedThemeName(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    },
  });
  // Remove our own props
  var propKeys = [
    "version",
    "cdnLocation",
    "themeFilename",
    "selectedThemeName",
    "selectorHidden",
    "disableHeadLink",
  ];
  propKeys.forEach(function(propKey) {
    return delete selectProps[propKey];
  });
  return React.createElement(
    React.Fragment,
    null,
    !props.disableHeadLink &&
      React.createElement(
        react_helmet_1.Helmet,
        null,
        selectedThemeName !== "default" &&
          React.createElement("link", {
            rel: "stylesheet",
            type: "text/css",
            href: themeCss,
          })
      ),
    !props.selectorHidden &&
      React.createElement(
        "select",
        __assign({}, selectProps),
        React.createElement(
          "option",
          { value: "default" },
          "Default (No Theme)"
        ),
        React.createElement(
          "option",
          { disabled: true },
          "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"
        ),
        React.createElement(
          "option",
          { value: "cerulean" },
          "Cerulean - A calm blue sky"
        ),
        React.createElement(
          "option",
          { value: "cosmo" },
          "Cosmo - An ode to Metro"
        ),
        React.createElement(
          "option",
          { value: "cyborg" },
          "Cyborg - Jet black and electric blue"
        ),
        React.createElement(
          "option",
          { value: "darkly" },
          "Darkly - Flatly in night mode"
        ),
        React.createElement(
          "option",
          { value: "flatly" },
          "Flatly - Flat and modern"
        ),
        React.createElement(
          "option",
          { value: "journal" },
          "Journal - Crisp like a new sheet of paper"
        ),
        React.createElement(
          "option",
          { value: "litera" },
          "Litera - The medium is the message"
        ),
        React.createElement(
          "option",
          { value: "lumen" },
          "Lumen - Light and shadow"
        ),
        React.createElement(
          "option",
          { value: "lux" },
          "Lux - A touch of class"
        ),
        React.createElement(
          "option",
          { value: "materia" },
          "Materia - Material is the metaphor"
        ),
        React.createElement(
          "option",
          { value: "minty" },
          "Minty - A fresh feel"
        ),
        React.createElement(
          "option",
          { value: "pulse" },
          "Pulse - A trace of purple"
        ),
        React.createElement(
          "option",
          { value: "sandstone" },
          "Sandstone - A touch of warmth"
        ),
        React.createElement(
          "option",
          { value: "simplex" },
          "Simplex - Mini and minimalist"
        ),
        React.createElement(
          "option",
          { value: "sketchy" },
          "Sketchy - A hand-drawn look for mockups and mirth"
        ),
        React.createElement(
          "option",
          { value: "slate" },
          "Slate - Shades of gunmetal gray"
        ),
        React.createElement(
          "option",
          { value: "solar" },
          "Solar - A spin on Solarized"
        ),
        React.createElement(
          "option",
          { value: "spacelab" },
          "Spacelab - Silvery and sleek"
        ),
        React.createElement(
          "option",
          { value: "superhero" },
          "Superhero - The brave and the blue"
        ),
        React.createElement(
          "option",
          { value: "united" },
          "United - Ubuntu orange and unique font"
        ),
        React.createElement(
          "option",
          { value: "yeti" },
          "Yeti - A friendly foundation"
        )
      )
  );
}
exports.BootswatchSelect = BootswatchSelect;
BootswatchSelect.defaultProps = {
  version: "4.4.1",
  cdnLocation: "https://stackpath.bootstrapcdn.com/bootswatch/",
  themeFilename: "bootstrap.min.css",
  selectedThemeName: "default",
  selectorHidden: false,
};
