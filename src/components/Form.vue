<template>
  <div class="left">
    <Step :stepNow="stepNow" />
    <div class="form-panel">
      <div class="form-container">
        <form id="a-form">
          <div class="form-content">
            <!-- part 1 -->
            <div class="part" :class="{ 'd-none': stepNow !== 1 }">
              <h4 class="form-title">寄送地址</h4>
              <div class="forms">
                <div class="salutation-name">
                  <div class="form-row salutation">
                    <label for="" class="label-text">稱謂</label>
                    <div class="select-wrapper">
                      <select
                        name="a-salutation"
                        id="a-salutation"
                        v-model="formData.salutation"
                      >
                        <option value="Mr.">先生</option>
                        <option value="Mrs.">小姐</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row name">
                    <label for="" class="label-text">姓名</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="請輸入姓名"
                      v-model="formData.name"
                    />
                  </div>
                </div>
                <div class="form-row phone-number">
                  <label for="" class="label-text">電話</label>
                  <input
                    id="phone-number"
                    type="text"
                    placeholder="請輸入行動電話"
                    v-model="formData.phoneNumber"
                  />
                </div>
                <div class="form-row email">
                  <label for="" class="label-text">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="請輸入電子郵件"
                    v-model="formData.email"
                  />
                </div>
                <div class="form-row location">
                  <label for="" class="label-text">縣市</label>
                  <div class="select-wrapper d-inline-block">
                    <select
                      name="a-location"
                      id="a-location"
                      required
                      v-model="formData.location"
                    >
                      <option value="" disabled selected>請選擇縣市</option>
                      <option value="Taipei">台北</option>
                      <option value="Taichung">台中</option>
                      <option value="Tainan">台南</option>
                      <option value="Kaohsiung">高雄</option>
                    </select>
                  </div>
                </div>
                <div class="form-row address">
                  <label for="" class="label-text">地址</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="請輸入地址"
                    v-model="formData.address"
                  />
                </div>
              </div>
            </div>
            <!-- part 2 -->
            <div class="part" :class="{ 'd-none': stepNow !== 2 }">
              <h4 class="form-title">運送方式</h4>
              <div class="forms">
                <div
                  class="form-row delivery-option"
                  :class="{ active: getDeliveryFeeInNum === 0 }"
                >
                  <input
                    type="radio"
                    name="delivery-option"
                    id="delivery-standard"
                    value="0"
                    v-model="formData.deliveryFee"
                  />
                  <label for="" class="label-text delivery-info">
                    <p class="delivery-standard">標準運送</p>
                    <p class="delivery-time">約3~7個工作天</p>
                  </label>
                  <p class="delivery-price">免費</p>
                </div>
                <div
                  class="form-row delivery-option"
                  :class="{ active: getDeliveryFeeInNum === 500 }"
                >
                  <input
                    type="radio"
                    name="delivery-option"
                    id="delivery-DHL"
                    value="500"
                    v-model="formData.deliveryFee"
                  />
                  <label for="" class="label-text delivery-info">
                    <p class="delivery-DHL">DHL貨運</p>
                    <p class="delivery-time">48小時內送達</p>
                  </label>
                  <p class="delivery-price">$500</p>
                </div>
              </div>
            </div>
            <!-- part 3 -->
            <div class="part" :class="{ 'd-none': stepNow !== 3 }">
              <h4 class="form-title">付款資訊</h4>
              <div class="forms">
                <div class="form-row cardholder">
                  <label for="" class="label-text">持卡人姓名</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    v-model="formData.cardholder"
                  />
                </div>
                <div class="form-row card-number">
                  <label for="" class="label-text">卡號</label>
                  <input
                    id="card-number"
                    type="text"
                    placeholder="1111 2222 3333 4444"
                    v-model="formData.cardNumber"
                  />
                </div>
                <div class="card-date-code">
                  <div class="form-row expiration-date">
                    <label for="" class="label-text">有效期限</label>
                    <input
                      id="expiration-date"
                      type="text"
                      placeholder="MM/YY"
                      v-model="formData.cardExpirationDate"
                    />
                  </div>
                  <div class="form-row security-code">
                    <label for="" class="label-text">CVC/CCV</label>
                    <input
                      id="security-code"
                      type="text"
                      placeholder="123"
                      v-model="formData.cardSecurityCode"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="btn-control" class="btn-panel">
      <div class="btn-panel-container d-flex justify-content-between">
        <button
          class="btn-previous btn"
          @click.stop.prevent="previousStep"
          :class="{ 'v-hidden': stepNow === 1 }"
        >
          ←　上一步
        </button>
        <button
          class="btn-next btn"
          @click.stop.prevent="nextStep"
          v-if="stepNow < 3"
        >
          →　下一步
        </button>
        <button class="btn-next btn" v-else>
          確認下單
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "./Step.vue";
const STORAGE_KEY = "alpha-shop-vue";
export default {
  name: "Form",
  components: {
    Step
  },
  data() {
    return {
      stepNow: 1,
      formData: {
        salutation: "Mr.",
        name: "",
        phoneNumber: "",
        email: "",
        location: "",
        address: "",
        deliveryFee: "0",
        cardholder: "",
        cardNumber: "",
        cardExpirationDate: "",
        cardSecurityCode: "",
      },
    };
  },
  created() {
    // 拿出localStorage的資料
    this.formData= JSON.parse(localStorage.getItem(STORAGE_KEY) || {})
  },
  methods: {
    // 下一步
    nextStep() {
      if (this.stepNow < 3) {
        this.stepNow += 1
      }
      return
    },
    // 上一步
    previousStep() {
      if (this.stepNow > 1) {
        this.stepNow -= 1
      }
      return
    },
    // 把資料存入localStorage
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.formData))
    }
  },
  computed: {
    // 將運費由字串轉換成數字
    getDeliveryFeeInNum() {
      this.$emit('get-delivery-fee', Number(this.formData.deliveryFee))
      return Number(this.formData.deliveryFee);
    },
  },
  watch: {
    // 當formData資料變化就存進localStorage中
    formData: {
      handler: function() {
        this.saveStorage()
      },
      deep: true
    }
  }
};
</script>