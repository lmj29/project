## 第一天
#### cdn
   > cdn:content deliver network,内容分发网络。
   

## 第二天
#### 媒体查询
``` css
@media (min-width:768px) and (max-width:1200px){
    .row{
        color:white;
    }
}
```

#### 栅格系统(grid)
``` html
<div class="container">
        <div class="row">
            <div class="aquamarine col-md-8 col-sm-8">8</div>
            <div class="yellow col-md-4 col-sm-4">4</div>
        </div>
</div>
```

#### 按钮
``` html
<button type="button" class="btn btn-danger">（危险）Danger</button>
具体的的按钮颜色可以通过class改变，例如：btn-info 、btn-daner、btn-default等；按钮的大小也可以通过class来改变
```

#### 模态框
``` html
 <!-- Button trigger modal -->
 <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
 </button>
 <!-- 这里通过modal这个id，把按钮和模态联系起来。这个值要和下面的模态框的id对应-->
  
  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">大二前端的模态框</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">保存</button>
        </div>
      </div>
    </div>
  </div>
  ```
  #### vscode快捷键
  - ctrl+P打开文件
  - ctrl+F 局部搜索，在当前文件搜索
  - ctrl+shift+F 全局搜索，在所有文件搜索
  - ctrl+G 跳转到指定行
  - ctrl+B 打开侧边栏
  
  #### 使用谷歌浏览器查看伪类
  - 1.检查元素，并选中该元素
  - 2.element-styles-:hov(toggle element state,切换元素状态)
  - 3.勾选对应状态，例如hover，即可查看对应状态下的代码

  #### JQ
  - 1.格式
  ``` js
  $(document).ready(function(){
    //你的代码
  })
  // 等价于下面的写法
  $(funnction({
    //你的代码
  })
  //这是第一种写法的简写形式，表示在文档（document）加载完成（ready）后，再加载并执行
  ```
  - 2.jq中的选择器
   > jq的核心是css选择器！

   格式：$('.class'),$('#id'),,$('div')等，注意，如果选择器是变量，就不能带上引号，例如:
   ``` js
   var el = '.element';
   <!-- $(el).show();
   $(el).hide();
   $(el).toggle(); -->
   ```
   - 3.jq中的事件处理
   
   格式：$(选择器).事件名称(处理方式),例如：
   $(el).click(function){
     alert('我被点击了')
   })
   

   ## 第四天
   #### JQ相关
   - 获取当前元素：$(this)
   - 获取元素的自定义属性值：$(el).attr(属性名称)，例子：
   ``` html:
   <p class = "pl" today="20200213">2020年2月13日</p>
   ```
   JS:$('.pl').attr('today')
     
  ## 第五天
  #### JQ相关
  > jq中提供了对指定元素的增加、删除、切换class的方法，例如：$(el).addClass(className)/$(el).
  removeClass(className)/$(el).toggleClass(className),其中toggle意为切换。
  #### 过渡效果transition
  > 过渡效果需要出发，动画不需要触发就会执行，这是他们的一个区别。触发过渡效果最常见的hover，这个项目中展示了另一种思路，增加了class