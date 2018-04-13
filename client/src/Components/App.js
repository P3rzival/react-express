import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => {return ( <p> This has been rendered as a component on the client! </p> ); };
class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => err);
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <Container>
        {this.state.response}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={function () { return <p>Not Found</p> }} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;