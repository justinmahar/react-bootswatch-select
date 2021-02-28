import * as React from "react";
import { Helmet } from "react-helmet";

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

export type ThemeName =
  | "default"
  | "cerulean"
  | "cosmo"
  | "cyborg"
  | "darkly"
  | "flatly"
  | "journal"
  | "litera"
  | "lumen"
  | "lux"
  | "materia"
  | "minty"
  | "pulse"
  | "sandstone"
  | "simplex"
  | "sketchy"
  | "slate"
  | "solar"
  | "spacelab"
  | "superhero"
  | "united"
  | "yeti";

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
export function BootswatchSelect(
  props: BootswatchSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>
): JSX.Element {
  const [selectedThemeName, setSelectedThemeName] = React.useState(
    props.selectedThemeName
  );

  // Remove trailing slash
  const cdnLocation = props.cdnLocation
    ? props.cdnLocation.replace(/(.*)[/]+$/, "$1")
    : "";

  // Construct CSS path
  const themeCss = `${cdnLocation}/${props.version}/${selectedThemeName}/${props.themeFilename}`;

  const selectProps: { [propName: string]: any } = {
    ...props,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedThemeName(e.target.value as ThemeName);
      if (props.onChange) {
        props.onChange(e);
      }
    },
  };
  // Remove our own props
  const propKeys = [
    "version",
    "cdnLocation",
    "themeFilename",
    "selectedThemeName",
    "selectorHidden",
    "disableHeadLink",
  ];
  propKeys.forEach((propKey: string) => delete selectProps[propKey]);

  return (
    <>
      {!props.disableHeadLink && (
        <Helmet>
          {selectedThemeName !== "default" && (
            <link rel="stylesheet" type="text/css" href={themeCss} />
          )}
        </Helmet>
      )}
      {!props.selectorHidden && (
        <select {...selectProps}>
          <option value="default">Default (No Theme)</option>
          <option disabled>──────────</option>
          <option value="cerulean">Cerulean - A calm blue sky</option>
          <option value="cosmo">Cosmo - An ode to Metro</option>
          <option value="cyborg">Cyborg - Jet black and electric blue</option>
          <option value="darkly">Darkly - Flatly in night mode</option>
          <option value="flatly">Flatly - Flat and modern</option>
          <option value="journal">
            Journal - Crisp like a new sheet of paper
          </option>
          <option value="litera">Litera - The medium is the message</option>
          <option value="lumen">Lumen - Light and shadow</option>
          <option value="lux">Lux - A touch of class</option>
          <option value="materia">Materia - Material is the metaphor</option>
          <option value="minty">Minty - A fresh feel</option>
          <option value="pulse">Pulse - A trace of purple</option>
          <option value="sandstone">Sandstone - A touch of warmth</option>
          <option value="simplex">Simplex - Mini and minimalist</option>
          <option value="sketchy">
            Sketchy - A hand-drawn look for mockups and mirth
          </option>
          <option value="slate">Slate - Shades of gunmetal gray</option>
          <option value="solar">Solar - A spin on Solarized</option>
          <option value="spacelab">Spacelab - Silvery and sleek</option>
          <option value="superhero">Superhero - The brave and the blue</option>
          <option value="united">United - Ubuntu orange and unique font</option>
          <option value="yeti">Yeti - A friendly foundation</option>
        </select>
      )}
    </>
  );
}

BootswatchSelect.defaultProps = {
  version: "4.4.1",
  cdnLocation: "https://stackpath.bootstrapcdn.com/bootswatch/",
  themeFilename: "bootstrap.min.css",
  selectedThemeName: "default",
  selectorHidden: false,
};
