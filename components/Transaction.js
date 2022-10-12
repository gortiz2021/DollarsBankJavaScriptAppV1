const React = require("react");

const { Box, Text, useInput } = require("ink");

const OptionsTransaction = () => {
  useInput((input) => {
    console.log(input, "was pressed during transaction");
    if (input === "1") {
    }
    if (input === "2") {
    }
    if (input === "3") {
    }
    if (input === "4") {
    }
    if (input === "5") {
    }
  });

  return (
    <>
      <Box>
        <Box flexDirection="column">
          <Text>Please Select an option:</Text>
          <Box>
            <Text>1. Account Balance Check</Text>
          </Box>
          <Box>
            <Text>2. Print Transactions</Text>
          </Box>
          <Box>
            <Text>3. Update PIN</Text>
          </Box>
          <Box>
            <Text>4. Withdraw Amount</Text>
          </Box>
          <Box>
            <Text>5. Deposit Amount</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

module.exports = OptionsTransaction;
