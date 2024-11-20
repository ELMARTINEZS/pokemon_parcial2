/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemonDetalleComponent } from './pokemon-detalle.component';

describe('PokemonDetalleComponent', () => {
  let component: PokemonDetalleComponent;
  let fixture: ComponentFixture<PokemonDetalleComponent>;



  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
