import React from 'react'


const TableContainer = (props) => {
    const {className} = props
    return (
        <table className={className} style={{ marginTop: "3px" }}>
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
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