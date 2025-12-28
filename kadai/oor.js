const express = require("express");
const app = express();

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

// POSTリクエストのデータ（フォームの内容）を受け取るための設定
app.use(express.urlencoded({ extended: true }));

// 静的ファイル（HTMLや画像など）を置くフォルダの設定
app.use("/public", express.static(__dirname + "/public"));

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

// 一覧表示
app.get("/oor", (req, res) => {
  res.render('oor', { data: tour });
});

// 新規作成画面（public/oor.htmlを表示）
app.get("/oor/create", (req, res) => {
  res.sendFile(__dirname + '/public/oor.html');
});

// 詳細表示
app.get("/oor/:number", (req, res) => {
  const number = req.params.number;
  const detail = tour[number];
  res.render('oor_detail', { data: detail, id: number });
});



// 削除確認画面の表示
app.get("/oor/delete_confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = tour[number];
  res.render('oor_delete', { data: detail, id: number });
});

// 実際の削除実行 (POSTメソッドで安全に削除)
app.post("/oor/delete/:number", (req, res) => {
  tour.splice(req.params.number, 1);
  res.redirect('/oor');
});

// 新規登録処理（POST）
app.post("/oor", (req, res) => {
  const newId = tour.length+ 1;
  const newTour = {
    id: newId,
    name: req.body.name,
    album: req.body.album, // HTML側のname="album"に合わせる
    days: req.body.days,   // HTML側のname="days"に合わせる
    region: req.body.region // HTML側のname="region"に合わせる
  };
  tour.push(newTour);
  res.redirect('/oor');
});

// 編集画面
app.get("/oor/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = tour[number];
  res.render('oor_edit', { id: number, data: detail });
});

// 更新処理（POST）
app.post("/oor/update/:number", (req, res) => {
  const index = req.params.number;
  if (tour[index]) {
    tour[index].name = req.body.name;
    tour[index].album = req.body.album;
    tour[index].days = req.body.days;
    tour[index].region = req.body.region;
  }
  res.redirect('/oor');
});


// ポート8080で待機（エラーが出るなら3000などに変更）
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/oor");
});

let jugyou = [
  { id:1, name:"情報工学概論",jikann:"月曜1,2限", kyousi:"信川　創、中村　直人、有本　泰子、関根　晃太、水本　旭洋、大西　隆之", tanni:"2単位", basyo:"3212演習室", raku:"遅刻だけはしちゃいけない" },
  { id:2, name:"英語理解", jikann:"月曜3,4限", kyousi:"野村　美由紀", tanni:"1単位", basyo:"5221講義室", raku:"真面目に受ければ" },
  { id:3, name:"言語と文化", jikann:"月曜6,7限", kyousi:"髙松　佑介", tanni:"2単位", basyo:"5303講義室", raku:"真面目に受ければ" },
  { id:4, name:"科学技術史", jikann:"火曜1,2限", kyousi:"小林　学", tanni:"2単位", basyo:"7202講義室", raku:"テストだけちょいだるい" },
  { id:5, name:"日本語表現", jikann:"火曜3,4限", kyousi:"本橋　龍晃", tanni:"1単位", basyo:"5304講義室", raku:"スーパーイージー" },
  { id:6, name:"プログラミング言語", jikann:"火曜6,7限", kyousi:"須田　宇宙", tanni:"2単位", basyo:"3212演習室", raku:"受からせてください" },
  { id:7, name:"フィジカルコンピューティング", jikann:"火曜8,9限", kyousi:"水本　旭洋", tanni:"2単位", basyo:"3212演習室", raku:"すっごい寝た" },
  { id:8, name:"論理回路", jikann:"水曜1,2限", kyousi:"鎌倉　浩嗣", tanni:"2単位", basyo:"7103講義室", raku:"ゴミ" },
  { id:9, name:"英語表現", jikann:"水曜3,4限", kyousi:"八木　茂那子", tanni:"1単位", basyo:"5106講義室", raku:"真面目に受ければ" },
  { id:10, name:"アイディアソン", jikann:"水曜6,7,8,9限", kyousi:"信川　創、須田　宇宙、中村　直人", tanni:"2単位", basyo:"3212演習室", raku:"学科を変えたくなった要因" },
  { id:11, name:"数理・データサイエンス・AI入門", jikann:"木曜1,2限", kyousi:"内田洋行　能町講師、角張　健一", tanni:"1単位", basyo:"3212演習室", raku:"資料見れば余裕" },
  { id:12, name:"技術文章作成", jikann:"木曜3,4限", kyousi:"信川　創", tanni:"2単位", basyo:"3212演習室", raku:"最後までよくわからなかった" },
  { id:13, name:"初年次教育", jikann:"木曜6,7限", kyousi:"菅原　真司、中村　直人、吉田　聡", tanni:"1単位", basyo:"食堂連3階講義室1", raku:"めちゃくちゃイージー" },
  { id:14, name:"電気回路", jikann:"金曜2,3,4限", kyousi:"東山　幸司、安武　伸俊、丸山　敏毅、鎌田　智之", tanni:"2単位", basyo:"8109講義室", raku:"だるいけど先生は最高" },
  { id:15, name:"数学基礎", jikann:"金曜6,7,8限", kyousi:"東條　晃次", tanni:"2単位", basyo:"5209講義室", raku:"得意な人はすごく楽" },
];

