# vue3猫眼h5
- `vite`构建，使用`vue-ts`模版

## sugar
- `<script setup>`
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

## bug
- `npm7`版本存在bug会损坏`package-lock`文件,vite运行抛出`EsBuild error`，降级回`npm6`