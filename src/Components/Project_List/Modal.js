import React,{ useState, useRef } from 'react'
import styled from 'styled-components'
import {
    AwesomeButton,
    AwesomeButtonProgress,
  } from "react-awesome-button"
  import "react-awesome-button/src/styles/themes/theme-c137";


const ImageSize = {
    width: 250,
    height: 250
}

const Background =styled.div`
    z-index: 3;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity:    ${props => props.open ? "1" : "0"};
    visibility: ${props => props.open ? "visible" : "hidden"};
    transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
    background-color: rgba(0, 0, 0, 0.3);`

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
    max-height: 90vh;
    width: 80vw;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    right: 0px;
    transform: ${props => props.open ? "translate(-50% ,-50%)" : "translateY(0%)" };
    visibility: ${props => props.open ? "visible" : "hidden"};
    box-shadow:rgba(0, 0, 0 ,0.15) -2px 2px 4px;
    top: 50%;
    left: 50%;
    cursor: default;
    user-select: none;
    -ms-user-select: none;`

const SecondModalBg=styled(Background)`
    z-index: 15;
    opacity:    ${props => props.over ? "1" : "0"};
    visibility: ${props => props.over ? "visible" : "hidden"};
    backdrop-filter: ${props => (props.over ? "blur(1px)" : "blur(0)")};
    background-color: rgba(0, 0, 0, 0.4);
`

const SecondModal= styled(ModalContainer)`
    z-index: 16;
    transform: ${props => props.over ? "translate(-50% ,-50%)" : "translateY(0%)" };
    visibility: ${props => props.over ? "visible" : "hidden"};
`

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

    & > * {
        padding: 0 10px;
    }
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
// styled-components for hovering on image
// .container
const StyledContainer = styled.div`
    position: relative;
    width: ${ImageSize.width + 'px'};
    cursor: pointer;
    user-select: none;
    -ms-user-select: none;

    &:hover .image {
        opacity: 0.2;
    }
    &:hover .middle {
        opacity: 1;
    }
    `

// image
const StyledImageWithHover = styled.img`
    opacity: 1;
    display: block;
    width: ${ImageSize.width +'px'};
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;`

// .middle
const StyledMiddle = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width:100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;`


const StyledText = styled.div`
    direction: ltr;
    color: black;
    font-size: 16px;
    overflow-y: auto;
    width: ${ImageSize.width - 20 + 'px'};
    height: ${ImageSize.height - 20 + 'px'};
    text-align: right;
    margin-right: 30px;
    &:focus {
        outline: none;
    }`

    const StyledJustifiedParagraph=styled.p`
    direction: rtl;
    text-align: justify
    padding: 0 15px 5px 0;`

const StyledTable =styled.table`
border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
`
const Td=styled.td`
border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
`
const Th= styled.th`
border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
`
const CenteredDiv = styled.div`
margin: 20px auto;
width: 100%;
display: flex;
justify-content: center;
`

const Table = (props) => {
    return (
        
        <StyledTable>
            <thead>
                <tr>
                    <Th>תיאור המשימה בשלב זה</Th>
                    <Th>כ"א נדרש</Th>
                    <Th>כלים נדרשים</Th>
                    <Th>זמן להשלמה</Th>
                </tr>
            </thead>
            <tbody>

<tr>
    <Td>{props.data[0].description}</Td>
    <Td>{props.data[0].personnel}</Td>
    <Td>{props.data[0].tools}</Td>
    <Td>{props.data[0].period}</Td>
</tr>
            </tbody>
        </StyledTable>
    )
}

const ImplementationModalContent= (props) => {
    return (
        <>
        <ModalHeader>
            <ModalTitle>צורת מימוש לפי שלבים:</ModalTitle>
        </ModalHeader>
        <Hr />
        <CenteredDiv>
            <Table data ={props.data} />
        </CenteredDiv>
        </>
    )
}

