import React from "react"
import {idCharacterSelector} from "../../selectors";
import {connect} from "react-redux";

function Character({character}) {
    const name = character.name && <p>Name: {character.name}</p>;
    const gender = character.gender && <p>Gender: {character.gender}</p>;
    const culture = character.culture && <p>Culture: {character.culture}</p>;
    const born = character.born && <p>Born: {character.born}</p>;
    const died = character.died && <p>Died: {character.died}</p>;

    return (
        <div>
            {name}
            {gender}
            {culture}
            {born}
            {died}
        </div>
    )
}

const mapStateToProps = (state, {match}) => ({
    character: idCharacterSelector(state, match.params.id)
});

export default connect(mapStateToProps, null)(Character)
