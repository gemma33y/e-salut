import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudyApp';

  constructor(){
    var today_tmp = Date();
    var today = new Date(today_tmp);
    let noti_day = new Date('May 1, 2022 00:14:00');

    let hoursAndMinutes_today = today.getHours() + ':' + today.getMinutes();
    let hoursAndMinutes_noti = noti_day.getHours() + ':' + noti_day.getMinutes();
    
    console.log(hoursAndMinutes_noti); // 👉️ 8:33
    console.log(hoursAndMinutes_today); // Hora actual

    function notifyMe() {
      const notification = new Notification("Recordatori de medicines!",{
        body: "No t'oblidis de prendre les medicines pendents"
      });
  
      notification.onclick = (e) => {
        window.location.href = "http://localhost:4200/medicines";
      }
    }
    

    // Let's check whether notification permissions have already been granted
    if (Notification.permission === "granted" && hoursAndMinutes_noti === hoursAndMinutes_today) {
      notifyMe();
      console.log("okey");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          notifyMe();
        }
      });
    }
  }
}