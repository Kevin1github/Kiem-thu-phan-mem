describe('Login Test Scenarios', () => {
  // --- ĐOẠN CODE XỬ LÝ LỖI TRANG WEB (QUAN TRỌNG) ---
  // Bảo Cypress bỏ qua các lỗi JS nội bộ của trang web để bài test không bị Fail
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // Kịch bản 3: Thêm sản phẩm vào giỏ
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Sắp xếp giá thấp đến cao
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // Bài tập thêm 1: Xóa sản phẩm
  it('Should remove a product from the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click(); // Thêm
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.inventory_item').first().find('.btn_inventory').click(); // Xóa (Click lại nút đó)
    cy.get('.shopping_cart_badge').should('not.exist'); // Kiểm tra số 1 biến mất
  });

  // Bài tập thêm 2: Quy trình thanh toán (Checkout)
  it('Should complete the checkout process successfully', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click(); // Thêm sp
    cy.get('.shopping_cart_link').click(); // Vào giỏ hàng
    cy.get('#checkout').click(); // Nhấn Checkout
    
    // Điền thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    
    cy.get('#continue').click(); // Tiếp tục
    cy.url().should('include', '/checkout-step-two.html'); // Kiểm tra trang đích
  });
});