import React, {
    Component
} from 'react'
import styled from 'styled-components'
import ImgSrc from '../static/images/back2top.png'


const Image = styled.img`
    width: 50px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    visibility: ${props => props.Visible === false ? "hidden" : "visible" };
    z-index: 100;
    cursor: pointer;
`

class back2Top extends Component {
    constructor() {
        super()
        this.state = {
            Visible: false,
            clicked: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisibility)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleVisibility)
    }

    toggleVisibility() {
        if (!this.state.Visible && !this.state.clicked && window.pageYOffset > 100)
            this.setState({
                Visible: true
            })
        else if(window.pageYOffset=== 0){
            this.setState({
                clicked: false
            })
        }
         else if (this.state.Visible && window.pageYOffset < 100)
            this.setState({
                Visible: false
            })
    }

    handleClick() {
        this.setState({
            Visible: false,
            clicked: true
        })
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
                <Image Visible = {this.state.Visible} onClick = {this.handleClick} src = {ImgSrc} alt = "back to top" />
        )
    }
}

export default back2Top
