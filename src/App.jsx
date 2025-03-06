import UserGreeting from "./Condition";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Card />
      <UserGreeting isLoggedIn={true} userName="Sam" />
      <UserGreeting isLoggedIn={false} userName="Jack" />
      <Footer />
    </>
  );
}

export default App
