<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
    <p class="info">{{ $t('Current value') }}: {{ value1 }}</p>
    <p class="info">{{ $t("Hi, I'm Vux.") }}</p>
    <!-- <p class="info">{{ $t('Actionsheet header') }}</p> -->
    <x-switch disabled :title="$t('switch red')"></x-switch>
    <div style="padding:15px;">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2017-11-11') }} </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Date: 2018-08-01') }} </x-button>
      <x-button @click.native="toggleFormat" type="primary"> {{ $t('Toggle format') }} </x-button>
      <x-button @click.native="showPopup = true" type="primary"> {{ $t('Show popup with datetime-view') }} </x-button>
    </div>
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
  zh-CN: 选中值为
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
import { DatetimeView, XButton, Popup, TransferDom, XSwitch } from 'vux';

export default {
  components: {
    DatetimeView,
    XButton,
    Popup,
    XSwitch,
  },
  directives: {
    TransferDom,
  },
  created() {
    // console.log(this.$i18n.set('zh-CN'), this.$locale.get()); // 切换中英文
    console.log(this.$vux);
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
    this.$store.dispatch('onlyStatusGet', { url: '/as' });
  },
  data() {
    return {
      value1: '2017-10-11',
      value2: '2017-10-24',
      showPopup: false,
      format: 'YYYY-MM-DD',
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
  },
};
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
</style>

