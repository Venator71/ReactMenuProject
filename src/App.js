import Menu from "./menu/Menu";

const menuItems = [
  {
    id: 1,
    type: 'Rack of Ribs.....................',
    price: 20,
    qty: 0
  },
  {
    id: 2,
    type: '2.5lbs Brisket....................',
    price: 25,
    qty: 0
  },
  {
    id: 3,
    type: 'Whole Chicken.................',
    price: 17,
    qty: 0
  },
  {
    id: 4,
    type: '1/2 Chicken.......................',
    price: 10 ,
    qty: 0
  },
  {
    id: 5,
    type: 'Grilled Carne Asada....... ',
    price: 15,
    qty: 0
  },
  {
    id: 6,
    type: 'Smoked Pork Loin...........',
    price: 30,
    qty: 0
  },
  {
    id: 7,
    type: 'Smoked Tri-Tip.................',
    price: 15,
    qty: 0
  }
];

function App() {
  return (
    <div>
      {/* <h1>Hello from the App component</h1> */}
      {/* Passing the menuItems array (Array of Objects) as the value for the startingItems prop in the Menu component */}
      <Menu startingItems={menuItems} />
    </div>
  );
}

export default App;
