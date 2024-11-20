/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarTiposComponent } from './listar-tipos.component';

describe('ListarTiposComponent', () => {
  let component: ListarTiposComponent;
  let fixture: ComponentFixture<ListarTiposComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
