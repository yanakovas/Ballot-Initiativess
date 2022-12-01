const React = require('react');
const ReactDOMServer = require('react-dom/server');
const LocalsContext = require('./LocalsContext');

function renderComponent(
  reactComponent,
  props = {},
  options = { doctype: true }
) {
  const reactElement = React.createElement(
    LocalsContext.Provider,
    {
      value: {
        ...this.app.locals,
        ...this.locals,
      },
    },
    React.createElement(reactComponent, {
      ...props,
    })
  );
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  if (options.doctype) {
    this.write('<!DOCTYPE html>');
  }
  this.end(html);
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
