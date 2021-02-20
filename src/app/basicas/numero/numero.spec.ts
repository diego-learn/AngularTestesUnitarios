import {incrementar} from './numero';

describe('prueba de numeros', () => {

  it('confere se o numero é maior a 100', () => {

    const resp = incrementar(100);

    expect(resp).toBe(101);

  });

  it('debe ser menor a 100', () => {

    const resp = incrementar(50);

    expect(resp).toBe(51);
  });
});
