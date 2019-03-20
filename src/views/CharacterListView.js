import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetching } from "../actions/index";

export class CharacterListView extends React.Component {
  componentDidMount() {
    console.log("cdm working");
    this.props.fetching();
  }

  render() {
    // if (this.props.fetching) {
    //   return <h1>Loading...</h1>;
    // }
    return (
      <div className="CharactersList_wrapper">
        {console.log(this.props.characters)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.charsReducer.fetching);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
}
export default connect(
  mapStateToProps,
  { fetching }
)(CharacterListView);
