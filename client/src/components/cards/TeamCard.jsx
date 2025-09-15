import React from 'react';

const TeamCard = ({ member }) => {
    return(
        <div className="card text-center p-6">
            <img src={member.image} alt="Team Member" className="w-28 h-28 rounded-full mx-auto mb-4"/>
            <h4 className="text-lg font-semibold text-dark-text">{member.name}</h4>
            <p className="text-primary-accent text-sm">{member.role}</p>
        </div>
    )
}

export default TeamCard;
