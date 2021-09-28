import React from 'react'
import TableContainer from '../containers/Table'
// import FormContainer from '../containers/FormContainer'
const User = () => {
    const [name, setName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")

    const [person, setPerson] = React.useState([])  

    const handleSubmit = e => {
        e.preventDefault()
        if(name && lastName && email){
            const people = {name, lastName, email}
            setPerson(person => {
                return [...person, people]
            })
            setName("")
            setLastName("")
            setEmail("")
        }
        else{
            console.log("empty");
        }

    }
    const handleDelete = email => {
        const newPerson = person.filter(p => p.email !== email)
        setPerson([newPerson])
    }
    return (
        <div className="col-lg-6 m-auto">
            <h2 className="mt-3">User List</h2>

            <TableContainer className="table">
                {person.map(p => {
                    return <tr key={p.email}>
                        <td>{p.name}</td>
                        <td>{p.lastName}</td>
                        <td>{p.email}</td>
                        <td>
                            <button className="btn btn-outline-danger btn-md" onClick={() => handleDelete(p.email)}>Delete</button>
                        </td>
                    </tr>
                })}
            </TableContainer>

            <br />
            <br />
            <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="firstName" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default User