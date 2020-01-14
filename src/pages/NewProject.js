import React from 'react'
import styled from 'styled-components'
import Comment from '../Components/Comments'
import Img_Src from '../static/images/project-default.png'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import UploadImage from '../Components/UploadPic'
import TextareaAutosize from 'react-textarea-autosize';

const StyledContainer = styled.div`
    display: flex;
    width: 90%
    direction: rtl;
    margin: 100px auto;
`
const StyledHeading = styled.h4`
    display: flex;
    flex-direction: row;
`

const StyledCol=styled.div`
display: flex;
flex-direction: column;
dir:rtl;
padding:10px;`

const StyledRow=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
  padding:10px 40px;
`

const StyledErrorMessage = styled.p`
    color: red;
    align-self: center;`

const StyledFormContainer= styled.div`
    width: 90%;
    margin: 50px auto;
` 
const TextArea = ({ field, form, ...props}) => {
    return (
      <TextareaAutosize   style={{boxSizing: 'border-box', resize: 'both', direction: 'rtl', width: '200px'}}
      
      {...field} {...props}
      />
    )
  }

const NewProjectForm = ({ values, errors, touched }) => {
    return (
        <StyledFormContainer>
            <Form  >
                <StyledRow className="StyledRow2">

                    <StyledCol>
                        <StyledHeading>שם הפרויקט:</StyledHeading>
                        {/* <Field type="text" name= "name" placeholder = " שם הפרויקט " /><br /> */}
                        <Field name ="name" minRows={1} maxRows={3} component={TextArea} placeholder = " שם הפרויקט " /><br />
                        {touched.name && errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
                        
                        <StyledHeading>תיאור הפרויקט:</StyledHeading>
                        <Field name = "description" minRows={5} component={TextArea} placeholder = " תיאור הפרויקט " />
                        {touched.description && errors.description && <StyledErrorMessage>{errors.description}</StyledErrorMessage>}

                        <StyledHeading>מחלקה: </StyledHeading>
                        <Field name = "platoon" minRows={1} maxRows={2} placeholder=" מחלקה" component={TextArea} />
                        {touched.platoon && errors.platoon && <StyledErrorMessage>{errors.platoon}</StyledErrorMessage>}


                    </StyledCol>
                    <Field name = 'input' component={UploadImage} />
                        {touched.input && errors.input && <StyledErrorMessage>{errors.input}</StyledErrorMessage>}
                </StyledRow>
                <button type="submit">שלח</button>
            </Form>
        </StyledFormContainer>
    )
}

let SUPPORTED_FORMATS=['JPG']
const FormikApp = withFormik(
    {
        mapPropsToValues( { name, description, input, platoon }) {
            return {
                name: name || '',
                description: description || '',
                input: input || '',
                platoon: platoon || ''
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('name is required!'),
            description: Yup.string().min(15).required('description is required!'),
            input: Yup.mixed().required('image is required!'),
            //Yup.mixed() .test('fileSize', "File Size is too large", value => value.size <= FILE_SIZE) .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(value.type) )
            platoon:Yup.string().required('platoon is required!'),
        }),
        validateOnBlur:true
,
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



function HomePage(){
    return (
        
            <>
            <FormikApp />
</>
         
    )
}



export default HomePage