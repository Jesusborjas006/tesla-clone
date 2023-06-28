const HomeButtons = (props) => {
  return (
    <div className="btn-container">
      <button className="home-btn-1">{props.button1Text}</button>
      <button className="home-btn-2">{props.button2Text}</button>
    </div>
  )
}

export default HomeButtons
