import { Link, useSubmit } from 'react-router-dom'

import classes from './EventItem.module.css';

function EventItem({ event }) {

  //   this submit function is given by useSubmit hook. When Form is submitted it automatically triggers the useSubmit.
  //      but on this page we have no Form, only button and handler. So we trigger useSubmit our selves, so the 
  //        action function in router in <EventDetail> element is triggered=)))
  const submit = useSubmit()

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?')

    if (proceed) {
      // we can pass 2 arguments. 1 = the data we want to submit. this data then can be accessed in action function using:
      // =====  {request, params} => request.formData() = this will return passed data in firts argument (here it s null) 
      //   second argument is method, which tells backend how to handle this request.
      
      //=================================>    using this action we can tell which action function in route to use
      // submit(null, {method: 'delete', action:'/the-needed-route'})

      submit(null, {method: 'delete'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link  to={'edit'}>Edit</Link >
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
