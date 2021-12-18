const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.static(path.join(__dirname, "../dist/")));

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const init = () => {
  try {
    app.listen(PORT, () =>
      console.log(`
        
        Youre connected!

        Go to http://localhost:${PORT}/
      
        `)
    );
  } catch (e) {
    console.error(e);
  }
};

init();
