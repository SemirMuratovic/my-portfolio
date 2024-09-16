import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  rowReverse = 'row-reverse';
  alignItems = 'flex-end';
  textAlign = 'end';
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  getFlexDirection(singleProjectIndex: number): string {
    if (this.windowWidth > 1200) {
      return (singleProjectIndex % 2 === 0) ? 'row' : 'row-reverse';
    } else {
      return 'column';
    }
  }

  @Input() singleProject = {
    projectImage: 'laptop-join.png',
    projectName: 'Join',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    liveTestLink: '#',
    gitHubLink: '#',
  }

  @Input() singleProjectIndex = 0;
}
