import axios from "axios";

const FETCH_ARTICLES = "FETCH_ARTICLES";

const _fetchArticles = (articles) => {
  return {
    type: FETCH_ARTICLES,
    articles,
  };
};

export const fetchCurrentArticles = (section, url) => {
  return async (dispatch) => {
    const { data } =
      url === "most-viewed"
        ? await axios.get("/api/articles/most-viewed")
        : !!section
        ? await axios.get(`/api/articles/${section}`)
        : await axios.get("/api/articles");
    console.log(data);
    dispatch(_fetchArticles(data));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};
