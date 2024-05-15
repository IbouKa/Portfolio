import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import ANIMATE from "@salesforce/resourceUrl/Animate";
import IMAGES from '@salesforce/resourceUrl/Images';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'

export default class Hero extends LightningElement {
    photo = IMAGES+'/photo_profile.png';
    img;
    renderedCallback(){

          Promise.all([
            loadStyle(this, ANIMATE + "/animate.min.css"),
            loadStyle(this, ANIMATE + "/wickedcss.min.css"),
            
          ]).then(() => {
            /* callback */
          });
    }
    handleClickProfile(event){
        this.img = this.template.querySelector('.profile');
        this.img.classList.add("zoomer");
        this.img = this.template.querySelector('.profile');
        setTimeout(() => {
            this.img.classList.remove("zoomer");
        }, 2000);
        
    }
}