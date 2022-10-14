import React from "react";
import avatarImage from '../../images/images/images/avatar.png'
import { SkillList } from "./skillList";
import { UserCard } from "./userCard";

export const MainComponent = ({user}) => {

    return (
        <main>
            <UserCard lastName={user.lastName} name={user.name} avatar={avatarImage}/>
            <SkillList skills={user.skills}/>
        </main>
    )
}