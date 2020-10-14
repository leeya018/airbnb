import React, { Component } from 'react';
import axios from 'axios'
import NavBar from '../NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { homes: [] }
  }

  async componentWillMount() {
    try {
      let response = await axios.get('/api/homes')
      let homes = response.data
      this.setState({ homes })
    } catch (e) {
      console.log('err homes')
    }
  }

  render() {
    let homes = this.state.homes
    return (
      <div className="App">
        {(homes.length > 0) &&
          <NavBar homes={homes} />
        }
      </div>
    );
  }
}
export default App;
