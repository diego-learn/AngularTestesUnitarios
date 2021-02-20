import {mensaje} from './string';

describe('Pruebas de Strings', () => {

  it('Debe regresar una string', () => {
    const resp = mensaje('Diego');

    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado', () => {
    const resp = mensaje('Diego');

    expect(resp).toContain('Diego');
  });

});



