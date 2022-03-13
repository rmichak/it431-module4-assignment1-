import NavBar from './components/NavBar'
import {Container, Card, Button} from 'react-bootstrap'
import {FaThumbsDown, FaThumbsUp} from 'react-icons/fa'

//Movie Data
import movieData from './movieData.json'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Container>
     <div className="df">
       <Card className="d">
         <Card.Body>
           <Card.Img
             variant="top"
             
             src="REPLACE ME" alt="REPLACE ME"
           />
           <Card.Title>MOVIE TITLE HERE</Card.Title>
           <Card.Text>MOVIE CATEGORY HERE</Card.Text>
           <Button variant="primary"><FaThumbsUp/ > LIKES HERE </Button>{" "}
           <Button className="ml-2" variant="primary">
             <FaThumbsDown/> DISLIKES HERE
           </Button>
         </Card.Body>
       </Card>
       </div>

     </Container>
    </div>
  );
}

export default App;
