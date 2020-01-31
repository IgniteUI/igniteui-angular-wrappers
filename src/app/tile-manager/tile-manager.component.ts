import { Component, OnInit } from '@angular/core';
import { candidates } from '../shared/candidates';

@Component({
  selector: 'app-tile-manager',
  templateUrl: './tile-manager.component.html',
  styleUrls: ['./tile-manager.component.css']
})
export class TileManagerComponent {
	public options: any;

	constructor() {
		this.options={
			dataSource: candidates.getData(),
			marginLeft: 10,
			marginTop: 10,
			rightPanelTilesWidth: 200,
			rightPanelTilesHeight: 156,
			maximizedState: '<h3>${name}</h3><img src="${picture}" title="${name}" alt="error" /><p class="text">${text}</p><div style="clear: both"><span class="color">Skills:</span></div><ul class="skills"></ul><div class="linkedIn"><span class="color">LinkedIn:</span> <a href="${linkedin}" target="_blank">http://www.linkedin.com/profile</a></div>',
			minimizedState:'<h4>${name}</h4><img src="${picture}" class="minimized" title="${name}" alt="error" />'
		};
	}
}
