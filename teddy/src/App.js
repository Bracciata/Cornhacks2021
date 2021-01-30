import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Row>
      <Col>
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          border="1px solid black"
          src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d%22%3E">
        </iframe>
      </Col>
    </Row>
  );
}

export default App;
