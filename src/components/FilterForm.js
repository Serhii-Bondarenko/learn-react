import {useState} from "react";
import {services} from "../services/user.servise";


const FilterForm = ({set}) => {

    const [formState, setFormState] = useState({name: '', userName: '', email: ''})

    const onSubmit = (e) => {
        e.preventDefault();
        services.getFilteredData(set, formState);
    }

    const onChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    return (
        <div className={'users'}>
            <form className={'filter-form'} onSubmit={onSubmit} name={'f1'}>
                <input type="text" name={'name'} value={formState.name} placeholder={'Name'} onChange={onChange}/>
                <input type="text" name={'userName'} value={formState.userName} placeholder={'Username'}
                       onChange={onChange}/>
                <input type="text" name={'email'} value={formState.email} placeholder={'Email'} onChange={onChange}/>
                <button>Find</button>
            </form>
        </div>
    );
};

export default FilterForm;