const Modal = (props) => {
    const [modalShow, setModalShow] = useState(false)
    const [ImplementationModalShow, setImplementationModalShow] = useState(false)
    const [SchedulenModalShow, setScheduleModalShow] = useState(false)

    const [focus, setFocus] = useState(false)
    const ref = useRef(null)
    const handleHover = () => {
        setFocus(true)
        ref.current.focus()
        // props.setOverFow()
    }
    const handleBlur = () => {
        setFocus(false)
        ref.current.scrollTop = 0
        ref.current.blur()
        //props.setOverFow()
    }

    return (
        <>
        
            {/*the button to open the modal is the image */}
            {/* header */}
            <SecondModalBg className="secondBackground" onClick={() => setImplementationModalShow(false)} over = {ImplementationModalShow} />
                    <SecondModal className="secondModal" over = {ImplementationModalShow}>
                        <ImplementationModalContent data = {props.data.implementation} />
                            <Hr />
                        <Row>
                            <AwesomeButton type="secondary" onPress = {() => setImplementationModalShow(false)}>
                        סגירה 
                    </AwesomeButton>

                        </Row>
                        </SecondModal>
                        <SecondModalBg className="secondBackground" onClick={() => setScheduleModalShow(false)} over = {SchedulenModalShow} />
                        <SecondModal className="secondModal" over = {SchedulenModalShow}>

    <ModalHeader>
        <ModalTitle>
        לו"ז הפרויקט: (בימי עבודה מלאים)
        </ModalTitle>
    </ModalHeader>
    <Hr />
    <Row>
    <p>
        הערה: פרויקט זה ינוהל בשיטה פרוגרסיבית בה יתווספו פיצ'רים לאורך הזמן. בנוסף במידה וצוות הפרויקטיהיה גדול דיו ניתן יהיה לעבוד על פיצ'רים שונים במקביל.

    </p>
</Row>
<Hr />
<Row>
<AwesomeButton type="secondary" onPress = {() => setScheduleModalShow(false)}>
                        סגירה 
                    </AwesomeButton>
</Row>
</SecondModal>
            <Background className="background" onClick = {() => setModalShow(false)} open = {modalShow} />
            <StyledContainer className="container" onClick={()=>setModalShow(true)}>
                <StyledImageWithHover src={require(`${props.data.img_src}`)}  alt="Avatar" className="image" />
                <StyledMiddle className="middle">
                    <StyledText className="text" tabIndex = { focus ? "1" : "0"} ref = {ref} onMouseEnter = {handleHover} onMouseLeave = {handleBlur} >
                        <StyledJustifiedParagraph>
                        {props.data.description}
                        </StyledJustifiedParagraph>
                    </StyledText>
                </StyledMiddle>
            </StyledContainer>
            <ModalContainer className="modal" open = {modalShow} >
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
                    <Row>
                        <AwesomeButton type="primary" onPress = {() => setImplementationModalShow(true)}>
                            מימוש לפי שלבים
                        </AwesomeButton>
                        <AwesomeButton type="primary" onPress = {() => setScheduleModalShow(true)}>
                            לו"ז הפרויקט
                        </AwesomeButton>
                    </Row>
                </ModalBody>
                <Hr />
                <ModalFooter>
                <AwesomeButton type="secondary" onPress={() => setModalShow(false)}>
                    סגירה 
                </AwesomeButton>
                    {/* <Button color = "red" onClick = {() => setModalShow(false)}>סגור</Button> */}
                    <AwesomeButtonProgress
                       
                        type="primary"
                        size="medium"
                        resultLabel="נשלח!"
                        releaseDelay={600}
                        ripple={true}
                        onPress={(element, next) => {
                        setTimeout(() => {
                            next();
                        }, 600);
                        }}
                            >
                        להצטרפות
                    </AwesomeButtonProgress>
                </ModalFooter>
            </ModalContainer>
        </>
    )

}

export default Modal