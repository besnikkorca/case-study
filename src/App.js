import React from 'react';
import Layout from './hoc/layout/Layout';
import { Route, Switch } from 'react-router-dom';
import EntityList from './containers/EntityContainer/EntityList';
import EntitySingle from './containers/EntityContainer/EntitySingle';

function App() {
  return (
    <div>
      <Layout
        title="Perdoo case study"
      >
        <Switch>
        <Route
          exact
          path={`/:entity`}
          component={EntityList}
        />
        <Route
          path={`/:entity/:id`}
          component={EntitySingle}
        />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
