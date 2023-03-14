import React from "react";
import Card from "../Common/Card";
import data from "../Common/data";

function Pages() {
  return (
    <div>
      <div className="row mx-auto">
        {data.map((data) => (
          <Card key={data.id}
          id={data.id}
            title={data.imageTitle}
            text={data.imageText}
            src={data.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Pages;
