const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o titulo do grafico:  \n", function (name) {
  rl.question(
    "Digite os valores para a criação do grafico: \n",
    function (values) {
      const Values = values.split(" ").sort(function (a, b) {
        return a - b;
      });
      const countedValues = count_duplicate(Values);
      const ParsedKeys = Object.keys(countedValues).map((key) => {
        return `${key},${countedValues[key]},${(
          (countedValues[key] / Values.length) *
          100
        )
          .toPrecision(2)
          .toString()
          .substring(0, 3)}%\n`;
      });
      const Footer = `Total, ${Values.length}, 100%`;
      const Header = `${name}, frequência absoluta (FA), frequência relativa (FR) %\n`;
      const ParsedData = `${Header} ${ParsedKeys} ${Footer}`;
      fs.writeFile(`${name}.csv`, ParsedData, callBackFunction);
      rl.close();
    }
  );
});

function callBackFunction(err) {
  if (err) throw err;
  console.log("Graphic created");
}
function count_duplicate(value) {
  let counts = {};

  for (let i = 0; i < value.length; i++) {
    if (counts[value[i]]) {
      counts[value[i]] += 1;
    } else {
      counts[value[i]] = 1;
    }
  }
  return counts;
}
