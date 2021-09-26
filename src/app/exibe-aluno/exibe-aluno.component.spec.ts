import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeAlunoComponent } from './exibe-aluno.component';

describe('ExibeAlunoComponent', () => {
  let component: ExibeAlunoComponent;
  let fixture: ComponentFixture<ExibeAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
