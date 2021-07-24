import React from 'react';
import ReactDOM from 'react-dom';
import { Note, Notes } from './notes';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:slug" component={props => <Note slug={props.match.params.slug} {...props} />} />
        <Route path="/" component={props => <Notes />} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
