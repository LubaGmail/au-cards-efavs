// import { Subject } from 'rxjs';
import { Component, OnDestroy, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CardDataService } from '../card-data.service';
import { Card } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit, OnDestroy {
  cardSubscription: Subscription;
  data = '';
  error = '';
  counter = 0;
  cardsClosed = false;

  // Array to hold one set of cards - refreshed periodically
  cardModelArr: Card[] = [];
  // Array returned by the observable
  cards = this.cardDataService.cards;
  entries = [];
  emptyRows: Array<number> = [];

  maxRows = 8;
  zeroCountArr = [];
  seeMore: Boolean = false;
  showDarffav: Boolean = true;

  constructor(
    private cardDataService: CardDataService,
  ) {}

  ngOnInit() {
    this.loadCardData();

    for (let i = 1; i < this.maxRows; i++) {
      this.zeroCountArr.push(i);
    }
  }

  // Load raw JSON array into an array of CardModel objects
  //
  loadCardData() {
    this.cardModelArr = [];

    this.cards.forEach(card => {
      if (card) {
         let c = new Card(
            card.id,
            card.desc,
            card.usrAccess,
            card.dbCardType,
            card.title,

            card.cardClass,
            card.headerClass,
            card.footerClass,
            card.buttonClass,
            card.totalSummaryCnt,

            card.summary
          )

          this.updateCounts(c);
          this.cardModelArr.push(c);
      }

    });

  }

  // Update a card object with number of rows in the summary data
  //
  updateCounts(card) {
    const summaryObj = card.summary[0];
    if (summaryObj) {
      card.rowCount = Object.keys(summaryObj).length;
    } else {
      card.rowCount = 0;
    }
  }

  onSeeMore() {
    this.showDarffav = false;
    this.seeMore = true;
  }

  onSeeLess() {
    this.showDarffav = true;
    this.seeMore = false;
  }

  mergeCardData(dbCardType) {
  }

  // Retrieve a single card from the dB by its natural key.
  //
  getOneCard(dbCardType) {
  }

  // The only way I thought how to tame Bootstrap responsive card behavior.
  // Hope someone can improve on it.
  //
  getEntries(rowCount, summaryArr) {
    this.entries = [];
    this.entries = Object.entries(summaryArr);
    this.emptyRows = [];
    const needed = this.maxRows - rowCount;

    // if returned data contains, let's say, 3 rows - I need to add 4 to maintain card height
    for (let i = 1; i < needed; i++) {
      this.emptyRows.push(i);
    }

    const keyValArr = [];

    this.entries.forEach ( (entry) => {
        const entryStr = entry + '';      // stringify
        const kv = entryStr.split(',');
        keyValArr.push(kv);
    });

    return keyValArr;
  }

  // This method is called by the grid child.
  //
  changeIt(ev) {
    if ( ev.startsWith('open') ) {
      this.cardsClosed = false;
    }
    if ( ev.startsWith('close') ) {
      this.cardsClosed = true;
    }
  }

  ngOnDestroy() {
    // Future use
    // this.cardSubscription.unsubscribe();
  }
}
