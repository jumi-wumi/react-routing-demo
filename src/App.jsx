import { CartProvider } from "./context/CartContext";
import Router from "./Router";

import "./App.css";

function App() {
  return (
    <>
      {/* Med context kan vi wrappa bara Router i CartProvider och alla underliggande komponenter kan använda useContext(CartContext)  */}
      <CartProvider>
        {/* Alla pages i Router  */}
        <Router />
      </CartProvider>
    </>
  );
}

export default App;
