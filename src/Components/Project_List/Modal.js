import React,{useState} from 'react'
import styled from 'styled-components'
import logo from './project-default.png'

const Background =styled.div`
    z-index: 3;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity:    ${props => props.open ? "1" : "0"};
    visibility: ${props => props.open ? "visible" : "hidden"};
    tran sition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
    z-index: 4;
    position: fixed;
    bottom: 0px;
    transition: -webkit-transform 0.3s ease-out 0s;
    will-change: transform;
    overflow-y: auto;
    background: white;
    text-align: center;
    height: fit-content;
    width: 80vw;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    right: 0px;
    transform: ${props => props.open ? "translate(-50% ,-50%)" : "translateY(0%)" };
    visibility: ${props => props.open ? "visible" : "hidden"};
    box-shadow:rgba(0, 0, 0 ,0.15) -2px 2px 4px;
    top: 50%
    left: 50%;`

const StyledImage = styled.img`
&&{
    height: 250px;
    width: 250px;
}
`
const ModalHeader=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`
const ModalTitle = styled.h4`
    font-family:arial;
`
const Hr=styled.hr`
    padding: 0;
    margin:0;
`
const ModalBody = styled.div`
    padding: 10px;
`
const ModalFooter =styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
`
const ModalPar=styled.p`
    text-align: justify;
    direction: rtl;
    font-family: unset;
    padding: 10px 20px;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    direction:rtl;
    padding:10px 20px;
`
const Col =styled.div`
    display: flex;
    flex-direction: column;
    direction: rtl;
`
const StyledPre = styled.pre`
    display: block;    
    font-family: unset;
    font-size: 16px;
    color: black;
    padding: 10px 20px 0 0;
    margin: 0;
`
const Button = styled.button`
    background-color: ${props => props.color || "blue"}
    color: white;
`
const Modal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            {/*the button to open the modal is the image */}
            <StyledImage src = {require(`${props.data.img_src}`)} alt = "pic" onClick ={() => setModalShow(true)} />
            {/* header */}
            <Background onClick = {() => setModalShow(false)} open = {modalShow} />
            <ModalContainer open = {modalShow} >
                {/*title */}
                <ModalHeader>
                    <ModalTitle>{props.data.front_title}</ModalTitle>
                    <ModalTitle> {props.data.platoon}</ModalTitle>
                </ModalHeader>

                <Hr />

                <ModalBody>
                    <Row>
                        <Col>
                            <ModalTitle>תיאור הפרויקט:</ModalTitle>
                            <ModalPar>{props.data.description}</ModalPar>                        
                        </Col>
                            <StyledImage src={require(`${props.data.img_src}`)}  alt ="logo"/>
                    </Row>
                    <Row>
                        <Col>
                            <ModalTitle>פירוט:</ModalTitle>
                            <ModalPar>{props.data.details}</ModalPar>
                        </Col>
                        <Col>
                           <ModalTitle>אנשי קשר:</ModalTitle>
                           <StyledPre>{props.data.contact.rank +" " + props.data.contact.name }</StyledPre> 
                           <StyledPre>{props.data.contact.phone }</StyledPre>              
                        </Col>
                    </Row>
                </ModalBody>
                <Hr />
                <ModalFooter>
                    <Button color = "red" onClick = {() => setModalShow(false)}>סגור</Button>
                    <Button>להצטרפות</Button>
                </ModalFooter>
            </ModalContainer>
        </>
    )

}

export default Modal