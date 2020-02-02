import React from 'react'
import NewProject from './NewProject'
import ImageSrc from '../static/images/avatar.png'

function UpdateProject(){
    return(
        <NewProject name = "pp xx" platoon = "תקיפה ואיסוף" image ={ImageSrc} description = "בפרויקט זה נבחן כלים חדשים על מנת לבחון את האיכות" details = "בפרויקט זה נבחן כלים חדשים על מנת לבחון את האיכות דאשאןב" categories = "פיזיקה" />
    )
}

export default UpdateProject