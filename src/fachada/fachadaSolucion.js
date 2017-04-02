
import Matriz from '../dao/daoMatriz3D' 

class fachadaSolucion{

    constructor(){
       
    }

    matriz3D(val){
      
        var value=new Matriz().iniciaMatriz(val);
        return value;
    }
   
}    
export default fachadaSolucion; 