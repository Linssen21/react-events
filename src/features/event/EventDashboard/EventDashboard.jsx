//rcc to create react component
import React, { Component } from 'react'
import {Grid, Button} from 'semantic-ui-react';
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid';

const eventsDashBoard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


 class EventDashboard extends Component {
    state = {
      events: eventsDashBoard,
      isOpen: false,
      selectedEvent: null
    }

  // use arrow functions
  handleFormOpen = (data) => () => {
    console.log(data)
    this.setState({
      // when form open set to null
      selectedEvent: null,
      isOpen: true
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  
  handleDeleteEvent = (deletetId) => () => {
    // filter the list of state where id not equals to the deleteID
    const updatedEvent = this.state.events.filter(event => event.id !== deletetId)
    this.setState({
      events: updatedEvent
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          // returns a copy of updatedEvent
          return Object.assign({}, updatedEvent);
        }else{
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }


  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    // create a randomId
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/images/user.png'
    // spread operator
    const updatedEvents = [...this.state.events, newEvent]
    console.log(updatedEvents);
    // update State and append events
    this.setState({
      events:updatedEvents,
      isOpen:false,
      selectedEvent: null,
    })
  }
  
  render() {
    const {selectedEvent} = this.state;
    return (
     <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} eventToOpen={this.handleOpenEvent} events={this.state.events}/>
        </Grid.Column>
        <Grid.Column width={6}>
          {/* Avoid putting an arrow function it may affect the performance of the app */}
          <Button onClick={this.handleFormOpen('open')} color="blue" content='Create Event'/>
          {this.state.isOpen && 
          <EventForm updatedEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/>
        }
        </Grid.Column>
     </Grid>
    )
  }
}

export default EventDashboard
