// Codigo que te sauda dependendo da hora do dia, da maneira correta.

const Hour = new Date().getHours();

if (Hour > 6 && Hour < 12) {
  console.log("Bom dia");
} else if (Hour >= 12 && Hour < 18) {
  console.log("Boa tarde");
} else console.log("Boa noite");
