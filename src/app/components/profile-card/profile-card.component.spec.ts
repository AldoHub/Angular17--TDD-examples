import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardComponent } from './profile-card.component';
import { By } from '@angular/platform-browser';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it("should contain the initial text", () => {
    //grab the element
    const cardElem: HTMLElement = fixture.nativeElement;
    //find for the text inside the element
    expect(cardElem.textContent).toContain('profile-card-works')
  });
  */
 
  it("should show the complete name", () => {

    //get the h1 inside the component
    const headerDe = fixture.debugElement.query(By.css("h1"));
    //get the native instance
    const headerEl = headerDe.nativeElement;

    //user data
    const testUser = { _id: '12345', first_name: 'Mario', last_name: 'Girón', email: 'mario@gmail.com', username: 'mariog', id: 3, image: '', password: '1212' };
    //update the user on the component
    component.user = testUser;

    //get the changes
    fixture.detectChanges();

    expect(headerEl.textContent).toBe(`${testUser.first_name} ${testUser.last_name}`);

  });


  it('should change the background color on click', () => {
    //get the button
    const btnDe = fixture.debugElement.query(By.css('#btnSelectUser'));
    //get the div
    const divDe = fixture.debugElement.query(By.css('.user-card'));

    //trigger the click event
    btnDe.triggerEventHandler('click');
    //detect changes
    fixture.detectChanges();

    //check the style - background
    expect(divDe.nativeElement.style.backgroundColor).toBe('tomato');
})


});
