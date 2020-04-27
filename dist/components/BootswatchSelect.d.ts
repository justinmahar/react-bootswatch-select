import * as React from 'react';
export interface BootswatchSelectProps {
    version: string;
    cdnLocation?: string;
    themeFilename?: string;
    selectedThemeName?: ThemeName;
    selectorHidden?: boolean;
}
export declare type ThemeName = 'default' | 'cerulean' | 'cosmo' | 'cyborg' | 'darkly' | 'flatly' | 'journal' | 'litera' | 'lumen' | 'lux' | 'materia' | 'minty' | 'pulse' | 'sandstone' | 'simplex' | 'sketchy' | 'slate' | 'solar' | 'spacelab' | 'superhero' | 'united' | 'yeti';
/**
 * See the documentation: https://devboldly.github.io/react-bootswatch-select/BootswatchSelect
 *
 * A Bootswatch theme selector. Supports two modes:
 *
 * - **Selector visible:** A `select` element is returned that allows the user to choose a theme to preview. Dynamically swaps CSS out of head based on selection. Place this anywhere on the page. Default behavior.
 * - **Selector hidden:** Provide a `selectedThemeName` prop along with `selectorHidden` and the provided theme will be used on the page. Adds CSS to head only. It doesn't matter where on the page this component is placed since no `select` is rendered.
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