// 一覧表示
app.get("/cit", (req, res) => {
  res.render('cit', { data: jugyou });
});

// 新規作成画面（public/oor.htmlを表示）
app.get("/cit/create", (req, res) => {
  res.sendFile(__dirname + '/public/cit.html');
});

// 詳細表示
app.get("/cit/:number", (req, res) => {
  const number = req.params.number;
  const detail = jugyou[number];
  if (detail) {
    res.render('cit_detail', { data: detail, id: number });
  } else {
    res.status(404).send("授業が見つかりません");
  }
});



// 削除確認画面の表示
app.get("/cit/delete_confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = tour[number];
  if (detail) {
    res.render('cit_delete', { data: detail, id: number });
  } else {
    res.status(404).send("データが見つかりません");
  }
});

// 実際の削除実行 (POSTメソッドで安全に削除)
app.post("/cit/delete/:number", (req, res) => {
  jugyou.splice(req.params.number, 1);
  res.redirect('/cit');
});

// 新規登録処理（POST）
app.post("/cit", (req, res) => {
  const newId = jugyou.length+ 1;
  const newTour = {
    id: newId,
    name: req.body.name,
    jikann: req.body.jikann, // HTML側のname="album"に合わせる
    kyousi: req.body.kyousi,   // HTML側のname="days"に合わせる
    tanni: req.body.tanni, // HTML側のname="region"に合わせる
    basyo: req.body.basyo,
    raku: req.body.raku 
  };
  jugyou.push(newTour);
  res.redirect('/cit');
});

// 編集画面
app.get("/cit/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = jugyou[number];
  res.render('cit_edit', { id: number, data: detail });
});

// 更新処理（POST）
app.post("/cit/update/:number", (req, res) => {
  const index = req.params.number;
  if (jugyou[index]) {
    jugyou[index].name = req.body.name;
    jugyou[index].jikann = req.body.jikann;
    jugyou[index].kyousi = req.body.kyousi;
    jugyou[index].tanni = req.body.tanni;
    jugyou[index].basyo = req.body.basyo;
    jugyou[index].raku = req.body.raku;
  }
  res.redirect('/cit');
});

