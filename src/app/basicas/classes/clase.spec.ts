import {Jugador} from './clase';


describe('prueba de clase', () => {

  let jugador = null;

  beforeAll(() => {

    console.log('before all');
  });

  beforeEach(() => {
   jugador = new Jugador();

  });

  afterAll( () => {
    console.log('after all');
  });

  afterEach( () => {
    console.log('after each');

  });



  it('Debe retornar 80 de vida, si recibe 20 de daño', () => {

    const resp = jugador.recibeDano(20);

    expect(resp).toBe(80);

  });
});
