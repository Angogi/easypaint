import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { green } from '@material-ui/core/colors';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

function FormContactData({state, handleChange, prevStep, BorderLinearProgress, errors, handleSubmit}) {
    useEffect(() => {
        if(state.step === 5){
            let element = document.getElementById('formStep4');
            element.classList.add(styles.activeType)
        }
    }, [state.step])


    return (
        <div className={styles.form__Budget}>
            <h1 className={styles.title}>Datos de contacto</h1>
            <div className={styles.form__BigBox} id="formStep4">
                <div className={`${styles.form__BigBox__OptionContainer} ${styles.contactContainer} ${styles.noOverFlow}`}>
                    <TextField 
                        id="outlined-basic"
                        label="Nombre" 
                        required
                        variant="outlined" 
                        name= 'Nombre'
                        value={state.Nombre}
                        onChange={handleChange}
                        helperText={errors.Nombre}
                    />

                    <RadioGroup aria-label="formContactType" name="formContactType" value={state.formContactType} onChange={handleChange}>

                        <FormControlLabel
                        className={styles.formJobType__option}
                        value="WhatsApp"
                        control={<GreenRadio/>} 
                        label="WhatsApp"
                        />
                        <FormControlLabel
                            className={styles.formJobType__option}
                            value="Email"
                            control={<GreenRadio/>} 
                            label="Email"
                        />
                    </RadioGroup>
                    <br/>
                    {state.formContactType === 'WhatsApp' ? 
                    <>
                        <strong><h2 className={styles.subTitle}>Si su número es del exterior no olvide escribir el indicador del país, gracias.<span alt="happy-emoji" role="img">😊</span></h2></strong>

                        <TextField 
                            id="outlined-basic"
                            type='number'
                            label="Número" 
                            variant="outlined"
                            onChange={handleChange}
                            name='Numero'
                            value={state.Numero}
                            placeholder='+33'
                            helperText={errors.Numero}

                        />
                    </>
                    :

                    state.formContactType === 'Email' ?
                        <TextField 
                            id="outlined-basic"
                            type="Email" 
                            label="Email"
                            variant="outlined" 
                            onChange={handleChange}
                            name='Email'
                            value={state.Email}
                            helperText={errors.Email}
                        />
                    : 

                        <strong>Por favor, elige un medio de contacto<span alt="happy-emoji" role="img" aria-label="happy face">😊</span></strong>

                    }
              
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className={styles.bugetForm__controlButtons} >
                <button className={styles.backButton} onClick={prevStep}>Atrás</button>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
            <BorderLinearProgress variant="determinate" value={100} />
        </div>
    )
}

export default FormContactData
