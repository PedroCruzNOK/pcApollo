import {gql, ApolloServer} from 'apollo-server'
import axios from 'axios';

const typeDefis= gql ` 
     type personempleados {
          id_empleado: Int
          ap_paterno: String
          ap_materno: String
          nombre: String
          fechaIngreso: String
          antiguedad: String
          dependencia: String
          areaPuesto: String
     }

     type Query{
         
          allEmpleados: [personempleados]
     }

`;

const resolvers = {
     Query:{
          
          allEmpleados:async (root, args)=> {
               const {data: personempleados} = await axios.get('backend:3000/empleados')
               console.log(personempleados)
               return personempleados
          },
            
     }
}

const server = new ApolloServer({
     typeDefs: typeDefis,
     resolvers
})

server.listen().then(({url}) => {
     console.log( `server ${url} `)
})
