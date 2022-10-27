/**
 * Component that renders the lazy loaded sections in the page
 * Last loaded section is obtained through LazyLoadService
 * Initially header component is loaded and once it is rendered, subsequent components are loaded.
 * If lazy loading to be done with routing, remove all code in ngOnInit() and ngDoCheck()
 * and remove all viewChild
 */

import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoadService } from 'src/app/shared/services/lazy-load.service';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

  @ViewChild('headerContainer', { read: ViewContainerRef })
  headerContainer!: ViewContainerRef;
  @ViewChild('homeContainer', { read: ViewContainerRef })
  homeContainer!: ViewContainerRef;
  @ViewChild('offerContainer', { read: ViewContainerRef })
  offerContainer!: ViewContainerRef;
  @ViewChild('contentContainer', { read: ViewContainerRef })
  contentContainer!: ViewContainerRef;
  @ViewChild('mediaContainer', { read: ViewContainerRef })
  mediaContainer!: ViewContainerRef;
  @ViewChild('supportContainer', { read: ViewContainerRef })
  supportContainer!: ViewContainerRef;
  @ViewChild('testimonialContainer', { read: ViewContainerRef })
  testimonialContainer!: ViewContainerRef;
  @ViewChild('footerContainer', { read: ViewContainerRef })
  footerContainer!: ViewContainerRef;

  constructor(public LazyLoadService: LazyLoadService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    import('../../../components/header/header.component').then((comp) => {
      const component = comp['HeaderComponent'];
      this.headerContainer.createComponent(component);
    });
    this.LazyLoadService.setCurrentSegment("header");
  }
  ngDoCheck() {
    let lastLoadedSeg = this.LazyLoadService.getCurrentSegment();
    switch (lastLoadedSeg) {
      case 'header': import('../../../../modules/home/home/home.component').then((comp) => {
        const component = comp['HomeComponent'];
        this.homeContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('home');
        break;
      case 'home': import('../../../../modules/offer/offer/offer.component').then((comp) => {
        const component = comp['OfferComponent'];
        this.offerContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('offer');
        break;
      case 'offer': import('../../../../modules/content/content/content.component').then((comp) => {
        const component = comp['ContentComponent'];
        this.contentContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('content');
        break;
      case 'content': import('../../../../modules//media/media/media.component').then((comp) => {
        const component = comp['MediaComponent'];
        this.mediaContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('media');
        break;
      case 'media': import('../../../../modules/support/support/support.component').then((comp) => {
        const component = comp['SupportComponent'];
        this.supportContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('testimonials');
        break;
      case 'testimonials': import('../../../../modules/testimonials/testimonials/testimonials.component').then((comp) => {
        const component = comp['TestimonialsComponent'];
        this.testimonialContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('footer');
        break;
      case 'footer': import('../../../components/footer/footer.component').then((comp) => {
        const component = comp['FooterComponent'];
        this.footerContainer.createComponent(component);
      });
        this.LazyLoadService.setCurrentSegment('');
        break;
    }
  }

}
