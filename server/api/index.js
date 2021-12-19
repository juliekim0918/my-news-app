const express = require("express");
const app = express.Router();
const api_key = "Rwppds4h05rLPeJ3GPz8SbBI4JxQsUem";
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET all articles
app.get("/articles", async (req, res, next) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${api_key}`
    );
    res.send(results);
  } catch (error) {
    next(e);
  }
});

// GET most viewed articles in last 30 days
app.get("/articles/most-viewed", async (req, res, next) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${api_key}`
    );
    res.send(results);
  } catch (e) {
    next(e);
  }
});


// GET all articles by section
app.get("/articles/:section", async (req, res, next) => {
  try {
    const sectionName = req.params.section;
    const {
      data: { results },
    } = await axios.get(
      `https://api.nytimes.com/svc/news/v3/content/nyt/${sectionName}.json?api-key=${api_key}`
    );
    res.send(results);
  } catch (e) {
    next(e);
  }
});

// GET section list
app.get("/sections", async (req, res, next) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${api_key}`
    );
    res.send(results);
  } catch (e) {
    next(e);
  }
});

module.exports = app;
