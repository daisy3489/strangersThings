import React from 'react';

export default class fetchRandomUser extends React.Component {

  state = {
    loading: true,
  }

  //our component has rendered at least once when this is called
  componentDidMount() {

  }

  render() {
    return <div>
      {/* conditionally show data
      if loading show loading... else if false, show person */}
      {this.state.loading ? <div>Loading...</div> : <div>person...</div>}
    </div>
  }
}