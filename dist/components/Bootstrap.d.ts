/// <reference types="react" />
export interface BootstrapProps {
    /** The version of Bootstrap. The `version` is required for the sake of being explicit, but it defaults to `4.4.1` if unspecified. */
    version: string;
    /** The CDN location for the Bootstrap CSS file. Defaults to `https://stackpath.bootstrapcdn.com/bootstrap/` */
    cdnLocation?: string;
    /** The filename of the Bootstrap CSS file. Defaults to `bootstrap.min.css` */
    filename?: string;
}
/**
 * See documentation: [Bootstrap](https://justinmahar.github.io/react-bootswatch-select/Bootstrap)
 *
 * Quickly add Bootstrap stylesheets to the `<head/>` element of the page.
 *
 * The Bootstrap version defaults to `4.4.1`,
 * CDN defaults to [bootstrapcdn.com](https://www.bootstrapcdn.com/), and filename defaults to
 * `bootstrap.min.css`
 *
 * @param props Provide a `version` and optionally the `cdnLocation` and `filename`.
 *
 * The following template is used for the Bootstrap CSS path: `${cdnLocation}/${version}/css/${filename}`
 */
export declare function Bootstrap(props: BootstrapProps): JSX.Element;
export declare namespace Bootstrap {
    var defaultProps: {
        version: string;
        cdnLocation: string;
        filename: string;
    };
}
