import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IBusiness } from 'src/app/interfaces/IBusiness';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'business', 'valuation', 'active', 'action'];
  dataSource!: MatTableDataSource<IBusiness>;

  constructor(
    private businessService: BusinessService,
  ) {
    this.getBusiness();
  }

  getBusiness(){
    this.businessService.getBusiness().subscribe(
      (result: any) => {
        const business: Array<IBusiness> = result
        this.dataSource = new MatTableDataSource(business);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (error: any) => {
        console.error(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

