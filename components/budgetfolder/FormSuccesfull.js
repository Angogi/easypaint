import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Alert from '@material-ui/lab/Alert';

function FormSuccessfull({state, handleChange, closer, progress}) {
    useEffect(() => {
        if(state.step === 6){
            let element = document.getElementById('formStep5');
            element.classList.add(styles.activeType)
        }
    }, [state.step])
    
    return (
        <div className={styles.form__Budget}>
            <h1 className={styles.title}>Enviando formulario</h1>
            <div className={styles.form__BigBox} id="formStep5">
                
                <div className={styles.form__BigBox__SuccesContainer}>
                <Alert variant="filled" severity="success">
                   Tu solicitud ha sido recibida
                </Alert>
                <progress value={progress} max="100" />

                </div>
               
            </div>
            <div className={styles.bugetForm__controlButtons} >
                <button className={styles.backButton} onClick={closer}>Salir</button>
            </div>
        </div>
    )
}

export default FormSuccessfull