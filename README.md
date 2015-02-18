# random-maker

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## 目的

野球やサッカーなど複数人数で遊ぶときなど、メンバーを２つのチームに分ける場合に使えるサービスを目指します。

## 機能（実装済み）

angular-local-storageを使って、ローカルストレージに'results'という配列を保存しています。
angular-ui-sortableを使って、マウスで配列の並びを変更できます。
angular-ui-validateを使って、重複する値は登録できないように'notDublicate'というカスタムバリデーションを作りました。
ng-disabledを使って、requiredとdublicateの値がfalseにならない限り、Addボタンは'disabled'を返すようにしました。
ng-messagesを使って、エラーの種類によって異なるメッセージを出すようにしました。

## 機能（予定）

野球のピッチャーやサッカーのキーパーなど、必ず必要なポジションがある場合は、必ず同じ数にわかれるようにしたい。例えば、野球で2チームに分ける場合、ピッチャーを2名をAとBに分けてから、残りの16名を分けるなど。
