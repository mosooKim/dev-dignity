<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected>Open this select menu</option>
            <option value="1">마우스</option>
            <option value="2">키보드</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-lx-3 col-lg-4 col-md-6" :key="i" v-for="(product,i) in productList">
          <div class="card" style="width: 18rem;">
            <a href="goToDetail(product.id);"><img :src="product.path" class="card-img-top" alt="..."></a>
            <div class="card-body">
              <h5 class="card-title">{{product.product_name}}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white mr-1">{{product.category1}}</span>
                <span class="badge bg-dark text-white mr-1">{{product.category2}}</span>
                <span class="badge bg-dark text-white mr-1">{{product.category3}}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">{{product.product_price}}원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3391474364/B.jpg?838000000" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍 코리아 정품 MX Vertical 인체공학 무선 마우스</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">129,000원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/v2/2/9/6/1/5/8/USHPy/2553296158_145824405.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍코리아 정품 무선키보드 MX KEYS[백라이트/윈&맥OS 호환/유니파잉+블루투스]</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">129,000원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/v2/2/6/9/0/9/5/RzDLr/1917269095_145823893.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">K480 무선 블루투스 키보드</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">29,900원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://asset.m-gs.kr/prod/1024764003/1/550" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍코리아 MX Vertical LIFT 인체공학 무선 블루투스 마우스</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">79,000원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3391474364/B.jpg?838000000" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍 코리아 정품 MX Vertical 인체공학 무선 마우스</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">129,000원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/v2/2/9/6/1/5/8/USHPy/2553296158_145824405.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">로지텍코리아 정품 무선키보드 MX KEYS[백라이트/윈&맥OS 호환/유니파잉+블루투스]</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">129,000원</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card" style="width: 18rem;">
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/v2/2/6/9/0/9/5/RzDLr/1917269095_145823893.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">K480 무선 블루투스 키보드</h5>
              <p class="card-text">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">컴퓨터</span>
                <span class="badge bg-dark">악세사리</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                </div>
                <small class="text-dark">29,900원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    async getProductList () {
      this.productList = await this.$api('/api/productList', {})
      console.log(this.productList)
    },
    // eslint-disable-next-line camelcase
    goToDetail (product_id) {
      this.$router.push({ path: '/detail', query: { product_id: product_id } })
    }
  }
}
</script>
