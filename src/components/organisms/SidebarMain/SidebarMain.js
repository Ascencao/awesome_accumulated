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

      this.articles = this.createCardArticles(articles);
      let tagList = this.getTagList(articles);
      let groupTags = this.groupTags(tagList);
      let sortTags = this.orderTags(groupTags);
      let tagListToRender = this.getTagListToRender(sortTags, tagList);

      this.tagListToRender = tagListToRender.slice(0, 10);
      this.setState({ loading: false, data: articles });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  createCardArticles = articles => {
    return articles.map((article, id) => {
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

  getTagList = articles => {
    let tagList = articles.map(article => {
      return article.taxonomy.tags;
    });
    return tagList.flat();
  };

  groupTags = tagList => {
    let counts = {};
    tagList.forEach(function(tag) {
      counts[tag.text] = (counts[tag.text] || 0) + 1;
    });
    return counts;
  };

  orderTags = groupTags => {
    let orderTags = Object.keys(groupTags).sort((a, b) =>
      groupTags[a] > groupTags[b] ? -1 : 1
    );
    return orderTags;
  };

  getTagListToRender = (sortTags, tagList) => {
    return sortTags.map(tagText => {
      let tag = tagList.find(originalTag => {
        return originalTag.text === tagText;
      });
      return tag;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="sidebar__main">
          <GridHeader title={headerData.title} labels={this.tagListToRender} />
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {this.articles}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default SidebarMain;
