import React from 'react'


const TableContainer = (props) => {
    const {className} = props
    return (
        <table className={className} style={{ marginTop: "3px" }}>
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableContainer