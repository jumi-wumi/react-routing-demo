import Table from "../components/Table";
import products from "../data/products";

const Staff = () => {
  // array för vilka columns som ska visas i vilken ordning så vi kan lägga till kolumner sen (tackvare att vi map:ar arrayn)
  const columns = ["name", "price", "category"];

  return (
    <div>
        <h1>Inventeringssida</h1>
        <Table columns={columns} data={products} /> 
    </div>
);
};

export default Staff;
