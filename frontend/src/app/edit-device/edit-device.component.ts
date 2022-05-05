import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../model/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {
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
    this.form = this.fb.group({
      id: 0,
      name: '',
      serialNumber: [''],
      price: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      purchaseDate: ['', [Validators.required]],
      location: '',
      rentalDate: ['', [Validators.required]]
    });

    this.deviceService.getDevice(this.id).subscribe(data => {
      this.device = data;
      this.device.id = this.id
      this.form.patchValue(this.device);
      console.log(data);
    });
  }

  submitForm() {
    this.device = this.form.value;
    this.device.rentalDate = new Date(this.form.get("rentalDate")?.value);
    this.device.purchaseDate = new Date(this.form.get("purchaseDate")?.value);
    this.device.price = Number(this.form.get("price")?.value);
    this.device.id = Number(this.device.id)
    console.log("Submit:", this.device);
    this.deviceService.updateDevice(this.device).subscribe(console.log);
    this.router.navigate(["/"])
  }
}
