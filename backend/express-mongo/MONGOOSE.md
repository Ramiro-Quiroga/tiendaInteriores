# mongoose CRUD CHEATSHEET


# metodo lectra de datos
 Modelo(User,Pelicula,etc)
 ```js
 //encontrar todos los documentos
 Modelo.find();

 // encontrar por ID

 Modelo.findById(id),

 // encontrar uno que cumpla cierto criterio

 Modelo.findOne({campo:valor,campo2:valor2})

 // buscar con filtros especificos
 Modelo.find({edad: {$gt:18}}) // mayor que  18 ( $gt es grater Than)

 ```

 ## metodos de creacion
 ```js
 Modelo.create({campo:valor,
                campo2:valor2})

//creacer multiples documentos a la vez
Modelo.insertMany([{
        campo:valor
},{
        campo:valor
}])

```

## metodos para actualizar/update

```js
Modelo.findByIdAndUpdate(id,{campo:nuevoValor},{new:true});

// actualizar un documento que cumpla un criterio
Modelo.updateOne({campo:valor}, {$set: {campo:nuevoValor}   });

//Actualzar varios
Modelo.updateMany({campo:valor},{$set {campo:nuevoValor}})

```

## metodos para eliminar

```js
//Eliminar por ID
Modelo.findByIdAndDelete(id);

// eliminar uno que cumpla un criterio
Modelo.deleteOne({campo:valor})

//Eliminar varios
Modelo.deleteMany ({campo:valor})
```


## operadores comunes (de filtro)

```js
$eq : igual a
$ne : no igual a
$gt : mayor que
$gte : mayor o igual que
$lt : menor que
$lte : menor igual que
$in : dentro del array
$nin : No esten dentro del array
$and : Y logico
$or : O logico
```


## opciones utiles

```js 
// para actualizaciones
{new:true}              // devuelve el documento actualizado
{upsert : true}         //(update+Insert) crea el elemento si no existe

// para consultas
.select('campo1 campo2') // seleccionamos campos especificos
.limit(10)              // limitar resultados a (10)
.skip(5)                //saltear resultados(5)
.sort({campo:1})        // ordenar (1 ascendente , -1 descendete)