import React, {useState} from 'react';
import styles from '../styles/ContactButtons.module.css';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({

  speedDial: {
    
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
   
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }

  
    
})); 

const actions = [
  { icon: <EmailIcon />, 
    name: 'Email',
    path: 'mailto:easypaintingspain@gmail.com',
    class: `${styles.buttonsContact}`
  },

  
  { icon: <PhoneInTalkIcon />, 
    name: 'Llamar',
    path: 'tel:+34691847043',
    class: `${styles.buttonsContact}`
  },

  { icon: <WhatsAppIcon />, 
    name: 'WhatsApp',
    path: 'https://wa.me/34691847043',
    class: `${styles.whatsAppContact}`

  },
  
  
];

export default function SpeedDials() { 

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
   
        <SpeedDial
          
          ariaLabel="Contacto"
          className={classes.speedDial}
          icon={<ContactPhoneIcon/>}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction='up'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              href={action.path}
              tooltipTitle={action.name}
              onClick={handleClose}
              className={action.class}
            />
          ))}
        </SpeedDial> 
      
     
    
  );
}
