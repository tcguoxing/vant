import { h, defineComponent } from 'vue';
import Locale from '../src/locale'; // 定义内容？
import { mount, later } from '.';
import { initDemoLocale } from '../docs/site'; // 这里是为Locale添加路径,信息国际化,等东西

initDemoLocale(); //

const EmptyComponent = defineComponent({
  inheritAttrs: false,
  render() {
    return h('div', [this.$slots.default?.()]); // ES6语法,就是ES语法；
  },
});

export function snapshotDemo(Demo: any, option: any = {}) {
  test('should render demo and match snapshot', async () => {
    if (option.beforeTest) {
      option.beforeTest(); // 开始测试？
    }

    if (Demo.i18n) {
      Locale.add(Demo.i18n); // 国际化？
    }

    const wrapper = mount(Demo, {
      // 这么早就渲染并打印快照了？
      global: {
        components: {
          'demo-block': EmptyComponent,
        },
      },
    });

    await later(); // 是否延时；

    expect(wrapper.html()).toMatchSnapshot();

    if (option.afterTest) {
      option.afterTest();
    }
  });
}
