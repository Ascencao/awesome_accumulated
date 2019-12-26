import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import CardArticle from "../../molecules/CardArticle/CardArticle";

import headerData from "./header.json";

import "./SidebarMain.css";

class SidebarMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        "https://api-test-ln.herokuapp.com/articles"
      );

      const json = await response.json();

      const articles = await json.articles.filter(
        article => article.subtype === "7"
      );

      this.createCardArticles(articles);

      this.setState({ loading: false, data: articles });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  createCardArticles = articles => {
    this.articles = articles.map((article, id) => {
      return (
        <CardArticle
          key={id}
          title={article.headlines.basic}
          date={article.display_date}
          image={article.promo_items ? article.promo_items.basic.url : ""}
          url={article.website_url}
        ></CardArticle>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="sidebar__main">
          <GridHeader title={headerData.title} labels={headerData.labels} />
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {this.articles}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default SidebarMain;
