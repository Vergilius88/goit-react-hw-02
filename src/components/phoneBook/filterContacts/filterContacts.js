import { Component } from "react";

export default class Filter extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { onChange } = this.props;

    return (
      <label>
        Search contacts by name
        <input
          type="text"
          placeholder="Enter a name to search."
          name="filter"
          onChange={onChange}
        />
      </label>
    );
  }
}
