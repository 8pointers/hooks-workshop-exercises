import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import CounterAsClass from './1-0-state';
import CounterWithUseState from './1-1-useState';
import CounterWithUseStateExercise from './1-2-exercise';
import ToggleableCounter from './1-3-state';
import UseStateComplexState1 from './1-4-useState-1';
import UseStateComplexState2 from './1-4-useState-2';
import ProblemWithClosure from './1-5-useState-closure';

import CounterWithUseReducer from './2-1-useReducer';
import CounterWithUseReducerExercise from './2-2-exercise';
import CounterUseStateUseReducer from './2-3-useState-useReducer-1';
import CounterUseReducerUseState from './2-3-useState-useReducer-2';
import ToggleableCounterExercise from './2-4-exercise';
import ToggleableCounterWithLegacyState from './2-5-useLegacyState';

import RenderPropsCounter from './3-0-render-prop';
import CustomHookCounter from './3-1-useCounter';

import OnlineStatusAsClass from './4-0-effects';
import OnlineStatusWithUseEffect from './4-1-useEffect';
import OnlineStatusWithUseEffectInvocations from './4-2-useEffect';
import OnlineStatusWithUseEffectOnce from './4-3-useEffect';
import OnlineStatusWithUseEffectExercise from './4-4-exercise';
import MOTDAsClass from './4-5-http';
import MOTDWithUseEffect from './4-6-http-useEffect-deps';
import MOTDExercise from './4-7-exercise';

import OnlineStatusRXAsClass from './5-0-rxjs';
import OnlineStatusRXWithUseEffect from './5-1-exercise';
import OnlineStatusRXWithCustomHooks from './5-2-exercise';

// import './ex-2';
// import './ex-3';

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        {[
          { label: 'State', to: '/' },
          { label: 'Reducer', to: '/useReducer' },
          { label: 'Render Props', to: '/renderProps' },
          { label: 'Effects', to: '/useEffect' },
          { label: 'Rx', to: '/rx' }
        ].map(({ label, to }) => (
          <li key={to} className="nav-item">
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <Route
      exact
      path="/"
      component={() => (
        <>
          <h3>Class component</h3>
          <CounterAsClass />
          <h3>useState</h3>
          <CounterWithUseState />
          <h3>Exercise</h3>
          <CounterWithUseStateExercise />
          <h3>More complex state</h3>
          <ToggleableCounter />
          <h3>More complex state - useState</h3>
          <UseStateComplexState1 />
          <h3>More complex state - multiple useState</h3>
          <UseStateComplexState2 />
          <h3>useState & closure</h3>
          <ProblemWithClosure />
        </>
      )}
    />
    <Route
      path="/useReducer"
      component={() => (
        <>
          <h3>useReducer</h3>
          <CounterWithUseReducer />
          <h3>Exercise</h3>
          <CounterWithUseReducerExercise />
          <h3>useReducer -> useState</h3>
          <CounterUseStateUseReducer />
          <h3>useState -> useReducer</h3>
          <CounterUseReducerUseState />
          <h3>Exercise</h3>
          <ToggleableCounterExercise />
          <h3>useLegacyState</h3>
          <ToggleableCounterWithLegacyState />
        </>
      )}
    />
    <Route
      path="/renderProps"
      component={() => (
        <>
          <h3>render prop</h3>
          <RenderPropsCounter.SimpleView />
          <RenderPropsCounter.AnotherView />
          <h3>custom hook - useCounter</h3>
          <CustomHookCounter.SimpleView />
          <CustomHookCounter.AnotherView />
        </>
      )}
    />
    <Route
      path="/useEffect"
      component={() => (
        <>
          <h3>Class component</h3>
          <OnlineStatusAsClass />
          <h3>useEffect</h3>
          <OnlineStatusWithUseEffect />
          <h3>useEffect - invocations</h3>
          <OnlineStatusWithUseEffectInvocations />
          <h3>useEffect - once</h3>
          <OnlineStatusWithUseEffectOnce />
          <h3>exercise</h3>
          <OnlineStatusWithUseEffectExercise />
          <h3>HTTP - class component</h3>
          <MOTDAsClass />
          <h3>HTTP - useEffect</h3>
          <MOTDWithUseEffect />
          <h3>exercise</h3>
          <MOTDExercise />
        </>
      )}
    />
    <Route
      path="/rx"
      component={() => (
        <>
          <h3>Class component</h3>
          <OnlineStatusRXAsClass />
          <h2>Functional component & hooks</h2>
          <OnlineStatusRXWithUseEffect />
          <h2>Functional component & custom hook</h2>
          <OnlineStatusRXWithCustomHooks />
        </>
      )}
    />
  </Router>
);

render(<App />, document.getElementById('root'));
