describe('Login Test Scenarios', () => {
  // --- ĐOẠN CODE XỬ LÝ LỖI TRANG WEB (QUAN TRỌNG) ---
  // Bảo Cypress bỏ qua các lỗi JS nội bộ của trang web để bài test không bị Fail
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  // Kịch bản 1: Kiểm tra đăng nhập thành công
  it('Should login successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  // Kịch bản 2: Kiểm tra đăng nhập thất bại
  it('Should show error message with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    
    // Đoạn này kiểm tra thông báo lỗi như yêu cầu
    cy.get('.error-message-container').should('contain', 'Username and password do not match');
  });
});