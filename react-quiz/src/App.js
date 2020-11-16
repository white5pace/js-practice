import React from 'react'
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom';
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}></Route>
          <Route path="/quiz-creator" component={QuizCreator}></Route>
          <Route path="/quiz/:id" component={Quiz}></Route>
          <Route path="/" component={QuizList}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
