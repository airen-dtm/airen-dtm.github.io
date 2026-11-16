# 藍蓮 制作実績ページ

## 中身
- `index.html` … ページ本体（基本的に触らなくてOK）
- `works.js` … 作品データ。追記・修正はこのファイルだけ
- `icon.jpg` … アイコン画像（ヘッダーとタブのアイコン）

## 作品を追加するとき
1. `works.js` を開く
2. `{` から `},` までをひとつコピーして、`window.WORKS = [` のすぐ下に貼る
3. 中身を書き換える（id は `https://youtu.be/XXXX` の XXXX）
4. GitHub にアップロードし直す（下の「更新」）

Claude に「制作実績リストの〇〇をポートフォリオに追加して」と頼めば、書き換えた `works.js` を作ります。

## こだわりポイント・聴きどころ
- `point: "..."` に書くと、カードに「こだわりポイント」として表示
- `start: 72` のように秒数を入れると「聴きどころ(1:12)から再生」ボタンが出る
- `original: "..."` に原曲アーティストを入れると曲名の横に表示

## ココナラのボタン
`works.js` の一番下、`coconala: ""` に出品ページのURLを入れると「ココナラで相談する」ボタンが出ます。

## 公開先
- リポジトリ：https://github.com/airen-dtm/airen-dtm.github.io
- 公開URL：https://airen-dtm.github.io/

## 更新
リポジトリを開き「Add file」→「Upload files」で `works.js` を上書きアップロード →「Commit changes」。
1〜2分で反映されます。
