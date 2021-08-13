import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Image from 'next/image';
// import JobTypeImage from '../../public/images/serious-young-male-stands-next-to-house-design-sketch-ready-for-renovation.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import { withStyles} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';


  
const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

 
const FormJobType = ({nextStep, handleChange, state,  BorderLinearProgress, closer}) => {

    useEffect(() => {
        if(state.step === 1){
            let element = document.getElementById('formStep0');
            element.classList.add(styles.activeType)
        }
    }, [state.step])

    return (
        <div className={styles.form__Budget}>
            <h1 className={styles.title}>Seleccione el tipo de trabajo</h1>
            <div className={styles.form__BigBox} id="formStep0">
                <div className={styles.form__BigBox__OptionContainer} id="optionContainer">

                    <FormGroup aria-label="formJobType" name="formJobType" id="multipleOptionContainer">
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarPiso} 
                            onChange={handleChange} 
                            name="PintarPiso" />}
                            label="Pintar Piso"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarInteriorChalet} 
                            onChange={handleChange} 
                            name="PintarInteriorChalet" />}
                            label="Pintar Interior Chalet"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarExteriorChalet} 
                            onChange={handleChange} 
                            name="PintarExteriorChalet" />}
                            label="Pintar Exterior Chalet"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarInteriorFinca} 
                            onChange={handleChange} 
                            name="PintarInteriorFinca" />}
                            label="Pintar Interior Finca"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarExteriorFinca} 
                            onChange={handleChange} 
                            name="PintarExterorFinca" />}
                            label="Pintar Exterior Finca"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarInteriorLocalComercial} 
                            onChange={handleChange} 
                            name="PintarInteriorLocalComercial" />}
                            label="Pintar Interior Local Comercial"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                                checked={state.PintarExteriorLocalComercial} 
                                onChange={handleChange} 
                                name="PintarExteriorLocalComercial"/>}

                            label="Pintar Exterior Local Comercial"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel

                            control={<GreenCheckbox 
                                checked={state.OtroTrabajo} 
                                onChange={handleChange} 
                                name="OtroTrabajo"/>}

                            label={state.OtroTrabajo === true ? "Otro 👇🏽" : "Otro"}
                            className={styles.formJobType__option}

                        />

                        {state.OtroTrabajo === true ?
                            
                            <TextField
                            
                                className={styles.formJobType__option}
                                onChange={handleChange} 
                                value={state.ElOtroTrabajoCheckOption}
                                name="ElOtroTrabajoCheckOption"
                                label="¿Cual otro?"
                                variant="outlined"
                                
                            />

                        : 

                         null 
                        
                        } 

                    </FormGroup>
            
                </div>


                <div className={styles.form__BigBox__ImagenContainer}>
                    <Image className={styles.image} width={500} height={333} src='/images/serious-young-male-stands-next-to-house-design-sketch-ready-for-renovation.jpg' alt="hombre pensativo"/>
                </div>
                

              
            </div>
            <div className={styles.bugetForm__controlButtons} >
                <button className={styles.backButton} onClick={closer}>Atrás</button>
                <button onClick={nextStep}>Siguiente</button>
            </div>
            
            
            
            <BorderLinearProgress variant="determinate" value={20} />
            
        </div>
    )
}

export default FormJobType