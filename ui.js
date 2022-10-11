"use strict";
const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { Text } = require("ink");
const importJsx = require("import-jsx");
const Table = importJsx("./components/table");
const Startup = importJsx("./components/startup");

const App = () => (
  <>
    <Gradient name="summer">
      <BigText
        text="Dollars Bank ATM Welcomes You!!"
        align="left"
        font="chrome"
      />
    </Gradient>

    <Startup />
  </>
);

module.exports = App;
