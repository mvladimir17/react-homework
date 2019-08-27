import React from "react"
import {NavLink} from "react-router-dom";

export default function Pagination({page}) {
    const currentPage = parseInt(page);
    const prevPageLink = currentPage === 1 ? null :
        <button><NavLink to={`/houses/${currentPage - 1}`}>{`<`}</NavLink></button>;
    return (
        <div>
            {prevPageLink}
            <button disabled={true}>{page}</button>
            <button><NavLink to={`/houses/${currentPage + 1}`}>{`>`}</NavLink></button>
        </div>
    )
}
