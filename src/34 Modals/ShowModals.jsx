let MyModal = ({closeModal}) => {
  return (
    <>
      <h1>Try the new React documentation.</h1>
      <p>
        React has been designed from the start for gradual adoption, and you can
        use as little or as much React as you need. Whether you want to get a
        taste of React, add some interactivity to a simple HTML page, or start a
        complex React-powered app, the links in this section will help you get
        started.
      </p>
      <button onClick={closeModal}>Accept</button>
    </>
  );
};

export default MyModal