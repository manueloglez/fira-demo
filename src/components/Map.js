import React, {useEffect} from 'react'
import L from 'leaflet' 
import 'leaflet.heat'
import nearest from 'nearest-date'

const Map = () => {
    const calculateStats = (map, date) => {
        fetch('./ran_yaqui2.json')
        .then(r => r.text())
        .then(text => {
            const data = JSON.parse(text)
            const addressPoints = data.map(element => {
                try{
                    const centroid = JSON.parse(element.centroid).coordinates
                    const stats = JSON.parse(element.stats).C0
                    const dates = stats.map(e => {
                        return new Date(e.date)
                    })
                    const target = new Date(date)
                    const index = nearest(dates, target)
                    return [centroid[1], centroid[0], stats[index].basicStats.mean]
                }
                catch {
                    return []
                }
            })
            let points = addressPoints
              ? addressPoints.map((p) => {
                  if (p[0]) return [p[0], p[1], p[2]];
                  else return null
                })
              : [];
            points = points.filter(p => p)
            L.heatLayer(points).addTo(map);
        })
    } 

    useEffect(() => {
      var map = L.map("map").setView([27.2098, -109.9328], 12);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      calculateStats(map, '2021-03-26')

    }, []);
  
    return <div id="map" style={{ height: "100vh" }}></div>;
  }

export default Map