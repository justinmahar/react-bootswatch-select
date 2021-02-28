/// <reference types="react" />
export interface FontAwesomeProps {
    /** The version of Font Awesome. The `version` is required for the sake of being explicit, but it defaults to `4.7.0` if unspecified. */
    version: string;
    /** The CDN location for the Font Awesome CSS file. Defaults to `https://stackpath.bootstrapcdn.com/font-awesome/` */
    cdnLocation?: string;
    /** The filename of the Font Awesome CSS file. Defaults to `font-awesome.min.css` */
    filename?: string;
}
/**
 * See the documentation: [FontAwesome](https://justinmahar.github.io/react-bootswatch-select/FontAwesome)
 *
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
export declare function FontAwesome(props: FontAwesomeProps): JSX.Element;
export declare namespace FontAwesome {
    var defaultProps: {
        version: string;
        cdnLocation: string;
        filename: string;
    };
}
