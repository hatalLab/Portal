import React from 'react'
import styled from 'styled-components'
import Comment from '../Components/Comments'
import Img_Src from '../static/images/project-default.png'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import UploadImage from '../Components/UploadPic'


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
padding:10px;
`;

const StyledRow=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  dir:rtl;
  padding:10px 40px;
`;


const NewProjectForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <StyledRow>
                <StyledCol>
                    <StyledHeading>שם הפרויקט:</StyledHeading>
                    {/* where to add the errors section */}
                    <Field as ="textarea" name= "name" placeholder = "שם הפרויקט" /><br />
                    <StyledHeading>תיאור הפרויקט:</StyledHeading>
                    <Field as="textarea" name="description" placeholder = "תיאור הפרויקט" />
                </StyledCol>
            </StyledRow>
            <button type="submit">שלח</button>
        </Form>
    )
}

const FormikApp = withFormik(
    {
        mapPropsToValues( { name, description }) {
            return {
                name: name || '',
                description: description || '',
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().min(15).required()
        }),
        handleSubmit(values) {
            console.log(JSON.stringify(values));
            
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
        <StyledRow>
            <FormikApp />
            <StyledContainer>
            {/* <Comment>HomePage ./src/pages/homePage.js</Comment> */}
            <StyledHeading>הוספת פרויקט חדש</StyledHeading>
                <UploadImage img ={Img_Src}/>
            </StyledContainer>
        </StyledRow>
    )
}



export default HomePage