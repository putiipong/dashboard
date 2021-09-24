
import { useEffect, useState, useRef, Suspense } from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import DateTime from './components/DateTime'
import Footer from './components/Footer'
import { Member, Rnd } from './components/Machine'
import { Doughnut, Bar } from './components/Chart'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';

function App() {

  const ref = useRef()

  const defaultRnd = {
    x: 15,
    y: 15,
    width: 100,
    height: 100,
    name: 'New Machine'
  }

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [boxWidth, setBoxWidth] = useState();
  const [boxHeight, setBoxHeight] = useState();

  const [macList, setMacList] = useState([{
    x: 15,
    y: 15,
    width: 100,
    height: 100,
    name: 'Old Machine'
  }]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onresize = function (event) {
        setBoxHeight(ref.current.offsetHeight)
        setBoxWidth(ref.current.offsetWidth)
      }
    }
  }, [boxHeight, boxWidth])

  const addRnd = () => {
    const newBought = [...macList, defaultRnd]
    setMacList(newBought)
  }

  const onDragStop = (val, key) => {
    setBoxHeight(ref.current.offsetHeight)
    setBoxWidth(ref.current.offsetWidth)
  }

  const renderMac = () => {
    let listMac = []
    macList.map((item, index) => {
      listMac.push(<Rnd onDragStop={onDragStop} key={index} data={item} boxHeight={boxHeight} boxWidth={boxWidth} />)
    })
    return listMac
  }

  const Loader = () => <div className="spinner-border spin-position" role="status">
    <span className="sr-only"></span>
  </div>

  return (
    <Suspense fallback={<Loader />}>
      <div className="container-app">
        <Container>
          <Row>
            <Col sm="6">
              <h4>WGR-PLANT MACHINE OPERATION</h4>
            </Col>
            <Col sm="6" className="d-flex justify-content-end">
              <Row>
                <Col sm="6">
                  <DateTime onChange={setDateStart}
                    value={dateStart} />
                </Col>
                <Col sm="6">
                  <DateTime onChange={setDateEnd}
                    value={dateEnd} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={() => addRnd()}>Add Machine</Button>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col sm={8}>
              <Card style={{ height: '100%' }}>
                <Card.Body >
                  <Row className="m-0 box-machine">
                    <Col className="style-box" ref={ref}>
                      {/* <GridLayout /> */}
                      {renderMac()}
                    </Col>
                  </Row>
                  <Row className="m-0 mt-2 box-member">
                    <Col className="style-box">
                      <Member />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} >
              <Card >
                <Card.Body>
                  <Row className="style-box m-0">
                    <Col>
                      <Doughnut />
                    </Col>
                    <Col>
                      <Bar />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Card>
                <Card.Body>
                  <Footer />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Suspense>
  );
}

export default App;
