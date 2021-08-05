import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Join = React.lazy(() => import('./screens/Join'));
const Chat = React.lazy(() => import('./screens/Chat'));
function App() {
  return (
    <Router>
      <Suspense fallback={() => <span>Loading...</span>}>
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
