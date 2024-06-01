


export class Person {
    // public name: string; (No es tan común en typescript, pero si en Angular)
    // private address: string;

    constructor( 
        public name: string, 
        private address: string = ' Address' ) {
        // this.name = 'Alejandro'; (tambin.en se puede obvia asignandole los valores directamente por defecto)
        // this.address = 'Bogotá'
    }

}

// export class Hero extends Person { (Esta en la EXTENCIÓN DE UNA SOLA CLASE, ABAJO ESTÁ LA DE MÁS DE 1)
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super( realName, 'New York');
//     }
// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        this.person = new Person(realName);
    }
}


const Tony = new Person('Tony Stark', 'New York');
const ironman = new Hero ('Ironman', 15, 'Bgotá', Tony);
console.log(ironman)
