

function Validation(values) {
    let errors={}
    
    if(!values.name){
        errors.name="Name is Required!"
    }
    if(!values.email){
        errors.email="Email is Required!"
    }
    if(!values.password){
        errors.password="Password is Required!"
    } else if (values.password.length < 4){
        errors.password="Password Must Be Four or More Characters"
    }

    return errors;
}
export default Validation