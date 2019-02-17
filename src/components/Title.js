import React from 'react';

const Title = ({name,title}) => (
  <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-bright">
        <h1 className="text-capitalize font-weight-bold">
        {name} <strong className="text-bright">
        {title}
        </strong>
        </h1>
      </div>
  </div>
);

export default Title;
