/**
 * Service that manages the last loaded component
 * 'currentSegment' holds the name of last loaded component
 * setCurrentSegment updates 'currentSegment'
 * getCurrentSegment returns the name of last loaded component
 */

 import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root'
 })
 export class LazyLoadService {
   currentSegment: string = "";
   constructor() {
     this.currentSegment = "";
   }
   setCurrentSegment(name: string) {
     this.currentSegment = name;
   }
   getCurrentSegment() {
     return this.currentSegment;
   }
 }
 