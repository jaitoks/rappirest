"use strict";

import Matriz from '../modelo/matriz'
var Regex = require("regex");

class daoJson{

    constructor(){
        this.matriz=new Matriz();
        this.bolTamanio='false';
    }

    validacionOperaciones(val){
        try{
            for(var x=0;x<val.operaciones.length;x++){
                
                if(val.operaciones[x].tamanio.valueOf()>0){
                    var str =val.operaciones[x].operaciones ;
                    var res = str.split(";");
                
                    if(val.operaciones[x].numOpera==res.length){
                        this.bolTamanio=this.validacionMatriz(res);
                        if(this.bolTamanio==false)
                            return false;                     
                    }     
                    else
                        return false;                  
                }else
                    return false;        
            }
            return this.bolTamanio;
        }catch (err) {
         return 'Se ha presentado un error.';
        } 
    }

    validacionMatriz(val){
        try{
            var regexUpd = /(UPDATE\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1})/;
            var regexQuery = /(QUERY\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1}\s[1-9]{1})\s[1-9]{1}/;

            for(var x=0;x<val.length;x++){
                var arrMatchesU =regexUpd.test(val[x]);
                var arrMatchesQ =regexQuery.test(val[x]);
                
                if(arrMatchesU==true || arrMatchesQ==true)
                    return true;
                else
                    return false;           
            }
        }catch (err) {
            return 'Se ha presentado un error.';
        }
     }     
}
export default daoJson; 