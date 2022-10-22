import { Component } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  id = "tsparticles";
  faGithub = faSquareGithub;
  faLinkedin = faLinkedin;
  faFile = faFile
  faEnvelope = faEnvelope

  particlesOptions = {
    background: {
      color: {
        value: "#ffffff"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: HoverMode.grab
        },
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#680081"
      },
      links: {
        color: "#680081",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 30
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 3 },
      }
    },
    detectRetina: true
  };


  title = 'portfolio';
  coveoSelected = false;
  vectorsolvSelected = false;
  pcoSelected = false;
  aslSelected = false;
  pricecompereSelected = false;
  tailorSelected = false;
  test(){
    console.log('hello')
  }
  experience(selected: any){
    switch(selected){
      case 'coveo':
        console.log('Coveo selected');
        this.coveoSelected = !this.coveoSelected;
        this.vectorsolvSelected = false;
        this.pcoSelected = false;
        break
      case 'vectorsolv':
        console.log('vectorsolv selected');
        this.coveoSelected = false;
        this.vectorsolvSelected = !this.vectorsolvSelected;
        this.pcoSelected = false;
        break
      case 'pco':
        console.log('PCO selected');
        this.coveoSelected = false;
        this.vectorsolvSelected = false;
        this.pcoSelected = !this.pcoSelected;
        break
    }
  }

  projects(selected: any){
    switch(selected){
      case 'asl':
        console.log('ASL selected');
        this.aslSelected = !this.aslSelected;
        this.pricecompereSelected = false;
        this.tailorSelected = false;
        break
      case 'pricecompare':
        console.log('price compare selected');
        this.aslSelected = false;
        this.pricecompereSelected = !this.pricecompereSelected;
        this.tailorSelected = false;
        break
      case 'tailor':
        console.log('tailor selected');
        this.aslSelected = false;
        this.pricecompereSelected = false;
        this.tailorSelected = !this.tailorSelected;
        break
    }
  }
  particlesLoaded(container: Container): void {
    console.log(container);
  }
  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
