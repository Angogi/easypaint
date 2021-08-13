import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Image from 'next/image'
import Select from '@material-ui/core/Select';
import ZipZoneImage from '../../public/images/location.jpg';
import {Elements} from '../../pages/api/MunicipiosBarcelona'; 


function FormZipZone({prevStep, nextStep, handleChange, state, BorderLinearProgress}) {

    const localidades = Elements.map((element) => element.municipi_nom);
    const filterArray = Elements.filter((element) => element.municipi_nom === state.Localidad);
    const filteredItem = filterArray[0];

    useEffect(() => {
        if(state.step === 3){
            let element = document.getElementById('formStep2');
            element.classList.add(styles.activeType)
        }
    
    }, [state.step])
  
    return (
        <div className={styles.form__Budget}>
        <h1 className={styles.title}>Seleccione la ubicación</h1>
        <div className={styles.form__BigBox} id="formStep2">
            <div className={`${styles.form__BigBox__OptionContainer} ${styles.noOverFlow}`}> 
                         
                <input 
                    className={styles.formJobType__option} 
                    list="browsers" 
                    value={state.Localidad} 
                    onChange={handleChange} 
                    name="Localidad"
                    placeholder="Elegir municipio"
                />

                    <datalist id="browsers">

                        {localidades.map((index)=>{
                            return(
                                <option key={index} value={index}/>
                            )
                        })}
                    
                    </datalist>                        

                {filteredItem === undefined ? 

                    <Select native disabled className={styles.formJobType__option} >
                        <option>Codigo Postal</option>
                    </Select>

                :

                <>                 
                <input 
                    className={styles.formJobType__option}
                    list="codigosPostales" 
                    value={state.CodigoPostal} 
                    onChange={handleChange} 
                    name="CodigoPostal"
                    placeholder="Elegir Codigo Postal 👇🏽"
                 />

                    <datalist id="codigosPostales">

                        <option>
                            {filteredItem.grup_ajuntament.codi_postal}
                        </option>
                        
                    </datalist>  
                </>
                 
                }

            </div>
            <div className={styles.form__BigBox__ImagenContainer}>
                <Image className={styles.image}  width={500} height={333} src='/images/location.jpg' alt="imagen zipzone provisional" />
            </div>
        </div>
        <div className={styles.bugetForm__controlButtons} >
            <button className={styles.backButton} onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </div>
        <BorderLinearProgress variant="determinate" value={60} />

    </div>
    )
}

export default FormZipZone