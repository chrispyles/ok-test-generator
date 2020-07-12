import { TestBed } from '@angular/core/testing';

import { GeneratorOutputService } from './generator-output.service';

describe('GeneratorOutputService', () => {
    let service: GeneratorOutputService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GeneratorOutputService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
