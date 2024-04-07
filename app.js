const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.text());

// Handle POST request to compile and execute C++ code
app.post("/runcpp", (req, res) => {
  const cppCode = req.body;

  // Command to compile and execute C++ code
  const command = `
    echo '${cppCode}' > main.cpp && \
    g++ -o main main.cpp && \
    ./main
  `;

  // Execute the command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr);
      return;
    }
    res.send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
