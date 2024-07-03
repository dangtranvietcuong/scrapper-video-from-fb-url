import { Container, Row, Col, Form, Button, Ratio } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [resultUrl, setResultUrl] = useState();
  const [body, setBody] = useState({
    link: "",
    video_type: "" 
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:6969/download", body)
    .then(res => setResultUrl(res.data.link_download))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Facebook URL</Form.Label>
                <Form.Control type="text" placeholder="Enter facebook url" onChange={(e) => setBody({...body, link: e.target.value})}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="Type" onChange={(e) => setBody({...body, video_type: e.target.value})}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Ratio aspectRatio="16x9">
              <iframe src={resultUrl} title="Video download success"></iframe>
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
