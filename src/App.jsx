import Card from "./Card";
import Student from "./Student";

function App() {
  return (
    <>
      <Card />
      <Card />
      <Student name="Tom" age={25} isStudent={true} />
      <Student name="Sam" age={30} isStudent={false} />
      <Student name="Jack" age={19} isStudent={true} />
      <Student name="Test" />
    </>
  );
}

export default App
