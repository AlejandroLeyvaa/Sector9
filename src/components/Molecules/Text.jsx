import React from 'react';

const Text = ({title, text}) => {
  return (
    <article>
        <h1 className="Title">{title}</h1>
        <p className="Text">
          {text}
        </p>
      </article>
  );
}

export default Text;