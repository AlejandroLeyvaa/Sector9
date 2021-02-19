import React from 'react';

const Categories = ({cls, image, title}) => {
  return (
    <article className="Categories-products">
      <div>
        <h1 className="Title">{title}</h1>
      </div>
      <figure className="Categories-products-figure">
        <img className={cls} src={image} alt={title} />
      </figure>
    </article>
  );
};

export default Categories;
