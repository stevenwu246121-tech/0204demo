import { HttpClientService } from './../../@service/http-client.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-api-demo2',
  imports: [],
  templateUrl: './api-demo2.component.html',
  styleUrl: './api-demo2.component.scss'
})
export class ApiDemo2Component {
  constructor(private http: HttpClientService){

  }




  ngOnInit(): void {
    // console.log('開始執行api');
    // this.http.getApi('https://api.freeapi.app/api/v1/public/randomusers').subscribe((res)=>
    //     console.log(res));
    // console.log('api回來了');
    // })
    // console.log('api繼續跑');
    //在呼叫post api之前先把要傳遞的資料打包
    let postData={
      userName:'',
      userAge:18
    }
    //呼叫post的方法 第一個值
    this.http
    .postApi('https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post',postData)
    .subscribe((res:any)=>{
      console.log(res);
      })


  }
}
