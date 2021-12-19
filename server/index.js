const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.static(path.join(__dirname, "../dist/")));
app.use("/api", require("./api"));

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ERROR CATCHING
app.use((req, res, next) => {
  const error = Error("page not found");
  error.status = 204;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
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
