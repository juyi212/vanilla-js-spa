function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main>
       상품 페이지입니다.
      </main>
    `;
  };
  this.render();
}

export default Post;
