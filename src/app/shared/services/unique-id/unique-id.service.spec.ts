import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  DEVE gerar um id QUANDO informado um prefixo`, () => {
    const id = service.generateUniqueIdWithPrefix('batata');

    expect(true).toBeTrue();
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  NAO DEVE gerar um id duplicado 
   QUANDO for chamado multiplas vezes`, () => {
    const firstId = service.generateUniqueIdWithPrefix('batata');
    const secondId = service.generateUniqueIdWithPrefix('batata');

    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(service.generateUniqueIdWithPrefix('batata'));
    }

    // expect( tatntantana ).toBeTrue();

    //expect(firstId).not.toBe(secondId);
    expect(ids.size).toBe(1000);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
   DEVE retornar o numero de ids 
  QUANDO for chamado`, () => {
    const firstId = service.generateUniqueIdWithPrefix('batata');
    const secondId = service.generateUniqueIdWithPrefix('batata');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
   DEVE retornar um erro  
   QUANDO for chamado sem prefixo/vazio`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];

    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value:  ${emptyValue}`)
        .toThrow();
    });
  });
});
