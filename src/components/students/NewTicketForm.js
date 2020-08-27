import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addNewTicket } from "../actions/actions";
import "./StudentDashboard.css";
import StudentNav from "./StudentNav";
import { useHistory } from "react-router-dom";

const NewTicketForm = (props) => {

    const history = useHistory();

  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    what_ive_tried: "",

  });



  const submitNewTicket = (e) => {
    console.log("submitted!");
    e.preventDefault();
    props.addNewTicket(newTicket);
    history.push("/student_dashboard");
  };

  const handleChanges = (e) => {
    setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <StudentNav />
      <h3>Create new ticket.</h3>
      <Form onSubmit={submitNewTicket} className="newTicketFormGroup">
        <FormGroup>
          <Label htmlFor="title" xs={4}>
            <Input
              id="title"
              type="text"
              name="title"
              value={newTicket.title}
              onChange={handleChanges}
              placeholder="Title goes here"
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description" xs={4}>
            <Input
              id="description"
              type="text"
              name="description"
              value={newTicket.description}
              onChange={handleChanges}
              placeholder="Describe your problem"
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="what_ive_tried" xs={4}>
            <Input
              id="what_ive_tried"
              type="text"
              name="what_ive_tried"
              value={newTicket.what_ive_tried}
              onChange={handleChanges}
              placeholder="What have you tried doing?"
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category" className="dropDownNewTicket">
            <select id="category" name="category" type="text" value={newTicket.categories} onChange={handleChanges}>
              <option>Pick a category</option>
              <option value="React">React</option>
              <option value="Back End">Back End</option>
              <option value="SASS">SASS</option>
              <option value="Animation">Animation</option>
            </select>
          </Label>
        </FormGroup>

        <Button type="submit" onClick={submitNewTicket} style={{ backgroundColor: "#74CBC1" }}>
          Submit Ticket
        </Button>
      </Form>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    tickets: state.tickets,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapsStateToProps, 
  { addNewTicket }
  )(NewTicketForm);
