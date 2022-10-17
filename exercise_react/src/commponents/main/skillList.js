import { Link } from "react-router-dom"

export const SkillList = ({skills}) => {
    return(
        <div>
            {
                skills ?
                <div className="user-skills">
                <ul>
                    {
                     skills.map((item, index) =>{
                        return(
                            <Link key={`${item} ${index}`}
                            to = {`/skills/${item}`}
                            style={{listStyle:"outside"}}
                            >
                            <p>{item}</p>
                            </Link>
                        );
                     })
                    }
                </ul>
            </div>
            : <></>
            }
        </div>
    )
}