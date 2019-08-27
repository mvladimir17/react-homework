import React from "react"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {charactersLoadingSelector, urlCharacterSelector} from "../../selectors";
import Loader from "../loader";

function CharacterList({isLoading, characters}) {
    if (isLoading) {
        return <Loader/>
    }

    if (characters.length === 0) {
        return <p>No Characters</p>
    }

    const characterComponents = characters.filter(character => character !== undefined).map(character =>
        <div key={character.url}>
            <NavLink
                to={`/people/${getCharacterId(character.url)}`}
                activeStyle={{color: "red"}}>
                {character.name}
            </NavLink>
            <br/>
        </div>
    );
    return (
        [characterComponents]
    )
}

const getCharacterId = url => url.substr(url.lastIndexOf('/') + 1);

const mapStateToProps = (state, {swornMembers}) => ({
    isLoading: charactersLoadingSelector(state),
    characters: swornMembers.map(url => urlCharacterSelector(state, url))
});

export default connect(mapStateToProps, null)(CharacterList)
