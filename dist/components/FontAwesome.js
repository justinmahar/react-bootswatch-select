"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_helmet_1 = require("react-helmet");
/**
 * Quickly add Font Awesome styles to the `head` element of the page.
 *
 * The Font Awesome version defaults to `4.7.0`,
 * CDN defaults to [bootstrapcdn.com](https://www.bootstrapcdn.com/), and filename defaults to
 * `font-awesome.min.css`
 *
 * @param props Provide a `version` and optionally the `cdnLocation` and `filename`.
 *
 * The following template is used for the Bootstrap CSS path: `${cdnLocation}/${version}/css/${filename}`
 */
function FontAwesome(props) {
    // Remove trailing slash
    var cdnLocation = props.cdnLocation ? props.cdnLocation.replace(/(.*)[/]+$/, '$1') : '';
    // Construct CSS path
    var fontAwesomeCss = cdnLocation + "/" + props.version + "/css/" + props.filename;
    return (React.createElement(react_helmet_1.Helmet, null,
        React.createElement("link", { rel: "stylesheet", type: "text/css", href: fontAwesomeCss })));
}
exports.FontAwesome = FontAwesome;
FontAwesome.defaultProps = {
    version: '4.7.0',
    cdnLocation: 'https://stackpath.bootstrapcdn.com/font-awesome/',
    filename: 'font-awesome.min.css',
};
