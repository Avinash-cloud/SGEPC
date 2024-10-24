class VectorMap {
  initWorldMapMarker() {
    new jsVectorMap({
      map: "world",
      selector: "#world-map-markers",
      zoomOnScroll: !1,
      zoomButtons: !0,
      markersSelectable: !0,
      markers: [
        { name: "Greenland", coords: [72, -42] },
        { name: "Canada", coords: [56.1304, -106.3468] },
        { name: "Brazil", coords: [-14.235, -51.9253] },
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "Russia", coords: [61, 105] },
        { name: "China", coords: [35.8617, 104.1954] },
        { name: "United States", coords: [37.0902, -95.7129] },
        { name: "Norway", coords: [60.472024, 8.468946] },
        { name: "Ukraine", coords: [48.379433, 31.16558] },
      ],
      markerStyle: {
        initial: { fill: "#5B8DEC" },
        selected: { fill: "#ef5f5f" },
      },
      labels: { markers: { render: (a) => a.name } },
    });
  }
  initCanadaVectorMap() {
    new jsVectorMap({
      map: "canada",
      selector: "#canada-vector-map",
      zoomOnScroll: !1,
      regionStyle: { initial: { fill: "#5B8DEC" } },
    });
  }
  initRussiaVectorMap() {
    new jsVectorMap({
      map: "russia",
      selector: "#russia-vector-map",
      zoomOnScroll: !1,
      regionStyle: { initial: { fill: "#5d7186" } },
    });
  }
  initItalyVectorMap() {
    new jsVectorMap({
      map: "italy",
      selector: "#italy-vector-map",
      zoomOnScroll: !1,
      regionStyle: { initial: { fill: "#37a593" } },
    });
  }
  initIraqVectorMap() {
    new jsVectorMap({
      map: "iraq",
      selector: "#iraq-vector-map",
      zoomOnScroll: !1,
      regionStyle: { initial: { fill: "#20c8e9" } },
    });
  }
  initSpainVectorMap() {
    new jsVectorMap({
      map: "spain",
      selector: "#spain-vector-map",
      zoomOnScroll: !1,
      regionStyle: { initial: { fill: "#ffe381" } },
    });
  }
  initUsaVectorMap() {
    new jsVectorMap({
      map: "us_merc_en",
      selector: "#usa-vector-map",
      regionStyle: { initial: { fill: "#ffe381" } },
    });
  }
  init() {
    this.initWorldMapMarker(),
      this.initCanadaVectorMap(),
      this.initRussiaVectorMap(),
      this.initItalyVectorMap(),
      this.initIraqVectorMap(),
      this.initSpainVectorMap(),
      this.initUsaVectorMap();
  }
}
document.addEventListener("DOMContentLoaded", function (a) {
  new VectorMap().init();
});
