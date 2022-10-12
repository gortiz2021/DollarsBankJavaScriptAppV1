const React = require("react");
// const Gradient = require("ink-gradient");
// const BigText = require("ink-big-text");
//const { Text, Box } = require("ink");
const importJsx = require("import-jsx");
//const { TextInput } = require("ink-text-input");
//const Table = importJsx("./components/table");
const Startup = importJsx("./components/startup");
//const [input, setInput] = useState();

const App = () => (
  <>
    <Startup />
  </>
);

module.exports = App;
