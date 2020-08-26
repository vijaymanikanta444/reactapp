import React, { Component } from 'react';

export default class Person extends Component {
  state = {
    // friends: ['Babloo', 'Vijay', 'Deepak', 'Praveen'],
    friends: [
      { name: 'Babloo', id: 1 },
      { name: 'Vijay', id: 2 },
      { name: 'Deepak', id: 3 },
      { name: 'Harish', id: 4 },
    ],
    currentId: '',
    value: '',
    searchText: '',
  };

  display = (e) => {
    //let list = this.state.friends.push(e.target.value);
    this.setState({ value: e.target.value });
    // console.log(list);
  };
  show = (e) => {
    e.preventDefault();
    // console.log(this.state.value);
    // console.log(this.state.currentId);
    if (this.state.value !== '' && this.state.currentId == '') {
      this.setState({
        friends: [
          ...this.state.friends,
          {
            id: this.state.friends[this.state.friends.length - 1].id + 1,
            name: this.state.value,
          },
        ],
        value: '',
      });
    } else {
      // console.log(this.state.currentId);
      // console.log(this.state.value);
      /* modifing in new array */
      let oldFriends = this.state.friends;
      let newFriends = this.state.friends.map((friend, i) => {
        if (friend.id == this.state.currentId && this.state.value !== '') {
          // if (i == id && this.state.value !== '') {
          return { ...friend, name: this.state.value };
        }
        return friend;
      });
      this.setState({
        friends: newFriends,
        currentId: '',
        value: '',
      });
      // console.log(oldFriends, newFriends);
      /* modifing in same array
      // this.state.friends[this.state.currentId] = this.state.value;

      // this.setState({
      //   friends: this.state.friends,
      // });
      */
    }
  };
  delete = (e) => {
    this.setState({
      friends: this.state.friends.filter(
        (friend, i) => friend.id != e.target.id
      ),
    });
  };
  edit = (e) => {
    // console.log(e.target.id);
    this.setState({
      value: this.state.friends.find((f) => f.id == [e.target.id]).name,
      // value: this.state.friends[indexOf(this.state.friends.id)].name,
      currentId: e.target.id,
    });
  };
  search = (e) => {
    this.setState({ searchText: e.target.value });
    // console.log(this.state.searchText);
  };
  clear = () => {
    this.setState({ searchText: '' });
  };
  getPersons = () => {
    return this.state.friends.filter((friend) =>
      friend.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
  };

  render() {
    return (
      <div className="container">
        {/* console.log(this.state.friends) */}
        <form onSubmit={this.show}>
          <input
            type="text"
            onChange={this.display}
            value={this.state.value}
          ></input>
          <button className="btn" onClick={this.show}>
            ADD NAME
          </button>
        </form>
        <input
          placeholder="search here..."
          onChange={this.search}
          value={this.state.searchText}
        ></input>
        <button className="btn" onClick={this.clear}>
          Clear Search
        </button>
        {this.getPersons().map((friend, i) => (
          <h1>
            {i + 1} . {friend.name}{' '}
            <button id={friend.id} className="delete btn" onClick={this.delete}>
              X
            </button>
            <button id={friend.id} className="btn" onClick={this.edit}>
              EDIT
            </button>
          </h1>
        ))}
        {/* <span>{this.state.friends[this.state.i]}</span> */}
      </div>
    );
  }
}
