import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}

class EventForm extends Component {

  state = {
    event: emptyEvent
  }

  // LifeCycleEvent
  componentDidMount(){
    console.log("Mounted", this.props.selectedEvent)
    // Check if props has a value and update event state
    if(this.props.selectedEvent !== null){
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }
  // Called when receive a props
  componentWillReceiveProps(nextProps){
    console.log(`current`, this.props.selectedEvent)
    console.log(`next `, nextProps.selectedEvent)
    //  check if next props = current props
    if(nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  componentWillUnmount(){
    console.log("unmount")
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    // if value is passed to the form update
    if(this.state.event.id){
      this.props.updatedEvent(this.state.event)
      this.setState({
        event: emptyEvent
        })
    }else{
      // if empty create new
   this.props.createEvent(this.state.event)
   
    }
    
  }

  // Get all event value base on name
  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event:newEvent
    })
  }

  render() {
    const {handleCancel} = this.props;
    const {event} = this.state;
    return (
           <Segment>
             <Form onSubmit={this.onFormSubmit}>
               <Form.Field>
                 <label>Event Title</label>
                 <input name="title" onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
               </Form.Field>
               <Form.Field>
                 <label>Event Date</label>
                 <input name="date" onChange={this.onInputChange} value={event.date} type="date" placeholder="Event Date" />
               </Form.Field>
               <Form.Field>
                 <label>City</label>
                 <input name="city" onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
               </Form.Field>
               <Form.Field>
                 <label>Venue</label>
                 <input name="venue" onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
               </Form.Field>
               <Form.Field>
                 <label>Hosted By</label>
                 <input name="hostedBy" onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of person hosting" />
               </Form.Field>
               <Button color="blue" type="submit">
                 Submit
               </Button>
               <Button onClick={handleCancel} type="button">Cancel</Button>
             </Form>
           </Segment>
    )
  }
}

export default EventForm
