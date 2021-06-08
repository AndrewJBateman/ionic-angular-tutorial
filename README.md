# :zap: Ionic Angular Tutorial

* App to show a map view of user location using [Leaflet](https://leafletjs.com/) & the [Ionic 5 framework](https://ionicframework.com/docs).
* Tutorial code from [Technbuzz](https://www.youtube.com/channel/UCrG1x1CG8Jpjd2IZhrw9PsA)
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-tutorial?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-tutorial?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-tutorial?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-tutorial?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Tutorial](#zap-ionic-angular-tutorial)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration - By Samiullah Khan @Techbuzz](#clap-inspiration---by-samiullah-khan-techbuzz)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [Leaflet](https://leafletjs.com/) has lots of options for map control & user interaction
* [Leaflet Marker](https://leafletjs.com/reference-1.7.1.html#marker) used to display clickable/draggable icons on the map

## :camera: Screenshots

![Ionic page](./img/map.png)
![Ionic page](./img/markers.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v12](https://angular.io/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [Leaflet v1](https://leafletjs.com/) free open-source JavaScript library for mobile-friendly interactive maps
* [leaflet.bouncemarker v1](https://github.com/maximeh/leaflet.bouncemarker) to make a Marker bounce when you add it on a map

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

* Basic setup to show Big Ben on a map

```typescript
ngOnInit() {
    this.map = L.map('map', {
      // center on the coordinates for Big Ben
      center: [51.50148, -0.12351],
      zoom: 15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0)

  }
```

## :cool: Features

* Leaflet map is free and does not require an API key.
* [Leaflet Marker bounce](https://github.com/maximeh/leaflet.bouncemarker) is definitely cool

## :clipboard: Status & To-do list

* Status: Working. Marker icons are commented out due to errors.
* To-do: Fix marker icon issue.

## :clap: Inspiration - By Samiullah Khan @Techbuzz

* [Youtube: Add leaflet in Ionic Angular](https://www.youtube.com/watch?v=L-izDYEeJmA)]
* [Youtube: Leaflet markers, Popups and Circle](https://www.youtube.com/watch?v=gBSevKwI3GQ)
* [Article: Add leaflet to Ionic Angular [Screencast]](https://www.technbuzz.com/2020/06/07/add-leaflet-to-ionic-angular/)
* [Article: Markers, Popups & Circle](https://www.technbuzz.com/2020/06/28/add-leaflet-markers-popup-and-circle/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
