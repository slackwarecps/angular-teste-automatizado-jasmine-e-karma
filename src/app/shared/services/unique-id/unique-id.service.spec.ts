import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} DEVE gerar um id QUANDO informado um prefixo`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('batata');

    expect(id).toContain('batata');
  });
});
