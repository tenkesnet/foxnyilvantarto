import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Device } from './../model/device.model';
import { DeviceService } from './../services/device.service';
import hu from '@angular/common/locales/hu';
import { AuthguardService } from '../services/authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  title = 'frontend';
  role: string

  devices?: Device[];
  displayedColumns: string[] = ['name', 'serialNumber', 'price', 'purchaseDate', 'location', 'rentalDate'];

  dataSource = new MatTableDataSource<Device>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private deviceService: DeviceService,
    private route: Router,
    private authguardService: AuthguardService) {
    this.role = this.authguardService.getRole()
    if (this.role == 'admin') {
      this.displayedColumns.push('edit')
    }
  }

  ngOnInit(): void {
    registerLocaleData(hu);

    this.deviceService.getDevices().subscribe(data => {
      this.devices = data;
      this.dataSource.data = data;
      console.log(this.devices);
    }
    );

  }

  ngAfterViewInit() {
    this.deviceService.getDevices().subscribe(data => {
      this.devices = data;
      this.dataSource.data = data;
      console.log(this.devices);
    });
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length == 0) this.route.navigate(['/home']);
    console.log("FilterValue: " + filterValue);
    this.deviceService.searchDevices(filterValue).subscribe(data => {
      this.dataSource.data = data;
      console.log(data);
    });
  }
  editDevice(id: number) {
    console.log("Id: " + id);
    this.route.navigate(['/editdevice', id]);
  }
}
