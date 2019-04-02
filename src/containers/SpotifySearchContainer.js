import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBarContainer from './SearchBarContainer';
import ItemListContainer from './ItemListContainer'

export default class SpotifySearchContainer extends Component {
  render() {
    return (
      <StyledComponentLabel>
        <header className="App-header">
          <h1>Spotify Search App</h1>
        </header>
        <SearchBarContainer/>
        <ItemListContainer />
      </StyledComponentLabel>
    );
  }
}

export const StyledComponentLabel = styled.div`
  margin-top: 5%;
`;

