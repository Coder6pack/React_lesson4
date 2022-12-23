import logo from "./logo.svg";
import "./App.css";
import Container from "./component/Container/Container";
import { products } from "./data/datalist";

function App() {
  return (
    <div style={{ colorBackgroud: "pink" }}>
      {products.map((item, idx, arr) => (
        <Container
          title={item.name}
          img={item.image}
          price={item.price}
          content={item.desc}
        />
      ))}
    </div>
  );
}

export default App;
