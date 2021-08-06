import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Image from 'next/image';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import JobServicesImage from '../../public/images/woman-looks-at-color-samples.jpg';


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
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarParedesEscalera} 
                            onChange={handleChange} 
                            name="PintarParedesEscalera" />}
                            label="Pintar Paredes Escalera"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarTechosEscalera} 
                            onChange={handleChange} 
                            name="PintarTechosEscalera" />}
                            label="Pintar Techos Escalera"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.QuitarGotele} 
                            onChange={handleChange} 
                            name="QuitarGotele" />}
                            label="Quitar Gotelé"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PonerPapelDecorativo} 
                            onChange={handleChange} 
                            name="PonerPapelDecorativo" />}
                            label="Poner Papel Decorativo"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.QuitarPapelDecorativo} 
                            onChange={handleChange} 
                            name="QuitarPapelDecorativo" />}
                            label="Quitar Papel Decorativo"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarPuertasAscensor} 
                            onChange={handleChange} 
                            name="PintarPuertasAscensor" />}
                            label="Pintar Puertas Ascensor"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.TratarHumedades} 
                            onChange={handleChange} 
                            name="TratarHumedades" />}
                            label="Tratar Humedades"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.RepararParedes} 
                            onChange={handleChange} 
                            name="RepararParedes" />}
                            label="Reparar Paredes"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarPuertaPortal} 
                            onChange={handleChange} 
                            name="PintarPuertaPortal" />}
                            label="Pintar Puerta Portal"
                            className={styles.formJobType__option}

                        />
                        <FormControlLabel
                            control={<GreenCheckbox 
                            checked={state.PintarCarpinteriaEscalera} 
                            onChange={handleChange} 
                            name="PintarCarpinteriaEscalera" />}
                            label="Pintar Carpintería Escalera"
                            className={styles.formJobType__option}

                        />
                            
                            
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