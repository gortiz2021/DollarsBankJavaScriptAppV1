const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { Box, Text, useInput, useApp } = require("ink");
const importJsx = require("import-jsx");
const Transaction = importJsx("./Transaction");
const OpenAccount = importJsx("./OpenAccount");

const Options = () => {
  const { exit } = useApp();
  useInput((input) => {
    console.log(input, "was pressed");
    if (input === "q") {
      exit();
      console.log("Goodbye!");
    }
    if (input === "1") {
      <Transaction />;
    }
    if (input === "2") {
      <OpenAccount />;
    }
  });

  return (
    <>
      <Gradient name="instagram">
        <BigText
          text="Dollars Bank ATM Welcomes You!!"
          align="left"
          font="shade"
        />
      </Gradient>
      <Box>
        <Box flexDirection="column">
          <Text>Please Select an option:</Text>
          <Box>
            <Text>1. Transaction</Text>
          </Box>
          <Box>
            <Text>2. New Account</Text>
          </Box>
          <Box>
            <Text>q. Exit</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

module.exports = Options;