let attractions = [
    // --- 東京ディズニーランド (37個) ---
    { id: 1, park: "land", name: "オムニバス", area: "ワールドバザール", capacity: "33名", duration: "約6分", wait: "5分" },
    { id: 2, park: "land", name: "ペニーアーケード", area: "ワールドバザール", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 3, park: "land", name: "カリブの海賊", area: "アドベンチャーランド", capacity: "20名", duration: "約15分", wait: "20分" },
    { id: 4, park: "land", name: "ジャングルクルーズ", area: "アドベンチャーランド", capacity: "32名", duration: "約13分", wait: "30分" },
    { id: 5, park: "land", name: "ウエスタンリバー鉄道", area: "アドベンチャーランド", capacity: "32名", duration: "約15分", wait: "20分" },
    { id: 6, park: "land", name: "スイスファミリー・ツリーハウス", area: "アドベンチャーランド", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 7, park: "land", name: "魅惑のチキルーム", area: "アドベンチャーランド", capacity: "318名", duration: "約10分", wait: "10分" },
    { id: 8, park: "land", name: "ウエスタンランド・シューティングギャラリー", area: "ウエスタンランド", capacity: "なし", duration: "自由", wait: "5分" },
    { id: 9, park: "land", name: "カントリーベア・シアター", area: "ウエスタンランド", capacity: "306名", duration: "約15〜17分", wait: "10分" },
    { id: 10, park: "land", name: "蒸気船マークトウェイン号", area: "ウエスタンランド", capacity: "475名", duration: "約12分", wait: "15分" },
    { id: 11, park: "land", name: "トムソーヤ島いかだ", area: "ウエスタンランド", capacity: "55名", duration: "約1分30秒", wait: "5分" },
    { id: 12, park: "land", name: "ビッグサンダー・マウンテン", area: "ウエスタンランド", capacity: "30名", duration: "約4分", wait: "60分" },
    { id: 13, park: "land", name: "スプラッシュ・マウンテン", area: "クリッターカントリー", capacity: "8名", duration: "約10分", wait: "70分" },
    { id: 14, park: "land", name: "ビーバーブラザーズのカヌー探険", area: "クリッターカントリー", capacity: "16名", duration: "約10分", wait: "15分" },
    { id: 15, park: "land", name: "アリスのティーパーティー", area: "ファンタジーランド", capacity: "4名", duration: "約1分30秒", wait: "15分" },
    { id: 16, park: "land", name: "イッツ・ア・スモールワールド", area: "ファンタジーランド", capacity: "20名", duration: "約10分", wait: "15分" },
    { id: 17, park: "land", name: "キャッスルカルーセル", area: "ファンタジーランド", capacity: "72名", duration: "約2分", wait: "10分" },
    { id: 18, park: "land", name: "白雪姫と七人のこびと", area: "ファンタジーランド", capacity: "4名", duration: "約2分30秒", wait: "20分" },
    { id: 19, park: "land", name: "シンデレラのフェアリーテイル・ホール", area: "ファンタジーランド", capacity: "なし", duration: "約8分", wait: "20分" },
    { id: 20, park: "land", name: "空飛ぶダンボ", area: "ファンタジーランド", capacity: "2名", duration: "約1分30秒", wait: "35分" },
    { id: 21, park: "land", name: "美女と野獣“魔法のものがたり”", area: "ファンタジーランド", capacity: "10名", duration: "約8分", wait: "120分" },
    { id: 22, park: "land", name: "ピーターパン空の旅", area: "ファンタジーランド", capacity: "2名", duration: "約2分30秒", wait: "45分" },
    { id: 23, park: "land", name: "ピノキオの冒険旅行", area: "ファンタジーランド", capacity: "4名", duration: "約2分", wait: "20分" },
    { id: 24, park: "land", name: "プーさんのハニーハント", area: "ファンタジーランド", capacity: "5名", duration: "約4分30秒", wait: "50分" },
    { id: 25, park: "land", name: "ホーンテッドマンション", area: "ファンタジーランド", capacity: "3名", duration: "約15分", wait: "45分" },
    { id: 26, park: "land", name: "ミッキーのフィルハーマジック", area: "ファンタジーランド", capacity: "454名", duration: "約16分", wait: "15分" },
    { id: 27, park: "land", name: "ガジェットのゴーコースター", area: "トゥーンタウン", capacity: "16名", duration: "約1分", wait: "25分" },
    { id: 28, park: "land", name: "グーフィーのペイント＆プレイハウス", area: "トゥーンタウン", capacity: "8名", duration: "約1分30秒", wait: "20分" },
    { id: 29, park: "land", name: "チップとデールのツリーハウス", area: "トゥーンタウン", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 30, park: "land", name: "トゥーンパーク", area: "トゥーンタウン", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 31, park: "land", name: "ドナルドのボート", area: "トゥーンタウン", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 32, park: "land", name: "ミニーの家", area: "トゥーンタウン", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 33, park: "land", name: "ロジャーラビットのカートゥーンスピン", area: "トゥーンタウン", capacity: "2名", duration: "約3分30秒", wait: "30分" },
    { id: 34, park: "land", name: "スター・ツアーズ", area: "トゥモローランド", capacity: "40名", duration: "約4分30秒", wait: "20分" },
    { id: 35, park: "land", name: "スティッチ・エンカウンター", area: "トゥモローランド", capacity: "160名", duration: "約12分", wait: "25分" },
    { id: 36, park: "land", name: "ベイマックスのハッピーライド", area: "トゥモローランド", capacity: "2名/台", duration: "約1分30秒", wait: "80分" },
    { id: 37, park: "land", name: "モンスターズ・インク“ライド＆ゴーシーク！”", area: "トゥモローランド", capacity: "3名", duration: "約4分", wait: "55分" },

    // --- 東京ディズニーシー (34個) ---
    { id: 38, park: "sea", name: "ソアリン：ファンタスティック・フライト", area: "メディテレーニアンハーバー", capacity: "87名", duration: "約5分", wait: "150分" },
    { id: 39, park: "sea", name: "ディズニーシー・トランジットスチーマーライン", area: "メディテレーニアンハーバー", capacity: "49名", duration: "約7〜13分", wait: "15分" },
    { id: 40, park: "sea", name: "ヴェネツィアン・ゴンドラ", area: "メディテレーニアンハーバー", capacity: "16名", duration: "約11分30秒", wait: "25分" },
    { id: 41, park: "sea", name: "フォートレス・エクスプロレーション", area: "メディテレーニアンハーバー", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 42, park: "sea", name: "タワー・オブ・テラー", area: "アメリカンウォーターフロント", capacity: "22名", duration: "約2分", wait: "80分" },
    { id: 43, park: "sea", name: "タートル・トーク", area: "アメリカンウォーターフロント", capacity: "238名", duration: "約30分", wait: "40分" },
    { id: 44, park: "sea", name: "ディズニーシー・エレクトリックレールウェイ", area: "アメリカンウォーターフロント", capacity: "42名", duration: "約2分30秒", wait: "10分" },
    { id: 45, park: "sea", name: "トイ・ストーリー・マニア！", area: "アメリカンウォーターフロント", capacity: "12名", duration: "約5分", wait: "110分" },
    { id: 46, park: "sea", name: "ビッグシティ・ヴィークル", area: "アメリカンウォーターフロント", capacity: "8〜10名", duration: "約5〜10分", wait: "10分" },
    { id: 47, park: "sea", name: "アクアトピア", area: "ポートディスカバリー", capacity: "3名", duration: "約2分30秒", wait: "20分" },
    { id: 48, park: "sea", name: "ニモ＆フレンズ・シーライダー", area: "ポートディスカバリー", capacity: "122名", duration: "約5分", wait: "40分" },
    { id: 49, park: "sea", name: "インディ・ジョーンズ・アドベンチャー", area: "ロストリバーデルタ", capacity: "12名", duration: "約4分", wait: "70分" },
    { id: 50, park: "sea", name: "レイジングスピリッツ", area: "ロストリバーデルタ", capacity: "12名", duration: "約1分30秒", wait: "60分" },
    { id: 51, park: "sea", name: "ジャスミンのフライングカーペット", area: "アラビアンコースト", capacity: "4名", duration: "約1分30秒", wait: "20分" },
    { id: 52, park: "sea", name: "シンドバッド・ストーリーブック・ヴォヤッジ", area: "アラビアンコースト", capacity: "24名", duration: "約10分", wait: "15分" },
    { id: 53, park: "sea", name: "マジックランプシアター", area: "アラビアンコースト", capacity: "322名", duration: "約23分", wait: "30分" },
    { id: 54, park: "sea", name: "キャラバンカルーセル", area: "アラビアンコースト", capacity: "190名", duration: "約2分30秒", wait: "10分" },
    { id: 55, park: "sea", name: "アリエルのプレイグラウンド", area: "マーメイドラグーン", capacity: "なし", duration: "自由", wait: "なし" },
    { id: 56, park: "sea", name: "ジャンピン・ジェリーフィッシュ", area: "マーメイドラグーン", capacity: "2名", duration: "約1分", wait: "15分" },
    { id: 57, park: "sea", name: "スカットルのスクーター", area: "マーメイドラグーン", capacity: "2名", duration: "約1分30秒", wait: "20分" },
    { id: 58, park: "sea", name: "フランダーのフライングフィッシュコースター", area: "マーメイドラグーン", capacity: "16名", duration: "約1分", wait: "25分" },
    { id: 59, park: "sea", name: "ブローフィッシュ・バルーンレース", area: "マーメイドラグーン", capacity: "4名", duration: "約1分30秒", wait: "20分" },
    { id: 60, park: "sea", name: "ワールプール", area: "マーメイドラグーン", capacity: "4名", duration: "約1分30秒", wait: "15分" },
    { id: 61, park: "sea", name: "マーメイドラグーンシアター", area: "マーメイドラグーン", capacity: "700名", duration: "約14分", wait: "30分" },
    { id: 62, park: "sea", name: "センター・オブ・ジ・アース", area: "ミステリアスアイランド", capacity: "6名", duration: "約3分", wait: "90分" },
    { id: 63, park: "sea", name: "海底2万マイル", area: "ミステリアスアイランド", capacity: "6名", duration: "約5分", wait: "20分" },
    { id: 64, park: "sea", name: "アナとエルサのフローズンジャーニー", area: "ファンタジースプリングス", capacity: "16名", duration: "約6分30秒", wait: "120分" },
    { id: 65, park: "sea", name: "ラプンツェルのランタンフェスティバル", area: "ファンタジースプリングス", capacity: "16名", duration: "約5分", wait: "80分" },
    { id: 66, park: "sea", name: "ピーターパンのネバーランドアドベンチャー", area: "ファンタジースプリングス", capacity: "12名", duration: "約6分", wait: "100分" },
    { id: 67, park: "sea", name: "フェアリー・ティンカーベルのビジーバギー", area: "ファンタジースプリングス", capacity: "4名", duration: "約2分", wait: "45分" },
    { id: 68, park: "sea", name: "ビッグバンドビート", area: "アメリカンウォーターフロント", capacity: "1500名", duration: "約25分", wait: "抽選" },
    { id: 69, park: "sea", name: "スカイ・フル・オブ・カラーズ", area: "パーク全体", capacity: "なし", duration: "約5分", wait: "なし" },
    { id: 70, park: "sea", name: "ビリーヴ！～シー・オブ・ドリームス～", area: "メディテレーニアンハーバー", capacity: "なし", duration: "約30分", wait: "なし" },
    { id: 71, park: "sea", name: "ハロー、ニューヨーク！", area: "アメリカンウォーターフロント", capacity: "なし", duration: "約25分", wait: "なし" }
];

