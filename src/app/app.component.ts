import { Component, ViewChild, ElementRef } from '@angular/core';

let cards: any = [
  {
    name: 'General Settings',
    url: '/general-settings',
    desc: 'Manage the platform',
    icon: 'glyphicon glyphicon-cog',
    details: {
      desc: 'General Settings description'
    }
  },
  {
    name: 'Organizations',
    url: '#/organizations',
    desc: 'Create and manage platforms',
    icon: 'glyphicon glyphicon-home',
    details: {
      desc: 'Organizations description'
    }
  },
  {
    name: 'Regions',
    url: '#/regions',
    desc: 'Create and manage regions',
    icon: 'glyphicon glyphicon-globe',
    details: {
      desc: 'Regions description'
    }
  },
  {
    name: 'Surveys',
    url: '#/surveys',
    desc: 'Create and manage surveys',
    icon: 'glyphicon glyphicon-edit',
    details: {
      desc: 'Surveys description'
    }
  },
  {
    name: 'Keywords',
    url: '#/keywords',
    desc: 'Create and manage keywords',
    icon: 'glyphicon glyphicon-tags',
    details: {
      desc: 'Keywords description'
    }
  },
  {
    name: 'Languages',
    url: '#/languages',
    desc: 'Create and manage languages',
    icon: 'glyphicon glyphicon-font',
    details: {
      desc: 'Languages description'
    }
  },
  {
    name: 'Counters',
    url: '#/counters',
    desc: 'Create and manage counters',
    icon: 'glyphicon glyphicon-scale',
    details: {
      desc: 'Counters description'
    }
  },
  {
    name: 'Time Zones',
    url: '#/time_zones',
    desc: 'Create and manage time zones',
    icon: 'glyphicon glyphicon-hourglass',
    details: {
      desc: 'Time Zones description'
    }
  },
  {
    name: 'Blue Groups',
    url: '#/blue_groups',
    desc: 'Create and manage blue groups',
    icon: 'glyphicon glyphicon-user',
    details: {
      desc: 'Blue Groups description'
    }
  },
  {
    name: 'Resource Types',
    url: '#/resource_types',
    desc: 'Create and manage resource types',
    icon: 'glyphicon glyphicon-flag',
    details: {
      desc: 'Resource Types description'
    }
  },
  {
    name: 'Notifications',
    url: '#/notifications',
    desc: 'Create and manage notifications',
    icon: 'glyphicon glyphicon-envelope',
    details: {
      desc: 'Notifications description'
    }
  },
  {
    name: 'Virtual Platforms',
    url: '#/virtual_platforms',
    desc: 'Create and manage virtual platforms',
    icon: 'glyphicon glyphicon-dashboard',
    details: {
      desc: 'Virtual Platforms description'
    }
  },
  {
    name: 'Rcodes',
    url: '#/rcodes',
    desc: 'Create and manage rcodes',
    icon: 'glyphicon glyphicon-barcode',
    details: {
      desc: 'Rcodes description'
    }
  },
  {
    name: 'Approval Rules',
    url: '#/approval_rules',
    desc: 'Create and manage approval rules',
    icon: 'glyphicon glyphicon-ok-circle',
    details: {
      desc: 'Approval Rules description'
    }
  },
  {
    name: 'Delivery Portfolio',
    url: '#/delivery_portfolio',
    desc: 'Create and manage delivery portfolio',
    icon: 'glyphicon glyphicon-plane',
    details: {
      desc: 'Delivery Portfolio description'
    }
  },
  {
    name: 'Invitation Templates',
    url: '#/invitation_templates',
    desc: 'Create and manage invitation templates',
    icon: 'glyphicon glyphicon-list-alt',
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
