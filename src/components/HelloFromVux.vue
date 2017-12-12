<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
    <p class="info">{{ $t('Current value') }}: {{ value1 }}</p>
    <p class="info">{{ $t("Hi, I'm Vux.") }}</p>
    <search
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="100px"
      ref="search"></search>
    <x-switch disabled :title="$t('switch red')"></x-switch>
    <div style="padding:15px;">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2017-11-11') }} </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Date: 2018-08-01') }} </x-button>
      <x-button @click.native="toggleFormat" type="primary"> {{ $t('Toggle format') }} </x-button>
      <x-button @click.native="showPopup = true" type="primary"> {{ $t('Show popup with datetime-view') }} </x-button>
    </div>
    <group>
      <x-address :title="title" @on-hide="logHide" v-model="value_0_1" :list="addressData" placeholder="请选择地址">
        <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
          <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"></span>
            <span style="vertical-align:middle;">地址</span>
          </span>
        </template>
      </x-address>
    </group>
    <group>
      <x-address @on-hide="logHide" :title="title" v-model="value_0_2" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address>
      <cell title="上面value值" :value="value_0_2"></cell>
    </group>
    <div v-transfer-dom>
      <popup v-model="showPopup">
        <datetime-view v-model="value2"></datetime-view>
      </popup>
    </div>
    <!-- 先从本地查找，找不到再从 locales 目录下的文件中去查找，如果再找不到就显示原文，且 i18n 标签内的语言会同步到 locales 目录下的 components.yml 文件中> -->
  </div>
</template>

<i18n>
  Current value:
    zh-CN: 选中值为什么
  Set 2017-11-11:
    zh-CN: 设置为 2017-11-11
  Set 2016-08-08:
    zh-CN: 设置为 2016-08-08
  Toggle format:
    zh-CN: 切换时间格式
  Show popup with datetime-view:
    zh-CN: 显示弹窗样式
  switch red:
    en: <span style="color:red">I am Red.</span>
    zh-CN: <span style="color:red">我是红色</span>
</i18n>

<script>
import { XAddress, Cell, Group, ChinaAddressV4Data, Search, DatetimeView, XButton, Popup, TransferDom, XSwitch } from 'vux';

export default {
  name: 'helloFormVux',
  components: {
    DatetimeView,
    XButton,
    Popup,
    XSwitch,
    Search,
    XAddress,
    Group,
    Cell,
  },
  directives: {
    TransferDom,
  },
  created() {
    // console.log(this.$i18n.set('zh-CN'), this.$locale.get()); // 切换中英文
    // this.$vux.alert.show({ // 打开弹窗
    //   title: 'Vux is Cool',
    //   content: 'Do you agree?',
    //   onShow() {
    //     console.log('Plugin: I\'m showing');
    //   },
    //   onHide() {
    //     console.log('Plugin: I\'m hiding');
    //   },
    // });
    // this.$vux.alert.hide(); // 隐藏弹窗
    // console.log(this);
    this.$store.dispatch('noLoadingDataGet', { self: this, url: '/as' });
  },
  data() {
    return {
      value: 'test',
      results: [],
      value1: '2017-10-11',
      value2: '2017-10-24',
      showPopup: false,
      format: 'YYYY-MM-DD',
      title: '默认为空',
      value_0_1: [],
      value_0_2: [],
      addressData: ChinaAddressV4Data,
      showAddress: false,
    };
  },
  methods: {
    toggleFormat() {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm';
      } else {
        this.format = 'YYYY-MM-DD';
      }
    },
    changeValue(val) {
      this.value1 = val;
      this.$refs.datetime.render();
    },
    logHide(str) {
      console.log('on-hide', str);
      console.log(this.value_0_1);
      console.log(this.value_0_2);
    },
  },
};
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}

.demo-icon-big {
  font-size: 28px;
}
</style>

