"use strict";

var Regex = require("regex");
var math = require('mathjs');

class DaoMatriz{

    constructor(){
        this.resultado="";
    }

    iniciaMatriz(val){
      try{
            this.resultado="";
            for(var x=0;x<val.operaciones.length;x++){
                
                this.c = math.zeros(parseInt(val.operaciones[x].tamanio), 
                parseInt(val.operaciones[x].tamanio), parseInt(val.operaciones[x].tamanio)); 
                var str =val.operaciones[x].operaciones ;
                var res = str.split(";");
            
            for(var z=0; z<res.length;z++){
                var ope = res[z].split(" ");
                    
                if(ope[0]=='UPDATE'){
                        this.updateMatriz(parseInt(ope[1]),parseInt(ope[2]),
                                        parseInt(ope[3]),parseInt(ope[4]));
                }
                    
                if(ope[0]=='QUERY'){
                        this.resultado+= this.queryMatriz(parseInt(ope[1]),
                            parseInt(ope[2]),parseInt(ope[3]),parseInt(ope[4]),parseInt(ope[5]),
                                parseInt(ope[6]),parseInt(val.tamanio))+' ';
                } 
            }
        }  
            return this.resultado.valueOf();
      }catch (err) {
         return 'Se ha presentado un error.';
      }    
     }

    updateMatriz(x,y,z,value){
        this.c.subset(math.index([x.valueOf()],[y.valueOf()],[z.valueOf()]), value);
    } 

    queryMatriz(x1,y1,z1,x2,y2,z2,count){
      
        var sum = 0;
          for (var x = 1; x <= count; x++) {
            for (var y = 1; y <= count; y++) {
                for (var z = 1; z <= count; z++) {
                    if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2)) {
                        sum = math.subset(this.c, math.index([x],[y],[z])) + sum;
                    }
                }
            }
        }
         return sum.valueOf();
    }     

} 
export default DaoMatriz; 