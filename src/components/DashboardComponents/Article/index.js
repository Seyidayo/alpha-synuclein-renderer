import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from "@material-ui/core";

const GetNames = ({ Data }) => {
  if (Data.length < 1) {
    return 0;
  }
  return (
    <Typography variant="body1">
      {Data.map((name, index) => (
        <span key={index}>
          {name.FullName} {name.foreName} {name.lastName},&nbsp;
        </span>
      ))}
    </Typography>
  );
};

const DataMap = ({ Data }) => {
  return (
    <div>
      {Data.map((a, index) => (
        <Card key={index}>
          <CardHeader title={a.title} />
          <CardContent>
            <GetNames Data={a.authors} />
          </CardContent>
          <CardActions>
            {/* <button className="btn-primary">Read more</button> */}
            <Button variant="raised" href={a.url} target="_blank">
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

class Article extends React.PureComponent {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/api/getallarticles")
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            articles: json.articles
          });
        }
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        ..............
        {articles.length}
        <DataMap Data={articles} />
      </React.Fragment>
    );
  }
}

export default Article;
