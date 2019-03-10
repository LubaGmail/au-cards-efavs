import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  cards = [
    {
      id: 2,
      desc: 'Processing Orders(PMB)',
      usrAccess: 'PMB',
      dbCardType: 'PROCESSORDPMB',
      title: 'Processing Orders',
      cardClass: 'card au-card shadow p-3 mb-5 bg-white rounded',
      headerClass: 'card-header au-process-header text-light',
      footerClass: 'card-footer text-center text-white au-footer au-process-footer',
      buttonClass: 'badge badge-pill text-white',
      totalSummaryCnt: 89,
      summary: [{
        Submitted: 20,
        Pending: 23,
        Hold: 4,
        Approved: 42
      }]
    },
    {
      id: 4,
      desc: 'Shipped/Denied Orders',
      usrAccess: 'Site,PMB,Repository',
      dbCardType: 'SHIPORD',
      title: 'Shipped/Denied Orders (last 30 days)',
      cardClass: 'card au-card shadow p-3 mb-5 bg-white rounded',
      headerClass: 'card-header au-shipped-header text-light',
      footerClass: 'card-footer text-center text-white au-footer au-shipped-footer',
      buttonClass: 'badge badge-pill text-white',
      totalSummaryCnt: 8352,
      summary: [{
        Shipped: 8325,
        Denied: 27
      }]
    }
    ,
    {
      id: 5,
      desc: 'Local Destructions',
      usrAccess: 'PMB',
      dbCardType: 'LOCREQPMB',
      title: 'eDARF Local Destruction Requests',
      cardClass: 'card au-card shadow p-d mb-5 bg-white rounded',
      headerClass: 'card-header au-locreq-header text-light',
      footerClass: 'card-footer text-center text-white au-footer au-locreq-footer',
      buttonClass: 'badge badge-pill bg-success text-white',
      totalSummaryCnt: 0,
      summary: [{
       
      }]
    }
    ,
    {
      id: 7,
      desc: 'Transfers',
      usrAccess: 'PMB',
      dbCardType: 'TRAREQPMB',
      title: 'eDARF Transfer Requests',
      cardClass: 'card au-card shadow p-d mb-5 bg-white rounded',
      headerClass: 'card-header text-center au-transfer-header text-white',
      footerClass: 'card-footer text-center au-transfer-header text-white au-footer',
      buttonClass: 'badge badge-pill bg-success text-white',
      totalSummaryCnt: 0,
      summary: [{
       
      }]
    }
    ,
    {
      id: 9,
      desc: 'eDARF Favorites',
      usrAccess: 'Site,PMB',
      dbCardType: 'DARFFAV',
      title: 'eDARF Favorites',
      cardClass: 'card au-card shadow p-d mb-5 bg-white rounded',
      headerClass: 'card-header text-center au-fav-header text-white',
      footerClass: 'card-footer text-center au-fav-footer text-white au-footer',
      buttonClass: 'badge badge-pill bg-success text-white',
      totalSummaryCnt: 0,
      summary: [{
       
      }]
    }

  ];

  data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
  };

}

