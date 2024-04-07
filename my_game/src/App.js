import {ContextProvider} from "./context/ContextProvider";
import Layout from "./Pages/Layout";

function App() {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}
export default App;
