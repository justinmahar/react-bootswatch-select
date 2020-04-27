import * as React from 'react';
export interface BootswatchSelectProps {
    /** The version of Bootswatch to use. Required, but will fall back to `4.4.1` if not specified. See [bootstrapcdn](https://www.bootstrapcdn.com/bootswatch/) for the latest CDN version. */
    version: string;
    /** Selected theme name. Defaults to `default` */
    cdnLocation?: string;
    /** Whether or not the selector is hidden. Specify `true` to hide. Defaults to `false */
    themeFilename?: string;
    /** Location of the CDN. Defaults to `https://stackpath.bootstrapcdn.com/bootswatch/` */
    selectedThemeName?: ThemeName;
    /** CSS theme filename. Defaults to `bootstrap.min.css` */
    selectorHidden?: boolean;
    /** Set to `true` to handle importing the styles yourself (no link will be added to `head`). Turns this component into a plain old `select`. Default `false`. */
    disableHeadLink?: boolean;
}
export declare type ThemeName = 'default' | 'cerulean' | 'cosmo' | 'cyborg' | 'darkly' | 'flatly' | 'journal' | 'litera' | 'lumen' | 'lux' | 'materia' | 'minty' | 'pulse' | 'sandstone' | 'simplex' | 'sketchy' | 'slate' | 'solar' | 'spacelab' | 'superhero' | 'united' | 'yeti';
/**
 * See the documentation: https://devboldly.github.io/react-bootswatch-select/BootswatchSelect
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
export declare function BootswatchSelect(props: BootswatchSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>): JSX.Element;
export declare namespace BootswatchSelect {
    var defaultProps: {
        version: string;
        cdnLocation: string;
        themeFilename: string;
        selectedThemeName: string;
        selectorHidden: boolean;
    };
}
