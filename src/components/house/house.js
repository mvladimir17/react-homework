import React, {useEffect} from 'react'
import CharacterList from "../character-list";
import {fetchCharacters} from "../../ac";
import {connect} from "react-redux";

function House({isOpen, house, toggleOpen, fetchCharacters}) {
    const {swornMembers, name, coatOfArms} = house;
    useEffect(() => {
        if (isOpen) {
            fetchCharacters(swornMembers)
        }
    }, [isOpen, fetchCharacters, swornMembers]);

    const buttonText = `${isOpen ? 'Hide' : 'Show'} Details`;

    const header = (
        <div>
            <p>{name}</p>
            <button onClick={() => toggleOpen(house.url)}>{buttonText}</button>
        </div>
    );

    if (!isOpen) {
        return header;
    }

    const slogan = coatOfArms && <p>Slogan: {coatOfArms}</p>;

    const body = (
        <div>
            {slogan}
            <CharacterList swornMembers={swornMembers}/>
        </div>
    );

    return (
        <div>
            {header}
            {body}
            <hr/>
        </div>
    )
}

const dispatchStateToProps = {
    fetchCharacters
};

export default connect(null, dispatchStateToProps)(House)
