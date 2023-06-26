const ModelHeadingContainer = (props) => {
  return (
    <div className="model-3-heading-container">
      <h2 className="model-heading">{props.modelType}</h2>
      {/* <p>Starting at ${props.modelPrice}</p> */}
      {props.modelPrice ? (
        <p>Starting at ${props.modelPrice}</p>
      ) : (
        <p>{props.info}</p>
      )}

      {props.modelPrice ? <p>After Federal Tax Credit</p> : ""}
    </div>
  );
};

export default ModelHeadingContainer;
