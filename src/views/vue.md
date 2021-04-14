参考文档地址：[https://vue3js.cn/docs/]

# defineComponent
从实现上看，defineComponent 只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持。

```
import { defineComponent } from 'vue'

const MyComponent = defineComponent({
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})

// 或者是一个 setup 函数，函数名称将作为组件名称来使用


import { defineComponent, ref } from 'vue'

const HelloWorld = defineComponent(function HelloWorld() {
  const count = ref(0)
  return { count }
})
```

# defineAsyncComponent
创建一个只有在需要时才会加载的异步组件。

```
// 对于基本用法，defineAsyncComponent 可以接受一个返回 Promise 的工厂函数。Promise 的 resolve 回调应该在服务端返回组件定义后被调用。你也可以调用 reject(reason) 来表示加载失败。

import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/AsyncComponent.vue')
)

app.component('async-component', AsyncComp)

// 当使用局部注册时，你也可以直接提供一个返回 Promise 的函数：

import { createApp, defineAsyncComponent } from 'vue'

createApp({
  // ...
  components: {
    AsyncComponent: defineAsyncComponent(() =>
      import('./components/AsyncComponent.vue')
    )
  }
})

// 对于高阶用法，defineAsyncComponent 可以接受一个对象：

// defineAsyncComponent 方法还可以返回以下格式的对象：

import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent({
  // 工厂函数
  loader: () => import('./Foo.vue')
  // 加载异步组件时要使用的组件
  loadingComponent: LoadingComponent,
  // 加载失败时要使用的组件
  errorComponent: ErrorComponent,
  // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
  delay: 200,
  // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
  // 默认值：Infinity（即永不超时，单位 ms）
  timeout: 3000,
  // 定义组件是否可挂起 | 默认值：true
  suspensible: false,
  /**
   *
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
   * @param {*} fail  一个函数，指示加载程序结束退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry()
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail()
    }
  }
})
```

# resolveComponent
WARNING

resolveComponent 只能在 render 或 setup 函数中使用。
如果在当前应用实例中可用，则允许按名称解析 component。

返回一个 Component。如果没有找到，则返回 undefined。
```
const app = Vue.createApp({})
app.component('MyComponent', {
  /* ... */
})
import { resolveComponent } from 'vue'
render() {
  const MyComponent = resolveComponent('MyComponent')
}
```

# resolveDynamicComponent
WARNING

resolveDynamicComponent 只能在 render 或 setup 函数中使用。

允许使用与 <component :is=""> 相同的机制来解析一个 component。

返回已解析的 Component 或新创建的 VNode，其中组件名称作为节点标签。如果找不到 Component，将发出警告。

```
import { resolveDynamicComponent } from 'vue'
render () {
  const MyComponent = resolveDynamicComponent('MyComponent')
}
```

# resolveDirective
WARNING

resolveDirective 只能在 render 或 setup 函数中使用。

如果在当前应用实例中可用，则允许通过其名称解析一个 directive。

返回一个 Directive。如果没有找到，则返回 undefined。

```
const app = Vue.createApp({})
app.directive('highlight', {})


import { resolveDirective } from 'vue'
render () {
  const highlightDirective = resolveDirective('highlight')
}
```

# withDirectives
WARNING

withDirectives 只能在 render 或 setup 函数中使用。

允许将指令应用于 VNode。返回一个包含应用指令的 VNode。

```
import { withDirectives, resolveDirective } from 'vue'
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h('div'), [
  [foo, this.x],
  [bar, this.y]
])
```

# createRenderer

createRenderer 函数接受两个泛型参数： HostNode 和 HostElement，对应于宿主环境中的 Node 和 Element 类型。

例如，对于 runtime-dom，HostNode 将是 DOM Node 接口，HostElement 将是 DOM Element 接口。

自定义渲染器可以传入特定于平台的类型，如下所示：

```
import { createRenderer } from 'vue'
const { render, createApp } = createRenderer<Node, Element>({
  patchProp,
  ...nodeOps
})
```

# nextTick
将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。
```
import { createApp, nextTick } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello!')
    const changeMessage = async newMessage => {
      message.value = newMessage
      await nextTick()
      console.log('Now DOM is updated')
    }
  }
})
```
Data
#data
类型：Function

详细：

返回组件实例的 data 对象的函数。在 data 中，我们不建议观察具有自身状态行为的对象，如浏览器 API 对象和原型 property。一个好主意是这里只有一个表示组件 data 的普通对象。

一旦观察过，你就无法在根数据对象上添加响应式 property。因此推荐在创建实例之前，就声明所有的根级响应式 property。

实例创建之后，可以通过 vm.$data 访问原始数据对象。组件实例也代理了 data 对象上所有的 property，因此访问 vm.a 等价于访问 vm.$data.a。

以 _ 或 $ 开头的 property 不会被组件实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些 property。

示例：

// 直接创建一个实例
const data = { a: 1 }

// 这个对象将添加到组件实例中
const vm = Vue.createApp({
  data() {
    return data
  }
}).mount('#app')

console.log(vm.a) // => 1
注意，如果你为 data property 使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。

data: vm => ({ a: vm.myProp })
参考深入响应性原理

#props
类型：Array<string> | Object

详细：

props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高阶选项，如类型检测、自定义验证和设置默认值。

你可以基于对象的语法使用以下选项：

type：可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的更多信息在此。
default：any 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回
required：Boolean 义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。
validator：Function 自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在这里查阅更多 prop 验证的相关信息。
示例：

const app = Vue.createApp({})

// 简单语法
app.component('props-demo-simple', {
  props: ['size', 'myMessage']
})

// 对象语法，提供验证
app.component('props-demo-advanced', {
  props: {
    // 类型检查
    height: Number,
    // 类型检查 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: value => {
        return value >= 0
      }
    }
  }
})
参考 Props

