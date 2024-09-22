# パスワードジェネレータ

シンプルなランダムパスワードジェネレータです。ユーザーがパスワードの長さを指定し、「生成」ボタンをクリックすると、指定された長さのランダムパスワードが生成されます。
![ScreenShot 2024-08-10 15 11 54](https://github.com/user-attachments/assets/22f6af93-84da-4627-ac6c-732bf627dd61)

## 機能

- パスワードの長さを8〜64文字の範囲で指定可能
- 生成されたパスワードをクリップボードにコピー可能
- 「生成中...」の表示により、生成中のフィードバックを提供

## インストール

このリポジトリをクローンして、依存関係をインストールします。

```bash
git clone git@github.com:tofustream/random-password-generator.git
cd random-password-generator
npm install
```

## 使用方法

開発サーバーを起動し、ブラウザでアプリケーションを開きます。

```bash
npm start
```

http://localhost:3000でアプリケーションにアクセスできます。

## 使用技術
- React
- Bootstrap
- FontAwesome

## ライセンス

このプロジェクトのコードは、[MIT License](https://opensource.org/licenses/MIT)の下で公開されています。

### 使用しているオープンソースライブラリ

このプロジェクトでは、以下のオープンソースライブラリを使用しています。各ライブラリのライセンスに従って使用してください。

* React: [MIT License](https://github.com/facebook/react/blob/main/LICENSE)
* Bootstrap: [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE)
* FontAwesome: 
    * アイコン: [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)
    * フォント: [SIL OFL 1.1 License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

FontAwesome icons are copyright Fonticons, Inc.

各ライブラリのライセンス全文は、上記のリンクからご確認ください。
