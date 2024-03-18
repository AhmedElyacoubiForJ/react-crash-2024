const App = () => {
  const name = "John";
  const x = 10;
  const y = 20;
  const names = ["Brad", "Mary", "Joe", "Sara"];
  const loggedIn = true

  const styles = {
    color: 'red', 
    fontSize: '55px'
  }

  /* if (loggedIn) {
    return <h1>Hello Member</h1>
  } */

  return (
    <>
      <div className="text-9xl">App</div>
      <p style={{color: 'red', fontSize: '28px'}}>Hello {name} </p>
      <p style={styles}>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn &&<h1>Hello Member</h1>}
    </>
  );
};
export default App;
