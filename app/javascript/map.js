const key = gon.api_key// 環境変数


window.initMap = function() {
  
  
  // Geolocation APIに対応している
  if (navigator.geolocation) {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(sucsess,error);
    // 取得成功した場合
    function sucsess(position) {
      // 緯度・経度を変数に格納　
      // var lat = position.coords.latitude;
      // var lng = position.coords.longitude;
      // トライ用 東京駅位置：35.6809591 139.7673068
      var lat = 35.6809591;
      var lng = 139.7673068;
      var myPosition = new google.maps.LatLng(lat, lng);
      // マップオプションを変数に格納
      var Options = {
        zoom : 17,        
        center : myPosition  
      };
      // マップオブジェクト作成
      var map = new google.maps.Map(document.getElementById("map"), Options);
      //　マップにマーカーを表示する
      var marker = new google.maps.Marker({
        map : map,  
        position : myPosition  
      });
      $.ajax({
        type : "get",
        //ぐるなびAPI取得　条件（wifi有り、周囲2キロ）
        // url:"https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=b34e3bf5085b2bd81c2a80daf89fb8d&wifi=1&latitude="+lat+"=&longitude="+lng+"&range=4",
        // url: "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST20000&category_l=RSFST18000",
        
        // const :apikey = "+key+",
            
            var :urls = [
              // カフェ
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST18000",
              // 居酒屋
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST09000",
              // 日本料理・郷土料理
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST02000",
              // すし・魚料理・シーフード
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST03000",
              // 鍋
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST04000",
              // 焼肉
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST05000",
              // 焼き鳥・肉料理・串料理
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST06000",
              // 和食
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST01000",
              // お好み焼き・粉物
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST07000",
              // ラーメン・麺料理
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST08000",
              // 中華
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST14000",
              // イタリア・フレンチ
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST11000",
              // 洋食
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST13000",
              // カレー
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST16000",
              // アジア・エスニック料理
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST15000",
              // オーガニック・創作料理
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST17000",
              // ダイニングバー
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST10000",
              // ファミレス
              "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST20000",
            ],
            var :url = urls[Math.floor(Math.random() * urls.length)],
            
            url: url,
            
            dataType : 'json',
            success: function(json){
              let num_shop = json.rest.length;
              console.log(num_shop);
              

              const result = document.getElementById("title")
              
              // const url = urls[Math.floor(Math.random() * urls.length)]
              var urls = url

              switch(urls){
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST18000":
                  result.innerHTML = "Today's カフェ！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST09000":
                  result.innerHTML = "Today's 居酒屋！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST02000":
                  result.innerHTML = "Today's 日本料理・郷土料理！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST03000":
                  result.innerHTML = "Today's 寿司・魚料理・シーフード！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST04000":
                  result.innerHTML = "Today's 鍋！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST05000":
                  result.innerHTML = "Today's 焼肉！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST06000":
                  result.innerHTML = "Today's 焼き鳥・肉料理・串料理！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST01000":
                  result.innerHTML = "Today's 和食！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST07000":
                  result.innerHTML = "Today's お好み焼き・粉物！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST08000":
                  result.innerHTML = "Today's ラーメン・麺料理！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST14000":
                  result.innerHTML = "Today's 中華！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST11000":
                  result.innerHTML = "Today's フレンチ・イタリアン！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST13000":
                  result.innerHTML = "Today's 洋食！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST16000":
                  result.innerHTML = "Today's カレー！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST15000":
                  result.innerHTML = "Today's アジア・エスニック料理！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST17000":
                  result.innerHTML = "Today's オーガニック・創作料理！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST0000":
                  result.innerHTML = "Today's ダイニングバー！";
                  break;
                case "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid="+key+"&latitude=35.6809591&longitude=139.7673068&range=4&category_l=RSFST20000":
                  result.innerHTML = "Today's ファミレス！";
                  break;
                default:
                  result.innerHTML = "もう一度読み込んで下さい。";
                  break;
              }
                

                for( let i=0; i < num_shop; i++){
                  var shopLat = json.rest[i].latitude;
                  var shopLng = json.rest[i].longitude;
                  var shopPosition = new google.maps.LatLng(shopLat, shopLng);
                  var shopMaker = new google.maps.Marker({
                      map : map,
                      position : shopPosition,
                      icon: {
                          path: google.maps.SymbolPath.CIRCLE, //円を指定
                          fillColor: "#cc7eb1",                //背景色
                          fillOpacity: 0.8,                    //透過率
                          strokeColor: "#000",                 //枠の色
                          strokeWeight: 0.5 ,                   //枠の透過率
                          scale: 10,                           //サイズ
                      },
                      label:{
                          text:String(i+1),
                          fontSize:'15px',
                          color:'#000'
                      },
                  });
                  console.log(json.rest[i]);
                  var checkImg = json.rest[i].image_url.shop_image1;
                  if(checkImg === ""){
                    json.rest[i].image_url.shop_image1 ="/assets/noimage.jpg";
                  }
                  var checkLunch = json.rest[i].lunch;
                  if(checkLunch === ""){
                    json.rest[i].lunch ="−";
                  }
                  //テーブル出力
                  $('<tr><td>'+ String(i+1) + '</td><td><a href="'+ json.rest[i].url +'">'+ json.rest[i].name +'</a><br><a href="'+ json.rest[i].url +'"><img class="image" src=' + json.rest[i].image_url.shop_image1 + '></a></td><td class = "opentime">' + json.rest[i].opentime + '</td><td>¥' + json.rest[i].lunch + '</td></tr>').appendTo('table');
                };            
            }
        })
          //-------↑取得に成功した場合↑ーーーーーー
    };
    // 取得失敗した場合
    function error (error) {
      var errorMessage = {
        0: "原因不明のエラーが発生しました。" ,
        1: "位置情報の取得が許可されませんでした。" ,
        2: "電波状況などで位置情報が取得できませんでした。" ,
        3: "位置情報の取得に時間がかかりタイムアウトしました。" ,
      };
     //エラーコードに合わせたエラー内容をアラート表示
      alert(errorMessage[error.code]);
    };
  // Geolocation APIに対応していない
  } else {
    alert("この端末では位置情報が取得できません");
  }
}