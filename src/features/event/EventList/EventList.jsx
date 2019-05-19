import React, { Component } from 'react'
import EventListItem from './EventListItem'
 class EventList extends Component {
  render() {
    // props == widget in flutter
    const {events} = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {/* Loops the events state and pass the props*/}
        {events.map((event) => (
            <EventListItem key={event.id} event={event}/>
        ))}
      </div>
    )
  }
}

export default EventList