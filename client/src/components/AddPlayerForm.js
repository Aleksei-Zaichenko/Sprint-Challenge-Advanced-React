import React from 'react';
import {useForm} from './useForm';

const AddPlayerForm = ({addPlayer}) => {
    const [values, handleChanges, clearForm] = useForm('newPlayer', {
      name: '',
      country: '',
      searches: '',
      id: 101
    });

    const handleSubmit = e => {
        e.preventDefault();
        addPlayer(values.name,values.country,values.searches);
        clearForm(e);
    };

      return (
          console.log(values),
        <div className="form">
          <form onSubmit={handleSubmit}>
                <h1>Add new player</h1>
                <div>
                    <label htmlFor="name">Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value ={values.name}
                        onChange={handleChanges}
                    />
                    </label>
                </div>

                <div>
                    <label htmlFor="country">Country
                    <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="country"
                        value ={values.country}
                        onChange={handleChanges}
                    />
                    </label>
                </div>

                <div>
                    <label htmlFor="searches">Searches</label>
                    <input 
                        type="text"
                        id="searches"
                        name="searches" 
                        placeholder="searches"
                        value ={values.searches}
                        onChange={handleChanges}
                    />
                </div>
                    <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    export default AddPlayerForm;