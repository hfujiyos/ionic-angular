# IonicAngularの環境構築手順

1. Node18をインストール

- Mac / zsh / homebrew / nodebrewの環境にて手順策定

```sh
nodebrew ls                         # インストールされているバージョン一覧を表示
nodebrew ls-remote                  # インストール可能なNode.jsのバージョンを確認
nodebrew install-binary 18          # Node18系の最新バージョンをインストール
nodebrew use 18                     # Node18系の最新バージョンを使用
node -v                             # Node.js v18.20.4 を確認
```

2. Ionic CLIのインストール

```sh
npm install -g @ionic/cli           # Ionic CLI をインストール
ionic -v                            # Ionic 7.2.0 を確認
```

3. プロジェクト作成

```sh
cd Development/Ionic                # 適当なディレクトリを作成して移動
ionic start IonicAngular blank --type=angular       # プロジェクト作成
※ [NgModules]を選択                  # 従来のAngularプロジェクト標準を使用
※ [N]を選択                          # Ionicアカウントは不要のため「N」を選択
```

4. プロジェクト初回起動

```sh
cd IonicAngular                     # プロジェクトディレクトリに移動
code .                              # VSCodeで開く
ctrl + shift + ~                    # VSCodeのターミナルを開く
ionic serve                         # Ionic起動
```

5. ライブラリ導入

- RxJS｜リアクティブライブラリ
  - IonicAngularでは既にインストールされている
  - 非同期処理｜RxJSはObserbableﾊﾟﾀｰﾝ、JavaScript標準はasync/awaitﾊﾟﾀｰﾝ
- NgRx｜状態管理ライブラリ
  - ストアとエフェクトを設定
- Prettier｜フォーマッターライブラリ

```sh
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools
npm install --save-dev prettier
```

6. アプリの実行

```sh
ionic serve
```
