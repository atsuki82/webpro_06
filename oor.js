const express = require("express");
const app = express();

//app.set('view engine', 'ejs');
//app.use("/public", express.static(__dirname + "/public"));


let tour  = [
  { id:1, year:"2025", name:"ONE OK ROCK DETOX EUROPEAN TOUR 2025", album:"DETOX", days:"2025/10/06～2025/10/30 (15公演)", region:"ヨーロッパ" },
  { id:2, year:"2025", name:"ONE OK ROCK DETOX JAPAN TOUR 2025", album:"DETOX", days:"2025/08/16～2025/09/14 (7公演)", region:"日本" },
  { id:3, year:"2025", name:"ONE OK ROCK DETOX North American Tour 2025", album:"DETOX", days:"2025/05/13～2025/06/07 (15公演)", region:"北米" },
  { id:4, year:"2025", name:"ONE OK ROCK DETOX Latin American Tour 2025", album:"DETOX", days:"2025/04/04～2025/04/16 (6公演)", region:"ラテンアメリカ" },
  { id:5, year:"2025", name:"ONE OK ROCK 2025 PRIMAL FOOTMARK SPECIAL LIVE",  days:"2025/03/24～2025/03/25 (2公演)", region:"日本" },
  { id:6, year:"2024", name:"ONE OK ROCK PREMONITION WORLD TOUR 2024",  days:"2024/09/14～2024/10/23 (8公演)", region:"ワールド" },
  { id:7, year:"2023", name:"LUXURY DISEASE ASIA TOUR 2023", album:"Luxury Disease", days:"2023/09/16～2023/12/18 (14公演)", region:"アジア" },
  { id:8, year:"2023", name:"LUXURY DISEASE TOUR EUROPE 2023", album:"Luxury Disease", days:"2023/06/04～2023/07/21 (11公演)", region:"ヨーロッパ" },
  { id:9, year:"2023", name:"ONE OK ROCK 2023 LUXURY DISEASE JAPAN TOUR", album:" Luxury Disease", days:"2023/01/28～2023/05/13 (11公演)", region:"日本" },
  { id:10, year:"2022", name:"ONE OK ROCK LUXURY DISEASE TOUR NORTH AMERICAN 2022", album:"Luxury Disease", days:"2022/09/19～2022/10/20 (23公演)", region:"北米" },
  { id:11, year:"2021", name:"ONE OK ROCK 2021「Day to Night Acoustic Sessions」at STELLAR THEATER",  days:"2021/07/22～2021/07/31 (7公演)", region:"日本" },
  { id:12, year:"2020", name:"ONE OK ROCK 2020「Field of Wonder」at Stadium Live Streaming",  days:"2020年10月11日 (1公演)", region:"ワールド" },
  { id:13, year:"2020", name:'ONE OK ROCK 2020 "Field of Wonder" at Stadium Live Streaming',  days:"2020年10月11日", region:"無観客による配信ライブ" },
  { id:14, year:"2020", name:"ONE OK ROCK EYE OF THE STORM AUSTRALIA TOUR 2020", album:"Eye of the Storm", days:"2020/03/02～2020/03/10 (5公演)", region:"オーストラリア" },
  { id:15, year:"2019", name:"ONE OK ROCK 2019-2020 EYE OF THE STORM JAPAN TOUR", album:"Eye of the Storm", days:"2019/09/22～2020/01/30 (33公演)", region:"日本" },
  { id:16, year:"2019", name:"EYE OF THE STORM WORLD TOUR 2019 - US & Mexico", album:"Eye of the Storm", days:"2019/07/17～2019/07/27 (33公演)", region:"北米" },
  { id:17, year:"2019", name:"EYE OF THE STORM EUROPEAN TOUR 2019", album:"Eye of the Storm", days:"2019/05/08～2019/05/26 (13公演)", region:"ヨーロッパ" },
  { id:18, year:"2019", name:"EYE OF THE STORM NORTH AMERICAN TOUR 2019", album:"ye of the Storm", days:"2019/02/17～2019/03/30 (27公演)", region:"北米" },
  { id:19, year:"2018", name:"ONE OK ROCK EUROPEAN TOUR 2018",  days:"2018/12/05～2018/12/12 (5公演)", region:"ヨーロッパ" },
  { id:20, year:"2018", name:"ONE OK ROCK with Orchestra Japan Tour 2018",  days:"2018/10/20～2018/10/31 (4公演)", region:"日本" },
  { id:21, year:"2018", name:"ONE OK ROCK 2018 AMBITIONS JAPAN DOME TOUR", album:"Ambitions", days:"2018/03/31～2018/04/22 (8公演)", region:"日本" },
  { id:22, year:"2018", name:"ONE OK ROCK AMBITIONS ASIA TOUR 2018", album:"Ambitions", days:"2018/01/18～2018/02/02 (7公演)", region:"アジア" },
  { id:23, year:"2017", name:"ONE OK ROCK 2017「Ambitions」WORLD TOUR Australia", album:"Ambitions", days:"2017/10/06～2017/10/08 (3公演)", region:"オーストラリア" },
  { id:24, year:"2017", name:"ONE OK ROCK 2017「Ambitions」WORLD TOUR South America", album:"Ambitions", days:"2017/09/27～2017/10/03 (4公演)", region:"南米" },
  { id:25, year:"2017", name:"ONE OK ROCK 2017「Ambitions」WORLD TOUR Russia", album:"Ambitions", days:"2017/08/29～2017/08/30 (2公演)", region:"アジア" },
  { id:26, year:"2017", name:"ONE OK ROCK 2017「Ambitions」WORLD TOUR Europe", album:"Ambitions", days:"2017/08/27～2017/12/22 (16公演)", region:"ヨーロッパ" },
  { id:27, year:"2017", name:"ONE OK ROCK 2017「Ambitions」WORLD TOUR North America", album:"Ambitions", days:"2017/07/06～2017/08/19 (29公演)", region:"北米" },
  { id:28, year:"2017", name:"ONE OK ROCK 2017「Ambitions」JAPAN TOUR", album:"Ambitions", days:"2017/02/18～2017/05/17 (32公演)", region:"日本" },
  { id:29, year:"2017", name:"ONE OK ROCK 2017 NORTH AMERICAN TOUR", album:"Ambitions", days:"2017/01/15～2017/01/24 (6公演)", region:"北米" },
  { id:30, year:"2016", name:"ONE OK ROCK 2016 Live in Shanghai", days:"2016年11月22日 (1公演)", region:"アジア" },
  { id:31, year:"2016", name:"ONE OK ROCK 2016 Live in Korea", days:"2016年11月19日 (1公演)", region:"アジア" },
  { id:32, year:"2016", name:"ONE OK ROCK 2016 SPECIAL LIVE IN NAGISAEN", days:"2016/09/10～2016/09/11 (2公演)", region:"日本" },
  { id:33, year:"2016", name:"ONE OK ROCK 2016「35xxxv」Europe TOUR", album:"35xxxv", days:"2016/05/31～2016/06/10 (5公演)", region:"ヨーロッパ" },
  { id:34, year:"2016", name:"ONE OK ROCK 2016「35xxxv」Asia TOUR", album:"35xxxv", days:"2016/01/14～2016/01/23 (5公演)", region:"アジア" },
  { id:35, year:"2015", name:"ONE OK ROCK 2015「35xxxv」Europe TOUR", album:"35xxxv", days:"2015/12/02～2015/12/22 (17公演)", region:"ヨーロッパ" },
  { id:36, year:"2015", name:"ONE OK ROCK 2015「35xxxv」North American TOUR", album:"35xxxv", days:"2015/09/29～2015/10/06 (28公演)", region:"北米" },
  { id:37, year:"2015", name:"ONE OK ROCK 2015「35xxxv」JAPAN TOUR", album:"35xxxv", days:"2015/05/09～2015/09/13 (24公演)", region:"日本" },
  { id:38, year:"2014", name:"2014 South America & Europe Tour", days:"2014/10/29～2014/12/21 (20公演)", region:"テンアメリカ，ヨーロッパ" },
  { id:39, year:"2014", name:"2014 US Live", days:"2014/10/22～2014/10/23 (2公演)", region:"北米" },
  { id:40, year:"2014", name:"ONE OK ROCK 2014 「Mighty Long Fall at Yokohama Stadium」", days:"2014/09/13～2014/09/14 (2公演)", region:"日本" },
  { id:41, year:"2014", name:"ONE OK ROCK at Warped Tour 2014", days:"2014/04/01～2014/07/06 (19公演)", region:"北米" },
  { id:42, year:"2014", name:"ONE OK ROCK Live at Northern America 2014", days:"2014/02/07～2014/05/17 (4公演)", region:"北米" },
  { id:43, year:"2013", name:"「Who are you??Who are we??」TOUR", days:"2013/10/23～2013/12/07 (12公演)", region:"ヨーロッパ，アジア" },
  { id:44, year:"2013", name:"東北ライブハウス大作戦 ACOUSTIC TOUR", days:"2013/10/04～2013/10/07 (3公演)", region:"日本" },
  { id:45, year:"2013", name:"ONE OK ROCK 2013「人生×君=」TOUR", album:"人生×僕=", days:"2013/05/11～2013/06/16 (11公演)", region:"日本" },
  { id:46, year:"2012", name:"「The Beginning」TOUR", days:"2012/09/04～2012/11/16 (25公演)", region:"日本，アジア" },
  { id:47, year:"2012", name:"「Start Walking The World」TOUR", days:"2012/05/30～2012/06/30 (7公演)", region:"日本，アジア" },
  { id:48, year:"2011", name:"ONE OK ROCK 2011-2012「残響リファレンス」TOUR", album:"残響リファレンス", days:"2011/11/04～2012/01/22 (16公演)", region:"日本" },
  { id:49, year:"2011", name:"Answer is aLive TOUR", days:"011/04/25～2011/06/04 (10公演)", region:"日本" },
  { id:50, year:"2010", name:"「This is my own judgment」TOUR", album:"Nicheシンドローム", days:"2010/06/27～2010/12/11 (23公演)", region:"日本" },
  { id:51, year:"2009", name:"ONE OK ROCK 2009「Overcome Emotion」TOUR", album:"感情エフェクト", days:"2009/09/05～2009/11/26 (22公演)", region:"日本" },
  { id:52, year:"2009", name:"ONE OK ROCK 2009「Emotion Effect」TOUR", album:"感情エフェクト", days:"2009/01/10～2009/06/07 (31公演)", region:"日本" },
  { id:53, year:"2008", name:"ONE OK ROCK LIVE TOUR 2008「BEAM OF LIGHT」", album:"BEAM OF LIGHT", days:"2008/07/05～2008/09/28 (21公演)", region:"日本" },
  { id:54, year:"2008", name:"ONE OK ROCK TOUR 2008「WHAT TIME IS IT NOW?」", days:"2008/04/01～2008/04/20 (8公演)", region:"日本" },
  { id:55, year:"2007", name:'ONE OK ROCK 東名阪クアトロ"トロトロ"ツアー 07', days:"2007/12/19～2007/12/28 (3公演)", region:"日本" },
  { id:56, year:"2007", name:"ONE OK ROCK【正夢のまた夢】ツアー '07", album:"ゼイタクビョウ", days:"2007/08/04～2007/08/29 (9公演)", region:"日本" },
];

app.get("/oor", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('oor', {data: tour} );
});

// Create
app.get("/oor/create", (req, res) => {
  res.redirect('/oor.html');
});

app.get("/oor/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = tour[ number ];
  res.render('oor_detail', {data: detail} );
});

// Delete
app.get("/oor/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  tour.splice( req.params.number, 1 );
  res.redirect('/oor' );
});

// Create
app.post("/oor", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = tour.length + 1;
  const name = req.body.name;
  const album = req.body.change;
  const days = req.body.passengers;
  const region = req.body.distance;
  oor.push( { id: id, name: name, album: album, days: days, region: region } );
  console.log( oor );
  res.render('oor', {data: oor} );
});

// Edit
app.get("/oor/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = tour[ number ];
  res.render('oor_edit', {id: number, data: detail} );
});

// Update
app.post("/oor/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  tour[req.params.number].name = req.body.name;
  tour[req.params.number].album = req.body.album;
  tour[req.params.number].days = req.body.days;
  tour[req.params.number].region = req.body.region;
  console.log( tour );
  res.redirect('/oor' );
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));