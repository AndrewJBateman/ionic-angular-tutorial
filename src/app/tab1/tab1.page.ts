import { Component } from "@angular/core";

import * as L from "Leaflet";
import { Icon } from "leaflet";
import "leaflet.BounceMarker";

// import 'leaflet/dist/images/marker-shadow.png';
// import 'leaflet/dist/images/marker-icon.png';
// import 'leaflet/dist/images/marker-icon-2x.png';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  map: L.Map;

  ngOnInit() {
    this.map = L.map("map", {
      // center on the coordinates for Big Ben
      center: [51.50148, -0.12351],
      zoom: 15,
      renderer: L.canvas(),
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this.addHomeMarker();

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  addHomeMarker() {
    const homeMarker = L.marker({ lat: 51.50148, lng: -0.12351 });
    // homeMarker.addTo(this.map);
    homeMarker.bindPopup("This is the Home marker", {
      closeButton: true,
    });

    L.circle(
      { lat: 51.50148, lng: -0.12351 },
      {
        color: "steelblue",
        radius: 500,
        fillColor: "steelblue",
        opacity: 0.5,
      }
    ).addTo(this.map);
  }

  addMarker() {
    const mapIcon = L.icon({
      iconUrl: "assets/marker-icon.png",
      shadowUrl: "assets/marker-shadow.png",
      popupAnchor: [13, 0],
    });

    L.marker([51.50148, -0.12351], {
      icon: mapIcon,
      draggable: true,
      //@ts-ignore
      bounceOnAdd: true,
    }).addTo(this.map);
  }
}
