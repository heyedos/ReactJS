import Header from "./Components/Header";
import Container from "./Components/Container";
import Bottom from "./Components/Bottom";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col gap-7 max-md:gap-10 max-md:max-w-md relative">
      <Header />
      <Container />
      <Bottom />
    </div>
  );
}

export default App;
