import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
import { loadStyle } from "lightning/platformResourceLoader";
import ANIMATE from "@salesforce/resourceUrl/Animate";
export default class Skills extends LightningElement {
    ai = IMAGES+'/ai.jpeg';
    admin = IMAGES+'/admin.jpeg';
    api = IMAGES+'/api.jpeg';
    coding = IMAGES+'/coding.jpeg';
    integration = IMAGES+'/integration.jpeg';

    renderedCallback(){

        Promise.all([
          loadStyle(this, ANIMATE + "/wickedcss.min.css"),
          
        ]).then(() => {
          /* callback */
        });
  }
  handleClickCoding(event){
      this.img = this.template.querySelector('.coding');
      this.img.classList.add("bounceIn");
      this.img = this.template.querySelector('.coding');
      setTimeout(() => {
          this.img.classList.remove("bounceIn");
      }, 2000);
      
  }
  handleClickAdmin(event){
    this.img = this.template.querySelector('.admin');
    this.img.classList.add("bounceIn");
    this.img = this.template.querySelector('.admin');
    setTimeout(() => {
        this.img.classList.remove("bounceIn");
    }, 2000);
    
}
handleClickIntegration(event){
    this.img = this.template.querySelector('.integration');
    this.img.classList.add("bounceIn");
    this.img = this.template.querySelector('.integration');
    setTimeout(() => {
        this.img.classList.remove("bounceIn");
    }, 2000);
    
}

}