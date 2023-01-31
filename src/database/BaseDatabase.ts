import { knex } from "knex"

export abstract class BaseDatabase{
    //atributos ---> propriedades

    //metodos ----> funções
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}
//instanciar
// const dados = new BaseDatabase() //não consigo instanciar pq é abstrato

// class carro {
//     //atributos
//     constructor (
//         private id: string,
//         private cor: string,
//         private marca: string
//     ) {}
    
//     //metodo
//     public acelerar ():void {
//         const velocidade = km/h
//         console.log("carro acelerando")
//     }

//     public freiar(){

//     }
// }

// const labCarro = new carro("01", "cinza", "fiat")

// labCarro.acelerar()