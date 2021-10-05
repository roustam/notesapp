import React from "react";
import Label from "./Label";
import {connect} from "react-redux";
import { selectNote } from '../redux/actions'

class FooterPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    const { allNotes } = this.props.allNotes

    return this.props.allNotes.length === 0 ?
      <Label labelText={`3аметок нет`}/> :
      <Label labelText={`всего ${this.props.allNotes.length} заметок`} />
 }
}

const mapStateToProps = state => {
  return {
    allNotes: state.notes.notes,
  }
}

export default connect(mapStateToProps, null)(FooterPage)