// パーク選択画面を表示
app.get("/disney", (req, res) => {
  res.sendFile(__dirname + '/public/disney.html');
});

// パーク別の一覧表示 (Cannot GET エラーを防ぐためのルート)
app.get("/disney/list/:park", (req, res) => {
  const park = req.params.park;
  const parkName = (park === 'land') ? "東京ディズニーランド" : "東京ディズニーシー";
  
  // フィルタリングだけしてEJSに渡す
  res.render('disney', { data: attractions, targetPark: park, parkName: parkName });
});

// 一覧表示
app.get("/disney", (req, res) => {
  res.render('disney', { data: attractions });
});

// 新規作成画面（public/disney.htmlを表示）
app.get("/disney/create", (req, res) => {
  res.redirect('/public/disney_new.html');
});

// 詳細表示
app.get("/disney/:number", (req, res) => {
  const number = req.params.number;
  const detail = attractions[number];
  res.render('disney_detail', { data: detail, id: number });
});

// 削除確認画面
app.get("/disney/delete_confirm/:number", (req, res) => {
  const number = req.params.number;
  const detail = attractions[number];
  res.render('disney_delete', { data: detail, id: number });
});

// 削除実行
app.post("/disney/delete/:number", (req, res) => {
  const number = req.params.number;
  const park = attractions[number].park;
  attractions.splice(req.params.number, 1);
  res.redirect('/disney/list/' + park); // 元のパーク一覧へ戻る
});

// 新規登録処理（POST）
app.post("/disney", (req, res) => {
  const id = attractions.length + 1;
  const newItem = {
    id: id,
    park: req.body.park,
    name: req.body.name,
    area: req.body.area,
    capacity: req.body.capacity,
    duration: req.body.duration,
    wait: req.body.wait
  };
  attractions.push(newItem);
  res.redirect('/disney/list/' + park);
});

// 編集画面
app.get("/disney/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = attractions[number];
  res.render('disney_edit', { id: number, data: detail });
});

// 更新処理
app.post("/disney/update/:number", (req, res) => {
  const number = req.params.number;
  attractions[number].name = req.body.name;
  attractions[number].area = req.body.area;
  attractions[number].capacity = req.body.capacity;
  attractions[number].duration = req.body.duration;
  attractions[number].wait = req.body.wait;
  res.redirect('/disney/list/' + attractions[number].park); // 元のパーク一覧へ戻る
});