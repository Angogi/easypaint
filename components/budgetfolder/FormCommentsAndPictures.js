import React, {useEffect} from 'react';
import styles from '../../styles/FormIndex.module.css';
import Image from 'next/image'
import Skeleton from '@material-ui/lab/Skeleton';

function FormCommentsAndPictures({state, handleChange, nextStep, prevStep, BorderLinearProgress, imageHandleChange, selectedImages}) {
   
    useEffect(() => {
        if(state.step === 4){
            let element = document.getElementById('formStep3');
            element.classList.add(styles.activeType)
        }
    }, [state.step])

    const renderPhotos = (source)=>{

        return source.map((photo)=>{
            return (
                <img width={500} height={333} alt="images list" className={styles.uploadedImage}  key={photo} src={photo}/>
              
            )
        })
    }

    return (
        <div className={styles.form__Budget}>
            <h1 className={styles.title}>Imagenes e información adicional</h1>
            <div className={styles.form__BigBox} id="formStep3">
                <div className={styles.form__BigBox__OptionContainer}>
                    <label htmlFor="uploadedImages" className={styles.imagesUploader}>
                        <input
                            multiple
                            style={{ display: 'none' }}
                            id="uploadedImages"
                            name="uploadedImages"
                            type="file"
                            onChange={imageHandleChange}
                        />
                     <h2>Agregar imagenes <span role="img" alt="camara" aria-label="camara-emoji">📷</span></h2>  
                    </label>

                    <div className={styles.uploadedImages}>
                        {renderPhotos(selectedImages)}

                        <label htmlFor="secundaryImageUploader" className={styles.secundaryImageUploader}>
                            <input
                                multiple
                                style={{ display: 'none' }}
                                id="secundaryImageUploader"
                                name="uploadedImages"
                                type="file"
                                onChange={imageHandleChange}
                            />
                        
                            <Skeleton variant="rect"  onChange={imageHandleChange}>
                            +
                            </Skeleton >
                         </label>
                    </div>
                </div>
                <div className={styles.form__BigBox__ImagenContainer}>
                  
                    <textarea 
                        name="Comentarios"
                        onChange={handleChange}
                        value={state.Comentarios}
                        placeholder="Enviar comentarios y observaciones. 👀💡"
                        className={styles.textarea}
                    />

                </div>
            </div>
            <div className={styles.bugetForm__controlButtons} >
                <button className={styles.backButton} onClick={prevStep}>Atrás</button> 
                <button onClick={nextStep}>Siguiente</button>
            </div>
            <BorderLinearProgress variant="determinate" value={80} />
        </div>
    )
}

export default FormCommentsAndPictures