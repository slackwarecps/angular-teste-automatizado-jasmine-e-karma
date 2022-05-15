import { LikeWidgetModule } from './like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { componentFactoryName } from '@angular/compiler';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it(`DEVE criar um componente
    QUANDO inicia `, () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`DEVE criar um auto id 
    QUANDO nao for informado um id`, () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`DEVE NAO criar um auto id 
  QUANDO SIM for informado um id`, () => {
    const component = fixture.componentInstance;
    const someId = 'alguma-coisa';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}  
      DEVE trigar um evento 
      QUANDO for chamado`, () => {
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component.liked, 'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
