import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroImobiliariaComponent } from './cadastro-imobiliaria.component';

describe('CadastroImobiliariaComponent', () => {
  let component: CadastroImobiliariaComponent;
  let fixture: ComponentFixture<CadastroImobiliariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroImobiliariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroImobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
