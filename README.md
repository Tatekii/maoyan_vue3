# vue3猫眼h5
- `vite`构建
- 全套vue-next
- Typescript

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

- ref获取dom时，后续用可选链拿值报错
  ```javascript
    const scrollWrapper = ref(null)
    let scrollTop = scrollWrapper.value?.scrollTop // 这里会报错scrollTop不存在never类型上

    /* solution */
    const scrollWrapper :Ref<HTMLElement | null> =  ref(null)

  ```

- vitconfig的路径别名ts报错找不到模块，但可以正常使用
  
  ```javascript
  // 在tsconfig中添加
  "baseUrl": "./",
  "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  ```

- vue单文件组件中，先写好css，后追加innerHTML不生效
  ```javascript
  //受scope影响，编译的css文件生成唯一标识符，与后拼接的html不匹配
  1. 去除scope
  //or
  2. 将css文件提出import引入

  ```