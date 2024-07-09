import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  
  beforeEach(async() => {
    //Create a new instance of the component
    component = new SwitchComponent();
  });

  //to the tests required on the component
  it("should change the value of the boolean on each click", () => {
    //the active boolean should be true as initial state
    expect(component.active).toBeTrue();
    
    //do the click event and the active value should be changed
    component.handleClick();
    expect(component.active).toBeFalse();
  });


  //Now check for the direct text
  it('should modify the text when the active value changes', () => {

    expect(component.message)
    .withContext("Before click event")
    .toMatch(/encendido/); // needs a string or regular expression
    
    //now do the event  
    component.handleClick();

    expect(component.message)
    .withContext("After click event")
    .toMatch(/apagado/);
  });



});
