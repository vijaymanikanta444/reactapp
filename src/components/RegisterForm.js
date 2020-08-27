import React, { Component } from 'react';
import { Button, Form, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RegisterForm extends Component {
  state = {
    list: [
      {
        firstName: 'vijay',
        lastName: 'manikanta',
        age: 23,
        gender: 'male',
      },
      {
        firstName: 'Harish',
        lastName: 'Saradam',
        age: 28,
        gender: 'male',
      },
    ],
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    currentId: '',
  };

  // first = (e) => {
  //   this.setState({ firstName: e.target.value });
  //   // console.log(this.state.firstName);
  //   // console.log(e.target.value);
  // };
  // last = (e) => {
  //   this.setState({ lastName: e.target.value });
  //   // console.log(this.state.firstName);
  //   // console.log(e.target.value);
  // };
  // age = (e) => {
  //   this.setState({ age: e.target.value });
  //   // console.log(this.state.firstName);
  //   // console.log(e.target.value);
  // };
  // gender = (e) => {
  //   this.setState({ gender: e.target.value });
  //   // console.log(e.target.value);
  // };

  onchange = (e) => {
    if (e.target.id === 'firstname') {
      this.setState({ firstName: e.target.value });
    } else if (e.target.id === 'lastname') {
      this.setState({ lastName: e.target.value });
    } else if (e.target.id === 'age') {
      this.setState({ age: e.target.value });
    } else {
      this.setState({ gender: e.target.value });
    }
    console.log(e.target.value);
  };

  remove = (e) => {
    this.setState({
      list: this.state.list.filter((friend, i) => i != e.target.id),
    });
  };
  edit = (e) => {
    this.setState({
      firstName: this.state.list.find((f, i) => i == e.target.id).firstName,
      lastName: this.state.list.find((f, i) => i == e.target.id).lastName,
      age: this.state.list.find((f, i) => i == e.target.id).age,
      gender: this.state.list.find((f, i) => i == e.target.id).gender,
      currentId: e.target.id,
    });
    // console.log(e.target.id);
    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
    // console.log(this.state.age);
    // console.log(this.state.gender);
  };
  register = () => {
    // let newPerson = {
    //   firstName: 'Harish',
    //   lastName: 'saradam',
    //   age: 28,
    //   gender: 'male',
    // };
    let newPerson = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      gender: this.state.gender,
    };

    // console.log(newPerson);
    if (
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.age !== '' &&
      this.state.gender !== '' &&
      this.state.currentId == ''
    ) {
      this.setState({ list: [...this.state.list, newPerson] });
      this.setState({ firstName: '', lastName: '', age: '', gender: '' });
    } else {
      let oldList = this.state.list;
      let newList = this.state.list.map((f, i) => {
        if (
          this.state.firstName !== '' &&
          this.state.lastName !== '' &&
          this.state.age !== '' &&
          this.state.gender !== '' &&
          i == this.state.currentId
        ) {
          console.log(i);
          // return { ...f, newPerson };
          console.log(this.state.list[i].firstName);
          return { ...f, firstName: this.state.firstName };
        }
        console.log(i);
        console.log(this.state.list[i].firstName);
        console.log(newPerson);

        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.age);
        console.log(this.state.gender);
        return f;
      });
      this.setState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        currentId: '',
      });
    }

    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
    // console.log(this.state.age);
    // console.log(this.state.gender);
  };
  render() {
    return (
      <div className="form">
        <Form>
          <Form.Row>
            <Form.Group as={Col} className="grp">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="Enter First Name"
                id="firstname"
                // onChange={this.first}
                onChange={this.onchange}
                value={this.state.firstName}
              />
              <span className="blank">can't be blank</span>
            </Form.Group>
            <Form.Group as={Col} className="grp">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                id="lastname"
                // onChange={this.last}
                onChange={this.onchange}
                value={this.state.lastName}
              />
              <span className="blank">can't be blank</span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} className="grp">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                id="age"
                // onChange={this.age}
                onChange={this.onchange}
                value={this.state.age}
              />
              <span className="blank">can't be blank</span>
            </Form.Group>
            <Form.Group as={Col} className="grp">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  // onClick={this.gender}
                  onClick={this.onchange}
                  type="radio"
                  label="female"
                  id="female"
                  name="gender"
                  value="female"
                  checked={this.state.gender === 'female'}
                />
                <Form.Check
                  type="radio"
                  label="male"
                  name="gender"
                  id="male"
                  value="male"
                  // onClick={this.gender}
                  onClick={this.onchange}
                  checked={this.state.gender === 'male'}
                />
                <span className="blank">can't be blank</span>
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
        <Button
          className="btn btn-bottom"
          variant="primary"
          type="submit"
          onClick={this.register}
        >
          Register
        </Button>

        <Table striped bordered hover>
          <thead className="tHead">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((f, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{f.firstName}</td>
                <td>{f.lastName}</td>
                <td>{f.age}</td>
                <td>{f.gender}</td>
                <td>
                  <Button
                    className="btn btn-primary btn-full"
                    onClick={this.edit}
                    id={i}
                  >
                    EDIT
                  </Button>
                </td>
                <td>
                  <Button
                    id={i}
                    className="btn btn-danger btn-full"
                    onClick={this.remove}
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
