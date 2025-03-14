import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
  ];
  const vegetables = [
    { id: 6, name: "cauliflower", calories: 85 },
    { id: 7, name: "beans", calories: "name" },
    { id: 8, name: "corn", calories: 75 },
    { id: 9, name: "potato", calories: 50 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

    </>
  );
}

export default App
