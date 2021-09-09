function observer(obj, targetVariable, callback){
    if (!obj.data) {
        obj.data = {}
    }
    Object.defineProperty(obj, targetVariable, {
        get () {
            return this.data[targetVariable]
        },
        set (val) {
            this.data[targetVariable] = val
            callback && callback(val) 
        }
    })
    if (obj.data[targetVariable]) {
        callback && callback(obj.data[targetVariable])
    }
}

class Event {
    constructor(){
        this.listeners = {}
    }

    on(eventType, listener){
        if ( !this.listeners[eventType] ) {
            this.listeners[eventType] = []
        }
        this.listeners[eventType].push(listener)
    }

    emit(eventType, data) {
        const callbacks = this.listeners[eventType]
        if (callbacks) {
            callbacks.forEach(c=>{
                c(data)
            })
        }
    }
}

const event = new Event()
event.on('open', (data) => {
  console.log(data)
})
event.emit('open', { open: true })

订阅发布模式:
    - 具有一个事件管理中心
    - 可以订阅与发布之间不存在直接关系
    - 事件中心可以订阅多个消息
    - 有利于批量处理

观察者模式:
    - 被观察对象与行为强绑定
    - 响应式的处理数据更新,不易处理数据冲突
