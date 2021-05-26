<!-- @format -->

## Prueba 2

## [Link de la prueba](https://www.db-fiddle.com/f/r6GB7EmA9e4i3STXBtkD1y/4)

Para esta prueba será necesario agregar (al directorio **Prueba_2**) las sentencias de SQL con las que se creo el esquema(base de datos y tablas) y las consultas realizadas para responder a los siguientes puntos:

> _Nota: Para realizar esta prueba es necesario tener una instancia de [SQL Server Developer, SQL Server Express](https://www.microsoft.com/es-mx/sql-server/sql-server-downloads) o [MySQL Community](https://dev.mysql.com/downloads/mysql/) instalada en tu equipo, si por algún motivo no puedes instalar una versión de las anteriores, puedes entrar a [db-fiddle](https://www.db-fiddle.com/) para realizarla_

- [x] Construye una base de datos y crea las siguientes tablas dentro de ella:
  - **logDial** con las siguientes columnas
    - **idLlamada** varchar(10)
    - **fechaDeLlamada** dateTime
    - **tiempoDialogo** smallint
    - **telefono** varchar(10)
    - **tipoDeLlamada** varchar(15)
  - **costos** con las siguientes columnas
    - **tipoDeLlamada** varchar(15)
    - **costo** decimal(10,4)
- Con las tablas contruidas, inserta los datos proporcionados en el archivo de excel **DatosPracticaSQL.xlsx** que se encuentran en la carpeta **Prueba_2** (revisar las dos hojas del archivo)
- Genera las sentencias SQL que respondan lo siguiente:
  - [x] Que muestre los registros con tipo de llamada **Cel LD** durante el **mes febrero** **_(5 puntos)_**
  - [x] Que indique el promedio de tiempo de dialogo de las llamadas con tipo **Cel LD** durante el **mes de febrero** **_(5 puntos)_**
  - [ ] Que muestre el **número en minutos de dialogo** (tomando tiempoDialogo que está en segundos) y el **costo** de todas las llamadas del **mes de enero** **_(10 puntos)_**

---
