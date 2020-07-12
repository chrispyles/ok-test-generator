import { TestBed } from '@angular/core/testing';

import { OkTestFormService } from './ok-test-form.service';

describe('OkTestFormService', () => {
    let service: OkTestFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OkTestFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
