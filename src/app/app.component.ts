import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Theme } from './types/themeOption';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-ui';

  options: Theme[] = [
    {
      name: 'Material Light',
      id: 'material-light'
    },
    {
      name: 'Material Dark',
      id: 'material-dark'
    },
    {
      name: 'Spotify Dark',
      id: 'spotify-dark'
    },
  ];
  currentOption: Theme = this.options[0];

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService) {
    this.changeTheme(this.currentOption);
  }

  toggleOptions(optionDom: HTMLElement): void {
    if (optionDom.classList.contains('open')) {
      optionDom.classList.remove('open');
    } else {
      optionDom.classList.add('open');
    }
  }

  changeTheme(option: Theme) {
    // this.document.body.classList.remove(this.currentOption.id);
    // this.document.body.classList.add(option.id);
    this.themeService.toggleDarkTheme(this.currentOption.id, option.id);
    this.currentOption = option;
  }
}
