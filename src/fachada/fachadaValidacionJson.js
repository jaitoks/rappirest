var Regex = require("regex");

import JsonVal from '../dao/daoJson'


class validacion{

    constructor(){
    
    }

    validacion(val){
         var value=new JsonVal().validacionOperaciones(val);
        return value;
    }

  
}    

export default validacion;