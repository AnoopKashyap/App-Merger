import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	passData='';

	serviceCalled(textDataShared){
		this.passData = textDataShared;
	}
}
