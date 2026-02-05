import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'



})
export class AppComponent {
  title = 'my-app';

  // brr=[10,20,3,5,8,9,23,657,123,67];
  // arrData=[4,5,6];
  // arrData2=[
  //   {id:1,name:'a'},
  //   {id:2,name:'b'},
  //   {id:3,name:'c'},
  // ]


  // arrData3=[
  //   {id:1,
  //     name:'a',
  //     userData:[
  //       {userId:'1'}
  //     ]
  //   },
  //   {id:2,
  //     name:'b',
  //     userData:[
  //       {userId:'2'}
  //     ]
  //   },
  //   {id:3,
  //     name:'c',
  //     userData:[
  //       {userId:'3'}
  //     ]
  //   },
  // ];
//練習2
// userArr=[
//   {userName:'玩家A',
//     lev:10,
//     props:[
//       {
//         propsName:'蘑菇',
//       amount:5},
//       {propsName:'金幣',
//         amount:15
//       }]
//   },
//   {userName:'玩家B',
//     lev:15,
//     props:[
//       {
//         propsName:'龜殼',
//       amount:1},
//       {propsName:'砲彈',
//         amount:15
//       }]
//   }]


  // for(i=0,i<brrData,length,i++){
  //   console.log(i=5);
// testNum=1;
// role='管理員';


ngOnInit(): void {
// let arrData=[2,3,5];
//   for(let data of arrData){
//     console.log(data);
// for(let data of this.arrData3){
//   for(let user of data.userData){
//     console.log(user.userId);

//   }
// }
// for(let data of this.userArr){
//   for(let user of data.userName){
//     console.log(user.userName);

//   }
// }
// switch (this.role) {//if
//   case 'admin'://else if
//     console.log('管理員');
//     break;
//   case 'user'://else if
//     console.log('使用者');
//     break;
//   default://else
//     console.log('other');
//     break;
// }



  }
}


