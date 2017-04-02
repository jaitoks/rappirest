import Matriz from '../modelo/matriz' 
import FachadaSol from '../fachada/fachadaSolucion' 
import Validacion from '../fachada/fachadaValidacionJson'

var bodyParser = require('body-parser');
module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    var facSol=new FachadaSol();
    var facVal=new Validacion();

    app.get('/api/todo:id',function(req,res){
        res.send('exito get'+ req.params.id);
    });
    
    app.get('/api/todo/:id',function(req,res){
        res.send('exito get'+ req.params.id);
    });

    app.post('/api/todo',function(req,res){
        var json=new Matriz();
        json.tamanio=req.body.id;
        json.operaciones=req.body.matrices;
       
        if(json.operaciones.length==json.tamanio){
            json.tamanio=3; 
          //  console.log(json.tamanio);    
                if(facVal.validacion(json)==true){
                    var value=facSol.matriz3D(json);
                    res.send('El resultado es:'+value);
                }else{
                    res.send("La estructura del Json no es correcta.");
                }
        }  else{
            res.send("El numero de procesos no coincide con los procesos descritos en el JSON");
        }  
    });
       
}
