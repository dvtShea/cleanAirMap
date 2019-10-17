const fakeData = [
  {
    uid: 5724,
    aqi: "52",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 16:00:00",
      vtime: 1569855600
    },
    station: {
      name: "London",
      geo: [51.5073509, -0.1277583],
      url: "london"
    }
  },
  {
    uid: 3193,
    aqi: "56",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 17:00:00",
      vtime: 1569859200
    },
    station: {
      name: "London Marylebone Road, United Kingdom",
      geo: [51.52253, -0.154611],
      url: "united-kingdom/london-marylebone-road",
      country: "GB"
    }
  },
  {
    uid: 7945,
    aqi: "52",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 16:00:00",
      vtime: 1569855600
    },
    station: {
      name: "Camden - Euston Road, United Kingdom",
      geo: [51.527706619465, -0.12905320528252],
      url: "united-kingdom/camden-euston-road",
      country: "GB"
    }
  },
  {
    uid: 10874,
    aqi: "50",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 17:00:00",
      vtime: 1569859200
    },
    station: {
      name: "London Westminster, United Kingdom",
      geo: [51.49467, -0.131931],
      url: "united-kingdom/london-westminster",
      country: "GB"
    }
  },
  {
    uid: 3189,
    aqi: "46",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 17:00:00",
      vtime: 1569859200
    },
    station: {
      name: "London Bloomsbury, United Kingdom",
      geo: [51.52229, -0.125889],
      url: "united-kingdom/london-bloomsbury",
      country: "GB"
    }
  },
  {
    uid: 7949,
    aqi: "46",
    time: {
      tz: "+01:00",
      stime: "2019-09-27 07:00:00",
      vtime: 1569564000
    },
    station: {
      name: "City of London - Farringdon Street, United Kingdom",
      geo: [51.514525336231, -0.10451562633788],
      url: "united-kingdom/city-of-london-farringdon-street",
      country: "GB"
    }
  },
  {
    uid: 7946,
    aqi: "34",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 16:00:00",
      vtime: 1569855600
    },
    station: {
      name: "Hackney - Old Street, United Kingdom",
      geo: [51.526454, -0.08491],
      url: "united-kingdom/hackney-old-street",
      country: "GB"
    }
  },
  {
    uid: 3166,
    aqi: "25",
    time: {
      tz: "+01:00",
      stime: "2019-09-30 17:00:00",
      vtime: 1569859200
    },
    station: {
      name: "Camden Kerbside, United Kingdom",
      geo: [51.54421, -0.175269],
      url: "united-kingdom/camden-kerbside",
      country: "GB"
    }
  }
];

// export default async (search, signal) => {
//   return await new Promise(resolve => {
//     resolve(fakeData);
//   });
// };

module.exports = { fakeData };
