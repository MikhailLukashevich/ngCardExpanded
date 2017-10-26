import { Component, ViewChild, ElementRef } from '@angular/core';

let cards: any = [
  {
    name: 'General Settings',
    details: {
      desc: 'General Settings description'
    }
  },
  {
    name: 'Organizations',
    details: {
      desc: 'Organizations description'
    }
  },
  {
    name: 'Regions',
    details: {
      desc: 'Regions description'
    }
  },
  {
    name: 'Surveys',
    details: {
      desc: 'Surveys description'
    }
  },
  {
    name: 'Keywords',
    details: {
      desc: 'Keywords description'
    }
  },
  {
    name: 'Languages',
    details: {
      desc: 'Languages description'
    }
  },
  {
    name: 'Counters',
    details: {
      desc: 'Counters description'
    }
  },
  {
    name: 'Time Zones',
    details: {
      desc: 'Time Zones description'
    }
  },
  {
    name: 'Blue Groups',
    details: {
      desc: 'Blue Groups description'
    }
  },
  {
    name: 'Resource Types',
    details: {
      desc: 'Resource Types description'
    }
  },
  {
    name: 'Notifications',
    details: {
      desc: 'Notifications description'
    }
  },
  {
    name: 'Virtual Platforms',
    details: {
      desc: 'Virtual Platforms description'
    }
  },
  {
    name: 'Rcodes',
    details: {
      desc: 'Rcodes description'
    }
  },
  {
    name: 'Approval Rules',
    details: {
      desc: 'Approval Rules description'
    }
  },
  {
    name: 'Delivery Portfolio',
    details: {
      desc: 'Delivery Portfolio description'
    }
  },
  {
    name: 'Invitation Templates',
    details: {
      desc: 'Invitation Templates description'
    }
  }
];

let expandedCard: any = {
  expanded: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('wrapper') el: ElementRef;
  FactoryList = cards;
  previousExpandedIndex = Infinity;

  clickFactory(e){

    let target = e.currentTarget.className.includes('card')  ? e.currentTarget : null;

    if (!target) return;

    let offsetTop = target.offsetTop,
        targetId = target.id,
        cardsInDOM = this.el.nativeElement.children,
        expandedIndex = this.FactoryList.findIndex(card => card.expanded),
        lastElementIndex;

    this.FactoryList.every((card, index, array) => {
        if (cardsInDOM[index].offsetTop > offsetTop) {
          lastElementIndex = index > this.previousExpandedIndex ? index - 1 : index;
          return false
        } else {
          lastElementIndex = array.length;
          return true
        }
    });

    if (expandedIndex > -1) this.deleteExpandedCard(expandedIndex);

    let selectedCard = this.FactoryList.find(card => card.name === targetId);
    selectedCard.open = true;
    this.FactoryList.splice(lastElementIndex, 0, Object.assign(expandedCard, selectedCard.details));
    this.previousExpandedIndex = lastElementIndex;
    }

    public deleteExpandedCard(index) {
      let expandedIndex = index || this.FactoryList.findIndex(card => card.expanded);
      this.FactoryList.splice(expandedIndex, 1);
      this.FactoryList.forEach((card) => card.open = false);
      this.previousExpandedIndex = Infinity;
    }
  }
