import introJs  from 'intro.js';
import 'intro.js/introjs.css';

export const uuid = (): string => new Date().getTime().toString(36) + Math.random().toString(36).slice(2);

export const saveEnvVal = (key: string, value: string) => {
  import.meta.env[key] = value;
};

export const getEnvVal = (key: string): string => {
  return import.meta.env[key];
}

export const colors : string[] = [
  '#FF6E67',
  '#6AB2FF',
  '#48D6C1',
  '#FFC37A',
  '#C67BF2',
  '#2ECC71',
  '#6A7485',
  '#ADDF71',
  '#FFA054',
  "#6AB2FF",
  "#FFC37A",
  "#BB72E6",
  "#FF9350",
  "#6A7485",
  "#68DB8E",
  "#A45CCF",
  "#FF9350",
  "#BB72E6",
  "#6AB2FF",
  "#FFC37A",
  "#BB72E6",
  "#FF9350",
  '#FF7451',
  '#FF6E67',
  '#6AB2FF',
  '#48D6C1',
  '#FFC37A',
  '#C67BF2',
  '#6A7485',
  '#4DCFB1',
  '#FFA054',
];

export const startTutorial = () => {
  const intro = introJs();
  intro.setOptions({
    tooltipClass: 'tutorialTooltip',
    steps: [
      {
        title: 'Luminateチュートリアル <img src="luminate-logo.png" style="width:30px; height:30px;"/>',
        intro: 'これはLuminateの各コンポーネントに慣れ、システムを理解するためのウォークスルーです。'
      },
      {
        title: 'テキストエディタ',
        element: document.querySelector('#text-editor-container'),
        intro: "これはあなたのストーリーを書くことができるテキストエディタです。"
      },
      {
        title: 'AIにプロンプト',
        element: document.querySelector('#ai-form'),
        intro: "この入力ボックスを使用してAIにアイデアを尋ねることもできます。\
        AIはこのプロンプトの重要な属性を見つけ出し、複数の応答を生成するのに数秒かかります。"
      },
      {
        title: '探索ビュー',
        element: document.querySelector('#my-spaceviz'),
        intro: "これはAIにアイデアを尋ねると、複数の応答を見ることができる探索ビューです。"
      },
      {
        title: 'テキストエディタを折りたたむ',
        element: document.querySelector('#collapse-button'),
        intro: "テキストエディタを折りたたんで、探索ビューをより見やすくすることができます。"
      },
      {
        title: '検索バー',
        element: document.querySelector('#searchbar'),
        intro: "検索バーを使用して、特定の単語やフレーズを含む応答を素早く見つけることができます。"
      },
      {
        title: 'お気に入り',
        element: document.querySelector('#fav-button'),
        intro: "ブックマークアイコンをクリックして、現在のスペースのお気に入りの応答を表示できます。"
      },
      {
        title:'フィルター',
        element: document.querySelector('#filter-dims'),
        intro: 'デザインスペースが生成されると、ここに示されているような次元が表示されます。これらの次元と関連する値に基づいて応答をフィルタリングできます。\
        <img src="filter-bar.png" style="width:100%; height:auto;"/>'
      },
      {
        title:'セマンティックズーム',
        element: document.querySelector('.semantic-level-panel'),
        intro: 'セマンティックズームを使用して、異なる抽象度レベル（ドット、タイトル、キーワード、要約、全文）で応答を表示できます。\
        <img src="semantic-zoom.png" style="width:100%; height:auto;"/>'
      },
      {
        title:'次元を選択',
        element: document.querySelector('#x-trigger'),
        intro: "次元を選択して、その次元の値に基づいて探索ビュー内の応答を配置できます。"
      },
      {
        title:'メニュー',
        intro: ' 右上に4つのアイコンボタンが表示されます。\
                <ul style=\"list-style-type: none; padding-left: 0; margin-top: 10px;\">\
                  <li style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 10px;\">\
                      <img src=\"tutorial-menu.png\" alt=\"チュートリアル\" style=\"width: 30px; height: 30px;\">\
                      <strong>チュートリアル:</strong> Luminateのチュートリアルを見ることができます。\
                  </li>\
                  <li style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 10px;\">\
                      <img src=\"contact-menu.png\" alt=\"設定\" style=\"width: 30px; height: auto;\">\
                      <strong>お問い合わせ:</strong> 研究者にメールで連絡できます。\
                  </li>\
                  <li style="display: flex; flex-direction: column; align-items: center; gap: 20px; margin-bottom: 10px;">\
                      <div style="display: flex; width: 100%; gap: 10px;">\
                          <img src="settings-menu.png" alt="設定" style="width: 30px; height: 30px;">\
                          <strong>設定:</strong> OpenAI APIキーを入力し、バッチサイズと次元の数を変更できます。\
                          デフォルトのバッチサイズは20、次元の数は3です。\
                      </div>\
                      <img src="settings-input.png" alt="セマンティックズーム" style="width: auto; height: 300px; border: 3px solid #eee; border-radius: 10px; ">\
                  </li>\
                  <li style=\"display: flex; gap: 10px; margin-bottom: 10px;\">\
                      <img src=\"about-menu.png\" alt=\"について\" style=\"width: 30px; height: 30px;\">\
                      <strong>Luminateについて:</strong> 研究論文とLuminateが実装するフレームワークについて詳しく知ることができます。\
                  </li>\
              </ul>\
        ',
      },
      {
        title: 'Luminateチュートリアル <img src="luminate-logo.png" style="width:30px; height:30px;"/>',
        intro: 'これでチュートリアルは終了です。Luminateの理解を深めるために30秒のデモ動画も視聴できます。\
        <video width="540px" height="360px" controls>\
          <source src="luminate-video-preview.mp4" type="video/mp4">\
          お使いのブラウザは動画タグをサポートしていません。\
        </video>\
        チュートリアルを再度見たい場合は、右上の<img src="tutorial-menu.png" style="width:30px; height:auto;"/>をクリックしてください。\
        Luminateをお楽しみください！'
      },
    ]
  });
  intro.setOption("dontShowAgain", false).start();
}
