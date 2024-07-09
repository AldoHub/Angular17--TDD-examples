import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientModule]

    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //test simple service function
  it("getSimpleValue should return the text in uppercase", () => {
    expect(service.getSimpleValue('hello')).toBe("HELLO");
  })

  //test simple observable response
  it("getUsers should return the value of the api as an observable", (done: DoneFn) => {
    service.getUsers().subscribe(value => {
      expect(value.results.length).toBe(10);
      done();
    })
  });

  //test a promise
  it("getUsersProm should return the value of the api as a promise", (done: DoneFn) => {
    service.getUsersProm()
    .then(value => {
      expect(value.page).toBe(1);
      done();
    });
  });

});
