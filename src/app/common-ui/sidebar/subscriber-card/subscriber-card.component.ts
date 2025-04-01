import {Component, Input} from '@angular/core';
import {ImgUrlPipe} from '../../../helpers/pipes/img-url.pipe';
import {Profile} from '../../../data/interfaces/profile.interface';

@Component({
  selector: 'app-subscriber-card',
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss'
})
export class SubscriberCardComponent {
  @Input() profile!: Profile
}
