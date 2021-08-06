const validation = (state) =>{

    let errors={};

    if(!state.Nombre){
    errors.Nombre = 'Por favor, ingrese su nombre' 
    }

    if(state.formContactType === 'WhatsApp' && !state.Numero){
        errors.Numero = 'Por favor, ingrese su número'
    }else if(state.formContactType === 'WhatsApp' && state.Numero.length < 9){
        errors.Numero = 'Por favor, ingrege un número válido'
    }

    if(state.formContactType === 'Email' && !state.Email){
        errors.Email="Por Favor ingrese su email"
    }else if(!/\S+@\S+\.\S+/.test(state.Email) && state.formContactType === 'Email'){
        errors.Email="Email inválido"
    }
    console.log(errors)
    
   
    return errors;
};

export default validation;