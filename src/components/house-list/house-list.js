import React, {useEffect, useState} from 'react'
import House from '../house'
import {connect} from "react-redux";
import {fetchHouses, setCurrentPage} from "../../ac";
import {housesLoadingSelector, housesPageSelector} from "../../selectors";
import Pagination from "../pagination";
import Loader from "../loader";

function HouseList({houses, isLoading, fetchHouses, setCurrentPage, match}) {
    const {page} = match.params;
    useEffect(() => {
        setCurrentPage(page);
        fetchHouses()
    }, [fetchHouses, setCurrentPage, page]);

    const [openDocumentUrl, setOpenDocumentUrl] = useState(null);

    if (isLoading) {
        return <Loader/>
    }

    const toggleOpen = url => url === openDocumentUrl ? setOpenDocumentUrl(null) : setOpenDocumentUrl(url);

    const houseComponents = houses.map(house =>
        <House
            key={house.url}
            isOpen={openDocumentUrl === house.url}
            house={house}
            toggleOpen={toggleOpen}
        />
    );
    return (
        <div>
            {houseComponents}
            <br/>
            <hr/>
            <Pagination page={page}/>
        </div>
    )
}

const mapStateToProps = state => ({
    houses: housesPageSelector(state) || [],
    isLoading: housesLoadingSelector(state),
});

const mapDispatchToProps = {
    fetchHouses,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseList)
