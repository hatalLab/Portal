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
    transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ModalOpen = styled.div`
    z-index: 4;
    position: fixed;
    bottom: 0px;
    transition: -webkit-transform 0.3s ease-out 0s;
    will-change: transform;
    overflow-y: auto;
    background: white;
    width: 80vh;
    text-align: center;
    height: 50vh;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 0 0;
    right: 0px;
    transform: ${props => props.open ? "translate(-50% ,-50%)" : "translateY(0%)" };
    visibility: ${props => props.open ? "visible" : "hidden"};
    box-shadow:rgba(0, 0, 0 ,0.15) -2px 2px 4px;
    top: 50%
    left: 50%;
    
`;

const Modal = () => {
    const [modalShow, setModalShow] = useState(false);
    console.log(modalShow)
    return (
        <>
        <img src = {logo} alt = "pic" onClick ={() => setModalShow(true)} />
        <Background onClick = {() => setModalShow(false)} open = {modalShow} />
        <ModalOpen open ={modalShow}>
            adsfhkjghfds hgfdgfsdas
        </ModalOpen>
        </>
    )

}

export default Modal