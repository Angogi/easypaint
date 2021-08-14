import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Image from 'next/image';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import JobServicesImage from '../../public/images/woman-looks-at-color-samples.jpg';

import ServicesFilter from './ServicesFilter';


const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

       
function FormJobServices({state, handleChange, prevStep, nextStep, BorderLinearProgress }) {

    let servicesInputs = ServicesFilter(state);
    let inputs = [];

    for(let service in servicesInputs){
        inputs.push(
                <FormControlLabel
                control={<GreenCheckbox 
                checked={servicesInputs[service]} 
                onChange={handleChange} 
                name={service} />}
                label={service.split(/(?=[A-Z])/).join(" ")}
                className={styles.formJobType__option}
                />
            )
    };

    
  
    useEffect(() => {
        if(state.step === 2){
            let element = document.getElementById('formStep1');
            element.classList.add(styles.activeType)
        }
    }, [state.step])
          
    return (
        <div className={styles.form__Budget}>
            <h1 className={styles.title}>Seleccione los servicios que desea</h1>
                <div className={styles.form__BigBox}  id="formStep1">
                <div className={styles.form__BigBox__OptionContainer}>
                    <FormGroup aria-label="formJobType" name="formJobType" >
                        {inputs.map((item)=>{
                            return(
                                <>{item}</>
                            )
                        })}
                    </FormGroup>
                </div>
                <div className={styles.form__BigBox__ImagenContainer}>
                    <Image className={styles.image} width={500} height={333}  alt="painter-chooses-color" src='/images/woman-looks-at-color-samples.jpg' />
                </div>
            </div>
            <div className={styles.bugetForm__controlButtons} >
                <button className={styles.backButton} onClick={prevStep}>Atrás</button>
                <button onClick={nextStep}>Siguiente</button>
            </div>
            <BorderLinearProgress variant="determinate" value={40} />

        </div>
    )
}

export default FormJobServices