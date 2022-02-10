describe("search and assert", () => {
  describe("Customer is able to search in BNN website", () => {
    before(() => {
      cy.visit("https://www.bnn.in.th/th");
    });
    it("user search iphone 13", () => {
      cy.get('[type="search"]').eq(2).type("iphone13 ");
      cy.get('[data-icon="search"]').eq(0).click();
      cy.contains("Apple iPhone 13 ").should("contain", "Apple iPhone 13");
    });
    it("user search not found", () => {
      cy.get('[type="search"]').eq(2).clear().type("not found ");
      cy.get('[data-icon="search"]').eq(0).click();
      cy.get(".product-list-not-found .title").should(
        "contain",
        "ไม่พบข้อมูลที่คุณกำลังค้นหา"
      );
    });
  });

  describe("search firster web site", () => {
    before(() => {
      cy.visit("https://beauty.firster.com/");
    });
    it("user search perfume", () => {
      cy.get(".ant-input").type("perfume");
      cy.get(".ant-input-prefix").click();
      cy.get(
        '[data-id="search-result-product-card-info-group-box-P100003803"]'
      ).should("contain", "COACH Dream Perfume EDP");
    });
    it("user search not found", () => {
      cy.get(".ant-input").eq(0).type("test123213");
      cy.get(".ant-input-prefix").eq(0).click();
      cy.contains("เราไม่พบผลลัพธ์ใด ๆ สำหรับ").should(
        "contain.text",
        "เราไม่พบผลลัพธ์ใด ๆ สำหรับ"
      );
    });
  });

  describe("search  powerbuy site", () => {
    before(() => {
      cy.visit("https://www.powerbuy.co.th/th");
    });
    it("user search jbl", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get('[id="txt-searchBox-input"]').eq(0).type("jbl");
      cy.get('[id="btn-searchBox-input"]').eq(0).click();

      cy.get(
        '[data-product-name="ลำโพงเชื่อมต่อไร้สาย (สี Black) รุ่น Flip Essential"]'
      ).should(
        "contain",
        "ลำโพงเชื่อมต่อไร้สาย (สี Black) รุ่น Flip Essential"
      );
    });
    it("user search not found", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get('[id="txt-searchBox-input"]').eq(0).type("jbl");
      cy.get('[id="btn-searchBox-input"]').eq(0).click();
      cy.get(".SearchNotFound__SearchNotFoundContainer-glaJSQ.bGBegY").should(
        "contain",
        `ขออภัย! การค้นหาของคุณ "jbljbl" ไม่ตรงกับสินค้าใดเลย`
      );
    });
  });

  describe("search kingpower site", () => {
    before(() => {
      cy.visit("https://www.kingpower.com/?lang=en");
    });
    it("user search dior", () => {
      cy.get('[id="modal-banner-close"]').click();
      cy.get(".SearchSuggestionForm__InputWrapper-sc-73mav-1").type("dior");
      cy.get(".SearchSuggestionForm__InputWrapper-sc-73mav-1").should(
        "have.value",
        "dior"
      );

      cy.get(".SearchSuggestionForm__SearchIcon-sc-73mav-6").click();
      cy.get('[id="product-item-name-0"]').should("contain", "DIOR Rouge Dior");
    });
    it("user search not found", () => {
      cy.get('[id="header-search-box"]').type("notfounddd");
      cy.get("[id=header-search-box-button]").click();
      cy.get('[id="not-found-result-search-title-label"]').should(
        "contain",
        `Sorry, we didn't find anything for`
      );
    });
  });
});
