import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface BootstrapProps {
  /** The version of Bootstrap. The `version` is required for the sake of being explicit, but it defaults to `4.4.1` if unspecified. */
  version: string;
  /** The CDN location for the Bootstrap CSS file. Defaults to `https://stackpath.bootstrapcdn.com/bootstrap/` */
  cdnLocation?: string;
  /** The filename of the Bootstrap CSS file. Defaults to `bootstrap.min.css` */
  filename?: string;
}

/**
 * See documentation: [Bootstrap](https://devboldly.github.io/react-bootswatch-select/Bootstrap)
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
export function Bootstrap(props: BootstrapProps): JSX.Element {
  // Remove trailing slash
  const cdnLocation = props.cdnLocation ? props.cdnLocation.replace(/(.*)[/]+$/, '$1') : '';

  // Construct CSS path
  const bootstrapCss = `${cdnLocation}/${props.version}/css/${props.filename}`;

  return (
    <Helmet>
      <link rel="stylesheet" type="text/css" href={bootstrapCss} />
    </Helmet>
  );
}

Bootstrap.defaultProps = {
  version: '4.4.1',
  cdnLocation: 'https://stackpath.bootstrapcdn.com/bootstrap/',
  filename: 'bootstrap.min.css',
};
