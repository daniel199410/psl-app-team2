import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, ComponentFactory } from '@angular/core';

//Creating stub RouterOutlet
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  //All code in beforeEach is excecuted like if it is at the begining of each it method.
  beforeEach(async(() => {

    /*TestBed is like @NgModule of the app.module.ts class,
    but you should not declare or import real components or services,
    except that which you will test*/
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,

        //Declaring stub RouterOutlet
        RouterOutletStubComponent
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Administrator app'`, async(() => {
    expect(app.title).toEqual('Administrator app');
  }));

  it('should have tabId and let it to change', async(() => {

    expect(app.checkSelected(1)).toEqual(true);

    app.changeTab(8);

    //Required to detect the changes
    fixture.detectChanges();

    //tabId is not 1 anymore
    expect(app.checkSelected(1)).toEqual(false);

    //tabId is 8 now
    expect(app.checkSelected(8)).toEqual(true);
  }));
});
