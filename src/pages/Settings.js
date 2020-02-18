import React, { Component } from 'react'
import Styled from 'styled-components'
import { tags } from '../static/data/rowData'
import AutoSoggest from '../Components/AutoSoggestion/autoSoggestion'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { SelectionTags as TagsInput } from '../Components/Tgasinput/tags'
import styled from 'styled-components'
import CheckBoxComponent from '../Components/Checkbox'
import { AwesomeButtonProgress } from "react-awesome-button"
import "react-awesome-button/src/styles/themes/theme-c137"



const Container = styled.div`
    display: flex;
    width: 90%;
    margin: 100px auto;
    direction: rtl;
`
const FieldContainer =styled.div`
`
const Row = styled.div`
    flex-direction: row;
`
const Col =styled.div`
    flex-direction: column;
`
const Title =styled.h3`
    text-align: center;
`
const Float = styled.div`
z-index: 0;
`
const CheckboxContainer= styled.div`
    direction: rtl;
    font-family: arial;
`

const Span = styled.span`
color: black;
margin-right 10px;
`
const StyledErrorMessage = styled.p`
    color: red;
    align-self: center;`


class Checkbox extends Component {
    constructor(){
        super()
        this.state={
            checked: false
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const checked = event.target.checked
        this.setState({
            checked: checked
        })
        this.props.form.setFieldValue('notifications',checked)

    }

    render(){
        return (
            <CheckboxContainer>
                <label>
                    <CheckBoxComponent
                    checked = {this.state.checked}
                    onChange = {this.handleChange}
                    color= "#00bfff"
                    shape ={50}
                    background = "#87CEFA"   {...this.props} />
                    <Span>{this.props.Text}</Span>
                </label>
            </CheckboxContainer>
        )
    }
}


const Preferences = ({ values, errors, touched }) => {
    return (
        <Container>
            <Form>

            <Col>
                <Title>תחומי ידע</Title>
                <Field name = "knowledge" component = { TagsInput } Tags = {tags} SelectedTags = { [] } />
            {/* {touched.knowledge && errors.knowledge && <StyledErrorMessage>{errors.knowledge}</StyledErrorMessage>} */}

            <Float>
               
                    <Title>תחומי עניין</Title>
                    <Field name = "interest" component = { TagsInput } Tags = {tags} SelectedTags = { [] } />


            </Float>

            <Title>הרשמה</Title>
            <Field name = "notifications" component = {Checkbox} Text = "שלחו לי מייל כאשר מתפרסמים פרויקטים שמעניינים אותי" />
            {touched.notifications && errors.notifications && <StyledErrorMessage>{errors.notifications}</StyledErrorMessage>}

            <br /><AwesomeButtonProgress
                                
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
                                    שמירה
                                </AwesomeButtonProgress>
            </Col>
            </Form>

        </Container>
    )
}

const FormikApp =withFormik(
    {
        mapPropsToValues({ knowledge, interest, notifications }){
            return {
                    knowledge: knowledge || '',
                    interest: interest || '',
                    notifications: notifications || false
            }
        },
        validationSchema:Yup.object().shape({
            knowledge: Yup.array().min(1).required('categories is required!'),
            interest: Yup.array().min(1).required('interest categories is required!')
        }),
        validateOnBlur: true,
        handleSubmit(values){
            console.log({values});
            
        }
    }
)(Preferences)


export default FormikApp