#computed
类型：{ [key: string]: Function | { get: Function, set: Function } }

详细：

计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例。

注意，如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。

computed: {
  aDouble: vm => vm.a * 2
}
计算属性的结果会被缓存，除非依赖的响应式 property 变化才会重新计算。注意，如果某个依赖 (比如非响应式 property) 在该实例范畴之外，则计算属性是不会被更新的。

示例：

const app = Vue.createApp({
  data() {
    return { a: 1 }
  },
  computed: {
    // 仅读取
    aDouble() {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get() {
        return this.a + 1
      },
      set(v) {
        this.a = v - 1
      }
    }
  }
})

const vm = app.mount('#app')
console.log(vm.aPlus) // => 2
vm.aPlus = 3
console.log(vm.a) // => 2
console.log(vm.aDouble) // => 4
参考 Computed Properties

#methods
类型：{ [key: string]: Function }

详细：

methods 将被混入到组件实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为组件实例。

注意

注意，不应该使用箭头函数来定义 method 函数 (例如 plus：() => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向组件实例，this.a 将是 undefined。

示例：

const app = Vue.createApp({
  data() {
    return { a: 1 }
  },
  methods: {
    plus() {
      this.a++
    }
  }
})

const vm = app.mount('#app')

vm.plus()
console.log(vm.a) // => 2
参考 Event Handling

#watch
类型：{ [key: string]: string | Function | Object | Array}

详细：

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。组件实例将会在实例化时调用 $watch()，参阅 $watch，了解更多关于 deep、immediate 和 flush 选项的信息。

示例：

const app = Vue.createApp({
  data() {
    return {
      a: 1,
      b: 2,
      c: {
        d: 4
      },
      e: 'test',
      f: 5
    }
  },
  watch: {
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    },
    // 字符串方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler(val, oldVal) {
        console.log('c changed')
      },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    e: {
      handler(val, oldVal) {
        console.log('e changed')
      },
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    f: [
      'handle1',
      function handle2(val, oldVal) {
        console.log('handle2 triggered')
      },
      {
        handler: function handle3(val, oldVal) {
          console.log('handle3 triggered')
        }
        /* ... */
      }
    ]
  },
  methods: {
    someMethod() {
      console.log('b changed')
    },
    handle1() {
      console.log('handle 1 triggered')
    }
  }
})

const vm = app.mount('#app')

vm.a = 3 // => new: 3, old: 1
注意

注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向组件实例，this.updateAutocomplete 将是 undefined。

参考 Watchers

#emits
类型：Array<string> | Object

详细：

emits 可以是数组或对象，从组件触发自定义事件，emits 可以是简单的数组，或者对象作为替代，允许配置和事件验证。

在对象语法中，每个 property 的值可以为 null 或验证函数。验证函数将接收传递给 $emit 调用的其他参数。如果 this.$emit('foo',1) 被调用，foo 的相应验证函数将接收参数 1。验证函数应返回布尔值，以表示事件参数是否有效。

用法：

const app = Vue.createApp({})

// 数组语法
app.component('todo-item', {
  emits: ['check'],
  created() {
    this.$emit('check')
  }
})

// 对象语法
app.component('reply-form', {
  emits: {
    // 没有验证函数
    click: null,

    // 带有验证函数
    submit: payload => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
})
注意

emits 选项中列出的事件不会从组件的根元素继承，也将从 $attrs property 中移除。

参考 Attribute 继承