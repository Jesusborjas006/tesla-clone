import ModelHeadingContainer from "../ModelHeadingContainer/ModelHeadingContainer";
import models from "../../modelsData";
import HomeButtons from "../HomeButtons/HomeButtons";

const Background = () => {
  return (
    <>
      <div className="background-1">
        <ModelHeadingContainer
          modelType={models[0].name}
          modelPrice={models[0].price}
        />
        <HomeButtons
          button1Text="Explore Inventory"
          button2Text="Custom Order"
        />
      </div>
      <div className="background-2">
        <ModelHeadingContainer
          modelType={models[1].name}
          modelPrice={models[1].price}
        />
        <HomeButtons
          button1Text="Explore Inventory"
          button2Text="Custom Order"
        />
      </div>
      <div className="background-3">
        <ModelHeadingContainer
          modelType={models[2].name}
          modelPrice={models[2].price}
        />
        <HomeButtons button1Text="Custom Order" button2Text="Demo Drive" />
      </div>
      <div className="background-4">
        <ModelHeadingContainer
          modelType={models[3].name}
          modelPrice={models[3].price}
        />
        <HomeButtons button1Text="Custom Order" button2Text="Demo Drive" />
      </div>
      <div className="background-5">
        <ModelHeadingContainer
          modelType={models[4].name}
          info={models[4].info}
        />
        <HomeButtons button1Text="Order Now" button2Text="Learn More" />
      </div>
      <div className="background-6">
        <ModelHeadingContainer
          modelType={models[5].name}
          info={models[5].info}
        />
        <HomeButtons button1Text="Order Now" button2Text="Learn More" />
      </div>
      <div className="background-7">
        <ModelHeadingContainer modelType={models[6].name} />
        <HomeButtons button1Text="Order Now" button2Text="Learn More" />
      </div>
      <div className="background-8">
        <ModelHeadingContainer modelType={models[7].name} />
        <div className="btn-container">
          <button className="home-btn-3">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Background;
