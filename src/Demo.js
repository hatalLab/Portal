// import React from 'react'
// // import { Button,ButtonToolbar } from 'react-bootstrap';
// import{ Modal} from 'react-bootstrap'
// import './style.css'
// import logo from './project-default.png'
// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         dialogClassName="my-modal"

//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
  
//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <ButtonToolbar>
//         {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button> */}
//         <img id="pic" src={logo} alt="def" onClick={() => setModalShow(true)} title="project details" ></img>
  
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </ButtonToolbar>
//     );
//   }
//   export default App
// //   render(<App />);