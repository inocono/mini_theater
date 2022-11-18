let map
let geocoder

const marker = []
var theaterMarker = []
var theaterWindow = []
//const theaterData = gon.theaters; //これ書くと地図が表示されない //コントローラで定義したインスタンス変数を変数に代入

// Initialize and add the map
function initMap() {
  // The location of tokyo
  const myLatLng = { lat: 35.6811673, lng: 139.7670516 };

  // The map, centered at tokyo
  const map = new google.maps.Map(document.getElementById("map"), { //mapというidを取得して地図を表示
    zoom: 10,
    center: myLatLng, // 地図の中心を指定
    mapTypeId: 'roadmap'
  });

  // 初期位置にマーカーを立てる
  const marker = new google.maps.Marker({ // マーカーの追加
    position: myLatLng, // myLatLngにマーカーを追加
    map: map, // マーカーを立てる地図の指定
  });

  if (gon.theaters) {
    // for 繰り返し処理
    // 変数iを0と定義し、gonで定義したtheaters分繰り返し加える処理を行う
    for (let i = 0; i < theaterData.length; i++){
      // theaters[i]で変数iのユーザーを取得
      theaterMarker[i] = new google.maps.Marker({
        map: map,
        position: {
          // DBに保存してある、緯度・経度を呼び出す
          lat: theaters[i].latitude,
          lng: theaters[i].longitude
        }
      });
    }
    // 変数iを変数idに代入
    let id = theaterData[i]['id']

    // infoWindowで吹き出しを出す
    theaterWindow[i] = new google.maps.InfoWindow({
      // contentで中身を指定
      // 文字にリンクを貼り付けた形で表示
      content: `<a href='#'>${theaters[i].name}</a>`
    })

    // markerがクリックされたら、吹き出しを出す
    theaterMarker[i].addListener("click", function(){
      // infoWindowを表示
      theaterWindow[i].open(map, theaterMarker[i]);
    });
  }
}

window.initMap = initMap;
