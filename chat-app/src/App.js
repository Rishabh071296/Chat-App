import Header from "./components/header";
import LiveVisitors from "./components/Live Visitors";
import RoomChat from "./components/RoomChat";
import PublicChat from "./components/PublicChat";
import { Container,Row } from "reactstrap";

function App() {
  return (
    <div>
     <header/>
     <LiveVisitors/>
     <RoomChat/>
     <PublicChat/>
    </div>
  );
}

export default App;
