import cssLogo from '../../images/images/images/css_logo.png';
import jsLogo from '../../images/images/images/js_logo.png';
import htmlLogo from '../../images/images/images/html_logo.png';
import { useParams } from 'react-router-dom';
import userData from '../data/mainData.json'


export const SkillComponent = () => {
const {skill} = useParams();
const skillList = userData.userData.skills;
const setImageSrc = () => {
   switch (skill) {
    case skillList[0]:
        return htmlLogo;
    case skillList[1]:
        return cssLogo;
    case skillList[2]:
        return jsLogo;
    
        default:
        return htmlLogo;
   }
}
    return(
        <div className="user-card">
        <img src={setImageSrc()} width='120px' height='200px' alt={skill}/>
         <h2>{skill}</h2>
        </div>
    )
}