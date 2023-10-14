function Shop($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main>
       샵 페이지입니다.
      </main>
    `;
  };
  this.render();
}

export default Shop;
