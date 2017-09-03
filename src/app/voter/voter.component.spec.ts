import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from "@angular/platform-browser";

describe('VoterComponent', () => {

    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[ VoterComponent ]
        });

        fixture = TestBed.createComponent(VoterComponent);
        component = fixture.componentInstance;
        
    });

    it('should renders total votes',()=>{
        component.othersVote = 20;
        component.myVote = 1;
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.vote-count'));
        let el:HTMLElement =  de.nativeElement;

        expect(el.innerText).toContain('21');
    });

    it('should highlight the upvote button if i have upvoted',()=>{

        component.myVote =1;
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        

        expect(de.classes['highlighted']).toBeTruthy();
    });
});
