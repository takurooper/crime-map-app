<template>
    <div class="Index">
        <p>Hello</p>
        <table>
            <!-- テーブルヘッダー -->
            <thead>
                <tr v-for="item in todos" v-bind:key="item.id">
                    <th>{{ item.id }}</th>
                    <td>{{ item.comment }}</td>
                    <td class="state">
                      <!-- 状態変更ボタンのモック -->
                      <button>{{ item.state }}</button>
                    </td>
                    <td class="button">
                      <!-- 削除ボタンのモック -->
                      <button>削除</button>
                    </td>
                </tr>
            </thead>
            <tbody>
              <!-- [1] ここに <tr> で ToDo の要素を1行づつ繰り返し表示したい -->
            </tbody>
        </table>
        <h2>新しい作業の追加</h2>
          <form class="add-form" v-on:submit.prevent="doAdd">
            <!-- コメント入力フォーム -->
            コメント <input type="text" ref="comment">
            <!-- 追加ボタンのモック -->
          <button type="submit">追加</button>
</form>

    </div>
</template>
