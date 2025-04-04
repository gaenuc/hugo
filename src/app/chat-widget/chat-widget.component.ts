import { Component, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChatBubbleOvalLeftEllipsis, heroXMark, heroPaperAirplane } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    NgIcon
  ],
  providers: [provideIcons({heroChatBubbleOvalLeftEllipsis, heroXMark, heroPaperAirplane})],
  
  templateUrl: './chat-widget.component.html',
})
export class ChatWidgetComponent {
 
  @ViewChild('pres') pres:any;
  @Input() isChatOpen:boolean =false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    console.log(this.isChatOpen)
  }
}


//NgIconsModule.withIcons({ heroChatBubbleOvalLeftEllipsis, heroXMark, heroPaperAirplane })