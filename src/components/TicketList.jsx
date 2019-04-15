import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";

function TicketList(){
  return(
    <Ticket
    location = "3A"
    names = "Thanos and Toasty Stark"
    issue = "Firebase will not save record!"/>
  );
};

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default TicketList;
