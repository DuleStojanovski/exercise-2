export const SkillList = ({skills}) => {
    return(
        <div>
            {
                skills ?
                <div className="user-skills">
                <ul>
                    {
                     skills.map((item, index) => <li key={`${item}_${index}`}>{item}</li>)
                    }
                </ul>
            </div>
            : <></>
            }
        </div>
    )
}