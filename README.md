# vue3猫眼h5
- `vite`构建
- 全套vue-next

## note&bug
- `npm7`版本存在bug会损坏`package-lock`文件,vite运行抛出`EsBuild error`，降级回`npm6`
- `<script setup>RFC`
  ```javascript
  // 写法真是爱了爱了
  <script setup lang="ts">
  ref: count = 0
  // ref sugar
  defineProps({
    // 不引入defineProps虽然ts警告可是不影响编译
    msg: {
        type: String,
        required: true
      }
  })
  </script>
  ```

- `sticky和scrollTop冲突`
  
  - 描述
  
    js获取`position:sticky`元素的`offsetTop`
    页面滚动过程中由于sticky生效导致offsetTop值跳来跳去
  - 解决方案
    ```javascript
    // 字母跳转时移除粘性class跳转后再加上
    for (let i = 0; i < 22; i++) {
      alphaDom[i].classList.remove('sticky')
    }
    //index就是字母表的索引
    //不使用字母查找，排序过的使用脚标更方便
    const top = alphaDom[index].offsetTop
    console.log(`字母索引${index}高度${top}`)
    nextTick(() => {
      document.querySelector('.city_list'.)scrollTop = top + 300
      for (let i = 0; i < 22; i++) {
        alphaDom[i].classList.ad('sticky')
      }
    })
    ```
