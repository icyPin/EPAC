import React from 'react';

const HeaderCard = ({ event }) => {
  return (
    <a href="#hero" className="nav-link text-light-text-on-dark hover:text-primary-accent">{event.title}</a>
  );
};

export default HeaderCard;

  