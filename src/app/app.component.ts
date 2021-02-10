import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-pop';

    columnDefs = [
        { field: 'make', sortable: true, filter: true },
        { field: 'model', sortable: false, filter: true },
        
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica'},
        { make: 'Ford', model: 'Mondeo'},
        { make: 'Porsche', model: 'Boxter'}
    ];
}
