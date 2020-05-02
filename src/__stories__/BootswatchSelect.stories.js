import React from 'react';
import { Bootstrap } from '../components/Bootstrap';
import { BootswatchSelect } from '../components/BootswatchSelect';
import { FontAwesome } from '../components/FontAwesome';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'BootswatchSelect',
  component: BootswatchSelect,
};

const componentsDemo = (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <div style={{ margin: '20px' }}>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-link">
        Link
      </button>
      <br />
      <br />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <h3>
        Heading
        <small className="text-muted">with muted text</small>
      </h3>
      <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <br />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Active
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">
              Separated link
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </div>
);

// The named exports define the stories
export const SelectorVisibleStory = () => {
  const [selectedThemeName, setSelectedThemeName] = React.useState('default');
  return (
    <>
      <Bootstrap />
      <FontAwesome />
      <div style={{ margin: '20px' }} className="form-group">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>React Bootswatch Select Demo</h2>
          <div>
            <a className="btn btn-secondary btn-sm" href="https://devboldly.github.io/react-bootswatch-select/">
              Project Home
            </a>
          </div>
        </div>
        <h3>
          <i className="fa fa-paint-brush" aria-hidden="true" style={{ marginRight: '10px' }} />
          Select a theme:
        </h3>
        <BootswatchSelect
          version={'4.4.1'}
          className="form-control"
          selectedThemeName={selectedThemeName}
          onChange={e => setSelectedThemeName(e.target.value)}
        />
        <br />
        <h4>
          Selected theme: <code>{selectedThemeName}</code>
        </h4>
      </div>
      <p style={{ marginLeft: '20px' }}>
        One line of code (Bootstrap must be imported already):
        <br />
        <code>{`<BootswatchSelect version={'4.4.1'} className="form-control" />`}</code>
      </p>
      <hr />
      {componentsDemo}
    </>
  );
};
SelectorVisibleStory.story = {
  name: 'Selector Visible',
};

export const SelectorHiddenStory = () => (
  <>
    <Bootstrap />
    <FontAwesome />
    <div style={{ margin: '20px' }} className="form-group">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>React Bootswatch Select Demo</h2>
        <div>
          <a className="btn btn-secondary btn-sm" href="https://devboldly.github.io/react-bootswatch-select/">
            Project Home
          </a>
        </div>
      </div>
      <h3>
        <i className="fa fa-eye-slash" style={{ marginRight: '10px' }} />
        Selector is hidden with <code>cerulean</code> selected
      </h3>
      <BootswatchSelect version={'4.4.1'} selectedThemeName="cerulean" selectorHidden />
    </div>
    <p style={{ marginLeft: '20px' }}>
      One line of code (Bootstrap must be imported already):
      <br />
      <code>{`<BootswatchSelect version={'4.4.1'} selectedThemeName="cerulean" selectorHidden />`}</code>
    </p>
    <hr />
    {componentsDemo}
  </>
);
SelectorHiddenStory.story = {
  name: 'Selector Hidden',
};

export const SelectorOnlyStory = () => (
  <>
    <Bootstrap />
    <FontAwesome />
    <div style={{ margin: '20px' }} className="form-group">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>React Bootswatch Select Demo</h2>
        <div>
          <a className="btn btn-secondary btn-sm" href="https://devboldly.github.io/react-bootswatch-select/">
            Project Home
          </a>
        </div>
      </div>
      <h3>
        <i className="fa fa-clipboard" style={{ marginRight: '10px' }} />
        Selector is in display-only mode. Becomes a plain old select.
      </h3>
      <BootswatchSelect className="form-control" disableHeadLink />
    </div>
    <p style={{ marginLeft: '20px' }}>
      <code>{`<BootswatchSelect className="form-control" disableHeadLink />`}</code>
    </p>
  </>
);
SelectorOnlyStory.story = {
  name: 'Display-Only',
};
