import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    // templateUrl: './success-alert.component.html',
    template: `

<div class="container">

  <div class="row">

    <div class="col-xs-4 col-xs-offset-4 ">
      <h1>Success Alert</h1>
    </div>

  </div>
</div>
    
    `,
    styles: ['h1{color:green;border-style: dashed}']
})
export class SuccessAlertComponent{
    
}