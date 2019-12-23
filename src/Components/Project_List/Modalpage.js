import React , {useState} from 'react'
import { Button,ButtonToolbar } from 'react-bootstrap';
import{ Modal} from 'react-bootstrap'
//import Comment from '../Comments'
import styled from 'styled-components'
import logo from './project-default.png'
import './ModalStyle.css'

/* const Title=styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`; */

const RowStyle=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  dir:rtl;
  padding:10px;
`;

const ColStyle=styled.div`
display: flex;
flex-direction: column;
dir:rtl;
padding:10px;
`;

const HeadingStyle=styled.h4`
text-align: center;
direction: rtl;
padding:10px;
`;

const PStyle=styled.p`
text-align: justify;
direction: rtl;
`;

//this modal page is from react-bootstrap
function MyVerticallyCenteredModal(props) {  
  return (
    <Modal
      {...props}
      dialogClassName="modal-90vw"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
              {props.data.front_title}
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RowStyle>
        <img src={logo}  alt ="logo"/>
        <ColStyle>
            <HeadingStyle>תיאור הפרויקט:</HeadingStyle>
            <PStyle>
             {props.data.description}
            </PStyle>
        </ColStyle>
        </RowStyle>
        <RowStyle>
          <ColStyle>
            <HeadingStyle>
              אנשי קשר:
            </HeadingStyle>
            <PStyle>
              {props.data.contact.name}
            </PStyle>
            <PStyle>
            טלפון:
            {" " +props.data.contact.phone}
            </PStyle>
          </ColStyle>
          <ColStyle>
            <HeadingStyle>
              פירוט:
            </HeadingStyle>
            <PStyle>
              כעכיע ךחךיעלחכג לךחיחעיכע וךלחףךילעחכ עליחלחךיעכ ילךחתעיחכ ןךלעחכיע ךלחעי ךלחכי ךלחי ךלחי ןךלוחטיא ךל חיךלחי עףםןוט 
            </PStyle>
          </ColStyle>
        </RowStyle>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalPage(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <ButtonToolbar>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <img src = {logo} alt = "pic" onClick ={() => setModalShow(true)} />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={props.data}
      />
    </ButtonToolbar>
  );
}

export default ModalPage