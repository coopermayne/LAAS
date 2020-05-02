import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PrismicService } from '../../prismic/prismic.service';


@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule], exports: [PageComponent], providers: [PrismicService]
})

export class PageModule {}
