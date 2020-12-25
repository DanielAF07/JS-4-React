const nombre = 'Daniel'
        console.log(`Mi nombre es ${nombre}`)
        console.log(`Mi nombre es ${22}`)
        console.log(`Este es el ${'Curso de Javascript para React'}`)
        console.log(`Mi nombre es ${x = 'Daniel'}`) // Se declara en windows.x
        console.log(`Mi nombre es ${(function () {return "Dani"})()}`) //Funcion Autoejecutada
        console.log(`Mi nombre es ${(() => {return "Daniel Arrow"})()}`) // Funcion Flecha
        console.log(`Mi nombre es ${true && 'Daniel Ternario'}`) // Ternario
        console.log(`Mi nombre es ${false ? 'Daniel true' : 'Daniel False'}`) // Ternario
        console.log(`Mi nombre es ${['a','b'].map(letra => `${letra}-styled`)}`) // Funcion map para arrays