import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkTestFormComponent } from './ok-test-form.component';

describe('OkTestFormComponent', () => {
    let component: OkTestFormComponent;
    let fixture: ComponentFixture<OkTestFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OkTestFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OkTestFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
