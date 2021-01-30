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
          src="https://console.dialogflow.com/api-client/demo/embedded/baacb116-5167-4c03-b8e3-ee85a43bb82d">
        </iframe>
      </Col>
    </Row>
  );
}

export default App;
