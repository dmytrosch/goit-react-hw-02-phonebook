import React from "react";

export default function Filter(props) {
    return (
        <label>
            Find contacts by name
            <input type="text" name="search" onChange={props.searchHandler} />
        </label>
    );
}
