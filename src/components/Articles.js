import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrSection } from "../store/currentSection";
import { fetchCurrentArticles } from "../store/articles";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const section = this.props.match.params.section || "";
    const url = this.props.match.url.slice(1);

    this.props.setCurrSection(section);
    this.props.fetchCurrentArticles(section, url);
  }

  async componentDidUpdate(prevProps, prevState) {
    const section = this.props.match.params.section || "";
    const url = this.props.match.url.slice(1);
    if (
      this.props.currentSection !== section ||
      url !== prevProps.match.url.slice(1)
    ) {
      await this.props.setCurrSection(section);
      await this.props.fetchCurrentArticles(section, url);
    }
  }

  render() {
    const { currentSection } = this.props;
    const url = this.props.match.url.slice(1);
    const articles = this.props.articles || [];
    return (
      <div className="md:container mx-auto p-8 bg-white rounded-md drop-shadow-sm shadow-slate-500">
        <div className="flex flex-col md:grid md:grid-cols-auto-fit md:grid-rows-auto-fit gap-8 ">
          {articles.map((article, idx) => {
            return (
              <ArticleCard
                key={url === "most-viewed" ? article.id : article.slug_name}
                article={article}
                idx={idx}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentSection, articles }, { match }) => {
  return { currentSection, articles, match };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrSection: (section) => {
      dispatch(setCurrSection(section));
    },
    fetchCurrentArticles: (section, url) => {
      dispatch(fetchCurrentArticles(section, url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
