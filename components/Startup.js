const React = require("react");
const {
  Text,
  Box,
  useInput,
  useApp,
  Newline,
  useStdout,
  useStdin,
} = require("ink");

const UserInput = () => {
  const { exit } = useApp();
  useInput((input) => {
    if (input === "1") {
      <Text>Key 1 was pressed.</Text>;
    }

    if (input === "2") {
      <Text>Key 2 was pressed.</Text>;
    }
    if (input === "q") {
      <Text>Goodybye!</Text>;
      exit();
    }
  });

  return (
    <Box>
      <Text>
        Please Select an Option. <Newline />
        1. Transaction <Newline />
        2. Open New Account <Newline />
        q. Exit <Newline />
      </Text>
    </Box>
  );
};

module.exports = UserInput;
