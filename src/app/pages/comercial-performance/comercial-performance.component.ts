import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Console } from 'console';
import { ComercialdesempenioService } from 'src/app/services/comercialdesempenio.service';



@Component({
	selector: 'app-comercial-performance',
	templateUrl: './comercial-performance.component.html',
	styleUrls: ['./comercial-performance.component.scss']
})
export class ComercialPerformanceComponent implements OnInit {
	
	filter : FormGroup;
	dataMultiSelect : any;
	loadingInform: boolean = false;
	loadingChart: boolean = false;
	loadingPizzaChart: boolean = false;

	consultantData: [];
	consultantComp: boolean = false;

	chartData: string[];
	chartComp: boolean = false;


	chartPizzaData: string[];
	chartPizzaComp: boolean = false;


	constructor(
		private _comercialService: ComercialdesempenioService,
		private _formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this._comercialService.getConsultant()
			.subscribe(res=>{
				this.dataMultiSelect = res.result
			})
		
			
		this.filter = this._formBuilder.group({
			from: [''],
			to: [''],
			consultant: []
		});
	}

	

	generateInform(){
		if(!this.getValid()) return;
		this.consultantComp = true;
		this.chartComp = false;
		this.chartPizzaComp = false;

		this._comercialService.generateInform(this.filter.value)
			.subscribe( result =>{
				this.loadingInform = true;
				this.consultantData = result.result;
				setTimeout(() => {
					this.loadingInform = false
				}, 1500);
			})
	}

	genChart() {

		if(!this.getValid()) return;
		this.consultantComp = false;
		this.chartComp = true;
		this.chartPizzaComp = false;

		this.chartData = [
			"data"
		];
		
	}

	genPizzaChart() {

		if(!this.getValid()) return;
		this.consultantComp = false;
		this.chartComp = false;
		this.chartPizzaComp = true;

		this.chartPizzaData = [
			"data"
		];
	}

	getValid() {
		let datesFrom = this.filter.get('from').value
		let datesTo = this.filter.get('to').value
		let consultants = this.filter.get('consultant').value

		if(datesFrom === '' || datesTo === '' || consultants === undefined) {
			this.filter.get('from')?.setErrors({'required': true})
			this.filter.get('to')?.setErrors({'required': true})
			this.filter.get('consultant')?.setErrors({'required': true})
			return false;
		}

		return true;
	}
}
