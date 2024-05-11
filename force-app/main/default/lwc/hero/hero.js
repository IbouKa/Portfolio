import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'

export default class Hero extends LightningElement {
    photo = IMAGES+'/photo_profile.png';
}