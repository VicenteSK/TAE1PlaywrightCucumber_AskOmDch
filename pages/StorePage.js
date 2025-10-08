class StorePage {
  constructor(page) {
    this.page = page;
    this.storeButton = '#menu-item-1227 > a';
    this.searchInput = '#woocommerce-product-search-field-0';
    this.searchButton = '#woocommerce_product_search-1 > form > button';
    this.resultsMessage = '#main > div > p';
  }

  async gotoStore() {
    await this.page.click(this.storeButton);
    await this.page.waitForURL('https://askomdch.com/store/');
  }

  async searchProduct(product) {
    await this.page.fill(this.searchInput, product);
    await this.page.click(this.searchButton);
  }

  async getResultsMessage() {
    return await this.page.textContent(this.resultsMessage);
  }
}

module.exports = StorePage;
