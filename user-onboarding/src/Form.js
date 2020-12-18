import React from 'react';

const onBoardForm = (props) => {
    const {values, submit,change,disabled} = props

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
      }
    
      const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
       
        change(name, valueToUse)
      }

    return ( 
        <div>
            <form className='form-container' onSubmit={onSubmit}>
                <label>Username:
                    <input
        
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                     />
                </label>
                
                <label>Email: 
                    <input 
                    name="email" 
                    type="text" 
                    value={values.email}
                    onChange={onChange}
                    />
                    </label>

                <label>Password:
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                     />
                </label>

                <label>
                <input id='checkbox' type='checkbox' name='termsOfService' onChange={onChange} />
                 Terms of Service
                </label>
                <button >Submit</button>
            </form>
        </div>
     );
}
 
export default onBoardForm;
