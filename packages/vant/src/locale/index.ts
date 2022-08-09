import { ref, reactive } from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN'; // 默认的消息内容，有点像props。

type Message = Record<string, any>;
type Messages = Record<string, Message>;

const lang = ref('zh-CN'); // vue3 语法，目的是创建响应式数据，其中lang为一种响应式数据；
const messages = reactive<Messages>({
  'zh-CN': defaultMessages,
});

export const Locale = {
  messages(): Message {
    // ts写法，返回Message，这个函数名叫messages
    return messages[lang.value]; // 该响应式数据的值
  },

  use(newLang: string, newMessages?: Message) {
    // 没有返回的函数
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },

  add(newMessages: Message = {}) {
    deepAssign(messages, newMessages);
  },
};

export default Locale;
