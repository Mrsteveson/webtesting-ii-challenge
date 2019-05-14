import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library'; //bring in testing lib.
import 'react-testing-library/cleanup-after-each'; // incase of duplicates.
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

//Testing App Component
describe('<App />', () => {
  
  //freebie -> pass
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //renders properly -> pass
  it('App successfully renders without issue.', () => {
    render(<App />);
  });

  //renders name of app -> pass
  it('renders Baseball App', () => {
    const { getByText } = render(<App />);
    getByText(/Baseball App/i);
  });

});

// Testing Dashboard Component
describe('<Dashboard />', () => {

  //renders component successfully -> pass
  it('renders Dashboard component without issue', () => {
    render(<Dashboard />);
  })

  //render strike btn -> pass
  it('render strike button properly', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Strike')
  })

  //fires strike btn -> pass
  it('fires strike button properly', () => {
    const { getByText } = render(<Dashboard />);
    const sBtn = getByText('Strike');

    fireEvent.click(sBtn);
    getByText(/Strikes: 1/i);
  });

  //render ball btn -> pass
  it('render ball button properly', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Ball')
  })

  //fires ball btn -> pass
  it('fires ball button properly', () => {
    const { getByText } = render(<Dashboard />);
    const sBtn = getByText('Ball');

    fireEvent.click(sBtn);
    getByText(/Balls: 1/i);
  });

  //fires foul btn -> pass
  it('fires foul button properly', () => {
    const { getByText } = render(<Dashboard />);
    const sBtn = getByText('Foul');

    fireEvent.click(sBtn);
    getByText(/Fouls: 1/i);
  });

  //fires hit btn -> pass
  it('fires hit button properly', () => {
    const { getByText } = render(<Dashboard />);
    const sBtn = getByText('Hit');

    fireEvent.click(sBtn);
    getByText(/Hits: 1/i);
  });

});

describe('<Display />', () => {
  //renders component successfully -> pass
  it('renders Display component without issue', () => {
    render(<Display />);
  });

  //render's component title -> 
  it('renders The Count properly', () => {
    const { getByText } = render(<Display />);
    getByText(/The Count/i)
  });

  //renders strikes: -> pass
  it('renders strikes', () => {
    const { getByText } = render(<Display />);
    getByText('Strikes:')
  });
});