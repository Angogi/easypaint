import React, {useState} from 'react';
import styles from '../../styles/FormIndex.module.css';
import {db, storage} from '../../firebase';
import FormJobServices from './FormJobServices';
import FormJobType from './FormJobType';
import FormZipZone from './FormZipZone';
import FormCommentsAndPictures from './FormCommentsAndPictures';
import FormContactData from  './FormContactData';
import FormSuccessfull from './FormSuccesfull';
import validation from './Validation';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Head from 'next/head';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#43a047',
    },
  }))(LinearProgress);



export const BudgetForm = ({onClose}) => {
   
    const [state, setState] = useState({
        step: 1,

        RadioOptionFormJobType:'PintarInteriorFinca',  

        PintarInteriorFinca:false,
        PintarExterorFinca:false,
        PintarInteriorVivienda:false,
        PintarExteriorVivienda:false,
        PintarInteriorLocalComercial:false,
        PintarExteriorLocalComercial:false,
        VariosTrabajos:false,
        OtroTrabajo:false,
        ElOtroTrabajo:'',
        ElOtroTrabajoCheckOption:'',

        PintarParedesEscalera:false,
        PintarTechosEscalera:false,
        PonerGotele:false,
        QuitarGotele:false,
        PonerPapelDecorativo:false,
        QuitarPapelDecorativo:false,
        PintarPuertasAscensor:false,
        TratarHumedades:false,
        RepararParedes:false,
        PintarPuertaPortal:false,
        PintarCarpinteriaEscalera:false,
        
        PintarFachada:false,
        PintarCarpinteriaExterior:false,
        NumeroPlantasEdificio:0,

        Localidad: '',
        CodigoPostal:'',

        Comentarios: '',

        formContactType:'WhatsApp',
        Nombre: '',
        Numero: '', 
        Email:'',
        createdAt: new Date()
    });

    const handleChange = event => {
        event.preventDefault();
        const value =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
        console.log(event.target.name)
        console.log(value);
      };
      
    const prevStep = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            step: state.step  - 1,
        })
        console.log(state)
    };

    const nextStep = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            step: state.step + 1,
        })
        console.log(state)
    };

    const backToRadioSelect = (event)=>{
        event.preventDefault();
        setState({
            ...state,
            RadioOptionFormJobType: "PintarInteriorFinca",
            PintarInteriorFinca:false,
            PintarExterorFinca:false,
            PintarInteriorVivienda:false,
            PintarExteriorVivienda:false,
            PintarInteriorLocalComercial:false,
            PintarExteriorLocalComercial:false,
            VariosTrabajos:false,
            OtroTrabajo:false,
            ElOtroTrabajoCheckOption:'',
        })
    }

    const [selectedImages, setSelectedImages] = useState([]);
    const [images, setImages] = useState([]);
    const [urls, setUrls] =  useState([]);
    const [progress, setProgress] = useState(0);

    const imageHandleChange = (e) =>{
        console.log(e.target.files)
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file));
            setSelectedImages((prevImages)=>prevImages.concat(fileArray));

            Array.from(e.target.files).map(
                (file)=>URL.revokeObjectURL(file)
            )

            console.log(fileArray)

        }

        for (let i = 0; i < e.target.files.length; i++){
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
        
    };

    const imagesHandleUpload = () =>{
        const promises = [];
        const folderId = state.formContactType === 'WhatsApp' ? state.Numero : state.Email;
        images.map((image) =>{
            const uploadTask = storage.ref(`images/${folderId}/${image.name}`).put(image);
            promises.push(uploadTask)
            uploadTask.on(
                "state_changed",
                (snapshot) =>{
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) =>{
                    console.log(error);
                },
               async () =>{
               await storage
                .ref(`images/${folderId}`)
                .child(image.name)
                .getDownloadURL()
                .then((url)=>{
                    setUrls((prevState) => [...prevState, url]);
                }); 
               }

            )
        });

        Promise.all(promises)
            .then(()=> alert("All images uploaded"))
            .catch((err) => console.log(err));

    }
    console.log(urls);
    
    const [errors, setErrors] = useState({
        Nombre : 'Por favor, ingrese su nombre'
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validation(state));

        let  errorsLength = Object.keys(errors).length
        if(errorsLength === 0){
            db.collection('solicitud-presupuesto').add({
                ...state,
            })
            .then(()=>{
                alert("Tu solicitud ha sido enviada con éxito, nos pondremos en contacto a la mayor brevedad posible ")
            })
            .catch(error => {
                alert(error.message);
            })
            
            imagesHandleUpload();

            setState({
                step: 6
            })

            return alert('Enviando datos')
        }
        
        alert('Por favor, verifique los datos de contacto')
        
    }

    const closer = onClose;

    switch (state.step) {
        case 1:
            return (
            <div className={styles.budgetForm}>
                <Head>
                    <title>Solicitud presupuesto de pintura en Barcelona</title>
                    <meta name="description" content="Solicite un presupuesto ajustado en tan solo unos clics"/>
                </Head>
                <FormJobType
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    backToRadioSelect={backToRadioSelect}
                    BorderLinearProgress={BorderLinearProgress}
                    closer={closer}
                />
            </div>
            );
        case 2:
            return (
            <div className={styles.budgetForm}>
                <Head>
                    <title>Multiples servicios de pintura en Barcelona</title>
                    <meta name="description" content="Pintura interior y exterior de pisos, locales comerciales, chalets"/>
                </Head>
                <FormJobServices
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    BorderLinearProgress={BorderLinearProgress}
                />
            </div>
            );
        case 3:
            return (
            <div className={styles.budgetForm}>
                <Head>
                    <title>Servicios de pintura Barcelona y Tarragona</title>
                    <meta name="description" content="Ofrecemos servicios de pintura en toda la provincia de Barcelona"/>
                </Head>
                <FormZipZone
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    BorderLinearProgress={BorderLinearProgress}
                />
            </div>
            );
        case 4:
            return (
            <div className={styles.budgetForm}>
                <Head>
                    <title>Cargar imagenes para solicitud de presupuesto</title>
                    <meta name="description" content="Puedes agregar algunas imagenes para facilitar la solicitud de presupuesto"/>
                </Head>
                <FormCommentsAndPictures
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    BorderLinearProgress={BorderLinearProgress}
                    imageHandleChange={imageHandleChange}
                    selectedImages={selectedImages}
                />
            </div>
            );
        case 5:
            return (
            <div className={styles.budgetForm}>
                <Head>
                    <title>Contacta directectamente y solicita un presupuesto</title>
                    <meta name="description" content="Contacto rapido y sencillo para solicitar presupuesto de remodelación de pintura de pisos, chalets y locales comerciales"/>
                </Head>
                <FormContactData
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    BorderLinearProgress={BorderLinearProgress}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />
            </div>
            );
        case 6:
            return (
            <div className={styles.budgetForm}>
                <FormSuccessfull
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    state={state}
                    BorderLinearProgress={BorderLinearProgress}
                    progress={progress}
                    closer={closer}

                />
            </div>
            );

        default:
            return(
                null
            )
    }
}

export default BudgetForm

