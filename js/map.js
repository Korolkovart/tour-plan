ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
          center: [12.93, 100.88],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

  // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject({
          // Описание геометрии.
          geometry: {
              type: "Point",
              coordinates: [12.93, 100.88]
          },
          // Свойства.
          properties: {
              // Контент метки.
              iconContent: 'Hilton',
              hintContent: 'Hilton Pattaya'
          }
      }, {
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: 'islands#blackStretchyIcon',
          // Метку можно перемещать.
          draggable: true
      })
    }