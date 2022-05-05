import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../model/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent implements OnInit {

  form: FormGroup;
  id: number;
  device: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.device = new Device();
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(new Date(), 'YYYY-MM-dd')
    this.form = this.fb.group({
      id: '',
      name: '',
      serialNumber: [''],
      price: [0, [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      purchaseDate: [formattedDate, [Validators.required]],
      location: '',
      rentalDate: ['', [Validators.required]]
    });
  }

  submitForm() {
    this.device = this.form.value;
    this.device.rentalDate = new Date(this.form.get("rentalDate")?.value);
    this.device.purchaseDate = new Date(this.form.get("purchaseDate")?.value);
    this.device.price = Number(this.form.get("price")?.value);
    this.device.id = 0;
    console.log("Submit:", this.device);
    this.deviceService.updateDevice(this.device).subscribe(console.log);
    this.router.navigate(["/"])
  }
  date(event: Event) {
    var convertDate = new Date((event.target as HTMLInputElement).value).toISOString().substring(0, 10);
    this.form.get('purchaseDate')?.setValue(convertDate, {
      onlyself: true,
    });
  }
}
