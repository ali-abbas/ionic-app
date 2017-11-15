import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items:any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController, private redditService:RedditService) {
    this.getDefaults();
  }

  getDefaults(){
    
        if(localStorage.getItem('category')!=null){
          this.category = localStorage.getItem('category');
        }else{
          this.category='sports';
        }
    
    
        if(localStorage.getItem('limit')!=null){
          this.limit = localStorage.getItem('limit');
        }else{
          this.limit = 10;
        }
        
      }

  // life cycle hook,
  // this runs, whenever the component is rendered
  ngOnInit(){
    this.getPosts(this.category,this.limit);
     //console.log("hey");
  }

  getPosts(category,limit){
    this.redditService.getPost(category,limit).subscribe(response => {
       this.items = response.data.children;
    });
  }

  // switch pages
  viewItem(item){
    this.navCtrl.push(DetailsPage,{
      item : item
    });
  }

  changeCategory(){
    this.getPosts(this.category,this.limit);
  }



}