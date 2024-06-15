<script setup></script>

<template>
  <div class="container">
    <div>
      <div class="contain-title">flex布局，解决复杂问题案例</div>
      <div class="flex">
        <div class="flex-5-css border">
          <div>
            <div>111111111111111111</div>
            <div>22222222222</div>
            <div>4444444444</div>
          </div>
        </div>
        <div class="flex-8-css border-top-bottom">
          <div>
            <div>1111</div>
            <div>222</div>
            <div>44444</div>
          </div>
        </div>

        <div class="flex-5-css border">
          <div>
            <div>555555555</div>
            <div>66666666666666666666666</div>
          </div>
        </div>

        <div class="flex-8-css border-top-bottom border-bottom">
          <div>
            <div>555555</div>
            <div>7777777777999999899809889999999980988999999998098899999955555555599999989980988999999</div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="flex-5-css border-left-right">
          <div>
            <div>2222222222222222</div>
            <div>777777777777777</div>
            <div>33</div>
          </div>
        </div>

        <div class="flex-8-css">
          <div>
            <div>22</div>
            <div>77</div>
            <div>3333333333333333333333333333</div>
          </div>
        </div>

        <div class="flex-5-css border-left-right">
          <div>
            <div>666</div>
            <div>6666666</div>
          </div>
        </div>

        <div class="flex-8-css">
          <div>
            <div>9999</div>
            <div>0909090910101001010</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain-title {
  color: pink;
  text-align: center;
  margin-bottom: 10px;
}
.flex {
  display: flex;
}

.border {
  border: 1px solid #000;
}
.border-bottom {
  border-bottom: 1px solid #000;
}
.border-right {
  border-right: 1px solid #000;
}
.border-left-right {
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.border-top-bottom {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}

.flex-5-css {
  flex: 5;
  max-width: calc(100% * 5 / 26);
  background-color: gray;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-8-css {
  flex: 8;
  max-width: calc(100% * 8 / 26);
  background-color: pink;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  word-break: break-word;
  overflow-wrap: break-word;
  text-align: left;
  display: flex;
  align-items: center;
}
</style>
