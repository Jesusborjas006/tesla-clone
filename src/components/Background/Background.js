import ModelHeadingContainer from "../ModelHeadingContainer/ModelHeadingContainer";
import models from "../../modelsData";

const Background = () => {
  return (
    <>
      <div className="background-1">
        <ModelHeadingContainer
          modelType={models[0].name}
          modelPrice={models[0].price}
        />
      </div>
      <div className="background-2">
        <ModelHeadingContainer
          modelType={models[1].name}
          modelPrice={models[1].price}
        />
      </div>
      <div className="background-3">
        <ModelHeadingContainer
          modelType={models[2].name}
          modelPrice={models[2].price}
        />
      </div>
      <div className="background-4">
        <ModelHeadingContainer
          modelType={models[3].name}
          modelPrice={models[3].price}
        />
      </div>
      <div className="background-5">
        <ModelHeadingContainer
          modelType={models[4].name}
          info={models[4].info}
        />
      </div>
      <div className="background-6">
        <ModelHeadingContainer
          modelType={models[5].name}
          info={models[5].info}
        />
      </div>
      <div className="background-7">
        <ModelHeadingContainer
          modelType={models[6].name}
        />
      </div>
      <div className="background-8">
        <ModelHeadingContainer
          modelType={models[7].name}
        />
      </div>
    </>
  );
};

export default Background;
