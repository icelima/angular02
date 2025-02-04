import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  
import { CocktailsService } from './cocktails.service';

describe('CocktailsService', () => {
  let service: CocktailsService;
  //let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailsService],
    });
    //httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CocktailsService);  // Inject the service
  }));

  /*afterEach(() => {
    httpTestingController.verify();
  });*/

  //control async 
  it('should be created', () => {
    expect(service).toBeTruthy();  // Control if the service is correctly created
  });

  //control sync
  it('should fetch cocktails', (done) => {
    service.getCocktails().subscribe(cocktails => {
      expect(cocktails).toBeDefined();
      done();  // Test completed
    });
  });

});
