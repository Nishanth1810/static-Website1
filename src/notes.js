import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {notes} from './notesData';
import {Ul, Title} from './elements';

export const Error = props => {
  return (
    <div>
      <p>Error!</p>
      <p>
        Here's a link to the <a href="/">homepage</a>.
      </p>
    </div>
  );
};

export const Note = props => {
  let page = '';

  if (props.slug in notes) {
    page = notes[props.slug];
  }

  let content = <Error />;
  if (page !== '') {
    content = (
      <div>
        <Title>{page.title}</Title>
        <div>{page.body}</div>
      </div>
    );
  }

  return content;
};

export const Notes = props => {
  let notesList = Object.keys(notes).map(k => (
    <li key={k}>
      <Link to={'/' + k}>{notes[k].title}</Link>
    </li>
  ));
  return (
    <div>
      <Title>Notes</Title>
      <Ul>{notesList}</Ul>
    </div>
  );
};
