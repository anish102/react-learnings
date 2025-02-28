import UserGreeting from "./Condition";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Sam" />
      <UserGreeting isLoggedIn={false} userName="Jack" />
    </>
  );
}

export default App
