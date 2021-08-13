function ServicesFilter(state) {

    let services = {};  

    const PintarPisoServices= {
        PintarPuertaPrincipal : state.PintarPuertaPrincipal,
        PintarPuertasInteriores : state.PintarPuertasInteriores, 
        PintarArmariosEmpotrados : state.PintarArmariosEmpotrados,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
        PonerPapelDecorativo : state.PonerPapelDecorativo, 
        QuitarPapelDecorativo : state.QuitarPapelDecorativo, 
        PintarTechos : state.PintarTechos,

    };

    const PintarInteriorChaletServices = {
        PintarPuertaPrincipal : state.PintarPuertaPrincipal,
        PintarPuertasInteriores : state.PintarPuertasInteriores, 
        PintarArmariosEmpotrados : state.PintarArmariosEmpotrados,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
        PonerPapelDecorativo : state.PonerPapelDecorativo, 
        QuitarPapelDecorativo : state.QuitarPapelDecorativo, 
        PintarTechos : state.PintarTechos,

    };

    const PintarExteriorChaletServices = {
        PintarPuertaPrincipal : state.PintarPuertaPrincipal, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes,
    };

    const PintarInteriorFincaServices ={
        PintarPuertaPortal : state.PintarPuertaPortal,
        PintarParedesEscalera : state.PintarParedesEscalera, 
        PintarTechosEscalera : state.PintarTechosEscalera, 
        PintarCarpinteriaEscalera : state.PintarCarpinteriaEscalera,
        PintarPuertasAscensor : state.PintarPuertasAscensor,
        PintarArmariosEmpotrados : state.PintarArmariosEmpotrados,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
        PonerPapelDecorativo : state.PonerPapelDecorativo, 
        QuitarPapelDecorativo : state.QuitarPapelDecorativo, 
    };

    const PintarExteriorFincaServices = {
        PintarPuertaPortal : state.PintarPuertaPortal,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
    };

    const PintarInteriorLocalServices = {
        PintarPuertaPrincipal : state.PintarPuertaPrincipal,
        PintarPuertasInteriores : state.PintarPuertasInteriores, 
        PintarArmariosEmpotrados : state.PintarArmariosEmpotrados,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
        PonerPapelDecorativo : state.PonerPapelDecorativo, 
        QuitarPapelDecorativo : state.QuitarPapelDecorativo, 
        PintarTechos : state.PintarTechos,
    };

    const PintarExteriorLocalServices = {
        PintarPuertaPortal : state.PintarPuertaPortal,
        TratarHumedades : state.TratarHumedades, 
        RepararParedes : state.RepararParedes, 
        QuitarGoteleYAlisar : state.QuitarGoteleYAlisar, 
    };

    if(state.PintarPiso === true){
        for(let service in PintarPisoServices)
            {
                services[service] =  PintarPisoServices[service];
            }
    }

    if(state.PintarInteriorChalet === true){
        for(let service in PintarInteriorChaletServices)
            {
                services[service] =  PintarInteriorChaletServices[service];
            }
    }

    if(state.PintarExteriorChalet === true){
        for(let service in PintarExteriorChaletServices)
            {
                services[service] =  PintarExteriorChaletServices[service];
            }
    }

    if(state.PintarInteriorFinca === true){
        for(let service in PintarInteriorFincaServices)
            {
                services[service] =  PintarInteriorFincaServices[service];
            }
    }

    if(state.PintarExteriorFinca === true){
        for(let service in PintarExteriorFincaServices)
            {
                services[service] =  PintarExteriorFincaServices[service];
            }
    }

    if(state.PintarInteriorLocalComercial === true){
        for(let service in PintarInteriorLocalServices)
            {
                services[service] =  PintarInteriorLocalServices[service];
            }
    }

    if(state.PintarExteriorLocalComercial === true){
        for(let service in PintarExteriorLocalServices )
        {
            services[service] =  PintarExteriorLocalServices[service];
        }
    }
   
    return services;

}


export  default ServicesFilter
