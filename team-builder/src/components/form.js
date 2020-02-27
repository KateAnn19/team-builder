import React, { useState } from "react";
import axios from 'axios';


//--------------------------------------------------------------------
//Dynamic way to do multiple states
//--------------------------------------------------------------------

const NewForm = props => {

    // console.log(props)

    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        email: '',
        role: '',
        realroles: '',
        moods: false
    });
    

    const onFormSubmit = event => {
        event.preventDefault();
        
        props.addNewEmployee(formData);
        alert(`submitting ${formData.name}, ${formData.age} ${formData.email}, ${formData.role}, ${formData.realroles}, ${formData.moods}`)
        setFormData({ 
        name: '',
        age: '',
        email: '',
        role: '',
        realroles: 'Roles',
        moods: false})
    };

    const onInputChange = event => {

        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        });

        if (/^[a-zA-Z]+$/.test(event.target.value)){
            
        }
    }

return  (
    <div className="formContainer">

        <form onSubmit={onFormSubmit}> 

            {/* <h3>The name is {name || 'unknown'}</h3> */}
            <label  htmlFor="fname">Name </label>
            <input  value={formData.name} id="fname" type="text" placeholder='Name' name="name" maxLength='15' onChange={onInputChange}/>
            {/* event.target.value */}


            <input className="Submit" type="submit"/>
        

            <label htmlFor="ageInput">age</label>
            <input value={formData.age}id="ageInput" name="age" type="number" onChange={onInputChange}/>
            
            <br/>

            {/* <h3>The email is {email || 'unknown'}</h3> */}
                <label className="FancyForm" htmlFor="email">Email </label>
                <input value={formData.email}id="email" type="email" name="email" maxLength='40' placeholder="Email" onChange={onInputChange}/>

            <br/>

            {/* <h3>The role is {role || 'unknown'}</h3> */}
                <label className="FancyForm" htmlFor="role">Role </label>
                <input id="role" value={formData.role} type="text" name="role" placeholder="Real Role" maxLength='15' onChange={onInputChange}/>
        
                <label htmlFor='rolesSelect'> 
                <select onChange={onInputChange} id='rolesSelect' name='realroles'>
                <option value="Roles">
                    Roles
                </option>
                <option value="Front-end Developer">
                    Front-end developer
                </option>
                <option value="Back-end Developer">
                    Back-end developer
                </option>
                <option value="Quality Assurance">
                    Quality Assurance
                </option>
                <option value="Program Manager">
                    Program Manager
                </option>  
                <option value="Ninja">
                    Ninja
                </option>  
                </select>
                </label> 

            {/* <h3>The mood is {mood ? 'tired' : 'not tired'}</h3> */}
                <label htmlFor="isTired">tired:</label>
                <input onChange= {onInputChange} name="moods" id="isTired" type="checkbox"/>

            <br/>

            <button type='submit'>send</button>
        </form>
    </div>

)

}


export default NewForm;


//----------------------------------------------------------------------------
//this is the long way to do multiple states
//----------------------------------------------------------------------------



// const NewForm = props => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [role, setRole] = useState('');
//     const [mood, setMood] = useState(true);

//     const onSubmit = event => {
//         event.preventDefault();
//         //  axios.get(`?name=${name}&email=${email}&role=${role}&mood=${mood}`)
//          axios.post('/', {name, email})
//     }

//     const onNameChange = event => {
//         setName(event.target.value)
//     }

//     const onChangeMood = event => {
//         setMood(event.target.checked)
//     }

//     const onChangeRole = event => {
//         setRole(event.target.value)
//     }

//     const onChangeEmail = event => {
//        setEmail(event.target.value)
//     }

    //-----------------------------------------------------------------------------
    //another way to write these functions above
    //--------------------------------------------------------------------------------
    // const onNameChange = evt => setName(evt.target.value);
    //------------------------------------------------------------------------------------

// const handleChanges = e => {
//     setNote({role: e.target.value});
//     console.log(note);
// }

// const handleChanges = e => {
//     setNote({email: e.target.value});
//     console.log(note);
// }

// return  (
//     <div className="formContainer">
//         <h3>The name is {name || 'unknown'}</h3>
//     <form onSubmit={onSubmit}> 
//         <label  htmlFor="fname">Name </label>
//         <input  id="fname" type="text" placeholder='Name' name="name" maxLength='15' onChange={onNameChange}/>
// {/* event.target.value */}
//         <input className="Submit" type="submit"/>
        

//         <label>age</label>
//         <input id="ageInput" type="number"/>

//         <br/>
//         <h3>The email is {email || 'unknown'}</h3>
//         <label className="FancyForm" htmlFor="email">Email </label>
//         <input id="email" type="email" name="email" maxLength='40' placeholder="Email" onChange={onChangeEmail}/>
//         <br/>
//         <h3>The role is {role || 'unknown'}</h3>
//         <label className="FancyForm" htmlFor="role">Role </label>
//         <input id="role" type="text" name="role" placeholder="Role" maxLength='15' onChange={onChangeRole}/>
        
//         <label htmlFor='rolesSelect'> 
//         <select onChange={onNameChange} id='rolesSelect' name='roles'>
//             <option>
//                 Roles
//             </option>
//             <option value="1">
//                 Front-end developer
//             </option>
//             <option value="2">
//                 Back-end developer
//             </option>
//             <option value="3">
//                 Quality Assurance
//             </option>
//             <option value="4">
//                 Program Manager
//             </option>  
//             <option value="5">
//                 Ninja
//             </option>  
//             </select>
//             </label> 
//             <h3>The mood is {mood ? 'tired' : 'not tired'}</h3>
//             <label htmlFor="isTired">tired:</label>
//             <input onChange= {onChangeMood} id="isTired" type="checkbox"/>
//         <br/>
//         <button>send</button>
//     </form>
//     </div>

// )

// }





// Minimum Viable Product
//  Render a list of team members from state
//  Build a form to add a new member to the list of members
// STEP 1 - Setup your state
//  Import the useState hook and set up a state property for your team members list

//  Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.

//  Render your list of team members

// STEP 2 - Build your form
//  In Form.js build out your markup
//  Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination)
//  Import the useState hook and utilize what we learned about two-way data binding
//  Render your Form component in App and pass a setter method (the set_____ method from your team members state in App) down to it so you can add team members to your state.
// Now you are finished with MVP! Move on to the stretch goals at the bottom. 



