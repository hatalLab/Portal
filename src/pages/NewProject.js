import React from 'react'
import styled from 'styled-components'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import UploadImage from '../Components/UploadPic'
import TextareaAutosize from 'react-textarea-autosize'
import { SelectionTags as TagsInput } from '../Components/Tgasinput/tags'
import { tags } from '../static/data/rowData'
import ImplementationTable from '../Components/InputTable'
import { AwesomeButton ,AwesomeButtonProgress } from "react-awesome-button"
import "react-awesome-button/src/styles/themes/theme-c137"
import { useHistory } from 'react-router-dom'
// const StyledContainer = styled.div`
//     display: flex;
//     width: 90%
//     direction: rtl;
//     margin: 100px auto;
// `
const StyledHeading = styled.h4`
    display: flex;
    flex-direction: row;
`

const StyledCol=styled.div`
    display: flex;
    flex-direction: column;
    direction: rtl;`

const StyledRow=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
`
const RowContainer = styled(StyledRow)`
    justify-content: start;
`
const Row = styled(StyledRow)`
   justify-content: start;
`
const StyledErrorMessage = styled.p`
    color: red;
    align-self: start;
    margin: 6px 0;`

const StyledFormContainer= styled.div`
    width: 90%;
    margin: 50px auto;
` 

const ImageCOntainer =styled.div`
    margin-top: 5vh;
`

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TextArea = ({ field, form, large, ...props}) => {
    return (
      <TextareaAutosize   style={{
        boxSizing: 'border-box',
        resize: 'both', 
        direction: 'rtl', 
        width: large ? '55vw' : '25vw', 
        maxWidth: '90vw', 
        minWidth: '200px',
        minHeight: '30px', 
        marginLeft: '5vw',
        fontFamily: 'inherit', 
        fontSize: 'large'}}
      
      {...field} {...props}
      />
    )
  }

const NewProjectForm = ({ values, errors, touched, ...props }) => {
    let history = useHistory()
    // console.log(history);
    
    return (
        <StyledFormContainer>
            <Form>
                <Row>

                    <StyledCol>
                        <RowContainer>
                            <StyledCol>
                                <StyledHeading>שם הפרויקט:</StyledHeading>
                                <Field name ="name" minRows={2} maxRows={3} component={TextArea} placeholder = " שם הפרויקט " />
                                {touched.name && errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
                            </StyledCol>

                            <StyledCol>
                                <StyledHeading>מחלקה: </StyledHeading>
                                <Field name = "platoon" minRows={2} maxRows={2} placeholder=" מחלקה" component={TextArea} />
                                {touched.platoon && errors.platoon && <StyledErrorMessage>{errors.platoon}</StyledErrorMessage>}
                            </StyledCol>
                        </RowContainer>

                        <StyledRow>
                            <StyledCol>
                                <StyledHeading>תיאור הפרויקט:</StyledHeading>
                                <Field name = "details" large minRows={5} component={TextArea} placeholder = " תיאור הפרויקט " />
                                {touched.details && errors.details && <StyledErrorMessage>{errors.details}</StyledErrorMessage>}
                            </StyledCol>
                        </StyledRow>

                        <StyledRow>
                            <StyledCol>
                                <StyledHeading>פירוט: </StyledHeading>
                                <Field name = "description" large minRows={5} component={TextArea} placeholder = " פירוט " />
                                {touched.description && errors.description && <StyledErrorMessage>{errors.description}</StyledErrorMessage>}
                            </StyledCol>
                        </StyledRow>
                    </StyledCol>
                       
                       <ImageCOntainer>
                            <Field name = 'input' component={UploadImage} image = {(props.image)} />
                            
                       </ImageCOntainer>
                </Row>
                       
             <Field name = "categories" component = { TagsInput } Tags = { tags } SelectedTags = {[]} />

            <Field name ="table" component ={ImplementationTable} />

            <StyledRow>
                <ButtonContainer>
                {props.edit && <AwesomeButton type= "primary" onPress = {()=> history.goBack()}>סגירה</AwesomeButton>}
                <AwesomeButtonProgress
                    type = "primary"
                    size = "medium"
                    resultLabel = "נשלח!"
                    releaseDelay = {600}
                    ripple = {true}
                    onPress = {(element, next) => {
                    setTimeout(() => {
                    next();
                    }, 600);
                    }}
                >
                שמירה
                </AwesomeButtonProgress>

                </ButtonContainer>
            </StyledRow>
            </Form>
        </StyledFormContainer>
    )
}

// let SUPPORTED_FORMATS=['JPG']
const FormikApp = withFormik(
    {
        mapPropsToValues( { name, description,details, input, platoon, categories, table, ...props }) {
            return {
                name: props.name || name || '',
                description: props.description || description || '',
                details: props.details || details || '',
                input: props.input || input || '',
                platoon: props.platoon || platoon || '',
                categories: props.categories || categories || '',
                table: props.table || table || ''
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('name is required!'),
            description: Yup.string().min(15).required('description is required!'),
            details: Yup.string().min(15).required('חובה לספק תיאור!'),
            input: Yup.mixed().required('image is required!'),
            //Yup.mixed() .test('fileSize', "File Size is too large", value => value.size <= FILE_SIZE) .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(value.type) )
            platoon:Yup.string().required('platoon is required!'),
            categories: Yup.array().min(1).required('categories is required!'),
            //table:Yup.mixed().oneOf([''],"empty").required('required')
            table:Yup.array().min(1).required('implementation is required!')
        }),
        validateOnBlur:true
,
enableReinitialize: true,
        handleSubmit(values) {
            console.log("the values");
            
            console.log(values);
            
        }
    }
)(NewProjectForm)
// const NewProjectForm = () => {
//     const Formik = useFormik(
//         {
//             initialValues: {
//                 new_name:'',
//                 new_description: '',
//                 new_details: '',
//                 new_requirements: ''
//             },
//             onSubmit: values => {
//                 console.log(JSON.stringify(values, null, 2))
//             },

//         })
//         return (
//             <StyledCol>
//                 <form onSubmit = {Formik.handleSubmit}>
//                     <label htmlFor = "new_name">בחר שם לפרויקט</label><br />
//                     <input
//                     id = "new_name"
//                     name="new_name"
//                     type="text"
//                     onChange={Formik.handleChange}
//                     value={Formik.values.new_name}
//                     /><br />

//                     <label htmlFor = "new_description">הוספת תיאור</label><br />
//                     <input
//                     id = "new_description"
//                     name="new_description"
//                     type="text"
//                     onChange={Formik.handleChange}
//                     value={Formik.values.new_description}
//                     /><br />

//                     <label htmlFor = "new_details">הוספת פרטים</label><br />
//                     <input
//                     id = "new_details"
//                     name="new_details"
//                     type="text"
//                     onChange={Formik.handleChange}
//                     value={Formik.values.new_details}
//                     /><br />

//                     <label htmlFor = "new_requirements">רשימת דרישות</label><br />
//                     <input
//                     id = "new_requirements"
//                     name="new_requirements"
//                     type="text"
//                     onChange={Formik.handleChange}
//                     value={Formik.values.new_requirements}
//                     /><br />

//                     <button type = "submit">שליחה</button>
//                 </form>
//             </StyledCol>
//         )
// }



function NewProject( props ){
    return (
        
            <>
            <FormikApp {...props}  />
</>
         
    )
}



export default NewProject